/**
 * eslint-disable max-lines
 *
 * @format
 */

import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { BuyerGradeListResponseDTO, api } from '@MetaAdsManager/backend-api';
import {
    ExpressTemplateListOutputDto,
    GoodsGroupOutputDto,
    GoodsSkuDTO,
    GoodsVO,
    MenuTreeOutputDto
} from '@MetaAdsManager/backend-api/src/request/data-contracts';
import PreviewList from '@MetaAdsManager/backend-pro/src/components/previewList';
import convertToTree from '@MetaAdsManager/utils/src/tree/convertToTree';
import { Button, Card, Cascader, Descriptions, Space, Table, Tabs } from 'antd';
import { FC, memo, useEffect, useMemo, useState } from 'react';
import useGoodSkuColumns from '../../hooks/useGoodSkuColumns';
import { setClassifyValues } from '../goodsClassify/const';
import styles from './index.module.less';
import { ProFormCheckbox } from '@ant-design/pro-form';
import { MGoodStatus } from '@MetaAdsManager-modules/goods-data/src/enums/EGoodStatus';
import {
    EBuyLimitQuantity,
    ESaleTypeEnum,
    EVirtualType,
    MBuyLimitQuantity,
    MGoodMessageType
} from '../../enums/goods';
import mmCurrenty from '@MetaAdsManager/utils/src/mmCurrency';
import PhoneDevice from '@MetaAdsManager/backend-pro/src/components/phoneDevice';
import requestInstance from '@MetaAdsManager/backend-api/src/request/instance';

interface IMMGoodsDetailPageProps {
    service: ReturnType<typeof useService>;

    /** 显示使用积分 */
    enableScore?: boolean;
}

