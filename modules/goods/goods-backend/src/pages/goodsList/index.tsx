/** @format */

import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { OGoodStatus } from '@MetaAdsManager-modules/goods-data/src/enums/EGoodStatus';
import { api } from '@MetaAdsManager/backend-api/src/request';
import { GoodsVO } from '@MetaAdsManager/backend-api/src/request/data-contracts';
import OperationsColumns from '@MetaAdsManager/backend-pro/src/components/table/operationsColumns';
import StatusSwitchColumn from '@MetaAdsManager/backend-pro/src/components/table/statusSwitchColumn';
import { Button, message, Modal, Typography, Image } from 'antd';
import {
    ModalForm,
    ProFormText
} from '@ant-design/pro-form';
import { concatRule } from '@MetaAdsManager/form-rules';
import { useForm } from 'antd/lib/form/Form';
import { MMProColumns } from 'MMProType';
import { FC, memo, useEffect, useMemo, useState } from 'react';
import useGood from '../../hooks/useGood';
import styles from './index.module.less';
import { ESaleTypeEnum } from '../../enums/goods';
import mmCurrenty from '@MetaAdsManager/utils/src/mmCurrency';
import { WarningFilled } from '@ant-design/icons';
import requestInstance from '@MetaAdsManager/backend-api/src/request/instance';


interface IGoodsListProps {
    service: ReturnType<typeof useService>;

    open: boolean;
    good: GoodsVO;
    /**
     * 页面根路径
     */
    rootUrl: string;
    /**
     * 关闭
     */
    setOpen: any;

    /**
     * 点击新增
     */
    onAdd(): void;
}

const Component: FC<IGoodsListProps> = (props) => {
    const { service, open, good, setOpen, rootUrl } = props;
    const { statistics } = service;
    const links = useMemo(() => {
        return [
            {
                link: `/pages/goods/goodDetail/index?goodsNo=${good.goodsNo}&liveId=`,
                name: '小程序链接:'
            },
            {
                link: `${rootUrl}/#/pages/goods/goodDetail/index?goodsNo=${good.goodsNo}&liveId=`,
                name: 'H5链接:'
            }
        ];
    }, [good]);
    const [ids, setIds] = useState([]);
    const onSwitch = (status) => {
        if (!ids.length) {
            return message.error('切换的内容不能为空');
        }
        Modal.confirm({
            title: `批量${status ? '上' : '下'}架`,
            content: `确认${status ? '上' : '下'}架全部已选择商品？`,
            async onOk() {
                await requestInstance({
                    url: '/admin/goods/batchShelved',
                    method: 'PUT',
                    data: {
                        status,
                        noList: ids
                    }
                });
                message.success('切换成功');
                setIds([]);
                service.actionRef.current?.reload();
            }
        });
    };
    async function updateTable() {
        try {
            await requestInstance({
                url: '/admin/goods/cleanGoodsCache',
                method: 'POST',
                data: {

                }
            });
            service.actionRef.current?.reload();
            message.success('更新成功');
        } catch (error) { }
    }
    const onDeliverFinish = async (val) => {
        const deliveryMaxNum = service.signForm?.getFieldValue('deliveryMaxNum');
        const skuNo = service.signForm?.getFieldValue('skuNo');
        await requestInstance({
            url: '/admin/farm/saveFromGoods',
            method: 'POST',
            data: {
                deliveryMaxNum,
                goodsId: service.goodsId,
                skuNo
            }
        });
        service.signForm.resetFields()
        service.setDeliverVisible(false)
        message.success('登记成功');
    }
    return (
        <PageContainer className={styles.goodsListStyle}>
            <ProTable
                actionRef={service.actionRef}
                formRef={service.formRef}
                rowKey='goodsNo'
                rowSelection={{
                    type: 'checkbox',
                    selectedRowKeys: ids,
                    onChange: setIds
                }}
                columns={service.columns}
                params={{ statisticsType: service.activeKey }}
                request={(...args) => {
                    requestAnimationFrame(() => service.getStatistics())
                    return service.request(...args)
                }}
                search={{
                    defaultCollapsed: false,
                    labelWidth: 'auto',
                    optionRender(searchConfig, props, dom) {
                        return [
                            <Button
                                type='primary'
                                key={'update'}
                                onClick={() => updateTable()}
                            >
                                更新商品缓存
                            </Button>,
                            ...dom
                        ];
                    }
                }}
                scroll={{ x: 1500 }}
                pagination={{
                    defaultPageSize: 10
                }}
                toolbar={{
                    menu: {
                        type: 'tab',
                        activeKey: service.activeKey,
                        onChange: service.setActiveKey as any,
                        items: [
                            {
                                key: '0',
                                label: `全部(${statistics.totalNum ?? 0})`,
                            },
                            {
                                key: '1',
                                label: `售卖中(${statistics.onSaleNum ?? 0})`,
                            },
                            {
                                key: '2',
                                label: `已售罄(${statistics.soldOutNum ?? 0})`,
                            },
                            {
                                key: '3',
                                label: `未上架(${statistics.notShelvedNum ?? 0})`,
                            },
                        ],
                    }
                }}
                toolBarRender={() => [
                    <Button key='add' type='primary' onClick={props.onAdd}>
                        新增
                    </Button>,
                    // <Button
                    //     key='report'
                    //     loading={service.exportLoading}
                    //     onClick={() => service.exportTable(service.params.current)}
                    // >
                    //     导出
                    // </Button>,
                    <Button type='primary' onClick={onSwitch.bind(null, true)}>
                        批量上架
                    </Button>,
                    <Button type='primary' onClick={onSwitch.bind(null, false)}>
                        批量下架
                    </Button>
                ]}
            />
            <Modal
                visible={open}
                width={900}
                title='页面链接'
                onCancel={() => setOpen(false)}
                footer={[]}
            >
                {links.map((item, index) => (
                    <Typography.Paragraph key={index} copyable={{ text: item.link }}>
                        {item.name} {item.link}
                    </Typography.Paragraph>
                ))}
            </Modal>
            <ModalForm
                title='菜地配送登记'
                form={service.signForm}
                visible={service.deliverVisible}
                onVisibleChange={service.setDeliverVisible}
                onFinish={onDeliverFinish}
                layout="horizontal"
                labelCol={{ span: 6 }}
                width={600}
            >
                <ProFormText
                    label='配送总次数设置：'
                    name='deliveryMaxNum'
                    rules={concatRule(['required'])}
                    fieldProps={{}}
                />
                <ProFormText
                    label='配送蔬菜的sku编码：'
                    name='skuNo'
                    rules={concatRule(['required'])}
                    fieldProps={{}}
                />
            </ModalForm>
        </PageContainer>
    );
};

