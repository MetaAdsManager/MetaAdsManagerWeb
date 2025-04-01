/** @format */

import { EditOutlined } from '@ant-design/icons';
import { ModalForm, ProFormDependency, ProFormDigit, ProFormRadio } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { api } from '@MetaAdsManager/backend-api';
import {
    GoodsSkuDTO,
    GoodsVO,
    SkuStockAndPriceParam
} from '@MetaAdsManager/backend-api/src/request/data-contracts';
import useProTableForm from '@MetaAdsManager/backend-pro/src/hooks/useProTableForm';
import { Card, message, Image, Button, Space } from 'antd';
import { FC, memo, useEffect, useMemo, useRef, useState } from 'react';
import useGoodSkuColumns from '../../hooks/useGoodSkuColumns';
import { EChangeStockType, EChangeType, EGoodStockOps, MGoodStockOps } from './const';
import { EGoodsType } from '@MetaAdsManager/shop-data/goods/enums/EGoodsType';
import styles from './index.module.less';
import { ESaleTypeEnum } from '../../enums/goods';
import mmCurrenty from '@MetaAdsManager/utils/src/mmCurrency';

interface IGoodsStockProps {
    service: ReturnType<typeof useService>;
}

const Component: FC<IGoodsStockProps> = (props) => {
    const { service } = props;

    const isIntegralGoods = service.detail.goodsType === EGoodsType.Integral;

    useEffect(() => {
        const { visible, form } = service.modalProps;
        if (visible) {
            const { salesPrice = 0, saleScore = 0 } = service.editSkuRef.current;
            form.setFieldsValue({ salesPrice, saleScore });
        }
    }, [service]);

    console.log('service', service);

    return (
        <PageContainer
            loading={service.loading}
            className={styles.employeeManagementStyle}
            footer={[
                <Button key='rest' onClick={() => history.back()}>
                    返回
                </Button>
            ]}
        >
            <Card>
                <ProTable
                    toolBarRender={false}
                    search={false}
                    columns={service.columns}
                    dataSource={service.detail.goodsSkuDetailList || []}
                    rowKey='specIds'
                    pagination={false}
                />
            </Card>

            <ModalForm
                {...service.modalProps}
                onFinish={service.handleFormFinish}
                title={service.title}
            >
                {/* 递增修改 */}
                {service.changeType === EChangeType.stock &&
                    service.changeStockType === EChangeStockType.Progressive && (
                        <>
                            <ProFormRadio.Group
                                label='操作'
                                name='operation'
                                initialValue={EGoodStockOps.add}
                                valueEnum={MGoodStockOps}
                            />

                            <ProFormDependency name={['operation']}>
                                {({ operation }) => {
                                    return (
                                        <ProFormDigit
                                            label='数量'
                                            name='count'
                                            initialValue={1}
                                            rules={[{ required: true }]}
                                            fieldProps={{
                                                min: 1,
                                                max: 99999,
                                                precision: 0,
                                                addonBefore:
                                                    operation === EGoodStockOps.add ? '+' : '-'
                                            }}
                                        />
                                    );
                                }}
                            </ProFormDependency>
                        </>
                    )}
                {/* 直接修改 */}
                {service.changeType === EChangeType.stock &&
                    service.changeStockType === EChangeStockType.Direct && (
                        <ProFormDigit
                            label='数量'
                            name='count'
                            rules={[{ required: true }]}
                            fieldProps={{
                                min: 1,
                                max: 99999,
                                precision: 0,
                                placeholder: '请输入需要修改的库存数量'
                            }}
                        />
                    )}

                {service.changeType === EChangeType.price && (
                    <>
                        {service.editSkuRef.current?.saleType !== ESaleTypeEnum.Score && (
                            <ProFormDigit
                                label='价格'
                                name='salesPrice'
                                rules={[{ required: true }]}
                                fieldProps={{
                                    min: isIntegralGoods ? 0 : 0.01,
                                    max: 99999,
                                    precision: 2,
                                    placeholder: '请输入修改的价格'
                                }}
                            />
                        )}
                        {service.editSkuRef.current?.saleType !== ESaleTypeEnum.Cash &&
                            service.editSkuRef.current?.saleType !== ESaleTypeEnum.Rsx && (
                                <ProFormDigit
                                    label='积分'
                                    name='saleScore'
                                    rules={[{ required: true }]}
                                    fieldProps={{
                                        min: 0,
                                        max: 99999,
                                        placeholder: '请输入修改的积分'
                                    }}
                                />
                            )}
                    </>
                )}
            </ModalForm>
        </PageContainer>
    );
};

const MMGoodsStockPage = memo(Component);
export default MMGoodsStockPage;

export interface IUseServiceProps {
    goodsNo: string;

    /**
     * 是否显示销售价列
     * @default true
     */
    showPrice?: boolean;
}

