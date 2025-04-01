/**
 * eslint-disable id-length
 *
 * @format
 */

import { Space, Table, Typography } from 'antd';
import { DefaultOptionType } from 'antd/lib/select';
import { ColumnType } from 'antd/lib/table';
import { FC, memo, useEffect, useState } from 'react';
import { GoodsSkuDTO } from '@MetaAdsManager/backend-api/src/request/data-contracts';
import { mmAdds } from '@MetaAdsManager/utils/src/mmCurrency';
import { NamePath } from 'antd/lib/form/interface';
import { useAtomValue } from 'jotai';
import { buyerGradeListAtom } from '../../store';
import { ESaleTypeEnum } from '../../../../enums/goods';
import { ProFormDigit, ProFormText } from '@ant-design/pro-form';

export type SkuColumnsRender = (option: {
    /**
     * 处理表单名称
     */
    itemName(index: number, feildName: string): NamePath[];
}) => ColumnType<any>[];

interface ISkuTableProps {
    value?: GoodsSkuDTO[];

    topSkus: DefaultOptionType[];
    uniform: number;
    saleType: ESaleTypeEnum;

    /**
     * sku列渲染
     */
    skuColumnsRender: SkuColumnsRender;

    onChange?(data: GoodsSkuDTO[]): void;
}

