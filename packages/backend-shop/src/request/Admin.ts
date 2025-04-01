/* eslint-disable object-shorthand */
/* eslint-disable max-lines */
/* eslint-disable id-length */

import {
  ActivityOpenDto,
  AddressCreateInputDto,
  AddressModifyInputDto,
  AdminActivityChainGetParams,
  AdminActivityChainStatOrderGetParams,
  AdminActivityFlashSaleGetParams,
  AdminActivityFreeShippingGetParams,
  AdminActivityFullGetParams,
  AdminActivityGetParams,
  AdminActivityGroupGetParams,
  AdminActivityGroupStatOrderGetParams,
  AdminActivityPresaleGetParams,
  AdminApiMallConfMaterialDeleteDeleteParams,
  AdminApiMallConfMaterialGroupDeleteDeleteParams,
  AdminApiMallConfMaterialGroupQueryListAllGetParams,
  AdminApiMallConfMaterialQueryListGetParams,
  AdminApiMemberExportGetParams,
  AdminApiMemberQueryGetParams,
  AdminApiSysDeptDeleteDeleteParams,
  AdminApiSysDeptQueryGetParams,
  AdminApiSysResourceGetParams,
  AdminApiSysResourceTreeGetParams,
  AdminApiSysRoleDeleteDeleteParams,
  AdminApiSysRoleQueryGetParams,
  AdminApiSysUserBaseInfoGetParams,
  AdminApiSysUserDeleteDeleteParams,
  AdminApiSysUserExportGetParams,
  AdminApiSysUserListGetParams,
  AdminApiSysUserQueryGetParams,
  AdminApiSysUserResetDefaultDeleteParams,
  AdminBookGoodsGetParams,
  AdminBookOrderDataGetParams,
  AdminBookOrderDataSumGetParams,
  AdminBookOrderEarningExportsGetParams,
  AdminBookOrderEarningGetParams,
  AdminBookOrderExportsGetParams,
  AdminBookOrderGetParams,
  AdminBookStoreGetParams,
  AdminBookStoreListGetParams,
  AdminBuyerManageV1ConsoleEarningRecordListGetParams,
  AdminBuyerManageV1ConsolePageGetParams,
  AdminBuyerManageV1ConsoleSubMemberListGetParams,
  AdminCacheGetParams,
  AdminCommentsExportGetParams,
  AdminCommentsGetParams,
  AdminEarningBalanceRecordGetParams,
  AdminGoodsExportGetParams,
  AdminGoodsGetParams,
  AdminHotelBannerGetParams,
  AdminHotelBlacklistExportsGetParams,
  AdminHotelBlacklistGetParams,
  AdminHotelGetParams,
  AdminHotelOrderGetParams,
  AdminHotelOrderRefundGetParams,
  AdminHotelRoomGetParams,
  AdminHotelUserExportsGetParams,
  AdminHotelUserGetParams,
  AdminHotKeywordGetParams,
  AdminLiveGetParams,
  AdminLivePageGetParams,
  AdminLiveStatisticsExportGetParams,
  AdminLiveStatisticsGetParams,
  AdminLiveUpdateGetParams,
  AdminMallAddressQueryListAllGetParams,
  AdminMallBalanceExportUserIdGetParams,
  AdminMallBalanceQueryUserIdGetParams,
  AdminMallBalanceRechargeRecordExportGetParams,
  AdminMallBalanceRechargeRecordGetParams,
  AdminMallBannerQueryListGetParams,
  AdminMallClassifyTreeGetParams,
  AdminMallCommentsHeadImgListGetParams,
  AdminMallConfigQueryByKeyGetParams,
  AdminMallConfigQueryByMultipleKeyGetParams,
  AdminMallCouponCodeDetailGetParams,
  AdminMallCouponCodeGetParams,
  AdminMallCouponExportGetParams,
  AdminMallCouponTemplateDeleteDeleteParams,
  AdminMallCouponTemplateDetailGetParams,
  AdminMallCouponTemplateQueryListGetParams,
  AdminMallExpressQueryGetParams,
  AdminMallGroupGetParams,
  AdminMallMemberCardGetParams,
  AdminMallMemberCardMemberUserIdGetParams,
  AdminMallPageDeleteDeleteParams,
  AdminMallPageDetailGetParams,
  AdminMallPageQueryGetParams,
  AdminMallScoreQueryUserIdGetParams,
  AdminMallSpecExportGetParams,
  AdminMallSpecQueryGetParams,
  AdminMallStatisticsBuyUserCountStatisticsGetParams,
  AdminMallStatisticsExportOrderDetailsStatisticsGetParams,
  AdminMallStatisticsGraphOrderCountStatisticsGetParams,
  AdminMallStatisticsGraphSaleAmountStatisticsGetParams,
  AdminMallStatisticsGraphUserCountStatisticsGetParams,
  AdminMallStatisticsKpiExportGetParams,
  AdminMallStatisticsKpiGetParams,
  AdminMallStatisticsKpiGradeGetParams,
  AdminMallStatisticsOrderDetailsStatisticsGetParams,
  AdminMallTagGetParams,
  AdminMallUserTaskConfigGetParams,
  AdminMemCouponDeleteDeleteParams,
  AdminMemCouponDetailGetParams,
  AdminMemCouponExportGetParams,
  AdminMemCouponListGetParams,
  AdminMemCouponQueryListGetParams,
  AdminMemCouponStatisticGetParams,
  AdminOperateLogsExportGetParams,
  AdminOperateLogsGetParams,
  AdminOrdersErpsearchGetParams,
  AdminOrdersExportGetParams,
  AdminOrdersGetParams,
  AdminOrdersGoodsStatExportGetParams,
  AdminOrdersGoodsStatGetParams,
  AdminOrdersListGetParams,
  AdminOrdersUpdateErpShippingPostParams,
  AdminPopupAdsGetParams,
  AdminProvideActivityExportGetParams,
  AdminProvideActivityGetParams,
  AdminProvideActivityOrderGetParams,
  AdminRefundExportGetParams,
  AdminRefundInfoGetParams,
  AdminRefundListGetParams,
  AdminRichtextGetParams,
  AdminScoreOrdersExportGetParams,
  AdminScoreOrdersGetParams,
  AdminSelfPickUpSiteGetParams,
  AdminShippingErpSyncPostParams,
  AdminUserAgreementUserAgreementRecordGetParams,
  AdminUserAgreementUserAgreeRecordGetParams,
  AdminV1ConsoleBuyerGradePageGetParams,
  AdminV1ConsoleMemLabelPageGetParams,
  AdminVerificationGetParams,
  AdminVirtualCoinFlowAllExportsGetParams,
  AdminVirtualCoinFlowExportsGetParams,
  AdminVirtualCoinFlowGetParams,
  AdminWithdrawRecordExportGetParams,
  AdminWithdrawRecordGetParams,
  AdminWithdrawRecordNotifyPostParams,
  AdminMemberMobilePostParams,
  AdminMemberMobileChangeLogGetParams,
  AuditStatusDto,
  BalanceAdjustInputDto,
  BalanceRefundCardInputDto,
  BannerCreateInputDto,
  BannerModifyInputDto,
  BannerModifyStatusInputDto,
  BatchShipInfoParam,
  BookGoodsReq,
  BookStoreReq,
  BuyerGradeSaveRequestDTO,
  BuyerGradeUpdateRequestDTO,
  BuyerManageSaveRequestDTO,
  BuyerManageUpdateRequestDTO,
  CommentsImportInputDto,
  CommonModifyStatusInputDto,
  CouponCodeCreateInputDto,
  CouponRecordDetailQuery,
  CouponRecordQuery,
  CouponSendBymemberNosInputDto,
  CouponSendInputDto,
  CouponTemplateCreateInputDto,
  CouponTemplateModifyInputDto,
  CouponTemplateStatusInputDto,
  EarningBalanceRecordReq,
  ErpShippingParam,
  ExpressTemplateSaveDto,
  ExpressTemplateUpdateDto,
  ForgotPasswordDto,
  GoodsClassifyMoveInputDto,
  GoodsClassifySaveDto,
  GoodsClassifyUpdateDto,
  GoodsGroupSaveDto,
  GoodsGroupUpdateDto,
  GoodsQueryByNo,
  GoodsQueryByNoAndGrId,
  GoodsSaveDTO,
  GoodsSpecCrerateInputDto,
  GoodsSpecModifyInputDto,
  GoodsStatusInputDto,
  GoodsTagBatchInputDto,
  GoodsTagSaveDto,
  GoodsTagUpdateDto,
  HotelBannerReq,
  HotelBlacklistReq,
  HotelOrderRefundAuditDto,
  HotelReq,
  HotelRoomReq,
  HotelUser,
  HotelUserInputDto,
  HotKeywordSaveDto,
  HotKeywordUpdateDto,
  JmkCommonRequest,
  JsonResult,
  JsonResultAddressOutputDto,
  JsonResultBalanceGetOutputDto,
  JsonResultBannerOutputDto,
  JsonResultBookGoods,
  JsonResultBookOrder,
  JsonResultBookOrderDataDTO,
  JsonResultBookStore,
  JsonResultBuyerGradeResponseDTO,
  JsonResultBuyerManageDetailResponseDTO,
  JsonResultCouponTemplateVo,
  JsonResultCreateActivityResult,
  JsonResultExcelImportResultDto,
  JsonResultExpressTemplateDetailOutputDto,
  JsonResultGoodsClassifyOutputDto,
  JsonResultGoodsGroupOutputDto,
  JsonResultGoodsSpecOutputDto,
  JsonResultGoodsTagOutputDto,
  JsonResultGoodsVO,
  JsonResultHotel,
  JsonResultHotelBanner,
  JsonResultHotelBlacklist,
  JsonResultHotelOrder,
  JsonResultHotelOrderRefund,
  JsonResultHotelRoom,
  JsonResultHotKeywordDto,
  JsonResultListAddressOutputDto,
  JsonResultListBookStore,
  JsonResultListConfConfigOutputDto,
  JsonResultListCouponTemplateVo,
  JsonResultListGoodsGradeVO,
  JsonResultListGradeStatDto,
  JsonResultListHotelBanner,
  JsonResultListLive,
  JsonResultListMallConfPageOutputDto,
  JsonResultListMallExpressCompanyVo,
  JsonResultListMaterialGroupVo,
  JsonResultListMemBaseInfo,
  JsonResultListMenuTreeOutputDto,
  JsonResultListReachStandUpgradeConfOutputDto,
  JsonResultListRefundReasonOutputDto,
  JsonResultListString,
  JsonResultListSuperiorOutputDTO,
  JsonResultListSuperiorOutputQueryDTO,
  JsonResultListSysApi,
  JsonResultListSysResource,
  JsonResultListSysRole,
  JsonResultListSysRoleSelectOutputDto,
  JsonResultListSysUserVo,
  JsonResultListTreeResourceVo,
  JsonResultLive,
  JsonResultLivePage,
  JsonResultLoginOutputDto,
  JsonResultLong,
  JsonResultMallConfPageOutputDto,
  JsonResultMapStringObject,
  JsonResultMapStringString,
  JsonResultMarketingActivityDto,
  JsonResultMarketingActivityOfGroupDto,
  JsonResultMemberDetailOutputDto,
  JsonResultMemCardDto,
  JsonResultMemCouponStatisticVo,
  JsonResultMemLabelResponseDTO,
  JsonResultObject,
  JsonResultOrderGoodsStatVO,
  JsonResultOrderVO,
  JsonResultPagedResultBalanceFlowOutputDto,
  JsonResultPagedResultBannerOutputDto,
  JsonResultPagedResultBookGoods,
  JsonResultPagedResultBookOrder,
  JsonResultPagedResultBookOrderDataDTO,
  JsonResultPagedResultBookOrderEarning,
  JsonResultPagedResultBookStore,
  JsonResultPagedResultCommentsHeadImgOutputDto,
  JsonResultPagedResultCommentsVO,
  JsonResultPagedResultCouponCodeDetailOutputDto,
  JsonResultPagedResultCouponCodeOutputDto,
  JsonResultPagedResultCouponRecordDetailOutputDto,
  JsonResultPagedResultCouponRecordOutputDto,
  JsonResultPagedResultCouponTemplateVo,
  JsonResultPagedResultEarningBalanceRecord,
  JsonResultPagedResultExpressTemplateListOutputDto,
  JsonResultPagedResultGoodsGroupOutputDto,
  JsonResultPagedResultGoodsSpecOutputDto,
  JsonResultPagedResultGoodsTagOutputDto,
  JsonResultPagedResultGoodsVO,
  JsonResultPagedResultHotel,
  JsonResultPagedResultHotelBlacklist,
  JsonResultPagedResultHotelOrder,
  JsonResultPagedResultHotelOrderRefund,
  JsonResultPagedResultHotelRoom,
  JsonResultPagedResultHotelUser,
  JsonResultPagedResultHotKeywordDto,
  JsonResultPagedResultKpiStatDto,
  JsonResultPagedResultLivePage,
  JsonResultPagedResultLiveStatistics,
  JsonResultPagedResultMallConfPageOutputDto,
  JsonResultPagedResultMallConfUserTaskDTO,
  JsonResultPagedResultMarketingActivityOfGroupOrderVo,
  JsonResultPagedResultMarketingActivityOfGroupVo,
  JsonResultPagedResultMarketingActivityVo,
  JsonResultPagedResultMaterialVo,
  JsonResultPagedResultMemberDetailOutputDto,
  JsonResultPagedResultMemCardDto,
  JsonResultPagedResultMemCouponListVo,
  JsonResultPagedResultMemCouponRecordVo,
  JsonResultPagedResultOperateLogsDto,
  JsonResultPagedResultOrderVO,
  JsonResultPagedResultPopupAdsDto,
  JsonResultPagedResultProvideActivity,
  JsonResultPagedResultProvideOrderVO,
  JsonResultPagedResultRechargeRecordOutputDto,
  JsonResultPagedResultRefundMasterDto,
  JsonResultPagedResultScoreFlowOutputDto,
  JsonResultPagedResultSelfPickUpSite,
  JsonResultPagedResultSysDeptVo,
  JsonResultPagedResultSysResource,
  JsonResultPagedResultSysRoleOutputDto,
  JsonResultPagedResultSysUserVo,
  JsonResultPagedResultUserAgreementRecordDto,
  JsonResultPagedResultUserAgreeRecordDto,
  JsonResultPagedResultVerification,
  JsonResultPagedResultVirtualCoinFlow,
  JsonResultPagedResultWithdrawRecord,
  JsonResultPageInfoBuyerGradeListResponseDTO,
  JsonResultPageInfoBuyerManageListResponseDTO,
  JsonResultPageInfoEarningRecordOutputDto,
  JsonResultPageInfoMemberListDto,
  JsonResultPageInfoMemLabelResponseDTO,
  JsonResultPopupAdsDto,
  JsonResultProvideActivity,
  JsonResultRefundMasterDto,
  JsonResultResourceDetailVo,
  JsonResultScoreGetOutputDto,
  JsonResultSelfPickUpSite,
  JsonResultSigninTaskOutputDto,
  JsonResultStatisticsCountOutputDto,
  JsonResultStatisticsGraphOutputDto,
  JsonResultString,
  JsonResultSysAuthVo,
  JsonResultSysResource,
  JsonResultSysRoleDetailOutputDto,
  JsonResultSysUserVo,
  JsonResultUserAgreementRecordDto,
  JsonResultVirtualCoin,
  JsonResultVoid,
  JsonResultPagedResultMobileChangeLogDto,
  JsonResultWithdrawRecord,
  LivePageInsert,
  LivePageUpdate,
  LiveUpdateVolcengineVo,
  LoginDto,
  MallConfPageCreateInputDto,
  MallConfPageModifyInputDto,
  MallConfUserTaskUpdateDTO,
  MarketingActivityOfFlashSaleDto,
  MarketingActivityOfFreeShippingDto,
  MarketingActivityOfFullDto,
  MarketingActivityOfGroupDto,
  MarketingActivityOfPreSaleDto,
  MaterialAddParam,
  MaterialGroupSaveDto,
  MaterialGroupUpdateDto,
  MaterialModifyParam,
  MaterialMoveParam,
  MemberQuery,
  MemCardSaveDto,
  MemCardUpdateDto,
  MemLabelChangeRequestDTO,
  MemLabelSaveRequestDTO,
  MemLabelUpdateRequestDTO,
  OrderSignDTO,
  OrderVOReq,
  PopupAdsSaveDto,
  PopupAdsUpdateDto,
  PostsAwardDTO,
  ProvideActivityReq,
  ProvideActivityShippingDTO,
  ProvideActivitySituationDTO,
  ProvideActivityUpdateDTO,
  PushMsgDto,
  ReachStandUpgradeConfRequest,
  RefundAgreeParam,
  RefundCheckParam,
  RefundReasonCreateInputDto,
  RefundReasonModifyInputDto,
  RefundRefuseParam,
  RefundShippingParam,
  ReplyCommentsDto,
  ResetPwdDto,
  ResourceCreateDto,
  ResourceUpdateDto,
  RichText,
  RoleResourceSaveDto,
  ScoreChangeInputDto,
  SelfPickUpSiteReq,
  ShipInfoParam,
  ShowDto,
  SigninTaskInputDto,
  SkuStockAndPriceUpdateDto,
  StatusDto,
  SysDeptCreateInputDto,
  SysDeptModifyInputDto,
  SysResourceReq,
  SysRoleCreateInputDto,
  SysRoleModifyInputDto,
  SysUserCreateInputDto,
  SysUserModifyInputDto,
  UnlimitedInputDto,
  UpdateAddressDTO,
  UpdateBuyerShopInStatusRequestDTO,
  UserChangeStatusInputDto,
  UserChangeSuperiorInputDto,
  UserRolesDto,
  VerificationDTO,
  VirtualCoinAdjustInputDto,
  WithdrawRecordAuditDto
} from "./data-contracts";

