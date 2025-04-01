/** @format */

import ProTable from '@ant-design/pro-table';
import { AdminGoodsGetParams, GoodsVO } from '@MetaAdsManager/backend-api/src/request/data-contracts';
import AlbumColumn from '@MetaAdsManager/backend-pro/src/components/table/albumColumn';
import { Button, Drawer, DrawerProps, Space, Typography } from 'antd';
import { MMProColumns } from 'MMProType';
import { FC, memo, useEffect, useState } from 'react';
import useGoodClassifyColumn from '../../../hooks/good/useGoodClassifyColumn';
import useGoodRequest from '../../../hooks/good/useGoodRequest';
import { RowSelectionType } from 'antd/lib/table/interface';
import mmCurrenty from '@MetaAdsManager/utils/src/mmCurrency';
import useProTableRequest from '@MetaAdsManager/backend-pro/src/hooks/useProTableRequest';
import { api } from '@MetaAdsManager/backend-api';
import {
    getClassifyValues,
    setClassifyValues
} from '../../../pages/goodsManagement/goodsClassify/const';

/**
 * 销售方式
 */
enum ESaleTypeEnum {
    Cash = 1, // 纯现金
    Score = 2, // 纯积分
    All = 3 // 现金 + 积分
}
export interface IChooseGoodsDrawerProps extends DrawerProps {
    value: string[];
    /** 表格复选框的类型 checkbox | radio */
    rowSelectionType?: RowSelectionType;
    /** 活动类型 */
    activityType?: any;
    /** 额外请求参数 */
    requestParams?(): { [P in keyof AdminGoodsGetParams]: any };

    onOk(value: string[]): void;
}

/**
 *
 * FIXME: 此文件是复制的backend-shop/src/components/goods中的文件。文件内容
 * 基本一致，后期可直接使用此组件替换
 * @param props
 * @returns
 */
const Component: FC<IChooseGoodsDrawerProps> = (props) => {
    const {
        value,
        visible,
        requestParams,
        onClose,
        activityType,
        onOk,
        rowSelectionType = 'checkbox',
        ...drawerProps
    } = props;

    const [classifyColumn] = useGoodClassifyColumn();
    const { request, dataSource: dataSourceRef } = useProTableRequest(
        async (params: any) => api['/admin/goods_GET'](params),
        {
            paramsFormat(params) {
                let { classifys, ...rest } = params;
                //   处理商品分类
                if (classifys?.length) {
                    const classify = getClassifyValues(classifys);
                    rest = { ...rest, ...classify };
                }
                /** 拼团/秒杀活动 */
                if (activityType && (activityType === 'timeBuy' || activityType === 'group')) {
                    rest.saleType = 1;
                }
                return rest;
            },
            dataFormat: (data) => {
                return data.map((it) => {
                    return {
                        ...it,
                        classifys: setClassifyValues(it)
                    };
                });
            }
        }
    );
    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

    const [chooseColumns] = useState<MMProColumns<GoodsVO>[]>([
        { title: '商品编号', dataIndex: 'goodsNo' },
        { title: '商品名称', dataIndex: 'goodsName' },
        {
            title: '商品icon',
            dataIndex: 'coverImg',
            hideInSearch: true,
            render: (value: any) => <AlbumColumn value={value} width={60} />
        },
        classifyColumn,
        {
            title: '价格',
            dataIndex: 'salePrice',
            valueType: 'money',
            hideInSearch: true,
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
                    </>
                );
            }
        },
        { title: '总库存', dataIndex: 'stock', hideInSearch: true },
        { title: '销量', dataIndex: 'actualSales', hideInSearch: true },
        {
            title: '上架状态',
            dataIndex: 'shelved',
            hideInSearch: true,
            renderText: (shelved: boolean) => (shelved ? '上架' : '下架')
        }
    ]);

    useEffect(() => {
        setSelectedRowKeys(visible ? [...value] : []);
    }, [visible]);

    const handleOk = () => {
        // const values = [...new Set(value.concat(selectedRowKeys))]
        onOk(selectedRowKeys);
    };

    return (
        <Drawer
            title='选择商品'
            width='60%'
            visible={visible}
            closable={false}
            maskClosable={false}
            footer={
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Space>
                        <Button onClick={(ev: any) => onClose?.(ev)}>取消</Button>
                        <Button type='primary' onClick={handleOk}>
                            确定
                        </Button>
                    </Space>
                </div>
            }
            {...drawerProps}
        >
            <ProTable
                columns={chooseColumns}
                rowKey='goodsNo'
                toolBarRender={false}
                tableAlertRender={false}
                tableAlertOptionRender={false}
                size='small'
                rowSelection={{
                    selectedRowKeys,
                    type: rowSelectionType,
                    onChange: (keys: any[]) => {
                        // 去除当前列的keys
                        const currentRowIds = dataSourceRef.current!.map((item) => item.goodsNo);
                        const otherKeys = value.filter(
                            (item) => currentRowIds.indexOf(item) === -1
                        );
                        // 合并所有的列
                        setSelectedRowKeys([...new Set([...keys, ...otherKeys])]);
                    }
                }}
                request={(params, ...args) => {
                    return request({ ...params, ...requestParams?.(), rushixin: false }, ...args);
                }}
            />
        </Drawer>
    );
};

Component.displayName = 'ChooseGoodsDrawer';

const ChooseGoodsDrawer = memo(Component);
export default ChooseGoodsDrawer;