const Component: FC<IMMGoodsDetailPageProps> = (props) => {
    const {
        loading,
        detail,
        classifyTree,
        richText,
        classifyValues,
        columns,
        expressTemplateList,
        goodsGroup,
        getBuyerGrade
    } = props.service;
    const [key, setKey] = useState('0');

    // 商品分组
    const groupLabel = useMemo(() => {
        const groups = goodsGroup.filter((item) => detail?.groupIds?.includes(item.id!));
        return groups.map((item) => item.name).join(',');
    }, [detail]);

    // 商品标签
    const goodsLabel = useMemo(() => {
        const tagList = detail?.goodsTagList || [];
        if (tagList.length === 0) {
            return '';
        }
        return tagList.map((item) => item.name).join(',');
    }, [detail]);

    // 运费模版
    const expressLabel = useMemo(() => {
        const item = expressTemplateList.find((item) => item.id === detail?.expressTemplateId);
        return item?.name;
    }, [detail]);

    return (
        <PageContainer
            loading={loading}
            footer={[
                <Button key='back' type='primary' onClick={() => window.history.go(-1)}>
                    返回
                </Button>
            ]}
        >
            <Tabs activeKey={key} onChange={setKey} style={{ marginBottom: 15 }}>
                {['商品信息', '商品规格', '商品详情'].map((item, i) => (
                    <Tabs.TabPane tab={item} key={`${i}`} />
                ))}
            </Tabs>
            {key === '0' && (
                <>
                    <Card title='基本信息' className={styles.card} style={{ marginBottom: 15 }}>
                        <Descriptions column={1} labelStyle={{ width: 200 }}>
                            <Descriptions.Item label='商品编号'>
                                {detail?.goodsNo}
                            </Descriptions.Item>

                            <Descriptions.Item label='商品名称'>
                                {detail?.goodsName}
                            </Descriptions.Item>

                            <Descriptions.Item label='商品副标题'>
                                {detail?.subtitle}
                            </Descriptions.Item>

                            <Descriptions.Item label='商品类型'>
                                {/* {MVirtualType[detail?.virtualType || '']} */}
                                {detail?.virtualType === 1
                                    ? '虚拟商品'
                                    : detail?.virtualType === 0
                                        ? '实物商品'
                                        : ''}
                            </Descriptions.Item>

                            <Descriptions.Item label='商品分类'>
                                <Cascader value={classifyValues} options={classifyTree} disabled />
                            </Descriptions.Item>
                            <Descriptions.Item label='副选分类'>
                                {/* <Cascader value={detail?.subClassify!.split(',') || []} options={classifyTree} multiple disabled /> */}
                                {detail?.subClassifyName}
                            </Descriptions.Item>

                            <Descriptions.Item label='商品图片'>
                                <PreviewList
                                    firstBadge
                                    list={detail?.bannerImgPaths!.split(',') || []}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item label='商品标签'>{goodsLabel}</Descriptions.Item>
                        </Descriptions>
                    </Card>
                    <Card title='销售信息' className={styles.card} style={{ marginBottom: 15 }}>
                        <Descriptions column={1} labelStyle={{ width: 200 }}>
                            <Descriptions.Item label='销量'>
                                <Space direction='vertical'>
                                    <div>实际销量 {detail?.actualSales}</div>
                                    <div>初始销量 {detail?.customStartSales}</div>
                                </Space>
                            </Descriptions.Item>

                            <Descriptions.Item label='商品分组'>{groupLabel}</Descriptions.Item>
                        </Descriptions>
                    </Card>
                    <Card title='购买门槛' className={styles.card} style={{ marginBottom: 15 }}>
                        {detail?.saleType === ESaleTypeEnum.Rsx ? (
                            '仅订货商身份可购买'
                        ) : (
                            <Descriptions column={1} labelStyle={{ width: 200 }}>
                                <Descriptions.Item label='起购数量'>
                                    {detail?.buyStatus === 0 ? '不限制' : detail?.buyNum}
                                </Descriptions.Item>

                                <Descriptions.Item label='身份限制'>
                                    <ProFormCheckbox.Group
                                        layout='vertical'
                                        request={getBuyerGrade}
                                        fieldProps={{
                                            value: detail?.buyerGrades
                                        }}
                                        disabled
                                    />
                                </Descriptions.Item>

                                <Descriptions.Item label='限购数量'>
                                    {detail?.purchaseLimitType !== undefined
                                        ? [
                                            `${MBuyLimitQuantity[detail.purchaseLimitType] || ''
                                            }`,
                                            detail.purchaseLimitType === EBuyLimitQuantity.None
                                                ? ''
                                                : `限购${detail.purchaseLimitQuantity}件`
                                        ].join('')
                                        : '-'}
                                </Descriptions.Item>
                            </Descriptions>
                        )}
                    </Card>
                    {!detail?.virtualType && (
                        <Card title='配送信息' className={styles.card} style={{ marginBottom: 15 }}>
                            {detail?.saleType === ESaleTypeEnum.Rsx ? (
                                '包邮'
                            ) : (
                                <>
                                    <Descriptions column={1} labelStyle={{ width: 200 }}>
                                        <Descriptions.Item label='运费模板'>
                                            {expressLabel}
                                        </Descriptions.Item>
                                    </Descriptions>
                                    <Descriptions column={1} labelStyle={{ width: 200 }}>
                                        <Descriptions.Item label='是否支持自提'>
                                            {detail?.selfTake ? '是' : '否'}
                                        </Descriptions.Item>
                                    </Descriptions>
                                </>
                            )}
                        </Card>
                    )}

                    <Card title='状态信息' className={styles.card} style={{ marginBottom: 15 }}>
                        <Descriptions column={1} labelStyle={{ width: 200 }}>
                            <Descriptions.Item label='排序值'>{detail?.sort}</Descriptions.Item>
                            <Descriptions.Item label='商品状态'>
                                {detail?.shelved !== null && detail?.shelved !== undefined
                                    ? MGoodStatus[detail.shelved ? 1 : 0]
                                    : ''}
                            </Descriptions.Item>
                            <Descriptions.Item label='前台可见'>
                                {detail?.frontShow ? '显示' : '隐藏'}
                            </Descriptions.Item>
                        </Descriptions>
                    </Card>

                    {detail?.virtualType === EVirtualType.Virtual && (
                        <Card title='商品留言' className={styles.card} style={{ marginBottom: 15 }}>
                            <Table
                                dataSource={detail.goodsMessageDTOS}
                                columns={[
                                    { title: '字段名', dataIndex: 'columnName' },
                                    {
                                        title: '字段格式',
                                        dataIndex: 'columnType',
                                        render: (value) => MGoodMessageType[value]
                                    },
                                    {
                                        title: '是否必填',
                                        dataIndex: 'requiredState',
                                        render: (value) => (value ? '是' : '否')
                                    }
                                ]}
                                pagination={false}
                                bordered
                            />
                        </Card>
                    )}
                </>
            )}
            {key === '1' && (
                <Card title='规格信息' className={styles.card}>
                    <Descriptions column={1}>
                        <Descriptions.Item label='规格类型'>
                            {detail?.uniform ? '统一规格' : '多规格'}
                        </Descriptions.Item>
                    </Descriptions>
                    <span style={{ marginBottom: 15, display: 'inline-block' }}>规格明细</span>
                    <ProTable
                        toolBarRender={false}
                        search={false}
                        columns={columns}
                        dataSource={detail?.goodsSkuDetailList || []}
                        rowKey='specIds'
                        pagination={false}
                        scroll={{ x: 1500 }}
                    />
                </Card>
            )}
            {key === '2' && (
                <Card title='商品详情' className={styles.card}>
                    {richText && (
                        <PhoneDevice title={'商品详情'} className={styles.bor}>
                            <div
                                className={styles.richText}
                                dangerouslySetInnerHTML={{ __html: richText }}
                            />
                        </PhoneDevice>
                    )}
                </Card>
            )}
        </PageContainer>
    );
};