const Component: FC<ISkuTableProps> = (props) => {
    const { value = [], topSkus = [], skuColumnsRender = () => [] } = props;
    const [current, setCurrent] = useState(1);
    const buyerGradeList = useAtomValue(buyerGradeListAtom);

    const pageSize = 10;

    useEffect(() => {
        setCurrent(1);
    }, [topSkus]);

    const getIndex = (index: number) => (current - 1) * pageSize + index;

    const commonColumns = skuColumnsRender({
        itemName: (index, feildName) => ['goodsSkuList', getIndex(index), feildName],
        uniform: props.uniform
    });

    //  启用状态的 列
    const enableColumn = commonColumns.find((item) => item.dataIndex === 'enabled');

    // 多规格 才显示 规格列
    const newtopSkus =
        topSkus?.map((it, index) => {
            return {
                dataIndex: it?.value || 0,
                title: it?.label || '',
                render: (_, record: GoodsSkuDTO) => {
                    const { specNames = '' } = record;
                    return specNames?.split(',')[index];
                }
            } as ColumnType<GoodsSkuDTO>;
        }) || [];
    const columns = newtopSkus.concat(commonColumns);

    // 市场价 列
    const marketPriceColumn = {
        dataIndex: 'marketPrice',
        title: '市场价',
        width: Number(props.saleType) === ESaleTypeEnum.All ? 550 : 250,
        render: (val, _, index) => {
            return (
                <>
                    {Number(props.saleType) === ESaleTypeEnum.Cash && (
                        <ProFormDigit
                            name={['goodsSkuList', getIndex(index), 'marketPrice']}
                            fieldProps={{ precision: 2, min: 0.01, max: 999999, addonAfter: '元' }}
                            rules={[{ required: true }]}
                        />
                    )}
                    {Number(props.saleType) === ESaleTypeEnum.Score && (
                        <ProFormDigit
                            name={['goodsSkuList', getIndex(index), 'marketScore']}
                            fieldProps={{ precision: 0, min: 0, max: 999999, addonAfter: '积分' }}
                            rules={[{ required: true }]}
                        />
                    )}
                    {Number(props.saleType) === ESaleTypeEnum.All && (
                        <Space direction='horizontal'>
                            <ProFormDigit
                                rules={[{ required: true }]}
                                name={['goodsSkuList', getIndex(index), 'marketPrice']}
                                fieldProps={{
                                    addonAfter: '元',
                                    precision: 2
                                }}
                            />
                            <ProFormDigit
                                rules={[{ required: true }]}
                                name={['goodsSkuList', getIndex(index), 'marketScore']}
                                fieldProps={{ addonAfter: '积分', precision: 0 }}
                            />
                        </Space>
                    )}
                    {Number(props.saleType) === ESaleTypeEnum.Rsx && (
                        <ProFormDigit
                            name={['goodsSkuList', getIndex(index), 'marketPrice']}
                            fieldProps={{ precision: 0, min: 0, max: 999999, addonAfter: '如是心' }}
                            rules={[{ required: true }]}
                        />
                    )}
                </>
            );
        }
    };

    //  销售价 列
    const salesColumn = {
        dataIndex: 'salesPrice',
        title: '销售价',
        width: Number(props.saleType) === ESaleTypeEnum.All ? 550 : 250,
        render: (val, _, index) => {
            return (
                <>
                    {Number(props.saleType) === ESaleTypeEnum.Cash && (
                        <ProFormDigit
                            name={['goodsSkuList', getIndex(index), 'salesPrice']}
                            fieldProps={{ precision: 2, min: 0.01, max: 999999, addonAfter: '元' }}
                            rules={[{ required: true }]}
                        />
                    )}
                    {Number(props.saleType) === ESaleTypeEnum.Score && (
                        <ProFormDigit
                            name={['goodsSkuList', getIndex(index), 'saleScore']}
                            fieldProps={{ precision: 0, min: 0, max: 999999, addonAfter: '积分' }}
                            rules={[{ required: true }]}
                        />
                    )}
                    {Number(props.saleType) === ESaleTypeEnum.All && (
                        <Space direction='horizontal'>
                            <ProFormDigit
                                name={['goodsSkuList', getIndex(index), 'salesPrice']}
                                fieldProps={{
                                    addonAfter: '元',
                                    precision: 2
                                }}
                                rules={[{ required: true }]}
                            />
                            <ProFormDigit
                                name={['goodsSkuList', getIndex(index), 'saleScore']}
                                fieldProps={{ addonAfter: '积分', precision: 0 }}
                                rules={[{ required: true }]}
                            />
                        </Space>
                    )}
                    {Number(props.saleType) === ESaleTypeEnum.Rsx && (
                        <ProFormDigit
                            name={['goodsSkuList', getIndex(index), 'salesPrice']}
                            fieldProps={{ precision: 0, min: 0, max: 999999, addonAfter: '如是心' }}
                            rules={[{ required: true }]}
                        />
                    )}
                </>
            );
        }
    };

    //  根据销售状态  配置拿货价 和 平级推荐奖励的 列
    // 拿货价
    const purchaseColumn = {
        dataIndex: 'buyerPurchase',
        title: '拿货价',
        width: Number(props.saleType) === ESaleTypeEnum.All ? 570 : 270,
        render: (_, record, index) => {
            return buyerGradeList.map((item, subIndex) => {
                return (
                    <Space direction='vertical' key={`${index}-${subIndex}-${item.id}`}>
                        <Space direction='horizontal'>
                            <>
                                {/* 这个是隐藏的，主要目的是为了给最后提交的结果中绑定好 buyerGradeId */}
                                <ProFormText
                                    name={[
                                        'goodsSkuList',
                                        getIndex(index),
                                        'goodsSkuBuyerList',
                                        subIndex,
                                        'buyerGradeId'
                                    ]}
                                    initialValue={item.id}
                                    hidden
                                />
                                {Number(props.saleType) === ESaleTypeEnum.Cash && (
                                    <ProFormDigit
                                        name={[
                                            'goodsSkuList',
                                            getIndex(index),
                                            'goodsSkuBuyerList',
                                            subIndex,
                                            'salesPrice'
                                        ]}
                                        fieldProps={{
                                            addonBefore: item.name,
                                            addonAfter: '元',
                                            precision: 2
                                        }}
                                    />
                                )}
                                {Number(props.saleType) === ESaleTypeEnum.Score && (
                                    <ProFormDigit
                                        name={[
                                            'goodsSkuList',
                                            getIndex(index),
                                            'goodsSkuBuyerList',
                                            subIndex,
                                            'score'
                                        ]}
                                        fieldProps={{
                                            addonBefore: item.name,
                                            addonAfter: '积分',
                                            precision: 0
                                        }}
                                    />
                                )}
                                {Number(props.saleType) === ESaleTypeEnum.All && (
                                    <Space direction='horizontal'>
                                        <ProFormDigit
                                            name={[
                                                'goodsSkuList',
                                                getIndex(index),
                                                'goodsSkuBuyerList',
                                                subIndex,
                                                'salesPrice'
                                            ]}
                                            fieldProps={{
                                                addonBefore: item.name,
                                                addonAfter: '元',
                                                precision: 2
                                            }}
                                        />
                                        <ProFormDigit
                                            name={[
                                                'goodsSkuList',
                                                getIndex(index),
                                                'goodsSkuBuyerList',
                                                subIndex,
                                                'score'
                                            ]}
                                            fieldProps={{ addonAfter: '积分', precision: 0 }}
                                        />
                                    </Space>
                                )}
                            </>
                        </Space>
                    </Space>
                );
            });
        }
    };

    // 平级推荐奖励
    const recommendAwardColumn = {
        dataIndex: 'buyerAward',
        title: '平级推荐奖励',
        width: 270,
        render: (_, record, index) => {
            return buyerGradeList.map((item, subIndex) => {
                return (
                    <Space direction='vertical' key={`${index}-${subIndex}-${item.id}`}>
                        <ProFormDigit
                            name={[
                                'goodsSkuList',
                                getIndex(index),
                                'goodsSkuBuyerList',
                                subIndex,
                                'rewards'
                            ]}
                            fieldProps={{ addonBefore: item.name, addonAfter: '元', precision: 2 }}
                        />
                    </Space>
                );
            });
        }
    };

    const dynamicColumns = [salesColumn, purchaseColumn, marketPriceColumn];
    if (Number(props.saleType) === ESaleTypeEnum.Rsx) {
        dynamicColumns.splice(1, 1);
    }
    if (
        Number(props.saleType) !== ESaleTypeEnum.Score &&
        Number(props.saleType) !== ESaleTypeEnum.Rsx
    ) {
        // dynamicColumns.splice(2, 0, recommendAwardColumn);
    }

    columns.splice(
        columns.findIndex((item) => item.dataIndex === 'weight'),
        0,
        ...dynamicColumns
    );

    /**
     *  多规格 才显示 是否启用的列 选项
     */
    if (props.uniform === 0 && columns.findIndex((item) => item.dataIndex === 'enabled') === -1) {
        // 多规格
        enableColumn && columns.push(enableColumn);
    } else if (
        props.uniform === 1 &&
        columns.findIndex((item) => item.dataIndex === 'enabled') !== -1
    ) {
        // 统一规格
        columns.splice(
            columns.findIndex((item) => item.dataIndex === 'enabled'),
            1
        );
    }

    const x = columns.reduce((total, item) => mmAdds(total, item.width || 120), 0);

    return (
        <>
            {!!value.length && (
                <Typography.Text type='secondary'>已组合{value.length}项</Typography.Text>
            )}
            <Table
                columns={columns}
                dataSource={value}
                rowKey='specIds'
                scroll={{ x }}
                size='small'
                pagination={false}
                onChange={(pagination) => {
                    setCurrent(pagination.current!);
                }}
                style={{ marginTop: 5 }}
            />
        </>
    );
};

const SkuTable = memo(Component);
export default SkuTable;
