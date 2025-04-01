/** @format */

import { convertEnum } from '@MetaAdsManager/utils/src/enumUtil';

/**
 * 商品类型
 */
export enum EVirtualType {
    Actual, // 实物商品
    Virtual // 虚拟商品
}

export const [MVirtualType, OVirtualType] = convertEnum([
    [EVirtualType.Actual, '实物商品'],
    [EVirtualType.Virtual, '虚拟商品']
]);

/**
 * 销售方式
 */
export enum ESaleTypeEnum {
    Cash = 1, // 纯现金
    Score = 2, // 纯积分
    All = 3, // 现金 + 积分
    Rsx
}

export const [MSaleType, OSaleType] = convertEnum([
    [ESaleTypeEnum.Cash, '纯现金'],
    [ESaleTypeEnum.Score, '纯积分'],
    [ESaleTypeEnum.All, '现金+积分'],
    [ESaleTypeEnum.Rsx, '纯如是心']
]);

/**
 *  是否上架
 */

export enum EShelvedEnum {
    Offline = 0,
    Online = 1
}
export const [MShelved, OShelved] = convertEnum([
    [EShelvedEnum.Offline, '下架'],
    [EShelvedEnum.Online, '上架']
]);

/**
 * 购买限制
 */
export enum EBuyStatusEnum {
    NoLimit,
    Limit
}

export const [MBuyStatus, OBuyStatus] = convertEnum([
    [EBuyStatusEnum.NoLimit, '不限制'],
    [EBuyStatusEnum.Limit, '限制']
]);

/**
 * 限购限制
 */
export enum EBuyLimitQuantity {
    /** 不限购 */
    None = -1,
    /** 每天 */
    Daily,
    /** 每月 */
    Monthly,
    /** 每年 */
    Yearly,
    /** 终身 */
    Once
}

export const [MBuyLimitQuantity, OBuyLimitQuantity] = convertEnum([
    [EBuyLimitQuantity.None, '不限购'],
    [EBuyLimitQuantity.Daily, '每天'],
    [EBuyLimitQuantity.Monthly, '每月'],
    [EBuyLimitQuantity.Yearly, '每年'],
    [EBuyLimitQuantity.Once, '终身']
]);

/**
 * 留言类型
 */
export enum EGoodMessageType {
    /** 文本 */
    Text = 1,
    /** 手机号 */
    Mobile,
    /** 身份证 */
    IdCard
}

export const [MGoodMessageType, OGoodMessageType] = convertEnum([
    [EGoodMessageType.Text, '文本'],
    [EGoodMessageType.Mobile, '手机号'],
    [EGoodMessageType.IdCard, '身份证']
]);
