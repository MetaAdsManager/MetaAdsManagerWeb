
/**
 * 页面路由映射.
 * 请不要在此文件添加任何代码。因为生成后会全量覆盖
 * 运行 npm run route 或者 yarn route 自动生成
 */

export const routeNames = {
  /** 登录 */
  login: '/login',
  /** 首页 */
  home: '/home',
  /** 会员列表 */
  memberManagementMemberList: '/memberManagement/memberList',
  /** 会员详情 */
  memberManagementMemberListMemberDetail: '/memberManagement/memberList/memberDetail',
  /** 会员标签管理 */
  memberManagementMembershipTags: '/memberManagement/membershipTags',
  /** 会员充值记录 */
  memberManagementMemberRecharge: '/memberManagement/memberRecharge',
  /** 订货商管理 */
  orderGoodsManagementList: '/orderGoodsManagement/list',
  /** 订货商等级管理 */
  orderGoodsManagementGrade: '/orderGoodsManagement/grade',
  /** 订货商基础规则 */
  orderGoodsManagementBasicRule: '/orderGoodsManagement/basicRule',
  /** 门店列表 */
  storeManagementList: '/storeManagement/list',
  /** 门店详情 */
  storeManagementEdit: '/storeManagement/edit',
  /** 核销员列表 */
  verifierManagementIndex: '/verifierManagement/index',
  /** 预约服务商品 */
  reservationServiceManagementCommodity: '/reservationServiceManagement/commodity',
  /** 服务商品详情 */
  reservationServiceManagementCommodityDetail: '/reservationServiceManagement/commodityDetail',
  /** 预约服务分佣设置 */
  reservationServiceManagementSetUp: '/reservationServiceManagement/setUp',
  /** 餐饮类服务时间配置 */
  reservationServiceManagementTimeConfiguration: '/reservationServiceManagement/timeConfiguration',
  /** 预约服务订单管理 */
  reservationServiceManagementOrder: '/reservationServiceManagement/order',
  /** 预约服务订单详情 */
  reservationServiceManagementOrderDetail: '/reservationServiceManagement/orderDetail',
  /** 预约服务订单数据 */
  reservationServiceManagementData: '/reservationServiceManagement/data',
  /** 分佣明细 */
  reservationServiceManagementDivideCommission: '/reservationServiceManagement/divideCommission',
  /** 商品标签管理 */
  goodsManagementLabelManagement: '/goodsManagement/labelManagement',
  /** 分类管理 */
  goodsManagementGoodsClassify: '/goodsManagement/goodsClassify',
  /** 规格管理 */
  goodsManagementGoodSkuList: '/goodsManagement/goodSkuList',
  /** 子规格管理 */
  goodsManagementGoodSkuListGoodSkuListChild: '/goodsManagement/goodSkuList/goodSkuListChild',
  /** 商品组列表 */
  goodsManagementGoodsGroup: '/goodsManagement/goodsGroup',
  /** 商品管理 */
  goodsManagementGoodsList: '/goodsManagement/goodsList',
  /** 商品编辑 */
  goodsManagementGoodsListGoodsCreate: '/goodsManagement/goodsList/goodsCreate',
  /** 商品详情 */
  goodsManagementGoodsListGoodsDetail: '/goodsManagement/goodsList/goodsDetail',
  /** 库存管理 */
  goodsManagementGoodsListGoodsStock: '/goodsManagement/goodsList/goodsStock',
  /** 评价管理 */
  goodsManagementGoodsComments: '/goodsManagement/goodsComments',
  /** 订单管理 */
  orderManagementOrderList: '/orderManagement/orderList',
  /** 订单详情 */
  orderManagementOrderListOrderDetail: '/orderManagement/orderList/orderDetail',
  /** 售后管理 */
  orderManagementAftersaleList: '/orderManagement/aftersaleList',
  /** 售后详情 */
  orderManagementAftersaleListAfterDetail: '/orderManagement/aftersaleList/afterDetail',
  /** 酒店Banner管理 */
  hotelManagementBanner: '/hotelManagement/banner',
  /** 酒店列表 */
  hotelManagementList: '/hotelManagement/list',
  /** 酒店房型 */
  hotelManagementListApartment: '/hotelManagement/list/apartment',
  /** 房型编辑 */
  hotelManagementListApartmentEdit: '/hotelManagement/list/apartment/edit',
  /** 酒店黑名单 */
  hotelManagementBlacklist: '/hotelManagement/blacklist',
  /** 酒店人员设置 */
  hotelManagementPeople: '/hotelManagement/people',
  /** 酒店订单 */
  hotelOrderOrder: '/hotelOrder/order',
  /** 酒店订单详情 */
  hotelOrderDetail: '/hotelOrder/detail',
  /** 酒店售后 */
  hotelAfterSalesIndex: '/hotelAfterSales/index',
  /** 商城基础设置 */
  basicSettingSetting: '/basicSetting/setting',
  /** 余额充值赠送设置 */
  basicSettingBalanceRecharge: '/basicSetting/balanceRecharge',
  /** 用户协议记录 */
  basicSettingProtocolConfigurationAgreementLogs: '/basicSetting/protocolConfiguration/agreementLogs',
  /** 隐私政策记录 */
  basicSettingProtocolConfigurationPrivacyLogs: '/basicSetting/protocolConfiguration/privacyLogs',
  /** 素材库 */
  basicSettingMaterialLibrary: '/basicSetting/materialLibrary',
  /** 地址库 */
  basicSettingAddressList: '/basicSetting/addressList',
  /** 积分设置 */
  basicSettingIntegralSettings: '/basicSetting/integralSettings',
  /** 协议管理 */
  basicSettingProtocolConfiguration: '/basicSetting/protocolConfiguration',
  /** APP版本管理 */
  basicSettingAppVersion: '/basicSetting/appVersion',
  /** 广告位编辑新增 */
  basicSettingAdvertisingSpaceAdd: '/basicSetting/advertisingSpace/add',
  /** 运费模板 */
  freightTemplateList: '/freightTemplate/list',
  /** 新增/编辑模版 */
  freightTemplateListDetail: '/freightTemplate/list/detail',
  /** 自提点列表 */
  pickupPointList: '/pickupPoint/list',
  /** 自提点详情 */
  pickupPointEdit: '/pickupPoint/edit',
  /** 优惠券列表 */
  couponManagementList: '/couponManagement/list',
  /** 优惠券新增编辑 */
  couponManagementListAdd: '/couponManagement/list/add',
  /** 优惠券详情 */
  couponManagementListDetail: '/couponManagement/list/detail',
  /** 优惠券领用记录 */
  couponManagementReceiveList: '/couponManagement/receiveList',
  /** 优惠券发放 */
  couponManagementGrant: '/couponManagement/grant',
  /** 发放详情 */
  couponManagementGrantDetail: '/couponManagement/grant/detail',
  /** 拼团管理 */
  marketingActivityGroupActivities: '/marketingActivity/groupActivities',
  /** 拼团活动新增编辑 */
  marketingActivityGroupActivitiesCreate: '/marketingActivity/groupActivities/create',
  /** 满赠管理 */
  marketingActivityFullGift: '/marketingActivity/fullGift',
  /** 满赠活动新增编辑 */
  marketingActivityFullGiftCreate: '/marketingActivity/fullGift/create',
  /** 秒杀管理 */
  marketingActivityTimeBuy: '/marketingActivity/timeBuy',
  /** 秒杀活动新增编辑 */
  marketingActivityTimeBuyCreate: '/marketingActivity/timeBuy/create',
  /** 接龙管理 */
  marketingActivityRelayManagement: '/marketingActivity/relayManagement',
  /** 接龙活动新增编辑 */
  marketingActivityRelayManagementCreate: '/marketingActivity/relayManagement/create',
  /** 优恵券管理 */
  marketingActivityCoupon: '/marketingActivity/coupon',
  /** 优恵券管理新增编辑 */
  marketingActivityCouponCreate: '/marketingActivity/coupon/create',
  /** 活动审核 */
  activityManagementList: '/activityManagement/list',
  /** 活动审核详情 */
  activityManagementListDetail: '/activityManagement/listDetail',
  /** 参与记录 */
  activityManagementRecord: '/activityManagement/record',
  /** 参与记录详情 */
  activityManagementRecordDetail: '/activityManagement/recordDetail',
  /** 活动编辑 */
  activityManagementListEdit: '/activityManagement/listEdit',
  /** 资讯列表 */
  newsManagementList: '/newsManagement/list',
  /** 资讯分类 */
  newsManagementClassify: '/newsManagement/classify',
  /** 文章分类管理 */
  communityForumsClassify: '/communityForums/classify',
  /** 文章列表 */
  communityForumsList: '/communityForums/list',
  /** 营收统计 */
  financialManagementRevenueStatistics: '/financialManagement/revenueStatistics',
  /** 商品分析 */
  financialManagementCommodityAnalysis: '/financialManagement/commodityAnalysis',
  /** 业绩统计 */
  financialManagementPerformanceStatistics: '/financialManagement/performanceStatistics',
  /** 提现记录 */
  financialManagementWithdrawalRecord: '/financialManagement/withdrawalRecord',
  /** 银盛转账 */
  financialManagementBankTransfer: '/financialManagement/bankTransfer',
  /** 菜地管理 */
  farmManagementFarmList: '/farmManagement/farmList',
  /** 菜地配送 */
  farmManagementFastMailList: '/farmManagement/fastMailList',
  /** 设备管理 */
  farmManagementDeviceList: '/farmManagement/deviceList',
  /** 用户设置 */
  userSetting: '/user/setting',
  /** 消息中心 */
  userNotices: '/user/notices',
  /** 页面管理 */
  decorationSettingDecorationList: '/decorationSetting/decorationList',
  /** 页面详情 */
  decorationSettingDecorationListDetail: '/decorationSetting/decorationList/detail',
  /** 我的管理 */
  decorationSettingMyManagement: '/decorationSetting/myManagement',
  /** 我的管理 */
  decorationSettingMyManagementDetail: '/decorationSetting/myManagement/detail',
  /** 人员管理 */
  sysSettingEmployeeManagement: '/sysSetting/employeeManagement',
  /** 角色管理 */
  sysSettingRoleManagement: '/sysSetting/roleManagement',
  /** 操作日志 */
  sysSettingOperationLog: '/sysSetting/operationLog',
  /** 登录日志 */
  sysSettingLoginLog: '/sysSetting/loginLog',
  /** 资源管理 */
  sysSettingResourcesManagement: '/sysSetting/resourcesManagement'
}

