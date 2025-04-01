/* eslint-disable object-shorthand */
/* eslint-disable max-lines */
/* eslint-disable id-length */

import {
  AddCommentsDTO,
  BalanceRechargeInputDto,
  CalculateOrderContext,
  CollectionCreateInputDto,
  CouponCodeBindInputDto,
  GoodsQuery,
  GoodsQueryByNo,
  GoodsShareRequestDto,
  HotelOrderDto,
  HotelRefundOrderDto,
  JsonResultBalanceGetOutputDto,
  JsonResultBigdecimal,
  JsonResultBoolean,
  JsonResultBuyerGradeResponseDTO,
  JsonResultBuyerManageAppDetailResponseDTO,
  JsonResultCommentsVO,
  JsonResultCouponAvailableGoodsOutputDto,
  JsonResultExpressTrackRespDto,
  JsonResultGoodsSkuStockAndPriceVo,
  JsonResultGoodsVO,
  JsonResultHotel,
  JsonResultHotelBanner,
  JsonResultHotelOrder,
  JsonResultHotelOrderRefund,
  JsonResultHotelRoom,
  JsonResultInt,
  JsonResultListBannerPositionOutputDto,
  JsonResultListCityDto,
  JsonResultListConfConfigOutputDto,
  JsonResultListCouponTemplateVo,
  JsonResultListEarningRecordListResponseDto,
  JsonResultListHotelBanner,
  JsonResultListHotKeywordDto,
  JsonResultListInt,
  JsonResultListLive,
  JsonResultListMallExpressCompanyVo,
  JsonResultListMenuTreeOutputDto,
  JsonResultListPopupAdsDto,
  JsonResultListReachStandUpgradeConfOutputDto,
  JsonResultListRechargeAmount,
  JsonResultListRefundReasonOutputDto,
  JsonResultListShopCartVO,
  JsonResultListString,
  JsonResultLive,
  JsonResultLivePage,
  JsonResultLong,
  JsonResultMallConfPageSimpleOutputDto,
  JsonResultMapStringObject,
  JsonResultMapStringString,
  JsonResultMarketingActivityDto,
  JsonResultMarketingActivityGroupRecordsWebInfoVo,
  JsonResultMarketingActivityGroupRecordsWebListAndNumVo,
  JsonResultMarketingActivityOfGroupWebListVo,
  JsonResultMemberLoginOutputDto,
  JsonResultMemberOutputDto,
  JsonResultMemCardDto,
  JsonResultMemCardRelationDto,
  JsonResultMemStatisticsDto,
  JsonResultNewcomerGiftOutputDto,
  JsonResultOrderCalculateResponse,
  JsonResultOrderCountVO,
  JsonResultOrderPayDTO,
  JsonResultOrderVO,
  JsonResultPagedAllResultOrderVO,
  JsonResultPagedResultHotel,
  JsonResultPagedResultHotelOrder,
  JsonResultPagedResultHotelOrderRefund,
  JsonResultPagedResultHotelRoom,
  JsonResultPagedResultMarketingActivityGroupRecordsItemDto,
  JsonResultPagedScrollResultBalanceFlowOutputDto,
  JsonResultPagedScrollResultCollectionVo,
  JsonResultPagedScrollResultCommentsVO,
  JsonResultPagedScrollResultCouponTemplateVo,
  JsonResultPagedScrollResultGoodsVO,
  JsonResultPagedScrollResultMallConfUserTaskDTO,
  JsonResultPagedScrollResultMarketingActivityDto,
  JsonResultPagedScrollResultMarketingActivityGoodsVo,
  JsonResultPagedScrollResultMarketingActivityGroupRecordsItemWebInfoVo,
  JsonResultPagedScrollResultMarketingActivityOfGroupWebListVo,
  JsonResultPagedScrollResultMemCardDto,
  JsonResultPagedScrollResultMemCouponVo,
  JsonResultPagedScrollResultRefundMasterDto,
  JsonResultPagedScrollResultScoreFlowOutputDto,
  JsonResultPagedScrollResultUserAddressOutPutDto,
  JsonResultPageInfoEarningRecordOutputDto,
  JsonResultPageInfoMemBindRecordListResponseDto,
  JsonResultRefundMasterDto,
  JsonResultScoreGetOutputDto,
  JsonResultScoreMonthStatisticsVO,
  JsonResultSigninDetailOutputDto,
  JsonResultSigninInfoOutputDto,
  JsonResultSigninSimpleOutputDto,
  JsonResultString,
  JsonResultUserAddressOutPutDto,
  JsonResultVoid,
  MallConfUserTaskBatchPerformDTO,
  MallConfUserTaskPerformDTO,
  MarketingActivityGoodsStatParam,
  MemberModifyInputDto,
  MemCardPurchaseDto,
  MemCouponReceiveInputDto,
  Object,
  OrderCommentInputDto,
  PurchaseMemberCardNotifyUsingPOSTXmldata,
  ReachStandUpgradeConfRequest,
  ReCommentsDTO,
  RefundOrderParam,
  RefundShippingParam,
  ShopCartCreateInputDto,
  ShopCartDeleteInputDto,
  ShopCartModifyInputDto,
  UnlimitedInputDto,
  UpdateAddressFrontDTO,
  UserAddressCreateInputDto,
  UserAddressModifyInputDto,
  UserAgreementAgreeDto,
  WechatActivityChainGetParams,
  WechatActivityChainRecordInfoGetParams,
  WechatActivityFlashSaleGetParams,
  WechatActivityGetParams,
  WechatActivityGoodsGetParams,
  WechatActivityGroupGetParams,
  WechatActivityGroupRecordGoodsGetParams,
  WechatActivityGroupRecordInfoIdGetParams,
  WechatActivityGroupRecordMyGetParams,
  WechatActivityPreSaleGetParams,
  WechatApiSmsSendCodeGetParams,
  WechatAuthLoginGetParams,
  WechatBuyerManageV1AppTeamListGetParams,
  WechatCollectionGetParams,
  WechatGoodsClassifyGetParams,
  WechatGoodsCommentsNoGetParams,
  WechatGoodsDetailsNoGetParams,
  WechatGoodsSkuStockAndPriceSkuNoGetParams,
  WechatHotelBannerGetParams,
  WechatHotelGetParams,
  WechatHotelOrderGetParams,
  WechatHotelOrderPayStatusGetParams,
  WechatHotelOrderRefundGetParams,
  WechatHotelRoomGetParams,
  WechatHotelRoomIdGetParams,
  WechatLiveGetParams,
  WechatMallAddressQueryListGetParams,
  WechatMallBalancePayStatusGetParams,
  WechatMallBalanceQueryGetParams,
  WechatMallConfigQueryByKeyGetParams,
  WechatMallConfigQueryByMultipleKeyGetParams,
  WechatMallMemberCardGetParams,
  WechatMallMemberCardNotHaveListGetParams,
  WechatMallScoreQueryGetParams,
  WechatMallSigninSwitchGetParams,
  WechatMallUserTaskConfigGetParams,
  WechatOrdersCommentListGetParams,
  WechatOrdersExpressGetParams,
  WechatOrdersGetParams,
  WechatOrdersPayStatusGetParams,
  WechatRichtextGetParams,
  WechatWebMemberDecodePhoneGetParams,
  WechatWebMemberDecodeUserInfoGetParams,
  WechatWebMemberExistsUnionIdGetParams,
  WechatWebMemberUpdateMobilePutParams,
  WechatWebMemberVerifyMobilePostParams,
  WechatWebMemCouponGetAvailableCouponGetParams,
  WechatWebMemCouponMyGetParams,
  WechatWebMemCouponMyHistoryGetParams,
  WechatWebMemCouponReceiveGetParams,
  WechatWebRefundDeleteGetParams,
  WechatWebRefundGetParams,
  WechatWebRefundInfoGetParams,
  WechatWebRefundRefundableFreightAmountGetParams,
  WechatWepayHotelNotifyPostParams,
  WechatWepayNotifyPostParams,
  WechatWepayRechargeNotifyPostParams
} from "./data-contracts";

