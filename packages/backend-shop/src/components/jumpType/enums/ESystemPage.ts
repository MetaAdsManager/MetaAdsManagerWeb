/** @format */

import { converEnmuMap, converEnumArray } from '~/enums/utils';

/** 应用系统页面 */
export enum ESystemPage {
    /** 个人中心 */
    Mine = '/pages/tabBar/mine/index',
    /** 商品分类 */
    GoodsCategory = '/pages/tabBar/categorys/index',
    /** 我的订单 */
    Orders = '/pages/order/list/index',
    /** 购物车 */
    Cart = '/pages/tabBar/otherComponents/index',
    /** 订货商中心 */
    Dealer = '/pages/tabBar/mine/index?tabIndex=1',
    /** 我的收藏 */
    Favorites = '/pages/collection/index',
    /** 我的优惠券 */
    Coupons = '/pages/mine/coupon/index',
    /** 我的钱包 */
    Wallet = '/pages/mine/wallet/wallet/index',
    /** 我的积分 */
    Integral = '/pages/mine/points/index',
    /** 任务中心 */
    TaskCenter = '/pages/mine/missionCenter/list/index',
    /** 我的售后 */
    AfterSales = '/pages/afterSales/index/index',
    /** 社区论坛 */
    Community = '/pages/forumsPages/list/index',
    /** 资讯 */
    Message = '/pages/newsPages/list/index',
    /** 设置 */
    Settings = '/pages/mine/settings/setting/index',
    /** 酒店列表 */
    HotelList = '/pages/hotels/list/index',
    /** 全部门店 */
    Store = '/pages/eventManagement/allStores/index',
    /** 酒店订单 */
    HotelOrder = '/pages/order/hotel/index',
    /** 如是活动 */
    Activity = '/pages/eventManagement/activityList/index'
}

export enum ESystemPageHidden {
    /** 商品详情 */
    GoodDetail = '/pages/goods/goodDetail/index',
    /** 自定义装修 */
    Decoration = '/pages/decoration/index'
}

const ASystemPage = [
    [ESystemPage.Mine, '个人中心'],
    [ESystemPage.GoodsCategory, '商品分类'],
    [ESystemPage.HotelList, '酒店列表'],
    [ESystemPage.Orders, '我的订单'],
    [ESystemPage.HotelOrder, '酒店订单'],
    [ESystemPage.Cart, '购物车'],
    [ESystemPage.Dealer, '订货商中心'],
    [ESystemPage.Favorites, '我的收藏'],
    [ESystemPage.Coupons, '我的优惠券'],
    [ESystemPage.Wallet, '我的钱包'],
    [ESystemPage.Integral, '我的积分'],
    [ESystemPage.TaskCenter, '任务中心'],
    [ESystemPage.AfterSales, '我的售后'],
    [ESystemPage.Community, '社区论坛'],
    [ESystemPage.Message, '资讯'],
    [ESystemPage.Settings, '设置'],
    [ESystemPage.Store, '全部门店'],
    [ESystemPage.Activity, '如是活动']
];

/** 描述数据 */
export const MSystemPage = converEnmuMap(ASystemPage);

export const OSystemPage = converEnumArray(ASystemPage);
