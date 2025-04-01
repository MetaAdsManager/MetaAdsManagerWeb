/** @format */

import { convertEnum } from '@MetaAdsManager/utils/src/enumUtil';

/**
 * 活动类型
 */
export enum EActivityType {
    /**拼团 */
    Group = 0,
    // /** 预售 */
    // PreSale = 1,

    /** 秒杀 */
    FlashSale = 2,

    // /** 满减 */
    // Deduction = 3,

    // /** 满折 */
    // Discount = 4,

    /** 满赠 */
    Presented = 5,

    /** 优惠券 */
    Coupon = 6,

    // /** 会员折扣 */
    // MemberDiscount = 7,

    // /** 积分 */
    // Score = 8,

    // /** 包邮活动 */
    // FreeShipping = 9,

    /** 接龙活动 */
    Solitaire = 10
}

export const [MActivityType, OActivityType] = convertEnum([
    [EActivityType.Group, '拼团'],
    // [EActivityType.PreSale, '预售'],
    [EActivityType.FlashSale, '秒杀'],
    // [EActivityType.Deduction, '满减'],
    // [EActivityType.Discount, '满折'],
    [EActivityType.Presented, '满赠'],
    [EActivityType.Coupon, '购买赠送优惠券'],
    // [EActivityType.MemberDiscount, '会员折扣'],
    // [EActivityType.Score, '积分'],
    // [EActivityType.FreeShipping, '包邮'],
    [EActivityType.Solitaire, '接龙']
]);

/**
 * 标记颜色
 */
export enum ESignColorType {
    /* 红色 */
    Red = 0,
    /* 橙色 */
    Orange = 1,
    /* 绿色 */
    Green = 2,
}
export const [MSignColorType, OSignColorType] = convertEnum([
    [ESignColorType.Red, '红色'],
    [ESignColorType.Orange, '橙色'],
    [ESignColorType.Green, '绿色']
]);