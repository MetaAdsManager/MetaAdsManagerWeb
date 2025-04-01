/** @format */

import { FC, memo, useState } from 'react';
import ProTable from '@ant-design/pro-table';
import { MMProColumns } from 'MMProType';
import useGoodClassifyColumn from '~/hooks/good/useGoodClassifyColumn';
import useGoodRequest from '~/hooks/good/useGoodRequest';
import { GoodsVO } from '~/request/data-contracts';
import { Typography } from 'antd';
import { ESaleTypeEnum } from '@MetaAdsManager-modules/goods-backend/src/enums/goods';
import mmCurrenty from '@MetaAdsManager/utils/src/mmCurrency';
import { api } from '~/request';
export interface IProps {
    value?: GoodsVO;
    onChange?(data: GoodsVO): void;
}

/**
 *  商品列表选择
 *
 * @param {*} props
 * @return {*}
 */
const Component: FC<IProps> = (props) => {
    const { value, onChange } = props;

    const [classifyColumn] = useGoodClassifyColumn();
    const { request } = useGoodRequest({ rushixin: false });

    const [chooseColumns] = useState<MMProColumns<GoodsVO>[]>([
        { title: '商品编号', dataIndex: 'goodsNo' },
        { title: '商品名称', dataIndex: 'goodsName' },
        // { title: '商品icon', dataIndex: 'coverImg', hideInSearch: true, render: (value: any) => <AlbumColumn value={value} /> },
        { ...classifyColumn, hideInTable: true },
        {
            title: '商品分组',
            dataIndex: 'groupId',
            valueType: 'select',
            hideInTable: true,
            request: async () => {
                const { data = {} } = await api['/admin/mall/group_GET']({});
                return data.list?.map((item) => ({ label: item.name, value: item.id })) || [];
            }
        },
        {
            title: '商品价格',
            dataIndex: 'salePrice',
            valueType: 'money',
            hideInSearch: true,
            width: 150,
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
        // { title: '总库存', dataIndex: 'stock', hideInSearch: true },
        // { title: '销量', dataIndex: 'actualSales', hideInSearch: true }
        {
            title: '上架状态',
            dataIndex: 'shelved',
            hideInSearch: true,
            render: (_, { shelved }) => (shelved ? '上架' : '未上架')
        }
    ]);

    return (
        <ProTable
            columns={chooseColumns}
            rowKey='goodsNo'
            toolBarRender={false}
            tableAlertRender={false}
            // params={{ shelved: EGoodStatus.shelved }}
            rowSelection={{
                selectedRowKeys: value ? [value.goodsNo!] : [],
                type: 'radio',
                onChange(_ks, [row]) {
                    onChange?.(row);
                }
            }}
            request={request}
        />
    );
};

const GoodsList = memo(Component);
export default GoodsList;
