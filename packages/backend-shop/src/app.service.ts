/** @format */

import { api } from './request';
import { TreeResourceVo } from './request/data-contracts';

/**
 * 获取用户信息
 * @returns
 */
export const fetchUserInfo = async () => {
    let authCodes: string[] = [];
    let currentUser = { name: '', email: '', storeId: '' };
    try {
        // const { data } = await api['/admin/api/sysUser/current-authorities_GET']();
        // if (data) {
            const { buttons = [], menusTree = [], email = '', username = '', storeId = '' } = {
        "userId": 1,
        "mobile": "19999999999",
        "username": "admin",
        "email": "admin@admin.com",
        "menusTree": [
            {
                "id": 68,
                "title": "系统设置",
                "sortNum": 15,
                "children": [
                    {
                        "id": 69,
                        "title": "人员管理",
                        "sortNum": 0,
                        "parentId": 68,
                        "code": "sysSetting-employeeManagement",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 70,
                        "title": "角色管理",
                        "sortNum": 0,
                        "parentId": 68,
                        "code": "sysSetting-roleManagement",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 71,
                        "title": "操作日志",
                        "sortNum": 0,
                        "parentId": 68,
                        "code": "sysSetting-operationLog",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "sysSetting",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            },
            {
                "id": 65,
                "title": "自定义页面",
                "sortNum": 14,
                "children": [
                    {
                        "id": 66,
                        "title": "页面管理",
                        "sortNum": 0,
                        "parentId": 65,
                        "code": "decorationSetting-decorationList",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 67,
                        "title": "页面详情",
                        "sortNum": 0,
                        "parentId": 65,
                        "code": "decorationSetting-decorationList-detail",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 84,
                        "title": "我的管理",
                        "sortNum": 0,
                        "parentId": 65,
                        "code": "decorationSetting-myManagement",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 85,
                        "title": "我的详情",
                        "sortNum": 0,
                        "parentId": 65,
                        "code": "decorationSetting-myManagement-detail",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "decorationSetting",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            },
            {
                "id": 61,
                "title": "财务管理",
                "sortNum": 13,
                "children": [
                    {
                        "id": 62,
                        "title": "营收统计",
                        "sortNum": 0,
                        "parentId": 61,
                        "code": "financialManagement-revenueStatistics",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 63,
                        "title": "商品分析",
                        "sortNum": 0,
                        "parentId": 61,
                        "code": "financialManagement-commodityAnalysis",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 64,
                        "title": "业绩统计",
                        "sortNum": 0,
                        "parentId": 61,
                        "code": "financialManagement-performanceStatistics",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 113,
                        "title": "如是新明细",
                        "sortNum": 0,
                        "parentId": 61,
                        "code": "financialManagement-rsx",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 117,
                        "title": "银盛转账",
                        "sortNum": 0,
                        "parentId": 61,
                        "code": "financialManagement-bankTransfer",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "financialManagement",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            },
            {
                "id": 58,
                "title": "社区论坛",
                "sortNum": 12,
                "children": [
                    {
                        "id": 59,
                        "title": "文章分类管理",
                        "sortNum": 0,
                        "parentId": 58,
                        "code": "communityForums-classify",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 60,
                        "title": "文章列表",
                        "sortNum": 0,
                        "parentId": 58,
                        "code": "communityForums-list",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "communityForums",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            },
            {
                "id": 55,
                "title": "资讯管理",
                "sortNum": 11,
                "children": [
                    {
                        "id": 56,
                        "title": "资讯列表",
                        "sortNum": 0,
                        "parentId": 55,
                        "code": "newsManagement-list",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 57,
                        "title": "资讯分类",
                        "sortNum": 0,
                        "parentId": 55,
                        "code": "newsManagement-classify",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "newsManagement",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            },
            {
                "id": 46,
                "title": "营销活动",
                "sortNum": 10,
                "children": [
                    {
                        "id": 47,
                        "title": "拼团管理",
                        "sortNum": 0,
                        "parentId": 46,
                        "code": "marketingActivity-groupActivities",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 48,
                        "title": "拼团活动新增编辑",
                        "sortNum": 0,
                        "parentId": 46,
                        "code": "marketingActivity-groupActivities-create",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 49,
                        "title": "满赠管理",
                        "sortNum": 0,
                        "parentId": 46,
                        "code": "marketingActivity-fullGift",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 50,
                        "title": "满赠活动新增编辑",
                        "sortNum": 0,
                        "parentId": 46,
                        "code": "marketingActivity-fullGift-create",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 51,
                        "title": "秒杀管理",
                        "sortNum": 0,
                        "parentId": 46,
                        "code": "marketingActivity-timeBuy",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 52,
                        "title": "秒杀活动新增编辑",
                        "sortNum": 0,
                        "parentId": 46,
                        "code": "marketingActivity-timeBuy-create",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 53,
                        "title": "接龙管理",
                        "sortNum": 0,
                        "parentId": 46,
                        "code": "marketingActivity-relayManagement",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 54,
                        "title": "接龙活动新增编辑",
                        "sortNum": 0,
                        "parentId": 46,
                        "code": "marketingActivity-relayManagement-create",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 115,
                        "title": "优恵券管理",
                        "sortNum": 0,
                        "parentId": 46,
                        "code": "marketingActivity-coupon",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 116,
                        "title": "优恵券新增编辑",
                        "sortNum": 0,
                        "parentId": 46,
                        "code": "marketingActivity-coupon-create",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "marketingActivity",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            },
            {
                "id": 39,
                "title": "优惠券",
                "sortNum": 9,
                "children": [
                    {
                        "id": 40,
                        "title": "优惠券列表",
                        "sortNum": 0,
                        "parentId": 39,
                        "code": "couponManagement-list",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 41,
                        "title": "优惠券新增编辑",
                        "sortNum": 0,
                        "parentId": 39,
                        "code": "couponManagement-list-add",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 42,
                        "title": "优惠券详情",
                        "sortNum": 0,
                        "parentId": 39,
                        "code": "couponManagement-list-detail",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 43,
                        "title": "优惠券领用记录",
                        "sortNum": 0,
                        "parentId": 39,
                        "code": "couponManagement-receiveList",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 44,
                        "title": "优惠券发放",
                        "sortNum": 0,
                        "parentId": 39,
                        "code": "couponManagement-grant",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 45,
                        "title": "发放详情",
                        "sortNum": 0,
                        "parentId": 39,
                        "code": "couponManagement-grant-detail",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "couponManagement",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            },
            {
                "id": 36,
                "title": "运费模板管理",
                "sortNum": 8,
                "children": [
                    {
                        "id": 37,
                        "title": "运费模板",
                        "sortNum": 0,
                        "parentId": 36,
                        "code": "freightTemplate-list",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 38,
                        "title": "新增/编辑模版",
                        "sortNum": 0,
                        "parentId": 36,
                        "code": "freightTemplate-list-detail",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "freightTemplate",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            },
            {
                "id": 27,
                "title": "基础设置",
                "sortNum": 7,
                "children": [
                    {
                        "id": 28,
                        "title": "商城基础设置",
                        "sortNum": 0,
                        "parentId": 27,
                        "code": "basicSetting-setting",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 29,
                        "title": "用户协议记录",
                        "sortNum": 0,
                        "parentId": 27,
                        "code": "basicSetting-protocolConfiguration-agreementLogs",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 30,
                        "title": "隐私政策记录",
                        "sortNum": 0,
                        "parentId": 27,
                        "code": "basicSetting-protocolConfiguration-privacyLogs",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 31,
                        "title": "素材库",
                        "sortNum": 0,
                        "parentId": 27,
                        "code": "basicSetting-materialLibrary",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 32,
                        "title": "地址库",
                        "sortNum": 0,
                        "parentId": 27,
                        "code": "basicSetting-addressList",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 33,
                        "title": "积分设置",
                        "sortNum": 0,
                        "parentId": 27,
                        "code": "basicSetting-integralSettings",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 34,
                        "title": "协议管理",
                        "sortNum": 0,
                        "parentId": 27,
                        "code": "basicSetting-protocolConfiguration",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 35,
                        "title": "广告位编辑新增",
                        "sortNum": 0,
                        "parentId": 27,
                        "code": "basicSetting-advertisingSpace-add",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 86,
                        "title": "余额充值赠送设置",
                        "sortNum": 0,
                        "parentId": 27,
                        "code": "basicSetting-balanceRecharge",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "basicSetting",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            },
            {
                "id": 82,
                "title": "酒店售后管理",
                "sortNum": 6,
                "children": [
                    {
                        "id": 83,
                        "title": "酒店售后",
                        "sortNum": 0,
                        "parentId": 82,
                        "code": "hotelAfterSales-index",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "hotelAfterSales",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            },
            {
                "id": 79,
                "title": "酒店订单管理",
                "sortNum": 5,
                "children": [
                    {
                        "id": 80,
                        "title": "酒店订单",
                        "sortNum": 0,
                        "parentId": 79,
                        "code": "hotelOrder-order",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 81,
                        "title": "酒店订单详情",
                        "sortNum": 0,
                        "parentId": 79,
                        "code": "hotelOrder-detail",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "hotelOrder",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            },
            {
                "id": 72,
                "title": "酒店管理",
                "sortNum": 4,
                "children": [
                    {
                        "id": 73,
                        "title": "酒店Banner管理",
                        "sortNum": 0,
                        "parentId": 72,
                        "code": "hotelManagement-banner",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 74,
                        "title": "酒店列表",
                        "sortNum": 0,
                        "children": [
                            {
                                "id": 75,
                                "title": "酒店房型",
                                "sortNum": 0,
                                "children": [
                                    {
                                        "id": 76,
                                        "title": "房型编辑",
                                        "sortNum": 0,
                                        "parentId": 75,
                                        "code": "hotelManagement-list-apartment-edit",
                                        "type": 0,
                                        "memo": "",
                                        "icon": "",
                                        "visible": true
                                    }
                                ],
                                "parentId": 74,
                                "code": "hotelManagement-list-apartment",
                                "type": 0,
                                "memo": "",
                                "icon": "",
                                "visible": true
                            }
                        ],
                        "parentId": 72,
                        "code": "hotelManagement-list",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 77,
                        "title": "酒店黑名单",
                        "sortNum": 0,
                        "parentId": 72,
                        "code": "hotelManagement-blacklist",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 78,
                        "title": "酒店人员设置",
                        "sortNum": 0,
                        "parentId": 72,
                        "code": "hotelManagement-people",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "hotelManagement",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            },
            {
                "id": 20,
                "title": "订单管理",
                "sortNum": 3,
                "children": [
                    {
                        "id": 21,
                        "title": "订单管理",
                        "sortNum": 0,
                        "parentId": 20,
                        "code": "orderManagement-orderList",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 22,
                        "title": "订单详情",
                        "sortNum": 0,
                        "parentId": 20,
                        "code": "orderManagement-orderList-orderDetail",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 23,
                        "title": "积分商品订单管理",
                        "sortNum": 0,
                        "parentId": 20,
                        "code": "orderManagement-integralGoodsOrder",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 24,
                        "title": "积分商品订单详情",
                        "sortNum": 0,
                        "parentId": 20,
                        "code": "orderManagement-integralGoodsOrder-detail",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 25,
                        "title": "售后管理",
                        "sortNum": 0,
                        "parentId": 20,
                        "code": "orderManagement-aftersaleList",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 26,
                        "title": "售后详情",
                        "sortNum": 0,
                        "parentId": 20,
                        "code": "orderManagement-aftersaleList-afterDetail",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "orderManagement",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            },
            {
                "id": 10,
                "title": "商品管理",
                "sortNum": 2,
                "children": [
                    {
                        "id": 11,
                        "title": "分类管理",
                        "sortNum": 0,
                        "parentId": 10,
                        "code": "goodsManagement-goodsClassify",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 12,
                        "title": "规格管理",
                        "sortNum": 0,
                        "parentId": 10,
                        "code": "goodsManagement-goodSkuList",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 13,
                        "title": "子规格管理",
                        "sortNum": 0,
                        "parentId": 10,
                        "code": "goodsManagement-goodSkuList-goodSkuListChild",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 14,
                        "title": "商品组列表",
                        "sortNum": 0,
                        "parentId": 10,
                        "code": "goodsManagement-goodsGroup",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 15,
                        "title": "商品管理",
                        "sortNum": 0,
                        "parentId": 10,
                        "code": "goodsManagement-goodsList",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 16,
                        "title": "商品编辑",
                        "sortNum": 0,
                        "parentId": 10,
                        "code": "goodsManagement-goodsList-goodsCreate",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 17,
                        "title": "商品详情",
                        "sortNum": 0,
                        "parentId": 10,
                        "code": "goodsManagement-goodsList-goodsDetail",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 18,
                        "title": "库存管理",
                        "sortNum": 0,
                        "parentId": 10,
                        "code": "goodsManagement-goodsList-goodsStock",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 19,
                        "title": "评价管理",
                        "sortNum": 0,
                        "parentId": 10,
                        "code": "goodsManagement-goodsComments",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 114,
                        "title": "商品标签管理",
                        "sortNum": 0,
                        "parentId": 10,
                        "code": "goodsManagement-labelManagement",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "goodsManagement",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            },
            {
                "id": 6,
                "title": "订货商管理",
                "sortNum": 1,
                "children": [
                    {
                        "id": 7,
                        "title": "订货商管理",
                        "sortNum": 0,
                        "parentId": 6,
                        "code": "orderGoodsManagement-list",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 8,
                        "title": "订货商等级管理",
                        "sortNum": 0,
                        "parentId": 6,
                        "code": "orderGoodsManagement-grade",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 9,
                        "title": "订货商基础规则",
                        "sortNum": 0,
                        "parentId": 6,
                        "code": "orderGoodsManagement-basicRule",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "orderGoodsManagement",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            },
            {
                "id": 1,
                "title": "会员管理",
                "sortNum": 0,
                "children": [
                    {
                        "id": 2,
                        "title": "会员列表",
                        "sortNum": 0,
                        "parentId": 1,
                        "code": "memberManagement-memberList",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 3,
                        "title": "会员详情",
                        "sortNum": 0,
                        "parentId": 1,
                        "code": "memberManagement-memberList-memberDetail",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 4,
                        "title": "会员标签管理",
                        "sortNum": 0,
                        "parentId": 1,
                        "code": "memberManagement-membershipTags",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 5,
                        "title": "会员充值记录",
                        "sortNum": 0,
                        "parentId": 1,
                        "code": "memberManagement-memberRecharge",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "memberManagement",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            },
            {
                "id": 87,
                "title": "门店管理",
                "sortNum": 0,
                "children": [
                    {
                        "id": 88,
                        "title": "门店列表",
                        "sortNum": 0,
                        "parentId": 87,
                        "code": "storeManagement-list",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 89,
                        "title": "门店详情",
                        "sortNum": 0,
                        "parentId": 87,
                        "code": "storeManagement-edit",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "storeManagement",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            },
            {
                "id": 90,
                "title": "核销员管理",
                "sortNum": 0,
                "children": [
                    {
                        "id": 91,
                        "title": "核销员列表",
                        "sortNum": 0,
                        "parentId": 90,
                        "code": "verifierManagement-index",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "verifierManagement",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            },
            {
                "id": 92,
                "title": "预约服务管理",
                "sortNum": 0,
                "children": [
                    {
                        "id": 93,
                        "title": "预约服务商品",
                        "sortNum": 0,
                        "parentId": 92,
                        "code": "reservationServiceManagement-commodity",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 94,
                        "title": "服务商品详情",
                        "sortNum": 0,
                        "parentId": 92,
                        "code": "reservationServiceManagement-commodityDetail",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 95,
                        "title": "预约服务分佣设置",
                        "sortNum": 0,
                        "parentId": 92,
                        "code": "reservationServiceManagement-setUp",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 96,
                        "title": "预约服务订单管理",
                        "sortNum": 0,
                        "parentId": 92,
                        "code": "reservationServiceManagement-order",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 97,
                        "title": "预约服务订单详情",
                        "sortNum": 0,
                        "parentId": 92,
                        "code": "reservationServiceManagement-orderDetail",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 98,
                        "title": "预约服务订单数据",
                        "sortNum": 0,
                        "parentId": 92,
                        "code": "reservationServiceManagement-data",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 99,
                        "title": "分佣明细",
                        "sortNum": 0,
                        "parentId": 92,
                        "code": "reservationServiceManagement-divideCommission",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "reservationServiceManagement",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            },
            {
                "id": 105,
                "title": "自提点设置",
                "sortNum": 0,
                "children": [
                    {
                        "id": 106,
                        "title": "自提点列表",
                        "sortNum": 0,
                        "parentId": 105,
                        "code": "pickupPoint-list",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 107,
                        "title": "自提点详情",
                        "sortNum": 0,
                        "parentId": 105,
                        "code": "pickupPoint-edit",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "pickupPoint",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            },
            {
                "id": 108,
                "title": "活动管理",
                "sortNum": 0,
                "children": [
                    {
                        "id": 109,
                        "title": "活动审核",
                        "sortNum": 0,
                        "parentId": 108,
                        "code": "activityManagement-list",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 110,
                        "title": "活动审核详情",
                        "sortNum": 0,
                        "parentId": 108,
                        "code": "activityManagement-listDetail",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 111,
                        "title": "参与记录",
                        "sortNum": 0,
                        "parentId": 108,
                        "code": "activityManagement-record",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 112,
                        "title": "参与记录详情",
                        "sortNum": 0,
                        "parentId": 108,
                        "code": "activityManagement-recordDetail",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "activityManagement",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            },
            {
                "id": 118,
                "title": "菜地管理",
                "sortNum": 0,
                "children": [
                    {
                        "id": 119,
                        "title": "菜地管理",
                        "sortNum": 0,
                        "parentId": 118,
                        "code": "farmManagement-farmList",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    },
                    {
                        "id": 120,
                        "title": "菜地配送",
                        "sortNum": 0,
                        "parentId": 118,
                        "code": "farmManagement-fastMailList",
                        "type": 0,
                        "memo": "",
                        "icon": "",
                        "visible": true
                    }
                ],
                "parentId": 0,
                "code": "farmManagement",
                "type": 0,
                "memo": "",
                "icon": "",
                "visible": true
            }
        ],
        "buttons": [],
        "apis": []
    };
            authCodes = buttons.concat(getMenuCodesFromMenuTree(menusTree));
            currentUser = {
                name: username,
                email,
                storeId
            };
        // }
    } catch (error) {}

    return { authCodes, currentUser };
};

function getMenuCodesFromMenuTree(data: TreeResourceVo[], codes: string[] = []) {
    return data.reduce((result, item) => {
        const { code = '', children = [] } = item;
        result.push(code);
        if (children.length) {
            return getMenuCodesFromMenuTree(children, result);
        }

        return result;
    }, codes);
}