export function useService(props: IUseServiceProps) {
    const { showPrice = true } = props;
    const [loading, setLoading] = useState(true); // 加载中

    const [detail, setDetail] = useState<GoodsVO>({}); // 商品详情数据

    const [changeType, setChangeType] = useState(EChangeType.stock); // 修复类型 修改库存 修改价格

    const [changeStockType] = useState(EChangeStockType.Progressive); // 库存修改方式

    const editSkuRef = useRef<GoodsSkuDTO | null>(null);

    const [skuColumns] = useGoodSkuColumns(detail); // 处理sku列

    // 表格列
    const columns = useMemo(() => {
        const priceColumn: any[] = showPrice
            ? [
                  {
                      dataIndex: 'salesPrice',
                      title: '销售价',
                      valueType: 'money',
                      render(_, record) {
                          return (
                              <a
                                  onClick={() => {
                                      editSkuRef.current = record;
                                      setChangeType(EChangeType.price);
                                      setVisible(true);
                                      setTitle('修改销售价');
                                  }}
                              >
                                  {Number(record.saleType) === ESaleTypeEnum.Cash &&
                                      mmCurrenty(record.salesPrice)}
                                  {Number(record.saleType) === ESaleTypeEnum.Score &&
                                      record.saleScore + '积分'}
                                  {Number(record.saleType) === ESaleTypeEnum.All &&
                                      `${mmCurrenty(record.salesPrice)} + ${record.saleScore}`}
                                  {Number(record.saleType) === ESaleTypeEnum.Rsx &&
                                      `${Number(record.salesPrice).toFixed(2)}心`}
                              </a>
                          );
                      }
                  }
              ]
            : [];
        const commonColumns: ProColumns<any>[] = [
            {
                dataIndex: 'stock',
                title: '库存',
                render: (va, record) => {
                    return (
                        <a
                            onClick={() => {
                                editSkuRef.current = record;
                                setChangeType(EChangeType.stock);
                                setVisible(true);
                                setTitle('修改库存');
                            }}
                        >
                            {va}
                        </a>
                    );
                }
            },
            {
                dataIndex: 'enabled',
                title: '启用',
                render: (_, { enabled }) => (enabled ? '是' : '否')
            }
        ];
        return skuColumns.concat(priceColumn, commonColumns);
    }, [skuColumns, showPrice]);

    // const columns: ProColumns[] = [
    //     { title: '尺码', dataIndex: '', hideInSearch: true },
    //     {
    //         title: 'sku图片',
    //         dataIndex: '',
    //         hideInSearch: true,
    //         renderText: (url) => <Image src={url} />
    //     },
    //     { title: 'sku编码', dataIndex: '', hideInSearch: true },
    //     { title: '销售价', dataIndex: 'salesPrice', hideInSearch: true },
    //     { title: '库存', dataIndex: 'stock', hideInSearch: true },
    //     {
    //         title: '启用',
    //         dataIndex: 'enabled',
    //         hideInSearch: true,
    //         render: (_, { enabled }) => (enabled ? '是' : '否')
    //     }
    // ];

    useEffect(() => {
        getDetail();
    }, []);

    const { modalProps, setVisible } = useProTableForm({ title: () => '修改库存' });
    const [title, setTitle] = useState('');

    /**
     * 处理表单finish
     * @param data
     * @returns
     */
    const handleFormFinish = async (data) => {
        const { operation, count, salesPrice, saleScore } = data;
        const params: SkuStockAndPriceParam = {
            goodsNo: detail.goodsNo,
            skuNo: editSkuRef.current?.skuNo
        };

        // 修改库存
        if (changeType === EChangeType.stock) {
            let stock = editSkuRef.current!.stock!;
            // 如果是递进库存。则计算实际改动库存
            if (changeStockType === EChangeStockType.Progressive) {
                const diff = operation === EGoodStockOps.add ? count : -count;
                stock += diff;
                if (stock < 0) {
                    message.warn('库存减少不能超过当前剩余库存');
                    return false;
                }
            } else {
                stock = count;
            }

            params.stock = stock;
        } else {
            // 修改价格
            params.salesPrice = salesPrice;
            params.saleScore = saleScore;
        }

        try {
            await api['/admin/goods/updateSku_PUT'](params);
            message.success('修改成功');
            editSkuRef.current = null;
            setVisible(false);
            await getDetail();
            return true;
        } catch (error) {
            message.error('保存失败');
        }

        return false;
    };

    /**
     * 查询商品详情
     */
    async function getDetail() {
        if (props.goodsNo) {
            setLoading(true);
            const { data = {} } = await api['/admin/goods/{no}_GET'](props.goodsNo);
            const { goodsSkuDetailList = [], saleType } = data;
            const newData = goodsSkuDetailList.map((item) => ({ ...item, saleType }));
            setDetail({ ...data, goodsSkuDetailList: newData });
            setLoading(false);
        }
    }

    return {
        loading,
        columns,
        detail,
        changeType,
        changeStockType,
        modalProps,
        handleFormFinish,
        editSkuRef,
        title,
        setTitle
    };
}
