/** @format */

import { getInitialState } from './app';
import { systemConfig } from '~/config';
const { config } = systemConfig;

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */

type ThenArg<T> = T extends Promise<infer U> ? U : T;
type TInitialState = ThenArg<ReturnType<typeof getInitialState>>;

export default function access(initialState: TInitialState) {
    const { authCodes = [], currentUser: { storeId } = {} } = initialState || {};

    const authMap = authCodes.reduce((result, code) => {
        result[code] = true;
        return result;
    }, {} as Record<string, any>);

    const accessCodes = {
        ...codes.reduce((result, code) => {
            result[code] = false;
            return result;
        }, {} as Record<string, boolean>),
        ...authMap
    };

    if (accessCodes['marketingActivity-hotKeyword']) {
        accessCodes['marketingActivity-hotKeyword'] = config.enableHotKeyword;
    }

    // for (const key in accessCodes) {
    //     if (
    //         (storeId !== '' && key.startsWith('reservationServiceManagement')) ||
    //         (storeId === '' && key.startsWith('reservationServiceOrderManagement'))
    //     ) {
    //         accessCodes[key] = false;
    //     }
    // }

    return accessCodes;
}

/**
 * 所有权限code
 *
 * 如果没有在config/confg.ts中开启access.strictMode = true。 那就就需要将所有的权限code都声明为false。否则会认为有权限跳过
 *
 * 在【系统设置-资源管理】页面中可以复制所有权限code。粘贴在此处
 */

export const codes = [
    // 'sysSetting-employeeManagement',
    // 'sysSetting-roleManagement',
    // 'sysSetting-operationLog',
    // 'sysSetting-loginLog',
    // 'sysSetting',
    // 'decorationSetting-decorationList',
    // 'decorationSetting-decorationList-detail',
    // 'decorationSetting-myManagement',
    // 'decorationSetting-myManagement-detail',
    // 'decorationSetting',
    // 'financialManagement-bankTransfer',
    // 'financialManagement-revenueStatistics',
    // 'financialManagement-commodityAnalysis',
    // 'financialManagement-performanceStatistics',
    // 'financialManagement-rsx',
    // 'financialManagement',
    // 'communityForums-classify',
    // 'communityForums-list',
    // 'communityForums',
    // 'newsManagement-list',
    // 'newsManagement-classify',
    // 'newsManagement',
    // 'marketingActivity-groupActivities',
    // 'marketingActivity-groupActivities-create',
    // 'marketingActivity-fullGift',
    // 'marketingActivity-fullGift-create',
    // 'marketingActivity-timeBuy',
    // 'marketingActivity-timeBuy-create',
    // 'marketingActivity-relayManagement',
    // 'marketingActivity-relayManagement-create',
    // 'marketingActivity',
    // 'couponManagement-list',
    // 'couponManagement-list-add',
    // 'couponManagement-list-detail',
    // 'couponManagement-receiveList',
    // 'couponManagement-grant',
    // 'couponManagement-grant-detail',
    // 'couponManagement',
    // 'freightTemplate-list',
    // 'freightTemplate-list-detail',
    // 'freightTemplate',
    // 'basicSetting-setting',
    // 'basicSetting-protocolConfiguration-agreementLogs',
    // 'basicSetting-protocolConfiguration-privacyLogs',
    // 'basicSetting-materialLibrary',
    // 'basicSetting-addressList',
    // 'basicSetting-integralSettings',
    // 'basicSetting-protocolConfiguration',
    // 'basicSetting-advertisingSpace-add',
    // 'basicSetting-balanceRecharge',
    // 'basicSetting',
    // 'hotelAfterSales-index',
    // 'hotelAfterSales',
    // 'hotelOrder-order',
    // 'hotelOrder-detail',
    // 'hotelOrder',
    // 'hotelManagement-banner',
    // 'hotelManagement-list-apartment-edit',
    // 'hotelManagement-list-apartment',
    // 'hotelManagement-list',
    // 'hotelManagement-blacklist',
    // 'hotelManagement-people',
    // 'hotelManagement',
    // 'orderManagement-orderList',
    // 'orderManagement-orderList-orderDetail',
    // 'orderManagement-integralGoodsOrder',
    // 'orderManagement-integralGoodsOrder-detail',
    // 'orderManagement-aftersaleList',
    // 'orderManagement-aftersaleList-afterDetail',
    // 'orderManagement',
    // 'goodsManagement-goodsClassify',
    // 'goodsManagement-goodSkuList',
    // 'goodsManagement-goodSkuList-goodSkuListChild',
    // 'goodsManagement-goodsGroup',
    // 'goodsManagement-goodsList',
    // 'goodsManagement-goodsList-goodsCreate',
    // 'goodsManagement-goodsList-goodsDetail',
    // 'goodsManagement-goodsList-goodsStock',
    // 'goodsManagement-goodsComments',
    // 'goodsManagement-labelManagement',
    // 'goodsManagement',
    // 'orderGoodsManagement-list',
    // 'orderGoodsManagement-grade',
    // 'orderGoodsManagement-basicRule',
    // 'orderGoodsManagement',
    // 'memberManagement-memberList',
    // 'memberManagement-memberList-memberDetail',
    // 'memberManagement-membershipTags',
    // 'memberManagement-memberRecharge',
    // 'memberManagement',
    // 'storeManagement-list',
    // 'storeManagement-edit',
    // 'storeManagement',
    // 'verifierManagement-index',
    // 'verifierManagement',
    // 'reservationServiceManagement-commodity',
    // 'reservationServiceManagement-commodityDetail',
    // 'reservationServiceManagement-setUp',
    // 'reservationServiceManagement-order',
    // 'reservationServiceManagement-orderDetail',
    // 'reservationServiceManagement-data',
    // 'reservationServiceManagement-divideCommission',
    // 'reservationServiceManagement',
    // 'pickupPoint-list',
    // 'pickupPoint-edit',
    // 'pickupPoint',
    // 'activityManagement-list',
    // 'activityManagement-listDetail',
    // 'activityManagement-record',
    // 'activityManagement-recordDetail',
    // 'activityManagement',
    // 'marketingActivity-coupon',
    // 'marketingActivity-coupon-create'
];

export type TAccessCode = (typeof codes)[number];