import { IRequestConfig } from "@MetaAdsManager/request/src/types/fetch-type";
import requestInstance from "./instance";

type RequestConfig = Omit<IRequestConfig, "url" | "method">;

export const API = {
  /**
   * @description 活动分页查询
   * @name GET /wechat/activity
   * @summary 活动分页查询
   * @tags web/活动相关接口
   * @response `200` `JsonResultPagedScrollResultMarketingActivityDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/activity_GET": (query: WechatActivityGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/activity`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultMarketingActivityDto>,
  /**
   * No description
   * @name GET /wechat/activity/goods
   * @summary 活动商品列表
   * @tags web/活动相关接口
   * @response `200` `JsonResultPagedScrollResultMarketingActivityGoodsVo` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/activity/goods_GET": (query: WechatActivityGoodsGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/activity/goods`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultMarketingActivityGoodsVo>,
  /**
   * @description 活动详情
   * @name GET /wechat/activity/{activityNo}
   * @summary 活动详情
   * @tags web/活动相关接口
   * @response `200` `JsonResultMarketingActivityDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/activity/{activityNo}_GET": (activityNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/activity/${activityNo}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultMarketingActivityDto>,
  /**
   * @description 限时抢购分页查询
   * @name GET /wechat/activity/flashSale
   * @summary 限时抢购分页查询
   * @tags web/限时抢购管理
   * @response `200` `JsonResultPagedScrollResultMarketingActivityDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/activity/flashSale_GET": (query: WechatActivityFlashSaleGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/activity/flashSale`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultMarketingActivityDto>,
  /**
   * @description 限时抢购详情
   * @name GET /wechat/activity/flashSale/{activityNo}
   * @summary 限时抢购详情
   * @tags web/限时抢购管理
   * @response `200` `JsonResultMarketingActivityDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/activity/flashSale/{activityNo}_GET": (activityNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/activity/flashSale/${activityNo}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultMarketingActivityDto>,
  /**
   * No description
   * @name GET /wechat/activity/preSale
   * @summary 预售分页列表查询
   * @tags web/预售管理
   * @response `200` `JsonResultPagedScrollResultMarketingActivityDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/activity/preSale_GET": (query: WechatActivityPreSaleGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/activity/preSale`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultMarketingActivityDto>,
  /**
   * No description
   * @name GET /wechat/activity/preSale/{activityNo}
   * @summary 预售详情
   * @tags web/预售管理
   * @response `200` `JsonResultMarketingActivityDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/activity/preSale/{activityNo}_GET": (activityNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/activity/preSale/${activityNo}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultMarketingActivityDto>,
  /**
   * No description
   * @name GET /wechat/api/oss/info
   * @summary 云存储信息
   * @tags web/云存储
   * @response `200` `JsonResultMapStringObject` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/api/oss/info_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/api/oss/info`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultMapStringObject>,
  /**
   * No description
   * @name POST /wechat/api/qrCode/getUnlimited
   * @summary 获取小程序码 - getUnlimited
   * @tags web/小程序码
   * @response `200` `JsonResultString` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/api/qrCode/getUnlimited_POST": (body: UnlimitedInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/api/qrCode/getUnlimited`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name GET /wechat/api/sms/sendCode
   * @summary 发送短信验证码
   * @tags web/短信服务
   * @response `200` `JsonResultString` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/api/sms/sendCode_GET": (query: WechatApiSmsSendCodeGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/api/sms/sendCode`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name GET /wechat/buyerManage/v1/app/earning/rank
   * @summary 平台收益排行
   * @tags web/订货商管理
   * @response `200` `JsonResultListEarningRecordListResponseDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/buyerManage/v1/app/earning/rank_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/buyerManage/v1/app/earning/rank`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListEarningRecordListResponseDto>,
  /**
   * No description
   * @name GET /wechat/buyerManage/v1/app/earningRecordList
   * @summary 查询订货商收益记录
   * @tags web/订货商管理
   * @response `200` `JsonResultPageInfoEarningRecordOutputDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/buyerManage/v1/app/earningRecordList_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/buyerManage/v1/app/earningRecordList`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultPageInfoEarningRecordOutputDto>,
  /**
   * No description
   * @name GET /wechat/buyerManage/v1/app/info
   * @summary 详细信息
   * @tags web/订货商管理
   * @response `200` `JsonResultBuyerManageAppDetailResponseDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/buyerManage/v1/app/info_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/buyerManage/v1/app/info`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultBuyerManageAppDetailResponseDTO>,
  /**
   * No description
   * @name GET /wechat/buyerManage/v1/app/team/list
   * @summary 我的团队列表
   * @tags web/订货商管理
   * @response `200` `JsonResultPageInfoMemBindRecordListResponseDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/buyerManage/v1/app/team/list_GET": (
    query: WechatBuyerManageV1AppTeamListGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/wechat/buyerManage/v1/app/team/list`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPageInfoMemBindRecordListResponseDto>,
  /**
   * No description
   * @name GET /wechat/collection
   * @summary 商品收藏分页查询
   * @tags web/商品收藏
   * @response `200` `JsonResultPagedScrollResultCollectionVo` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/collection_GET": (query: WechatCollectionGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/collection`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultCollectionVo>,
  /**
   * No description
   * @name POST /wechat/collection
   * @summary 添加收藏
   * @tags web/商品收藏
   * @response `200` `JsonResultLong` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/collection_POST": (body: CollectionCreateInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/collection`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /wechat/collection
   * @summary 删除收藏
   * @tags web/商品收藏
   * @response `200` `JsonResultVoid` OK |  `204` `Object` No Content |  `401` `Object` Unauthorized |  `403` `Object` Forbidden
   */
  "/wechat/collection_DELETE": (body: CollectionCreateInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/collection`,
      method: "DELETE",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /wechat/collection/exists/{no}
   * @summary 是否已收藏
   * @tags web/商品收藏
   * @response `200` `JsonResultBoolean` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/collection/exists/{no}_GET": (no: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/collection/exists/${no}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultBoolean>,
  /**
   * No description
   * @name POST /wechat/collection/list
   * @summary 批量添加
   * @tags web/商品收藏
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/collection/list_POST": (body: CollectionCreateInputDto[], options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/collection/list`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /wechat/goods
   * @summary 商品列表
   * @tags web/移动端商品相关接口
   * @response `200` `JsonResultPagedScrollResultGoodsVO` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/goods_POST": (body: GoodsQuery, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/goods`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultGoodsVO>,
  /**
   * No description
   * @name GET /wechat/goods/classify
   * @summary 商品分类
   * @tags web/移动端商品相关接口
   * @response `200` `JsonResultListMenuTreeOutputDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/goods/classify_GET": (query: WechatGoodsClassifyGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/goods/classify`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultListMenuTreeOutputDto>,
  /**
   * No description
   * @name GET /wechat/goods/classifyExists/{id}
   * @summary 商品分类是否存在
   * @tags web/移动端商品相关接口
   * @response `200` `JsonResultBoolean` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/goods/classifyExists/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/goods/classifyExists/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultBoolean>,
  /**
   * No description
   * @name GET /wechat/goods/comments/total/{no}
   * @summary 商品评价总数量
   * @tags web/移动端商品相关接口
   * @response `200` `JsonResultInt` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/goods/comments/total/{no}_GET": (no: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/goods/comments/total/${no}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultInt>,
  /**
   * No description
   * @name GET /wechat/goods/comments/{no}
   * @summary 商品评价列表
   * @tags web/移动端商品相关接口
   * @response `200` `JsonResultPagedScrollResultCommentsVO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/goods/comments/{no}_GET": ({ no, ...query }: WechatGoodsCommentsNoGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/goods/comments/${no}`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultCommentsVO>,
  /**
   * No description
   * @name GET /wechat/goods/details/{no}
   * @summary 商品详情
   * @tags web/移动端商品相关接口
   * @response `200` `JsonResultGoodsVO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/goods/details/{no}_GET": ({ no, ...query }: WechatGoodsDetailsNoGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/goods/details/${no}`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultGoodsVO>,
  /**
   * No description
   * @name POST /wechat/goods/listByNos
   * @summary 根据No列表查询商品列表
   * @tags web/移动端商品相关接口
   * @response `200` `JsonResultPagedScrollResultGoodsVO` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/goods/listByNos_POST": (body: GoodsQueryByNo, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/goods/listByNos`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultGoodsVO>,
  /**
   * No description
   * @name GET /wechat/goods/skuStockAndPrice/{skuNo}
   * @summary SKU库存和价格
   * @tags web/移动端商品相关接口
   * @response `200` `JsonResultGoodsSkuStockAndPriceVo` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/goods/skuStockAndPrice/{skuNo}_GET": (
    { skuNo, ...query }: WechatGoodsSkuStockAndPriceSkuNoGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/wechat/goods/skuStockAndPrice/${skuNo}`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultGoodsSkuStockAndPriceVo>,
  /**
   * No description
   * @name GET /wechat/hotKeyword/hot
   * @summary 热词
   * @tags web/热词
   * @response `200` `JsonResultListHotKeywordDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/hotKeyword/hot_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/hotKeyword/hot`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListHotKeywordDto>,
  /**
   * No description
   * @name GET /wechat/live
   * @summary 查询根据id集合
   * @tags web/直播
   * @response `200` `JsonResultListLive` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/live_GET": (query: WechatLiveGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/live`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultListLive>,
  /**
   * No description
   * @name GET /wechat/live/{id}
   * @summary 查询根据id
   * @tags web/直播
   * @response `200` `JsonResultLive` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/live/{id}_GET": (id: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/live/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultLive>,
  /**
   * No description
   * @name GET /wechat/live/{id}/token
   * @summary 获取用户直播token
   * @tags web/直播
   * @response `200` `JsonResultString` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/live/{id}/token_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/live/${id}/token`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name GET /wechat/livePage/{id}
   * @summary 详情
   * @tags web/直播页面
   * @response `200` `JsonResultLivePage` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/livePage/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/livePage/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultLivePage>,
  /**
   * @description 退出
   * @name POST /wechat/logout
   * @summary 退出
   * @tags web/退出
   * @response `200` `Object` OK
   */
  "/wechat/logout_POST": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/logout`,
      method: "POST",
      params,
      ...options
    }) as unknown as Promise<Object>,
  /**
   * No description
   * @name POST /wechat/mall/address/create
   * @summary 创建地址
   * @tags web/收货地址操作接口
   * @response `200` `JsonResultLong` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/address/create_POST": (body: UserAddressCreateInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/address/create`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /wechat/mall/address/delete/{id}
   * @summary 删除地址
   * @tags web/收货地址操作接口
   * @response `200` `JsonResultVoid` OK |  `204` `Object` No Content |  `401` `Object` Unauthorized |  `403` `Object` Forbidden
   */
  "/wechat/mall/address/delete/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/address/delete/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /wechat/mall/address/getDefault
   * @summary 获取当前用户默认地址
   * @tags web/收货地址操作接口
   * @response `200` `JsonResultUserAddressOutPutDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/address/getDefault_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/address/getDefault`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultUserAddressOutPutDto>,
  /**
   * No description
   * @name GET /wechat/mall/address/queryList
   * @summary 获取地址列表
   * @tags web/收货地址操作接口
   * @response `200` `JsonResultPagedScrollResultUserAddressOutPutDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/address/queryList_GET": (query: WechatMallAddressQueryListGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/address/queryList`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultUserAddressOutPutDto>,
  /**
   * No description
   * @name PUT /wechat/mall/address/setDefault/{id}
   * @summary 设置默认地址
   * @tags web/收货地址操作接口
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/address/setDefault/{id}_PUT": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/address/setDefault/${id}`,
      method: "PUT",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /wechat/mall/address/update
   * @summary 更新地址信息
   * @tags web/收货地址操作接口
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/address/update_POST": (body: UserAddressModifyInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/address/update`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /wechat/mall/balance/get
   * @summary 获取余额汇总信息
   * @tags web/余额相关接口
   * @response `200` `JsonResultBalanceGetOutputDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/balance/get_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/balance/get`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultBalanceGetOutputDto>,
  /**
   * No description
   * @name POST /wechat/mall/balance/pay/{orderNo}
   * @summary 去支付
   * @tags web/余额相关接口
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/balance/pay/{orderNo}_POST": (orderNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/balance/pay/${orderNo}`,
      method: "POST",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /wechat/mall/balance/query
   * @summary 分页获取余额流水
   * @tags web/余额相关接口
   * @response `200` `JsonResultPagedScrollResultBalanceFlowOutputDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/balance/query_GET": (query: WechatMallBalanceQueryGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/balance/query`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultBalanceFlowOutputDto>,
  /**
   * No description
   * @name POST /wechat/mall/balance/recharge
   * @summary 去充值
   * @tags web/余额相关接口
   * @response `200` `JsonResultOrderPayDTO` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/balance/recharge_POST": (body: BalanceRechargeInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/balance/recharge`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultOrderPayDTO>,
  /**
   * No description
   * @name GET /wechat/mall/balance/rechargeAmountList
   * @summary 获取充值列表
   * @tags web/余额相关接口
   * @response `200` `JsonResultListRechargeAmount` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/balance/rechargeAmountList_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/balance/rechargeAmountList`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListRechargeAmount>,
  /**
   * No description
   * @name GET /wechat/mall/banner/queryList/{position}
   * @summary 根据显示位置查询 banner 列表
   * @tags web/Banner相关接口
   * @response `200` `JsonResultListBannerPositionOutputDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/banner/queryList/{position}_GET": (position: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/banner/queryList/${position}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultListBannerPositionOutputDto>,
  /**
   * No description
   * @name GET /wechat/mall/config/query
   * @summary 查询所有配置项
   * @tags web/系统配置（支付、提现、客服等）
   * @response `200` `JsonResultListConfConfigOutputDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/config/query_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/config/query`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListConfConfigOutputDto>,
  /**
   * No description
   * @name GET /wechat/mall/config/queryByKey
   * @summary 根据key查询
   * @tags web/系统配置（支付、提现、客服等）
   * @response `200` `JsonResultString` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/config/queryByKey_GET": (query: WechatMallConfigQueryByKeyGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/config/queryByKey`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name GET /wechat/mall/config/queryByMultipleKey
   * @summary 根据keys查询，多个按逗号分割
   * @tags web/系统配置（支付、提现、客服等）
   * @response `200` `JsonResultMapStringString` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/config/queryByMultipleKey_GET": (
    query: WechatMallConfigQueryByMultipleKeyGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/wechat/mall/config/queryByMultipleKey`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultMapStringString>,
  /**
   * No description
   * @name PUT /wechat/mall/couponCode
   * @summary 优惠码绑定
   * @tags web/优惠码管理
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/couponCode_PUT": (body: CouponCodeBindInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/couponCode`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /wechat/mall/logisticsCompany/expressCompanyAll
   * @summary 查询全部快递公司与编号
   * @tags web/物流公司
   * @response `200` `JsonResultListMallExpressCompanyVo` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/logisticsCompany/expressCompanyAll_GET": (
    params: Record<string, any> = {},
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/wechat/mall/logisticsCompany/expressCompanyAll`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListMallExpressCompanyVo>,
  /**
   * No description
   * @name GET /wechat/mall/memStatistics/info
   * @summary 统计项
   * @tags web/用户统计
   * @response `200` `JsonResultMemStatisticsDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/memStatistics/info_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/memStatistics/info`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultMemStatisticsDto>,
  /**
   * No description
   * @name GET /wechat/mall/memberCard
   * @summary 列表
   * @tags web/会员卡
   * @response `200` `JsonResultPagedScrollResultMemCardDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/memberCard_GET": (query: WechatMallMemberCardGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/memberCard`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultMemCardDto>,
  /**
   * No description
   * @name GET /wechat/mall/memberCard/notHaveList
   * @summary 未持有列表
   * @tags web/会员卡
   * @response `200` `JsonResultPagedScrollResultMemCardDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/memberCard/notHaveList_GET": (
    query: WechatMallMemberCardNotHaveListGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/wechat/mall/memberCard/notHaveList`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultMemCardDto>,
  /**
   * No description
   * @name POST /wechat/mall/memberCard/purchase
   * @summary 购买
   * @tags web/会员卡
   * @response `200` `JsonResultOrderPayDTO` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/memberCard/purchase_POST": (body: MemCardPurchaseDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/memberCard/purchase`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultOrderPayDTO>,
  /**
   * No description
   * @name GET /wechat/mall/memberCard/{id}
   * @summary 详情
   * @tags web/会员卡
   * @response `200` `JsonResultMemCardDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/memberCard/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/memberCard/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultMemCardDto>,
  /**
   * No description
   * @name GET /wechat/mall/memberCard/{id}/relation
   * @summary 关联详情
   * @tags web/会员卡
   * @response `200` `JsonResultMemCardRelationDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/memberCard/{id}/relation_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/memberCard/${id}/relation`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultMemCardRelationDto>,
  /**
   * No description
   * @name GET /wechat/mall/page/get/{id}
   * @summary 获取自定义页面内容
   * @tags web/自定义页面
   * @response `200` `JsonResultMallConfPageSimpleOutputDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/page/get/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/page/get/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultMallConfPageSimpleOutputDto>,
  /**
   * No description
   * @name GET /wechat/mall/refundReason/queryAll
   * @summary 售后原因不分页查询
   * @tags web/售后原因
   * @response `200` `JsonResultListRefundReasonOutputDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/refundReason/queryAll_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/refundReason/queryAll`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListRefundReasonOutputDto>,
  /**
   * No description
   * @name GET /wechat/mall/score/get
   * @summary 获取积分汇总信息
   * @tags web/积分相关接口
   * @response `200` `JsonResultScoreGetOutputDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/score/get_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/score/get`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultScoreGetOutputDto>,
  /**
   * No description
   * @name GET /wechat/mall/score/query
   * @summary 分页获取积分流水
   * @tags web/积分相关接口
   * @response `200` `JsonResultPagedScrollResultScoreFlowOutputDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/score/query_GET": (query: WechatMallScoreQueryGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/score/query`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultScoreFlowOutputDto>,
  /**
   * No description
   * @name GET /wechat/mall/shopCart
   * @summary 用户购物车列表
   * @tags web/购物车
   * @response `200` `JsonResultListShopCartVO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/shopCart_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/shopCart`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListShopCartVO>,
  /**
   * No description
   * @name POST /wechat/mall/shopCart
   * @summary 添加购物车
   * @tags web/购物车
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/shopCart_POST": (body: ShopCartCreateInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/shopCart`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /wechat/mall/shopCart
   * @summary 变更商品
   * @tags web/购物车
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/shopCart_PUT": (body: ShopCartModifyInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/shopCart`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name DELETE /wechat/mall/shopCart
   * @summary 删除商品
   * @tags web/购物车
   * @response `200` `JsonResultVoid` OK |  `204` `Object` No Content |  `401` `Object` Unauthorized |  `403` `Object` Forbidden
   */
  "/wechat/mall/shopCart_DELETE": (body: ShopCartDeleteInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/shopCart`,
      method: "DELETE",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /wechat/mall/shopCart/count
   * @summary 购物车商品数量
   * @tags web/购物车
   * @response `200` `JsonResultInt` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/shopCart/count_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/shopCart/count`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultInt>,
  /**
   * @description type 签到方式 1：自动签到 2：手动签到
   * @name PUT /wechat/mall/signin
   * @summary 签到
   * @tags web/签到
   * @response `200` `JsonResultSigninSimpleOutputDto` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/signin_PUT": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/signin`,
      method: "PUT",
      params,
      ...options
    }) as unknown as Promise<JsonResultSigninSimpleOutputDto>,
  /**
   * No description
   * @name GET /wechat/mall/signin/detail
   * @summary 获取签到详情
   * @tags web/签到
   * @response `200` `JsonResultSigninDetailOutputDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/signin/detail_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/signin/detail`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultSigninDetailOutputDto>,
  /**
   * No description
   * @name GET /wechat/mall/signin/info
   * @summary 获取签到信息
   * @tags web/签到
   * @response `200` `JsonResultSigninInfoOutputDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/signin/info_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/signin/info`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultSigninInfoOutputDto>,
  /**
   * @description 日期格式为 yyyy-MM
   * @name GET /wechat/mall/signin/switch
   * @summary 根据日期切换签到信息
   * @tags web/签到
   * @response `200` `JsonResultListString` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/signin/switch_GET": (query: WechatMallSigninSwitchGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/signin/switch`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultListString>,
  /**
   * No description
   * @name GET /wechat/mall/userTaskConfig
   * @summary 列表
   * @tags web/用户任务
   * @response `200` `JsonResultPagedScrollResultMallConfUserTaskDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/userTaskConfig_GET": (query: WechatMallUserTaskConfigGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/userTaskConfig`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultMallConfUserTaskDTO>,
  /**
   * No description
   * @name PUT /wechat/mall/userTaskConfig/perform
   * @summary 执行
   * @tags web/用户任务
   * @response `200` `JsonResultBoolean` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/userTaskConfig/perform_PUT": (body: MallConfUserTaskPerformDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/userTaskConfig/perform`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultBoolean>,
  /**
   * No description
   * @name PUT /wechat/mall/userTaskConfig/performs
   * @summary 批量执行
   * @tags web/用户任务
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/userTaskConfig/performs_PUT": (body: MallConfUserTaskBatchPerformDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/userTaskConfig/performs`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /wechat/popupAds
   * @summary 弹窗列表
   * @tags web/弹窗广告
   * @response `200` `JsonResultListPopupAdsDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/popupAds_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/popupAds`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListPopupAdsDto>,
  /**
   * No description
   * @name GET /wechat/richtext
   * @summary 获取富文本内容
   * @tags web/富文本接口
   * @response `200` `JsonResultString` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/richtext_GET": (query: WechatRichtextGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/richtext`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name GET /wechat/userAgreement/notAgreeAgreementTypeList
   * @summary 未同意的协议类型列表
   * @tags web/用户协议
   * @response `200` `JsonResultListInt` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/userAgreement/notAgreeAgreementTypeList_GET": (
    params: Record<string, any> = {},
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/wechat/userAgreement/notAgreeAgreementTypeList`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListInt>,
  /**
   * No description
   * @name PUT /wechat/userAgreement/userAgreeRecord/agree
   * @summary 同意协议
   * @tags web/用户协议
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/userAgreement/userAgreeRecord/agree_PUT": (body: UserAgreementAgreeDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/userAgreement/userAgreeRecord/agree`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /wechat/web/memCoupon/getAvailableCoupon
   * @summary 小程序-可领取优惠券查询
   * @tags web/用户优惠劵
   * @response `200` `JsonResultPagedScrollResultCouponTemplateVo` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/memCoupon/getAvailableCoupon_GET": (
    query: WechatWebMemCouponGetAvailableCouponGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/wechat/web/memCoupon/getAvailableCoupon`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultCouponTemplateVo>,
  /**
   * No description
   * @name POST /wechat/web/memCoupon/getAvailableCouponByTemplateNos
   * @summary 小程序首页-根据编号查询可领取优惠券
   * @tags web/用户优惠劵
   * @response `200` `JsonResultListCouponTemplateVo` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/memCoupon/getAvailableCouponByTemplateNos_POST": (body: string[], options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/web/memCoupon/getAvailableCouponByTemplateNos`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultListCouponTemplateVo>,
  /**
   * No description
   * @name GET /wechat/web/memCoupon/goods/{no}
   * @summary 获取礼券可用商品编号列表
   * @tags web/用户优惠劵
   * @response `200` `JsonResultCouponAvailableGoodsOutputDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/memCoupon/goods/{no}_GET": (no: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/web/memCoupon/goods/${no}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultCouponAvailableGoodsOutputDto>,
  /**
   * No description
   * @name GET /wechat/web/memCoupon/my
   * @summary 小程序-我的优惠劵列表（分页）
   * @tags web/用户优惠劵
   * @response `200` `JsonResultPagedScrollResultMemCouponVo` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/memCoupon/my_GET": (query: WechatWebMemCouponMyGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/web/memCoupon/my`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultMemCouponVo>,
  /**
   * No description
   * @name GET /wechat/web/memCoupon/myHistory
   * @summary 小程序-我的历史优惠劵列表（分页）
   * @tags web/用户优惠劵
   * @response `200` `JsonResultPagedScrollResultMemCouponVo` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/memCoupon/myHistory_GET": (query: WechatWebMemCouponMyHistoryGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/web/memCoupon/myHistory`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultMemCouponVo>,
  /**
   * No description
   * @name GET /wechat/web/memCoupon/receive
   * @summary 小程序-领取优惠劵
   * @tags web/用户优惠劵
   * @response `200` `JsonResultVoid` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/memCoupon/receive_GET": (query: WechatWebMemCouponReceiveGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/web/memCoupon/receive`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /wechat/web/memCoupon/receiveGoodsAuto
   * @summary 小程序-自动领取优惠券
   * @tags web/用户优惠劵
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/memCoupon/receiveGoodsAuto_POST": (body: MemCouponReceiveInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/web/memCoupon/receiveGoodsAuto`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /wechat/web/memCoupon/receiveGoodsCoupon
   * @summary 小程序-商品可领优惠券查询
   * @tags web/用户优惠劵
   * @response `200` `JsonResultListCouponTemplateVo` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/memCoupon/receiveGoodsCoupon_POST": (body: MemCouponReceiveInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/web/memCoupon/receiveGoodsCoupon`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultListCouponTemplateVo>,
  /**
   * No description
   * @name POST /wechat/web/member/binding/relation
   * @summary 商品分享绑定关系
   * @tags web/会员-会员管理
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/member/binding/relation_POST": (body: GoodsShareRequestDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/web/member/binding/relation`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /wechat/web/member/decodePhone
   * @summary 解析手机号并保存
   * @tags web/会员-会员管理
   * @response `200` `JsonResultVoid` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/member/decodePhone_GET": (query: WechatWebMemberDecodePhoneGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/web/member/decodePhone`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /wechat/web/member/decodeUserInfo
   * @summary 解析用户信息并保存（昵称、头像）
   * @tags web/会员-会员管理
   * @response `200` `JsonResultVoid` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/member/decodeUserInfo_GET": (
    query: WechatWebMemberDecodeUserInfoGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/wechat/web/member/decodeUserInfo`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /wechat/web/member/exists/unionId
   * @summary 判断是否存在 unionId
   * @tags web/会员-会员管理
   * @response `200` `JsonResultBoolean` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/member/exists/unionId_GET": (
    query: WechatWebMemberExistsUnionIdGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/wechat/web/member/exists/unionId`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultBoolean>,
  /**
   * No description
   * @name GET /wechat/web/member/getUserInfo
   * @summary 获取用户信息
   * @tags web/会员-会员管理
   * @response `200` `JsonResultMemberOutputDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/member/getUserInfo_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/web/member/getUserInfo`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultMemberOutputDto>,
  /**
   * No description
   * @name POST /wechat/web/member/presentNewcomerGift
   * @summary 新人赠礼
   * @tags web/会员-会员管理
   * @response `200` `JsonResultNewcomerGiftOutputDto` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/member/presentNewcomerGift_POST": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/web/member/presentNewcomerGift`,
      method: "POST",
      params,
      ...options
    }) as unknown as Promise<JsonResultNewcomerGiftOutputDto>,
  /**
   * No description
   * @name PUT /wechat/web/member/saveUserInfo
   * @summary 保存用户信息（昵称、头像）
   * @tags web/会员-会员管理
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/member/saveUserInfo_PUT": (body: MemberModifyInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/web/member/saveUserInfo`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /wechat/web/member/updateMobile
   * @summary 用户修改手机号
   * @tags web/会员-会员管理
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/member/updateMobile_PUT": (query: WechatWebMemberUpdateMobilePutParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/web/member/updateMobile`,
      method: "PUT",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * @description 会员售后订单分页查询
   * @name GET /wechat/web/refund
   * @summary 会员售后订单分页查询
   * @tags web/移动端售后相关接口
   * @response `200` `JsonResultPagedScrollResultRefundMasterDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/refund_GET": (query: WechatWebRefundGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/web/refund`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultRefundMasterDto>,
  /**
   * No description
   * @name POST /wechat/web/refund/allsave
   * @summary 整单申请售后
   * @tags web/移动端售后相关接口
   * @response `200` `JsonResultString` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/refund/allsave_POST": (body: RefundOrderParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/web/refund/allsave`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * @description 售后单删除
   * @name GET /wechat/web/refund/delete
   * @summary 售后单删除
   * @tags web/移动端售后相关接口
   * @response `200` `JsonResultInt` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/refund/delete_GET": (query: WechatWebRefundDeleteGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/web/refund/delete`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultInt>,
  /**
   * @description 售后单信息
   * @name GET /wechat/web/refund/info
   * @summary 售后单信息
   * @tags web/移动端售后相关接口
   * @response `200` `JsonResultRefundMasterDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/refund/info_GET": (query: WechatWebRefundInfoGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/web/refund/info`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultRefundMasterDto>,
  /**
   * @description 获得可退运费
   * @name GET /wechat/web/refund/refundableFreightAmount
   * @summary 获得可退运费
   * @tags web/移动端售后相关接口
   * @response `200` `JsonResultBigdecimal` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/refund/refundableFreightAmount_GET": (
    query: WechatWebRefundRefundableFreightAmountGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/wechat/web/refund/refundableFreightAmount`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultBigdecimal>,
  /**
   * No description
   * @name POST /wechat/web/refund/save
   * @summary 申请售后
   * @tags web/移动端售后相关接口
   * @response `200` `JsonResultString` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/refund/save_POST": (body: RefundOrderParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/web/refund/save`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name PUT /wechat/web/refund/shipping
   * @summary 退货物流填写
   * @tags web/移动端售后相关接口
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/refund/shipping_PUT": (body: RefundShippingParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/web/refund/shipping`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /wechat/wepay/notify
   * @summary payNotify
   * @tags web/微信支付回调
   * @response `200` `PurchaseMemberCardNotifyUsingPOSTXmldata` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/wepay/notify_POST": (query: WechatWepayNotifyPostParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/wepay/notify`,
      method: "POST",
      params: query,
      ...options
    }) as unknown as Promise<PurchaseMemberCardNotifyUsingPOSTXmldata>,
  /**
   * No description
   * @name POST /wechat/wepay/purchaseMemberCardNotify
   * @summary purchaseMemberCardNotify
   * @tags web/微信支付回调
   * @response `200` `PurchaseMemberCardNotifyUsingPOSTXmldata` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/wepay/purchaseMemberCardNotify_POST": (
    body: PurchaseMemberCardNotifyUsingPOSTXmldata,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/wechat/wepay/purchaseMemberCardNotify`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<PurchaseMemberCardNotifyUsingPOSTXmldata>,
  /**
   * No description
   * @name POST /wechat/wepay/rechargeNotify
   * @summary rechargeNotify
   * @tags web/微信支付回调
   * @response `200` `PurchaseMemberCardNotifyUsingPOSTXmldata` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/wepay/rechargeNotify_POST": (query: WechatWepayRechargeNotifyPostParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/wepay/rechargeNotify`,
      method: "POST",
      params: query,
      ...options
    }) as unknown as Promise<PurchaseMemberCardNotifyUsingPOSTXmldata>,
  /**
   * No description
   * @name POST /wechat/wepay/refund-notify
   * @summary refundNotify
   * @tags web/微信支付回调
   * @response `200` `PurchaseMemberCardNotifyUsingPOSTXmldata` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/wepay/refund-notify_POST": (body: PurchaseMemberCardNotifyUsingPOSTXmldata, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/wepay/refund-notify`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<PurchaseMemberCardNotifyUsingPOSTXmldata>,
  /**
   * No description
   * @name GET /wechat/orders
   * @summary 获取订单列表
   * @tags web/移动端订单相关接口
   * @response `200` `JsonResultPagedAllResultOrderVO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/orders_GET": (query: WechatOrdersGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/orders`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedAllResultOrderVO>,
  /**
   * No description
   * @name POST /wechat/orders
   * @summary 提交订单
   * @tags web/移动端订单相关接口
   * @response `200` `JsonResultOrderPayDTO` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/orders_POST": (body: CalculateOrderContext, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/orders`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultOrderPayDTO>,
  /**
   * No description
   * @name POST /wechat/orders/addComment
   * @summary 追评
   * @tags web/移动端订单相关接口
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/orders/addComment_POST": (body: AddCommentsDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/orders/addComment`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /wechat/orders/addShopCart
   * @summary 加入购物车
   * @tags web/移动端订单相关接口
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/orders/addShopCart_POST": (body: PurchaseMemberCardNotifyUsingPOSTXmldata, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/orders/addShopCart`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /wechat/orders/calculate
   * @summary 计算订单
   * @tags web/移动端订单相关接口
   * @response `200` `JsonResultOrderCalculateResponse` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/orders/calculate_POST": (body: CalculateOrderContext, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/orders/calculate`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultOrderCalculateResponse>,
  /**
   * No description
   * @name POST /wechat/orders/cancel/{orderNo}
   * @summary 取消订单
   * @tags web/移动端订单相关接口
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/orders/cancel/{orderNo}_POST": (orderNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/orders/cancel/${orderNo}`,
      method: "POST",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /wechat/orders/comment
   * @summary 评价订单
   * @tags web/移动端订单相关接口
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/orders/comment_POST": (body: OrderCommentInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/orders/comment`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /wechat/orders/comment/list
   * @summary 评价列表
   * @tags web/移动端订单相关接口
   * @response `200` `JsonResultPagedScrollResultCommentsVO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/orders/comment/list_GET": (query: WechatOrdersCommentListGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/orders/comment/list`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultCommentsVO>,
  /**
   * No description
   * @name DELETE /wechat/orders/comment/{id}
   * @summary 删除评价
   * @tags web/移动端订单相关接口
   * @response `200` `JsonResultVoid` OK |  `204` `Object` No Content |  `401` `Object` Unauthorized |  `403` `Object` Forbidden
   */
  "/wechat/orders/comment/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/orders/comment/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /wechat/orders/confirm/{orderNo}
   * @summary 确认收货
   * @tags web/移动端订单相关接口
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/orders/confirm/{orderNo}_POST": (orderNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/orders/confirm/${orderNo}`,
      method: "POST",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /wechat/orders/count
   * @summary 获取订单角标数量
   * @tags web/移动端订单相关接口
   * @response `200` `JsonResultOrderCountVO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/orders/count_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/orders/count`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultOrderCountVO>,
  /**
   * No description
   * @name GET /wechat/orders/express
   * @summary 查看物流
   * @tags web/移动端订单相关接口
   * @response `200` `JsonResultExpressTrackRespDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/orders/express_GET": (query: WechatOrdersExpressGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/orders/express`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultExpressTrackRespDto>,
  /**
   * No description
   * @name GET /wechat/orders/pay/h5/{orderNo}
   * @summary H5待支付订单获取支付参数
   * @tags web/移动端订单相关接口
   * @response `200` `JsonResultOrderPayDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/orders/pay/h5/{orderNo}_GET": (orderNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/orders/pay/h5/${orderNo}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultOrderPayDTO>,
  /**
   * No description
   * @name GET /wechat/orders/pay/{orderNo}
   * @summary 待支付订单获取支付参数
   * @tags web/移动端订单相关接口
   * @response `200` `JsonResultOrderPayDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/orders/pay/{orderNo}_GET": (orderNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/orders/pay/${orderNo}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultOrderPayDTO>,
  /**
   * No description
   * @name PUT /wechat/orders/updateAddress
   * @summary 更改收货地址
   * @tags web/移动端订单相关接口
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/orders/updateAddress_PUT": (body: UpdateAddressFrontDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/orders/updateAddress`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /wechat/orders/{orderNo}
   * @summary 获取订单详情
   * @tags web/移动端订单相关接口
   * @response `200` `JsonResultOrderVO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/orders/{orderNo}_GET": (orderNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/orders/${orderNo}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultOrderVO>,
  /**
   * No description
   * @name DELETE /wechat/orders/{orderNo}
   * @summary 删除订单
   * @tags web/移动端订单相关接口
   * @response `200` `JsonResultVoid` OK |  `204` `Object` No Content |  `401` `Object` Unauthorized |  `403` `Object` Forbidden
   */
  "/wechat/orders/{orderNo}_DELETE": (orderNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/orders/${orderNo}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /wechat/mall/score/getMonthScore
   * @summary 获取本月积分流水统计
   * @tags web/积分相关接口
   * @response `200` `JsonResultScoreMonthStatisticsVO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/score/getMonthScore_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/score/getMonthScore`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultScoreMonthStatisticsVO>,
  /**
   * No description
   * @name POST /wechat/web/member/verifyMobile
   * @summary 用户手机号验证
   * @tags web/会员-会员管理
   * @response `200` `JsonResultBoolean` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/web/member/verifyMobile_POST": (query: WechatWebMemberVerifyMobilePostParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/web/member/verifyMobile`,
      method: "POST",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultBoolean>,
  /**
   * No description
   * @name GET /wechat/auth/login
   * @summary 登陆总入口
   * @tags web/授权（登录、注册、修改密码、获取当前权限、忘记密码）
   * @response `200` `JsonResultString` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/auth/login_GET": (query: WechatAuthLoginGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/auth/login`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name POST /wechat/mall/config/queryReachStandUpgradeConf
   * @summary 查询下级人数达标升级配置信息
   * @tags web/系统配置（支付、提现、客服等）
   * @response `200` `JsonResultListReachStandUpgradeConfOutputDto` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/config/queryReachStandUpgradeConf_POST": (
    body: ReachStandUpgradeConfRequest,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/wechat/mall/config/queryReachStandUpgradeConf`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultListReachStandUpgradeConfOutputDto>,
  /**
   * No description
   * @name GET /wechat/v1/console/buyerManage/v1/console/{id}
   * @summary 根据等级ID查询详情
   * @tags web/订货商等级管理
   * @response `200` `JsonResultBuyerGradeResponseDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/v1/console/buyerManage/v1/console/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/v1/console/buyerManage/v1/console/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultBuyerGradeResponseDTO>,
  /**
   * No description
   * @name GET /wechat/auth/loginout
   * @summary 注销账号
   * @tags web/授权（登录、注册、修改密码、获取当前权限、忘记密码）
   * @response `200` `JsonResultVoid` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/auth/loginout_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/auth/loginout`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /wechat/auth/loginout/check
   * @summary 注销前判断
   * @tags web/授权（登录、注册、修改密码、获取当前权限、忘记密码）
   * @response `200` `JsonResultMemberLoginOutputDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/auth/loginout/check_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/auth/loginout/check`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultMemberLoginOutputDto>,
  /**
   * @description 拼团活动分页查询
   * @name GET /wechat/activity/group
   * @summary 拼团活动分页查询
   * @tags web/拼团管理
   * @response `200` `JsonResultPagedScrollResultMarketingActivityOfGroupWebListVo` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/activity/group_GET": (query: WechatActivityGroupGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/activity/group`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultMarketingActivityOfGroupWebListVo>,
  /**
   * @description 商品拼团记录分页查询
   * @name GET /wechat/activity/group/record/goods
   * @summary 商品拼团记录分页查询
   * @tags web/拼团管理
   * @response `200` `JsonResultMarketingActivityGroupRecordsWebListAndNumVo` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/activity/group/record/goods_GET": (
    query: WechatActivityGroupRecordGoodsGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/wechat/activity/group/record/goods`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultMarketingActivityGroupRecordsWebListAndNumVo>,
  /**
   * @description 商品拼团记录信息
   * @name GET /wechat/activity/group/record/info/{id}
   * @summary 商品拼团记录信息
   * @tags web/拼团管理
   * @response `200` `JsonResultMarketingActivityGroupRecordsWebInfoVo` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/activity/group/record/info/{id}_GET": (
    { id, ...query }: WechatActivityGroupRecordInfoIdGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/wechat/activity/group/record/info/${id}`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultMarketingActivityGroupRecordsWebInfoVo>,
  /**
   * @description 我的拼团记录分页查询
   * @name GET /wechat/activity/group/record/my
   * @summary 我的拼团记录分页查询
   * @tags web/拼团管理
   * @response `200` `JsonResultPagedScrollResultMarketingActivityGroupRecordsItemWebInfoVo` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/activity/group/record/my_GET": (query: WechatActivityGroupRecordMyGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/activity/group/record/my`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultMarketingActivityGroupRecordsItemWebInfoVo>,
  /**
   * @description 拼团活动详情
   * @name GET /wechat/activity/group/{activityNo}
   * @summary 拼团活动详情
   * @tags web/拼团管理
   * @response `200` `JsonResultMarketingActivityOfGroupWebListVo` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/activity/group/{activityNo}_GET": (activityNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/activity/group/${activityNo}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultMarketingActivityOfGroupWebListVo>,
  /**
   * No description
   * @name GET /wechat/mall/balance/payStatus
   * @summary 查询支付状态
   * @tags web/余额相关接口
   * @response `200` `JsonResultBoolean` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/mall/balance/payStatus_GET": (query: WechatMallBalancePayStatusGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/mall/balance/payStatus`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultBoolean>,
  /**
   * @description 分享和商品详情pu、uv统计
   * @name POST /wechat/activity/group/stat
   * @summary 分享和商品详情pu、uv统计
   * @tags web/拼团管理
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/activity/group/stat_POST": (body: MarketingActivityGoodsStatParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/activity/group/stat`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * @description 接龙活动分页查询
   * @name GET /wechat/activity/chain
   * @summary 接龙活动分页查询
   * @tags web/接龙管理
   * @response `200` `JsonResultPagedScrollResultMarketingActivityOfGroupWebListVo` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/activity/chain_GET": (query: WechatActivityChainGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/activity/chain`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedScrollResultMarketingActivityOfGroupWebListVo>,
  /**
   * @description 接龙活动详情
   * @name GET /wechat/activity/chain/{activityNo}
   * @summary 接龙活动详情
   * @tags web/接龙管理
   * @response `200` `JsonResultMarketingActivityOfGroupWebListVo` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/activity/chain/{activityNo}_GET": (activityNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/activity/chain/${activityNo}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultMarketingActivityOfGroupWebListVo>,
  /**
   * @description 接龙人员列表
   * @name GET /wechat/activity/chain/record/info
   * @summary 接龙人员列表
   * @tags web/接龙管理
   * @response `200` `JsonResultPagedResultMarketingActivityGroupRecordsItemDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/activity/chain/record/info_GET": (
    query: WechatActivityChainRecordInfoGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/wechat/activity/chain/record/info`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMarketingActivityGroupRecordsItemDto>,
  /**
   * No description
   * @name GET /wechat/orders/payStatus
   * @summary 查询支付状态
   * @tags web/移动端订单相关接口
   * @response `200` `JsonResultBoolean` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/orders/payStatus_GET": (query: WechatOrdersPayStatusGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/orders/payStatus`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultBoolean>,
  /**
   * No description
   * @name GET /wechat/goods/comments/detail/{commentId}
   * @summary 商品评价详情
   * @tags web/移动端商品相关接口
   * @response `200` `JsonResultCommentsVO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/goods/comments/detail/{commentId}_GET": (commentId: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/goods/comments/detail/${commentId}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultCommentsVO>,
  /**
   * No description
   * @name POST /wechat/orders/reComment
   * @summary 重新评价(被拒后重评)
   * @tags web/移动端订单相关接口
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/orders/reComment_POST": (body: ReCommentsDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/orders/reComment`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /wechat/goods/share/{goodsNo}
   * @summary 商品分享
   * @tags web/移动端商品相关接口
   * @response `200` `JsonResultGoodsVO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/goods/share/{goodsNo}_GET": (goodsNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/goods/share/${goodsNo}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultGoodsVO>,
  /**
   * No description
   * @name GET /wechat/hotel
   * @summary 分页查询
   * @tags web/酒店
   * @response `200` `JsonResultPagedResultHotel` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/hotel_GET": (query: WechatHotelGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/hotel`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultHotel>,
  /**
   * No description
   * @name GET /wechat/hotel/city
   * @summary 城市查询
   * @tags web/酒店
   * @response `200` `JsonResultListCityDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/hotel/city_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/hotel/city`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListCityDto>,
  /**
   * No description
   * @name GET /wechat/hotel/{id}
   * @summary 详情
   * @tags web/酒店
   * @response `200` `JsonResultHotel` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/hotel/{id}_GET": (id: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/hotel/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultHotel>,
  /**
   * No description
   * @name GET /wechat/hotelBanner
   * @summary 酒店banner列表查询
   * @tags web/酒店banner
   * @response `200` `JsonResultListHotelBanner` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/hotelBanner_GET": (query: WechatHotelBannerGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/hotelBanner`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultListHotelBanner>,
  /**
   * No description
   * @name GET /wechat/hotelBanner/{id}
   * @summary 酒店banner详情查询
   * @tags web/酒店banner
   * @response `200` `JsonResultHotelBanner` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/hotelBanner/{id}_GET": (id: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/hotelBanner/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultHotelBanner>,
  /**
   * No description
   * @name GET /wechat/hotelOrder
   * @summary 酒店订单分页查询
   * @tags web/酒店订单
   * @response `200` `JsonResultPagedResultHotelOrder` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/hotelOrder_GET": (query: WechatHotelOrderGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/hotelOrder`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultHotelOrder>,
  /**
   * No description
   * @name PUT /wechat/hotelOrder/close/{orderNo}
   * @summary 关闭订单
   * @tags web/酒店订单
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/hotelOrder/close/{orderNo}_PUT": (orderNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/hotelOrder/close/${orderNo}`,
      method: "PUT",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /wechat/hotelOrder/pay/{orderNo}
   * @summary 待支付订单获取支付参数
   * @tags web/酒店订单
   * @response `200` `JsonResultOrderPayDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/hotelOrder/pay/{orderNo}_GET": (orderNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/hotelOrder/pay/${orderNo}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultOrderPayDTO>,
  /**
   * No description
   * @name GET /wechat/hotelOrder/payStatus
   * @summary 查询支付状态
   * @tags web/酒店订单
   * @response `200` `JsonResultBoolean` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/hotelOrder/payStatus_GET": (query: WechatHotelOrderPayStatusGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/hotelOrder/payStatus`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultBoolean>,
  /**
   * No description
   * @name POST /wechat/hotelOrder/submit
   * @summary 订单提交
   * @tags web/酒店订单
   * @response `200` `JsonResultOrderPayDTO` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/hotelOrder/submit_POST": (body: HotelOrderDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/hotelOrder/submit`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultOrderPayDTO>,
  /**
   * No description
   * @name GET /wechat/hotelOrder/{orderNo}
   * @summary 酒店订单详情
   * @tags web/酒店订单
   * @response `200` `JsonResultHotelOrder` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/hotelOrder/{orderNo}_GET": (orderNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/hotelOrder/${orderNo}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultHotelOrder>,
  /**
   * No description
   * @name GET /wechat/hotelOrderRefund
   * @summary 分页列表
   * @tags web/酒店售后订单
   * @response `200` `JsonResultPagedResultHotelOrderRefund` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/hotelOrderRefund_GET": (query: WechatHotelOrderRefundGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/hotelOrderRefund`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultHotelOrderRefund>,
  /**
   * No description
   * @name POST /wechat/hotelOrderRefund/apply
   * @summary 申请退款
   * @tags web/酒店售后订单
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/hotelOrderRefund/apply_POST": (body: HotelRefundOrderDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/hotelOrderRefund/apply`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /wechat/hotelOrderRefund/{id}
   * @summary 详情
   * @tags web/酒店售后订单
   * @response `200` `JsonResultHotelOrderRefund` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/hotelOrderRefund/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/hotelOrderRefund/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultHotelOrderRefund>,
  /**
   * No description
   * @name GET /wechat/hotelRoom
   * @summary 分页列表
   * @tags web/酒店房型
   * @response `200` `JsonResultPagedResultHotelRoom` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/hotelRoom_GET": (query: WechatHotelRoomGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/hotelRoom`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultHotelRoom>,
  /**
   * No description
   * @name GET /wechat/hotelRoom/{id}
   * @summary 详情
   * @tags web/酒店房型
   * @response `200` `JsonResultHotelRoom` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/hotelRoom/{id}_GET": ({ id, ...query }: WechatHotelRoomIdGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/hotelRoom/${id}`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultHotelRoom>,
  /**
   * No description
   * @name POST /wechat/wepay/hotelNotify
   * @summary hotelOrderNotify
   * @tags web/微信支付回调
   * @response `200` `PurchaseMemberCardNotifyUsingPOSTXmldata` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/wechat/wepay/hotelNotify_POST": (query: WechatWepayHotelNotifyPostParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/wechat/wepay/hotelNotify`,
      method: "POST",
      params: query,
      ...options
    }) as unknown as Promise<PurchaseMemberCardNotifyUsingPOSTXmldata>
};
