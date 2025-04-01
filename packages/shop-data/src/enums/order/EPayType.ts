/** @format */

import { convertEnum } from '@MetaAdsManager/utils/src/enumUtil';

/** 支付方式 */
export enum EPayType {
    /** 微信支付 */
    WeiXin = 1,
    /** 支付宝 */
    Alipay,
    /** 线下支付 */
    OffLine,
    /** 余额支付 */
    Balance,
    Rsx,
    /** 银盛支付 */
    YinSheng = 6,
    Integral
}

export const [MPayType, OPayType] = convertEnum([
    [EPayType.WeiXin, '微信支付'],
    [EPayType.Alipay, '支付宝'],
    [EPayType.OffLine, '线下支付'],
    [EPayType.Balance, '余额支付'],
    [EPayType.Rsx, '如是心支付'],
    [EPayType.YinSheng, '银行卡支付'],
    [EPayType.Integral, '积分支付']
]);

export function getPayTypeName(payType?: EPayType, balanceFlag?: boolean) {
    if (balanceFlag && payType !== EPayType.Balance) {
        return '余额+现金支付';
    }
    if (
        [EPayType.Alipay, EPayType.WeiXin, EPayType.OffLine, EPayType.YinSheng].includes(payType!)
    ) {
        return '现金支付';
    }
    return MPayType[payType!];
}