const MMGoodsListPage = memo(Component);
export default MMGoodsListPage;

interface IUseServiceProps<T = GoodsVO> {
    /**
     * 点击编辑
     */
    onEdit?(record: T, index: number): void;

    /**
     * 点击复制
     * @param record
     * @param index
     */
    onCopy?(record: T, index: number): void;

    /**
     * 点击详情
     * @param record
     * @param index
     */
    onDetail?(record: T, index: number): void;

    /**
     * 点击库存管理
     */
    onStock?(record: T, index: number): void;

    /**
     * 复制链接
     */
    onCopyLink?(record: T, index: number): void;
    onTop(record: T, index: number): void;

}

export function useService(props: IUseServiceProps) {
    const { request, column, actionRef, formRef, exportTable, exportLoading, params, DATA } = useGood();
    const [columns] = useState(() => {
        return [
            { title: '序号', dataIndex: 'id', hideInSearch: true, width: 50 },
            {
                title: '主图',
                dataIndex: 'coverImg',
                hideInSearch: true,
                render: (_, { coverImg }) => <Image src={coverImg} />
            },
            { title: '商品编号', dataIndex: 'goodsNo' },
            { title: '商品名称', dataIndex: 'goodsName' },
            {
                title: '商品类型',
                dataIndex: 'virtualType',
                valueType: 'select',
                valueEnum: {
                    0: '实物商品',
                    1: '虚拟商品'
                }
            },
            {
                ...column.classifyColumn, render: (_, record) => {
                    return (
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span>{[record.classifyName1, record.classifyName2, record.classifyName3].filter(name => name).join(',')} </span>
                            {record.subClassifyName ? (<div><span className={styles.subClassifyName}>副选分类：</span>{record.subClassifyName}</div>) : null}
                        </div>
                    );
                }
            },
            // { title: '副选分类', dataIndex: 'subClassifyName' },
            {
                title: '商品价格',
                dataIndex: 'salePrice',
                hideInSearch: true,
                valueType: 'money',
                width: 120,
                render: (_, record) => {
                    return (
                        <>
                            {record.saleType === ESaleTypeEnum.Cash && (
                                <Typography.Text>{mmCurrenty(record.salePrice)}</Typography.Text>
                            )}
                            {record.saleType === ESaleTypeEnum.Score && (
                                <Typography.Text>{record.saleScore}积分</Typography.Text>
                            )}
                            {record.saleType === ESaleTypeEnum.All && (
                                <Typography.Text>
                                    {mmCurrenty(record.salePrice)}+{record.saleScore}积分
                                </Typography.Text>
                            )}
                            {record.saleType === ESaleTypeEnum.Rsx && (
                                <Typography.Text>
                                    {Number(record.salePrice).toFixed(2)}心
                                </Typography.Text>
                            )}
                        </>
                    );
                }
            },
            { title: '实际销量', dataIndex: 'actualSales', hideInSearch: true, width: 80 },
            {
                title: '库存',
                dataIndex: 'stock',
                hideInSearch: true,
                width: 80,
                render: (_, item, index) => (
                    <div
                        style={{ display: 'flex', alignItems: 'center' }}
                    // onClick={() => props.onDetail?.(item, index)}
                    >
                        {item.stock}
                        {!!item.stockWarn && (
                            <WarningFilled
                                style={{ fontSize: 24, color: 'red', marginLeft: 10 }}
                                onClick={() => props.onTop?.(item, index)}
                            />
                        )}
                    </div>
                )
            },
            {
                title: '商品状态',
                dataIndex: 'shelved',
                valueType: 'select',
                fieldProps: () => ({ options: OGoodStatus }),
                width: 80,
                render: (_, record) => {
                    return (
                        <StatusSwitchColumn
                            checkedChildren='上架'
                            unCheckedChildren='下架'
                            checked={record.shelved}
                            onSwitch={(checked) => handleToggleGoodStatus(checked, record.goodsNo!)}
                        />
                    );
                }
            },
            {
                title: '前台可见',
                dataIndex: 'frontShow',
                width: 80,
                valueType: 'select',
                valueEnum: {
                    0: '隐藏',
                    1: '显示'
                },
                render: (_, record) => {
                    return (
                        <StatusSwitchColumn
                            checkedChildren='显示'
                            unCheckedChildren='隐藏'
                            checked={record.frontShow}
                            onSwitch={(checked) => handleToggleFrontShow(checked, record.goodsNo!)}
                        />
                    );
                }
            },
            { title: '排序值', dataIndex: 'sort', hideInSearch: true, width: 80 },
            {
                title: '操作',
                dataIndex: 'option',
                valueType: 'option',
                width: 300,
                fixed: 'right',
                render: (_, record, index) => (
                    <OperationsColumns
                        operations={[
                            {
                                id: 'copy',
                                text: <a onClick={() => props.onCopy?.(record, index)}>复制</a>
                            },
                            {
                                id: 'stock',
                                text: <a onClick={() => props.onStock?.(record, index)}>库存管理</a>
                            },
                            {
                                id: 'custom',
                                text: <a onClick={() => props.onDetail?.(record, index)}>详情</a>
                            },
                            {
                                id: 'edit',
                                show: !record.shelved,
                                onClick: () => props.onEdit?.(record, index)
                            },
                            {
                                id: 'del',
                                onClick: async () => {
                                    await requestInstance({
                                        url: `/admin/goods/delete/${record.id!}`,
                                        method: 'DELETE'
                                    });
                                    actionRef.current?.reload();
                                }
                            },
                            {
                                id: 'deliver',
                                show: record.classifyPid1 === 347,
                                text: <a onClick={() => onDeliver(record)}>菜地配送</a>
                            }
                        ]}
                    />
                )
            }
        ] as MMProColumns<GoodsVO>[];
    });

    // TODO:: 后端还没加查询参数
    const [activeKey, setActiveKey] = useState('0')

    const [statistics, setStatistics] = useState<{
        notShelvedNum?: number;
        onSaleNum?: number;
        soldOutNum?: number;
        totalNum?: number;
    }>({});

    function getStatistics() {
        requestInstance({
            url: '/admin/goods/statistics',
            method: 'GET',
            params: params.current
        }).then(({ data }: any) => {
            setStatistics(data || {})
        })
    }

    async function handleToggleGoodStatus(status: boolean, no: string) {
        try {
            await api['/admin/goods/shelved_PUT']({ no, status });
            actionRef.current?.reload();
            message.success('切换成功');
        } catch (error) { }
    }

    async function handleToggleFrontShow(status: boolean, no: string) {
        try {
            await api['/admin/activity/conflict/{goodsNo}_GET'](no);
            await api['/admin/goods/frontShow_PUT']({ no, status });
            actionRef.current?.reload();
            message.success('切换成功');
        } catch (error) { }
    }
    const [signForm] = useForm()
    const [deliverVisible, setDeliverVisible] = useState(false);
    const [goodsId, setGoodsIdId] = useState('');
    function onDeliver(record: any,) {
        setGoodsIdId('');
        signForm.resetFields();
        requestInstance({
            url: '/admin/farm/queryByGoodsId',
            method: 'GET',
            params: { goodsId: record.id }
        }).then(({ data }: any) => {
            setGoodsIdId(record.id);
            setDeliverVisible(true)
            data && signForm.setFieldsValue({ skuNo: data.skuNo ? data.skuNo : '', deliveryMaxNum: data.deliveryMaxNum ? data.deliveryMaxNum : '' })
        })

    };

    return {
        actionRef,
        formRef,
        columns,
        request,
        open,
        statistics,
        exportTable,
        exportLoading,
        params,
        getStatistics,
        activeKey,
        setActiveKey,
        DATA,
        deliverVisible,
        signForm,
        setDeliverVisible,
        goodsId
    };
}