const MMGoodsDetailPage = memo(Component);
export default MMGoodsDetailPage;

interface IUseServiceProps {
    /** 商品编号 */
    goodsNo: string;
    /** 商品类型
     * 0 普通商品
     * 1 积分商品
     */
    goodsType?: number;

    /** sku表格列 */
    columns: ProColumns<GoodsSkuDTO>[];
}
/**
 * 商品详情业务hook
 *
 * @export
 * @param {IMMGoodsDetailPageProps} props
 * @return {*}
 */
export function useService(props: IUseServiceProps) {
    const [loading, setLoading] = useState(false);

    const [detail, setDetail] = useState<GoodsVO>(); // 商品详情

    const [richText, setRichText] = useState(''); // 商品详情富文本

    const [classifyTree, setClassifyTree] = useState<MenuTreeOutputDto[]>([]); // 商品分类树

    const [skuColumns] = useGoodSkuColumns(detail || {}); // 商品sku表格列

    const classifyValues = useMemo(() => (detail ? setClassifyValues(detail) : []), [detail]); // 分类值

    const [buyerGradeList, setBuyerGradeList] = useState<BuyerGradeListResponseDTO[]>([]);

    const columns = useMemo(() => {
        const result = skuColumns.concat(props.columns);
        //  启用状态的 列
        const enableColumn = result.find((item) => item.dataIndex === 'enabled');
        const index = result.findIndex((item) => item.dataIndex === 'enabled');

        if (detail?.uniform && index !== -1) {
            // 统一规格
            result.splice(index, 1);
        } else if (!detail?.uniform && index === -1) {
            // 多规格
            enableColumn && result.push(enableColumn);
        }

        // 拼接 拿货价 平级推荐奖励列

        if (detail) {
            const { salesColumn, marketColumn, purchaseColumn, recommendAwardColumn } =
                getPurchaseAndAwardColumns(detail);
            const dynamicColumns = [salesColumn, purchaseColumn, marketColumn];
            const saleType = detail?.saleType;
            if (Number(saleType) === ESaleTypeEnum.Rsx) {
                dynamicColumns.splice(1, 1);
            }
            if (
                Number(saleType) !== ESaleTypeEnum.Score &&
                Number(saleType) !== ESaleTypeEnum.Rsx
            ) {
                recommendAwardColumn && dynamicColumns.splice(2, 0, recommendAwardColumn);
            }
            result.splice(
                result.findIndex((item) => item.dataIndex === 'weight'),
                0,
                ...dynamicColumns
            );
        }

        return result;
    }, [skuColumns, detail, buyerGradeList]); // 表格列

    //  商品分组
    const [goodsGroup, setGoodsGroup] = useState<GoodsGroupOutputDto[]>([]);

    // 运费模版
    const [expressTemplateList, setExpressTemplateList] = useState<ExpressTemplateListOutputDto[]>(
        []
    );

    // 获取商品详情数据
    useEffect(() => {
        getDetail();
        getBuyerGrade();
        getExpress();
        getGoodsGroup();
        getClassify();
    }, []);

    function getPurchaseAndAwardColumns(detail) {
        const saleType = detail.saleType;

        //  销售价 列
        const salesColumn = {
            dataIndex: 'salesPrice',
            title: '销售价',
            width: Number(saleType) === ESaleTypeEnum.All ? 450 : 200,
            render: (val, record, index) => {
                return (
                    <>
                        {Number(saleType) === ESaleTypeEnum.Cash &&
                            mmCurrenty(record.salesPrice, { symbol: '' }) + '元'}
                        {Number(saleType) === ESaleTypeEnum.Score && record.saleScore + '积分'}
                        {Number(saleType) === ESaleTypeEnum.All && (
                            <Space direction='horizontal'>
                                <span>{mmCurrenty(record.salesPrice, { symbol: '' })}元</span>
                                <span>+</span>
                                <span>{record.saleScore}积分</span>
                            </Space>
                        )}
                        {Number(saleType) === ESaleTypeEnum.Rsx &&
                            mmCurrenty(record.salesPrice, { symbol: '' }) + '如是心'}
                    </>
                );
            }
        };

        //  市场价 列
        const marketColumn = {
            dataIndex: 'marketPrice',
            title: '市场价',
            width: Number(saleType) === ESaleTypeEnum.All ? 450 : 200,
            render: (val, record, index) => {
                return (
                    <>
                        {Number(saleType) === ESaleTypeEnum.Cash &&
                            mmCurrenty(record.marketPrice, { symbol: '' }) + '元'}
                        {Number(saleType) === ESaleTypeEnum.Score && record.marketScore + '积分'}
                        {Number(saleType) === ESaleTypeEnum.All && (
                            <Space direction='horizontal'>
                                <span>{mmCurrenty(record.marketPrice, { symbol: '' })}元</span>
                                <span>+</span>
                                <span>{record.marketScore}积分</span>
                            </Space>
                        )}
                        {Number(saleType) === ESaleTypeEnum.Rsx &&
                            mmCurrenty(record.marketPrice, { symbol: '' }) + '如是心'}
                    </>
                );
            }
        };

        // 拿货价列
        const purchaseColumn = {
            dataIndex: 'buyerPurchase',
            title: '拿货价',
            width: Number(saleType) === ESaleTypeEnum.All ? 400 : 200,
            render: (_, record: GoodsSkuDTO, index) => {
                return (
                    <Space direction='vertical'>
                        {record?.goodsSkuBuyerList?.map((item, subIndex) => {
                            const result = buyerGradeList.find(
                                (bi) => bi.id === item.buyerGradeId
                            )?.name;
                            return (
                                <div key={`${index}-${subIndex}-${item.id}`}>
                                    {Number(saleType) === ESaleTypeEnum.Cash && (
                                        <Space direction='horizontal'>
                                            {!!result &&
                                                `${result} ${item.salesPrice || item.salesPrice === 0
                                                    ? mmCurrenty(item.salesPrice, {
                                                        symbol: ''
                                                    })
                                                    : '-'
                                                } 元`}
                                        </Space>
                                    )}
                                    {Number(saleType) === ESaleTypeEnum.Score && (
                                        <Space direction='horizontal'>
                                            {!!result && `${result} ${item.score ?? '-'} 积分`}
                                        </Space>
                                    )}
                                    {Number(saleType) === ESaleTypeEnum.All && (
                                        <Space direction='horizontal'>
                                            {!!result &&
                                                `${result} ${item.salesPrice || item.salesPrice === 0
                                                    ? mmCurrenty(item.salesPrice, {
                                                        symbol: ''
                                                    })
                                                    : '-'
                                                } 元 ${item.score ?? '-'} 积分`}
                                        </Space>
                                    )}
                                </div>
                            );
                        })}
                    </Space>
                );
            }
        };

        // 评级推荐奖励列
        const recommendAwardColumn = {
            dataIndex: 'buyerAward',
            title: '平级推荐奖励',
            width: 270,
            render: (_, record, index) => {
                return (
                    <Space direction='vertical'>
                        {record?.goodsSkuBuyerList?.map((item, subIndex) => {
                            const result = buyerGradeList.find(
                                (bi) => bi.id === item.buyerGradeId
                            )?.name;
                            return (
                                <Space
                                    direction='horizontal'
                                    key={`${index}-${subIndex}-${item.id}`}
                                >
                                    {!!result &&
                                        `${result} ${item.rewards || item.rewards === 0
                                            ? mmCurrenty(item.rewards, {
                                                symbol: ''
                                            })
                                            : '-'
                                        } 元`}
                                </Space>
                            );
                        })}
                    </Space>
                );
            }
        };

        return {
            salesColumn,
            marketColumn,
            purchaseColumn
            // recommendAwardColumn
        };
    }

    async function getDetail() {
        if (props.goodsNo) {
            setLoading(true);
            try {
                const { data = {} } = await requestInstance({
                    url: `/admin/goods/detail/${props.id}`,
                    method: 'GET'
                });
                if (data.virtualType === 1) {
                    const messageData = await requestInstance({
                        url: '/admin/goodsMessage/list',
                        method: 'GET',
                        params: { goodsNo: data.goodsNo }
                    });
                    data.goodsMessageDTOS = messageData.data || [];
                }

                setDetail(data);
                getRichText(data.richId);
            } catch (error) { }
            setLoading(false);
        }
    }

    // 获取运费模板
    async function getExpress() {
        const { data = {} } = await api['/admin/mall/express/query_GET']({
            pageNum: 1,
            pageSize: 1000
        });
        setExpressTemplateList(data.list || []);
    }

    /** 商品分组 */
    async function getGoodsGroup() {
        const { data } = await api['/admin/mall/group_GET']({ pageNum: 1, pageSize: 2000 });
        setGoodsGroup(data?.list || []);
    }

    // 获取富文本内容
    function getRichText(id?: number) {
        if (id) {
            api['/admin/richtext_GET']({ id }).then(({ data = '' }) => {
                setRichText(data);
            });
        }
    }

    // 获取分类
    function getClassify() {
        api['/admin/mall/classify/tree_GET']({ goodsType: props.goodsType }).then(
            ({ data = [] }) => {
                setClassifyTree(convertToTree(data, { title: 'name', value: 'id' }));
            }
        );
    }

    /** 获取订货商等级 */
    async function getBuyerGrade() {
        const { data } = await api['/admin/v1/console/buyerGrade/page_GET']({
            pageNum: 1,
            pageSize: 2000
        });
        if (data) {
            let { list = [] } = data;
            list = list.sort((prev, next) => prev.sort! - next.sort!);
            setBuyerGradeList(list);
            const _list = list.map((item) => {
                return {
                    value: item.id,
                    label: `“${item.name}”订货商可购买`
                };
            });
            _list.unshift({
                value: 0,
                label: '普通会员可购买'
            });
            return _list;
        }
        return [];
    }

    return {
        loading,
        detail,
        richText,
        classifyTree,
        classifyValues,
        goodsGroup,
        expressTemplateList,
        buyerGradeList,
        columns,
        getBuyerGrade
    };
}