import { IRequestConfig } from "@MetaAdsManager/request/src/types/fetch-type";
import requestInstance from "./instance";

type RequestConfig = Omit<IRequestConfig, "url" | "method">;

export const API = {
  /**
   * No description
   * @name GET /admin/activity
   * @summary 活动列表
   * @tags 活动管理
   * @response `200` `JsonResultPagedResultMarketingActivityVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity_GET": (query: AdminActivityGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMarketingActivityVo>,
  /**
   * @description 列表
   * @name GET /admin/activity/chain
   * @summary 接龙活动分页查询
   * @tags 接龙活动(管理)
   * @response `200` `JsonResultPagedResultMarketingActivityOfGroupVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/chain_GET": (query: AdminActivityChainGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/chain`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMarketingActivityOfGroupVo>,
  /**
   * @description 新增和修改
   * @name POST /admin/activity/chain
   * @summary 接龙活动新增和修改
   * @tags 接龙活动(管理)
   * @response `200` `JsonResultString` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/chain_POST": (dto: MarketingActivityOfGroupDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/chain`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * @description 结束
   * @name PUT /admin/activity/chain/end/{activityNo}
   * @summary 接龙活动结束
   * @tags 接龙活动(管理)
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/chain/end/{activityNo}_PUT": (activityNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/chain/end/${activityNo}`,
      method: "PUT",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * @description 列表
   * @name GET /admin/activity/chain/stat/order
   * @summary 接龙活动下开团记录分页查询
   * @tags 接龙活动(管理)
   * @response `200` `JsonResultPagedResultMarketingActivityOfGroupOrderVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/chain/stat/order_GET": (query: AdminActivityChainStatOrderGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/chain/stat/order`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMarketingActivityOfGroupOrderVo>,
  /**
   * @description 启用或停用
   * @name PUT /admin/activity/chain/updateStatus
   * @summary 接龙活动启用和停用
   * @tags 接龙活动(管理)
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/chain/updateStatus_PUT": (dto: ActivityOpenDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/chain/updateStatus`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * @description 详情
   * @name GET /admin/activity/chain/{activityNo}
   * @summary 接龙活动详情
   * @tags 接龙活动(管理)
   * @response `200` `JsonResultMarketingActivityOfGroupDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/chain/{activityNo}_GET": (activityNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/chain/${activityNo}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultMarketingActivityOfGroupDto>,
  /**
   * @description 删除
   * @name DELETE /admin/activity/chain/{activityNo}
   * @summary 接龙活动删除
   * @tags 接龙活动(管理)
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/activity/chain/{activityNo}_DELETE": (activityNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/chain/${activityNo}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/activity/conflict/{goodsNo}
   * @summary 活动冲突
   * @tags 活动管理
   * @response `200` `JsonResultVoid` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/conflict/{goodsNo}_GET": (goodsNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/conflict/${goodsNo}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * @description 列表
   * @name GET /admin/activity/flashSale
   * @summary 活动分页查询
   * @tags 限时抢购
   * @response `200` `JsonResultPagedResultMarketingActivityVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/flashSale_GET": (query: AdminActivityFlashSaleGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/flashSale`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMarketingActivityVo>,
  /**
   * @description 新增和修改
   * @name POST /admin/activity/flashSale
   * @summary 活动新增和修改
   * @tags 限时抢购
   * @response `200` `JsonResultString` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/flashSale_POST": (dto: MarketingActivityOfFlashSaleDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/flashSale`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * @description 启用或停用
   * @name PUT /admin/activity/flashSale/updateStatus
   * @summary 活动启用和停用
   * @tags 限时抢购
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/flashSale/updateStatus_PUT": (dto: ActivityOpenDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/flashSale/updateStatus`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * @description 详情
   * @name GET /admin/activity/flashSale/{activityNo}
   * @summary 活动详情
   * @tags 限时抢购
   * @response `200` `JsonResultMarketingActivityDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/flashSale/{activityNo}_GET": (activityNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/flashSale/${activityNo}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultMarketingActivityDto>,
  /**
   * @description 删除
   * @name DELETE /admin/activity/flashSale/{activityNo}
   * @summary 活动删除
   * @tags 限时抢购
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/activity/flashSale/{activityNo}_DELETE": (activityNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/flashSale/${activityNo}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * @description 列表
   * @name GET /admin/activity/freeShipping
   * @summary 活动分页查询
   * @tags 包邮活动
   * @response `200` `JsonResultPagedResultMarketingActivityVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/freeShipping_GET": (query: AdminActivityFreeShippingGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/freeShipping`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMarketingActivityVo>,
  /**
   * No description
   * @name POST /admin/activity/freeShipping
   * @summary 新增和修改
   * @tags 包邮活动
   * @response `200` `JsonResultString` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/freeShipping_POST": (dto: MarketingActivityOfFreeShippingDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/freeShipping`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name PUT /admin/activity/freeShipping/updateStatus
   * @summary 启用或停用
   * @tags 包邮活动
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/freeShipping/updateStatus_PUT": (dto: ActivityOpenDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/freeShipping/updateStatus`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/activity/freeShipping/{activityNo}
   * @summary 详情
   * @tags 包邮活动
   * @response `200` `JsonResultMarketingActivityDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/freeShipping/{activityNo}_GET": (activityNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/freeShipping/${activityNo}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultMarketingActivityDto>,
  /**
   * No description
   * @name DELETE /admin/activity/freeShipping/{activityNo}
   * @summary 删除
   * @tags 包邮活动
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/activity/freeShipping/{activityNo}_DELETE": (activityNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/freeShipping/${activityNo}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * @description 列表
   * @name GET /admin/activity/full
   * @summary 活动分页查询
   * @tags 满活动
   * @response `200` `JsonResultPagedResultMarketingActivityVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/full_GET": (query: AdminActivityFullGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/full`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMarketingActivityVo>,
  /**
   * No description
   * @name POST /admin/activity/full
   * @summary 新增和修改
   * @tags 满活动
   * @response `200` `JsonResultString` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/full_POST": (dto: MarketingActivityOfFullDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/full`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name PUT /admin/activity/full/updateStatus
   * @summary 启用或停用
   * @tags 满活动
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/full/updateStatus_PUT": (dto: ActivityOpenDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/full/updateStatus`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/activity/full/{activityNo}
   * @summary 详情
   * @tags 满活动
   * @response `200` `JsonResultMarketingActivityDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/full/{activityNo}_GET": (activityNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/full/${activityNo}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultMarketingActivityDto>,
  /**
   * No description
   * @name DELETE /admin/activity/full/{activityNo}
   * @summary 删除
   * @tags 满活动
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/activity/full/{activityNo}_DELETE": (activityNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/full/${activityNo}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * @description 列表
   * @name GET /admin/activity/group
   * @summary 拼团活动分页查询
   * @tags 拼团活动(管理)
   * @response `200` `JsonResultPagedResultMarketingActivityOfGroupVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/group_GET": (query: AdminActivityGroupGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/group`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMarketingActivityOfGroupVo>,
  /**
   * @description 新增和修改
   * @name POST /admin/activity/group
   * @summary 拼团活动新增和修改
   * @tags 拼团活动(管理)
   * @response `200` `JsonResultString` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/group_POST": (dto: MarketingActivityOfGroupDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/group`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * @description 结束
   * @name PUT /admin/activity/group/end/{activityNo}
   * @summary 拼团活动结束
   * @tags 拼团活动(管理)
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/group/end/{activityNo}_PUT": (activityNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/group/end/${activityNo}`,
      method: "PUT",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * @description 列表
   * @name GET /admin/activity/group/stat/order
   * @summary 拼团活动下开团记录分页查询
   * @tags 拼团活动(管理)
   * @response `200` `JsonResultPagedResultMarketingActivityOfGroupOrderVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/group/stat/order_GET": (query: AdminActivityGroupStatOrderGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/group/stat/order`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMarketingActivityOfGroupOrderVo>,
  /**
   * @description 启用或停用
   * @name PUT /admin/activity/group/updateStatus
   * @summary 拼团活动启用和停用
   * @tags 拼团活动(管理)
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/group/updateStatus_PUT": (dto: ActivityOpenDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/group/updateStatus`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * @description 详情
   * @name GET /admin/activity/group/{activityNo}
   * @summary 拼团活动详情
   * @tags 拼团活动(管理)
   * @response `200` `JsonResultMarketingActivityOfGroupDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/group/{activityNo}_GET": (activityNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/group/${activityNo}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultMarketingActivityOfGroupDto>,
  /**
   * @description 删除
   * @name DELETE /admin/activity/group/{activityNo}
   * @summary 拼团活动删除
   * @tags 拼团活动(管理)
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/activity/group/{activityNo}_DELETE": (activityNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/group/${activityNo}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * @description 列表
   * @name GET /admin/activity/presale
   * @summary 活动分页查询
   * @tags 预售活动
   * @response `200` `JsonResultPagedResultMarketingActivityVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/presale_GET": (query: AdminActivityPresaleGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/presale`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMarketingActivityVo>,
  /**
   * No description
   * @name POST /admin/activity/presale
   * @summary 新增和修改
   * @tags 预售活动
   * @response `200` `JsonResultString` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/presale_POST": (dto: MarketingActivityOfPreSaleDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/presale`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name PUT /admin/activity/presale/updateStatus
   * @summary 启用或停用
   * @tags 预售活动
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/presale/updateStatus_PUT": (dto: ActivityOpenDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/presale/updateStatus`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/activity/presale/{activityNo}
   * @summary 详情
   * @tags 预售活动
   * @response `200` `JsonResultMarketingActivityDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/presale/{activityNo}_GET": (activityNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/presale/${activityNo}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultMarketingActivityDto>,
  /**
   * No description
   * @name DELETE /admin/activity/presale/{activityNo}
   * @summary 删除
   * @tags 预售活动
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/activity/presale/{activityNo}_DELETE": (activityNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/presale/${activityNo}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/activity/updateStatus
   * @summary 活动启用或停用
   * @tags 活动管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/updateStatus_PUT": (dto: ActivityOpenDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/updateStatus`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/activity/{activityNo}
   * @summary 活动详情
   * @tags 活动管理
   * @response `200` `JsonResultMarketingActivityDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/activity/{activityNo}_GET": (activityNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/${activityNo}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultMarketingActivityDto>,
  /**
   * No description
   * @name DELETE /admin/activity/{activityNo}
   * @summary 活动删除
   * @tags 活动管理
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/activity/{activityNo}_DELETE": (activityNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/activity/${activityNo}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/api/mallConfMaterial/add
   * @summary 新增
   * @tags 素材库
   * @response `200` `JsonResultLong` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/mallConfMaterial/add_POST": (dto: MaterialAddParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/mallConfMaterial/add`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /admin/api/mallConfMaterial/delete
   * @summary 删除
   * @tags 素材库
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/api/mallConfMaterial/delete_DELETE": (
    query: AdminApiMallConfMaterialDeleteDeleteParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/api/mallConfMaterial/delete`,
      method: "DELETE",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/api/mallConfMaterial/move
   * @summary 移动
   * @tags 素材库
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/mallConfMaterial/move_PUT": (dto: MaterialMoveParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/mallConfMaterial/move`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/mallConfMaterial/queryList
   * @summary 列表
   * @tags 素材库
   * @response `200` `JsonResultPagedResultMaterialVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/mallConfMaterial/queryList_GET": (
    query: AdminApiMallConfMaterialQueryListGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/api/mallConfMaterial/queryList`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMaterialVo>,
  /**
   * No description
   * @name PUT /admin/api/mallConfMaterial/update
   * @summary 修改
   * @tags 素材库
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/mallConfMaterial/update_PUT": (dto: MaterialModifyParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/mallConfMaterial/update`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/api/mallConfMaterialGroup/add
   * @summary 新增
   * @tags 素材库分组
   * @response `200` `JsonResultLong` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/mallConfMaterialGroup/add_POST": (dto: MaterialGroupSaveDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/mallConfMaterialGroup/add`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /admin/api/mallConfMaterialGroup/delete
   * @summary 删除
   * @tags 素材库分组
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/api/mallConfMaterialGroup/delete_DELETE": (
    query: AdminApiMallConfMaterialGroupDeleteDeleteParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/api/mallConfMaterialGroup/delete`,
      method: "DELETE",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/mallConfMaterialGroup/queryListAll
   * @summary 列表
   * @tags 素材库分组
   * @response `200` `JsonResultListMaterialGroupVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/mallConfMaterialGroup/queryListAll_GET": (
    query: AdminApiMallConfMaterialGroupQueryListAllGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/api/mallConfMaterialGroup/queryListAll`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultListMaterialGroupVo>,
  /**
   * No description
   * @name PUT /admin/api/mallConfMaterialGroup/update
   * @summary 编辑
   * @tags 素材库分组
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/mallConfMaterialGroup/update_PUT": (dto: MaterialGroupUpdateDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/mallConfMaterialGroup/update`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/api/member/changeLable
   * @summary 修改会员标签
   * @tags 会员管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/member/changeLable_POST": (dto: MemLabelChangeRequestDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/member/changeLable`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/api/member/changeScore
   * @summary 修改会员积分
   * @tags 会员管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/member/changeScore_POST": (dto: ScoreChangeInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/member/changeScore`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/api/member/changeStatus
   * @summary 修改状态
   * @tags 会员管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/member/changeStatus_POST": (dto: UserChangeStatusInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/member/changeStatus`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/api/member/changeSuperior
   * @summary 修改上下级
   * @tags 会员管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/member/changeSuperior_POST": (dto: UserChangeSuperiorInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/member/changeSuperior`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/member/export
   * @summary 导出
   * @tags 会员管理
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/member/export_GET": (query: AdminApiMemberExportGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/member/export`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name POST /admin/api/member/listByNos
   * @summary 根据用户ID查询用户列表
   * @tags 会员管理
   * @response `200` `JsonResultListMemBaseInfo` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/member/listByNos_POST": (query: MemberQuery, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/member/listByNos`,
      method: "POST",
      data: query,
      ...options
    }) as unknown as Promise<JsonResultListMemBaseInfo>,
  /**
   * No description
   * @name GET /admin/api/member/query
   * @summary 列表
   * @tags 会员管理
   * @response `200` `JsonResultPagedResultMemberDetailOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/member/query_GET": (query: AdminApiMemberQueryGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/member/query`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMemberDetailOutputDto>,
  /**
   * No description
   * @name GET /admin/api/member/query/{id}
   * @summary 详情
   * @tags 会员管理
   * @response `200` `JsonResultMemberDetailOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/member/query/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/member/query/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultMemberDetailOutputDto>,
  /**
   * No description
   * @name GET /admin/api/member/superiorList
   * @summary 上级列表
   * @tags 会员管理
   * @response `200` `JsonResultListSuperiorOutputDTO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/member/superiorList_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/member/superiorList`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListSuperiorOutputDTO>,
  /**
* No description
* @name GET /admin/api/member/superiorPageQuery
* @summary 上级列表分页查询
* @tags 会员管理
* @response `200` `JsonResultListSuperiorOutputQueryDTO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
*/
  "/admin/api/member/superiorPageQuery_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/member/superiorPageQuery`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListSuperiorOutputQueryDTO>,
  /**
   * No description
   * @name GET /admin/api/oss/info
   * @summary 云存储信息
   * @tags 云存储
   * @response `200` `JsonResultMapStringObject` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/oss/info_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/oss/info`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultMapStringObject>,
  /**
   * No description
   * @name POST /admin/api/qrCode/getUnlimited
   * @summary 获取小程序码 - getUnlimited
   * @tags 小程序码
   * @response `200` `JsonResultString` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/qrCode/getUnlimited_POST": (dto: UnlimitedInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/qrCode/getUnlimited`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name POST /admin/api/sysDept/add
   * @summary 新增
   * @tags 系统-部门
   * @response `200` `JsonResultLong` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysDept/add_POST": (dto: SysDeptCreateInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysDept/add`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /admin/api/sysDept/delete
   * @summary 删除
   * @tags 系统-部门
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/api/sysDept/delete_DELETE": (query: AdminApiSysDeptDeleteDeleteParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysDept/delete`,
      method: "DELETE",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/sysDept/query
   * @summary 部门表分页查询
   * @tags 系统-部门
   * @response `200` `JsonResultPagedResultSysDeptVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysDept/query_GET": (query: AdminApiSysDeptQueryGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysDept/query`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultSysDeptVo>,
  /**
   * No description
   * @name GET /admin/api/sysDept/queryAll
   * @summary 部门表树列表
   * @tags 系统-部门
   * @response `200` `JsonResultListMenuTreeOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysDept/queryAll_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysDept/queryAll`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListMenuTreeOutputDto>,
  /**
   * No description
   * @name PUT /admin/api/sysDept/update
   * @summary 修改
   * @tags 系统-部门
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysDept/update_PUT": (dto: SysDeptModifyInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysDept/update`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/sysResource
   * @summary 搜索资源
   * @tags 系统-资源管理
   * @response `200` `JsonResultPagedResultSysResource` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysResource_GET": (query: AdminApiSysResourceGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultSysResource>,
  /**
   * No description
   * @name POST /admin/api/sysResource
   * @summary 新增
   * @tags 系统-资源管理
   * @response `200` `JsonResultString` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysResource_POST": (t: SysResourceReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource`,
      method: "POST",
      data: t,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name PUT /admin/api/sysResource
   * @summary 修改
   * @tags 系统-资源管理
   * @response `200` `JsonResultString` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysResource_PUT": (t: SysResourceReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource`,
      method: "PUT",
      data: t,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name GET /admin/api/sysResource/apis
   * @summary 获取所有api集合
   * @tags 系统-资源管理
   * @response `200` `JsonResultListSysApi` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysResource/apis_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource/apis`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListSysApi>,
  /**
   * No description
   * @name GET /admin/api/sysResource/detail/{resource-id}
   * @summary 加载资源详情
   * @tags 系统-资源管理
   * @response `200` `JsonResultResourceDetailVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysResource/detail/{resource-id}_GET": (resourceId: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource/detail/${resourceId}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultResourceDetailVo>,
  /**
   * No description
   * @name POST /admin/api/sysResource/resourceCreate
   * @summary 创建资源
   * @tags 系统-资源管理
   * @response `200` `JsonResultLong` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysResource/resourceCreate_POST": (dto: ResourceCreateDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource/resourceCreate`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name PUT /admin/api/sysResource/resourceUpdate/{id}
   * @summary 更新资源
   * @tags 系统-资源管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysResource/resourceUpdate/{id}_PUT": (id: number, dto: ResourceUpdateDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource/resourceUpdate/${id}`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/sysResource/tree
   * @summary 获取所有资源列表（树状结构）
   * @tags 系统-资源管理
   * @response `200` `JsonResultListTreeResourceVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysResource/tree_GET": (query: AdminApiSysResourceTreeGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource/tree`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultListTreeResourceVo>,
  /**
   * No description
   * @name GET /admin/api/sysResource/{id}
   * @summary 详情
   * @tags 系统-资源管理
   * @response `200` `JsonResultSysResource` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysResource/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultSysResource>,
  /**
   * No description
   * @name PUT /admin/api/sysResource/{id}
   * @summary 修改
   * @tags 系统-资源管理
   * @response `200` `JsonResultString` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysResource/{id}_PUT": (id: number, t: SysResourceReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource/${id}`,
      method: "PUT",
      data: t,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name DELETE /admin/api/sysResource/{id}
   * @summary 删除
   * @tags 系统-资源管理
   * @response `200` `JsonResultString` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/api/sysResource/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name GET /admin/api/sysResource/{menu-id}/buttons
   * @summary 根据菜单ID加载菜单下所有的按钮资源
   * @tags 系统-资源管理
   * @response `200` `JsonResultListSysResource` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysResource/{menu-id}/buttons_GET": (menuId: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource/${menuId}/buttons`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultListSysResource>,
  /**
   * No description
   * @name POST /admin/api/sysRole/add
   * @summary 新增角色
   * @tags 系统-角色管理
   * @response `200` `JsonResultLong` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysRole/add_POST": (dto: SysRoleCreateInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysRole/add`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /admin/api/sysRole/delete
   * @summary 删除角色
   * @tags 系统-角色管理
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/api/sysRole/delete_DELETE": (query: AdminApiSysRoleDeleteDeleteParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysRole/delete`,
      method: "DELETE",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/sysRole/query
   * @summary 角色列表
   * @tags 系统-角色管理
   * @response `200` `JsonResultPagedResultSysRoleOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysRole/query_GET": (query: AdminApiSysRoleQueryGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysRole/query`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultSysRoleOutputDto>,
  /**
   * No description
   * @name GET /admin/api/sysRole/queryAll
   * @summary 角色列表 不分页
   * @tags 系统-角色管理
   * @response `200` `JsonResultListSysRoleSelectOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysRole/queryAll_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysRole/queryAll`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListSysRoleSelectOutputDto>,
  /**
   * No description
   * @name POST /admin/api/sysRole/resources-role
   * @summary 批量保存角色和资源的对应关系
   * @tags 系统-角色管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysRole/resources-role_POST": (dto: RoleResourceSaveDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysRole/resources-role`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/api/sysRole/update
   * @summary 修改角色
   * @tags 系统-角色管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysRole/update_PUT": (dto: SysRoleModifyInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysRole/update`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/sysRole/{id}
   * @summary 详情
   * @tags 系统-角色管理
   * @response `200` `JsonResultSysRoleDetailOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysRole/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysRole/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultSysRoleDetailOutputDto>,
  /**
   * No description
   * @name GET /admin/api/sysRole/{id}/resources
   * @summary 获取角色对应的资源集合
   * @tags 系统-角色管理
   * @response `200` `JsonResultListSysResource` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysRole/{id}/resources_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysRole/${id}/resources`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultListSysResource>,
  /**
   * No description
   * @name POST /admin/api/sysUser/add
   * @summary 新增
   * @tags 系统-用户管理
   * @response `200` `JsonResultLoginOutputDto` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysUser/add_POST": (dto: SysUserCreateInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/add`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultLoginOutputDto>,
  /**
   * No description
   * @name GET /admin/api/sysUser/baseInfo
   * @summary 获取当前用户基本信息
   * @tags 系统-用户管理
   * @response `200` `JsonResultSysUserVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysUser/baseInfo_GET": (query: AdminApiSysUserBaseInfoGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/baseInfo`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultSysUserVo>,
  /**
   * No description
   * @name POST /admin/api/sysUser/changeStatus
   * @summary 修改状态
   * @tags 系统-用户管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysUser/changeStatus_POST": (dto: UserChangeStatusInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/changeStatus`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/sysUser/current-authorities
   * @summary 获取当前用户权限
   * @tags 系统-用户管理
   * @response `200` `JsonResultSysAuthVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysUser/current-authorities_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/current-authorities`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultSysAuthVo>,
  /**
   * No description
   * @name DELETE /admin/api/sysUser/delete
   * @summary 删除
   * @tags 系统-用户管理
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/api/sysUser/delete_DELETE": (query: AdminApiSysUserDeleteDeleteParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/delete`,
      method: "DELETE",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/sysUser/export
   * @summary 导出人员
   * @tags 系统-用户管理
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysUser/export_GET": (query: AdminApiSysUserExportGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/export`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name GET /admin/api/sysUser/list
   * @summary 列表-不分页
   * @tags 系统-用户管理
   * @response `200` `JsonResultListSysUserVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysUser/list_GET": (query: AdminApiSysUserListGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/list`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultListSysUserVo>,
  /**
   * No description
   * @name GET /admin/api/sysUser/query
   * @summary 列表
   * @tags 系统-用户管理
   * @response `200` `JsonResultPagedResultSysUserVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysUser/query_GET": (query: AdminApiSysUserQueryGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/query`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultSysUserVo>,
  /**
   * No description
   * @name DELETE /admin/api/sysUser/resetDefault
   * @summary 重置密码
   * @tags 系统-用户管理
   * @response `200` `JsonResultLoginOutputDto` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/api/sysUser/resetDefault_DELETE": (
    query: AdminApiSysUserResetDefaultDeleteParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/api/sysUser/resetDefault`,
      method: "DELETE",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultLoginOutputDto>,
  /**
   * No description
   * @name PUT /admin/api/sysUser/resetPwd
   * @summary 修改密码
   * @tags 系统-用户管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysUser/resetPwd_PUT": (dto: ResetPwdDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/resetPwd`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/api/sysUser/roles-user
   * @summary 保存员工与角色的对应关系
   * @tags 系统-用户管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysUser/roles-user_POST": (dto: UserRolesDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/roles-user`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/api/sysUser/update
   * @summary 修改
   * @tags 系统-用户管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysUser/update_PUT": (dto: SysUserModifyInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/update`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/sysUser/{id}/resources
   * @summary 根据员工ID获取员工可访问的资源
   * @tags 系统-用户管理
   * @response `200` `JsonResultListSysResource` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysUser/{id}/resources_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/${id}/resources`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultListSysResource>,
  /**
   * No description
   * @name GET /admin/api/sysUser/{id}/roles
   * @summary 根据员工ID查询员工关联的角色集合
   * @tags 系统-用户管理
   * @response `200` `JsonResultListSysRole` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/api/sysUser/{id}/roles_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/${id}/roles`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultListSysRole>,
  /**
   * No description
   * @name GET /admin/bookGoods
   * @summary 预约服务商品分页查询
   * @tags 预约服务商品
   * @response `200` `JsonResultPagedResultBookGoods` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/bookGoods_GET": (query: AdminBookGoodsGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/bookGoods`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultBookGoods>,
  /**
   * No description
   * @name POST /admin/bookGoods
   * @summary 添加
   * @tags 预约服务商品
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/bookGoods_POST": (bookGoods: BookGoodsReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/bookGoods`,
      method: "POST",
      data: bookGoods,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/bookGoods
   * @summary 编辑
   * @tags 预约服务商品
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/bookGoods_PUT": (bookGoods: BookGoodsReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/bookGoods`,
      method: "PUT",
      data: bookGoods,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/bookGoods/state
   * @summary 批量上下架
   * @tags 预约服务商品
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/bookGoods/state_PUT": (dto: CommonModifyStatusInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/bookGoods/state`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/bookGoods/{id}
   * @summary 详情
   * @tags 预约服务商品
   * @response `200` `JsonResultBookGoods` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/bookGoods/{id}_GET": (id: object, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/bookGoods/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultBookGoods>,
  /**
   * No description
   * @name DELETE /admin/bookGoods/{id}
   * @summary 删除
   * @tags 预约服务商品
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/bookGoods/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/bookGoods/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/bookOrder
   * @summary 分页列表
   * @tags 预约服务订单
   * @response `200` `JsonResultPagedResultBookOrder` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/bookOrder_GET": (query: AdminBookOrderGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/bookOrder`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultBookOrder>,
  /**
   * No description
   * @name GET /admin/bookOrder/data
   * @summary 预约服务订单明细数据
   * @tags 预约服务订单
   * @response `200` `JsonResultPagedResultBookOrderDataDTO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/bookOrder/data_GET": (query: AdminBookOrderDataGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/bookOrder/data`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultBookOrderDataDTO>,
  /**
   * No description
   * @name GET /admin/bookOrder/data/sum
   * @summary 预约服务订单明细数据汇总
   * @tags 预约服务订单
   * @response `200` `JsonResultBookOrderDataDTO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/bookOrder/data/sum_GET": (query: AdminBookOrderDataSumGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/bookOrder/data/sum`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultBookOrderDataDTO>,
  /**
   * No description
   * @name GET /admin/bookOrder/exports
   * @summary 导出
   * @tags 预约服务订单
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/bookOrder/exports_GET": (query: AdminBookOrderExportsGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/bookOrder/exports`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name GET /admin/bookOrder/{id}
   * @summary 详情
   * @tags 预约服务订单
   * @response `200` `JsonResultBookOrder` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/bookOrder/{id}_GET": (id: object, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/bookOrder/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultBookOrder>,
  /**
   * No description
   * @name GET /admin/bookOrderEarning
   * @summary 分页查询
   * @tags 分佣明细
   * @response `200` `JsonResultPagedResultBookOrderEarning` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/bookOrderEarning_GET": (query: AdminBookOrderEarningGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/bookOrderEarning`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultBookOrderEarning>,
  /**
   * No description
   * @name GET /admin/bookOrderEarning/exports
   * @summary 导出
   * @tags 分佣明细
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/bookOrderEarning/exports_GET": (query: AdminBookOrderEarningExportsGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/bookOrderEarning/exports`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name GET /admin/bookStore
   * @summary 门店列表-分页
   * @tags 门店
   * @response `200` `JsonResultPagedResultBookStore` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/bookStore_GET": (query: AdminBookStoreGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/bookStore`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultBookStore>,
  /**
   * No description
   * @name POST /admin/bookStore
   * @summary 添加
   * @tags 门店
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/bookStore_POST": (bookStore: BookStoreReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/bookStore`,
      method: "POST",
      data: bookStore,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/bookStore
   * @summary 修改
   * @tags 门店
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/bookStore_PUT": (bookStore: BookStoreReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/bookStore`,
      method: "PUT",
      data: bookStore,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/bookStore/list
   * @summary 门店列表-不分页
   * @tags 门店
   * @response `200` `JsonResultListBookStore` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/bookStore/list_GET": (query: AdminBookStoreListGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/bookStore/list`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultListBookStore>,
  /**
   * No description
   * @name PUT /admin/bookStore/state
   * @summary 启用禁用
   * @tags 门店
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/bookStore/state_PUT": (dto: CommonModifyStatusInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/bookStore/state`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/bookStore/{id}
   * @summary 详情
   * @tags 门店
   * @response `200` `JsonResultBookStore` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/bookStore/{id}_GET": (id: object, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/bookStore/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultBookStore>,
  /**
   * No description
   * @name DELETE /admin/bookStore/{id}
   * @summary 删除
   * @tags 门店
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/bookStore/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/bookStore/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/buyerManage/v1/console/changeGrade
   * @summary 修改订货商等级
   * @tags 订货商管理
   * @response `200` `JsonResultObject` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/buyerManage/v1/console/changeGrade_PUT": (dto: BuyerManageUpdateRequestDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/buyerManage/v1/console/changeGrade`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name POST /admin/buyerManage/v1/console/changeShopInStatus
   * @summary 修改订货商店中店状态
   * @tags 订货商管理
   * @response `200` `JsonResultObject` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/buyerManage/v1/console/changeShopInStatus_POST": (
    dto: UpdateBuyerShopInStatusRequestDTO,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/buyerManage/v1/console/changeShopInStatus`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name GET /admin/buyerManage/v1/console/earningRecordList
   * @summary 查询订货商收益记录
   * @tags 订货商管理
   * @response `200` `JsonResultPageInfoEarningRecordOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/buyerManage/v1/console/earningRecordList_GET": (
    query: AdminBuyerManageV1ConsoleEarningRecordListGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/buyerManage/v1/console/earningRecordList`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPageInfoEarningRecordOutputDto>,
  /**
   * No description
   * @name GET /admin/buyerManage/v1/console/page
   * @summary 分页查询
   * @tags 订货商管理
   * @response `200` `JsonResultPageInfoBuyerManageListResponseDTO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/buyerManage/v1/console/page_GET": (
    query: AdminBuyerManageV1ConsolePageGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/buyerManage/v1/console/page`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPageInfoBuyerManageListResponseDTO>,
  /**
   * No description
   * @name POST /admin/buyerManage/v1/console/save
   * @summary 保存订货商
   * @tags 订货商管理
   * @response `200` `JsonResultObject` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/buyerManage/v1/console/save_POST": (dto: BuyerManageSaveRequestDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/buyerManage/v1/console/save`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name GET /admin/buyerManage/v1/console/subMemberList
   * @summary 查询订货商下级成员列表
   * @tags 订货商管理
   * @response `200` `JsonResultPageInfoMemberListDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/buyerManage/v1/console/subMemberList_GET": (
    query: AdminBuyerManageV1ConsoleSubMemberListGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/buyerManage/v1/console/subMemberList`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPageInfoMemberListDto>,
  /**
   * No description
   * @name GET /admin/buyerManage/v1/console/{id}
   * @summary 详细信息
   * @tags 订货商管理
   * @response `200` `JsonResultBuyerManageDetailResponseDTO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/buyerManage/v1/console/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/buyerManage/v1/console/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultBuyerManageDetailResponseDTO>,
  /**
   * No description
   * @name GET /admin/cache
   * @summary 获取缓存内容
   * @tags 缓存管理
   * @response `200` `JsonResultString` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/cache_GET": (query: AdminCacheGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/cache`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name GET /admin/comments
   * @summary 评价列表
   * @tags 商品评价
   * @response `200` `JsonResultPagedResultCommentsVO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/comments_GET": (query: AdminCommentsGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/comments`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultCommentsVO>,
  /**
   * No description
   * @name PUT /admin/comments/add/audit
   * @summary 审核追评
   * @tags 商品评价
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/comments/add/audit_PUT": (dto: AuditStatusDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/comments/add/audit`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/comments/audit
   * @summary 审核首评
   * @tags 商品评价
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/comments/audit_PUT": (dto: AuditStatusDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/comments/audit`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/comments/batchAudit
   * @summary 批量审核
   * @tags 商品评价
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/comments/batchAudit_PUT": (dto: AuditStatusDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/comments/batchAudit`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/comments/batchDelete
   * @summary 批量删除
   * @tags 商品评价
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/comments/batchDelete_POST": (dto: AuditStatusDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/comments/batchDelete`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/comments/export
   * @summary 导出评价
   * @tags 商品评价
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/comments/export_GET": (query: AdminCommentsExportGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/comments/export`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name POST /admin/comments/import
   * @summary 导入评价
   * @tags 商品评价
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/comments/import_POST": (dto: CommentsImportInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/comments/import`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/comments/reply
   * @summary 回复评价
   * @tags 商品评价
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/comments/reply_PUT": (dto: ReplyCommentsDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/comments/reply`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/comments/replyAdd
   * @summary 回复追评
   * @tags 商品评价
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/comments/replyAdd_PUT": (dto: ReplyCommentsDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/comments/replyAdd`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/comments/show
   * @summary 显示或隐藏
   * @tags 商品评价
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/comments/show_PUT": (dto: StatusDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/comments/show`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name DELETE /admin/comments/{id}
   * @summary 删除
   * @tags 商品评价
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/comments/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/comments/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/demo
   * @summary queryList
   * @tags demo-controller
   * @response `200` `JsonResult` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/demo_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/demo`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResult>,
  /**
   * No description
   * @name GET /admin/earningBalanceRecord
   * @summary 列表分页查询
   * @tags 收益余额调整记录
   * @response `200` `JsonResultPagedResultEarningBalanceRecord` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/earningBalanceRecord_GET": (query: AdminEarningBalanceRecordGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/earningBalanceRecord`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultEarningBalanceRecord>,
  /**
   * No description
   * @name POST /admin/earningBalanceRecord/adjust
   * @summary 调整
   * @tags 收益余额调整记录
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/earningBalanceRecord/adjust_POST": (
    earningBalanceRecord: EarningBalanceRecordReq,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/earningBalanceRecord/adjust`,
      method: "POST",
      data: earningBalanceRecord,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/goods
   * @summary 商品列表
   * @tags 商品
   * @response `200` `JsonResultPagedResultGoodsVO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/goods_GET": (query: AdminGoodsGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/goods`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultGoodsVO>,
  /**
   * No description
   * @name PUT /admin/goods/batchShelved
   * @summary 批量上下架
   * @tags 商品
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/goods/batchShelved_PUT": (dto: GoodsStatusInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/goods/batchShelved`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/goods/batchUpdateTag
   * @summary P3-批量打标签
   * @tags 商品
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/goods/batchUpdateTag_PUT": (dto: GoodsTagBatchInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/goods/batchUpdateTag`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name DELETE /admin/goods/delete/{id}
   * @summary 删除商品
   * @tags 商品
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/goods/delete/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/goods/delete/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/goods/detail/{id}
   * @summary 详情
   * @tags 商品
   * @response `200` `JsonResultGoodsVO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/goods/detail/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/goods/detail/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultGoodsVO>,
  /**
   * No description
   * @name GET /admin/goods/export
   * @summary 导出
   * @tags 商品
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/goods/export_GET": (query: AdminGoodsExportGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/goods/export`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name PUT /admin/goods/frontShow
   * @summary 修改是否前台可见
   * @tags 商品
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/goods/frontShow_PUT": (dto: GoodsStatusInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/goods/frontShow`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/goods/listByNos
   * @summary 商品列表根据No列表查询
   * @tags 商品
   * @response `200` `JsonResultPagedResultGoodsVO` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/goods/listByNos_POST": (query: GoodsQueryByNo, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/goods/listByNos`,
      method: "POST",
      data: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultGoodsVO>,
  /**
   * No description
   * @name POST /admin/goods/listByNosAndGrIds
   * @summary 根据No和等级列表查询商品列表-购买指定商品升级专用
   * @tags 商品
   * @response `200` `JsonResultListGoodsGradeVO` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/goods/listByNosAndGrIds_POST": (query: GoodsQueryByNoAndGrId, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/goods/listByNosAndGrIds`,
      method: "POST",
      data: query,
      ...options
    }) as unknown as Promise<JsonResultListGoodsGradeVO>,
  /**
   * No description
   * @name POST /admin/goods/save
   * @summary 保存商品
   * @tags 商品
   * @response `200` `JsonResultString` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/goods/save_POST": (dto: GoodsSaveDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/goods/save`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name PUT /admin/goods/shelved
   * @summary 上下架
   * @tags 商品
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/goods/shelved_PUT": (dto: GoodsStatusInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/goods/shelved`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/goods/updateSku
   * @summary 修改Sku库存和价格
   * @tags 商品
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/goods/updateSku_PUT": (dto: SkuStockAndPriceUpdateDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/goods/updateSku`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/goods/updateWarnTop/{goodsNo}
   * @summary 更新置顶
   * @tags 商品
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/goods/updateWarnTop/{goodsNo}_POST": (goodsNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/goods/updateWarnTop/${goodsNo}`,
      method: "POST",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/goods/{no}
   * @summary 详情
   * @tags 商品
   * @deprecated
   * @response `200` `JsonResultGoodsVO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/goods/{no}_GET": (no: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/goods/${no}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultGoodsVO>,
  /**
   * No description
   * @name DELETE /admin/goods/{no}
   * @summary 删除商品
   * @tags 商品
   * @deprecated
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/goods/{no}_DELETE": (no: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/goods/${no}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/hotKeyword
   * @summary 列表
   * @tags 热词
   * @response `200` `JsonResultPagedResultHotKeywordDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotKeyword_GET": (query: AdminHotKeywordGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotKeyword`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultHotKeywordDto>,
  /**
   * No description
   * @name POST /admin/hotKeyword
   * @summary 新增
   * @tags 热词
   * @response `200` `JsonResultLong` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotKeyword_POST": (dto: HotKeywordSaveDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotKeyword`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name GET /admin/hotKeyword/{id}
   * @summary 详情
   * @tags 热词
   * @response `200` `JsonResultHotKeywordDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotKeyword/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotKeyword/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultHotKeywordDto>,
  /**
   * No description
   * @name PUT /admin/hotKeyword/{id}
   * @summary 编辑
   * @tags 热词
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotKeyword/{id}_PUT": (id: number, dto: HotKeywordUpdateDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotKeyword/${id}`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name DELETE /admin/hotKeyword/{id}
   * @summary 删除
   * @tags 热词
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/hotKeyword/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotKeyword/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/hotKeyword/{id}/show
   * @summary 显示或隐藏
   * @tags 热词
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotKeyword/{id}/show_PUT": (id: number, dto: ShowDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotKeyword/${id}/show`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/hotel
   * @summary 分页查询
   * @tags 酒店
   * @response `200` `JsonResultPagedResultHotel` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotel_GET": (query: AdminHotelGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotel`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultHotel>,
  /**
   * No description
   * @name POST /admin/hotel
   * @summary 添加
   * @tags 酒店
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotel_POST": (hotel: HotelReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotel`,
      method: "POST",
      data: hotel,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/hotel
   * @summary 编辑
   * @tags 酒店
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotel_PUT": (hotel: HotelReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotel`,
      method: "PUT",
      data: hotel,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/hotel/state
   * @summary 上下架
   * @tags 酒店
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotel/state_PUT": (dto: CommonModifyStatusInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotel/state`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/hotel/{id}
   * @summary 详情
   * @tags 酒店
   * @response `200` `JsonResultHotel` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotel/{id}_GET": (id: object, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotel/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultHotel>,
  /**
   * No description
   * @name DELETE /admin/hotel/{id}
   * @summary 删除
   * @tags 酒店
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/hotel/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotel/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/hotelBanner
   * @summary 酒店banner列表查询
   * @tags 酒店banner
   * @response `200` `JsonResultListHotelBanner` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelBanner_GET": (query: AdminHotelBannerGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelBanner`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultListHotelBanner>,
  /**
   * No description
   * @name POST /admin/hotelBanner
   * @summary 新增
   * @tags 酒店banner
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelBanner_POST": (hotelBanner: HotelBannerReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelBanner`,
      method: "POST",
      data: hotelBanner,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/hotelBanner
   * @summary 编辑
   * @tags 酒店banner
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelBanner_PUT": (hotelBanner: HotelBannerReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelBanner`,
      method: "PUT",
      data: hotelBanner,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/hotelBanner/{id}
   * @summary 酒店banner详情查询
   * @tags 酒店banner
   * @response `200` `JsonResultHotelBanner` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelBanner/{id}_GET": (id: object, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelBanner/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultHotelBanner>,
  /**
   * No description
   * @name DELETE /admin/hotelBanner/{id}
   * @summary 删除
   * @tags 酒店banner
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/hotelBanner/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelBanner/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/hotelBlacklist
   * @summary 分页列表
   * @tags 酒店黑名单
   * @response `200` `JsonResultPagedResultHotelBlacklist` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelBlacklist_GET": (query: AdminHotelBlacklistGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelBlacklist`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultHotelBlacklist>,
  /**
   * No description
   * @name POST /admin/hotelBlacklist
   * @summary 新增
   * @tags 酒店黑名单
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelBlacklist_POST": (hotelBlacklist: HotelBlacklistReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelBlacklist`,
      method: "POST",
      data: hotelBlacklist,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/hotelBlacklist
   * @summary 编辑
   * @tags 酒店黑名单
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelBlacklist_PUT": (hotelBlacklist: HotelBlacklistReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelBlacklist`,
      method: "PUT",
      data: hotelBlacklist,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/hotelBlacklist/exports
   * @summary 导出
   * @tags 酒店黑名单
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelBlacklist/exports_GET": (query: AdminHotelBlacklistExportsGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelBlacklist/exports`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name POST /admin/hotelBlacklist/import
   * @summary 导入
   * @tags 酒店黑名单
   * @response `200` `JsonResultExcelImportResultDto` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelBlacklist/import_POST": (file: any, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelBlacklist/import`,
      method: "POST",
      data: file,
      ...options
    }) as unknown as Promise<JsonResultExcelImportResultDto>,
  /**
   * No description
   * @name GET /admin/hotelBlacklist/{id}
   * @summary 详情
   * @tags 酒店黑名单
   * @response `200` `JsonResultHotelBlacklist` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelBlacklist/{id}_GET": (id: object, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelBlacklist/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultHotelBlacklist>,
  /**
   * No description
   * @name DELETE /admin/hotelBlacklist/{id}
   * @summary 删除
   * @tags 酒店黑名单
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/hotelBlacklist/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelBlacklist/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/hotelOrder
   * @summary 酒店订单分页查询
   * @tags 酒店订单
   * @response `200` `JsonResultPagedResultHotelOrder` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelOrder_GET": (query: AdminHotelOrderGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelOrder`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultHotelOrder>,
  /**
   * No description
   * @name PUT /admin/hotelOrder/cancel/{orderNo}
   * @summary 取消订单
   * @tags 酒店订单
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelOrder/cancel/{orderNo}_PUT": (orderNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelOrder/cancel/${orderNo}`,
      method: "PUT",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/hotelOrder/close/{orderNo}
   * @summary 关闭订单
   * @tags 酒店订单
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelOrder/close/{orderNo}_PUT": (orderNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelOrder/close/${orderNo}`,
      method: "PUT",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/hotelOrder/verification/{orderNo}
   * @summary 核销
   * @tags 酒店订单
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelOrder/verification/{orderNo}_PUT": (orderNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelOrder/verification/${orderNo}`,
      method: "PUT",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/hotelOrder/{id}
   * @summary 酒店订单详情
   * @tags 酒店订单
   * @response `200` `JsonResultHotelOrder` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelOrder/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelOrder/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultHotelOrder>,
  /**
   * No description
   * @name GET /admin/hotelOrderRefund
   * @summary 分页列表
   * @tags 酒店售后订单
   * @response `200` `JsonResultPagedResultHotelOrderRefund` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelOrderRefund_GET": (query: AdminHotelOrderRefundGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelOrderRefund`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultHotelOrderRefund>,
  /**
   * No description
   * @name POST /admin/hotelOrderRefund/audit
   * @summary 审核
   * @tags 酒店售后订单
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelOrderRefund/audit_POST": (dto: HotelOrderRefundAuditDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelOrderRefund/audit`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/hotelOrderRefund/{id}
   * @summary 详情
   * @tags 酒店售后订单
   * @response `200` `JsonResultHotelOrderRefund` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelOrderRefund/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelOrderRefund/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultHotelOrderRefund>,
  /**
   * No description
   * @name GET /admin/hotelRoom
   * @summary 分页列表
   * @tags 酒店房型
   * @response `200` `JsonResultPagedResultHotelRoom` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelRoom_GET": (query: AdminHotelRoomGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelRoom`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultHotelRoom>,
  /**
   * No description
   * @name POST /admin/hotelRoom
   * @summary 新增
   * @tags 酒店房型
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelRoom_POST": (hotelRoom: HotelRoomReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelRoom`,
      method: "POST",
      data: hotelRoom,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/hotelRoom
   * @summary 编辑
   * @tags 酒店房型
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelRoom_PUT": (hotelRoom: HotelRoomReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelRoom`,
      method: "PUT",
      data: hotelRoom,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/hotelRoom/state
   * @summary 上下架
   * @tags 酒店房型
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelRoom/state_PUT": (dto: CommonModifyStatusInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelRoom/state`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/hotelRoom/{id}
   * @summary 详情
   * @tags 酒店房型
   * @response `200` `JsonResultHotelRoom` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelRoom/{id}_GET": (id: object, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelRoom/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultHotelRoom>,
  /**
   * No description
   * @name DELETE /admin/hotelRoom/{id}
   * @summary 删除
   * @tags 酒店房型
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/hotelRoom/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelRoom/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/hotelUser
   * @summary 分页列表
   * @tags 酒店人员
   * @response `200` `JsonResultPagedResultHotelUser` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelUser_GET": (query: AdminHotelUserGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelUser`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultHotelUser>,
  /**
   * No description
   * @name POST /admin/hotelUser
   * @summary 新增
   * @tags 酒店人员
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelUser_POST": (dto: HotelUserInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelUser`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/hotelUser/exports
   * @summary 导出
   * @tags 酒店人员
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelUser/exports_GET": (query: AdminHotelUserExportsGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelUser/exports`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name GET /admin/hotelUser/{id}
   * @summary 详情
   * @tags 酒店人员
   * @response `200` `HotelUser` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/hotelUser/{id}_GET": (id: object, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelUser/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<HotelUser>,
  /**
   * No description
   * @name DELETE /admin/hotelUser/{id}
   * @summary 删除
   * @tags 酒店人员
   * @response `200` `void` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/hotelUser/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotelUser/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name POST /admin/jumengke/member/push
   * @summary memberPush
   * @tags jmk-controller
   * @response `200` `JsonResult` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/jumengke/member/push_POST": (jmkCommonRequest: JmkCommonRequest, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/jumengke/member/push`,
      method: "POST",
      data: jmkCommonRequest,
      ...options
    }) as unknown as Promise<JsonResult>,
  /**
   * No description
   * @name GET /admin/live
   * @summary 查询根据id集合
   * @tags 直播
   * @response `200` `JsonResultListLive` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/live_GET": (query: AdminLiveGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/live`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultListLive>,
  /**
   * No description
   * @name GET /admin/live/statistics
   * @summary 列表
   * @tags 直播统计
   * @response `200` `JsonResultPagedResultLiveStatistics` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/live/statistics_GET": (query: AdminLiveStatisticsGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/live/statistics`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultLiveStatistics>,
  /**
   * No description
   * @name GET /admin/live/statistics/export
   * @summary 导出
   * @tags 直播统计
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/live/statistics/export_GET": (query: AdminLiveStatisticsExportGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/live/statistics/export`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name GET /admin/live/update
   * @summary 直播修改回调
   * @tags 直播
   * @response `200` `JsonResultObject` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/live/update_GET": (query: AdminLiveUpdateGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/live/update`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name POST /admin/live/update
   * @summary 直播修改回调
   * @tags 直播
   * @response `200` `JsonResultObject` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/live/update_POST": (data: LiveUpdateVolcengineVo, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/live/update`,
      method: "POST",
      data: data,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name GET /admin/live/{id}
   * @summary 查询根据id
   * @tags 直播
   * @response `200` `JsonResultLive` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/live/{id}_GET": (id: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/live/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultLive>,
  /**
   * No description
   * @name GET /admin/livePage
   * @summary 列表
   * @tags 直播页面
   * @response `200` `JsonResultPagedResultLivePage` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/livePage_GET": (query: AdminLivePageGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/livePage`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultLivePage>,
  /**
   * No description
   * @name POST /admin/livePage
   * @summary 新增
   * @tags 直播页面
   * @response `200` `JsonResultLong` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/livePage_POST": (dto: LivePageInsert, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/livePage`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name GET /admin/livePage/{id}
   * @summary 详情
   * @tags 直播页面
   * @response `200` `JsonResultLivePage` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/livePage/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/livePage/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultLivePage>,
  /**
   * No description
   * @name PUT /admin/livePage/{id}
   * @summary 编辑
   * @tags 直播页面
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/livePage/{id}_PUT": (id: number, dto: LivePageUpdate, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/livePage/${id}`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name DELETE /admin/livePage/{id}
   * @summary 删除
   * @tags 直播页面
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/livePage/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/livePage/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * @description 退出
   * @name POST /admin/logout
   * @summary 退出
   * @tags 退出
   * @response `200` `void` OK
   */
  "/admin/logout_POST": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/logout`,
      method: "POST",
      params,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name POST /admin/mall/address/add
   * @summary 新增
   * @tags 地址库
   * @response `200` `JsonResultLong` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/address/add_POST": (dto: AddressCreateInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/address/add`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /admin/mall/address/delete/{id}
   * @summary 删除
   * @tags 地址库
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/mall/address/delete/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/address/delete/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/address/get/{id}
   * @summary 地址详情
   * @tags 地址库
   * @response `200` `JsonResultAddressOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/address/get/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/address/get/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultAddressOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/address/queryListAll
   * @summary 地址列表 不分页
   * @tags 地址库
   * @response `200` `JsonResultListAddressOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/address/queryListAll_GET": (query: AdminMallAddressQueryListAllGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/address/queryListAll`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultListAddressOutputDto>,
  /**
   * No description
   * @name PUT /admin/mall/address/update
   * @summary 编辑
   * @tags 地址库
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/address/update_PUT": (dto: AddressModifyInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/address/update`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/mall/balance/adjust
   * @summary 调整余额
   * @tags 余额
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/balance/adjust_POST": (dto: BalanceAdjustInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/balance/adjust`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/balance/export/{userId}
   * @summary 余额流水列表-导出
   * @tags 余额
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/balance/export/{userId}_GET": (
    { userId, ...query }: AdminMallBalanceExportUserIdGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mall/balance/export/${userId}`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name GET /admin/mall/balance/get/{userId}
   * @summary 余额汇总信息
   * @tags 余额
   * @response `200` `JsonResultBalanceGetOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/balance/get/{userId}_GET": (userId: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/balance/get/${userId}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultBalanceGetOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/balance/query/{userId}
   * @summary 余额流水列表
   * @tags 余额
   * @response `200` `JsonResultPagedResultBalanceFlowOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/balance/query/{userId}_GET": (
    { userId, ...query }: AdminMallBalanceQueryUserIdGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mall/balance/query/${userId}`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultBalanceFlowOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/balance/rechargeRecord
   * @summary 会员充值记录分页查询
   * @tags 余额
   * @response `200` `JsonResultPagedResultRechargeRecordOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/balance/rechargeRecord_GET": (
    query: AdminMallBalanceRechargeRecordGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mall/balance/rechargeRecord`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultRechargeRecordOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/balance/rechargeRecord/export
   * @summary 会员充值记录导出
   * @tags 余额
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/balance/rechargeRecord/export_GET": (
    query: AdminMallBalanceRechargeRecordExportGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mall/balance/rechargeRecord/export`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name POST /admin/mall/balance/refundCard
   * @summary 退卡
   * @tags 余额
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/balance/refundCard_POST": (dto: BalanceRefundCardInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/balance/refundCard`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/mall/banner/add
   * @summary 新增
   * @tags Banner
   * @response `200` `JsonResultLong` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/banner/add_POST": (dto: BannerCreateInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/banner/add`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /admin/mall/banner/delete/{id}
   * @summary 删除
   * @tags Banner
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/mall/banner/delete/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/banner/delete/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/banner/get/{id}
   * @summary 详情
   * @tags Banner
   * @response `200` `JsonResultBannerOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/banner/get/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/banner/get/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultBannerOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/banner/queryList
   * @summary 列表
   * @tags Banner
   * @response `200` `JsonResultPagedResultBannerOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/banner/queryList_GET": (query: AdminMallBannerQueryListGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/banner/queryList`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultBannerOutputDto>,
  /**
   * No description
   * @name DELETE /admin/mall/banner/test/{id}
   * @summary 测试发布
   * @tags Banner
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/mall/banner/test/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/banner/test/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/mall/banner/update
   * @summary 编辑
   * @tags Banner
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/banner/update_PUT": (dto: BannerModifyInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/banner/update`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/mall/banner/updateStatus
   * @summary 修改状态
   * @tags Banner
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/banner/updateStatus_PUT": (dto: BannerModifyStatusInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/banner/updateStatus`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/mall/classify/add
   * @summary 新增
   * @tags 商品分类
   * @response `200` `JsonResultLong` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/classify/add_POST": (dto: GoodsClassifySaveDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/classify/add`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /admin/mall/classify/delete/{id}
   * @summary 删除
   * @tags 商品分类
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/mall/classify/delete/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/classify/delete/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/classify/get/{id}
   * @summary 详情
   * @tags 商品分类
   * @response `200` `JsonResultGoodsClassifyOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/classify/get/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/classify/get/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultGoodsClassifyOutputDto>,
  /**
   * No description
   * @name POST /admin/mall/classify/move
   * @summary 移动分类
   * @tags 商品分类
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/classify/move_POST": (dto: GoodsClassifyMoveInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/classify/move`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/classify/tree
   * @summary 商品分类树形结构列表
   * @tags 商品分类
   * @response `200` `JsonResultListMenuTreeOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/classify/tree_GET": (query: AdminMallClassifyTreeGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/classify/tree`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultListMenuTreeOutputDto>,
  /**
   * No description
   * @name PUT /admin/mall/classify/update
   * @summary 编辑
   * @tags 商品分类
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/classify/update_PUT": (dto: GoodsClassifyUpdateDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/classify/update`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/mall/comments/headImg/batchAdd
   * @summary 批量新增
   * @tags 评价头像
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/comments/headImg/batchAdd_POST": (list: string[], options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/comments/headImg/batchAdd`,
      method: "POST",
      data: list,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name DELETE /admin/mall/comments/headImg/delete/{id}
   * @summary 删除
   * @tags 评价头像
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/mall/comments/headImg/delete/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/comments/headImg/delete/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/comments/headImg/list
   * @summary 列表
   * @tags 评价头像
   * @response `200` `JsonResultPagedResultCommentsHeadImgOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/comments/headImg/list_GET": (
    query: AdminMallCommentsHeadImgListGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mall/comments/headImg/list`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultCommentsHeadImgOutputDto>,
  /**
   * No description
   * @name POST /admin/mall/config/insertAndUpdate
   * @summary 保存和修改 key:value格式
   * @tags 系统配置项
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/config/insertAndUpdate_POST": (data: Record<string, string>, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/config/insertAndUpdate`,
      method: "POST",
      data: data,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/config/query
   * @summary 查询所有配置项
   * @tags 系统配置项
   * @response `200` `JsonResultListConfConfigOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/config/query_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/config/query`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListConfConfigOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/config/queryByKey
   * @summary 根据key查询
   * @tags 系统配置项
   * @response `200` `JsonResultString` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/config/queryByKey_GET": (query: AdminMallConfigQueryByKeyGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/config/queryByKey`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name GET /admin/mall/config/queryByMultipleKey
   * @summary 根据keys查询，多个按逗号分割
   * @tags 系统配置项
   * @response `200` `JsonResultMapStringString` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/config/queryByMultipleKey_GET": (
    query: AdminMallConfigQueryByMultipleKeyGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mall/config/queryByMultipleKey`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultMapStringString>,
  /**
   * No description
   * @name POST /admin/mall/config/queryReachStandUpgradeConf
   * @summary 查询下级人数达标升级配置信息
   * @tags 系统配置项
   * @response `200` `JsonResultListReachStandUpgradeConfOutputDto` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/config/queryReachStandUpgradeConf_POST": (
    request: ReachStandUpgradeConfRequest,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mall/config/queryReachStandUpgradeConf`,
      method: "POST",
      data: request,
      ...options
    }) as unknown as Promise<JsonResultListReachStandUpgradeConfOutputDto>,
  /**
   * No description
   * @name POST /admin/mall/coupon/detail
   * @summary 发放记录详情列表
   * @tags 优惠劵发放
   * @response `200` `JsonResultPagedResultCouponRecordOutputDto` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/coupon/detail_POST": (query: CouponRecordDetailQuery, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/coupon/detail`,
      method: "POST",
      data: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultCouponRecordOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/coupon/export
   * @summary 导出发放记录详情
   * @tags 优惠劵发放
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/coupon/export_GET": (query: AdminMallCouponExportGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/coupon/export`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name POST /admin/mall/coupon/list
   * @summary 发放记录列表
   * @tags 优惠劵发放
   * @response `200` `JsonResultPagedResultCouponRecordDetailOutputDto` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/coupon/list_POST": (query: CouponRecordQuery, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/coupon/list`,
      method: "POST",
      data: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultCouponRecordDetailOutputDto>,
  /**
   * No description
   * @name POST /admin/mall/coupon/receive
   * @summary 发放优惠券
   * @tags 优惠劵发放
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/coupon/receive_POST": (dto: CouponSendInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/coupon/receive`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/mall/coupon/receiveByMemberNos
   * @summary 发放优惠券根据会员号
   * @tags 优惠劵发放
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/coupon/receiveByMemberNos_POST": (dto: CouponSendBymemberNosInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/coupon/receiveByMemberNos`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/couponCode
   * @summary 优惠码列表
   * @tags 优惠码
   * @response `200` `JsonResultPagedResultCouponCodeOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/couponCode_GET": (query: AdminMallCouponCodeGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/couponCode`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultCouponCodeOutputDto>,
  /**
   * No description
   * @name PUT /admin/mall/couponCode
   * @summary 生成优惠码
   * @tags 优惠码
   * @response `200` `JsonResultLong` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/couponCode_PUT": (dto: CouponCodeCreateInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/couponCode`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name GET /admin/mall/couponCode/detail
   * @summary 优惠码详情列表
   * @tags 优惠码
   * @response `200` `JsonResultPagedResultCouponCodeDetailOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/couponCode/detail_GET": (query: AdminMallCouponCodeDetailGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/couponCode/detail`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultCouponCodeDetailOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/couponCode/export/{id}
   * @summary 导出优惠码详情
   * @tags 优惠码
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/couponCode/export/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/couponCode/export/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name POST /admin/mall/express/add
   * @summary 新增
   * @tags 运费模板
   * @response `200` `JsonResultLong` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/express/add_POST": (dto: ExpressTemplateSaveDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/express/add`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /admin/mall/express/delete/{id}
   * @summary 删除
   * @tags 运费模板
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/mall/express/delete/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/express/delete/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/express/get/{id}
   * @summary 详情
   * @tags 运费模板
   * @response `200` `JsonResultExpressTemplateDetailOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/express/get/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/express/get/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultExpressTemplateDetailOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/express/query
   * @summary 列表
   * @tags 运费模板
   * @response `200` `JsonResultPagedResultExpressTemplateListOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/express/query_GET": (query: AdminMallExpressQueryGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/express/query`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultExpressTemplateListOutputDto>,
  /**
   * No description
   * @name PUT /admin/mall/express/update
   * @summary 编辑
   * @tags 运费模板
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/express/update_PUT": (dto: ExpressTemplateUpdateDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/express/update`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/group
   * @summary 分页列表
   * @tags 商品分组
   * @response `200` `JsonResultPagedResultGoodsGroupOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/group_GET": (query: AdminMallGroupGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/group`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultGoodsGroupOutputDto>,
  /**
   * No description
   * @name POST /admin/mall/group/add
   * @summary 新增
   * @tags 商品分组
   * @response `200` `JsonResultLong` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/group/add_POST": (dto: GoodsGroupSaveDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/group/add`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /admin/mall/group/delete/{id}
   * @summary 删除
   * @tags 商品分组
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/mall/group/delete/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/group/delete/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/group/get/{id}
   * @summary 详情
   * @tags 商品分组
   * @response `200` `JsonResultGoodsGroupOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/group/get/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/group/get/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultGoodsGroupOutputDto>,
  /**
   * No description
   * @name PUT /admin/mall/group/update
   * @summary 编辑
   * @tags 商品分组
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/group/update_PUT": (dto: GoodsGroupUpdateDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/group/update`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/memberCard
   * @summary 列表
   * @tags 会员卡
   * @response `200` `JsonResultPagedResultMemCardDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/memberCard_GET": (query: AdminMallMemberCardGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/memberCard`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMemCardDto>,
  /**
   * No description
   * @name POST /admin/mall/memberCard
   * @summary 新增
   * @tags 会员卡
   * @response `200` `JsonResultLong` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/memberCard_POST": (dto: MemCardSaveDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/memberCard`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name GET /admin/mall/memberCard/member/{userId}
   * @summary 持有的会员卡列表
   * @tags 会员卡
   * @response `200` `JsonResultPagedResultMemCardDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/memberCard/member/{userId}_GET": (
    { userId, ...query }: AdminMallMemberCardMemberUserIdGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mall/memberCard/member/${userId}`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMemCardDto>,
  /**
   * No description
   * @name GET /admin/mall/memberCard/{id}
   * @summary 详情
   * @tags 会员卡
   * @response `200` `JsonResultMemCardDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/memberCard/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/memberCard/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultMemCardDto>,
  /**
   * No description
   * @name PUT /admin/mall/memberCard/{id}
   * @summary 编辑
   * @tags 会员卡
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/memberCard/{id}_PUT": (id: number, dto: MemCardUpdateDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/memberCard/${id}`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/mall/page/add
   * @summary 新增
   * @tags 自定义页面
   * @response `200` `JsonResultLong` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/page/add_POST": (dto: MallConfPageCreateInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/page/add`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /admin/mall/page/delete
   * @summary 删除
   * @tags 自定义页面
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/mall/page/delete_DELETE": (query: AdminMallPageDeleteDeleteParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/page/delete`,
      method: "DELETE",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/page/detail
   * @summary 详情
   * @tags 自定义页面
   * @response `200` `JsonResultMallConfPageOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/page/detail_GET": (query: AdminMallPageDetailGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/page/detail`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultMallConfPageOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/page/query
   * @summary 列表
   * @tags 自定义页面
   * @response `200` `JsonResultPagedResultMallConfPageOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/page/query_GET": (query: AdminMallPageQueryGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/page/query`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMallConfPageOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/page/queryAll
   * @summary 列表 不分页
   * @tags 自定义页面
   * @response `200` `JsonResultListMallConfPageOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/page/queryAll_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/page/queryAll`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListMallConfPageOutputDto>,
  /**
   * No description
   * @name PUT /admin/mall/page/update
   * @summary 修改
   * @tags 自定义页面
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/page/update_PUT": (dto: MallConfPageModifyInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/page/update`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/mall/refundReason/add
   * @summary 新增
   * @tags 售后原因
   * @response `200` `JsonResultLong` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/refundReason/add_POST": (dto: RefundReasonCreateInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/refundReason/add`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /admin/mall/refundReason/delete/{id}
   * @summary 删除
   * @tags 售后原因
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/mall/refundReason/delete/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/refundReason/delete/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/refundReason/queryAll
   * @summary 列表 不分页
   * @tags 售后原因
   * @response `200` `JsonResultListRefundReasonOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/refundReason/queryAll_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/refundReason/queryAll`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListRefundReasonOutputDto>,
  /**
   * No description
   * @name PUT /admin/mall/refundReason/update
   * @summary 编辑
   * @tags 售后原因
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/refundReason/update_PUT": (dto: RefundReasonModifyInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/refundReason/update`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/mall/score/addPostsAward
   * @summary addPostsAward
   * @tags 积分
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/score/addPostsAward_POST": (dto: PostsAwardDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/score/addPostsAward`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/score/export/{userId}
   * @summary 导出积分流水
   * @tags 积分
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/score/export/{userId}_GET": (userId: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/score/export/${userId}`,
      method: "GET",
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name GET /admin/mall/score/get/{userId}
   * @summary 积分汇总信息
   * @tags 积分
   * @response `200` `JsonResultScoreGetOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/score/get/{userId}_GET": (userId: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/score/get/${userId}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultScoreGetOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/score/query/{userId}
   * @summary 积分流水列表
   * @tags 积分
   * @response `200` `JsonResultPagedResultScoreFlowOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/score/query/{userId}_GET": (
    { userId, ...query }: AdminMallScoreQueryUserIdGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mall/score/query/${userId}`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultScoreFlowOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/signin
   * @summary 获取签到任务信息
   * @tags 签到
   * @response `200` `JsonResultSigninTaskOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/signin_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/signin`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultSigninTaskOutputDto>,
  /**
   * No description
   * @name POST /admin/mall/signin
   * @summary 保存签到任务信息
   * @tags 签到
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/signin_POST": (dto: SigninTaskInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/signin`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/mall/spec/add
   * @summary 新增
   * @tags 商品规格
   * @response `200` `JsonResultLong` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/spec/add_POST": (dto: GoodsSpecCrerateInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/spec/add`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /admin/mall/spec/delete/{id}
   * @summary 删除
   * @tags 商品规格
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/mall/spec/delete/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/spec/delete/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/spec/export
   * @summary 导出
   * @tags 商品规格
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/spec/export_GET": (query: AdminMallSpecExportGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/spec/export`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name GET /admin/mall/spec/get/{id}
   * @summary 详情
   * @tags 商品规格
   * @response `200` `JsonResultGoodsSpecOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/spec/get/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/spec/get/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultGoodsSpecOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/spec/query
   * @summary 列表
   * @tags 商品规格
   * @response `200` `JsonResultPagedResultGoodsSpecOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/spec/query_GET": (query: AdminMallSpecQueryGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/spec/query`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultGoodsSpecOutputDto>,
  /**
   * No description
   * @name PUT /admin/mall/spec/update
   * @summary 编辑
   * @tags 商品规格
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/spec/update_PUT": (dto: GoodsSpecModifyInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/spec/update`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/statistics/buyUserCountStatistics
   * @summary 统计图下单人数查询
   * @tags 首页统计
   * @response `200` `JsonResultStatisticsGraphOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/statistics/buyUserCountStatistics_GET": (
    query: AdminMallStatisticsBuyUserCountStatisticsGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mall/statistics/buyUserCountStatistics`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultStatisticsGraphOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/statistics/exportOrderDetailsStatistics
   * @summary 导出营业额明细
   * @tags 首页统计
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/statistics/exportOrderDetailsStatistics_GET": (
    query: AdminMallStatisticsExportOrderDetailsStatisticsGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mall/statistics/exportOrderDetailsStatistics`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name GET /admin/mall/statistics/graphOrderCountStatistics
   * @summary 统计图成交订单量查询
   * @tags 首页统计
   * @response `200` `JsonResultStatisticsGraphOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/statistics/graphOrderCountStatistics_GET": (
    query: AdminMallStatisticsGraphOrderCountStatisticsGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mall/statistics/graphOrderCountStatistics`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultStatisticsGraphOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/statistics/graphSaleAmountStatistics
   * @summary 统计图营业额查询
   * @tags 首页统计
   * @response `200` `JsonResultStatisticsGraphOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/statistics/graphSaleAmountStatistics_GET": (
    query: AdminMallStatisticsGraphSaleAmountStatisticsGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mall/statistics/graphSaleAmountStatistics`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultStatisticsGraphOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/statistics/graphUserCountStatistics
   * @summary 统计图新增用户数查询
   * @tags 首页统计
   * @response `200` `JsonResultStatisticsGraphOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/statistics/graphUserCountStatistics_GET": (
    query: AdminMallStatisticsGraphUserCountStatisticsGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mall/statistics/graphUserCountStatistics`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultStatisticsGraphOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/statistics/kpi
   * @summary 业绩统计列表
   * @tags 首页统计
   * @response `200` `JsonResultPagedResultKpiStatDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/statistics/kpi_GET": (query: AdminMallStatisticsKpiGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/statistics/kpi`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultKpiStatDto>,
  /**
   * No description
   * @name GET /admin/mall/statistics/kpi/export
   * @summary 业绩统计导出
   * @tags 首页统计
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/statistics/kpi/export_GET": (
    query: AdminMallStatisticsKpiExportGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mall/statistics/kpi/export`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name GET /admin/mall/statistics/kpi/grade
   * @summary 业绩统计-顶部等级
   * @tags 首页统计
   * @response `200` `JsonResultListGradeStatDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/statistics/kpi/grade_GET": (query: AdminMallStatisticsKpiGradeGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/statistics/kpi/grade`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultListGradeStatDto>,
  /**
   * No description
   * @name GET /admin/mall/statistics/orderDetailsStatistics
   * @summary 营业额明细查询
   * @tags 首页统计
   * @response `200` `JsonResultPagedResultOrderVO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/statistics/orderDetailsStatistics_GET": (
    query: AdminMallStatisticsOrderDetailsStatisticsGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mall/statistics/orderDetailsStatistics`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultOrderVO>,
  /**
   * No description
   * @name GET /admin/mall/statistics/statisticsInfo
   * @summary 获取今日统计信息
   * @tags 首页统计
   * @response `200` `JsonResultStatisticsCountOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/statistics/statisticsInfo_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/statistics/statisticsInfo`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultStatisticsCountOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/tag
   * @summary 分页列表
   * @tags 商品标签
   * @response `200` `JsonResultPagedResultGoodsTagOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/tag_GET": (query: AdminMallTagGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/tag`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultGoodsTagOutputDto>,
  /**
   * No description
   * @name POST /admin/mall/tag/add
   * @summary 新增
   * @tags 商品标签
   * @response `200` `JsonResultLong` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/tag/add_POST": (dto: GoodsTagSaveDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/tag/add`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /admin/mall/tag/delete/{id}
   * @summary 删除
   * @tags 商品标签
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/mall/tag/delete/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/tag/delete/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/tag/get/{id}
   * @summary 详情
   * @tags 商品标签
   * @response `200` `JsonResultGoodsTagOutputDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/tag/get/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/tag/get/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultGoodsTagOutputDto>,
  /**
   * No description
   * @name PUT /admin/mall/tag/update
   * @summary 编辑
   * @tags 商品标签
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/tag/update_PUT": (dto: GoodsTagUpdateDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/tag/update`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/userTaskConfig
   * @summary 列表
   * @tags 用户任务
   * @response `200` `JsonResultPagedResultMallConfUserTaskDTO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/userTaskConfig_GET": (query: AdminMallUserTaskConfigGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/userTaskConfig`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMallConfUserTaskDTO>,
  /**
   * No description
   * @name PUT /admin/mall/userTaskConfig/{id}
   * @summary 编辑
   * @tags 用户任务
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mall/userTaskConfig/{id}_PUT": (id: number, dto: MallConfUserTaskUpdateDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/userTaskConfig/${id}`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mallConfLogisticsCompany/mallExpressCompanyAll
   * @summary 查询全部快递公司与编号
   * @tags 物流公司
   * @response `200` `JsonResultListMallExpressCompanyVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mallConfLogisticsCompany/mallExpressCompanyAll_GET": (
    params: Record<string, any> = {},
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mallConfLogisticsCompany/mallExpressCompanyAll`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListMallExpressCompanyVo>,
  /**
   * No description
   * @name POST /admin/mallCouponTemplate/add
   * @summary 优惠劵新增
   * @tags 优惠劵模板
   * @response `200` `JsonResultLong` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mallCouponTemplate/add_POST": (dto: CouponTemplateCreateInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mallCouponTemplate/add`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /admin/mallCouponTemplate/delete
   * @summary 优惠劵作废
   * @tags 优惠劵模板
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/mallCouponTemplate/delete_DELETE": (
    query: AdminMallCouponTemplateDeleteDeleteParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mallCouponTemplate/delete`,
      method: "DELETE",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mallCouponTemplate/detail
   * @summary 详情
   * @tags 优惠劵模板
   * @response `200` `JsonResultCouponTemplateVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mallCouponTemplate/detail_GET": (
    query: AdminMallCouponTemplateDetailGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mallCouponTemplate/detail`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultCouponTemplateVo>,
  /**
   * No description
   * @name GET /admin/mallCouponTemplate/queryList
   * @summary 列表
   * @tags 优惠劵模板
   * @response `200` `JsonResultPagedResultCouponTemplateVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mallCouponTemplate/queryList_GET": (
    query: AdminMallCouponTemplateQueryListGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mallCouponTemplate/queryList`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultCouponTemplateVo>,
  /**
   * No description
   * @name POST /admin/mallCouponTemplate/queryListByTemplateNos
   * @summary 列表 根据编号
   * @tags 优惠劵模板
   * @response `200` `JsonResultListCouponTemplateVo` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mallCouponTemplate/queryListByTemplateNos_POST": (templateNos: string[], options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mallCouponTemplate/queryListByTemplateNos`,
      method: "POST",
      data: templateNos,
      ...options
    }) as unknown as Promise<JsonResultListCouponTemplateVo>,
  /**
   * No description
   * @name PUT /admin/mallCouponTemplate/update
   * @summary 优惠劵修改
   * @tags 优惠劵模板
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mallCouponTemplate/update_PUT": (dto: CouponTemplateModifyInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mallCouponTemplate/update`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/mallCouponTemplate/updatePublicStatus
   * @summary 优惠劵显示状态修改
   * @tags 优惠劵模板
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/mallCouponTemplate/updatePublicStatus_PUT": (
    dto: CouponTemplateStatusInputDto,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mallCouponTemplate/updatePublicStatus`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name DELETE /admin/memCoupon/delete
   * @summary 用户优惠券作废
   * @tags 优惠劵模板
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/memCoupon/delete_DELETE": (query: AdminMemCouponDeleteDeleteParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/memCoupon/delete`,
      method: "DELETE",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/memCoupon/detail
   * @summary 详情
   * @tags 优惠劵模板
   * @response `200` `JsonResultCouponTemplateVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/memCoupon/detail_GET": (query: AdminMemCouponDetailGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/memCoupon/detail`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultCouponTemplateVo>,
  /**
   * No description
   * @name GET /admin/memCoupon/export
   * @summary 导出优惠券领用记录
   * @tags 优惠劵模板
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/memCoupon/export_GET": (query: AdminMemCouponExportGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/memCoupon/export`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name GET /admin/memCoupon/list
   * @summary 用户优惠券列表
   * @tags 优惠劵模板
   * @response `200` `JsonResultPagedResultMemCouponListVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/memCoupon/list_GET": (query: AdminMemCouponListGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/memCoupon/list`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMemCouponListVo>,
  /**
   * No description
   * @name GET /admin/memCoupon/queryList
   * @summary 用户领取优惠券查询
   * @tags 优惠劵模板
   * @response `200` `JsonResultPagedResultMemCouponRecordVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/memCoupon/queryList_GET": (query: AdminMemCouponQueryListGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/memCoupon/queryList`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMemCouponRecordVo>,
  /**
   * No description
   * @name GET /admin/memCoupon/statistic
   * @summary 用户优惠券信息统计
   * @tags 优惠劵模板
   * @response `200` `JsonResultMemCouponStatisticVo` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/memCoupon/statistic_GET": (query: AdminMemCouponStatisticGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/memCoupon/statistic`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultMemCouponStatisticVo>,
  /**
   * No description
   * @name GET /admin/memCoupon/statisticNew
   * @summary 用户优惠券信息统计
   * @tags admin/优惠劵模板
   * @response `200` `JsonResultMemCouponStatisticVo` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/admin/memCoupon/statisticNew_GET": (query: AdminMemCouponStatisticGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/memCoupon/statisticNew`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<{
      code?: number;
      data?: [{
        id?: number;
        key?: string;
        value?: number;
        name?: string;
      }];
      msg?: string;
    }>,
  /**
   * No description
   * @name GET /admin/operate/logs
   * @summary 操作日志查询
   * @tags 操作日志
   * @response `200` `JsonResultPagedResultOperateLogsDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/operate/logs_GET": (query: AdminOperateLogsGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/operate/logs`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultOperateLogsDto>,
  /**
   * No description
   * @name GET /admin/operate/logs/export
   * @summary 导出日志
   * @tags 操作日志
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/operate/logs/export_GET": (query: AdminOperateLogsExportGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/operate/logs/export`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name GET /admin/operate/logs/operateTypeEnums
   * @summary 操作类型枚举值列表
   * @tags 操作日志
   * @response `200` `JsonResultListString` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/operate/logs/operateTypeEnums_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/operate/logs/operateTypeEnums`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListString>,
  /**
   * No description
   * @name GET /admin/orders
   * @summary 列表
   * @tags 订单
   * @response `200` `JsonResultPagedResultOrderVO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/orders_GET": (query: AdminOrdersGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/orders`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultOrderVO>,
  /**
   * No description
   * @name GET /admin/orders/erpsearch
   * @summary test2
   * @tags 订单
   * @response `200` `JsonResult` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/orders/erpsearch_GET": (query: AdminOrdersErpsearchGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/orders/erpsearch`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResult>,
  /**
   * No description
   * @name GET /admin/orders/export
   * @summary 导出
   * @tags 订单
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/orders/export_GET": (query: AdminOrdersExportGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/orders/export`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name GET /admin/orders/goodsStat
   * @summary 商品分析
   * @tags 订单
   * @response `200` `JsonResultOrderGoodsStatVO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/orders/goodsStat_GET": (query: AdminOrdersGoodsStatGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/orders/goodsStat`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultOrderGoodsStatVO>,
  /**
   * No description
   * @name GET /admin/orders/goodsStat/export
   * @summary 商品分析导出
   * @tags 订单
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/orders/goodsStat/export_GET": (query: AdminOrdersGoodsStatExportGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/orders/goodsStat/export`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name GET /admin/orders/list
   * @summary 订单列表和积分订单列表
   * @tags 订单
   * @response `200` `JsonResultPagedResultOrderVO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/orders/list_GET": (query: AdminOrdersListGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/orders/list`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultOrderVO>,
  /**
   * No description
   * @name POST /admin/orders/sign
   * @summary 标记
   * @tags 订单
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/orders/sign_POST": (dto: OrderSignDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/orders/sign`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/orders/test
   * @summary test
   * @tags 订单
   * @response `200` `void` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/orders/test_POST": (orderVO: OrderVOReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/orders/test`,
      method: "POST",
      data: orderVO,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name POST /admin/orders/test1
   * @summary test1
   * @tags 订单
   * @response `200` `void` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/orders/test1_POST": (orderVO: OrderVOReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/orders/test1`,
      method: "POST",
      data: orderVO,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name PUT /admin/orders/updateAddress
   * @summary 更改收货地址
   * @tags 订单
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/orders/updateAddress_PUT": (dto: UpdateAddressDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/orders/updateAddress`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/orders/updateErpShipping
   * @summary updateErpShipping
   * @tags 订单
   * @response `200` `JsonResult` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/orders/updateErpShipping_POST": (
    query: AdminOrdersUpdateErpShippingPostParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/orders/updateErpShipping`,
      method: "POST",
      params: query,
      ...options
    }) as unknown as Promise<JsonResult>,
  /**
   * No description
   * @name GET /admin/orders/{orderNo}
   * @summary 详情
   * @tags 订单
   * @response `200` `JsonResultOrderVO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/orders/{orderNo}_GET": (orderNo: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/orders/${orderNo}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultOrderVO>,
  /**
   * No description
   * @name GET /admin/popupAds
   * @summary 列表
   * @tags 弹窗广告
   * @response `200` `JsonResultPagedResultPopupAdsDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/popupAds_GET": (query: AdminPopupAdsGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/popupAds`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultPopupAdsDto>,
  /**
   * No description
   * @name POST /admin/popupAds
   * @summary 新增
   * @tags 弹窗广告
   * @response `200` `JsonResultLong` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/popupAds_POST": (dto: PopupAdsSaveDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/popupAds`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name GET /admin/popupAds/{id}
   * @summary 详情
   * @tags 弹窗广告
   * @response `200` `JsonResultPopupAdsDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/popupAds/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/popupAds/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultPopupAdsDto>,
  /**
   * No description
   * @name PUT /admin/popupAds/{id}
   * @summary 编辑
   * @tags 弹窗广告
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/popupAds/{id}_PUT": (id: number, dto: PopupAdsUpdateDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/popupAds/${id}`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name DELETE /admin/popupAds/{id}
   * @summary 删除
   * @tags 弹窗广告
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/popupAds/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/popupAds/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/popupAds/{id}/show
   * @summary 显示或隐藏
   * @tags 弹窗广告
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/popupAds/{id}/show_PUT": (id: number, dto: ShowDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/popupAds/${id}/show`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/provideActivity
   * @summary 分页列表
   * @tags 供养活动管理
   * @response `200` `JsonResultPagedResultProvideActivity` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/provideActivity_GET": (query: AdminProvideActivityGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/provideActivity`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultProvideActivity>,
  /**
   * No description
   * @name POST /admin/provideActivity/activitySituation
   * @summary 上传活动情况图片
   * @tags 供养活动管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/provideActivity/activitySituation_POST": (
    situationDTO: ProvideActivitySituationDTO,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/provideActivity/activitySituation`,
      method: "POST",
      data: situationDTO,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/provideActivity/audit
   * @summary 审核
   * @tags 供养活动管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/provideActivity/audit_POST": (provideActivity: ProvideActivityReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/provideActivity/audit`,
      method: "POST",
      data: provideActivity,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/provideActivity/export
   * @summary 导出参与记录
   * @tags 供养活动管理
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/provideActivity/export_GET": (query: AdminProvideActivityExportGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/provideActivity/export`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name GET /admin/provideActivity/order
   * @summary 参与记录
   * @tags 供养活动管理
   * @response `200` `JsonResultPagedResultProvideOrderVO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/provideActivity/order_GET": (query: AdminProvideActivityOrderGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/provideActivity/order`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultProvideOrderVO>,
  /**
   * No description
   * @name POST /admin/provideActivity/richText/{activityId}
   * @summary 上传活动情况文本
   * @tags 供养活动管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/provideActivity/richText/{activityId}_POST": (
    activityId: number,
    richText: RichText,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/provideActivity/richText/${activityId}`,
      method: "POST",
      data: richText,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/provideActivity/shipping
   * @summary 供养活动发货
   * @tags 供养活动管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/provideActivity/shipping_PUT": (dto: ProvideActivityShippingDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/provideActivity/shipping`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/provideActivity/state
   * @summary 启用禁用
   * @tags 供养活动管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/provideActivity/state_PUT": (dto: CommonModifyStatusInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/provideActivity/state`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/provideActivity/update
   * @summary 编辑活动
   * @tags 供养活动管理
   * @response `200` `JsonResultCreateActivityResult` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/provideActivity/update_PUT": (dto: ProvideActivityUpdateDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/provideActivity/update`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultCreateActivityResult>,
  /**
   * No description
   * @name PUT /admin/provideActivity/webActivitySituation/audit
   * @summary 活动情况图片审核
   * @tags 供养活动管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/provideActivity/webActivitySituation/audit_PUT": (
    auditStatusDto: AuditStatusDto,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/provideActivity/webActivitySituation/audit`,
      method: "PUT",
      data: auditStatusDto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/provideActivity/{id}
   * @summary 详情
   * @tags 供养活动管理
   * @response `200` `JsonResultProvideActivity` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/provideActivity/{id}_GET": (id: object, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/provideActivity/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultProvideActivity>,
  /**
   * No description
   * @name DELETE /admin/provideActivity/{id}
   * @summary 删除
   * @tags 供养活动管理
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/provideActivity/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/provideActivity/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/public/forgot
   * @summary 忘记密码
   * @tags 公开的API
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/public/forgot_POST": (dto: ForgotPasswordDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/public/forgot`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * @description 默认账号:19999999999 密码ocj123456 密码需要aes加密，获取token后放在header中{Authorization:你的token}
   * @name POST /admin/public/login
   * @summary 登录
   * @tags 公开的API
   * @response `200` `JsonResultString` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/public/login_POST": (dto: LoginDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/public/login`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name POST /admin/pushMsg/send
   * @summary 发送新活动通知
   * @tags 消息
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/pushMsg/send_POST": (dto: PushMsgDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/pushMsg/send`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/refund/agree
   * @summary 同意退款
   * @tags 售后
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/refund/agree_PUT": (param: RefundAgreeParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/refund/agree`,
      method: "PUT",
      data: param,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/refund/checkAgree
   * @summary 验货通过
   * @tags 售后
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/refund/checkAgree_PUT": (param: RefundCheckParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/refund/checkAgree`,
      method: "PUT",
      data: param,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/refund/checkRefuse
   * @summary 验货不通过
   * @tags 售后
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/refund/checkRefuse_PUT": (param: RefundRefuseParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/refund/checkRefuse`,
      method: "PUT",
      data: param,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/refund/export
   * @summary 导出
   * @tags 售后
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/refund/export_GET": (query: AdminRefundExportGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/refund/export`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name GET /admin/refund/info
   * @summary 详情
   * @tags 售后
   * @response `200` `JsonResultRefundMasterDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/refund/info_GET": (query: AdminRefundInfoGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/refund/info`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultRefundMasterDto>,
  /**
   * No description
   * @name GET /admin/refund/list
   * @summary 列表
   * @tags 售后
   * @response `200` `JsonResultPagedResultRefundMasterDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/refund/list_GET": (query: AdminRefundListGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/refund/list`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultRefundMasterDto>,
  /**
   * No description
   * @name PUT /admin/refund/refuse
   * @summary 拒绝退款
   * @tags 售后
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/refund/refuse_PUT": (param: RefundRefuseParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/refund/refuse`,
      method: "PUT",
      data: param,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/refund/shipping
   * @summary 填写退货物流
   * @tags 售后
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/refund/shipping_PUT": (param: RefundShippingParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/refund/shipping`,
      method: "PUT",
      data: param,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/richtext
   * @summary 获取富文本内容
   * @tags 富文本管理接口
   * @response `200` `JsonResultString` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/richtext_GET": (query: AdminRichtextGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/richtext`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name POST /admin/richtext
   * @summary 新增富文本
   * @tags 富文本管理接口
   * @response `200` `JsonResultLong` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/richtext_POST": (richText: RichText, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/richtext`,
      method: "POST",
      data: richText,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name PUT /admin/richtext/{id}
   * @summary 修改富文本
   * @tags 富文本管理接口
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/richtext/{id}_PUT": (id: number, richText: RichText, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/richtext/${id}`,
      method: "PUT",
      data: richText,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name DELETE /admin/richtext/{id}
   * @summary 删除富文本
   * @tags 富文本管理接口
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/richtext/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/richtext/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/scoreOrders
   * @summary 列表
   * @tags 积分订单
   * @response `200` `JsonResultPagedResultOrderVO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/scoreOrders_GET": (query: AdminScoreOrdersGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/scoreOrders`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultOrderVO>,
  /**
   * No description
   * @name GET /admin/scoreOrders/export
   * @summary 订单导出
   * @tags 积分订单
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/scoreOrders/export_GET": (query: AdminScoreOrdersExportGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/scoreOrders/export`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name GET /admin/selfPickUpSite
   * @summary 分页列表
   * @tags 自提点
   * @response `200` `JsonResultPagedResultSelfPickUpSite` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/selfPickUpSite_GET": (query: AdminSelfPickUpSiteGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/selfPickUpSite`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultSelfPickUpSite>,
  /**
   * No description
   * @name POST /admin/selfPickUpSite
   * @summary 添加
   * @tags 自提点
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/selfPickUpSite_POST": (selfPickUpSite: SelfPickUpSiteReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/selfPickUpSite`,
      method: "POST",
      data: selfPickUpSite,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/selfPickUpSite
   * @summary 编辑
   * @tags 自提点
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/selfPickUpSite_PUT": (selfPickUpSite: SelfPickUpSiteReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/selfPickUpSite`,
      method: "PUT",
      data: selfPickUpSite,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/selfPickUpSite/state
   * @summary 启用禁用
   * @tags 自提点
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/selfPickUpSite/state_PUT": (dto: CommonModifyStatusInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/selfPickUpSite/state`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/selfPickUpSite/{id}
   * @summary 详情
   * @tags 自提点
   * @response `200` `JsonResultSelfPickUpSite` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/selfPickUpSite/{id}_GET": (id: object, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/selfPickUpSite/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultSelfPickUpSite>,
  /**
   * No description
   * @name DELETE /admin/selfPickUpSite/{id}
   * @summary 删除
   * @tags 自提点
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/selfPickUpSite/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/selfPickUpSite/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/shipping/erp/shipping
   * @summary erp订单发货
   * @tags 发货管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/shipping/erp/shipping_POST": (param: ShipInfoParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/shipping/erp/shipping`,
      method: "POST",
      data: param,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/shipping/erpSync
   * @summary createErpShipping
   * @tags 发货管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/shipping/erpSync_POST": (query: AdminShippingErpSyncPostParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/shipping/erpSync`,
      method: "POST",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/shipping/notify
   * @summary erp发货通知
   * @tags 发货管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/shipping/notify_POST": (erpShippingParam: ErpShippingParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/shipping/notify`,
      method: "POST",
      data: erpShippingParam,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/shipping/shipping
   * @summary 订单发货
   * @tags 发货管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/shipping/shipping_POST": (param: ShipInfoParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/shipping/shipping`,
      method: "POST",
      data: param,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/shipping/shipping/batch
   * @summary 订单批量发货
   * @tags 发货管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/shipping/shipping/batch_POST": (param: BatchShipInfoParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/shipping/shipping/batch`,
      method: "POST",
      data: param,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/shipping/updateShipping
   * @summary 订单物流修改
   * @tags 发货管理
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/shipping/updateShipping_PUT": (param: ShipInfoParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/shipping/updateShipping`,
      method: "PUT",
      data: param,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/userAgreement/userAgreeRecord
   * @summary 用户同意记录 列表
   * @tags 用户协议
   * @response `200` `JsonResultPagedResultUserAgreeRecordDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/userAgreement/userAgreeRecord_GET": (
    query: AdminUserAgreementUserAgreeRecordGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/userAgreement/userAgreeRecord`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultUserAgreeRecordDto>,
  /**
   * No description
   * @name GET /admin/userAgreement/userAgreementRecord
   * @summary 用户协议记录 列表
   * @tags 用户协议
   * @response `200` `JsonResultPagedResultUserAgreementRecordDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/userAgreement/userAgreementRecord_GET": (
    query: AdminUserAgreementUserAgreementRecordGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/userAgreement/userAgreementRecord`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultUserAgreementRecordDto>,
  /**
   * No description
   * @name GET /admin/userAgreement/userAgreementRecord/{id}
   * @summary 用户协议记录 详情
   * @tags 用户协议
   * @response `200` `JsonResultUserAgreementRecordDto` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/userAgreement/userAgreementRecord/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/userAgreement/userAgreementRecord/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultUserAgreementRecordDto>,
  /**
   * No description
   * @name DELETE /admin/v1/console/buyerGrade/del/{id}
   * @summary 逻辑删除
   * @tags 订货商等级管理
   * @response `200` `JsonResultObject` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/v1/console/buyerGrade/del/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/v1/console/buyerGrade/del/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name GET /admin/v1/console/buyerGrade/page
   * @summary 分页查询
   * @tags 订货商等级管理
   * @response `200` `JsonResultPageInfoBuyerGradeListResponseDTO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/v1/console/buyerGrade/page_GET": (
    query: AdminV1ConsoleBuyerGradePageGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/v1/console/buyerGrade/page`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPageInfoBuyerGradeListResponseDTO>,
  /**
   * No description
   * @name POST /admin/v1/console/buyerGrade/save
   * @summary 保存对象
   * @tags 订货商等级管理
   * @response `200` `JsonResultObject` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/v1/console/buyerGrade/save_POST": (dto: BuyerGradeSaveRequestDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/v1/console/buyerGrade/save`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name PUT /admin/v1/console/buyerGrade/update
   * @summary 修改对象
   * @tags 订货商等级管理
   * @response `200` `JsonResultObject` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/v1/console/buyerGrade/update_PUT": (dto: BuyerGradeUpdateRequestDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/v1/console/buyerGrade/update`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name GET /admin/v1/console/buyerManage/v1/console/{id}
   * @summary 根据等级ID查询详情
   * @tags 订货商等级管理
   * @response `200` `JsonResultBuyerGradeResponseDTO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/v1/console/buyerManage/v1/console/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/v1/console/buyerManage/v1/console/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultBuyerGradeResponseDTO>,
  /**
   * No description
   * @name DELETE /admin/v1/console/memLabel/del/{id}
   * @summary 逻辑删除
   * @tags 会员标签
   * @response `200` `JsonResultObject` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/v1/console/memLabel/del/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/v1/console/memLabel/del/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name GET /admin/v1/console/memLabel/page
   * @summary 分页查询
   * @tags 会员标签
   * @response `200` `JsonResultPageInfoMemLabelResponseDTO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/v1/console/memLabel/page_GET": (query: AdminV1ConsoleMemLabelPageGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/v1/console/memLabel/page`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPageInfoMemLabelResponseDTO>,
  /**
   * No description
   * @name POST /admin/v1/console/memLabel/save
   * @summary 保存对象
   * @tags 会员标签
   * @response `200` `JsonResultObject` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/v1/console/memLabel/save_POST": (dto: MemLabelSaveRequestDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/v1/console/memLabel/save`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name PUT /admin/v1/console/memLabel/update
   * @summary 修改对象
   * @tags 会员标签
   * @response `200` `JsonResultObject` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/v1/console/memLabel/update_PUT": (dto: MemLabelUpdateRequestDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/v1/console/memLabel/update`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name GET /admin/v1/console/memLabel/{id}
   * @summary 详细信息
   * @tags 会员标签
   * @response `200` `JsonResultMemLabelResponseDTO` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/v1/console/memLabel/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/v1/console/memLabel/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultMemLabelResponseDTO>,
  /**
   * No description
   * @name GET /admin/verification
   * @summary 分页列表
   * @tags 核销员
   * @response `200` `JsonResultPagedResultVerification` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/verification_GET": (query: AdminVerificationGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/verification`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultVerification>,
  /**
   * No description
   * @name POST /admin/verification/batchRemove
   * @summary 批量删除
   * @tags 核销员
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/verification/batchRemove_POST": (dto: VerificationDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/verification/batchRemove`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/verification/import
   * @summary 导入
   * @tags 核销员
   * @response `200` `JsonResultExcelImportResultDto` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/verification/import_POST": (file: any, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/verification/import`,
      method: "POST",
      data: file,
      ...options
    }) as unknown as Promise<JsonResultExcelImportResultDto>,
  /**
   * No description
   * @name PUT /admin/verification/state
   * @summary 启用禁用
   * @tags 核销员
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/verification/state_PUT": (dto: CommonModifyStatusInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/verification/state`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/verification/template
   * @summary 下载模板
   * @tags 核销员
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/verification/template_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/verification/template`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name DELETE /admin/verification/{id}
   * @summary 删除
   * @tags 核销员
   * @response `200` `JsonResultVoid` OK |  `204` `void` No Content |  `401` `void` Unauthorized |  `403` `void` Forbidden
   */
  "/admin/verification/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/verification/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/virtualCoin/adjust
   * @summary 调整如是心
   * @tags 如是心
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/virtualCoin/adjust_POST": (dto: VirtualCoinAdjustInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/virtualCoin/adjust`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/virtualCoin/get/{userId}
   * @summary 如是心汇总信息
   * @tags 如是心
   * @response `200` `JsonResultVirtualCoin` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/virtualCoin/get/{userId}_GET": (userId: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/virtualCoin/get/${userId}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultVirtualCoin>,
  /**
   * No description
   * @name GET /admin/virtualCoinFlow
   * @summary 分页列表
   * @tags 如是心流水
   * @response `200` `JsonResultPagedResultVirtualCoinFlow` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/virtualCoinFlow_GET": (query: AdminVirtualCoinFlowGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/virtualCoinFlow`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultVirtualCoinFlow>,
  /**
   * No description
   * @name GET /admin/virtualCoinFlow/all/exports
   * @summary 财务管理-如是心明细导出
   * @tags 如是心流水
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/virtualCoinFlow/all/exports_GET": (
    query: AdminVirtualCoinFlowAllExportsGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/virtualCoinFlow/all/exports`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name GET /admin/virtualCoinFlow/exports
   * @summary 个人中心-如是心明细导出
   * @tags 如是心流水
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/virtualCoinFlow/exports_GET": (query: AdminVirtualCoinFlowExportsGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/virtualCoinFlow/exports`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name POST /admin/weimob/push
   * @summary syncData
   * @tags weimob-controller
   * @response `200` `JsonResult` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/weimob/push_POST": (jsonObject: Record<string, object>, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/weimob/push`,
      method: "POST",
      data: jsonObject,
      ...options
    }) as unknown as Promise<JsonResult>,
  /**
   * No description
   * @name POST /admin/weimob/sync/member
   * @summary selectWmUserInsertRsxMember
   * @tags weimob-controller
   * @response `200` `void` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/weimob/sync/member_POST": (jsonObject: Record<string, object>, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/weimob/sync/member`,
      method: "POST",
      data: jsonObject,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name GET /admin/withdrawRecord
   * @summary 分页列表
   * @tags 提现记录
   * @response `200` `JsonResultPagedResultWithdrawRecord` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/withdrawRecord_GET": (query: AdminWithdrawRecordGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/withdrawRecord`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultWithdrawRecord>,
  /**
   * No description
   * @name PUT /admin/withdrawRecord/audit
   * @summary 审核
   * @tags 提现记录
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/withdrawRecord/audit_PUT": (dto: WithdrawRecordAuditDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/withdrawRecord/audit`,
      method: "PUT",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/withdrawRecord/batchAudit
   * @summary 批量审核
   * @tags 提现记录
   * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/withdrawRecord/batchAudit_PUT": (dtoList: WithdrawRecordAuditDto[], options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/withdrawRecord/batchAudit`,
      method: "PUT",
      data: dtoList,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/withdrawRecord/export
   * @summary 提现记录导出
   * @tags 提现记录
   * @response `200` `void` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/withdrawRecord/export_GET": (query: AdminWithdrawRecordExportGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/withdrawRecord/export`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<void>,
  /**
   * No description
   * @name POST /admin/withdrawRecord/notify
   * @summary 发放结果推送
   * @tags 提现记录
   * @response `200` `string` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/withdrawRecord/notify_POST": (query: AdminWithdrawRecordNotifyPostParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/withdrawRecord/notify`,
      method: "POST",
      params: query,
      ...options
    }) as unknown as Promise<string>,
  /**
   * No description
   * @name GET /admin/withdrawRecord/{id}
   * @summary 详情
   * @tags 提现记录
   * @response `200` `JsonResultWithdrawRecord` OK |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
   */
  "/admin/withdrawRecord/{id}_GET": (id: object, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/withdrawRecord/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultWithdrawRecord>,
  /**
 * No description
 * @name POST /admin/api/member/changeMobile
 * @summary 修改会员手机号码
 * @tags 公开的API
 * @response `200` `JsonResultVoid` OK |  `201` `void` Created |  `401` `void` Unauthorized |  `403` `void` Forbidden |  `404` `void` Not Found
 */
  "/admin/api/member/changeMobile_POST": (dto: AdminMemberMobilePostParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/member/changeMobile`,
      method: "POST",
      data: dto,
      ...options
    }) as unknown as Promise<JsonResultVoid>,

  /**
* No description
* @name GET /admin/changeRecord
* @summary 获取会员手机号修改记录
* @tags 
* @response `200` `JsonResultPagedResultBalanceFlowOutputDto` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
*/
  "/admin/changeRecord_GET": (
    { ...query }: AdminMemberMobileChangeLogGetParams,
    options: RequestConfig = {}
  ) => {
    return requestInstance({
      url: `/admin/changeRecord`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMobileChangeLogDto>
  }
};
