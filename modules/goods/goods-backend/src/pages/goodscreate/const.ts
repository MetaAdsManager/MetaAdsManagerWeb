/** @format */

import { ProFormProps } from '@ant-design/pro-form';
import { GoodsSkuDTO, GoodsVO } from '@MetaAdsManager/backend-api/src/request/data-contracts';
import { convertEnum } from '@MetaAdsManager/utils/src/enumUtil';

export const formProps: ProFormProps<TGoodData> = {
    layout: 'horizontal',
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
    validateMessages: {
        required: '此项为必填项'
    }
};

/**
 * 表单一数据
 */
export interface IStepOneFormDTO extends Omit<GoodsVO, 'useScore'> {
    /**
     * 轮播图
     * bannerImgPaths
     */
    bannerImgs: string[];
     /** 副选分类 */
    subClassifys?: number[];
    /**
     * 商品分类
     * classifyId classifyPid1 classifyPid2
     */
    classifyIds: number[];

    /** 重写是否使用积分 */
    useScore: 0 | 1;
}

export interface IStepTwoFormDTO {
    /** 规格类型 */
    uniform: number | boolean;
    specList: number[];
    /** 子规格二维数组 */
    specIdList: string[][];
    /** SKU信息 */
    goodsSkuList: GoodsSkuDTO[];
}

export interface IStepThreeFormDTO {
    /** 商品详情文本 */
    goodContet: string;
}

export type TGoodData = IStepOneFormDTO & IStepTwoFormDTO & IStepThreeFormDTO;
