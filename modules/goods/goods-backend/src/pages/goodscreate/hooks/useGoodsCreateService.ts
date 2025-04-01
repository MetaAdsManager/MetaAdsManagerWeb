/**
 * eslint-disable max-nested-callbacks
 *
 * @format
 */

import { api } from '@MetaAdsManager/backend-api';
import {
    GoodsVO,
    GoodsSaveDTO,
    GoodsSkuDTO
} from '@MetaAdsManager/backend-api/src/request/data-contracts';
import { message } from 'antd';
import { useState, useRef, useEffect } from 'react';
import { setClassifyValues, getClassifyValues } from '../../goodsClassify/const';
import { TGoodData, IStepTwoFormDTO } from '../const';
import { useGoodStepForm, useSkuService } from '../store';
import { EBuyLimitQuantity, ESaleTypeEnum } from '../../../enums/goods';
import requestInstance from '@MetaAdsManager/backend-api/src/request/instance';

interface IProps {
    /** 页面查询参数 */
    query?: Record<string, string>;

    api: {
        getClassify?: (typeof api)['/admin/mall/classify/tree_GET'];

        query(no: string): Promise<{ data?: any }>;

        save(data: any): Promise<{}>;
    };
}

/**
 * 商品处理hook
 */
export function useGoodsCreateService(props: IProps) {
    const goodsNo = props.query?.goodsNo || ''; // 商品编号
    const isCopy = props.query?.type === 'copy'; // 是否是复制

    const [loading, setLoading] = useState(false);
    const [goodDetail, setGoodDetail] = useState<GoodsVO>({}); // 商品详情
    const [buyerGradesIds, setBuyerGradesIds] = useState<any[]>([]);
    const [goodsSkuList, setGoodsSkuList] = useState<any[]>([]);
    const [saleType, setSaleType] = useState('1'); // 销售方式

    // 商品默认数据
    const goodData = {
        goodsNo: '',
        goodsName: '',
        coverImg: '',
        bannerImgs: [],
        expressTemplateId: undefined,
        classifyIds: [],
        subClassify:[],
        sort: 1,
        useScore: 0,
        specList: [],
        specIdList: [],
        goodsSkuList: [],
        goodContet: '',
        buyStatus: 0,
        purchaseLimitType: EBuyLimitQuantity.None
    };

    const { stepOneForm, stepTwoForm, stepThreeForm } = useGoodStepForm();

    const { flatSkuList, skuListMap, setSkuListMap, getSKu } = useSkuService();
    const goodsSkuListMap = useRef<Record<string, any>>({});

    // 初始化
    useEffect(() => {
        getBuyerGrade();

        async function initData() {
            setLoading(true);
            const list = await getSKu();
            setSkuListMap({ 0: list });

            if (goodsNo) {
                const { data = {} } = await props.api.query(goodsNo);

                if (data.virtualType === 1) {
                    const messageData = await requestInstance({
                        url: '/admin/goodsMessage/list',
                        method: 'GET',
                        params: { goodsNo }
                    });
                    data.goodsMessageDTOS = messageData.data || [];
                }

                setLoading(false);
                return data;
            }
            setLoading(false);
            return undefined;
        }

        /** 商品标签 */
        async function getGoodsLabel() {
            const { data } = await api['/admin/mall/tag_GET']({ pageNum: 1, pageSize: 1e5 });
            return data?.list || [];
        }

        /** 获取商品详情并且判断商品详情的标签id是否已被删除 */
        Promise.all([initData(), getGoodsLabel()]).then(([data, labelList]) => {
            if (data) {
                // 保存商品详情。如果是复制的。不保存id
                const { id, ...rest } = data;
                setGoodDetail(isCopy ? rest : data);
                setSaleType(data.saleType ? String(data.saleType) : '1');
                /** 判断商品的标签id是否在可用标签id中，避免商品标签已经被删除 */
                const tagIds = (data?.tagIds || []).filter((val) =>
                    labelList.some((item) => item.id === val)
                );
                // 回写表单一
                stepOneForm.setFieldsValue({
                    ...data,
                    tagIds,
                    expressTemplateId: data.expressTemplateId || null,
                    saleType: data.saleType ? String(data.saleType) : '1',
                    useScore: data.useScore ? 1 : 0,
                    goodsNo: isCopy ? '' : data.goodsNo,
                    classifyIds: setClassifyValues(data),
                    bannerImgs: data.bannerImgPaths?.split(','),
                    subClassifys: data.subClassify ?data.subClassify?.split(',').map((v)=>Number(v)):[], // 子分类,
                    selfTake: Number(data.selfTake)
                });
                //  回显 规格类型
                stepTwoForm.setFieldValue('uniform', data.uniform ? 1 : 0);

                // 回写规格
                const { goodsSpecRelationList = [], goodsSkuDetailList = [] } = data;
                const specList: string[] = []; // 父id数组
                const specIdListSets: Set<string>[] = []; // 用set对象来保证选中的规格id顺序并去重

                const goodsSkuList = goodsSkuDetailList.map((skuDetail, index) => {
                    const { specIds = '' } = skuDetail;
                    let specNames;
                    if (data.uniform === false) {
                        // 非统一规格的（多规格的）
                        specNames = specIds
                            .split(',')
                            .map((id, idx) => {
                                const { specPid, specName } =
                                    goodsSpecRelationList.find((it) => `${it.specId}` === id) || {};
                                // 塞入父id信息
                                if (index === 0) {
                                    specList.push(`${specPid}`);
                                }
                                // 设置选中的规格id信息
                                if (id) {
                                    if (!specIdListSets[idx]) {
                                        specIdListSets[idx] = new Set<string>([id]);
                                    } else {
                                        specIdListSets[idx].add(id);
                                    }
                                }

                                return specName;
                            })
                            .join(',');
                    }

                    const { goodsId, id, uniform, goodsSkuBuyerList, ...restSkuDetail } = skuDetail;
                    // 如果是 copy ，去除里面的Id
                    const skuBuyerList =
                        goodsSkuBuyerList?.map((item) => {
                            return {
                                ...item,
                                id: isCopy ? undefined : item.id
                            };
                        }) || [];
                    return {
                        ...restSkuDetail,
                        id: isCopy ? undefined : skuDetail.id,
                        skuNo: isCopy ? undefined : skuDetail.skuNo,
                        specIds,
                        specNames,
                        enabled: !!skuDetail.enabled,
                        goodsSkuBuyerList: skuBuyerList
                    };
                });

                const specIdList = specIdListSets.map((set) => [...set]);

                // 缓存skulist数据
                goodsSkuListMap.current = goodsSkuList.reduce((total, sku) => {
                    total[sku.specIds!] = { ...sku };
                    return total;
                }, goodsSkuListMap.current);

                setGoodsSkuList(goodsSkuList);
                stepTwoForm.setFieldsValue({ specList, specIdList, goodsSkuList });

                setGoodContent(data.richId);
            }
        });
    }, []);

    useEffect(() => {
        if (goodsNo || !buyerGradesIds) return;
        stepOneForm.setFieldValue('buyerGrades', buyerGradesIds);
    }, [goodsNo, buyerGradesIds]);

    /** 获取订货商等级 */
    async function getBuyerGrade() {
        const { data = {} } = await api['/admin/v1/console/buyerGrade/page_GET']({
            pageNum: 1,
            pageSize: 2000
        });
        const ids = data.list?.map((item) => item.id) || [];
        setBuyerGradesIds([0, ...ids]);
    }

    async function getBuyerGradeValue() {
        const { data } = await api['/admin/v1/console/buyerGrade/page_GET']({
            pageNum: 1,
            pageSize: 2000
        });
        if (data) {
            let { list = [] } = data;
            list = list.sort((prev, next) => prev.sort! - next.sort!);
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
            return _list.map(({ value }) => value);
        }

        return [];
    }

    // 保存
    async function saveGood(data: TGoodData) {
        const {
            classifyIds,
            useScore,
            specIdList,
            goodsSkuList: skuList,
            specList: sList = [],
            bannerImgs,
            subClassifys,
            goodContet,
            goodsNo,
            ...rest
        } = data;
        const classify = getClassifyValues(classifyIds); // 解开分类id
        // 处理商品skulist
        const specList = new Set<string>(sList.map((it) => `${it}`));
        const goodsSkuList: any = skuList.map((item) => {
            if (!data.uniform) {
                // 多规格类型
                item.specIds!.split(',').forEach((id) => {
                    specList.add(id);
                });
            }

            return {
                ...item,
                enabled: item.enabled ? 1 : 0,
                uniform: data.uniform,
                weight: item.weight || 0,
                volume: item.volume || 0,
                skuImg: Array.isArray(item.skuImg) ? item.skuImg.join(',') : item.skuImg
            };
        });

        let goodValues: GoodsSaveDTO = {
            ...rest,
            ...classify,
            useScore: useScore === 1,
            bannerImgPaths: bannerImgs.join(','),
            subClassify: (subClassifys || []).join(','), // 子分类,
            coverImg: bannerImgs.length ? bannerImgs[0] : '',
            specList: [...specList] as any[],
            goodsSkuList,
            richId: goodDetail.richId,
            saleType: Number(rest.saleType)
        };
        if (goodValues.saleType === ESaleTypeEnum.Rsx) {
            goodValues = {
                ...goodValues,
                buyStatus: 0,
                buyerGrades: await getBuyerGradeValue(),
                expressTemplateId: 0,
                selfTake: 0
            };
        }
        if (goodValues.virtualType) {
            goodValues.selfTake = 0;
        }

        try {
            setLoading(true);
            if (!goodDetail.id || goodValues.richId === 0) {
                // 保存富文本
                const { data: richId } = await api['/admin/richtext_POST']({
                    dataId: 0,
                    content: goodContet
                });
                goodValues.richId = richId;
            } else {
                await api['/admin/richtext/{id}_PUT'](goodValues.richId!, {
                    dataId: goodValues.richId!,
                    content: goodContet
                });
                goodValues = { ...goodValues, id: goodDetail.id, goodsNo: goodDetail.goodsNo };
            }

            await props.api.save(goodValues);
            message.success('保存成功');
            window.history.go(-1);

            return true;
        } catch (error) {}

        setLoading(false);
        return false;
    }

    /**
     * 回写商品富文本
     * @param richId 富文本id
     */
    async function setGoodContent(richId?: number) {
        if (richId !== undefined) {
            const { data: goodContet = '' } = await api['/admin/richtext_GET']({ id: richId });
            stepThreeForm.setFieldsValue({ goodContet });
        }
    }

    // 规格表单实践处理
    const handleStepTwoFormChange = (
        changedValues: Partial<IStepTwoFormDTO>,
        values: IStepTwoFormDTO
    ) => {
        let { specIdList = [] } = values;
        (values.goodsSkuList || []).forEach((it) => {
            goodsSkuListMap.current![it.specIds!] = { ...it };
        });

        specIdList = specIdList.map((it) => it || []);
        if (
            Object.keys(changedValues).some(
                (key) => ['specList', 'specIdList', 'uniform'].indexOf(key) !== -1
            )
        ) {
            let goodsSkuList;

            // 规格类型发生变化
            if (values.uniform === 1) {
                // 统一规格
                goodsSkuList = [
                    {
                        enabled: true,
                        customStartSales: 0,
                        specNames: '',
                        specParentIds: '',
                        skuName: ''
                    }
                ];
            } else {
                // 非统一规格
                // 父级规格变化
                if (changedValues.specList !== undefined) {
                    // skuListMap
                    const allChildIds = changedValues.specList
                        .map((it) => (skuListMap[it] || []).map((lm) => lm.value))
                        .flat();
                    specIdList = specIdList
                        .map((sis) => sis.filter((si) => allChildIds.includes(si)))
                        .filter((it) => it.length);
                }

                const result = cartesian(specIdList);
                goodsSkuList = result.map((it) => {
                    const specParentIds: string[] = [];
                    const skuNames: string[] = [];
                    const specNames: string[] = [];

                    it.forEach((id, index) => {
                        const sku: any = flatSkuList.find((item) => item.value === id) || {};
                        const { pid, label = '' } = sku;
                        const parent: any = flatSkuList.find((item) => item.id === pid) || {};

                        skuNames.push(`${parent.label}:${label}`);
                        specParentIds.push(pid);
                        specNames.push(label);
                    });

                    const specIds = it.join(',');

                    return {
                        enabled: true,
                        customStartSales: 0,
                        ...goodsSkuListMap.current![specIds],
                        specIds,
                        specNames: specNames.join(','),
                        specParentIds: specParentIds.join(','),
                        skuName: skuNames.join(' ')
                    } as GoodsSkuDTO;
                });
            }

            setGoodsSkuList(goodsSkuList);
            stepTwoForm.setFieldsValue({ specIdList, goodsSkuList });
        }
    };

    return {
        loading,
        goodData,
        goodDetail,
        stepOneForm,
        stepTwoForm,
        stepThreeForm,

        flatSkuList,
        goodsSkuListMap,

        handleStepTwoFormChange,
        saveGood,
        goodsSkuList,
        saleType
    };
}

/**
 * 笛卡尔积
 */
function cartesian(arr: string[][]) {
    if (arr.length < 2) {
        return (arr[0] || []).map((it) => [it]);
    }
    return arr.reduce((col, set) => {
        const res: any[] = [];
        col.forEach((cc) => {
            set.forEach((ss) => {
                const tt: any = ([] as any).concat(Array.isArray(cc) ? cc : [cc]);
                tt.push(ss);
                res.push(tt);
            });
        });
        return res;
    }) as unknown as string[][];
}
