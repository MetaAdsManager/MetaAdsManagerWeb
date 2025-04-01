/** @format */

import { convertEnum } from '@MetaAdsManager/utils/src/enumUtil';

export interface IDetailProps {
    history: any;
}

export const defaultAllArea = {
    area: '0',
    text: '全国',
    first: 0,
    firstPrice: 0,
    plus: 0,
    plusPrice: 0
};

/** 模版类型 */
export enum EShippingType {
    /** 不包邮 */
    BuyerBear = 1,
    /** 包邮 */
    SellerBear,
    /** 满x包邮 */
    ConditionBear
}

export const [MShippingType, OShippingType] = convertEnum([
    [EShippingType.BuyerBear, '不包邮'],
    [EShippingType.ConditionBear, '实付满额包邮'],
    [EShippingType.SellerBear, '包邮']
]);
