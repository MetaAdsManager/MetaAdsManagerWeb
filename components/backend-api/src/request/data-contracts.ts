/* eslint-disable object-shorthand */
/* eslint-disable max-lines */
/* eslint-disable id-length */
export interface HotelUserInputDto {
  /** @format int64 */
  hid?: number;

  /** 系统用户id */
  sysUserId?: number[];
}

export interface HotelUser {
  createUser?: string;

  /** 是否删除 0 正常 1 删除 */
  deleted?: boolean;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /**
   * 酒店id
   * @format int64
   */
  hid?: number;

  /** @format int64 */
  id?: number;
  modified?: boolean;
  modifyUser?: string;

  /** @format int32 */
  status?: number;

  /**
   * 系统用户id
   * @format int64
   */
  sysUserId?: number;
  transient?: boolean;

  /** 管理用户 */
  username?: string;
}

export interface HotelRoomRes {
  /** 面积 */
  area?: string;
  createUser?: string;

  /** 是否删除 0 正常 1 删除 */
  deleted?: boolean;

  /** 详情 */
  detail?: string;

  /**
   * 可预订房间数
   * @format int32
   */
  emptyRooms?: number;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /**
   * 酒店id
   * @format int64
   */
  hid?: number;

  /** @format int64 */
  id?: number;

  /** 房型图 */
  img?: string;
  modified?: boolean;
  modifyUser?: string;

  /** 房型名称 */
  name?: string;

  /**
   * 最多可订房间数
   * @format int32
   */
  reserveRoomLimit?: number;

  /**
   * 外部系统房型id
   * @format int32
   */
  roomTypeId?: number;

  /**
   * 房间总数
   * @format int32
   */
  rooms?: number;

  /** 预订押金 */
  securityDeposit?: number;

  /** 是否上架 0 否 1 是 */
  shelved?: boolean;

  /**
   * 上架时间
   * @format date-time
   */
  shelvedDate?: string;

  /**
   * 排序值
   * @format int32
   */
  sort?: number;

  /** @format int32 */
  status?: number;

  /** 配套服务 */
  supportingService?: string;
  transient?: boolean;

  /**
   * 入住人数
   * @format int32
   */
  userCounts?: number;
}

export interface HotelRoomReq {
  /** 面积 */
  area?: string;
  createUser?: string;

  /** 是否删除 0 正常 1 删除 */
  deleted?: boolean;

  /** 详情 */
  detail?: string;

  /**
   * 可预订房间数
   * @format int32
   */
  emptyRooms?: number;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /**
   * 酒店id
   * @format int64
   */
  hid?: number;

  /** @format int64 */
  id?: number;

  /** 房型图 */
  img?: string;
  modifyUser?: string;

  /** 房型名称 */
  name?: string;

  /**
   * 最多可订房间数
   * @format int32
   */
  reserveRoomLimit?: number;

  /**
   * 外部系统房型id
   * @format int32
   */
  roomTypeId?: number;

  /**
   * 房间总数
   * @format int32
   */
  rooms?: number;

  /** 预订押金 */
  securityDeposit?: number;

  /** 是否上架 0 否 1 是 */
  shelved?: boolean;

  /**
   * 上架时间
   * @format date-time
   */
  shelvedDate?: string;

  /**
   * 排序值
   * @format int32
   */
  sort?: number;

  /** @format int32 */
  status?: number;

  /** 配套服务 */
  supportingService?: string;

  /**
   * 入住人数
   * @format int32
   */
  userCounts?: number;
}

export interface HotelRes {
  /** 市 */
  city?: string;

  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  createUser?: string;

  /** 是否删除 0 正常 1 删除 */
  deleted?: boolean;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /**
   * 外部系统酒店id
   * @format int32
   */
  hotelId?: number;

  /** @format int64 */
  id?: number;

  /** 酒店图片 */
  img?: string;
  modified?: boolean;
  modifyUser?: string;

  /** 酒店名称 */
  name?: string;

  /**
   * 房型数量
   * @format int32
   */
  roomTypeNums?: number;

  /** 预订押金（元） */
  securityDeposit?: number;

  /** 是否上架 0 否 1 是 */
  shelved?: boolean;

  /**
   * 上架时间
   * @format date-time
   */
  shelvedDate?: string;

  /**
   * 排序值
   * @format int32
   */
  sort?: number;

  /** @format int32 */
  status?: number;
  transient?: boolean;

  /** 酒店视频 */
  video?: string;
}

export interface HotelReq {
  /** 市 */
  city?: string;

  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  createUser?: string;

  /** 是否删除 0 正常 1 删除 */
  deleted?: boolean;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /**
   * 外部系统酒店id
   * @format int32
   */
  hotelId?: number;

  /** @format int64 */
  id?: number;

  /** 酒店图片 */
  img?: string;
  modifyUser?: string;

  /** 酒店名称 */
  name?: string;

  /**
   * 房型数量
   * @format int32
   */
  roomTypeNums?: number;

  /** 预订押金（元） */
  securityDeposit?: number;

  /** 是否上架 0 否 1 是 */
  shelved?: boolean;

  /**
   * 上架时间
   * @format date-time
   */
  shelvedDate?: string;

  /**
   * 排序值
   * @format int32
   */
  sort?: number;

  /** @format int32 */
  status?: number;

  /** 酒店视频 */
  video?: string;
}

export interface HotelOrderRefundAuditDto {
  /** 审核原因 */
  checkMsg?: string;

  /**
   * 审核状态 0：待审核，1：已通过，2：已拒绝
   * @format int32
   */
  checkState?: number;

  /**
   * 售后id
   * @format int64
   */
  id?: number;
}

export interface HotelOrderItem {
  createUser?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 住客身份证号 */
  idcard?: string;
  modified?: boolean;
  modifyUser?: string;

  /**
   * 订单id
   * @format int64
   */
  orderId?: number;

  /** 订单编号 */
  orderNo?: string;

  /** 房间号 */
  roomNo?: string;

  /** @format int32 */
  status?: number;
  transient?: boolean;

  /** 住客手机号 */
  userMobile?: string;

  /** 住客姓名 */
  userName?: string;
}

export interface HotelBlacklistRes {
  createUser?: string;
  deleted?: boolean;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 身份证号 */
  idcard?: string;
  modified?: boolean;
  modifyUser?: string;

  /** @format int32 */
  status?: number;
  transient?: boolean;
}

export interface HotelBlacklistReq {
  createUser?: string;
  deleted?: boolean;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 身份证号 */
  idcard?: string;
  modifyUser?: string;

  /** @format int32 */
  status?: number;
}

export interface HotelBannerRes {
  createUser?: string;

  /** 是否删除 0 正常 1 删除 */
  deleted?: boolean;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 图片/视频链接 */
  img?: string;
  modified?: boolean;
  modifyUser?: string;

  /** 名称 */
  name?: string;

  /** @format int32 */
  status?: number;
  transient?: boolean;

  /**
   * 类型 0：图片，1：视频
   * @format int32
   */
  type?: number;

  /** 外链地址 */
  url?: string;
}

export interface HotelBannerReq {
  createUser?: string;

  /** 是否删除 0 正常 1 删除 */
  deleted?: boolean;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 图片/视频链接 */
  img?: string;
  modifyUser?: string;

  /** 名称 */
  name?: string;

  /** @format int32 */
  status?: number;

  /**
   * 类型 0：图片，1：视频
   * @format int32
   */
  type?: number;

  /** 外链地址 */
  url?: string;
}

export interface ExcelImportResultDto {
  /** 错误原因集合 */
  failMsgList?: string[];

  /** 是否导入成功 */
  success?: boolean;
}

export interface CommonModifyStatusInputDto {
  /**
   * 编号
   * @format int64
   */
  id?: number;

  /** 显示状态 1显示0不显示 */
  status: boolean;
}

export interface HotelRoom {
  /** 面积 */
  area?: string;
  createUser?: string;

  /** 是否删除 0 正常 1 删除 */
  deleted?: boolean;

  /** 详情 */
  detail?: string;

  /**
   * 可预订房间数
   * @format int32
   */
  emptyRooms?: number;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /**
   * 酒店id
   * @format int64
   */
  hid?: number;

  /** @format int64 */
  id?: number;

  /** 房型图 */
  img?: string;
  modified?: boolean;
  modifyUser?: string;

  /** 房型名称 */
  name?: string;

  /**
   * 最多可订房间数
   * @format int32
   */
  reserveRoomLimit?: number;

  /**
   * 外部系统房型id
   * @format int32
   */
  roomTypeId?: number;

  /**
   * 房间总数
   * @format int32
   */
  rooms?: number;

  /** 预订押金 */
  securityDeposit?: number;

  /** 是否上架 0 否 1 是 */
  shelved?: boolean;

  /**
   * 上架时间
   * @format date-time
   */
  shelvedDate?: string;

  /**
   * 排序值
   * @format int32
   */
  sort?: number;

  /** @format int32 */
  status?: number;

  /** 配套服务 */
  supportingService?: string;
  transient?: boolean;

  /**
   * 入住人数
   * @format int32
   */
  userCounts?: number;
}

export interface HotelRefundOrderDto {
  /**
   * 订单id
   * @format int64
   */
  orderId?: number;

  /** 售后说明 */
  refundDesc?: string;

  /** 售后原因 */
  refundReason?: string;
}

export interface HotelOrderRefund {
  /** 面积 */
  area?: string;

  /** 审核人 */
  auditName?: string;

  /**
   * 审核时间
   * @format date-time
   */
  auditTime?: string;

  /** 审核原因 */
  checkMsg?: string;

  /**
   * 审核状态 0：待审核，1：已通过，2：已拒绝
   * @format int32
   */
  checkState?: number;
  createUser?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endDate?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  hid?: number;

  /** 酒店名称 */
  hotelName?: string;

  /** @format int64 */
  id?: number;
  modified?: boolean;
  modifyUser?: string;

  /** 订单金额 */
  orderAmount?: number;

  /**
   * 订单id
   * @format int64
   */
  orderId?: number;

  /** 订单编号 */
  orderNo?: string;

  /** 退款金额 */
  refundAmount?: number;

  /** 售后说明 */
  refundDesc?: string;

  /** 售后编号 */
  refundNo?: string;

  /** 售后原因 */
  refundReason?: string;

  /** 房型图 */
  roomImg?: string;

  /** 房型名称 */
  roomName?: string;

  /**
   * 房间数
   * @format int32
   */
  roomNum?: number;

  /**
   * 开始时间
   * @format date-time
   */
  startDate?: string;

  /** @format int32 */
  status?: number;

  /**
   * 入住天数
   * @format int32
   */
  stayDays?: number;

  /** 配套服务 */
  supportingService?: string;
  transient?: boolean;

  /**
   * 入住人数
   * @format int32
   */
  userCounts?: number;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;

  /** 会员手机号 */
  userMobile?: string;

  /** 会员姓名 */
  userName?: string;
}

export interface HotelOrderItemRes {
  createUser?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 住客身份证号 */
  idcard?: string;
  modified?: boolean;
  modifyUser?: string;

  /**
   * 订单id
   * @format int64
   */
  orderId?: number;

  /** 订单编号 */
  orderNo?: string;

  /** 房间号 */
  roomNo?: string;

  /** @format int32 */
  status?: number;
  transient?: boolean;

  /** 住客手机号 */
  userMobile?: string;

  /** 住客姓名 */
  userName?: string;
}

export interface HotelOrderItemReq {
  createUser?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 住客身份证号 */
  idcard?: string;
  modifyUser?: string;

  /**
   * 订单id
   * @format int64
   */
  orderId?: number;

  /** 订单编号 */
  orderNo?: string;

  /** 房间号 */
  roomNo?: string;

  /** @format int32 */
  status?: number;

  /** 住客手机号 */
  userMobile?: string;

  /** 住客姓名 */
  userName?: string;
}

export interface HotelOrderDto {
  /**
   * 离店时间
   * @format date-time
   */
  endDate?: string;

  /** 酒店订单人员列表 */
  hotelOrderItemList?: HotelOrderItemReq[];

  /**
   * 酒店房型id
   * @format int64
   */
  hotelRoomId?: number;

  /**
   * 支付类型: 1微信支付 2支付宝支付
   * @format int32
   */
  payType?: number;

  /**
   * 房间数
   * @format int32
   */
  roomNum?: number;

  /**
   * 入住时间
   * @format date-time
   */
  startDate?: string;

  /**
   * 入住天数
   * @format int32
   */
  stayDays?: number;
}

export interface HotelOrder {
  /** 面积 */
  area?: string;

  /**
   * 关闭时间
   * @format date-time
   */
  closeAt?: string;

  /**
   * 关闭原因 0：用户主动取消 1：用户未入住 2：订单支付超时 3：售后关闭 4：后台关闭
   * @format int32
   */
  closeType?: number;
  createUser?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endDate?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /**
   * 酒店id
   * @format int64
   */
  hid?: number;

  /**
   * 外部系统酒店id
   * @format int32
   */
  hotelId?: number;

  /** 酒店名称 */
  hotelName?: string;
  hotelOrderItemList?: HotelOrderItem[];

  /** @format int64 */
  id?: number;

  /** 会员编号 */
  memberNo?: string;
  modified?: boolean;
  modifyUser?: string;

  /** 订单金额 */
  orderAmount?: number;

  /** 订单编号 */
  orderNo?: string;

  /**
   * 订单状态 0：待付款 1：待使用 2：已使用 3：已关闭
   * @format int32
   */
  orderStatus?: number;

  /**
   * 外部订单id
   * @format int32
   */
  outOrderId?: number;

  /** 应支付金额 */
  payAmount?: number;

  /**
   * 支付时间
   * @format date-time
   */
  payAt?: string;

  /**
   * 支付结束时间
   * @format date-time
   */
  payEndAt?: string;

  /**
   * 支付状态：0未支付 1支付成功 -1支付失败
   * @format int32
   */
  payStatus?: number;

  /**
   * 支付类型: 1微信支付 2支付宝支付 3线下支付 4余额
   * @format int32
   */
  payType?: number;

  /**
   * 售后单id
   * @format int64
   */
  refundId?: number;

  /**
   * 售后状态 0无售后 1有售后 2售后拒绝
   * @format int32
   */
  refundStatus?: number;

  /** 房型图 */
  roomImg?: string;

  /** 房型名称 */
  roomName?: string;

  /**
   * 房间数
   * @format int32
   */
  roomNum?: number;

  /**
   * 外部系统房型id
   * @format int32
   */
  roomTypeId?: number;

  /**
   * 开始时间
   * @format date-time
   */
  startDate?: string;

  /** @format int32 */
  status?: number;

  /**
   * 入住天数
   * @format int32
   */
  stayDays?: number;

  /** 配套服务 */
  supportingService?: string;

  /** 支付交易流水号 */
  transactionId?: string;
  transient?: boolean;

  /**
   * 使用时间
   * @format date-time
   */
  useAt?: string;

  /**
   * 入住人数
   * @format int32
   */
  userCounts?: number;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;

  /** 会员手机号 */
  userMobile?: string;

  /** 会员姓名 */
  userName?: string;

  /** 核销码 */
  verificationCode?: string;
}

export interface HotelBanner {
  createUser?: string;

  /** 是否删除 0 正常 1 删除 */
  deleted?: boolean;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 图片/视频链接 */
  img?: string;
  modified?: boolean;
  modifyUser?: string;

  /** 名称 */
  name?: string;

  /** @format int32 */
  status?: number;
  transient?: boolean;

  /**
   * 类型 0：图片，1：视频
   * @format int32
   */
  type?: number;

  /** 外链地址 */
  url?: string;
}

export interface Hotel {
  /** 市 */
  city?: string;

  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  createUser?: string;

  /** 是否删除 0 正常 1 删除 */
  deleted?: boolean;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /**
   * 外部系统酒店id
   * @format int32
   */
  hotelId?: number;

  /** @format int64 */
  id?: number;

  /** 酒店图片 */
  img?: string;
  modified?: boolean;
  modifyUser?: string;

  /** 酒店名称 */
  name?: string;

  /**
   * 房型数量
   * @format int32
   */
  roomTypeNums?: number;

  /** 预订押金（元） */
  securityDeposit?: number;

  /** 是否上架 0 否 1 是 */
  shelved?: boolean;

  /**
   * 上架时间
   * @format date-time
   */
  shelvedDate?: string;

  /**
   * 排序值
   * @format int32
   */
  sort?: number;

  /** @format int32 */
  status?: number;
  transient?: boolean;

  /** 酒店视频 */
  video?: string;
}

export interface CityDto {
  /** 城市 */
  city?: string;

  /**
   * 城市id
   * @format int32
   */
  cityId?: number;
}

export interface JmkCommonRequest {
  client_id?: string;
  id?: string;
  msg?: string;
  sign?: string;

  /** @format int64 */
  sjid?: number;
  type?: string;
  version?: string;
}

export interface MarketingActivityGroupRecordsItemSimpleVo {
  /**
   * 个人参团状态 1 未加入(待支付) 2 已加入 3 取消
   * @format int32
   */
  joinStatus?: number;

  /**
   * 用户ID
   * @format int64
   */
  memberId?: number;
}

export interface PostsAwardDTO {
  /** @format int64 */
  postsId?: number;

  /** @format int64 */
  userId?: number;
}

export interface MemberQuery {
  /** 可用积分 正序 asc 倒叙 desc */
  availableScoreSort?: string;

  /** 账户余额排序 正序 asc 倒叙 desc */
  balanceSort?: string;

  /** 可用余额开始 */
  beginBalanceAmount?: number;

  /** 累计消费金额开始 */
  beginConsumeAmount?: number;

  /** 可用积分开始 */
  beginScoreAmount?: number;

  /**
   * 注册开始时间开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 累计金额排序 正序 asc 倒叙 desc */
  consumeAmountSort?: string;

  /** 注册时间排序 正序 asc 倒叙 desc */
  createTimeSort?: string;

  /** 可用余额结束 */
  endBalanceAmount?: number;

  /** 累计消费金额结束 */
  endConsumeAmount?: number;

  /** 可用积分结束 */
  endScoreAmount?: number;

  /**
   * 注册结束时间
   * @format date-time
   */
  endTime?: string;

  /**
   * 主键
   * @format int64
   */
  id?: number;
  idInList?: number[];
  idNotInList?: number[];

  /**
   * 身份 0 游客  2 会员
   * @format int32
   */
  memberType?: number;

  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;

  /** 用户名称/手机号/id */
  searchString?: string;

  /**
   * 状态 1：正常 0：禁用
   * @format int32
   */
  status?: number;

  /**
   * 所属上级
   * @format int32
   */
  superiorUserId?: number;
}

export interface MemBaseInfo {
  address?: string;
  appId?: string;
  area?: string;

  /** @format date-time */
  birthday?: string;

  /** @format int32 */
  buyerStatus?: number;
  city?: string;
  country?: string;
  createUser?: string;
  deleted?: boolean;
  gender?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;
  headImg?: string;

  /** @format int64 */
  id?: number;
  label?: string;
  memberNo?: string;
  mobile?: string;
  modified?: boolean;
  modifyUser?: string;
  nickName?: string;
  openId?: string;
  password?: string;
  policies?: string;
  province?: string;
  realName?: string;

  /** @format int64 */
  recommendUserId?: number;

  /** @format int32 */
  role?: number;

  /** @format int32 */
  status?: number;

  /** @format int64 */
  superiorUserId?: number;
  transient?: boolean;
  unionId?: string;
}

export interface ReCommentsDTO {
  /** 是否匿名 0 否 1 是 */
  anonym?: boolean;

  /**
   * 评价ID
   * @format int64
   */
  commentsId?: number;

  /** 评价内容 */
  content?: string;

  /**
   * 商品评分 1~5
   * @format int32
   */
  goodsGrade?: number;

  /** 评价图片，逗号分隔 */
  imgs?: string;

  /**
   * 物流评分 1~5
   * @format int32
   */
  logisticsGrade?: number;

  /**
   * 服务评分 1~5
   * @format int32
   */
  serviceGrade?: number;
}

export type SyncDataUsingPOSTJsonobject = Record<string, object>;

export type PurchaseMemberCardNotifyUsingPOSTXmldata = string;

export interface MarketingActivityGroupRecordsItemDto {
  /** 是否是队长 0 否 1 是 */
  captain?: boolean;

  /**
   * 拼团记录ID
   * @format int64
   */
  groupRecordId?: number;

  /**
   * 个人参团状态 1 未加入(待支付) 2 已加入 3 取消
   * @format int32
   */
  joinStatus?: number;

  /** 用户头像 */
  memberHeadImg?: string;

  /**
   * 用户ID
   * @format int64
   */
  memberId?: number;

  /** 用户名称 */
  memberNickname?: string;

  /** 订单编号 */
  orderNo?: string;

  /** 订单价格 */
  paymentAmount?: number;

  /** 价格 */
  price?: number;

  /**
   * 数量
   * @format int32
   */
  quantity?: number;

  /** sku图片 */
  skuImg?: string;

  /** sku名称 */
  skuName?: string;

  /** sku编号 */
  skuNo?: string;

  /** 是否虚拟参团 0 否 1 是 */
  virtualGroup?: boolean;
}

export interface MarketingActivityOfGroupWebListVo {
  /** 活动名称 */
  activityName?: string;

  /** 活动编号 */
  activityNo?: string;

  /** 活动规则 */
  content?: string;

  /** 封面图 */
  coverImg?: string;

  /** 活动描述 */
  description?: string;

  /**
   * 活动结束时间
   * @format date-time
   */
  endTime?: string;

  /**
   * 团购人数
   * @format int32
   */
  groupBuyingNum?: number;

  /** @format int64 */
  id?: number;

  /** 活动商品列表 */
  marketingActivityGoodsParams?: MarketingActivityGoodsVoOfGroup[];

  /**
   * 商户ID
   * @format int64
   */
  merchantId?: number;

  /**
   * 活动开始时间
   * @format date-time
   */
  startTime?: string;
}

export interface MarketingActivityGroupRecordsWebListVo {
  /**
   * 活动Id
   * @format int64
   */
  activityId?: number;

  /** 活动编号 */
  activityNo?: string;

  /** 团长头像 */
  captainMemberHeadImg?: string;

  /**
   * 团长用户ID
   * @format int64
   */
  captainMemberId?: number;

  /** 团长名称 */
  captainMemberNickname?: string;

  /** 封面图片 */
  coverImg?: string;

  /**
   * 当前入团的真实人数
   * @format int32
   */
  currentUserNumber?: number;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;

  /**
   * 本团结束时间
   * @format date-time
   */
  groupEndDate?: string;

  /**
   * 成团人数
   * @format int32
   */
  groupNumber?: number;
  groupRecordsItems?: MarketingActivityGroupRecordsItemSimpleVo[];

  /**
   * 拼团状态:  0: 队长开团中（待支付） 1: 拼团中 2: 拼团成功 3: 拼团失败
   * @format int32
   */
  groupStatus?: number;

  /**
   * 拼团记录ID
   * @format int64
   */
  id?: number;

  /**
   * 当前生成团的虚拟人数
   * @format int32
   */
  virtualUserNumber?: number;
}

export interface MarketingActivityGroupRecordsWebListAndNumVo {
  /**
   * 拼团人数
   * @format int32
   */
  joinNumber?: number;
  records?: PagedScrollResultMarketingActivityGroupRecordsWebListVo;
}

export interface MarketingActivityGroupRecordsWebInfoVo {
  /**
   * 活动Id
   * @format int64
   */
  activityId?: number;

  /** 活动编号 */
  activityNo?: string;

  /** 团长头像 */
  captainMemberHeadImg?: string;

  /**
   * 团长用户ID
   * @format int64
   */
  captainMemberId?: number;

  /** 团长名称 */
  captainMemberNickname?: string;

  /** 封面图片 */
  coverImg?: string;

  /**
   * 当前入团的真实人数
   * @format int32
   */
  currentUserNumber?: number;

  /** 活动描述 */
  description?: string;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;
  goodsVO?: GoodsVO;

  /**
   * 本团结束时间
   * @format date-time
   */
  groupEndDate?: string;

  /**
   * 成团人数
   * @format int32
   */
  groupNumber?: number;
  groupRecordsItems?: MarketingActivityGroupRecordsItemSimpleVo[];

  /**
   * 拼团状态:  0: 队长开团中（待支付） 1: 拼团中 2: 拼团成功 3: 拼团失败
   * @format int32
   */
  groupStatus?: number;

  /**
   * 拼团记录ID
   * @format int64
   */
  id?: number;

  /** 拼团成员 */
  memberList?: MarketingActivityGroupRecordsMemberVo[];

  /** 价格（拼团价） */
  price?: number;

  /**
   * 当前生成团的虚拟人数
   * @format int32
   */
  virtualUserNumber?: number;
}

export interface MarketingActivityGroupRecordsMemberVo {
  /** 是否是队长 0 否 1 是 */
  captain?: boolean;

  /**
   * 个人参团状态 1 未加入(待支付) 2 已加入 3 取消 4 已成团 5 拼团失败
   * @format int32
   */
  joinStatus?: number;

  /** 用户头像 */
  memberHeadImg?: string;

  /**
   * 用户ID
   * @format int64
   */
  memberId?: number;

  /** 用户名称 */
  memberNickname?: string;

  /** 订单编号 */
  orderNo?: string;
}

export interface MarketingActivityGroupRecordsItemWebInfoVo {
  /**
   * 活动Id
   * @format int64
   */
  activityId?: number;

  /** 活动编号 */
  activityNo?: string;

  /** 团长头像 */
  captainMemberHeadImg?: string;

  /**
   * 团长用户ID
   * @format int64
   */
  captainMemberId?: number;

  /** 团长名称 */
  captainMemberNickname?: string;

  /** 封面图片 */
  coverImg?: string;

  /**
   * 当前入团的真实人数
   * @format int32
   */
  currentUserNumber?: number;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;

  /**
   * 本团结束时间
   * @format date-time
   */
  groupEndDate?: string;

  /**
   * 成团人数
   * @format int32
   */
  groupNumber?: number;
  groupRecordsItems?: MarketingActivityGroupRecordsItemSimpleVo[];

  /**
   * 拼团状态:  0: 队长开团中（待支付） 1: 拼团中 2: 拼团成功 3: 拼团失败
   * @format int32
   */
  groupStatus?: number;

  /**
   * 拼团记录ID
   * @format int64
   */
  id?: number;

  /**
   * 个人参团状态 1 未加入(待支付) 2 已加入 3 取消
   * @format int32
   */
  joinStatus?: number;

  /** 订单编号 */
  orderNo?: string;

  /** 订单价格 */
  paymentAmount?: number;

  /** 价格 */
  price?: number;

  /**
   * 数量
   * @format int32
   */
  quantity?: number;

  /** sku图片 */
  skuImg?: string;

  /** sku名称 */
  skuName?: string;

  /** sku编号 */
  skuNo?: string;

  /**
   * 当前生成团的虚拟人数
   * @format int32
   */
  virtualUserNumber?: number;
}

export interface MarketingActivityGoodsVoOfGroup {
  /** 当前用户级别是否购买 */
  buyBool?: boolean;

  /**
   * 已拼份数（已购买商品数量）
   * @format int32
   */
  buyGoodsQuantity?: number;

  /** 封面图片 */
  coverImg?: string;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;

  /** 成团人数列表 */
  groupNumberList?: number[];

  /** 市场价 */
  marketPrice?: number;

  /** 商品SKU */
  marketingActivitySkuParams?: MarketingActivitySkuParam[];

  /** 商品价格（默认取sku最低价） */
  price?: number;

  /**
   * 销售积分
   * @format int32
   */
  saleScore?: number;

  /**
   * 销售方式 1:纯现金 2:纯积分 3:现金+积分
   * @format int32
   */
  saleType?: number;

  /**
   * 虚拟销量
   * @format int32
   */
  virtualSale?: number;

  /**
   * 商品类型 0 实物商品 1 虚拟商品
   * @format int32
   */
  virtualType?: number;
}

export interface MarketingActivityGoodsStatParam {
  /** 活动编号 */
  activityNo?: string;

  /** 商品编号 */
  goodsNo?: string;

  /**
   * pv uv类型 0：分享 1：商品详情
   * @format int32
   */
  statPvAndUvType?: number;
}

export interface TieredPriceVo {
  /** 活动价格 */
  price?: number;

  /**
   * 参团人数
   * @format int32
   */
  qty?: number;
}

export interface MarketingActivitySkuTieredPriceVo {
  /** sku编号 */
  skuNo?: string;

  /** 活动价格列表 */
  tieredPriceList?: TieredPriceVo[];
}

export interface MarketingActivityOfGroupVo {
  /** 活动名称 */
  activityName?: string;

  /** 活动编号 */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败 状态为0和1时前端展示启用和未启用功能
   * @format int32
   */
  activityStatus?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @format int32
   */
  activityType?: number;

  /** 封面图 */
  coverImg?: string;

  /** 活动说明 */
  description?: string;

  /**
   * 活动结束时间
   * @format date-time
   */
  endTime?: string;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 团购人数
   * @format int32
   */
  groupBuyingNum?: number;

  /**
   * 1:普通团 2：一分团 3：阶梯团
   * @format int32
   */
  groupType?: number;

  /** @format int64 */
  id?: number;

  /**
   * 商户ID
   * @format int64
   */
  merchantId?: number;

  /**
   * 活动开始时间
   * @format date-time
   */
  startTime?: string;
}

export interface MarketingActivityOfGroupStatVo {
  /**
   * 开团数（个）
   * @format int32
   */
  activityJoinNum?: number;

  /** 活动名称 */
  activityName?: string;

  /** 活动编号 */
  activityNo?: string;

  /**
   * 下单量
   * @format int32
   */
  activityOrderNum?: number;

  /** 支付GMV */
  activityOrderPayAmount?: number;

  /**
   * 支付量
   * @format int32
   */
  activityOrderPayNum?: number;

  /**
   * 分享卡片PV
   * @format int32
   */
  activitySharePv?: number;

  /**
   * 分享卡片UV
   * @format int32
   */
  activityShareUv?: number;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败 状态为0和1时前端展示启用和未启用功能
   * @format int32
   */
  activityStatus?: number;

  /**
   * 拼团成功数
   * @format int32
   */
  activitySuccessNum?: number;

  /**
   * 拼团成功率
   * @format int32
   */
  activitySuccessRate?: number;

  /**
   * 下单用户数
   * @format int32
   */
  activityUserNum?: number;

  /** 封面图片 */
  coverImg?: string;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /** 商品名称 */
  goodsName?: string;

  /**
   * 详情页PV
   * @format int32
   */
  goodsPv?: number;

  /**
   * 详情页UV
   * @format int32
   */
  goodsUv?: number;

  /**
   * 成团人数
   * @format int32
   */
  groupBuyingNum?: number;

  /**
   * 1:普通团 2：一分团 3：阶梯团
   * @format int32
   */
  groupType?: number;
}

export interface MarketingActivityOfGroupOrderVo {
  /** 活动名称 */
  activityName?: string;

  /** 活动编号 */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败 状态为0和1时前端展示启用和未启用功能
   * @format int32
   */
  activityStatus?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @format int32
   */
  activityType?: number;

  /** 是否是队长 0 否 1 是 */
  captain?: boolean;

  /** 团长头像 */
  captainMemberHeadImg?: string;

  /**
   * 团长用户ID
   * @format int64
   */
  captainMemberId?: number;

  /** 团长名称 */
  captainMemberNickname?: string;

  /** 封面图 */
  coverImg?: string;

  /**
   * 当前入团的真实人数
   * @format int32
   */
  currentUserNumber?: number;

  /** 活动说明 */
  description?: string;

  /**
   * 活动结束时间
   * @format date-time
   */
  endTime?: string;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 成团人数
   * @format int32
   */
  groupNumber?: number;

  /**
   * 拼团状态:  0: 队长开团中（待支付） 1: 拼团中 2: 拼团成功 3: 拼团失败
   * @format int32
   */
  groupStatus?: number;

  /** @format int64 */
  id?: number;

  /**
   * 参团时间
   * @format date-time
   */
  joinDate?: string;

  /**
   * 个人参团状态 1 未加入(待支付) 2 已加入 3 取消 4 已成团 5 拼团失败
   * @format int32
   */
  joinStatus?: number;

  /** 用户头像 */
  memberHeadImg?: string;

  /**
   * 用户ID
   * @format int64
   */
  memberId?: number;

  /** 用户名称 */
  memberNickname?: string;

  /**
   * 商户ID
   * @format int64
   */
  merchantId?: number;

  /**
   * 开团时间
   * @format date-time
   */
  openDate?: string;

  /** 订单编号 */
  orderNo?: string;

  /**
   * 订单状态
   * @format int32
   */
  orderStatus?: number;

  /**
   * 活动开始时间
   * @format date-time
   */
  startTime?: string;

  /**
   * 当前生成团的虚拟人数
   * @format int32
   */
  virtualUserNumber?: number;
}

export interface MarketingActivityOfGroupDto {
  /**
   * 赠品类型 0:赠原商品  1:赠其他商品
   * @format int32
   */
  activityGiftType?: number;

  /** 活动名称 */
  activityName?: string;

  /** 活动编号 */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @format int32
   */
  activityStatus?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @format int32
   */
  activityType?: number;

  /**
   * 活动完成后操作 0：设为普通商品 1：下架
   * @format int32
   */
  completed?: number;

  /** 活动规则 */
  content?: string;

  /** 封面图 */
  coverImg?: string;

  /** 活动描述 */
  description?: string;

  /**
   * 活动结束时间
   * @format date-time
   */
  endTime?: string;

  /**
   * 成团人数
   * @format int32
   */
  groupBuyingNum?: number;
  groupInfo?: MarketingActivityGroupExtDto;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 多买多送 0:否  1:是 */
  loopGift?: boolean;

  /** 商品信息 */
  marketingActivityGoodsParams?: MarketingActivityGoodsParam[];

  /** 是否上架 */
  onShelf?: boolean;

  /** 是否预留库存，如果预留在活动启用时扣减库存，活动停用和结束时返还库存 */
  reservedInventory?: boolean;

  /** 显示成员列表 0关 1开 */
  showMemberList?: boolean;

  /** 拼团阶梯价列表 */
  skuTieredPriceList?: MarketingActivitySkuTieredPriceVo[];

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /**
   * 活动开始时间
   * @format date-time
   */
  startTime?: string;

  /** 是否可叠加优惠 0：否 1：是 */
  superposition?: boolean;
}

export interface MarketingActivityGroupExtDto {
  /** 团长奖励 0：不开启 1：开启 */
  groupBonusEnable?: boolean;

  /**
   * 团长奖励积分
   * @format int32
   */
  groupBonusIntegral?: number;

  /**
   * 参团次数限制 0:不限制
   * @format int64
   */
  groupJoinLimit?: number;

  /**
   * 开团次数限制 0:不限制
   * @format int64
   */
  groupOpenLimit?: number;

  /**
   * 等待成团时间(分钟)
   * @format int32
   */
  groupSuccessTime?: number;

  /**
   * 1:普通团 2：一分团 3：阶梯团
   * @format int32
   */
  groupType?: number;

  /** 是否为虚拟成团 0: 否   1：是 */
  groupVirtual?: boolean;

  /**
   * 虚拟成团人数条件，0代表不限制
   * @format int32
   */
  groupVirtualNum?: number;

  /**
   * 参团人限制 0：所有用户 1：新用户
   * @format int32
   */
  joinCondition?: number;
}

export interface MarketingActivityExtDto {
  /** 活动编号 */
  activityNo?: string;

  /**
   * 已拼份数（已购买商品数量）
   * @format int32
   */
  buyGoodsQuantity?: number;

  /** 团长奖励 0：不开启 1：开启 */
  groupBonusEnable?: boolean;

  /**
   * 团长奖励积分
   * @format int32
   */
  groupBonusIntegral?: number;

  /**
   * 成团人数
   * @format int32
   */
  groupBuyingNum?: number;

  /**
   * 1:普通团 2：一分团 3：阶梯团
   * @format int32
   */
  groupType?: number;

  /**
   * 活动Id，activityId
   * @format int64
   */
  id?: number;

  /** 拼团阶梯价列表 */
  skuTieredPriceList?: MarketingActivitySkuTieredPriceVo[];

  /**
   * 虚拟销量
   * @format int32
   */
  virtualSale?: number;
}

export interface KpiStatDto {
  /** 累计收益 */
  balance?: number;

  /** 订货商等级 */
  gradeName?: string;

  /** 会员编号 */
  memberNo?: string;

  /** 会员昵称 */
  nickName?: string;

  /** 直接上级等级 */
  superiorGradeName?: string;

  /** 直接上级编号 */
  superiorMemberNo?: string;

  /** 直接上级昵称 */
  superiorNickName?: string;
}

export interface GradeStatDto {
  /** 收益 */
  balance?: number;

  /**
   * 人数
   * @format int64
   */
  counts?: number;

  /** 等级名称 */
  gradeName?: string;
}

export interface OrderGoodsStatVO {
  /** 营业额 */
  itemsPayAmount?: number;

  /**
   * 实际销量
   * @format int32
   */
  sales?: number;

  /**
   * 营业额积分
   * @format int32
   */
  score?: number;
  statVOPagedResult?: PagedResultOrderGoodsStatItemVO;
}

export interface OrderGoodsStatItemVO {
  /** 分类名称 */
  classifyName?: string;

  /** 商品分类名称1 */
  classifyName1?: string;

  /** 商品分类名称2 */
  classifyName2?: string;

  /** 商品分类名称3 */
  classifyName3?: string;

  /**
   * 商品id
   * @format int64
   */
  goodsId?: number;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;

  /** 营业额 */
  itemsPayAmount?: number;

  /**
   * 实际销量
   * @format int32
   */
  sales?: number;

  /**
   * 营业额积分
   * @format int32
   */
  score?: number;

  /**
   * 购买人数
   * @format int32
   */
  userCounts?: number;

  /**
   * 商品类型 0普通商品 1虚拟商品
   * @format int32
   */
  virtualType?: number;
}

export interface MemberLoginOutputDto {
  /** 是否有未提现金额 */
  balance?: boolean;

  /** 是否有未收货订单 */
  order?: boolean;
}

export interface RechargeRecordOutputDto {
  /**
   * 会员类型id
   * @format int32
   */
  gradeId?: number;

  /** 会员类型 */
  gradeName?: string;

  /**
   * 序号
   * @format int64
   */
  id?: number;

  /** 会员编号 */
  memberNo?: string;

  /** 会员手机号 */
  mobile?: string;

  /** 会员昵称 */
  nickName?: string;

  /**
   * 充值时间
   * @format date-time
   */
  payAt?: string;

  /** 实付金额 */
  payBalance?: number;

  /** 充值金额 */
  rechargeBalance?: number;

  /** 订单编号 */
  rechargeNo?: string;

  /** 订单备注 */
  remark?: string;

  /** 交易流水号 */
  transactionId?: string;
}

export interface JsonResult {
  /** @format int32 */
  code?: number;
  data?: object;
  msg?: string;
}

export interface MemberModifyInputDto {
  /** 用户头像 */
  avatarUrl?: string;

  /**
   * 出生年月
   * @format date-time
   */
  birthday?: string;

  /** 性别 1男 2女 0未知 */
  gender?: string;

  /** 用户昵称 */
  nickName?: string;
}

export interface UpdateAddressFrontDTO {
  /**
   * 地址id
   * @format int64
   */
  addressId?: number;

  /** 订单编号 */
  orderNo?: string;
}

export interface UpdateAddressDTO {
  /** 订单编号 */
  orderNo?: string;

  /** 收货人详细地址 */
  shippingAddress?: string;

  /** 收货人市 */
  shippingCity?: string;

  /** 收货人区 */
  shippingDistrict?: string;

  /** 收货人电话 */
  shippingMobile?: string;

  /** 收货人姓名 */
  shippingName?: string;

  /** 收货人省 */
  shippingProvince?: string;
}

export interface OrderVORes {
  allDiscountAmount?: number;

  /**
   * 订货商级别id
   * @format int64
   */
  buyerGradeId?: number;

  /** 订货商等级名称(会员类型) */
  buyerGradeName?: string;

  /** 关闭售后 0：否 1：是 */
  closeRefund?: boolean;

  /**
   * 关闭时间
   * @format date-time
   */
  closedAt?: string;

  /** 关闭原因 */
  closedReason?: string;

  /** 是否评价 */
  comment?: boolean;

  /**
   * 评论时间
   * @format date-time
   */
  commentAt?: string;

  /** 优惠金额 */
  discountAmount?: number;

  /** 返佣明细列表 */
  earningRecordList?: EarningRecordOutputDto[];

  /** 兑换积分 */
  exchangeIntegral?: number;

  /** 是否完成 0否 1是 */
  finish?: boolean;

  /** 运费包邮减免 */
  freeShippingAmount?: number;

  /** 抵扣后运费 */
  freightAmount?: number;

  /**
   * 订单创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /** 商品金额 */
  goodsAmount?: number;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 子订单信息 */
  items?: OrderItemsVO[];

  /**
   * 物流状态 0未发货 1已发货 2已收获
   * @format int32
   */
  logisticsStatus?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @format int32
   */
  marketingType?: number;

  /** 用户编号 */
  memberNo?: string;

  /** 订单金额/应付金额 */
  orderAmount?: number;

  /** 订单渠道 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

  /**
   * 获得积分
   * @format int32
   */
  orderIntegral?: number;

  /** 订单的优惠明细 */
  orderMasterMarketingList?: OrderMasterMarketingDto[];

  /** 订单编号 */
  orderNo?: string;

  /** 订单备注 */
  orderNote?: string;

  /**
   * 订单状态 0交易中 1交易成功-1 交易关闭
   * @format int32
   */
  orderStatus?: number;

  /** 订单状态名称 */
  orderStatusName?: string;

  /**
   * 订单类型
   * @format int32
   */
  orderType?: number;

  /** 已支付金额，第三方支付工具回调 */
  paidAmount?: number;

  /** 实际支付金额 */
  payAmount?: number;

  /**
   * 支付时间
   * @format date-time
   */
  payAt?: string;

  /**
   * 结束支付时间
   * @format date-time
   */
  payEndAt?: string;

  /**
   * 0 未支付 1 支付成功 -1支付失败
   * @format int32
   */
  payStatus?: number;

  /**
   * 支付类型: 1微信支付 2支付宝支付 3线下支付 4余额
   * @format int32
   */
  payType?: number;

  /** 抵扣前运费 */
  realFreightAmount?: number;

  /**
   * 确认收货时间
   * @format date-time
   */
  receiptAt?: string;

  /**
   * 售后状态 0无售后 1有售后
   * @format int32
   */
  refundStatus?: number;

  /** 积分比例 */
  scoreProportion?: number;

  /** 0快递，1自提 */
  selfPicked?: boolean;

  /** 收件人详细地址 */
  shippingAddress?: string;

  /**
   * 发货时间
   * @format date-time
   */
  shippingAt?: string;

  /** 收件人市 */
  shippingCity?: string;

  /** 收件人区 */
  shippingDistrict?: string;

  /** 订单发货信息 */
  shippingList?: OrderShippingDto[];

  /** 收货人电话 */
  shippingMobile?: string;

  /**
   * 收货地址修改次数
   * @format int32
   */
  shippingModifyCount?: number;

  /** 收货人 */
  shippingName?: string;

  /** 收件人省份 */
  shippingProvince?: string;

  /**
   * 统一状态
   * @format int32
   */
  status?: number;

  /**
   * 下单使用的总积分
   * @format int32
   */
  totalScore?: number;

  /** 微信支付交易流水号 */
  transactionId?: string;

  /** 买家留言 */
  userComments?: string;

  /**
   * 会员ID
   * @format int64
   */
  userId?: number;

  /** 会员手机号 */
  userMobile?: string;

  /** 会员姓名 */
  userName?: string;

  /**
   * 商品类型 0实物商品 1虚拟商品
   * @format int32
   */
  virtualType?: number;
}

export interface OrderVOReq {
  /**
   * 订货商级别id
   * @format int64
   */
  buyerGradeId?: number;

  /** 订货商等级名称(会员类型) */
  buyerGradeName?: string;

  /** 关闭售后 0：否 1：是 */
  closeRefund?: boolean;

  /**
   * 关闭时间
   * @format date-time
   */
  closedAt?: string;

  /** 关闭原因 */
  closedReason?: string;

  /** 是否评价 */
  comment?: boolean;

  /**
   * 评论时间
   * @format date-time
   */
  commentAt?: string;

  /** 优惠金额 */
  discountAmount?: number;

  /** 返佣明细列表 */
  earningRecordList?: EarningRecordOutputDto[];

  /** 兑换积分 */
  exchangeIntegral?: number;

  /** 是否完成 0否 1是 */
  finish?: boolean;

  /** 运费包邮减免 */
  freeShippingAmount?: number;

  /** 抵扣后运费 */
  freightAmount?: number;

  /**
   * 订单创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /** 商品金额 */
  goodsAmount?: number;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 子订单信息 */
  items?: OrderItemsVO[];

  /**
   * 物流状态 0未发货 1已发货 2已收获
   * @format int32
   */
  logisticsStatus?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @format int32
   */
  marketingType?: number;

  /** 用户编号 */
  memberNo?: string;

  /** 订单金额/应付金额 */
  orderAmount?: number;

  /** 订单渠道 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

  /**
   * 获得积分
   * @format int32
   */
  orderIntegral?: number;

  /** 订单的优惠明细 */
  orderMasterMarketingList?: OrderMasterMarketingDto[];

  /** 订单编号 */
  orderNo?: string;

  /** 订单备注 */
  orderNote?: string;

  /**
   * 订单状态 0交易中 1交易成功-1 交易关闭
   * @format int32
   */
  orderStatus?: number;

  /** 订单状态名称 */
  orderStatusName?: string;

  /**
   * 订单类型
   * @format int32
   */
  orderType?: number;

  /** 已支付金额，第三方支付工具回调 */
  paidAmount?: number;

  /** 实际支付金额 */
  payAmount?: number;

  /**
   * 支付时间
   * @format date-time
   */
  payAt?: string;

  /**
   * 结束支付时间
   * @format date-time
   */
  payEndAt?: string;

  /**
   * 0 未支付 1 支付成功 -1支付失败
   * @format int32
   */
  payStatus?: number;

  /**
   * 支付类型: 1微信支付 2支付宝支付 3线下支付 4余额
   * @format int32
   */
  payType?: number;

  /** 抵扣前运费 */
  realFreightAmount?: number;

  /**
   * 确认收货时间
   * @format date-time
   */
  receiptAt?: string;

  /**
   * 售后状态 0无售后 1有售后
   * @format int32
   */
  refundStatus?: number;

  /** 积分比例 */
  scoreProportion?: number;

  /** 0快递，1自提 */
  selfPicked?: boolean;

  /** 收件人详细地址 */
  shippingAddress?: string;

  /**
   * 发货时间
   * @format date-time
   */
  shippingAt?: string;

  /** 收件人市 */
  shippingCity?: string;

  /** 收件人区 */
  shippingDistrict?: string;

  /** 订单发货信息 */
  shippingList?: OrderShippingDto[];

  /** 收货人电话 */
  shippingMobile?: string;

  /**
   * 收货地址修改次数
   * @format int32
   */
  shippingModifyCount?: number;

  /** 收货人 */
  shippingName?: string;

  /** 收件人省份 */
  shippingProvince?: string;

  /**
   * 统一状态
   * @format int32
   */
  status?: number;

  /**
   * 下单使用的总积分
   * @format int32
   */
  totalScore?: number;

  /** 微信支付交易流水号 */
  transactionId?: string;

  /** 买家留言 */
  userComments?: string;

  /**
   * 会员ID
   * @format int64
   */
  userId?: number;

  /** 会员手机号 */
  userMobile?: string;

  /** 会员姓名 */
  userName?: string;

  /**
   * 商品类型 0实物商品 1虚拟商品
   * @format int32
   */
  virtualType?: number;
}

export interface PostsClassifyMoveInputDto {
  /** 当前要移动的分类id */
  id: number;

  /** 当前要移动的目标分类父id */
  pid: number;

  /** 当前要移动的目标索引 */
  sort: number;
}

export interface ScoreMonthStatisticsVO {
  /**
   * 当月增加积分
   * @format int32
   */
  totalPlusScore?: number;

  /**
   * 当月扣除积分
   * @format int32
   */
  totalSubtractScore?: number;
}

export interface PostsStatusDTO {
  /** @format int64 */
  id?: number;
  status?: boolean;
}

export interface PostsResponseDTO {
  /** 驳回原因 */
  auditReason?: string;

  /**
   * 审核状态：0未审核1已审核-1已驳回
   * @format int32
   */
  auditStatus?: number;

  /**
   * 审核时间
   * @format date-time
   */
  auditTime?: string;

  /** 审核人 */
  auditUser?: string;

  /**
   * 分类二级id
   * @format int64
   */
  classifyId?: number;

  /** 分类二级名称 */
  classifyName?: string;

  /** 分类一级名称 */
  classifyParentName?: string;

  /**
   * 分类一级id
   * @format int64
   */
  classifyPid?: number;

  /** 帖子内容 */
  content?: string;

  /** 是否删除，默认0 */
  deleted?: boolean;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 图片地址(数组) */
  imgUrl?: object[];

  /**
   * 点赞计数
   * @format int64
   */
  likeCnt?: number;

  /** 点赞状态 */
  likeStatus?: boolean;
  omitContent?: string;

  /** 帖子编号 */
  postsNo?: string;

  /**
   * 发帖时间
   * @format date-time
   */
  publishTime?: string;

  /**
   * 发布者ID
   * @format int64
   */
  publisherId?: number;

  /** 发布者手机号（冗余） */
  publisherMobile?: string;

  /** 发布者昵称（冗余） */
  publisherNickname?: string;

  /** 发布者编号 */
  publisherNo?: string;

  /** 是否推荐 */
  recommend?: boolean;

  /**
   * 帖子来源:0自发贴；1后台发贴
   * @format int32
   */
  source?: number;

  /** 标题 */
  title?: string;

  /** 是否置顶 */
  top?: boolean;

  /** 视频地址 */
  videoUrl?: string;

  /**
   * 实际浏览量
   * @format int64
   */
  viewCnt?: number;

  /**
   * 虚拟浏览量
   * @format int64
   */
  virtualViewCnt?: number;

  /** 是否可见 */
  visible?: boolean;
}

export interface PostsClassifyStatusDTO {
  frontShow?: boolean;

  /** @format int64 */
  id?: number;
}

export interface PostsRequestDTO {
  /** 驳回原因 */
  auditReason?: string;

  /**
   * 审核状态：0未审核1已审核-1已驳回
   * @format int32
   */
  auditStatus?: number;

  /**
   * 审核时间
   * @format date-time
   */
  auditTime?: string;

  /** 审核人 */
  auditUser?: string;

  /**
   * 查询开始时间
   * @format date-time
   */
  beginTime?: string;

  /**
   * 分类二级id
   * @format int64
   */
  classifyId?: number;

  /**
   * 分类一级id
   * @format int64
   */
  classifyPid?: number;

  /** 帖子内容 */
  content?: string;

  /** 是否删除，默认0 */
  deleted?: boolean;

  /**
   * 查询结束时间
   * @format date-time
   */
  endTime?: string;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 图片地址(数组) */
  imgUrl?: object[];

  /**
   * 点赞计数
   * @format int32
   */
  likeCnt?: number;

  /** 排序字段名 */
  orderField?: string;

  /**
   * 页码
   * @format int32
   */
  pageNum?: number;

  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;

  /** 帖子编号 */
  postsNo?: string;

  /**
   * 发帖时间
   * @format date-time
   */
  publishTime?: string;

  /** 发布者头像 */
  publisherAvatar?: string;

  /**
   * 发布者ID
   * @format int64
   */
  publisherId?: number;

  /** 发布者手机号（冗余） */
  publisherMobile?: string;

  /** 发布者昵称 */
  publisherNickname?: string;

  /** 发布者编号 */
  publisherNo?: string;

  /** 是否推荐 */
  recommend?: boolean;

  /** 排序方式;ASC:升序DESC:降序 */
  sortEnum?: "ASC" | "DESC";

  /**
   * 帖子来源:0自发贴；1后台发贴
   * @format int32
   */
  source?: number;

  /** 标题 */
  title?: string;

  /** 是否置顶 */
  top?: boolean;

  /** 视频地址 */
  videoUrl?: string;

  /**
   * 虚拟浏览量
   * @format int64
   */
  virtualViewCnt?: number;

  /** 是否可见 */
  visible?: boolean;
}

export interface PostsClassifyResponseDTO {
  /** 子分类 */
  children?: PostsClassifyResponseDTO[];

  /** 前端是否展示 */
  frontShow?: boolean;

  /** @format int64 */
  id?: number;

  /** 名称 */
  name?: string;

  /** 图片 */
  pic?: string;

  /**
   * 父id
   * @format int64
   */
  pid?: number;

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /** 数据状态 0 无效 1 有效 */
  status?: boolean;
}

export interface PostsClassifyRequestDTO {
  /**
   * 查询开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 创建人(后台管理员ID) */
  createUser?: string;

  /**
   * 查询结束时间
   * @format date-time
   */
  endTime?: string;

  /** 前端是否展示 */
  frontShow?: boolean;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 更新时间
   * @format date-time
   */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 修改人(后台管理员ID) */
  modifyUser?: string;

  /** 名称 */
  name?: string;

  /** 排序字段名 */
  orderField?: string;

  /**
   * 页码
   * @format int32
   */
  pageNum?: number;

  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;

  /** 图片 */
  pic?: string;

  /**
   * 父id
   * @format int64
   */
  pid?: number;

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /** 排序方式;ASC:升序DESC:降序 */
  sortEnum?: "ASC" | "DESC";

  /** 数据状态 0 无效 1 有效 */
  status?: boolean;
}

export interface PostsAuditDTO {
  auditOpinion?: string;
  auditUser?: string;

  /** @format int64 */
  id?: number;
  status?: boolean;
}

export interface LikeOperateDTO {
  /**
   * 评论ID
   * @format int64
   */
  commentId?: number;

  /**
   * 数据ID
   * @format int64
   */
  dataId?: number;

  /** 状态 */
  status?: boolean;

  /**
   * 类型：1主体 2评论
   * @format int32
   */
  type?: number;
}

export interface InformationResponseDTO {
  /**
   * 资讯分类
   * @format int64
   */
  classifyId?: number;

  /** 是否收藏 */
  collectStatus?: boolean;

  /** 帖子内容 */
  content?: string;

  /** 封面图 */
  coverImg?: string;

  /** @format int64 */
  id?: number;

  /** 简介 */
  introduction?: string;

  /**
   * 点赞数
   * @format int64
   */
  likeCnt?: number;

  /** 是否点赞 */
  likeStatus?: boolean;

  /**
   * 发布时间
   * @format date-time
   */
  publishTime?: string;

  /**
   * 排序值
   * @format int32
   */
  sort?: number;

  /** 数据状态 0 无效 1 有效 */
  status?: boolean;

  /** 资讯标题 */
  title?: string;

  /** 视频链接 */
  videoUrl?: string;

  /**
   * 实际浏览量
   * @format int64
   */
  viewCnt?: number;

  /**
   * 虚拟浏览量
   * @format int64
   */
  virtualViewCnt?: number;
}

export interface InformationRequestDTO {
  /**
   * 查询开始时间
   * @format date-time
   */
  beginTime?: string;

  /**
   * 资讯分类
   * @format int64
   */
  classifyId?: number;

  /** 帖子内容 */
  content?: string;

  /** 封面图 */
  coverImg?: string;

  /** 创建人(后台管理员ID) */
  createUser?: string;

  /**
   * 查询结束时间
   * @format date-time
   */
  endTime?: string;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 更新时间
   * @format date-time
   */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 简介 */
  introduction?: string;

  /** 修改人(后台管理员ID) */
  modifyUser?: string;

  /** 排序字段名 */
  orderField?: string;

  /**
   * 页码
   * @format int32
   */
  pageNum?: number;

  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;

  /**
   * 发布时间
   * @format date-time
   */
  publishTime?: string;

  /**
   * 排序值
   * @format int32
   */
  sort?: number;

  /** 排序方式;ASC:升序DESC:降序 */
  sortEnum?: "ASC" | "DESC";

  /** 数据状态 0 无效 1 有效 */
  status?: boolean;

  /** 资讯标题 */
  title?: string;

  /** 视频链接 */
  videoUrl?: string;

  /**
   * 虚拟浏览量
   * @format int64
   */
  virtualViewCnt?: number;
}

export interface InformationCollectDTO {
  /**
   * 咨询id
   * @format int64
   */
  informationId?: number;

  /** 状态 */
  status?: boolean;
}

export interface InformationClassifyResponseDTO {
  /** 创建人(后台管理员ID) */
  createUser?: string;

  /** 是否删除，默认0 */
  deleted?: boolean;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 更新时间
   * @format date-time
   */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 修改人(后台管理员ID) */
  modifyUser?: string;

  /** 名称 */
  name?: string;

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /** 数据状态 0 无效 1 有效 */
  status?: boolean;
}

export interface InformationClassifyRequestDTO {
  /**
   * 查询开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 创建人(后台管理员ID) */
  createUser?: string;

  /** 是否删除，默认0 */
  deleted?: boolean;

  /**
   * 查询结束时间
   * @format date-time
   */
  endTime?: string;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 更新时间
   * @format date-time
   */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 修改人(后台管理员ID) */
  modifyUser?: string;

  /** 名称 */
  name?: string;

  /** 排序字段名 */
  orderField?: string;

  /**
   * 页码
   * @format int32
   */
  pageNum?: number;

  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /** 排序方式;ASC:升序DESC:降序 */
  sortEnum?: "ASC" | "DESC";

  /** 数据状态 0 无效 1 有效 */
  status?: boolean;
}

export interface CommentResponseDTO {
  /** 评论内容 */
  content: string;

  /**
   * 数据主体ID
   * @format int64
   */
  dataId: number;

  /**
   * 关联的顶层评论ID（楼层ID）
   * @format int64
   */
  floorId?: number;

  /**
   * 评论ID
   * @format int64
   */
  id?: number;

  /**
   * 点赞数
   * @format int64
   */
  likeCnt?: number;

  /** 点赞状态 */
  likeStatus?: boolean;

  /**
   * 关联的评论ID
   * @format int64
   */
  mentionCommentId?: number;

  /** 回复的评论者昵称 */
  mentionNickName?: string;

  /**
   * 关联的评论人ID
   * @format int64
   */
  mentionPublisherId: number;

  /**
   * 发表时间
   * @format date-time
   */
  publishTime: string;

  /** 发布者头像 */
  publisherHeadImg?: string;

  /** 发布者昵称 */
  publisherNickName?: string;

  /**
   * 楼层回复数
   * @format int32
   */
  replyCnt?: number;

  /** 子评论集合 */
  subComments: CommentResponseDTO[];

  /**
   * 类型：1帖子，2资讯
   * @format int32
   */
  type: number;
}

export interface CommentDTO {
  /** 评论内容 */
  content: string;

  /**
   * 数据主体ID
   * @format int64
   */
  dataId: number;

  /**
   * 关联的顶层评论ID（楼层ID）
   * @format int64
   */
  floorId?: number;

  /**
   * 关联的评论ID
   * @format int64
   */
  mentionCommentId?: number;

  /**
   * 类型：1帖子，2资讯
   * @format int32
   */
  type: number;
}

export interface GoodsQueryByNoAndGrId {
  /** 商品编号列表 */
  goodNos?: GoodsNoAndGrIds[];
}

export interface GoodsNoAndGrIds {
  /**
   * 数据ID
   * @format int64
   */
  dataId?: number;

  /** 商品编码 */
  goodNo?: string;

  /**
   * 等级ID
   * @format int64
   */
  gradeId?: number;
}

export interface GoodsGradeVO {
  /**
   * 实际销量
   * @format int32
   */
  actualSales?: number;

  /** 商品详情页轮播图地址 */
  bannerImgPaths?: string;

  /** 当前用户级别是否购买 */
  buyBool?: boolean;

  /**
   * 购买限制数量
   * @format int32
   */
  buyNum?: number;

  /**
   * 购买门槛 购买限制 0:不限制 1:限制
   * @format int32
   */
  buyStatus?: number;

  /** 身份限制 */
  buyerGrades?: number[];

  /**
   * 末级分类id
   * @format int32
   */
  classifyId?: number;

  /** 分类名称 */
  classifyName?: string;

  /** 商品分类名称1 */
  classifyName1?: string;

  /** 商品分类名称2 */
  classifyName2?: string;

  /** 商品分类名称3 */
  classifyName3?: string;

  /**
   * 分类父id1（末级的上一级）
   * @format int32
   */
  classifyPid1?: number;

  /**
   * 分类父id2（分类父id1的上一级）
   * @format int32
   */
  classifyPid2?: number;

  /** 封面图片 */
  coverImg?: string;

  /**
   * 自定义起止销量
   * @format int32
   */
  customStartSales?: number;

  /**
   * 数据ID
   * @format int64
   */
  dataId?: number;

  /**
   * 运费模板ID
   * @format int64
   */
  expressTemplateId?: number;

  /** 是否包邮 */
  freePost?: boolean;

  /** 前台是否可见 */
  frontShow?: boolean;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;

  /** SKU信息 */
  goodsSkuDetailList?: GoodsSkuVO[];

  /** 规格信息 */
  goodsSpecRelationList?: GoodsSpecRelationVO[];

  /** 标签列表 */
  goodsTagList?: GoodsTagDto[];

  /**
   * 等级名称
   * @format int64
   */
  gradeId?: number;

  /** 等级名称 */
  gradeName?: string;

  /** 分组ids */
  groupIds?: number[];

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 市场价 */
  marketPrice?: number;

  /**
   * 市场积分
   * @format int32
   */
  marketScore?: number;

  /** 营销活动扩展信息 */
  marketingActivityExtList?: MarketingActivityExtDto[];

  /** 营销活动 */
  marketingActivityList?: MarketingActivityDto[];

  /** 是否开启推荐 */
  recommendStatus?: boolean;

  /**
   * 富文本ID
   * @format int64
   */
  richId?: number;

  /** 销售价 */
  salePrice?: number;

  /**
   * 销售积分
   * @format int32
   */
  saleScore?: number;

  /**
   * 销售方式 1:纯现金 2:纯积分 3:现金+积分
   * @format int32
   */
  saleType?: number;

  /** 是否上架 0 否 1 是 */
  shelved?: boolean;

  /**
   * 上下架时间
   * @format date-time
   */
  shelvesTime?: string;

  /**
   * 排序值
   * @format int32
   */
  sort?: number;

  /**
   * 库存
   * @format int32
   */
  stock?: number;

  /** 标签ids */
  tagIds?: number[];

  /** 是否是统一规格 0 否 1 是  */
  uniform?: boolean;

  /** 订货商购买升级 */
  upgrade?: boolean;

  /** 是否使用积分 */
  useScore?: boolean;

  /** 视频地址 */
  videoUrl?: string;

  /**
   * 商品类型 0 实物商品 1 虚拟商品
   * @format int32
   */
  virtualType?: number;
}

export interface ReachStandUpgradeConfRequest {
  /** 下级人数达标升级请求DTO */
  reachStandUpgradeConfQueryDto?: ReachStandUpgradeConfQueryDto[];
}

export interface ReachStandUpgradeConfQueryDto {
  /**
   * 数据ID
   * @format int64
   */
  dataId?: number;

  /**
   * 升至等级id
   * @format int64
   */
  gradeId?: number;

  /**
   * 下级等级要求
   * @format int64
   */
  subGradeId?: number;

  /**
   * 下级等级要求数量
   * @format int32
   */
  subGradeNum?: number;
}

export interface ReachStandUpgradeConfOutputDto {
  /**
   * 数据ID
   * @format int64
   */
  dataId?: number;

  /**
   * 升至等级id
   * @format int64
   */
  gradeId?: number;

  /** 升至等级名称 */
  gradeName?: string;

  /**
   * 下级等级要求
   * @format int64
   */
  subGradeId?: number;

  /** 下级要求等级名称 */
  subGradeName?: string;

  /**
   * 下级等级要求数量
   * @format int32
   */
  subGradeNum?: number;
}

export interface BuyerGradeResponseDTO {
  /** 创建人(后台管理员ID) */
  createUser?: string;

  /** 是否删除 0 正常 1 删除 */
  deleted?: boolean;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 更新时间
   * @format date-time
   */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 修改人(后台管理员ID) */
  modifyUser?: string;

  /** 名称 */
  name?: string;

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /** 数据状态 0 无效 1 有效 */
  status?: boolean;
}

export interface MarketingActivitySkuBuyerDto {
  /**
   * 活动id 非必填
   * @format int64
   */
  activityId?: number;

  /** 活动价 */
  activityPrice?: number;

  /**
   * 订货商级别 0代表普通客户
   * @format int64
   */
  buyerGradeId?: number;

  /** 商品编号 非必填 */
  goodsNo?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * 积分 非必填
   * @format int32
   */
  score?: number;

  /** 商品sku 非必填 */
  skuNo?: string;
}

export interface GoodsGroupUpdateDto {
  /** 前端是否展示 */
  frontShow?: boolean;

  /**
   * 商品类型 0 普通商品 1 积分商品
   * @format int32
   */
  goodsType?: number;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 名称 */
  name?: string;

  /** 图片 */
  pic?: string;

  /**
   * 排序
   * @format int32
   */
  sort?: number;
}

export interface GoodsGroupSaveDto {
  /** 前端是否展示 */
  frontShow?: boolean;

  /**
   * 商品类型 0 普通商品 1 积分商品
   * @format int32
   */
  goodsType?: number;

  /** 名称 */
  name?: string;

  /** 图片 */
  pic?: string;

  /**
   * 排序
   * @format int32
   */
  sort?: number;
}

export interface GoodsGroupOutputDto {
  /** 前端是否展示 */
  frontShow?: boolean;

  /**
   * 商品类型 0 普通商品 1 积分商品
   * @format int32
   */
  goodsType?: number;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 名称 */
  name?: string;

  /** 图片 */
  pic?: string;

  /**
   * 排序
   * @format int32
   */
  sort?: number;
}

export interface RefundAuditRecordDto {
  /**
   * 审核状态 1:通过 2:驳回
   * @format int32
   */
  auditStatus?: number;

  /**
   * 1:退款 2退货退款 3:验货
   * @format int32
   */
  auditType?: number;

  /** 审核人 */
  createUser?: string;

  /**
   * 审核时间
   * @format date-time
   */
  gmtCreated?: string;

  /** 原因 */
  reason?: string;
}

export interface MemLabelUpdateRequestDTO {
  createUser?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /**
   * id
   * @format int64
   */
  id?: number;
  modifyUser?: string;

  /** 名称 */
  name?: string;

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /** @format int32 */
  status?: number;
}

export interface MemLabelSaveRequestDTO {
  createUser?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;
  id?: object;
  modifyUser?: string;

  /** 名称 */
  name?: string;

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /** @format int32 */
  status?: number;
}

export interface MemLabelResponseDTO {
  /** 创建人(后台管理员ID) */
  createUser?: string;

  /** 是否删除 0 正常 1 删除 */
  deleted?: boolean;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 更新时间
   * @format date-time
   */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 是否关联会员 */
  isRelevance?: boolean;

  /** 修改人(后台管理员ID) */
  modifyUser?: string;

  /** 名称 */
  name?: string;

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /** 数据状态 0 无效 1 有效 */
  status?: boolean;
}

export interface MemLabelChangeRequestDTO {
  /**
   * 用户ID
   * @format int64
   */
  id?: number;

  /** 标签数组[1,2] */
  label?: string;
}

export type AddShopCartUsingPOSTOrderno = string;

export type Object = object;

export interface MemBindRecordListResponseDto {
  /** @format int32 */
  bindMode?: number;
  createUser?: string;
  deleted?: boolean;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** 等级名称 */
  gradeName?: string;

  /** 头像 */
  headImg?: string;

  /** @format int64 */
  id?: number;

  /** 用户全局唯一编号 */
  memberNo?: string;
  modified?: boolean;
  modifyUser?: string;

  /** 昵称 */
  nickName?: string;
  orderNo?: string;

  /** @format int64 */
  pid?: number;

  /** @format int32 */
  status?: number;
  transient?: boolean;

  /** 上级用户昵称 */
  upNickName?: string;

  /** @format int64 */
  userId?: number;
}

export interface GoodsShareRequestDto {
  /** 微信code */
  code?: string;

  /** 商品编码 */
  goodsNo?: string;

  /** 用户编码 */
  memberNo?: string;
}

export interface EarningRecordListResponseDto {
  earningBalance?: number;

  /** 等级名称 */
  gradeName?: string;

  /** 头像 */
  headImg?: string;

  /**
   * 用户ID
   * @format int64
   */
  memId?: number;

  /** 编码 */
  memberNo?: string;

  /** 昵称 */
  nickName?: string;
}

export interface BuyerManageAppDetailResponseDTO {
  /**
   * 等级ID
   * @format int64
   */
  gradeId?: number;

  /** 等级名称 */
  gradeName?: string;

  /**
   * 订货商ID
   * @format int64
   */
  id?: number;

  /** 用户编码 */
  memberNo?: string;

  /**
   * 我的团队人数
   * @format int32
   */
  myTeamNumber?: number;

  /** 收益余额（可提现余额） */
  settleBalance?: number;

  /**
   * 等级权重
   * @format int32
   */
  sort?: number;

  /** 累计收益 */
  totalBalance?: number;

  /** 收益余额（不可提现余额 */
  unsettledBalance?: number;
}

export interface MemberListDto {
  /**
   * 订货商状态 0 否 1是
   * @format int32
   */
  buyerStatus?: number;

  /** 等级名称 */
  gradeName?: string;

  /** 头像 */
  headImg?: string;

  /**
   * 用户id
   * @format int64
   */
  id?: number;

  /** 用户全局唯一编号 */
  memberNo?: string;

  /** 昵称 */
  nickName?: string;
}

export interface EarningRecordOutputDto {
  /** 商品详情 */
  detailOutputDtos?: EarningRecordDetailOutputDto[];

  /** 收益金额 */
  earningBalance?: number;

  /**
   * 记录时间
   * @format date-time
   */
  gmtCreated?: string;

  /** 等级名称 */
  gradeName?: string;

  /** 头像 */
  headImg?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * memId
   * @format int64
   */
  memId?: number;

  /** 用户编号 */
  memberNo?: string;

  /** 昵称 */
  nickName?: string;

  /** 订单编号 */
  orderNo?: string;
}

export interface EarningRecordDetailOutputDto {
  earningBalance?: number;

  /**
   * 收益记录ID
   * @format int64
   */
  earningRecordId?: number;

  /** @format int32 */
  earningStatus?: number;

  /** 商品图片 */
  goodsImg?: string;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;

  /**
   * 收益记录详情ID
   * @format int32
   */
  id?: number;

  /** sku编码 */
  skuNo?: string;
}

export interface CouponSendBymemberNosInputDto {
  memberNos?: string[];

  /** @format int32 */
  num?: number;
  templateNo?: string;
}

export interface BuyerManageUpdateRequestDTO {
  /**
   * 等级id
   * @format int64
   */
  gradeId?: number;

  /**
   * 订货商ID
   * @format int64
   */
  id?: number;
}

export interface BuyerManageSaveRequestDTO {
  /**
   * 等级id
   * @format int64
   */
  gradeId?: number;

  /**
   * 会员ID
   * @format int64
   */
  memberId?: number;
}

export interface BuyerGradeUpdateRequestDTO {
  createUser?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /**
   * Id
   * @format int64
   */
  id?: number;
  modifyUser?: string;

  /** 名称 */
  name?: string;

  /**
   * 权重
   * @format int32
   */
  sort?: number;

  /** @format int32 */
  status?: number;
}

export interface BuyerGradeSaveRequestDTO {
  createUser?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;
  id?: object;
  modifyUser?: string;

  /** 名称 */
  name?: string;

  /**
   * 权重
   * @format int32
   */
  sort?: number;

  /** @format int32 */
  status?: number;
}

export interface BuyerGradeListResponseDTO {
  /**
   * 关联订货商数量
   * @format int32
   */
  buyerNum?: number;

  /** @format int64 */
  id?: number;

  /** 名称 */
  name?: string;

  /**
   * 权重
   * @format int32
   */
  sort?: number;
}

export interface AuditStatusDto {
  /**
   * 数据状态  0 待审核 1 审核通过 2:审核驳回
   * @format int32
   */
  auditStatus?: number;

  /**
   * id 不能为空
   * @format int64
   */
  id?: number;

  /** 驳回原因 */
  reason?: string;
}

export interface UserChangeSuperiorInputDto {
  /**
   * 用户id
   * @format int64
   */
  id?: number;

  /**
   * 上下级用户ID
   * @format int64
   */
  superiorUserId?: number;
}

export interface UpdateBuyerShopInStatusRequestDTO {
  /**
   * id
   * @format int64
   */
  id?: number;

  /** 店中店状态 0 无效 1 有效 */
  shopInStatus?: boolean;
}

export interface MemCouponStatisticVo {
  /**
   * 已过期（张）
   * @format int32
   */
  expired?: number;

  /**
   * 已使用（张）
   * @format int32
   */
  isUse?: number;

  /**
   * 未使用（张）
   * @format int32
   */
  notUse?: number;
}

export interface MemCouponListVo {
  /** 优惠劵模板名称 */
  couponName?: string;

  /** 优惠劵编号 */
  couponNo?: string;

  /**
   * 状态 0 未使用 1 已使用 2 已过期 3 已作废
   * @format int32
   */
  useStatus?: number;
}

export interface GoodsTagUpdateDto {
  /** 前端是否展示 */
  frontShow?: boolean;

  /**
   * 商品类型 0 普通商品 1 积分商品
   * @format int32
   */
  goodsType?: number;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 名称 */
  name?: string;

  /** 图片 */
  pic?: string;

  /**
   * 排序
   * @format int32
   */
  sort?: number;
}

export interface GoodsTagSaveDto {
  /** 前端是否展示 */
  frontShow?: boolean;

  /**
   * 商品类型 0 普通商品 1 积分商品
   * @format int32
   */
  goodsType?: number;

  /** 名称 */
  name?: string;

  /** 图片 */
  pic?: string;

  /**
   * 排序
   * @format int32
   */
  sort?: number;
}

export interface GoodsTagOutputDto {
  /** 前端是否展示 */
  frontShow?: boolean;

  /**
   * 商品类型 0 普通商品 1 积分商品
   * @format int32
   */
  goodsType?: number;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 名称 */
  name?: string;

  /** 图片 */
  pic?: string;

  /**
   * 排序
   * @format int32
   */
  sort?: number;
}

export interface GoodsSkuBuyerSaveDTO {
  /**
   * 订货商级别id
   * @format int64
   */
  buyerGradeId?: number;

  /**
   * 主键id修改时
   * @format int64
   */
  id?: number;

  /** 市场价 */
  marketPrice?: number;

  /** 推荐奖励 */
  rewards?: number;

  /** 销售价 */
  salesPrice?: number;

  /**
   * 积分
   * @format int32
   */
  score?: number;
}

export interface GoodsSkuBuyerDTO {
  /**
   * 订货商级别id
   * @format int64
   */
  buyerGradeId?: number;

  /**
   * 商品id 非必传
   * @format int64
   */
  goodsId?: number;

  /** 商品编号 非必传 */
  goodsNo?: string;

  /**
   * 主键id修改时
   * @format int64
   */
  id?: number;

  /** 市场价 */
  marketPrice?: number;

  /**
   * 商户id 非必传
   * @format int64
   */
  merchantId?: number;

  /** 推荐奖励 */
  rewards?: number;

  /** 销售价 */
  salesPrice?: number;

  /**
   * 积分
   * @format int32
   */
  score?: number;

  /**
   * skuid 非必传
   * @format int64
   */
  skuId?: number;

  /** sku编号 非必传 */
  skuNo?: string;

  /**
   * 状态
   * @format int32
   */
  status?: number;
}

export interface BuyerManageRequestDTO {
  /** 收益余额 */
  balance?: number;

  /**
   * 入驻类型 1：后台添加 2：用户主动升级
   * @format int32
   */
  becomeType?: number;

  /**
   * 查询开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 创建人 */
  createUser?: string;

  /** 是否删除 */
  deleted?: boolean;

  /**
   * 查询结束时间
   * @format date-time
   */
  endTime?: string;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 更新时间
   * @format date-time
   */
  gmtModified?: string;

  /**
   * 等级id
   * @format int64
   */
  gradeId?: number;

  /**
   * 主键自增编号
   * @format int32
   */
  id?: number;

  /** 用户编码 */
  memberNo?: string;

  /** 更新人 */
  modifyUser?: string;

  /** 排序字段名 */
  orderField?: string;

  /**
   * 页码
   * @format int32
   */
  pageNum?: number;

  /**
   * 分页大小
   * @format int32
   */
  pageSize?: number;

  /** 店中店状态 0 无效 1 有效 */
  shopInStatus?: boolean;

  /** 排序方式;ASC:升序DESC:降序 */
  sortEnum?: "ASC" | "DESC";

  /** 状态  0 无效 1 有效 */
  status?: boolean;

  /** 累计收益 */
  totalBalance?: number;
}

export interface BuyerManageListResponseDTO {
  /**
   * 入驻订货商时间
   * @format date-time
   */
  gmtCreated?: string;

  /** 等级名称 */
  gradeName?: string;

  /** 头像 */
  headImg?: string;

  /** 订货商id */
  id?: string;

  /** 用户编码 */
  memberNo?: string;

  /** 昵称 */
  nickName?: string;

  /** 收益余额（可提现余额） */
  settleBalance?: number;

  /**
   * 下级成员数
   * @format int32
   */
  subNumber?: number;

  /** 累计收益 */
  totalBalance?: number;

  /**
   * 总订单量
   * @format int32
   */
  totalOrderNum?: number;

  /** 收益余额（不可提现余额） */
  unsettledBalance?: number;
}

export interface BuyerManageDetailResponseDTO {
  /**
   * 入驻类型 1：后台添加 2：用户主动升级
   * @format int32
   */
  becomeType?: number;

  /**
   * 入驻订货商时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 等级Id
   * @format int32
   */
  gradeId?: number;

  /** 等级名称 */
  gradeName?: string;

  /** 头像 */
  headImg?: string;

  /** 会员编号 */
  memberNo?: string;

  /** 用户手机 */
  mobile?: string;

  /** 昵称 */
  nickName?: string;

  /** 店中店状态 0 无效 1 有效 */
  shopInStatus?: boolean;
}

export type PayNotifyUsingPOSTXmldata = string;

export interface UserAgreementAgreeDto {
  /** 用户协议类型 1：用户协议 2：会员协议 3:隐私协议 */
  agreementTypeList?: number[];
}

export interface UserAddressOutPutDto {
  /** 街道地址 */
  address?: string;

  /** 市 */
  city?: string;

  /**
   * 市id
   * @format int32
   */
  cityId?: number;

  /** 坐标 */
  coords?: string;

  /** 是否默认 */
  defaulted?: boolean;

  /** 区 */
  district?: string;

  /**
   * 区id
   * @format int32
   */
  districtId?: number;

  /**
   * 地址编号
   * @format int64
   */
  id?: number;

  /** 电话 */
  mobile?: string;

  /** 联系人姓名 */
  name?: string;

  /** 省 */
  province?: string;

  /**
   * 省份id
   * @format int32
   */
  provinceId?: number;

  /**
   * 标签 1家 2公司 3学校
   * @format int32
   */
  tag?: number;
}

export interface UserAddressModifyInputDto {
  /** 街道地址 */
  address?: string;

  /** 市 */
  city?: string;

  /**
   * 市id
   * @format int32
   */
  cityId?: number;

  /** 坐标 */
  coords?: string;

  /** 是否默认 */
  defaulted?: boolean;

  /** 区 */
  district?: string;

  /**
   * 区id
   * @format int32
   */
  districtId?: number;

  /**
   * 地址编号
   * @format int64
   */
  id?: number;

  /** 电话 */
  mobile?: string;

  /** 联系人姓名 */
  name?: string;

  /** 省 */
  province?: string;

  /**
   * 省份id
   * @format int32
   */
  provinceId?: number;

  /**
   * 标签 1家 2公司 3学校
   * @format int32
   */
  tag?: number;
}

export interface UserAddressCreateInputDto {
  /** 街道地址 */
  address?: string;

  /** 市 */
  city?: string;

  /**
   * 市id
   * @format int32
   */
  cityId?: number;

  /** 坐标 */
  coords?: string;

  /** 是否默认 */
  defaulted?: boolean;

  /** 区 */
  district?: string;

  /**
   * 区id
   * @format int32
   */
  districtId?: number;

  /** 电话 */
  mobile?: string;

  /** 联系人姓名 */
  name?: string;

  /** 省 */
  province?: string;

  /**
   * 省份id
   * @format int32
   */
  provinceId?: number;

  /**
   * 标签 1家 2公司 3学校
   * @format int32
   */
  tag?: number;
}

export interface SigninSimpleOutputDto {
  /**
   * 奖励数量
   * @format int32
   */
  num?: number;
}

export interface SigninInfoOutputDto {
  /**
   * 签到周期
   * @format int32
   */
  cycle?: number;

  /** 是否启用 */
  enabled?: boolean;

  /** 图标 */
  iconUrl?: string;

  /**
   * 奖励数量
   * @format int32
   */
  num?: number;

  /**
   * 奖励方式 1: 积分
   * @format int32
   */
  rewardType?: number;

  /** 签到状态，true：已签 */
  status?: boolean;

  /** 签到规则 */
  taskRule?: string;
}

export interface SigninDetailOutputDto {
  /**
   * 连续签到天数
   * @format int32
   */
  continuousDays?: number;

  /** 说明 */
  description?: string;

  /**
   * 奖励数量
   * @format int32
   */
  num?: number;

  /**
   * 奖励方式 1: 积分
   * @format int32
   */
  rewardType?: number;

  /** 签到状态，true：已签 */
  status?: boolean;

  /**
   * 累计签到天数
   * @format int64
   */
  totalDays?: number;

  /**
   * 累计签到积分
   * @format int64
   */
  totalScore?: number;
}

export interface ShopCartVO {
  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @format int32
   */
  activityType?: number;

  /**
   * 数量
   * @format int32
   */
  buyCounts?: number;

  /** 身份限制 */
  buyerGrades?: number[];

  /** 渠道id:直播id */
  channelId?: string;

  /** 封面图片 */
  coverImg?: string;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;
  goodsPrice?: number;

  /** @format int32 */
  goodsStock?: number;

  /** @format int32 */
  goodsType?: number;

  /**
   * 市场积分
   * @format int32
   */
  marketScore?: number;

  /** 营销活动 */
  marketingActivityList?: MarketingActivityDto[];

  /**
   * 销售积分
   * @format int32
   */
  saleScore?: number;

  /**
   * 销售方式 1:纯现金 2:纯积分 3:现金+积分
   * @format int32
   */
  saleType?: number;

  /** sku图片 */
  skuImg?: string;

  /** 市场价 */
  skuMarketPrice?: number;

  /** sku编号 */
  skuNo?: string;

  /** sku价格 */
  skuPrice?: number;

  /**
   * sku库存
   * @format int32
   */
  skuStock?: number;

  /** sku组合名称（以逗号分隔） */
  specNames?: string;

  /** 是否有效 true:有效 false:失效 */
  validity?: boolean;

  /**
   * 商品类型 0 实物商品 1 虚拟商品
   * @format int32
   */
  virtualType?: number;
}

export interface ShopCartModifyInputDto {
  /**
   * 变动数量
   * @format int32
   */
  buyCounts?: number;

  /** 渠道id:直播id */
  channelId?: string;

  /** 商品编号 */
  goodsNo?: string;

  /** 旧sku编号，切换 sku 时有值 */
  oldSkuNo?: string;

  /** sku编号 */
  skuNo?: string;
}

export interface ShopCartDeleteInputDto {
  /** 需要删除的sku编号集合 */
  delSkuNos?: string[];
}

export interface ShopCartCreateInputDto {
  /**
   * 变动数量
   * @format int32
   */
  buyCounts?: number;

  /** 渠道id:直播id */
  channelId?: string;

  /** 商品编号 */
  goodsNo?: string;

  /** sku编号 */
  skuNo?: string;
}

export interface ScoreBO {
  /**
   * 用户可用积分
   * @format int32
   */
  availableScore?: number;

  /** 积分抵扣金额 */
  discountAmount?: number;

  /**
   * 可用上限
   * @format int32
   */
  upperlimitScore?: number;

  /** 1元抵扣多少积分 */
  useIntegralAmount?: number;

  /** 积分抵扣上限 百分比 */
  useIntegralLimit?: number;

  /**
   * 下单使用积分
   * @format int32
   */
  usedScore?: number;
}

export interface RefundOrderParam {
  /** 申请退款金额 */
  applyRefundAmount?: number;

  /** 运费金额 整单退货不需要传入 */
  freightAmount?: number;

  /** 售后图片 */
  images?: string;

  /** 订单编号 */
  orderNo?: string;

  /**
   * 退货原因
   * @format int32
   */
  reason?: number;

  /** 退货原因说明 */
  reasonTxt?: string;

  /** 退款金额 */
  refundAmount?: number;

  /** 退货明细 整单退货不需要传入 */
  refundItemList?: RefundItemDto[];

  /** 售后描述 */
  refundNote?: string;

  /**
   * 售后类型 0：退款 1：退货退款
   * @format int32
   */
  refundType?: number;
}

export interface RechargeAmount {
  present?: number;
  recharge?: number;
}

export interface OrderPayDTO {
  orderAmount?: number;

  /** @format int64 */
  orderId?: number;
  orderNo?: string;
  payAmount?: number;

  /** nonceStr, packageValue, paySign, timeStamp, signType 微信支付参数 */
  payParam?: object;

  /**
   * 支付类型: 1微信支付 2支付宝支付 3线下支付 4余额
   * @format int32
   */
  payType?: number;
}

export interface OrderItemsDTO {
  /** 活动折扣 */
  activeDiscount?: number;

  /** 身份限制 */
  buyerGrades?: number[];

  /** 渠道id:直播id */
  channelId?: string;

  /** 优惠券折扣 */
  couponDiscount?: number;

  /** 优惠券ID */
  couponNo?: string;

  /** 优惠金额，所有优惠合计 */
  discountAmount?: number;

  /** 使用的兑换积分 */
  exchangeIntegral?: number;

  /**
   * 运费模板ID
   * @format int64
   */
  expressTemplateId?: number;

  /** 运费包邮减免 */
  freeShippingAmount?: number;

  /** 该明细的运费 */
  freightAmount?: number;

  /** 是否是赠品 0：否 1：是 */
  gift?: boolean;

  /**
   * 商品ID
   * @format int64
   */
  goodsId?: number;

  /** 商品图片 */
  goodsImg?: string;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;

  /** 标签列表 */
  goodsTagList?: GoodsTagDto[];

  /**
   * 商品类型 0 普通商品 1 积分商品
   * @format int32
   */
  goodsType?: number;

  /**
   * 主键
   * @format int32
   */
  id?: number;

  /** 子订单编号 */
  itemNo?: string;

  /**
   * 获得积分
   * @format int32
   */
  itemScore?: number;

  /** 活动抵扣金额 */
  itemsActiveDeduction?: number;

  /** 销售价合计 */
  itemsAmount?: number;

  /** 优惠券抵扣金额 */
  itemsCouponDeduction?: number;

  /** 使用的总兑换积分 */
  itemsExchangeIntegral?: number;

  /** 实收款 */
  itemsPayAmount?: number;

  /** 积分抵扣金额 */
  itemsPointDeduction?: number;

  /** 运费抵扣 */
  itemsShippingDeduction?: number;

  /** 会员抵扣金额 */
  itemsUserDeduction?: number;

  /** 商品市场价 */
  marketPrice?: number;

  /**
   * 订单ID
   * @format int32
   */
  orderId?: number;

  /** 订单明细的优惠明细 */
  orderItemMarketingList?: OrderItemMarketingDto[];

  /**
   * 订单项 商品类型 0：普通商品 1：赠品 2：兑换商品
   * @format int32
   */
  orderItemType?: number;

  /** 订单编号 */
  orderNo?: string;

  /**
   * 售后状态0 未申请 1 申请中 2 售后完成 3售后拒绝
   * @format int32
   */
  refundStatus?: number;

  /** 商品销售价 */
  salePrice?: number;

  /**
   * 购买数量
   * @format int32
   */
  saleQuantity?: number;

  /**
   * 销售方式 1:纯现金 2:纯积分 3:现金+积分
   * @format int32
   */
  saleType?: number;

  /**
   * 使用的抵扣积分
   * @format int32
   */
  score?: number;

  /** 是否上架 0 否 1 是 */
  shelved?: boolean;

  /**
   * 已发货数量
   * @format int32
   */
  shipingQuantity?: number;

  /**
   * 发货状态 0：未发货 1：部分发货 2:已发货
   * @format int32
   */
  shipingStatus?: number;

  /**
   * 商品SKU ID
   * @format int64
   */
  skuId?: number;

  /** sku图片 */
  skuImg?: string;

  /** 规格名称（组合） */
  skuName?: string;

  /** 商品SKU编号 */
  skuNo?: string;

  /** 是否使用积分 */
  useScore?: boolean;

  /** 会员折扣 */
  userDiscount?: number;

  /** 体积 */
  volumn?: number;

  /** 重量 */
  weight?: number;
}

export interface OrderCouponGoodsDto {
  /** 券编号 */
  couponNo?: string;

  /**
   * 优惠劵类型 0 抵扣 1 折扣 2 赠品 3 兑换 4 包邮
   * @format int32
   */
  couponType?: number;

  /** @format int64 */
  goodsId?: number;

  /** 商品图片 */
  goodsImg?: string;

  /** 商品名称 */
  goodsName?: string;
  goodsNo?: string;

  /** @format int32 */
  goodsType?: number;

  /** 商品市场价 */
  marketPrice?: number;
  salePrice?: number;

  /**
   * 购买数量为0表示已赠完
   * @format int32
   */
  saleQuantity?: number;

  /** @format int64 */
  skuId?: number;

  /** sku图片 */
  skuImg?: string;
  skuName?: string;
  skuNo?: string;
}

export interface OrderCountVO {
  /**
   * 待评价
   * @format int32
   */
  commentOrders?: number;

  /**
   * 待支付
   * @format int32
   */
  payOrders?: number;

  /**
   * 待收货
   * @format int32
   */
  receiptOrders?: number;

  /**
   * 售后
   * @format int32
   */
  refundOrders?: number;

  /**
   * 待发货
   * @format int32
   */
  shippingOrders?: number;
}

export interface OrderCommentInputDto {
  /** 商品评价 */
  goodsCommentList?: GoodsCommentInputDto[];

  /**
   * 物流评分 1~5
   * @format int32
   */
  logisticsGrade?: number;

  /** 订单编号 */
  orderNo?: string;

  /**
   * 服务评分 1~5
   * @format int32
   */
  serviceGrade?: number;
}

export interface NewcomerGiftOutputDto {
  /**
   * 赠送新人券结果 1成功 2未设置 3已领取 4部分领取失败 5全部领取失败
   * @format int32
   */
  newcomerCouponResult?: number;
}

export interface OrderCalculateResponse {
  /** 优惠券抵扣 */
  couponDeduction?: number;

  /** 礼券兑换、赠品商品列表 */
  couponGoodsItems?: OrderCouponGoodsDto[];

  /** 总优惠金额（不含运费） */
  discountAmount?: number;

  /** 运费包邮减免 */
  freeShippingAmount?: number;

  /** 抵扣后运费 */
  freightAmount?: number;

  /** 赠品 购买数量为0表示已赠完 */
  giftItemList?: OrderItemsDTO[];

  /**
   * 总件数
   * @format int32
   */
  goodNum?: number;

  /** 商品金额 */
  goodsAmount?: number;

  /** 子订单信息 */
  items?: OrderItemsDTO[];

  /** 活动列表 */
  marketingActivityList?: OrderMasterMarketingDto[];

  /** 优惠券列表 */
  memCouponVoList?: MemCouponVo[];

  /** 订单金额 */
  orderAmount?: number;

  /** 订单编号 */
  orderNo?: string;

  /** 实际支付金额 */
  payAmount?: number;

  /** 抵扣前运费 */
  realFreightAmount?: number;
  scoreBO?: ScoreBO;

  /** 总优惠金额=总优惠金额（不含运费）+抵扣运费 */
  totalDiscountAmount?: number;
}

export interface MemberOutputDto {
  /**
   * 出生年月
   * @format date-time
   */
  birthday?: string;

  /**
   * 订货商级别id
   * @format int64
   */
  buyerGradeId?: number;

  /** 订货商等级名称 */
  buyerGradeName?: string;

  /**
   * 订货商状态 0 否 1是
   * @format int32
   */
  buyerStatus?: number;

  /**
   * 禁用状态（0：否，1：是）
   * @format int32
   */
  disableStatus?: number;

  /** 性别 1男 2女 0未知 */
  gender?: string;

  /**
   * 注册时间
   * @format date-time
   */
  gmtCreated?: string;

  /** 头像 */
  headImg?: string;

  /**
   * 用户id
   * @format int64
   */
  id?: number;

  /** 用户全局唯一编号 */
  memberNo?: string;

  /**
   * 会员类型 1 普通用户 2 会员用户
   * @format int32
   */
  memberType?: number;

  /** 用户手机号 */
  mobile?: string;

  /** 昵称 */
  nickName?: string;

  /** 用户当前应用唯一标识 */
  openId?: string;

  /** 真实姓名 */
  realName?: string;

  /** 店中店名称 */
  shopInName?: string;

  /**
   * 状态 1：正常 0：禁用
   * @format int32
   */
  status?: number;
}

export interface MemStatisticsDto {
  /** 消费金额 */
  amount?: number;

  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface MemCouponVo {
  /** 适用商品、品牌、类目集合,逗号分隔 */
  acceptGoodsSet?: string;

  /** 适用商品集合扩展,逗号分隔 */
  acceptGoodsSetExtend?: string;

  /**
   * 商品适用范围 0 全商品(店铺) 1 指定商品(店铺) 2 全场(平台) 3 指定品牌(平台) 4 指定类目(平台) 5指定店铺(平台)
   * @format int32
   */
  acceptGoodsType?: number;

  /**
   * 领取类型 0 直接领取 1 后台发放 2 优惠券兑换
   * @format int32
   */
  acceptType?: number;

  /** 优惠劵名称 */
  couponName?: string;

  /** 优惠劵编号 */
  couponNo?: string;

  /**
   * 优惠劵发放id(领取类型为1必填)
   * @format int32
   */
  couponSendId?: number;

  /** 优惠劵模板编号 */
  couponTemplateNo?: string;

  /**
   * 优惠劵类型 0 抵扣 1 折扣 2 赠品 3 兑换 4 包邮
   * @format int32
   */
  couponType?: number;

  /**
   * 使用条件 0 无限制 1 满减
   * @format int32
   */
  demand?: number;

  /** 使用条件需求价格 */
  demandPrice?: number;

  /** 使用说明 */
  detail?: string;

  /** 折扣率,% */
  discount?: number;

  /**
   * 生效时间条件 0 无限制 1 指定时间 2 动态时间
   * @format int32
   */
  expireDateType?: number;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /** 适用商品集合列表 */
  goodsNoList?: string[];

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 是否是店铺优惠劵，true是，false否 */
  isStore?: boolean;

  /**
   * 领取人用户编号
   * @format int64
   */
  memberNo?: number;

  /** 价值金额 */
  price?: number;

  /** 优惠劵编号二维码 */
  qrCode?: string;

  /** 当前优惠券是否选中 */
  selected?: boolean;

  /** 店铺名称 */
  storeName?: string;

  /** 店铺编号 订单使用 */
  storeNo?: string;

  /**
   * 有效期结束
   * @format date-time
   */
  termEnd?: string;

  /**
   * 有效期开始
   * @format date-time
   */
  termStart?: string;

  /**
   * 使用时间
   * @format date-time
   */
  useDate?: string;

  /**
   * 状态 0 未使用(已过期) 1 已使用 3已作废
   * @format int32
   */
  useStatus?: number;
}

export interface MemCouponReceiveInputDto {
  /** 商品编号 */
  goodsNoList?: string[];
}

export interface MemCardRelationDto {
  /** 消费金额 */
  amount?: number;

  /**
   * id
   * @format int64
   */
  id?: number;
  memCard?: MemCardDto;

  /**
   * 会员卡id
   * @format int64
   */
  memCardId?: number;

  /**
   * 会员卡等级id
   * @format int64
   */
  memCardLevelId?: number;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface MemCardPurchaseDto {
  /**
   * 会员卡ID
   * @format int64
   */
  id?: number;
}

export interface MarketingActivityWebResultVo {
  /** 活动名称 */
  activityName?: string;

  /** 活动编号 */
  activityNo?: string;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @format int32
   */
  activityType?: number;

  /** 封面图 */
  coverImg?: string;

  /** 活动说明 */
  description?: string;

  /**
   * 活动结束时间
   * @format date-time
   */
  endTime?: string;

  /** @format int64 */
  id?: number;

  /**
   * 商户ID
   * @format int64
   */
  merchantId?: number;

  /**
   * 活动开始时间
   * @format date-time
   */
  startTime?: string;
}

export interface MarketingActivityGoodsVo {
  /** 封面图片 */
  coverImg?: string;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;

  /** 市场价 */
  marketPrice?: number;

  /** 商品价格（默认取sku最低价） */
  price?: number;
}

export interface MallConfUserTaskPerformDTO {
  /** 任务key */
  taskKey?: "firstPurchase" | "followMp" | "nil";
}

export interface MallConfUserTaskBatchPerformDTO {
  /** 任务key */
  taskKeyList?: ("firstPurchase" | "followMp" | "nil")[];
}

export interface MallConfPageSimpleOutputDto {
  /** 页面内容 */
  content?: string;

  /** 页面标题 */
  title?: string;
}

export interface ItemGoodsInfo {
  /**
   * 数量
   * @format int32
   */
  buyCounts?: number;

  /** 渠道id:直播id */
  channelId?: string;

  /** 商品编号 */
  goodsNo?: string;

  /** 规格编号 */
  skuNo?: string;

  /**
   * 虚拟商品类型 0 实物商品 1 虚拟商品
   * @format int32
   */
  virtualType?: number;
}

export interface GoodsSkuStockAndPriceVo {
  /** 活动价 */
  activityPrice?: number;

  /**
   * 活动库存
   * @format int32
   */
  activityStock?: number;

  /** 市场价 */
  marketPrice?: number;

  /**
   * 市场积分
   * @format int32
   */
  marketScore?: number;

  /**
   * 销售积分
   * @format int32
   */
  saleScore?: number;

  /** 价格 */
  salesPrice?: number;

  /** sku图片 */
  skuImg?: string;

  /** Sku编号 */
  skuNo?: string;

  /**
   * 库存
   * @format int32
   */
  stock?: number;
}

export interface GoodsQuery {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /**
   * 身份限制
   * @format int64
   */
  buyerGrade?: number;

  /** 末级分类id  二级分类 */
  classifyId?: string;

  /** 分类父id1（末级的上一级） 一级分类 */
  classifyPid1?: string;

  /** 分类父id2（分类父id1的上一级） */
  classifyPid2?: string;

  /** 查询条件 */
  condition?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /** 前台是否可见 */
  frontShow?: boolean;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;

  /** 商品编号列表 */
  goodsNoList?: string[];

  /**
   * 分组ID
   * @format int64
   */
  groupId?: number;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;

  /** 是否推荐 0 否 1 是 */
  recommendStatus?: boolean;

  /**
   * 销售方式1:纯现金 2: 纯积分 3:现金+积分
   * @format int32
   */
  saleType?: number;

  /**
   * 排序类型 1:sort 2:实际销量倒序 3:实际销量正序 4:价格倒序 5:价格正序 6：上架时间倒序 7：上架时间正序 8：积分倒序 9：积分正序,10:创建时间倒序
   * @format int32
   */
  selectSortType?: number;

  /** 是否上架 0 否 1 是 */
  shelved?: boolean;

  /** 去升级 */
  toUp?: boolean;

  /**
   * 商品类型 0 实物商品 1 虚拟商品
   * @format int32
   */
  virtualType?: number;
}

export interface GoodsCommentInputDto {
  /** 是否匿名 0 否 1 是 */
  anonym?: boolean;

  /** 评价内容 */
  content?: string;

  /**
   * 商品评分 1~5
   * @format int32
   */
  goodsGrade?: number;

  /** 评价图片，逗号分隔 */
  imgs?: string;

  /**
   * 订单项id
   * @format int64
   */
  orderItemId?: number;
}

export interface ExpressTrackRespDto {
  /** 快递公司 */
  expressCompany?: string;

  /** 快递公司编码 */
  expressCompanyCode?: string;

  /** 快递单号 */
  expressNo?: string;

  /**
   * 快递单当前状态，-1失败,0在途，1揽收，2疑难，3签收，4退签，5派件，6退回，7转投，10待清关，11清关中，12已清关，13清关异常，14拒签
   * @format int32
   */
  expressState?: number;

  /** 快递轨迹 */
  trackData?: string;

  /** 快递轨迹 */
  trackList?: ExpressTrack[];
}

export interface ExpressTrack {
  context?: string;
  ftime?: string;
}

export interface CouponCodeBindInputDto {
  /** 优惠码 */
  code?: string;
}

export interface CouponAvailableGoodsOutputDto {
  /** 商品编号列表 */
  goods?: string[];

  /**
   * 类型 0：全商品 1：指定商品
   * @format int32
   */
  type?: number;
}

export interface CollectionVo {
  /**
   * 收藏数
   * @format int32
   */
  collectionNum?: number;

  /** 封面图 */
  coverImg?: string;

  /** 商品名称 */
  goodsName?: string;

  /** 市场价 */
  marketPrice?: number;

  /** 收藏编号 */
  relationalNo?: string;

  /** 销售价 */
  salePrice?: number;

  /**
   * 状态 1：正常 0：删除、下架
   * @format int32
   */
  status?: number;
}

export interface CollectionCreateInputDto {
  /** 收藏编号 */
  relationalNo?: string;
}

export interface CalculateOrderContext {
  /**
   * 收货地址id
   * @format int64
   */
  addressId?: number;

  /** 优惠劵编号 不使用优惠券可传[NOSELECT] */
  couponNo?: string;

  /** 兑换礼券号 */
  exchangeCouponNo?: string;

  /** 包邮礼券号 */
  freeShippingCouponNo?: string;

  /** 赠品礼券号 */
  giftCouponNo?: string;

  /**
   * 商品类型 0：普通商品 1：积分商品
   * @format int32
   */
  goodsType?: number;

  /**
   * 参团记录ID(参团必传)
   * @format int64
   */
  groupRecordId?: number;

  /** 商品信息 */
  itemGoodsInfoList?: ItemGoodsInfo[];

  /**
   * 会员卡ID -1：不使用会员卡 0或null：以最优价格使用会员卡 大于0：会员卡ID
   * @format int64
   */
  memCardId?: number;

  /** 订单渠道 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

  /**
   * 拼团成团人数(阶梯团必传)
   * @format int32
   */
  orderGroupNumber?: number;

  /**
   * 订单类型 1 常规订单 2 限时抢购 3 积分商品订单 4 预售商品订单 5 拼团订单
   * @format int32
   */
  orderType?: number;

  /**
   * 支付类型: 1：微信支付 2：支付宝支付 3：线下支付 4：余额
   * @format int32
   */
  payType?: number;
  scoreBO?: ScoreBO;

  /** 是否自提 0快递，1自提 */
  selfPicked?: boolean;

  /**
   * 下单类型 0直接下单 1购物车下单
   * @format int32
   */
  type?: number;

  /** 买家留言 */
  userComments?: string;
}

export interface BannerPositionOutputDto {
  /**
   * id
   * @format int64
   */
  id?: number;

  /** 图片地址 */
  imgUrl?: string;

  /** 名称 */
  name?: string;

  /** 跳转地址 */
  url?: string;

  /**
   * 跳转类型
   * @format int32
   */
  urlType?: number;
}

export interface AddCommentsDTO {
  /**
   * 评价ID
   * @format int64
   */
  commentsId?: number;

  /** 评价内容 */
  content?: string;

  /** 评价图片，逗号分隔 */
  imgs?: string;
}

export interface BalanceRechargeInputDto {
  /**
   * 支付方式 1：微信 2：支付宝
   * @format int32
   */
  payType?: number;

  /** 赠送金额 */
  presentBalance?: number;

  /** 充值金额 */
  rechargeBalance?: number;

  /** 充值备注 */
  remark?: string;
}

export interface UserRolesDto {
  roleIds?: number[];

  /** @format int64 */
  userId?: number;
}

export interface UserAgreementRecordDto {
  /** 协议编号 */
  agreementNo?: string;

  /** 创建人 */
  createUser?: string;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 修改时间
   * @format date-time
   */
  gmtModified?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 手机号 */
  mobile?: string;

  /** 修改人 */
  modifyUser?: string;

  /** 说明文本 */
  richTextContent?: string;

  /**
   * 用户协议类型 1：用户协议 2：会员协议
   * @format int32
   */
  type?: number;
}

export interface UserChangeStatusInputDto {
  /**
   * 用户id
   * @format int64
   */
  id?: number;

  /**
   * 状态 1：正常 0：禁用
   * @format int32
   */
  status?: number;
}

export interface UserAgreeRecordDto {
  /**
   * 同意时间
   * @format date-time
   */
  agreeTime?: string;

  /** 协议编号 */
  agreementNo?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * 用户协议类型 1：用户协议 2：会员协议 3：隐私协议
   * @format int32
   */
  type?: number;

  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface UnlimitedInputDto {
  /** 是否透明底色 */
  hyaline?: boolean;

  /** 页面 */
  page?: string;
  scene?: string;

  /** 版本 */
  version?: string;
}

export interface SysUserModifyInputDto {
  /** 部门ID集合 */
  deptIds?: number[];

  /** 邮箱 */
  email?: string;

  /**
   * 员工id
   * @format int64
   */
  id?: number;

  /** 电话 */
  mobile?: string;

  /** 角色id集合 */
  roleIds?: number[];

  /** 用户名 */
  username?: string;
}

export interface SysUserVo {
  /** 绑定的部门ID["部门ID","部门ID"] 部门ID必须双引号包裹 */
  deptIds?: string;

  /** 所属部门 */
  deptNames?: string;

  /** 邮箱 */
  email?: string;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 电话 */
  mobile?: string;

  /** 绑定的角色ID["角色id","角色id"] 角色id必须双引号包裹  */
  roleIds?: string;

  /** 所属角色 */
  roleNames?: string;

  /**
   * 状态 1：正常 0：禁用
   * @format int32
   */
  status?: number;

  /** 用户名 */
  username?: string;
}

export interface TreeResourceVo {
  /** 子资源集合 */
  children?: TreeResourceVo[];

  /** 资源代码 */
  code?: string;

  /** 图标，为菜单时不空 */
  icon?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** key */
  key?: string;

  /** 备注 */
  memo?: string;

  /** 请求方式，为接口时不为空 */
  method?: string;

  /** 资源名称 */
  name?: string;

  /**
   * 上级ID
   * @format int64
   */
  parentId?: number;

  /** 访问地址，为按钮时可为空 */
  path?: string;

  /**
   * 优先级
   * @format int32
   */
  sortNum?: number;

  /** 标题 */
  title?: string;

  /**
   * 资源类型|0:菜单,1:按钮,2:接口
   * @format int32
   */
  type?: number;

  /** 是否可见 */
  visible?: boolean;
}

export interface SysRoleModifyInputDto {
  /** 描述 */
  description?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 角色名 */
  name?: string;

  /** 资源 id 集合 */
  resourceIds?: number[];
}

export interface SysRoleSelectOutputDto {
  /**
   * id
   * @format int64
   */
  id?: number;

  /** 角色名称 */
  name?: string;
}

export interface SysUserCreateInputDto {
  /** 部门ID集合 */
  deptIds?: number[];

  /** 邮箱 */
  email?: string;

  /** 电话 */
  mobile?: string;

  /** 角色id集合 */
  roleIds?: number[];

  /** 用户名 */
  username?: string;
}

export interface SysRoleOutputDto {
  /** 角色权限标识 */
  authority?: string;

  /** 描述 */
  description?: string;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 角色名称 */
  name?: string;

  /**
   * 员工数量
   * @format int64
   */
  userNum?: number;
}

export interface SysRoleDetailOutputDto {
  /** 接口集合 */
  apiIds?: number[];

  /** 角色权限标识 */
  authority?: string;

  /** 按钮集合 */
  buttonIds?: number[];

  /** 描述 */
  description?: string;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 菜单集合 */
  menuIds?: number[];

  /** 角色名称 */
  name?: string;

  /**
   * 员工数量
   * @format int64
   */
  userNum?: number;
}

export interface SysRoleCreateInputDto {
  /** 描述 */
  description?: string;

  /** 角色名 */
  name?: string;

  /** 资源 id 集合 */
  resourceIds?: number[];
}

export interface SysResourceRes {
  /** 资源代码 */
  code?: string;
  createUser?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** 图标，为菜单时不空 */
  icon?: string;

  /** @format int64 */
  id?: number;

  /** 备注 */
  memo?: string;

  /** 请求方式，为接口时不为空 */
  method?: string;
  modified?: boolean;
  modifyUser?: string;

  /**
   * 父级资源ID，资源类型只能为菜单
   * @format int64
   */
  parentId?: number;

  /** 访问地址，为按钮时可为空 */
  path?: string;

  /**
   * 排序号
   * @format int32
   */
  sortNum?: number;

  /** @format int32 */
  status?: number;

  /** 资源名称 */
  title?: string;
  transient?: boolean;

  /**
   * 资源类型|0:菜单,1:按钮,2:接口
   * @format int32
   */
  type?: number;

  /** 是否可见 */
  visible?: boolean;
}

export interface SysRole {
  authority?: string;
  createUser?: string;
  deleted?: boolean;
  description?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;
  modified?: boolean;
  modifyUser?: string;
  name?: string;

  /** @format int32 */
  status?: number;
  transient?: boolean;
}

export interface SysResourceReq {
  /** 资源代码 */
  code?: string;
  createUser?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** 图标，为菜单时不空 */
  icon?: string;

  /** @format int64 */
  id?: number;

  /** 备注 */
  memo?: string;

  /** 请求方式，为接口时不为空 */
  method?: string;
  modifyUser?: string;

  /**
   * 父级资源ID，资源类型只能为菜单
   * @format int64
   */
  parentId?: number;

  /** 访问地址，为按钮时可为空 */
  path?: string;

  /**
   * 排序号
   * @format int32
   */
  sortNum?: number;

  /** @format int32 */
  status?: number;

  /** 资源名称 */
  title?: string;

  /**
   * 资源类型|0:菜单,1:按钮,2:接口
   * @format int32
   */
  type?: number;

  /** 是否可见 */
  visible?: boolean;
}

export interface SysDeptVo {
  /** 子部门 */
  children?: SysDeptVo[];

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 部门名称 */
  name?: string;

  /**
   * pid
   * @format int64
   */
  pid?: number;

  /**
   * 员工数量
   * @format int32
   */
  userNum?: number;
}

export interface SysResource {
  /** 资源代码 */
  code?: string;
  createUser?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** 图标，为菜单时不空 */
  icon?: string;

  /** @format int64 */
  id?: number;

  /** 备注 */
  memo?: string;

  /** 请求方式，为接口时不为空 */
  method?: string;
  modified?: boolean;
  modifyUser?: string;

  /**
   * 父级资源ID，资源类型只能为菜单
   * @format int64
   */
  parentId?: number;

  /** 访问地址，为按钮时可为空 */
  path?: string;

  /**
   * 排序号
   * @format int32
   */
  sortNum?: number;

  /** @format int32 */
  status?: number;

  /** 资源名称 */
  title?: string;
  transient?: boolean;

  /**
   * 资源类型|0:菜单,1:按钮,2:接口
   * @format int32
   */
  type?: number;

  /** 是否可见 */
  visible?: boolean;
}

export interface SysDeptModifyInputDto {
  /**
   * 部门id
   * @format int64
   */
  id?: number;

  /** 部门名称 */
  name?: string;

  /**
   * 上级ID，不传默认0
   * @format int64
   */
  pid?: number;
}

export interface SysDeptCreateInputDto {
  /** 部门名称 */
  name?: string;

  /**
   * 上级ID，不传默认0
   * @format int64
   */
  pid?: number;
}

export interface SysAuthVo {
  /** 登录人有权限的接口 */
  apis?: SysResource[];

  /** 登录人有权限的按钮 */
  buttons?: string[];

  /** 登录人邮箱 */
  email?: string;

  /** 登录人有权限的菜单（树状） */
  menusTree?: TreeResourceVo[];

  /** 手机号 */
  mobile?: string;

  /**
   * id
   * @format int64
   */
  userId?: number;

  /** 登录人名称 */
  username?: string;
}

export interface SysApiRes {
  createUser?: string;

  /** 描述 */
  description?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 请求方式 */
  method?: string;
  modified?: boolean;
  modifyUser?: string;

  /** @format int32 */
  status?: number;
  transient?: boolean;

  /** 请求uri */
  uri?: string;
}

export interface SysApiReq {
  createUser?: string;

  /** 描述 */
  description?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 请求方式 */
  method?: string;
  modifyUser?: string;

  /** @format int32 */
  status?: number;

  /** 请求uri */
  uri?: string;
}

export interface StatusDto {
  /**
   * id 不能为空
   * @format int64
   */
  id?: number;

  /** 开关状态 */
  status?: boolean;
}

export interface StatisticsGraphOutputDto {
  /** 总计 */
  count?: object;

  /** 数据 */
  series?: StatisticsGraphDataOutputDto[];
}

export interface StatisticsCountOutputDto {
  /**
   * 今日成交订单量
   * @format int64
   */
  orderCount?: number;

  /** 成交客单价 */
  perCustomerTransaction?: number;

  /**
   * 售后订单数
   * @format int64
   */
  refundOrderCount?: number;

  /** 今日营业额 */
  saleAmount?: number;

  /**
   * 新增用户数
   * @format int64
   */
  userCount?: number;
}

export interface StatisticsGraphDataOutputDto {
  label?: string;
  value?: object;
}

export interface SkuStockAndPriceUpdateDto {
  /** 商品编号 */
  goodsNo?: string;

  /**
   * 积分
   * @format int32
   */
  saleScore?: number;

  /** 现价 */
  salesPrice?: number;

  /** sku编号 */
  skuNo?: string;

  /**
   * 库存数量
   * @format int32
   */
  stock?: number;
}

export interface SigninTaskOutputDto {
  /**
   * 签到周期
   * @format int32
   */
  cycle?: number;

  /** 说明 */
  description?: string;

  /** 是否启用 */
  enabled?: boolean;

  /** 图标 */
  iconUrl?: string;

  /**
   * 奖励数量
   * @format int32
   */
  num?: number;

  /**
   * 奖励方式 1: 积分
   * @format int32
   */
  rewardType?: number;

  /**
   * 签到方式 1：自动签到 2：手动签到
   * @format int32
   */
  type?: number;
}

export interface SigninTaskInputDto {
  /**
   * 签到周期
   * @format int32
   */
  cycle?: number;

  /** 说明 */
  description?: string;

  /** 是否启用 */
  enabled?: boolean;

  /** 图标 */
  iconUrl?: string;

  /**
   * 奖励数量
   * @format int32
   */
  num?: number;

  /**
   * 奖励方式 1: 积分
   * @format int32
   */
  rewardType?: number;

  /**
   * 签到方式 1：自动签到 2：手动签到
   * @format int32
   */
  type?: number;
}

export interface ShowDto {
  /**
   * id
   * @format int64
   */
  id?: number;

  /** 是否显示 */
  show?: boolean;
}

export interface ShipInfoParam {
  /** 快递公司名称 */
  expressCompany?: string;

  /** 快递公司编码 */
  expressCompanyCode?: string;

  /** 快递单号 */
  expressNo?: string;

  /** 是否拆单 修改物流时不需要传 */
  isSplit?: boolean;

  /** 原快递单号 修改物流时必须传入 */
  oldExpressNo?: string;

  /** 订单号 */
  orderNo?: string;

  /** 发货明细 修改物流时不需要传 */
  shippingItemList?: OrderShippingItemDto[];

  /**
   * 配送方式 0：商家配送 1：无需物流
   * @format int32
   */
  shippingMethod?: number;
}

export interface ScoreGetOutputDto {
  /**
   * 可用积分
   * @format int32
   */
  availableScore?: number;

  /**
   * 冻结积分
   * @format int32
   */
  frozenScore?: number;

  /**
   * 累计积分
   * @format int32
   */
  totalScore?: number;

  /**
   * 待结算积分
   * @format int32
   */
  unsettledScore?: number;
}

export interface ScoreFlowOutputDto {
  /** 微盟变更类型 */
  changeType?: string;

  /** 操作人 */
  createUser?: string;

  /** 说明 */
  description?: string;

  /**
   * 使用时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 积分的增加方式 1：后台增加 2：购买商品 3：订单退回
   * @format int32
   */
  plusType?: number;

  /** 关联单号 */
  relNo?: string;

  /**
   * 使用积分
   * @format int32
   */
  score?: number;

  /** 来源 */
  sourceText?: string;

  /**
   * 积分的扣除方式 1：后台扣减 2：积分商品抵扣
   * @format int32
   */
  subtractType?: number;

  /**
   * 用户Id
   * @format int64
   */
  userId?: number;
}

export interface ScoreChangeInputDto {
  /** 备注 */
  description?: string;

  /**
   * 用户id
   * @format int64
   */
  id?: number;

  /** 是否增加 */
  isPlus?: boolean;

  /**
   * 积分
   * @format int32
   */
  score?: number;
}

export interface RoleResourceSaveDto {
  resourceIds?: number[];

  /** @format int64 */
  roleId?: number;
}

export interface ResourceDetailVo {
  /** 关联的API列表 */
  apis?: SysApiRes[];

  /**
   * 子菜单数量
   * @format int32
   */
  childrenMenuCnt?: number;

  /** 代码 */
  code?: string;

  /** 图标 */
  icon?: string;

  /**
   * ID
   * @format int64
   */
  id?: number;

  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;

  /** 路由 */
  path?: string;

  /**
   * 排序号
   * @format int32
   */
  sortNum?: number;

  /** 描述 */
  title?: string;

  /**
   * 类型
   * @format int32
   */
  type?: number;

  /** 是否显示 */
  visible?: boolean;
}

export interface RichText {
  content?: string;
  createUser?: string;

  /** @format int32 */
  dataId?: number;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;
  modifyUser?: string;

  /** @format int32 */
  status?: number;
}

export interface ResourceUpdateDto {
  /** 关联的API列表 */
  apis?: SysApiReq[];

  /** 图标 */
  icon?: string;

  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;

  /** 路由路径 */
  path?: string;

  /**
   * 排序号
   * @format int32
   */
  sortNum?: number;

  /** 描述 */
  title?: string;

  /** 是否显示 */
  visible?: boolean;
}

export interface ResourceCreateDto {
  /** 关联的API列表 */
  apis?: SysApiReq[];

  /** 代码 */
  code?: string;

  /** 图标 */
  icon?: string;

  /** 备注 */
  memo?: string;

  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;

  /** 路由地址 */
  path?: string;

  /**
   * 排序号
   * @format int32
   */
  sortNum?: number;

  /** 描述 */
  title?: string;

  /**
   * 资源类型
   * @format int32
   */
  type?: number;

  /** 是否显示 */
  visible?: boolean;
}

export interface ResetPwdDto {
  /** 新密码 */
  newPassword?: string;

  /** 原密码 */
  password?: string;
}

export interface ReplyCommentsDto {
  /**
   * 评价id
   * @format int64
   */
  commentsId?: number;

  /** 回复内容 */
  replyContent?: string;
}

export interface RefundRefuseParam {
  /** 售后单编号 */
  refundNo?: string;

  /** 处理备注 */
  storeNote?: string;
}

export interface RefundShippingParam {
  /** 快递公司名称 */
  expressCompany?: string;

  /** 快递公司编码 */
  expressCompanyCode?: string;

  /** 快递单号 */
  expressNo?: string;

  /** 售后单编号 */
  refundNo?: string;
}

export interface RefundReasonOutputDto {
  /** 创建人(后台管理员ID) */
  createUser?: string;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 修改时间
   * @format date-time
   */
  gmtModified?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 修改人(后台管理员ID) */
  modifyUser?: string;

  /** 售后原因 */
  name?: string;

  /**
   * 排序、降序
   * @format int32
   */
  sort?: number;

  /**
   * 数据状态 0 无效 1 有效
   * @format int32
   */
  status?: number;

  /** 适用场景 0 仅退款 未收到货 1 仅退款 已收到货 2 退货退款,多个逗号分隔 */
  type?: string;
}

export interface RefundReasonModifyInputDto {
  /**
   * id
   * @format int64
   */
  id?: number;

  /** 售后原因 */
  name?: string;

  /**
   * 排序、降序
   * @format int32
   */
  sort?: number;

  /** 适用场景 0 仅退款 未收到货 1 仅退款 已收到货 2 退货退款,多个逗号分隔 */
  type?: string;
}

export interface RefundReasonCreateInputDto {
  /** 售后原因 */
  name?: string;

  /**
   * 排序、降序
   * @format int32
   */
  sort?: number;

  /** 适用场景 0 仅退款 未收到货 1 仅退款 已收到货 2 退货退款,多个逗号分隔 */
  type?: string;
}

export interface RefundMasterDto {
  /** 是否整单售后 */
  allSave?: boolean;

  /** 申请退运费金额 */
  applyFreightAmount?: number;

  /** 申请退款金额 */
  applyRefundAmount?: number;

  /**
   * 退款申请时间
   * @format date-time
   */
  applyTime?: string;

  /** 区域名 */
  areaName?: string;

  /** 城市名 */
  cityName?: string;

  /** 验货处理人 */
  completePerson?: string;

  /**
   * 处理结果 0：未处理 1：已退款 2：拒绝退款
   * @format int32
   */
  completeResult?: number;

  /**
   * 退款完成时间
   * @format date-time
   */
  completeTime?: string;

  /** 退货物流公司 */
  expressCompany?: string;

  /** 退货物流公司编码 */
  expressCompanyCode?: string;

  /** 退货快递单号 */
  expressNo?: string;

  /** 退款运费金额 */
  freightAmount?: number;

  /**
   * 运费状态 1:不可退运费 0:可退运费
   * @format int32
   */
  freightState?: number;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 最后修改时间
   * @format date-time
   */
  gmtModified?: string;

  /** 售后图片 */
  images?: string;

  /** 会员编号 */
  memberNo?: string;

  /**
   * 商户ID
   * @format int64
   */
  merchantId?: number;

  /** 手机号 */
  mobile?: string;

  /** 最后修改人 */
  modifyUser?: string;

  /** 联系人姓名 */
  name?: string;

  /** 订单渠道 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

  /** 订单运费金额 */
  orderFreightAmount?: number;

  /** 订单编号 */
  orderNo?: string;

  /** 订单支付金额 */
  orderPaymentAmount?: number;

  /**
   * 订单状态
   * @format int32
   */
  orderStatus?: number;

  /**
   * 支付类型
   * @format int32
   */
  payType?: number;

  /** 验货处理说明 */
  processCheckNote?: string;

  /**
   * 处理验货时间
   * @format date-time
   */
  processCheckTime?: string;

  /** 退款处理人 */
  processPerson?: string;

  /**
   * 处理结果 0：未处理 1：已退款 2：拒绝退款
   * @format int32
   */
  processResult?: number;

  /**
   * 商家处理时间
   * @format date-time
   */
  processTime?: string;

  /** 省份名 */
  provinceName?: string;

  /** 实际支付金额 */
  realAmount?: number;

  /**
   * 退货原因
   * @format int32
   */
  reason?: number;

  /** 退货原因说明 */
  reasonTxt?: string;

  /** 退款金额 */
  refundAmount?: number;

  /** 审核记录 */
  refundAuditRecordList?: RefundAuditRecordDto[];

  /** 微信退款单号 */
  refundId?: string;

  /** 售后明细 */
  refundItemList?: RefundItemDto[];

  /** 售后单编号 */
  refundNo?: string;

  /** 售后描述 */
  refundNote?: string;

  /**
   * 售后状态 待审核_900 未通过_990 已退款_930 待退货_910 待验货_920 验货不通过_991
   * @format int32
   */
  refundStatus?: number;

  /**
   * 售后类型 0：退款 1：退货退款
   * @format int32
   */
  refundType?: number;

  /**
   * 买家退货时间
   * @format date-time
   */
  returnTime?: string;

  /** 详细地址 */
  singleAddress?: string;

  /** 处理备注 */
  storeNote?: string;

  /** 微信支付交易流水号 */
  transactionId?: string;

  /**
   * 会员ID
   * @format int64
   */
  userId?: number;

  /** 会员手机号 */
  userMobile?: string;

  /** 会员姓名 */
  userName?: string;
}

export interface RefundAgreeParam {
  /** 区域名 */
  areaName?: string;

  /** 城市名 */
  cityName?: string;

  /** 运费金额 */
  freightAmount?: number;

  /** 手机号 */
  mobile?: string;

  /** 联系人姓名 */
  name?: string;

  /** 省份名 */
  provinceName?: string;

  /** 退款金额 */
  refundAmount?: number;

  /** 退货明细 整单退货不需要传入 */
  refundItemList?: RefundAgreeItemDto[];

  /** 售后单编号 */
  refundNo?: string;

  /** 详细地址 */
  singleAddress?: string;

  /** 处理备注 */
  storeNote?: string;
}

export interface RefundCheckParam {
  /** 运费金额 */
  freightAmount?: number;

  /** 退款金额 */
  refundAmount?: number;

  /** 退货明细 整单退货不需要传入 */
  refundItemList?: RefundAgreeItemDto[];

  /** 售后单编号 */
  refundNo?: string;

  /** 处理备注 */
  storeNote?: string;
}

export interface RefundItemDto {
  /** 申请退款金额 */
  applyRefundAmount?: number;

  /**
   * 申请退回积分
   * @format int32
   */
  applyRefundScore?: number;

  /** 商品图片 */
  goodsImg?: string;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编码 */
  goodsNo?: string;

  /** 商品价格 */
  goodsPrice?: number;

  /**
   * 货物状态 0：未收到货 1：部分收货 2:已收到货
   * @format int32
   */
  goodsStatus?: number;

  /** 售后图片 */
  images?: string;

  /**
   * 商户ID
   * @format int32
   */
  merchantId?: number;

  /** 规格 */
  model?: string;

  /**
   * 订单项 商品类型 0：普通商品 1：赠品 2：兑换商品 3：赠品券
   * @format int32
   */
  orderItemType?: number;

  /** 订单编号 */
  orderNo?: string;

  /** 实际支付金额 */
  realAmount?: number;

  /** 退款金额 */
  refundAmount?: number;

  /** 售后单编号 */
  refundNo?: string;

  /** 售后描述 */
  refundNote?: string;

  /**
   * 退货数量
   * @format int32
   */
  refundQuantity?: number;

  /**
   * 退回积分
   * @format int32
   */
  refundScore?: number;

  /**
   * 销售方式 1:纯现金 2:纯积分 3:现金+积分
   * @format int32
   */
  saleType?: number;

  /** sku图片 */
  skuImg?: string;

  /** SKU编码 */
  skuNo?: string;
}

export interface PromotionCondition {
  /** 优惠条件 N件/N元 */
  con?: number;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 (满赠必传) */
  goodsNo?: string;

  /** 优惠金额/折扣 (满减满折必传)/赠品数量(满赠必传) */
  promo?: number;

  /** sku名称 */
  skuName?: string;

  /** sku编号(满赠必传) */
  skuNo?: string;
}

export interface RefundAgreeItemDto {
  /** 商品编码 */
  goodsNo?: string;

  /** 退款金额 */
  refundAmount?: number;

  /**
   * 积分
   * @format int32
   */
  refundScore?: number;

  /** SKU编码 */
  skuNo?: string;
}

export interface PopupAdsUpdateDto {
  /**
   * 每日展示次数
   * @format int32
   */
  dailyShowNumber?: number;

  /** 是否删除 */
  deleted?: boolean;

  /**
   * 到期时间
   * @format date-time
   */
  expirationTime?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 图片链接 */
  imgUrl?: string;

  /** 是否显示 */
  show?: boolean;

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /** 标题 */
  title?: string;

  /** 外链地址 */
  url?: string;
}

export interface PopupAdsSaveDto {
  /**
   * 每日展示次数
   * @format int32
   */
  dailyShowNumber?: number;

  /** 是否删除 */
  deleted?: boolean;

  /**
   * 到期时间
   * @format date-time
   */
  expirationTime?: string;

  /** 图片链接 */
  imgUrl?: string;

  /** 是否显示 */
  show?: boolean;

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /** 标题 */
  title?: string;

  /** 外链地址 */
  url?: string;
}

export interface PopupAdsDto {
  /**
   * 每日展示次数
   * @format int32
   */
  dailyShowNumber?: number;

  /** 是否删除 */
  deleted?: boolean;

  /**
   * 到期时间
   * @format date-time
   */
  expirationTime?: string;

  /**
   * 更新时间
   * @format date-time
   */
  gmtModified?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 图片链接 */
  imgUrl?: string;

  /** 是否显示 */
  show?: boolean;

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /** 标题 */
  title?: string;

  /** 外链地址 */
  url?: string;
}

export interface OrderVO {
  allDiscountAmount?: number;

  /**
   * 订货商级别id
   * @format int64
   */
  buyerGradeId?: number;

  /** 订货商等级名称(会员类型) */
  buyerGradeName?: string;

  /** 关闭售后 0：否 1：是 */
  closeRefund?: boolean;

  /**
   * 关闭时间
   * @format date-time
   */
  closedAt?: string;

  /** 关闭原因 */
  closedReason?: string;

  /** 是否评价 */
  comment?: boolean;

  /**
   * 评论时间
   * @format date-time
   */
  commentAt?: string;

  /** 优惠金额 */
  discountAmount?: number;

  /** 返佣明细列表 */
  earningRecordList?: EarningRecordOutputDto[];

  /** 兑换积分 */
  exchangeIntegral?: number;

  /** 是否完成 0否 1是 */
  finish?: boolean;

  /** 运费包邮减免 */
  freeShippingAmount?: number;

  /** 抵扣后运费 */
  freightAmount?: number;

  /**
   * 订单创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /** 商品金额 */
  goodsAmount?: number;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 子订单信息 */
  items?: OrderItemsVO[];

  /**
   * 物流状态 0未发货 1已发货 2已收获
   * @format int32
   */
  logisticsStatus?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @format int32
   */
  marketingType?: number;

  /** 用户编号 */
  memberNo?: string;

  /** 订单金额/应付金额 */
  orderAmount?: number;

  /** 订单渠道 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

  /**
   * 获得积分
   * @format int32
   */
  orderIntegral?: number;

  /** 订单的优惠明细 */
  orderMasterMarketingList?: OrderMasterMarketingDto[];

  /** 订单编号 */
  orderNo?: string;

  /** 订单备注 */
  orderNote?: string;

  /**
   * 订单状态 0交易中 1交易成功-1 交易关闭
   * @format int32
   */
  orderStatus?: number;

  /** 订单状态名称 */
  orderStatusName?: string;

  /**
   * 订单类型
   * @format int32
   */
  orderType?: number;

  /** 已支付金额，第三方支付工具回调 */
  paidAmount?: number;

  /** 实际支付金额 */
  payAmount?: number;

  /**
   * 支付时间
   * @format date-time
   */
  payAt?: string;

  /**
   * 结束支付时间
   * @format date-time
   */
  payEndAt?: string;

  /**
   * 0 未支付 1 支付成功 -1支付失败
   * @format int32
   */
  payStatus?: number;

  /**
   * 支付类型: 1微信支付 2支付宝支付 3线下支付 4余额
   * @format int32
   */
  payType?: number;

  /** 抵扣前运费 */
  realFreightAmount?: number;

  /**
   * 确认收货时间
   * @format date-time
   */
  receiptAt?: string;

  /**
   * 售后状态 0无售后 1有售后
   * @format int32
   */
  refundStatus?: number;

  /** 积分比例 */
  scoreProportion?: number;

  /** 0快递，1自提 */
  selfPicked?: boolean;

  /** 收件人详细地址 */
  shippingAddress?: string;

  /**
   * 发货时间
   * @format date-time
   */
  shippingAt?: string;

  /** 收件人市 */
  shippingCity?: string;

  /** 收件人区 */
  shippingDistrict?: string;

  /** 订单发货信息 */
  shippingList?: OrderShippingDto[];

  /** 收货人电话 */
  shippingMobile?: string;

  /**
   * 收货地址修改次数
   * @format int32
   */
  shippingModifyCount?: number;

  /** 收货人 */
  shippingName?: string;

  /** 收件人省份 */
  shippingProvince?: string;

  /**
   * 统一状态
   * @format int32
   */
  status?: number;

  /**
   * 下单使用的总积分
   * @format int32
   */
  totalScore?: number;

  /** 微信支付交易流水号 */
  transactionId?: string;

  /** 买家留言 */
  userComments?: string;

  /**
   * 会员ID
   * @format int64
   */
  userId?: number;

  /** 会员手机号 */
  userMobile?: string;

  /** 会员姓名 */
  userName?: string;

  /**
   * 商品类型 0实物商品 1虚拟商品
   * @format int32
   */
  virtualType?: number;
}

export interface OrderShippingItemDto {
  /** 商品图片 */
  goodsImg?: string;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编码 */
  goodsNo?: string;

  /** 规格 */
  model?: string;

  /**
   * 订单明细ID
   * @format int64
   */
  orderItemId?: number;

  /**
   * 数量
   * @format int32
   */
  quantity?: number;

  /** sku图片 */
  skuImg?: string;

  /** SKU编码 */
  skuNo?: string;
}

export interface OrderShippingDto {
  /** 收货人手机 */
  consigneeMobile?: string;

  /** 快递公司名称 */
  expressCompany?: string;

  /** 快递公司编码 */
  expressCompanyCode?: string;

  /** 快递单号 */
  expressNo?: string;

  /** 会员编号 */
  memberNo?: string;

  /** 订单编号 */
  orderNo?: string;

  /** 发货明细 */
  orderShippingItemDtoList?: OrderShippingItemDto[];

  /**
   * 收货时间
   * @format date-time
   */
  receivingTime?: string;

  /**
   * 发货时间
   * @format date-time
   */
  shippingTime?: string;

  /**
   * 发货类型 0：订单 1：售后
   * @format int32
   */
  shippingType?: number;

  /** 店铺编号 */
  storeNo?: string;
}

export interface OrderMasterMarketingDto {
  /** （下单时有值）优惠条件 N件/N元 */
  con?: number;
  couponTemplateVo?: CouponTemplateVo;

  /** 优惠比例 */
  discount?: number;

  /** 总优惠金额 */
  discountAmount?: number;

  /**
   * 优惠类型 0 抵扣 1 折扣 2 活动价 3 抵扣运费
   * @format int32
   */
  discountType?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @format int32
   */
  marketingType?: number;

  /** @format int64 */
  merchantId?: number;

  /** 订单编号 */
  orderNo?: string;

  /** 优惠金额(促销类型为积分时些值为使用的积分数量) */
  price?: number;

  /** （下单时有值）优惠金额/折扣 (满减满折)/赠品数量(满赠) */
  promo?: number;

  /**
   * （下单时有值）优惠条件类型 0：满N件 1：满N元
   * @format int32
   */
  promotionConditionType?: number;

  /**
   * （下单时有值）优惠类型 0：阶梯优惠 1：循环优惠
   * @format int32
   */
  promotionType?: number;

  /** 优惠券或活动名称 */
  relName?: string;

  /** 优惠券或活动编号 */
  relNo?: string;

  /** 发货时间 */
  shippingTime?: string;

  /**
   * 发货时间 0：固定时间 1：付款后X天
   * @format int32
   */
  shippingTimeType?: number;
}

export interface OrderItemsVO {
  /** 活动折扣 */
  activeDiscount?: number;

  /** 渠道id:直播id */
  channelId?: string;

  /** 优惠券折扣 */
  couponDiscount?: number;

  /** 礼券编号 */
  couponNo?: string;

  /** 优惠金额，所有优惠合计 */
  discountAmount?: number;

  /** 优惠文本 */
  discountAmountStr?: string;

  /** 使用的兑换积分 */
  exchangeIntegral?: number;

  /** 运费包邮减免 */
  freeShippingAmount?: number;

  /** 该明细的运费 */
  freightAmount?: number;

  /** 是否是赠品 0：否 1：是 */
  gift?: boolean;

  /**
   * 商品ID
   * @format int64
   */
  goodsId?: number;

  /** 商品图片 */
  goodsImg?: string;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;

  /**
   * 商品类型 0 普通商品 1 积分商品
   * @format int32
   */
  goodsType?: number;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 子订单编号 */
  itemNo?: string;

  /**
   * 获得积分
   * @format int32
   */
  itemScore?: number;

  /** 活动抵扣金额 */
  itemsActiveDeduction?: number;

  /** 销售价合计 */
  itemsAmount?: number;

  /** 优惠券抵扣金额 */
  itemsCouponDeduction?: number;

  /** 使用的总兑换积分 */
  itemsExchangeIntegral?: number;

  /** 实收款 */
  itemsPayAmount?: number;

  /** 实收款文本 */
  itemsPayAmountStr?: string;

  /** 积分抵扣金额 */
  itemsPointDeduction?: number;

  /** 运费抵扣 */
  itemsShippingDeduction?: number;

  /** 会员抵扣金额 */
  itemsUserDeduction?: number;

  /** 商品市场价 */
  marketPrice?: number;

  /**
   * 订单ID
   * @format int64
   */
  orderId?: number;

  /** 订单明细营销活动 */
  orderItemMarketingList?: OrderItemMarketingDto[];

  /**
   * 订单项 商品类型 0：普通商品 1：赠品 2：兑换商品 3：赠品券
   * @format int32
   */
  orderItemType?: number;

  /** 订单编号 */
  orderNo?: string;

  /**
   * 售后状态0 未申请 1 申请中 2 售后完成 3售后拒绝
   * @format int32
   */
  refundStatus?: number;

  /** 商品销售价 */
  salePrice?: number;

  /** 商品销售价文本 */
  salePriceStr?: string;

  /**
   * 购买数量
   * @format int32
   */
  saleQuantity?: number;

  /**
   * 销售方式 1:纯现金 2:纯积分 3:现金+积分
   * @format int32
   */
  saleType?: number;

  /**
   * 使用的抵扣积分
   * @format int32
   */
  score?: number;

  /**
   * 已发货数量
   * @format int32
   */
  shipingQuantity?: number;

  /**
   * 发货状态 0：未发货 1：部分发货 2:已发货
   * @format int32
   */
  shipingStatus?: number;

  /**
   * 商品SKU ID
   * @format int64
   */
  skuId?: number;

  /** sku图片 */
  skuImg?: string;

  /** 规格名称（组合） */
  skuName?: string;

  /** 商品SKU编号 */
  skuNo?: string;

  /** 会员折扣 */
  userDiscount?: number;
}

export interface OrderItemMarketingDto {
  /** 优惠比例 */
  discount?: number;

  /** 优惠金额 */
  discountAmount?: number;

  /**
   * 优惠类型 0 抵扣 1 折扣 2 活动价 3 抵扣运费
   * @format int32
   */
  discountType?: number;

  /** 是否是赠品 0：否 1：是 */
  gift?: boolean;

  /** 商品编号 */
  goodsNo?: string;

  /** @format int64 */
  id?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @format int32
   */
  marketingType?: number;

  /** @format int64 */
  merchantId?: number;

  /** 订单编号 */
  orderNo?: string;

  /** 优惠金额(促销类型为积分时些值为使用的积分数量) */
  price?: number;

  /** 优惠券或活动名称 */
  relName?: string;

  /** 优惠券或活动编号 */
  relNo?: string;

  /** 发货时间 */
  shippingTime?: string;

  /**
   * 发货时间 0：固定时间 1：付款后X天
   * @format int32
   */
  shippingTimeType?: number;

  /** SKU编号 */
  skuNo?: string;
}

export interface OrderShipping {
  /** 快递单号 */
  expressNo?: string;

  /** 订单号 */
  orderNo?: string;
}

export interface OperateLogsDto {
  /** 业务id */
  bizNo?: string;

  /** 成功操作内容 */
  content?: string;

  /** 创建人 */
  createUser?: string;

  /** 详细描述 */
  details?: string;

  /** 错误消息 */
  errorMsg?: string;

  /**
   * 操作花费的时间 单位：ms
   * @format int64
   */
  executeTime?: number;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 修改时间
   * @format date-time
   */
  gmtModified?: string;

  /**
   * 日志ID
   * @format int64
   */
  id?: number;

  /** 电话 */
  mobile?: string;

  /** 修改人 */
  modifyUser?: string;

  /** 模块 */
  module?: string;

  /** 操作描述 */
  operateDesc?: string;

  /**
   * 操作时间 时间戳单位：ms
   * @format int64
   */
  operateTime?: number;

  /** 操作类型 */
  operateType?: string;

  /** 操作者 */
  operator?: string;

  /** 操作者名称 */
  operatorName?: string;

  /** 平台 */
  platform?: string;

  /** 执行后返回的json字符串 */
  result?: string;

  /** 是否调用成功 */
  success?: boolean;

  /** 租户 */
  tenant?: string;
}

export interface MenuTreeOutputDto {
  children?: MenuTreeOutputDto[];

  /** 是否前端展示 */
  frontShow?: boolean;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 名称 */
  name?: string;

  /** 图片 */
  pic?: string;

  /**
   * pid
   * @format int64
   */
  pid?: number;

  /**
   * 排序
   * @format int32
   */
  sort?: number;
}

export interface MemberDetailOutputDto {
  /** 微信应用id */
  appId?: string;

  /**
   * 可用积分
   * @format int32
   */
  availableScore?: number;

  /** 账户余额 */
  balance?: number;

  /**
   * 出生年月
   * @format date-time
   */
  birthday?: string;

  /**
   * 订货商级别id
   * @format int64
   */
  buyerGradeId?: number;

  /** 订货商等级名称 */
  buyerGradeName?: string;

  /**
   * 订货商状态 0 否 1是
   * @format int32
   */
  buyerStatus?: number;

  /** 消费余额 */
  consumeAmount?: number;

  /**
   * 禁用状态（0：否，1：是）
   * @format int32
   */
  disableStatus?: number;

  /** 性别 1男 2女 0未知 */
  gender?: string;

  /**
   * 注册时间
   * @format date-time
   */
  gmtCreated?: string;

  /** 头像 */
  headImg?: string;

  /**
   * 用户id
   * @format int64
   */
  id?: number;
  label?: string;

  /** 标签数组 */
  labelName?: string[];
  lable?: number[];

  /** 用户编码 */
  memberNo?: string;

  /**
   * 会员类型 1 普通用户 2 会员用户
   * @format int32
   */
  memberType?: number;

  /** 用户手机号 */
  mobile?: string;

  /** 昵称 */
  nickName?: string;

  /** 用户当前应用唯一标识 */
  openId?: string;

  /** 真实姓名 */
  realName?: string;

  /** 推荐人 */
  recommendUserName?: string;

  /**
   * 身份 0 游客 2 会员
   * @format int32
   */
  role?: number;

  /** 店中店名称 */
  shopInName?: string;

  /**
   * 状态 1：正常 0：禁用
   * @format int32
   */
  status?: number;

  /** 所属上级 */
  superiorUserName?: string;

  /**
   * 累计积分
   * @format int32
   */
  totalScore?: number;

  /** 用户微信全局唯一编号 */
  unionId?: string;
}

export interface MemCouponRecordVo {
  /**
   * 领取类型 0 直接领取 1 后台发放 2 优惠券兑换 3 新人券
   * @format int32
   */
  acceptType?: number;

  /** 优惠劵名称 */
  couponName?: string;

  /** 优惠劵编号 */
  couponNo?: string;

  /** 优惠劵模板编号 */
  couponTemplateNo?: string;

  /**
   * 优惠劵类型 0 抵扣 1 折扣
   * @format int32
   */
  couponType?: number;

  /** 使用条件需求价格 */
  demandPrice?: number;

  /** 折扣率,% */
  discount?: number;

  /** 关联WOS优惠券ID */
  extCouponNo?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 领取人用户编号 */
  memberNo?: string;

  /** 领取人手机号 */
  mobile?: string;

  /** 领取人昵称 */
  nickName?: string;

  /** 价值金额 */
  price?: number;

  /**
   * 获取时间
   * @format date-time
   */
  receive?: string;

  /**
   * 有效期结束
   * @format date-time
   */
  termEnd?: string;

  /**
   * 有效期开始
   * @format date-time
   */
  termStart?: string;

  /** unionId */
  unionId?: string;

  /**
   * 使用时间
   * @format date-time
   */
  useDate?: string;

  /**
   * 状态 0 未使用 1 已使用 2 已过期 3 已作废
   * @format int32
   */
  useStatus?: number;
}

export interface MemCardUpdateDto {
  /**
   * 获得方式 1：自动发放 2：用户领取 3：后台发放 4：付费
   * @format int32
   */
  acquisitionType?: number;

  /** 背景图 */
  bgUrl?: string;

  /** 是否启用 0 否 1是 */
  enabled?: boolean;

  /** 图标 */
  icon?: string;

  /**
   * 会员卡ID
   * @format int64
   */
  id?: number;

  /** 等级列表 */
  levelList?: MemCardLevelDto[];

  /**
   * 等级类型 1消费金额 2积分总量
   * @format int32
   */
  levelType?: number;

  /** 会员卡名称 */
  name?: string;

  /** 购买价格 */
  price?: number;

  /** 说明文本 */
  richTextContent?: string;

  /**
   * 卡类型 1：付费卡 2：免费卡
   * @format int32
   */
  type?: number;

  /** 是否为可升级 0否 1是 */
  upgrade?: boolean;
}

export interface MemCardSaveDto {
  /**
   * 获得方式 1：自动发放 2：用户领取 3：后台发放 4：付费
   * @format int32
   */
  acquisitionType?: number;

  /** 背景图 */
  bgUrl?: string;

  /** 是否启用 0 否 1是 */
  enabled?: boolean;

  /** 图标 */
  icon?: string;

  /** 等级列表 */
  levelList?: MemCardLevelDto[];

  /**
   * 等级类型 1消费金额 2积分总量
   * @format int32
   */
  levelType?: number;

  /** 会员卡名称 */
  name?: string;

  /** 购买价格 */
  price?: number;

  /** 说明文本 */
  richTextContent?: string;

  /**
   * 卡类型 1：付费卡 2：免费卡
   * @format int32
   */
  type?: number;

  /** 是否为可升级 0否 1是 */
  upgrade?: boolean;
}

export interface MemCardRightsGoodsDto {
  /** 商品编号 */
  goodsNo?: string;
}

export interface MemCardRightsDto {
  /** 折扣 */
  discount?: number;

  /**
   * 适用范围 1全部商品 2部分商品
   * @format int32
   */
  rangeType?: number;

  /** 权益商品列表 */
  rightsGoodsList?: MemCardRightsGoodsDto[];

  /**
   * 权益类型 1商品折扣
   * @format int32
   */
  rightsType?: number;
}

export interface MemCardLevelDto {
  /** 背景图 */
  bgUrl?: string;

  /** 图标 */
  icon?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * 等级
   * @format int32
   */
  level?: number;

  /** 等级名称 */
  levelName?: string;

  /**
   * 会员卡id
   * @format int64
   */
  memCardId?: number;

  /** 等级描述文本 */
  richTextContent?: string;

  /** 权益列表(json) */
  rights?: string;

  /** 权益列表 */
  rightsList?: MemCardRightsDto[];

  /** 结束值 */
  valueEnd?: number;

  /** 开始值 */
  valueStart?: number;
}

export interface MaterialVo {
  /** 扩展参数 */
  extendParams?: object;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 修改时间
   * @format date-time
   */
  gmtModified?: string;

  /**
   * 分组id
   * @format int64
   */
  groupId?: number;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 路径 */
  imgUrl?: string;

  /** 名称 */
  name?: string;

  /**
   * 类型 0 图片 1 视频
   * @format int32
   */
  type?: number;
}

export interface MemCardDto {
  /**
   * 获得方式 1：自动发放 2：用户领取 3：后台发放 4：付费
   * @format int32
   */
  acquisitionType?: number;

  /** 背景图 */
  bgUrl?: string;

  /** 消费金额 */
  currentAmount?: number;

  /** 当前等级名称 */
  currentLevelName?: string;

  /** 是否启用 0 否 1是 */
  enabled?: boolean;

  /** 图标 */
  icon?: string;

  /**
   * 会员卡ID
   * @format int64
   */
  id?: number;

  /** 等级列表 */
  levelList?: MemCardLevelDto[];

  /**
   * 等级类型 1消费金额 2积分总量
   * @format int32
   */
  levelType?: number;

  /** 会员卡名称 */
  name?: string;

  /** 购买价格 */
  price?: number;

  /** 说明文本 */
  richTextContent?: string;

  /**
   * 卡类型 1：付费卡 2：免费卡
   * @format int32
   */
  type?: number;

  /** 是否为可升级 0否 1是 */
  upgrade?: boolean;
}

export interface MaterialModifyParam {
  /** 扩展参数 */
  extendParams?: object;

  /**
   * 分组id
   * @format int64
   */
  groupId?: number;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 路径 */
  imgUrl?: string;

  /** 名称 */
  name?: string;

  /**
   * 类型 0 图片 1 视频
   * @format int32
   */
  type?: number;
}

export interface MaterialMoveParam {
  /**
   * 移动到的分组id
   * @format int64
   */
  groupId?: number;

  /** 移动的素材id数组 */
  ids?: number[];
}

export interface MaterialGroupVo {
  /** 下级分组 */
  children?: MaterialGroupVo[];

  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * 素材数量
   * @format int32
   */
  mateNum?: number;

  /** 分组名称 */
  name?: string;

  /**
   * 上级id
   * @format int64
   */
  pid?: number;

  /**
   * 类型 0图片 1分组
   * @format int32
   */
  type?: number;
}

export interface MaterialGroupUpdateDto {
  /**
   * id
   * @format int64
   */
  id?: number;

  /** 分组名称 */
  name?: string;

  /**
   * 上级id
   * @format int64
   */
  pid?: number;

  /**
   * 分组类型 0图片 1视频
   * @format int32
   */
  type?: number;
}

export interface MaterialGroupSaveDto {
  /** 分组名称 */
  name?: string;

  /**
   * 上级id
   * @format int64
   */
  pid?: number;

  /**
   * 分组类型 0图片 1视频
   * @format int32
   */
  type?: number;
}

export interface MaterialAddParam {
  /** 扩展参数 */
  extendParams?: object;

  /**
   * 分组id
   * @format int64
   */
  groupId?: number;

  /** 路径 */
  imgUrl?: string;

  /** 名称 */
  name?: string;

  /**
   * 类型 0 图片 1 视频
   * @format int32
   */
  type?: number;
}

export interface MarketingActivityVo {
  /** 活动名称 */
  activityName?: string;

  /** 活动编号 */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败 状态为0和1时前端展示启用和未启用功能
   * @format int32
   */
  activityStatus?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @format int32
   */
  activityType?: number;

  /** 封面图 */
  coverImg?: string;

  /** 活动说明 */
  description?: string;

  /**
   * 活动结束时间
   * @format date-time
   */
  endTime?: string;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /** @format int64 */
  id?: number;

  /**
   * 商户ID
   * @format int64
   */
  merchantId?: number;

  /**
   * 活动开始时间
   * @format date-time
   */
  startTime?: string;
}

export interface MarketingActivitySkuParam {
  /**
   * 活动数量 赠原品取库存数量
   * @format int32
   */
  activityNum?: number;

  /** 活动价格（预售订单时为尾款价格） */
  activityPrice?: number;

  /**
   * 满赠限制
   * @format int32
   */
  buyNum?: number;

  /** 定金 */
  deposit?: number;

  /**
   * 赠送数量
   * @format int32
   */
  giftNum?: number;

  /**
   * 记录ID 修改时传入
   * @format int64
   */
  id?: number;

  /**
   * 商品SKU库存 实时的
   * @format int32
   */
  inventory?: number;

  /** 市场价 */
  marketPrice?: number;

  /** 订货商价格 */
  marketingActivitySkuBuyerList?: MarketingActivitySkuBuyerDto[];

  /** 价格 */
  price?: number;

  /**
   * 销售数量合计
   * @format int32
   */
  quantity?: number;

  /**
   * 积分
   * @format int32
   */
  score?: number;

  /** sku图片 */
  skuImg?: string;

  /** sku编号 */
  skuNo?: string;

  /**
   * 是否显示 0：不显示 1：显示
   * @format int32
   */
  skuShow?: number;

  /** 规格名称组合，冒号分割， 格式p1:v1  */
  specNames?: string;
}

export interface MarketingActivityOfFullDto {
  /**
   * 赠品类型 0:赠原商品  1:赠其他商品
   * @format int32
   */
  activityGiftType?: number;

  /** 活动名称 */
  activityName?: string;

  /** 活动编号 */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @format int32
   */
  activityStatus?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @format int32
   */
  activityType?: number;

  /**
   * 活动完成后操作 0：设为普通商品 1：下架
   * @format int32
   */
  completed?: number;

  /** 活动规则 */
  content?: string;

  /** 封面图 */
  coverImg?: string;

  /** 活动描述 */
  description?: string;

  /**
   * 活动结束时间
   * @format date-time
   */
  endTime?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 多买多送 0:否  1:是 */
  loopGift?: boolean;

  /** 赠品商品信息 */
  marketingActivityGiftGoodsParams?: MarketingActivityGoodsParam[];

  /** 商品信息 */
  marketingActivityGoodsParams?: MarketingActivityGoodsParam[];
  promotionParam?: MarketingActivityPromotionParam;

  /** 是否预留库存，如果预留在活动启用时扣减库存，活动停用和结束时返还库存 */
  reservedInventory?: boolean;

  /** 显示成员列表 0关 1开 */
  showMemberList?: boolean;

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /**
   * 活动开始时间
   * @format date-time
   */
  startTime?: string;

  /** 是否可叠加优惠 0：否 1：是 */
  superposition?: boolean;
}

export interface MarketingActivityPromotionParam {
  /** 包含区域,ID逗号分隔。0代表全国 */
  area?: string;

  /** @format int64 */
  id?: number;

  /** 优惠条件 Json格式保存 */
  promotionConditionList?: PromotionCondition[];

  /**
   * 优惠条件类型 0：满N件 1：满N元
   * @format int32
   */
  promotionConditionType?: number;

  /**
   * 优惠类型 0：阶梯优惠 1：循环优惠
   * @format int32
   */
  promotionType?: number;

  /** 区域文本，方便展示。多个城市逗号分隔。 */
  text?: string;
}

export interface MarketingActivityOfPreSaleDto {
  /**
   * 赠品类型 0:赠原商品  1:赠其他商品
   * @format int32
   */
  activityGiftType?: number;

  /** 活动名称 */
  activityName?: string;

  /** 活动编号 */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @format int32
   */
  activityStatus?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @format int32
   */
  activityType?: number;

  /**
   * 活动完成后操作 0：设为普通商品 1：下架
   * @format int32
   */
  completed?: number;

  /** 活动规则 */
  content?: string;

  /** 活动描述 */
  description?: string;

  /**
   * 活动结束时间
   * @format date-time
   */
  endTime?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 多买多送 0:否  1:是 */
  loopGift?: boolean;

  /** 商品信息 */
  marketingActivityGoodsParams?: MarketingActivityGoodsParam[];

  /** 是否预留库存，如果预留在活动启用时扣减库存，活动停用和结束时返还库存 */
  reservedInventory?: boolean;

  /** 开始发货时间 */
  shippingTime?: string;

  /** 显示成员列表 0关 1开 */
  showMemberList?: boolean;

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /**
   * 活动开始时间
   * @format date-time
   */
  startTime?: string;

  /** 是否可叠加优惠 0：否 1：是 */
  superposition?: boolean;
}

export interface MarketingActivityOfFreeShippingDto {
  /** 活动名称 */
  activityName?: string;

  /** 活动编号 */
  activityNo?: string;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @format int32
   */
  activityType?: number;

  /**
   * 活动完成后操作 0：设为普通商品 1：下架
   * @format int32
   */
  completed?: number;

  /** 活动规则 */
  content?: string;

  /** 封面图 */
  coverImg?: string;

  /** 活动描述 */
  description?: string;

  /**
   * 活动结束时间
   * @format date-time
   */
  endTime?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 商品信息 */
  marketingActivityGoodsParams?: MarketingActivityGoodsParam[];
  promotionParam?: MarketingActivityPromotionParam;

  /**
   * 活动开始时间
   * @format date-time
   */
  startTime?: string;
}

export interface MarketingActivityGoodsParam {
  /**
   * 活动商品类型 0:活动商品 1:赠送商品 满赠专属
   * @format int32
   */
  activityGoodsType?: number;

  /**
   * 活动数量 sku活动数量之和
   * @format int32
   */
  activityNum?: number;

  /** 当前用户级别是否购买 */
  buyBool?: boolean;

  /**
   * 已拼份数（已购买商品数量）
   * @format int32
   */
  buyGoodsQuantity?: number;

  /** 商品分类名称，以“/”分割 */
  categoryNames?: string;

  /** 封面图片 */
  coverImg?: string;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;

  /**
   * 团购人数
   * @format int32
   */
  groupBuyingNum?: number;

  /** 成团人数列表 */
  groupNumberList?: number[];

  /**
   * 记录ID 修改时传入
   * @format int64
   */
  id?: number;

  /** 市场价 */
  marketPrice?: number;

  /** 商品SKU */
  marketingActivitySkuParams?: MarketingActivitySkuParam[];

  /** 商品价格（默认取sku最高价） */
  maxPrice?: number;

  /**
   * 下单购买限制
   * @format int32
   */
  orderBuyLimit?: number;

  /** 商品价格（默认取sku最低价） */
  price?: number;

  /**
   * 30天销量
   * @format int32
   */
  saleNum?: number;

  /**
   * 销售积分
   * @format int32
   */
  saleScore?: number;

  /**
   * 销售方式 1:纯现金 2:纯积分 3:现金+积分
   * @format int32
   */
  saleType?: number;

  /**
   * 排序值，数值大的在前
   * @format int32
   */
  sortNum?: number;

  /**
   * 剩余数量 min(活动数量-已售数量,当前库存数量)
   * @format int32
   */
  stockNum?: number;

  /**
   * 单用户购买限制
   * @format int32
   */
  userBuyLimit?: number;

  /**
   * 虚拟销量
   * @format int32
   */
  virtualSale?: number;

  /**
   * 商品类型 0 实物商品 1 虚拟商品
   * @format int32
   */
  virtualType?: number;
}

export interface MarketingActivityOfFlashSaleDto {
  /**
   * 赠品类型 0:赠原商品  1:赠其他商品
   * @format int32
   */
  activityGiftType?: number;

  /** 活动名称 */
  activityName?: string;

  /** 活动编号 */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @format int32
   */
  activityStatus?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @format int32
   */
  activityType?: number;

  /**
   * 活动完成后操作 0：设为普通商品 1：下架
   * @format int32
   */
  completed?: number;

  /** 活动规则 */
  content?: string;

  /** 活动描述 */
  description?: string;

  /**
   * 活动结束时间
   * @format date-time
   */
  endTime?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 多买多送 0:否  1:是 */
  loopGift?: boolean;

  /** 商品信息 */
  marketingActivityGoodsParams?: MarketingActivityGoodsParam[];

  /** 是否预留库存，如果预留在活动启用时扣减库存，活动停用和结束时返还库存 */
  reservedInventory?: boolean;

  /** 显示成员列表 0关 1开 */
  showMemberList?: boolean;

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /**
   * 活动开始时间
   * @format date-time
   */
  startTime?: string;

  /** 是否可叠加优惠 0：否 1：是 */
  superposition?: boolean;
}

export interface MarketingActivityDto {
  /**
   * 赠品类型 0:赠原商品  1:赠其他商品
   * @format int32
   */
  activityGiftType?: number;

  /** 活动名称 */
  activityName?: string;

  /** 活动编号 */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @format int32
   */
  activityStatus?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @format int32
   */
  activityType?: number;

  /**
   * 活动完成后操作 0：设为普通商品 1：下架
   * @format int32
   */
  completed?: number;

  /** 活动规则 */
  content?: string;

  /** 封面图 */
  coverImg?: string;

  /** 活动描述 */
  description?: string;

  /**
   * 活动结束时间
   * @format date-time
   */
  endTime?: string;

  /**
   * 活动Id，activityId
   * @format int64
   */
  id?: number;

  /** 多买多送 0:否  1:是 */
  loopGift?: boolean;

  /** 赠品信息 */
  marketingActivityGiftGoodsParams?: MarketingActivityGoodsParam[];

  /** 商品信息 */
  marketingActivityGoodsParams?: MarketingActivityGoodsParam[];

  /** @format int64 */
  merchantId?: number;
  promotionParam?: MarketingActivityPromotionParam;

  /** 是否预留库存，如果预留在活动启用时扣减库存，活动停用和结束时返还库存 */
  reservedInventory?: boolean;

  /** 开始发货时间 */
  shippingTime?: string;

  /**
   * 发货时间 0：固定时间 1：付款后X天
   * @format int32
   */
  shippingTimeType?: number;

  /** 显示成员列表 0关 1开 */
  showMemberList?: boolean;

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /**
   * 活动开始时间
   * @format date-time
   */
  startTime?: string;

  /** 是否可叠加优惠 0：否 1：是 */
  superposition?: boolean;

  /** 叠加优惠活动类型 */
  superpositionActivityTypes?: string;
}

export interface MallExpressCompanyVo {
  /** 快递公司名称 */
  expressCompany?: string;

  /** 快递公司编码 */
  expressCompanyCode?: string;

  /**
   * id
   * @format int64
   */
  id?: number;
}

export interface MallConfUserTaskUpdateDTO {
  /** 是否启用 0 否 1是 */
  enabled?: boolean;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 图片链接 */
  imgUrl?: string;

  /**
   * 奖励数值
   * @format int32
   */
  rewardPoints?: number;
}

export interface MallConfUserTaskDTO {
  /** 是否启用 0否 1是 */
  enabled?: boolean;

  /** 是否完成 0否 1是 */
  finish?: boolean;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 图片链接 */
  imgUrl?: string;

  /** 任务名称 */
  name?: string;

  /**
   * 奖励数值
   * @format int32
   */
  rewardPoints?: number;

  /**
   * 奖励类型 1 积分
   * @format int32
   */
  rewardType?: number;

  /** 任务key */
  taskKey?: string;

  /**
   * 任务类型 1 固定任务
   * @format int32
   */
  type?: number;
}

export interface MallConfPageOutputDto {
  /** 页面内容 */
  content?: string;

  /**
   * 最后修改时间
   * @format date-time
   */
  gmtModified?: string;

  /**
   * 设为首页 0 否 1 是
   * @format int32
   */
  homePage?: number;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 页面名称 */
  name?: string;

  /** 页面底色 */
  pageBgColor?: string;

  /** 页面标题 */
  title?: string;
}

export interface MallConfPageModifyInputDto {
  /** 页面内容 */
  content?: string;

  /**
   * 设为首页 0 否 1 是
   * @format int32
   */
  homePage?: number;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 页面名称 */
  name?: string;

  /** 页面底色 */
  pageBgColor?: string;

  /** 页面标题 */
  title?: string;
}

export interface MallConfPageCreateInputDto {
  /** 页面内容 */
  content?: string;

  /**
   * 设为首页 0 否 1 是
   * @format int32
   */
  homePage?: number;

  /** 页面名称 */
  name?: string;

  /** 页面底色 */
  pageBgColor?: string;

  /** 页面标题 */
  title?: string;
}

export interface LoginOutputDto {
  /**
   * id
   * @format int64
   */
  id?: number;

  /** 密码 */
  password?: string;

  /** 用户名 */
  username?: string;
}

export interface LoginDto {
  /** 密码 */
  password?: string;

  /** 用户名 */
  username?: string;
}

export interface LiveUpdateVolcengineVo {
  /** 直播id */
  ActivityID?: string;
  Announcement?: string;

  /** 直播封面 */
  CoverImage?: string;

  /** 回调类型 */
  EventType?: string;

  /** 开播时间 */
  LiveTime?: string;

  /** 直播名称 */
  Name?: string;
  Sign?: string;

  /** 直播状态 */
  Status?: string;
  Timestamp?: string;
  ViewUrl?: string;
}

export interface LiveStatistics {
  /**
   * 销量数量
   * @format int32
   */
  actualSales?: number;
  createUser?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;

  /** sku名称 */
  goodsSkuName?: string;

  /** sku编号 */
  goodsSkuNo?: string;

  /** @format int64 */
  id?: number;

  /** 直播间ID */
  liveId?: string;

  /** 直播名称 */
  liveName?: string;
  modified?: boolean;
  modifyUser?: string;

  /**
   * 浏览数量
   * @format int32
   */
  pageView?: number;

  /** 销售额 */
  salesVolume?: number;

  /** @format int32 */
  status?: number;
  transient?: boolean;
}

export interface LivePageUpdate {
  /** 直播ids */
  liveIds?: string[];

  /** 页面名称 */
  name?: string;

  /** 页面类型 */
  type?: "Details" | "List";
}

export interface LivePageInsert {
  /** 直播ids */
  liveIds?: string[];

  /** 页面名称 */
  name?: string;

  /** 页面类型 */
  type?: "Details" | "List";
}

export interface LivePage {
  createUser?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 页面类型 */
  liveIds?: string[];
  modified?: boolean;
  modifyUser?: string;

  /** 页面名称 */
  name?: string;

  /** @format int32 */
  status?: number;
  transient?: boolean;

  /** 页面类型 */
  type?: "Details" | "List";
}

export interface Live {
  /** 封面图 */
  coverImage?: string;
  createUser?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 直播id */
  liveId?: string;

  /** 直播状态 */
  liveStatus?: "Creating" | "LiveIng" | "Playback" | "Preview" | "Stop";

  /**
   * 开播时间
   * @format date-time
   */
  liveTime?: string;
  modified?: boolean;
  modifyUser?: string;

  /** 直播名称 */
  name?: string;

  /** @format int32 */
  status?: number;
  transient?: boolean;

  /** 直播间地址 */
  viewUrl?: string;
}

export interface HotKeywordUpdateDto {
  /** 热词 */
  hotKeyword?: string;

  /** 热词说明 */
  hotKeywordDescription?: string;

  /** 图标 */
  icon?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 是否显示 */
  show?: boolean;

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /** 跳转链接 */
  url?: string;
}

export interface HotKeywordSaveDto {
  /** 热词 */
  hotKeyword?: string;

  /** 热词说明 */
  hotKeywordDescription?: string;

  /** 图标 */
  icon?: string;

  /** 是否显示 */
  show?: boolean;

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /** 跳转链接 */
  url?: string;
}

export interface HotKeywordDto {
  /**
   * 更新时间
   * @format date-time
   */
  gmtModified?: string;

  /** 热词 */
  hotKeyword?: string;

  /** 热词说明 */
  hotKeywordDescription?: string;

  /** 图标 */
  icon?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 是否显示 */
  show?: boolean;

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /** 跳转链接 */
  url?: string;
}

export interface GoodsTagDto {
  /** 名称 */
  name?: string;

  /** key 特殊标签用 */
  tagKey?: string;

  /**
   * 标签类型 1: 活动 2:升级 3:订货商专享 4:包邮(含满邮)
   * @format int32
   */
  type?: number;
}

export interface GoodsVO {
  /**
   * 实际销量
   * @format int32
   */
  actualSales?: number;

  /** 商品详情页轮播图地址 */
  bannerImgPaths?: string;

  /** 当前用户级别是否购买 */
  buyBool?: boolean;

  /**
   * 购买限制数量
   * @format int32
   */
  buyNum?: number;

  /**
   * 购买门槛 购买限制 0:不限制 1:限制
   * @format int32
   */
  buyStatus?: number;

  /** 身份限制 */
  buyerGrades?: number[];

  /**
   * 末级分类id
   * @format int32
   */
  classifyId?: number;

  /** 分类名称 */
  classifyName?: string;

  /** 商品分类名称1 */
  classifyName1?: string;

  /** 商品分类名称2 */
  classifyName2?: string;

  /** 商品分类名称3 */
  classifyName3?: string;

  /**
   * 分类父id1（末级的上一级）
   * @format int32
   */
  classifyPid1?: number;

  /**
   * 分类父id2（分类父id1的上一级）
   * @format int32
   */
  classifyPid2?: number;

  /** 封面图片 */
  coverImg?: string;

  /**
   * 自定义起止销量
   * @format int32
   */
  customStartSales?: number;

  /**
   * 运费模板ID
   * @format int64
   */
  expressTemplateId?: number;

  /** 是否包邮 */
  freePost?: boolean;

  /** 前台是否可见 */
  frontShow?: boolean;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;

  /** SKU信息 */
  goodsSkuDetailList?: GoodsSkuVO[];

  /** 规格信息 */
  goodsSpecRelationList?: GoodsSpecRelationVO[];

  /** 标签列表 */
  goodsTagList?: GoodsTagDto[];

  /** 分组ids */
  groupIds?: number[];

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 市场价 */
  marketPrice?: number;

  /**
   * 市场积分
   * @format int32
   */
  marketScore?: number;

  /** 营销活动扩展信息 */
  marketingActivityExtList?: MarketingActivityExtDto[];

  /** 营销活动 */
  marketingActivityList?: MarketingActivityDto[];

  /** 是否开启推荐 */
  recommendStatus?: boolean;

  /**
   * 富文本ID
   * @format int64
   */
  richId?: number;

  /** 销售价 */
  salePrice?: number;

  /**
   * 销售积分
   * @format int32
   */
  saleScore?: number;

  /**
   * 销售方式 1:纯现金 2:纯积分 3:现金+积分
   * @format int32
   */
  saleType?: number;

  /** 是否上架 0 否 1 是 */
  shelved?: boolean;

  /**
   * 上下架时间
   * @format date-time
   */
  shelvesTime?: string;

  /**
   * 排序值
   * @format int32
   */
  sort?: number;

  /**
   * 库存
   * @format int32
   */
  stock?: number;

  /** 标签ids */
  tagIds?: number[];

  /** 是否是统一规格 0 否 1 是  */
  uniform?: boolean;

  /** 订货商购买升级 */
  upgrade?: boolean;

  /** 是否使用积分 */
  useScore?: boolean;

  /** 视频地址 */
  videoUrl?: string;

  /**
   * 商品类型 0 实物商品 1 虚拟商品
   * @format int32
   */
  virtualType?: number;

  /** 限购类型 */
  purchaseLimitType?: number;

  /** 限购数量 */
  purchaseLimitQuantity?: number;

  /** 商品标题 */
  title?: string;

  /** 商品副标题 */
  subtitle?: string;
   /** 副选分类 */
  subClassify?: string;
  subClassifyName?:string;
  /** 商品留言集合 */
  goodsMessageDTOS?: GoodsMessageDTOS[];
}

export interface GoodsMessageDTOS {
  columnName?: string;
  columnType?: number;
  /** 商品id;编辑时传递 */
  goodsId?: number;
  requiredState?: boolean;
}

export interface GoodsStatusInputDto {
  /** 编号 */
  no: string;

  /** 开关状态 */
  status: boolean;
}

export interface GoodsSpecRelationVO {
  goodsNo?: string;

  /**
   * 规格ID
   * @format int32
   */
  specId?: number;

  /** 规格名称 */
  specName?: string;

  /**
   * 规格父ID
   * @format int32
   */
  specPid?: number;
}

export interface GoodsSpecOutputDto {
  /** @format int64 */
  childrenNum?: number;

  /**
   * 规格编号
   * @format int64
   */
  id?: number;

  /**
   * 父级id
   * @format int64
   */
  pid?: number;

  /**
   * 排序值
   * @format int32
   */
  sort?: number;

  /** 规格编码 */
  specCode?: string;

  /** 规格名称 */
  specName?: string;
}

export interface GoodsSkuVO {
  /**
   * 实际销量
   * @format int32
   */
  actualSales?: number;

  /**
   * 自定义起止销量
   * @format int32
   */
  customStartSales?: number;

  /** 是否启用 0 否 1是 */
  enabled?: boolean;

  /**
   * 商品id
   * @format int64
   */
  goodsId?: number;

  /** 商品编号 */
  goodsNo?: string;

  /** 订货商配置(拿货价,平级推荐) */
  goodsSkuBuyerList?: GoodsSkuBuyerDTO[];

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 市场价 */
  marketPrice?: number;

  /**
   * 市场积分
   * @format int32
   */
  marketScore?: number;

  /**
   * 销售积分
   * @format int32
   */
  saleScore?: number;

  /** 售价 */
  salesPrice?: number;

  /** sku图片 */
  skuImg?: string;

  /** sku名称 */
  skuName?: string;

  /** sku编号 */
  skuNo?: string;

  /** 组合多规格子id，用逗号分割 */
  specIds?: string;

  /** sku组合名称（以逗号分隔） */
  specNames?: string;

  /** 组合多规格父id，用逗号分割 */
  specParentIds?: string;

  /**
   * 库存
   * @format int32
   */
  stock?: number;

  /** 是否是统一规格 0 否 1 是  */
  uniform?: boolean;

  /** 体积（cm³） */
  volume?: number;

  /** 重量（kg） */
  weight?: number;
}

export interface GoodsQueryByNo {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /** 商品编号列表 */
  goodNos?: string[];

  /**
   * 分组ID
   * @format int64
   */
  groupId?: number;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
}

export interface GoodsSpecModifyInputDto {
  /**
   * 规格编号
   * @format int64
   */
  id?: number;

  /**
   * 父级id
   * @format int64
   */
  pid?: number;

  /**
   * 排序值
   * @format int32
   */
  sort?: number;

  /** 规格编码 */
  specCode?: string;

  /** 规格名称 */
  specName?: string;
}

export interface GoodsSpecCrerateInputDto {
  /**
   * 父级id
   * @format int64
   */
  pid?: number;

  /**
   * 排序值
   * @format int32
   */
  sort?: number;

  /** 规格编码 */
  specCode?: string;

  /** 规格名称 */
  specName?: string;
}

export interface GoodsSkuDTO {
  /**
   * 自定义起止销量
   * @format int32
   */
  customStartSales?: number;

  /** 是否启用 0 否 1是 */
  enabled?: boolean;

  /**
   * 商品id
   * @format int64
   */
  goodsId?: number;

  /** 订货商配置(拿货价,平级推荐) */
  goodsSkuBuyerList?: GoodsSkuBuyerSaveDTO[];

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 市场价 */
  marketPrice?: number;

  /**
   * 市场积分
   * @format int32
   */
  marketScore?: number;

  /**
   * 销售积分
   * @format int32
   */
  saleScore?: number;

  /** 销售价 */
  salesPrice?: number;

  /** sku图片 */
  skuImg?: string;

  /** sku名称 */
  skuName?: string;

  /** sku编号 */
  skuNo?: string;

  /** 组合多规格子id，用逗号分割 */
  specIds?: string;

  /** sku组合名称（以逗号分隔） */
  specNames?: string;

  /** 组合多规格父id，用逗号分割 */
  specParentIds?: string;

  /**
   * 库存
   * @format int32
   */
  stock?: number;

  /**
   * 是否是统一规格 0 否 1 是
   * @format int32
   */
  uniform?: number;

  /** 体积（cm³） */
  volume?: number;

  /** 重量（kg） */
  weight?: number;
}

export interface GoodsSaveDTO {
  /** 商品详情页轮播图地址 */
  bannerImgPaths?: string;
  /** 副选分类 */
  subClassify?: string;

  /**
   * 购买限制数量
   * @format int32
   */
  buyNum?: number;

  /**
   * 购买限制 0:不限制 1:限制
   * @format int32
   */
  buyStatus?: number;

  /** 身份限制 */
  buyerGrades?: number[];

  /**
   * 末级分类id
   * @format int32
   */
  classifyId?: number;

  /**
   * 分类父id1（末级的上一级）
   * @format int32
   */
  classifyPid1?: number;

  /**
   * 分类父id2（分类父id1的上一级）
   * @format int32
   */
  classifyPid2?: number;

  /** 封面图片 */
  coverImg?: string;

  /**
   * 初始销量
   * @format int32
   */
  customStartSales?: number;

  /**
   * 运费模板ID 无物流传0
   * @format int64
   */
  expressTemplateId?: number;

  /** 是否前台展示 */
  frontShow?: boolean;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;

  /** SKU信息 */
  goodsSkuList?: GoodsSkuDTO[];

  /** 商品分组 */
  groupIds?: number[];

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /**
   * 富文本详情ID
   * @format int64
   */
  richId?: number;

  /**
   * 销售方式 1:纯现金 2:纯积分 3:现金+积分
   * @format int32
   */
  saleType?: number;

  /** 商品状态 */
  shelved?: boolean;

  /**
   * 上下架时间
   * @format date-time
   */
  shelvesTime?: string;

  /**
   * 排序值
   * @format int32
   */
  sort?: number;

  /** 规格信息ID集合 */
  specList?: number[];

  /** 商品标签 */
  tagIds?: number[];

  /** 是否使用积分 */
  useScore?: boolean;

  /** 视频地址 */
  videoUrl?: string;

  /**
   * 商品类型 0 实物商品 1 虚拟商品
   * @format int32
   */
  virtualType?: number;
}

export interface GoodsClassifyUpdateDto {
  /** 前端是否展示 */
  frontShow?: boolean;

  /**
   * 商品类型 0 普通商品 1 积分商品
   * @format int32
   */
  goodsType?: number;

  /**
   * 分类id
   * @format int64
   */
  id?: number;

  /**
   * 级别层次 1 : 一级分类 2: 二级分类
   * @format int32
   */
  level?: number;

  /** 分类名称 */
  name?: string;

  /** 图片 */
  pic?: string;

  /**
   * 父级ID
   * @format int64
   */
  pid?: number;

  /**
   * 排序
   * @format int32
   */
  sort?: number;
}

export interface GoodsClassifySaveDto {
  /** 前端是否展示 */
  frontShow?: boolean;

  /**
   * 商品类型 0 普通商品 1 积分商品
   * @format int32
   */
  goodsType?: number;

  /**
   * 级别层次 1 : 一级分类 2: 二级分类
   * @format int32
   */
  level?: number;

  /** 分类名称 */
  name?: string;

  /** 图片 */
  pic?: string;

  /**
   * 父级ID
   * @format int64
   */
  pid?: number;

  /**
   * 排序
   * @format int32
   */
  sort?: number;
}

export interface GoodsClassifyOutputDto {
  /** 前端是否展示 */
  frontShow?: boolean;

  /**
   * 商品类型 0 普通商品 1 积分商品
   * @format int32
   */
  goodsType?: number;

  /**
   * 分类id
   * @format int64
   */
  id?: number;

  /**
   * 级别层次 1 : 一级分类 2: 二级分类
   * @format int32
   */
  level?: number;

  /** 分类名称 */
  name?: string;

  /** 图片 */
  pic?: string;

  /**
   * 父级ID
   * @format int64
   */
  pid?: number;

  /**
   * 排序
   * @format int32
   */
  sort?: number;
}

export interface GoodsClassifyMoveInputDto {
  /**
   * 当前要移动的分类id
   * @format int64
   */
  id?: number;

  /**
   * 当前要移动的目标分类父id
   * @format int64
   */
  pid?: number;

  /**
   * 当前要移动的目标索引
   * @format int32
   */
  sort?: number;
}

export interface ForgotPasswordDto {
  /** 验证码 */
  code?: string;

  /** 手机号 */
  mobile?: string;

  /** 密码 */
  password?: string;
}

export interface ExpressTemplateUpdateDto {
  /** 子区域信息 */
  expressTemplateAreas?: ExpressTemplateAreaModifyInputDto[];

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 模板名称 */
  name?: string;

  /** 满x包邮金额 */
  price?: number;

  /**
   * 模板类型 1:不包邮 2:包邮 3:满x包邮
   * @format int32
   */
  shippingType?: number;

  /**
   * 运费计价方式 1总量 2 件数 3体积
   * @format int32
   */
  valuationType?: number;
}

export interface ExpressTemplateSaveDto {
  /** 子区域信息 */
  expressTemplateAreas?: ExpressTemplateAreaCreateInputDto[];

  /** 模板名称 */
  name?: string;

  /** 满x包邮金额 */
  price?: number;

  /**
   * 模板类型 1:不包邮 2:包邮 3:满x包邮
   * @format int32
   */
  shippingType?: number;

  /**
   * 运费计价方式 1总量 2 件数 3体积
   * @format int32
   */
  valuationType?: number;
}

export interface ExpressTemplateListOutputDto {
  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 模板名称 */
  name?: string;

  /** 满X包邮 金额 */
  price?: number;

  /**
   * 模板类型 1 不包邮 2 包邮 3: 满X包邮
   * @format int32
   */
  shippingType?: number;

  /**
   * 运费计价方式 1 重量 2 件数 3 体积
   * @format int32
   */
  valuationType?: number;
}

export interface CouponTemplateVo {
  /** 适用商品、品牌、类目集合,逗号分隔  */
  acceptGoodsSet?: string;

  /** 适用商品集合扩展,逗号分隔  */
  acceptGoodsSetExtend?: string;

  /**
   * 商品适用范围 0 全商品(店铺) 1 指定商品(店铺) 2 全场(平台) 3 指定品牌(平台) 4 指定类目(平台)
   * @format int32
   */
  acceptGoodsType?: number;

  /** 优惠券ID */
  couponNo?: string;

  /**
   * 优惠劵类型 0 抵扣 1 折扣 2 赠品 3 兑换 4 包邮
   * @format int32
   */
  couponType?: number;

  /** 使用条件需求价格 */
  demandPrice?: number;

  /** 使用说明 */
  detail?: string;

  /** 折扣率,% */
  discount?: number;

  /**
   * 有效天数(生效时间条件为2必填)
   * @format int32
   */
  expDayCount?: number;

  /**
   * 生效时间条件 0:无限制 1 指定时间 2 动态时间
   * @format int32
   */
  expireDateType?: number;

  /** 关联WOS优惠券ID */
  extCouponNo?: string;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 修改时间
   * @format date-time
   */
  gmtModified?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * 当前用户是否已领取 0：否 1：是
   * @format int32
   */
  isHave?: number;

  /**
   * 是否公开 1：公开 0：否
   * @format int32
   */
  isPublic?: number;

  /**
   * 每人限领张数
   * @format int32
   */
  memberLimit?: number;

  /** 优惠劵名称 */
  name?: string;

  /** 价值金额 */
  price?: number;

  /**
   * 领取时间结束(领取时间不能晚于有效期结束时间)
   * @format date-time
   */
  receiveEnd?: string;

  /**
   * 已领取数量
   * @format int32
   */
  receiveNum?: number;

  /**
   * 领取时间开始(领取时间不能晚于有效期结束时间)
   * @format date-time
   */
  receiveStart?: string;

  /**
   * 已发放数量
   * @format int32
   */
  sendNum?: number;

  /**
   * 领取后几天生效(生效时间条件为2必填)
   * @format int32
   */
  startDayCount?: number;

  /**
   * 数据状态 0 无效 1 有效
   * @format int32
   */
  status?: number;

  /**
   * 库存
   * @format int32
   */
  stock?: number;

  /** 店铺编码 */
  storeNo?: string;

  /** 优惠劵模板编号 */
  templateNo?: string;

  /**
   * 有效期结束(生效时间条件为1必填)
   * @format date-time
   */
  termEnd?: string;

  /**
   * 有效期开始(生效时间条件为1必填)
   * @format date-time
   */
  termStart?: string;
}

export interface ExpressTemplateAreaModifyInputDto {
  /** 包含区域,ID逗号分隔。0代表全国 */
  area?: string;

  /** 首重/首件/首体积 */
  first?: number;

  /** 运费-首 */
  firstPrice?: number;

  /**
   * 子区域id，编辑时需要给
   * @format int64
   */
  id?: number;

  /** 续重/续件/续体积 */
  plus?: number;

  /** 运费-续 */
  plusPrice?: number;

  /** 区域文本 */
  text?: string;
}

export interface ExpressTemplateAreaCreateInputDto {
  /** 包含区域,ID逗号分隔。0代表全国 */
  area?: string;

  /** 首重/首件/首体积 */
  first?: number;

  /** 运费-首 */
  firstPrice?: number;

  /** 续重/续件/续体积 */
  plus?: number;

  /** 运费-续 */
  plusPrice?: number;

  /** 区域文本 */
  text?: string;
}

export interface ExpressTemplateDetailOutputDto {
  /** 子区域信息 */
  expressTemplateAreas?: ExpressTemplateAreaModifyInputDto[];

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 模板名称 */
  name?: string;

  /** 满x包邮金额 */
  price?: number;

  /**
   * 模板类型 1:不包邮 2:包邮 3:满x包邮
   * @format int32
   */
  shippingType?: number;

  /**
   * 运费计价方式 1总量 2 件数 3体积
   * @format int32
   */
  valuationType?: number;
}

export interface CouponTemplateStatusInputDto {
  /**
   * 编号
   * @format int64
   */
  id?: number;

  /**
   * 显示状态，1：显示，0：不显示
   * @format int32
   */
  isPublic?: number;
}

export interface CouponTemplateModifyInputDto {
  /** （可修改）适用商品、品牌、类目集合,逗号分隔 */
  acceptGoodsSet?: string;

  /** 适用商品集合扩展字段,逗号分隔 */
  acceptGoodsSetExtend?: string;

  /**
   * （可修改）商品适用范围  0 全商品(店铺) 1 指定商品(店铺) 2 全场(平台) 3 指定品牌(平台) 4 指定类目(平台) 5指定店铺(平台)
   * @format int32
   */
  acceptGoodsType?: number;

  /**
   * 优惠劵类型 0 抵扣 1 折扣 2 赠品 3 兑换 4 包邮 默认0
   * @format int32
   */
  couponType?: number;

  /** 使用条件需求价格 */
  demandPrice?: number;

  /** （可修改）使用说明 */
  detail?: string;

  /** 折扣率,% */
  discount?: number;

  /**
   * 有效天数(生效时间条件为2必填)
   * @format int32
   */
  expDayCount?: number;

  /**
   * 生效时间条件 1 指定时间 2 动态时间
   * @format int32
   */
  expireDateType?: number;

  /** 关联WOS优惠券ID */
  extCouponNo?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * 是否公开 1：公开 0：不公开
   * @format int32
   */
  isPublic?: number;

  /**
   * 每人限领张数
   * @format int32
   */
  memberLimit?: number;

  /** 优惠劵名称 */
  name?: string;

  /** 价值金额 */
  price?: number;

  /**
   * 领取时间结束（领取时间不能晚于有效期结束时间）
   * @format date-time
   */
  receiveEnd?: string;

  /**
   * 领取时间开始（领取时间不能晚于有效期结束时间）
   * @format date-time
   */
  receiveStart?: string;

  /**
   * 领取后几天生效(生效时间条件为2必填)
   * @format int32
   */
  startDayCount?: number;

  /**
   * 库存
   * @format int32
   */
  stock?: number;

  /**
   * 有效期结束(生效时间条件为1必填)
   * @format date-time
   */
  termEnd?: string;

  /**
   * 有效期开始(生效时间条件为1必填)
   * @format date-time
   */
  termStart?: string;
}

export interface CouponSendInputDto {
  mobiles?: string[];

  /** @format int32 */
  num?: number;
  templateNo?: string;
}

export interface CouponTemplateCreateInputDto {
  /** （可修改）适用商品、品牌、类目集合,逗号分隔 */
  acceptGoodsSet?: string;

  /** 适用商品集合扩展字段,逗号分隔 */
  acceptGoodsSetExtend?: string;

  /**
   * （可修改）商品适用范围  0 全商品(店铺) 1 指定商品(店铺) 2 全场(平台) 3 指定品牌(平台) 4 指定类目(平台) 5指定店铺(平台)
   * @format int32
   */
  acceptGoodsType?: number;

  /**
   * 优惠劵类型 0 抵扣 1 折扣 2 赠品 3 兑换 4 包邮 默认0
   * @format int32
   */
  couponType?: number;

  /** 使用条件需求价格 */
  demandPrice?: number;

  /** （可修改）使用说明 */
  detail?: string;

  /** 折扣率,% */
  discount?: number;

  /**
   * 有效天数(生效时间条件为2必填)
   * @format int32
   */
  expDayCount?: number;

  /**
   * 生效时间条件 1 指定时间 2 动态时间
   * @format int32
   */
  expireDateType?: number;

  /** 关联WOS优惠券ID */
  extCouponNo?: string;

  /**
   * 是否公开 1：公开 0：不公开
   * @format int32
   */
  isPublic?: number;

  /**
   * 每人限领张数
   * @format int32
   */
  memberLimit?: number;

  /** 优惠劵名称 */
  name?: string;

  /** 价值金额 */
  price?: number;

  /**
   * 领取时间结束（领取时间不能晚于有效期结束时间）
   * @format date-time
   */
  receiveEnd?: string;

  /**
   * 领取时间开始（领取时间不能晚于有效期结束时间）
   * @format date-time
   */
  receiveStart?: string;

  /**
   * 领取后几天生效(生效时间条件为2必填)
   * @format int32
   */
  startDayCount?: number;

  /**
   * 库存
   * @format int32
   */
  stock?: number;

  /**
   * 有效期结束(生效时间条件为1必填)
   * @format date-time
   */
  termEnd?: string;

  /**
   * 有效期开始(生效时间条件为1必填)
   * @format date-time
   */
  termStart?: string;
}

export interface CouponRecordQuery {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 优惠劵名称 */
  name?: string;

  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
}

export interface CouponRecordOutputDto {
  /**
   * 发放时间
   * @format date-time
   */
  gmtCreated?: string;

  /** 会员编号 */
  memberNo?: string;

  /** 手机号 */
  mobile?: string;

  /** 用户昵称 */
  nickName?: string;

  /** 失败原因 */
  remark?: string;

  /** 结果 */
  result?: string;
}

export interface CouponRecordDetailQuery {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /**
   * 礼券记录id
   * @format int64
   */
  couponId?: number;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 会员编号 */
  memberNo?: string;

  /** 手机号 */
  mobile?: string;

  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;

  /**
   * 状态 0 失败 1 成功
   * @format int32
   */
  status?: number;
}

export interface CouponRecordDetailOutputDto {
  /**
   * 领取类型 0 直接领取 1 后台发放
   * @format int32
   */
  acceptType?: number;

  /**
   * 优惠劵类型 0 抵扣 1 折扣
   * @format int32
   */
  couponType?: number;

  /** 使用条件需求价格 */
  demandPrice?: number;

  /** 折扣 */
  discount?: number;

  /**
   * 有效天数(生效时间条件为2必填)
   * @format int32
   */
  expDayCount?: number;

  /**
   * 生效时间条件 0 无限制 1 指定时间 2 动态时间
   * @format int32
   */
  expireDateType?: number;

  /**
   * 发放时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 优惠劵名称 */
  name?: string;

  /**
   * 领取数量
   * @format int32
   */
  num?: number;

  /** 价值金额 */
  price?: number;

  /**
   * 领取后几天生效(生效时间条件为2必填)
   * @format int32
   */
  startDayCount?: number;

  /** 优惠劵模板编号 */
  templateNo?: string;

  /**
   * 有效期结束(生效时间条件为1必填)
   * @format date-time
   */
  termEnd?: string;

  /**
   * 有效期开始(生效时间条件为1必填)
   * @format date-time
   */
  termStart?: string;
}

export interface CouponCodeDetailOutputDto {
  /** 绑定状态： 未兑换 已兑换 过期未兑换 */
  bindStatusName?: string;

  /** 优惠码 */
  code?: string;

  /**
   * 优惠劵类型 0 抵扣 1 折扣
   * @format int32
   */
  couponType?: number;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 优惠劵名称 */
  name?: string;

  /** 核销用户昵称 */
  nickName?: string;

  /** 优惠券编号 */
  templateNo?: string;

  /** 核销用户电话 */
  userMobile?: string;
}

export interface CouponCodeOutputDto {
  /**
   * 已绑定数量
   * @format int32
   */
  bindQuantity?: number;

  /** 构建失败信息 */
  buildMessage?: string;

  /**
   * 构建状态 1：构建中 2：成功 4：失败
   * @format int32
   */
  buildStatus?: number;

  /**
   * 优惠劵类型 0 抵扣 1 折扣
   * @format int32
   */
  couponType?: number;

  /** 使用条件需求价格 */
  demandPrice?: number;

  /** 折扣 */
  discount?: number;

  /**
   * 有效天数
   * @format int32
   */
  expDayCount?: number;

  /**
   * 生效时间条件 0 无限制 1 指定时间 2 动态时间
   * @format int32
   */
  expireDateType?: number;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 优惠劵名称 */
  name?: string;

  /** 价值金额 */
  price?: number;

  /**
   * 生成数量
   * @format int32
   */
  quantity?: number;

  /**
   * 领取后几天生效
   * @format int32
   */
  startDayCount?: number;

  /** 优惠券编号 */
  templateNo?: string;

  /**
   * 有效期结束
   * @format date-time
   */
  termEnd?: string;

  /**
   * 有效期开始
   * @format date-time
   */
  termStart?: string;
}

export interface CouponCodeCreateInputDto {
  /**
   * 数量
   * @format int32
   */
  num?: number;

  /** 礼券号 */
  templateNo?: string;
}

export interface ConfConfigOutputDto {
  /** 字段key */
  fieldKey?: string;

  /** 字段值 */
  fieldValue?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * 字段类型(用于分组，方便查询，详见代码枚举)
   * @format int32
   */
  type?: number;
}

export interface CommentsVO {
  /**
   * 追评时间
   * @format date-time
   */
  addAt?: string;

  /** 追评审核原因 */
  addAuditReason?: string;

  /**
   * 追评状态  0 待审核 1 审核通过 2:审核驳回
   * @format int32
   */
  addAuditStatus?: number;

  /** 追评内容 */
  addContent?: string;

  /** 追评图片，逗号分隔 */
  addImgs?: string;

  /** 追评是否回复 0 否 1 是 */
  addIsReply?: boolean;

  /**
   * 追评回复时间
   * @format date-time
   */
  addReplyAt?: string;

  /** 追评回复内容 */
  addReplyContent?: string;

  /**
   * 首评状态 0待审核 1审核通过 2审核驳回
   * @format int32
   */
  auditStatus?: number;

  /** 评价内容 */
  content?: string;

  /**
   * 来源 1：后台评价 2：用户添加
   * @format int32
   */
  fromType?: number;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 商品数量
   * @format int32
   */
  goodsCount?: number;

  /**
   * 商品评分 1~5
   * @format int32
   */
  goodsGrade?: number;

  /**
   * 商品id
   * @format int64
   */
  goodsId?: number;

  /** 商品图 */
  goodsImg?: string;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;

  /** 商品规格 */
  goodsSpec?: string;

  /** 头像 */
  headImg?: string;

  /**
   * 评价id
   * @format int64
   */
  id?: number;

  /** 评价图片，逗号分隔 */
  imgs?: string;

  /** 是否追评 0 否 1 是 */
  isAdd?: boolean;

  /** 是否匿名 0 否 1 是 */
  isAnonym?: boolean;

  /** 是否回复 */
  isReply?: boolean;

  /**
   * 物流评分 1~5
   * @format int32
   */
  logisticsGrade?: number;

  /** 用户手机号 */
  mobile?: string;

  /** 用户昵称 */
  nickName?: string;

  /** 关联订单编号 */
  orderNo?: string;

  /** 驳回原因 */
  reason?: string;

  /**
   * 回复时间
   * @format date-time
   */
  replyAt?: string;

  /** 回复内容 */
  replyContent?: string;

  /**
   * 服务评分 1~5
   * @format int32
   */
  serviceGrade?: number;

  /** 是否显示 */
  show?: boolean;

  /** sku图 */
  skuImg?: string;

  /** 商品SKU编号 */
  skuNo?: string;

  /**
   * 用户ID
   * @format int64
   */
  userId?: number;
}

export interface CommentsImportItem {
  /** 评价内容 */
  content?: string;

  /**
   * 商品评分 1~5
   * @format int32
   */
  goodsGrade?: number;

  /** 商品编号 */
  goodsNo?: string;

  /** 昵称 */
  nickName?: string;
}

export interface CommentsImportInputDto {
  items?: CommentsImportItem[];
}

export interface CommentsHeadImgOutputDto {
  /** 头像 */
  headImg?: string;

  /**
   * id
   * @format int64
   */
  id?: number;
}

export interface BatchShipInfoParam {
  /** 快递公司名称 */
  expressCompany?: string;

  /** 快递公司编码 */
  expressCompanyCode?: string;

  /**
   * 配送方式 0：商家配送 1：无需物流
   * @format int32
   */
  shippingMethod?: number;

  /** 发货订单 */
  shippingOrderList?: OrderShipping[];
}

export interface BannerOutputDto {
  /**
   * 编号
   * @format int64
   */
  id?: number;

  /** 图片链接 */
  imgUrl: string;

  /** 名称 */
  name?: string;

  /** 显示位置 */
  position?: string;

  /**
   * 显示状态 1显示0不显示
   * @format int32
   */
  showStatus: number;

  /**
   * 排序值
   * @format int32
   */
  sort: number;

  /** 外链地址 */
  url?: string;

  /**
   * 外链类型
   * @format int32
   */
  urlType?: number;
}

export interface BannerModifyStatusInputDto {
  /**
   * 编号
   * @format int64
   */
  id?: number;

  /**
   * 显示状态 1显示0不显示
   * @format int32
   */
  showStatus: number;
}

export interface BannerModifyInputDto {
  /**
   * 编号
   * @format int64
   */
  id?: number;

  /** 图片链接 */
  imgUrl: string;

  /** 名称 */
  name?: string;

  /** 显示位置 */
  position?: string;

  /**
   * 显示状态 1显示0不显示
   * @format int32
   */
  showStatus: number;

  /**
   * 排序值
   * @format int32
   */
  sort: number;

  /** 外链地址 */
  url?: string;

  /**
   * 外链类型
   * @format int32
   */
  urlType?: number;
}

export interface BalanceRefundCardInputDto {
  remark?: string;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface BannerCreateInputDto {
  /** 图片链接 */
  imgUrl: string;

  /** 名称 */
  name?: string;

  /** 显示位置 */
  position?: string;

  /**
   * 显示状态 1显示0不显示
   * @format int32
   */
  showStatus: number;

  /**
   * 排序值
   * @format int32
   */
  sort: number;

  /** 外链地址 */
  url?: string;

  /**
   * 外链类型
   * @format int32
   */
  urlType?: number;
}

export interface BalanceGetOutputDto {
  /** 当前余额 */
  balance?: number;

  /** 本月充值 */
  currentMonthRecharge?: number;

  /** 本月使用 */
  currentMonthUse?: number;

  /** 总赠送余额 */
  totalPresentBalance?: number;

  /** 总充值余额 */
  totalRechargeBalance?: number;

  /** 可退卡总金额 */
  totalRefundBalance?: number;
}

export interface BalanceFlowOutputDto {
  /** 使用余额 */
  balance?: number;

  /** 微盟变更类型 */
  changeType?: string;

  /** 操作人 */
  createUser?: string;

  /** 说明 */
  description?: string;

  /**
   * 使用时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 余额的增加方式 1：后台增加 2：用户充值 3：订单取消退回 4：余额同步
   * @format int32
   */
  plusType?: number;

  /** 单据编号 */
  relNo?: string;

  /** 备注 */
  remark?: string;

  /** 来源 0:系统调整 1:订单消费 2:用户充值 3:订单取消退回 4:余额同步 */
  sourceText?: string;

  /**
   * 余额的扣除方式 1：后台扣减 2：订单消费 3：余额同步
   * @format int32
   */
  subtractType?: number;
}

export interface AddressOutputDto {
  /**
   * 区域id
   * @format int64
   */
  areaId?: number;

  /** 区域名 */
  areaName?: string;

  /**
   * 市id
   * @format int64
   */
  cityId?: number;

  /** 城市名 */
  cityName?: string;

  /** 国家名 */
  countryName?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * 是否默认 0 无 1 发货地址 2 退货地址 3 全部
   * @format int32
   */
  isDefault?: number;

  /** 手机号 */
  mobile?: string;

  /** 联系人姓名 */
  name?: string;

  /**
   * 省id
   * @format int64
   */
  provinceId?: number;

  /** 省份名 */
  provinceName?: string;

  /** 详细地址 */
  singleAddress?: string;
}

export interface BalanceAdjustInputDto {
  /** 余额 */
  balance?: number;

  /** 是否增加 */
  isPlus?: boolean;
  remark?: string;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface ActivityOpenDto {
  /** 活动编号 */
  activityNo?: string;

  /**
   * 开启关闭 0 关闭 1 开启
   * @format int32
   */
  open?: number;
}

export interface AddressModifyInputDto {
  /**
   * 区域id
   * @format int64
   */
  areaId?: number;

  /** 区域名 */
  areaName?: string;

  /**
   * 市id
   * @format int64
   */
  cityId?: number;

  /** 城市名 */
  cityName?: string;

  /** 国家名 */
  countryName?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * 是否默认 0 无 1 发货地址 2 退货地址 3 全部
   * @format int32
   */
  isDefault?: number;

  /** 手机号 */
  mobile?: string;

  /** 联系人姓名 */
  name?: string;

  /**
   * 省id
   * @format int64
   */
  provinceId?: number;

  /** 省份名 */
  provinceName?: string;

  /** 详细地址 */
  singleAddress?: string;
}

export interface AddressCreateInputDto {
  /**
   * 区域id
   * @format int64
   */
  areaId?: number;

  /** 区域名 */
  areaName?: string;

  /**
   * 市id
   * @format int64
   */
  cityId?: number;

  /** 城市名 */
  cityName?: string;

  /** 国家名 */
  countryName?: string;

  /**
   * 是否默认 0 无 1 发货地址 2 退货地址 3 全部
   * @format int32
   */
  isDefault?: number;

  /** 手机号 */
  mobile?: string;

  /** 联系人姓名 */
  name?: string;

  /**
   * 省id
   * @format int64
   */
  provinceId?: number;

  /** 省份名 */
  provinceName?: string;

  /** 详细地址 */
  singleAddress?: string;
}

export interface PagedResultHotelUser {
  list?: HotelUser[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultHotelBlacklist {
  list?: HotelBlacklistRes[];

  /** @format int64 */
  total?: number;
}

export interface JsonResultPagedResultHotelUser {
  /** @format int32 */
  code?: number;
  data?: PagedResultHotelUser;
  msg?: string;
}

export interface JsonResultPagedResultHotelBlacklist {
  /** @format int32 */
  code?: number;
  data?: PagedResultHotelBlacklist;
  msg?: string;
}

export interface JsonResultListSysUserVo {
  /** @format int32 */
  code?: number;
  data?: SysUserVo[];
  msg?: string;
}

export interface JsonResultHotelBlacklist {
  /** @format int32 */
  code?: number;
  data?: HotelBlacklistRes;
  msg?: string;
}

export interface JsonResultExcelImportResultDto {
  /** @format int32 */
  code?: number;
  data?: ExcelImportResultDto;
  msg?: string;
}

export interface PagedResultHotel {
  list?: HotelRes[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultHotelRoom {
  list?: HotelRoomRes[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultHotelOrder {
  list?: HotelOrder[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultHotelOrderRefund {
  list?: HotelOrderRefund[];

  /** @format int64 */
  total?: number;
}

export interface JsonResultPagedResultHotel {
  /** @format int32 */
  code?: number;
  data?: PagedResultHotel;
  msg?: string;
}

export interface JsonResultPagedResultHotelRoom {
  /** @format int32 */
  code?: number;
  data?: PagedResultHotelRoom;
  msg?: string;
}

export interface JsonResultPagedResultHotelOrder {
  /** @format int32 */
  code?: number;
  data?: PagedResultHotelOrder;
  msg?: string;
}

export interface JsonResultPagedResultHotelOrderRefund {
  /** @format int32 */
  code?: number;
  data?: PagedResultHotelOrderRefund;
  msg?: string;
}

export interface JsonResultListHotelBanner {
  /** @format int32 */
  code?: number;
  data?: HotelBannerRes[];
  msg?: string;
}

export interface JsonResultListCityDto {
  /** @format int32 */
  code?: number;
  data?: CityDto[];
  msg?: string;
}

export interface JsonResultHotel {
  /** @format int32 */
  code?: number;
  data?: HotelRes;
  msg?: string;
}

export interface JsonResultHotelRoom {
  /** @format int32 */
  code?: number;
  data?: HotelRoomRes;
  msg?: string;
}

export interface JsonResultHotelOrder {
  /** @format int32 */
  code?: number;
  data?: HotelOrder;
  msg?: string;
}

export interface JsonResultHotelOrderRefund {
  /** @format int32 */
  code?: number;
  data?: HotelOrderRefund;
  msg?: string;
}

export interface JsonResultHotelBanner {
  /** @format int32 */
  code?: number;
  data?: HotelBannerRes;
  msg?: string;
}

export interface JsonResultSysUserVo {
  /** @format int32 */
  code?: number;
  data?: SysUserVo;
  msg?: string;
}

export interface JsonResultListMemBaseInfo {
  /** @format int32 */
  code?: number;
  data?: MemBaseInfo[];
  msg?: string;
}

export interface JsonResultCommentsVO {
  /** @format int32 */
  code?: number;
  data?: CommentsVO;
  msg?: string;
}

export interface JsonResultPageInfoInformationCommentResponseDTO {
  code: number;
  msg: string;
  data: {
    pageNum: number;
    pageSize: number;
    size: number;
    startRow: number;
    endRow: number;
    total: number;
    pages: number;
    list: { informationId?: number; title?: string; commentId?: number; content?: string; publishTime?: string }[];
    prePage: number;
    nextPage: number;
    isFirstPage: boolean;
    isLastPage: boolean;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    navigatePages: number;
    navigatepageNums: number[];
    navigateFirstPage: number;
    navigateLastPage: number;
    firstPage: number;
    lastPage: number;
  };
}

export interface PagedAllResultOrderVO {
  isLastPage?: boolean;
  list?: OrderVO[];

  /** @format int64 */
  total?: number;
}

export interface JsonResultPagedAllResultOrderVO {
  /** @format int32 */
  code?: number;
  data?: PagedAllResultOrderVO;
  msg?: string;
}

export interface PagedResultMarketingActivityGroupRecordsItemDto {
  list?: MarketingActivityGroupRecordsItemDto[];

  /** @format int64 */
  total?: number;
}

export interface JsonResultPagedResultMarketingActivityGroupRecordsItemDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultMarketingActivityGroupRecordsItemDto;
  msg?: string;
}

export interface PagedScrollResultMarketingActivityGroupRecordsItemDto {
  isLastPage?: boolean;
  list?: MarketingActivityGroupRecordsItemDto[];
}

export interface JsonResultPagedScrollResultMarketingActivityGroupRecordsItemDto {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultMarketingActivityGroupRecordsItemDto;
  msg?: string;
}

export interface PagedScrollResultMarketingActivityOfGroupWebListVo {
  isLastPage?: boolean;
  list?: MarketingActivityOfGroupWebListVo[];
}

export interface PagedScrollResultMarketingActivityGroupRecordsWebListVo {
  isLastPage?: boolean;
  list?: MarketingActivityGroupRecordsWebListVo[];
}

export interface PagedScrollResultMarketingActivityGroupRecordsItemWebInfoVo {
  isLastPage?: boolean;
  list?: MarketingActivityGroupRecordsItemWebInfoVo[];
}

export interface JsonResultPagedScrollResultMarketingActivityOfGroupWebListVo {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultMarketingActivityOfGroupWebListVo;
  msg?: string;
}

export interface JsonResultPagedScrollResultMarketingActivityGroupRecordsItemWebInfoVo {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultMarketingActivityGroupRecordsItemWebInfoVo;
  msg?: string;
}

export interface JsonResultMarketingActivityOfGroupWebListVo {
  /** @format int32 */
  code?: number;
  data?: MarketingActivityOfGroupWebListVo;
  msg?: string;
}

export interface JsonResultMarketingActivityGroupRecordsWebListAndNumVo {
  /** @format int32 */
  code?: number;
  data?: MarketingActivityGroupRecordsWebListAndNumVo;
  msg?: string;
}

export interface JsonResultMarketingActivityGroupRecordsWebInfoVo {
  /** @format int32 */
  code?: number;
  data?: MarketingActivityGroupRecordsWebInfoVo;
  msg?: string;
}

export interface PagedResultMarketingActivityOfGroupVo {
  list?: MarketingActivityOfGroupVo[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultMarketingActivityOfGroupStatVo {
  list?: MarketingActivityOfGroupStatVo[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultMarketingActivityOfGroupOrderVo {
  list?: MarketingActivityOfGroupOrderVo[];

  /** @format int64 */
  total?: number;
}

export interface JsonResultPagedResultMarketingActivityOfGroupVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultMarketingActivityOfGroupVo;
  msg?: string;
}

export interface JsonResultPagedResultMarketingActivityOfGroupStatVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultMarketingActivityOfGroupStatVo;
  msg?: string;
}

export interface JsonResultPagedResultMarketingActivityOfGroupOrderVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultMarketingActivityOfGroupOrderVo;
  msg?: string;
}

export interface JsonResultMarketingActivityOfGroupDto {
  /** @format int32 */
  code?: number;
  data?: MarketingActivityOfGroupDto;
  msg?: string;
}

export interface PagedResultKpiStatDto {
  list?: KpiStatDto[];

  /** @format int64 */
  total?: number;
}

export interface JsonResultPagedResultKpiStatDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultKpiStatDto;
  msg?: string;
}

export interface JsonResultListGradeStatDto {
  /** @format int32 */
  code?: number;
  data?: GradeStatDto[];
  msg?: string;
}

export interface PagedResultOrderGoodsStatItemVO {
  list?: OrderGoodsStatItemVO[];

  /** @format int64 */
  total?: number;
}

export interface JsonResultOrderGoodsStatVO {
  /** @format int32 */
  code?: number;
  data?: OrderGoodsStatVO;
  msg?: string;
}

export interface JsonResultMemberLoginOutputDto {
  /** @format int32 */
  code?: number;
  data?: MemberLoginOutputDto;
  msg?: string;
}

export interface PagedResultRechargeRecordOutputDto {
  list?: RechargeRecordOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface JsonResultPagedResultRechargeRecordOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultRechargeRecordOutputDto;
  msg?: string;
}

export interface JsonResultScoreMonthStatisticsVO {
  /** @format int32 */
  code?: number;
  data?: ScoreMonthStatisticsVO;
  msg?: string;
}

export interface PageInfoPostsResponseDTO {
  /** @format int32 */
  endRow?: number;

  /** @format int32 */
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;

  /** @format int32 */
  lastPage?: number;
  list?: PostsResponseDTO[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int32 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface PageInfoInformationResponseDTO {
  /** @format int32 */
  endRow?: number;

  /** @format int32 */
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;

  /** @format int32 */
  lastPage?: number;
  list?: InformationResponseDTO[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int32 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface PageInfoInformationClassifyResponseDTO {
  /** @format int32 */
  endRow?: number;

  /** @format int32 */
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;

  /** @format int32 */
  lastPage?: number;
  list?: InformationClassifyResponseDTO[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int32 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface PageInfoCommentResponseDTO {
  /** @format int32 */
  endRow?: number;

  /** @format int32 */
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;

  /** @format int32 */
  lastPage?: number;
  list?: CommentResponseDTO[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int32 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface JsonResultPostsResponseDTO {
  data?: PostsResponseDTO;

  /** 状态码;000000:成功,其余失败 */
  errorCode?: string;

  /** 错误信息 */
  errorMsg?: string;
}

export interface JsonResultPostsClassifyResponseDTO {
  data?: PostsClassifyResponseDTO;

  /** 状态码;000000:成功,其余失败 */
  errorCode?: string;

  /** 错误信息 */
  errorMsg?: string;
}

export interface JsonResultPageInfoPostsResponseDTO {
  data?: PageInfoPostsResponseDTO;

  /** 状态码;000000:成功,其余失败 */
  errorCode?: string;

  /** 错误信息 */
  errorMsg?: string;
}

export interface JsonResultPageInfoInformationResponseDTO {
  data?: PageInfoInformationResponseDTO;

  /** 状态码;000000:成功,其余失败 */
  errorCode?: string;

  /** 错误信息 */
  errorMsg?: string;
}

export interface JsonResultPageInfoInformationClassifyResponseDTO {
  data?: PageInfoInformationClassifyResponseDTO;

  /** 状态码;000000:成功,其余失败 */
  errorCode?: string;

  /** 错误信息 */
  errorMsg?: string;
}

export interface JsonResultPageInfoCommentResponseDTO {
  data?: PageInfoCommentResponseDTO;

  /** 状态码;000000:成功,其余失败 */
  errorCode?: string;

  /** 错误信息 */
  errorMsg?: string;
}

export interface JsonResultListPostsClassifyResponseDTO {
  /** 数据对象 */
  data?: PostsClassifyResponseDTO[];

  /** 状态码;000000:成功,其余失败 */
  errorCode?: string;

  /** 错误信息 */
  errorMsg?: string;
}

export interface JsonResultListInformationClassifyResponseDTO {
  /** 数据对象 */
  data?: InformationClassifyResponseDTO[];

  /** 状态码;000000:成功,其余失败 */
  errorCode?: string;

  /** 错误信息 */
  errorMsg?: string;
}

export interface JsonResultInformationResponseDTO {
  data?: InformationResponseDTO;

  /** 状态码;000000:成功,其余失败 */
  errorCode?: string;

  /** 错误信息 */
  errorMsg?: string;
}

export interface JsonResultInformationClassifyResponseDTO {
  data?: InformationClassifyResponseDTO;

  /** 状态码;000000:成功,其余失败 */
  errorCode?: string;

  /** 错误信息 */
  errorMsg?: string;
}

export interface JsonResultListGoodsGradeVO {
  /** @format int32 */
  code?: number;
  data?: GoodsGradeVO[];
  msg?: string;
}

export interface JsonResultListReachStandUpgradeConfOutputDto {
  /** @format int32 */
  code?: number;
  data?: ReachStandUpgradeConfOutputDto[];
  msg?: string;
}

export interface JsonResultBuyerGradeResponseDTO {
  /** @format int32 */
  code?: number;
  data?: BuyerGradeResponseDTO;
  msg?: string;
}

export interface PagedResultGoodsGroupOutputDto {
  list?: GoodsGroupOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface JsonResultPagedResultGoodsGroupOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultGoodsGroupOutputDto;
  msg?: string;
}

export interface JsonResultGoodsGroupOutputDto {
  /** @format int32 */
  code?: number;
  data?: GoodsGroupOutputDto;
  msg?: string;
}

export interface PagedResultMemCouponListVo {
  list?: MemCouponListVo[];

  /** @format int64 */
  total?: number;
}

export interface JsonResultPagedResultMemCouponListVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultMemCouponListVo;
  msg?: string;
}

export interface JsonResultListBalanceFlowOutputDto {
  /** @format int32 */
  code?: number;
  data?: BalanceFlowOutputDto[];
  msg?: string;
}

export interface PageInfoMemBindRecordListResponseDto {
  /** @format int64 */
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: MemBindRecordListResponseDto[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int64 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface JsonResultPageInfoMemBindRecordListResponseDto {
  /** @format int32 */
  code?: number;
  data?: PageInfoMemBindRecordListResponseDto;
  msg?: string;
}

export interface PageInfoMemLabelResponseDTO {
  /** @format int64 */
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: MemLabelResponseDTO[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int64 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface JsonResultPageInfoMemLabelResponseDTO {
  /** @format int32 */
  code?: number;
  data?: PageInfoMemLabelResponseDTO;
  msg?: string;
}

export interface JsonResultMemLabelResponseDTO {
  /** @format int32 */
  code?: number;
  data?: MemLabelResponseDTO;
  msg?: string;
}

export interface JsonResultListMemBindRecordListResponseDto {
  /** @format int32 */
  code?: number;
  data?: MemBindRecordListResponseDto[];
  msg?: string;
}

export interface JsonResultListEarningRecordListResponseDto {
  /** @format int32 */
  code?: number;
  data?: EarningRecordListResponseDto[];
  msg?: string;
}

export interface JsonResultBuyerManageAppDetailResponseDTO {
  /** @format int32 */
  code?: number;
  data?: BuyerManageAppDetailResponseDTO;
  msg?: string;
}

export interface PageInfoMemberListDto {
  /** @format int64 */
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: MemberListDto[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int64 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface PageInfoEarningRecordOutputDto {
  /** @format int64 */
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: EarningRecordOutputDto[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int64 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface PageInfoBuyerGradeListResponseDTO {
  /** @format int64 */
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: BuyerGradeListResponseDTO[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int64 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface JsonResultPageInfoMemberListDto {
  /** @format int32 */
  code?: number;
  data?: PageInfoMemberListDto;
  msg?: string;
}

export interface JsonResultPageInfoEarningRecordOutputDto {
  /** @format int32 */
  code?: number;
  data?: PageInfoEarningRecordOutputDto;
  msg?: string;
}

export interface JsonResultPageInfoBuyerGradeListResponseDTO {
  /** @format int32 */
  code?: number;
  data?: PageInfoBuyerGradeListResponseDTO;
  msg?: string;
}

export interface PagedResultGoodsTagOutputDto {
  list?: GoodsTagOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PageInfoBuyerManageListResponseDTO {
  /** @format int64 */
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: BuyerManageListResponseDTO[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int64 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface JsonResultPagedResultGoodsTagOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultGoodsTagOutputDto;
  msg?: string;
}

export interface JsonResultPageInfoBuyerManageListResponseDTO {
  /** @format int32 */
  code?: number;
  data?: PageInfoBuyerManageListResponseDTO;
  msg?: string;
}

export interface JsonResultMemCouponStatisticVo {
  /** @format int32 */
  code?: number;
  data?: MemCouponStatisticVo;
  msg?: string;
}

export interface JsonResultListMemCouponListVo {
  /** @format int32 */
  code?: number;
  data?: MemCouponListVo[];
  msg?: string;
}

export interface JsonResultGoodsTagOutputDto {
  /** @format int32 */
  code?: number;
  data?: GoodsTagOutputDto;
  msg?: string;
}

export interface JsonResultBuyerManageDetailResponseDTO {
  /** @format int32 */
  code?: number;
  data?: BuyerManageDetailResponseDTO;
  msg?: string;
}

export interface PagedScrollResultUserAddressOutPutDto {
  isLastPage?: boolean;
  list?: UserAddressOutPutDto[];
}

export interface PagedScrollResultScoreFlowOutputDto {
  isLastPage?: boolean;
  list?: ScoreFlowOutputDto[];
}

export interface PagedScrollResultRefundMasterDto {
  isLastPage?: boolean;
  list?: RefundMasterDto[];
}

export interface PagedScrollResultOrderVO {
  isLastPage?: boolean;
  list?: OrderVO[];
}

export interface PagedScrollResultMemCardDto {
  isLastPage?: boolean;
  list?: MemCardDto[];
}

export interface PagedScrollResultMemCouponVo {
  isLastPage?: boolean;
  list?: MemCouponVo[];
}

export interface PagedScrollResultMarketingActivityWebResultVo {
  isLastPage?: boolean;
  list?: MarketingActivityWebResultVo[];
}

export interface PagedScrollResultMarketingActivityGoodsVo {
  isLastPage?: boolean;
  list?: MarketingActivityGoodsVo[];
}

export interface PagedScrollResultMarketingActivityDto {
  isLastPage?: boolean;
  list?: MarketingActivityDto[];
}

export interface PagedScrollResultMallConfUserTaskDTO {
  isLastPage?: boolean;
  list?: MallConfUserTaskDTO[];
}

export interface PagedScrollResultGoodsVO {
  isLastPage?: boolean;
  list?: GoodsVO[];
}

export interface PagedScrollResultCommentsVO {
  isLastPage?: boolean;
  list?: CommentsVO[];
}

export interface PagedScrollResultCouponTemplateVo {
  isLastPage?: boolean;
  list?: CouponTemplateVo[];
}

export interface PagedScrollResultCollectionVo {
  isLastPage?: boolean;
  list?: CollectionVo[];
}

export interface PagedScrollResultBalanceFlowOutputDto {
  isLastPage?: boolean;
  list?: BalanceFlowOutputDto[];
}

export interface JsonResultInt {
  /** @format int32 */
  code?: number;

  /** @format int32 */
  data?: number;
  msg?: string;
}

export interface JsonResultBoolean {
  /** @format int32 */
  code?: number;
  data?: boolean;
  msg?: string;
}

export interface JsonResultBigdecimal {
  /** @format int32 */
  code?: number;
  data?: number;
  msg?: string;
}

export interface JsonResultUserAddressOutPutDto {
  /** @format int32 */
  code?: number;
  data?: UserAddressOutPutDto;
  msg?: string;
}

export interface JsonResultSigninSimpleOutputDto {
  /** @format int32 */
  code?: number;
  data?: SigninSimpleOutputDto;
  msg?: string;
}

export interface JsonResultSigninInfoOutputDto {
  /** @format int32 */
  code?: number;
  data?: SigninInfoOutputDto;
  msg?: string;
}

export interface JsonResultSigninDetailOutputDto {
  /** @format int32 */
  code?: number;
  data?: SigninDetailOutputDto;
  msg?: string;
}

export interface JsonResultPagedScrollResultUserAddressOutPutDto {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultUserAddressOutPutDto;
  msg?: string;
}

export interface JsonResultPagedScrollResultScoreFlowOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultScoreFlowOutputDto;
  msg?: string;
}

export interface JsonResultPagedScrollResultRefundMasterDto {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultRefundMasterDto;
  msg?: string;
}

export interface JsonResultPagedScrollResultOrderVO {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultOrderVO;
  msg?: string;
}

export interface JsonResultPagedScrollResultMemCouponVo {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultMemCouponVo;
  msg?: string;
}

export interface JsonResultPagedScrollResultMemCardDto {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultMemCardDto;
  msg?: string;
}

export interface JsonResultPagedScrollResultMarketingActivityWebResultVo {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultMarketingActivityWebResultVo;
  msg?: string;
}

export interface JsonResultPagedScrollResultMarketingActivityGoodsVo {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultMarketingActivityGoodsVo;
  msg?: string;
}

export interface JsonResultPagedScrollResultMarketingActivityDto {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultMarketingActivityDto;
  msg?: string;
}

export interface JsonResultPagedScrollResultMallConfUserTaskDTO {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultMallConfUserTaskDTO;
  msg?: string;
}

export interface JsonResultPagedScrollResultGoodsVO {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultGoodsVO;
  msg?: string;
}

export interface JsonResultPagedScrollResultCommentsVO {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultCommentsVO;
  msg?: string;
}

export interface JsonResultPagedScrollResultCouponTemplateVo {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultCouponTemplateVo;
  msg?: string;
}

export interface JsonResultPagedScrollResultCollectionVo {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultCollectionVo;
  msg?: string;
}

export interface JsonResultPagedScrollResultBalanceFlowOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultBalanceFlowOutputDto;
  msg?: string;
}

export interface JsonResultOrderPayDTO {
  /** @format int32 */
  code?: number;
  data?: OrderPayDTO;
  msg?: string;
}

export interface JsonResultOrderCountVO {
  /** @format int32 */
  code?: number;
  data?: OrderCountVO;
  msg?: string;
}

export interface JsonResultOrderCalculateResponse {
  /** @format int32 */
  code?: number;
  data?: OrderCalculateResponse;
  msg?: string;
}

export interface JsonResultNewcomerGiftOutputDto {
  /** @format int32 */
  code?: number;
  data?: NewcomerGiftOutputDto;
  msg?: string;
}

export interface JsonResultMemberOutputDto {
  /** @format int32 */
  code?: number;
  data?: MemberOutputDto;
  msg?: string;
}

export interface JsonResultMemStatisticsDto {
  /** @format int32 */
  code?: number;
  data?: MemStatisticsDto;
  msg?: string;
}

export interface JsonResultMemCardRelationDto {
  /** @format int32 */
  code?: number;
  data?: MemCardRelationDto;
  msg?: string;
}

export interface JsonResultMallConfPageSimpleOutputDto {
  /** @format int32 */
  code?: number;
  data?: MallConfPageSimpleOutputDto;
  msg?: string;
}

export interface JsonResultListInt {
  /** @format int32 */
  code?: number;
  data?: number[];
  msg?: string;
}

export interface JsonResultListShopCartVO {
  /** @format int32 */
  code?: number;
  data?: ShopCartVO[];
  msg?: string;
}

export interface JsonResultListRechargeAmount {
  /** @format int32 */
  code?: number;
  data?: RechargeAmount[];
  msg?: string;
}

export interface JsonResultListPopupAdsDto {
  /** @format int32 */
  code?: number;
  data?: PopupAdsDto[];
  msg?: string;
}

export interface JsonResultListHotKeywordDto {
  /** @format int32 */
  code?: number;
  data?: HotKeywordDto[];
  msg?: string;
}

export interface JsonResultListBannerPositionOutputDto {
  /** @format int32 */
  code?: number;
  data?: BannerPositionOutputDto[];
  msg?: string;
}

export interface JsonResultGoodsSkuStockAndPriceVo {
  /** @format int32 */
  code?: number;
  data?: GoodsSkuStockAndPriceVo;
  msg?: string;
}

export interface JsonResultExpressTrackRespDto {
  /** @format int32 */
  code?: number;
  data?: ExpressTrackRespDto;
  msg?: string;
}

export interface JsonResultCouponAvailableGoodsOutputDto {
  /** @format int32 */
  code?: number;
  data?: CouponAvailableGoodsOutputDto;
  msg?: string;
}

export interface PagedResultUserAgreementRecordDto {
  list?: UserAgreementRecordDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultUserAgreeRecordDto {
  list?: UserAgreeRecordDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultSysUserVo {
  list?: SysUserVo[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultSysRoleOutputDto {
  list?: SysRoleOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultSysResource {
  list?: SysResourceRes[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultSysDeptVo {
  list?: SysDeptVo[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultRefundMasterDto {
  list?: RefundMasterDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultScoreFlowOutputDto {
  list?: ScoreFlowOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultMaterialVo {
  list?: MaterialVo[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultPopupAdsDto {
  list?: PopupAdsDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultOrderVO {
  list?: OrderVO[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultOperateLogsDto {
  list?: OperateLogsDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultMarketingActivityVo {
  list?: MarketingActivityVo[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultMemberDetailOutputDto {
  list?: MemberDetailOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultMemCouponRecordVo {
  list?: MemCouponRecordVo[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultMemCardDto {
  list?: MemCardDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultMallConfUserTaskDTO {
  list?: MallConfUserTaskDTO[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultLiveStatistics {
  list?: LiveStatistics[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultMallConfPageOutputDto {
  list?: MallConfPageOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultLivePage {
  list?: LivePage[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultHotKeywordDto {
  list?: HotKeywordDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultGoodsSpecOutputDto {
  list?: GoodsSpecOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultGoodsVO {
  list?: GoodsVO[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultExpressTemplateListOutputDto {
  list?: ExpressTemplateListOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultCouponTemplateVo {
  list?: CouponTemplateVo[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultCouponRecordOutputDto {
  list?: CouponRecordOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultCouponRecordDetailOutputDto {
  list?: CouponRecordDetailOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultCouponCodeOutputDto {
  list?: CouponCodeOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultCouponCodeDetailOutputDto {
  list?: CouponCodeDetailOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultCommentsVO {
  list?: CommentsVO[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultCommentsHeadImgOutputDto {
  list?: CommentsHeadImgOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultBannerOutputDto {
  list?: BannerOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultBalanceFlowOutputDto {
  list?: BalanceFlowOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface JsonResultString {
  /** @format int32 */
  code?: number;
  data?: string;
  msg?: string;
}

export interface JsonResultLong {
  /** @format int32 */
  code?: number;

  /** @format int64 */
  data?: number;
  msg?: string;
}

export interface JsonResultObject {
  /** @format int32 */
  code?: number;
  data?: object;
  msg?: string;
}

export interface JsonResultVoid {
  /** @format int32 */
  code?: number;
  msg?: string;
}

export interface JsonResultUserAgreementRecordDto {
  /** @format int32 */
  code?: number;
  data?: UserAgreementRecordDto;
  msg?: string;
}

export interface JsonResultScoreGetOutputDto {
  /** @format int32 */
  code?: number;
  data?: ScoreGetOutputDto;
  msg?: string;
}

export interface JsonResultSysRoleDetailOutputDto {
  /** @format int32 */
  code?: number;
  data?: SysRoleDetailOutputDto;
  msg?: string;
}

export interface JsonResultSysResource {
  /** @format int32 */
  code?: number;
  data?: SysResourceRes;
  msg?: string;
}

export interface JsonResultSysAuthVo {
  /** @format int32 */
  code?: number;
  data?: SysAuthVo;
  msg?: string;
}

export interface JsonResultStatisticsCountOutputDto {
  /** @format int32 */
  code?: number;
  data?: StatisticsCountOutputDto;
  msg?: string;
}

export interface JsonResultStatisticsGraphOutputDto {
  /** @format int32 */
  code?: number;
  data?: StatisticsGraphOutputDto;
  msg?: string;
}

export interface JsonResultSigninTaskOutputDto {
  /** @format int32 */
  code?: number;
  data?: SigninTaskOutputDto;
  msg?: string;
}

export interface JsonResultResourceDetailVo {
  /** @format int32 */
  code?: number;
  data?: ResourceDetailVo;
  msg?: string;
}

export interface JsonResultRefundMasterDto {
  /** @format int32 */
  code?: number;
  data?: RefundMasterDto;
  msg?: string;
}

export interface JsonResultPopupAdsDto {
  /** @format int32 */
  code?: number;
  data?: PopupAdsDto;
  msg?: string;
}

export interface JsonResultPagedResultUserAgreeRecordDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultUserAgreeRecordDto;
  msg?: string;
}

export interface JsonResultPagedResultUserAgreementRecordDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultUserAgreementRecordDto;
  msg?: string;
}

export interface JsonResultPagedResultSysUserVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultSysUserVo;
  msg?: string;
}

export interface JsonResultPagedResultSysRoleOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultSysRoleOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultSysResource {
  /** @format int32 */
  code?: number;
  data?: PagedResultSysResource;
  msg?: string;
}

export interface JsonResultPagedResultSysDeptVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultSysDeptVo;
  msg?: string;
}

export interface JsonResultPagedResultScoreFlowOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultScoreFlowOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultOrderVO {
  /** @format int32 */
  code?: number;
  data?: PagedResultOrderVO;
  msg?: string;
}

export interface JsonResultPagedResultRefundMasterDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultRefundMasterDto;
  msg?: string;
}

export interface JsonResultPagedResultPopupAdsDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultPopupAdsDto;
  msg?: string;
}

export interface JsonResultPagedResultOperateLogsDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultOperateLogsDto;
  msg?: string;
}

export interface JsonResultPagedResultMemberDetailOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultMemberDetailOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultMaterialVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultMaterialVo;
  msg?: string;
}

export interface JsonResultPagedResultMarketingActivityVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultMarketingActivityVo;
  msg?: string;
}

export interface JsonResultPagedResultMemCouponRecordVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultMemCouponRecordVo;
  msg?: string;
}

export interface JsonResultPagedResultMemCardDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultMemCardDto;
  msg?: string;
}

export interface JsonResultPagedResultMallConfUserTaskDTO {
  /** @format int32 */
  code?: number;
  data?: PagedResultMallConfUserTaskDTO;
  msg?: string;
}

export interface JsonResultPagedResultMallConfPageOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultMallConfPageOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultLiveStatistics {
  /** @format int32 */
  code?: number;
  data?: PagedResultLiveStatistics;
  msg?: string;
}

export interface JsonResultPagedResultLivePage {
  /** @format int32 */
  code?: number;
  data?: PagedResultLivePage;
  msg?: string;
}

export interface JsonResultPagedResultGoodsVO {
  /** @format int32 */
  code?: number;
  data?: PagedResultGoodsVO;
  msg?: string;
}

export interface JsonResultPagedResultHotKeywordDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultHotKeywordDto;
  msg?: string;
}

export interface JsonResultPagedResultGoodsSpecOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultGoodsSpecOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultCouponTemplateVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultCouponTemplateVo;
  msg?: string;
}

export interface JsonResultPagedResultCouponRecordOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultCouponRecordOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultExpressTemplateListOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultExpressTemplateListOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultCouponRecordDetailOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultCouponRecordDetailOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultCouponCodeOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultCouponCodeOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultBannerOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultBannerOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultCommentsVO {
  /** @format int32 */
  code?: number;
  data?: PagedResultCommentsVO;
  msg?: string;
}

export interface JsonResultPagedResultCouponCodeDetailOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultCouponCodeDetailOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultCommentsHeadImgOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultCommentsHeadImgOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultBalanceFlowOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultBalanceFlowOutputDto;
  msg?: string;
}

export interface JsonResultOrderVO {
  /** @format int32 */
  code?: number;
  data?: OrderVORes;
  msg?: string;
}

export interface JsonResultMemberDetailOutputDto {
  /** @format int32 */
  code?: number;
  data?: MemberDetailOutputDto;
  msg?: string;
}

export interface JsonResultMapStringString {
  /** @format int32 */
  code?: number;
  data?: Record<string, string>;
  msg?: string;
}

export interface JsonResultMemCardDto {
  /** @format int32 */
  code?: number;
  data?: MemCardDto;
  msg?: string;
}

export interface JsonResultLive {
  /** @format int32 */
  code?: number;
  data?: Live;
  msg?: string;
}

export interface JsonResultMarketingActivityDto {
  /** @format int32 */
  code?: number;
  data?: MarketingActivityDto;
  msg?: string;
}

export interface JsonResultMapStringObject {
  /** @format int32 */
  code?: number;
  data?: object;
  msg?: string;
}

export interface JsonResultMallConfPageOutputDto {
  /** @format int32 */
  code?: number;
  data?: MallConfPageOutputDto;
  msg?: string;
}

export interface JsonResultLoginOutputDto {
  /** @format int32 */
  code?: number;
  data?: LoginOutputDto;
  msg?: string;
}

export interface JsonResultLivePage {
  /** @format int32 */
  code?: number;
  data?: LivePage;
  msg?: string;
}

export interface JsonResultListSysRole {
  /** @format int32 */
  code?: number;
  data?: SysRole[];
  msg?: string;
}

export interface JsonResultListString {
  /** @format int32 */
  code?: number;
  data?: string[];
  msg?: string;
}

export interface JsonResultListTreeResourceVo {
  /** @format int32 */
  code?: number;
  data?: TreeResourceVo[];
  msg?: string;
}

export interface JsonResultListSysRoleSelectOutputDto {
  /** @format int32 */
  code?: number;
  data?: SysRoleSelectOutputDto[];
  msg?: string;
}

export interface JsonResultListSysResource {
  /** @format int32 */
  code?: number;
  data?: SysResource[];
  msg?: string;
}

export interface JsonResultListSysApi {
  /** @format int32 */
  code?: number;
  data?: SysApiRes[];
  msg?: string;
}

export interface JsonResultListRefundReasonOutputDto {
  /** @format int32 */
  code?: number;
  data?: RefundReasonOutputDto[];
  msg?: string;
}

export interface JsonResultListMenuTreeOutputDto {
  /** @format int32 */
  code?: number;
  data?: MenuTreeOutputDto[];
  msg?: string;
}

export interface JsonResultListMaterialGroupVo {
  /** @format int32 */
  code?: number;
  data?: MaterialGroupVo[];
  msg?: string;
}

export interface JsonResultListLive {
  /** @format int32 */
  code?: number;
  data?: Live[];
  msg?: string;
}

export interface JsonResultListMallExpressCompanyVo {
  /** @format int32 */
  code?: number;
  data?: MallExpressCompanyVo[];
  msg?: string;
}

export interface JsonResultListMallConfPageOutputDto {
  /** @format int32 */
  code?: number;
  data?: MallConfPageOutputDto[];
  msg?: string;
}

export interface JsonResultListCouponTemplateVo {
  /** @format int32 */
  code?: number;
  data?: CouponTemplateVo[];
  msg?: string;
}

export interface JsonResultListConfConfigOutputDto {
  /** @format int32 */
  code?: number;
  data?: ConfConfigOutputDto[];
  msg?: string;
}

export interface JsonResultListAddressOutputDto {
  /** @format int32 */
  code?: number;
  data?: AddressOutputDto[];
  msg?: string;
}

export interface JsonResultHotKeywordDto {
  /** @format int32 */
  code?: number;
  data?: HotKeywordDto;
  msg?: string;
}

export interface JsonResultGoodsVO {
  /** @format int32 */
  code?: number;
  data?: GoodsVO;
  msg?: string;
}

export interface JsonResultGoodsSpecOutputDto {
  /** @format int32 */
  code?: number;
  data?: GoodsSpecOutputDto;
  msg?: string;
}

export interface JsonResultGoodsClassifyOutputDto {
  /** @format int32 */
  code?: number;
  data?: GoodsClassifyOutputDto;
  msg?: string;
}

export interface JsonResultExpressTemplateDetailOutputDto {
  /** @format int32 */
  code?: number;
  data?: ExpressTemplateDetailOutputDto;
  msg?: string;
}

export interface JsonResultCouponTemplateVo {
  /** @format int32 */
  code?: number;
  data?: CouponTemplateVo;
  msg?: string;
}

export interface JsonResultBannerOutputDto {
  /** @format int32 */
  code?: number;
  data?: BannerOutputDto;
  msg?: string;
}

export interface JsonResultBalanceGetOutputDto {
  /** @format int32 */
  code?: number;
  data?: BalanceGetOutputDto;
  msg?: string;
}

export interface JsonResultAddressOutputDto {
  /** @format int32 */
  code?: number;
  data?: AddressOutputDto;
  msg?: string;
}

export interface AdminActivityGetParams {
  /**
   * 活动名称
   * @example
   */
  activityName?: string;

  /**
   * 活动编号
   * @example
   */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @example
   */
  activityStatus?: number;

  /**
   * 活动状态列表 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @example
   */
  activityStatusList?: string[];

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  activityType?: number;

  /**
   * 活动类型列表 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  activityTypeList?: string[];

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 创建结束时间(报名日期)
   * @example
   */
  endGmtCreated?: string;

  /**
   * 活动开始结束时间
   * @example
   */
  endStartTime?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 创建开始时间(报名日期)
   * @example
   */
  startGmtCreated?: string;

  /**
   * 活动开始时间
   * @example
   */
  startStartTime?: string;

  /**
   * 时间类型 0:进行中 1:未开始 2：已结束
   * @example
   */
  timeType?: number;
}

export interface AdminActivityFlashSaleGetParams {
  /**
   * 活动名称
   * @example
   */
  activityName?: string;

  /**
   * 活动编号
   * @example
   */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @example
   */
  activityStatus?: number;

  /**
   * 活动状态列表 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @example
   */
  activityStatusList?: string[];

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  activityType?: number;

  /**
   * 活动类型列表 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  activityTypeList?: string[];

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 创建结束时间(报名日期)
   * @example
   */
  endGmtCreated?: string;

  /**
   * 活动开始结束时间
   * @example
   */
  endStartTime?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 创建开始时间(报名日期)
   * @example
   */
  startGmtCreated?: string;

  /**
   * 活动开始时间
   * @example
   */
  startStartTime?: string;

  /**
   * 时间类型 0:进行中 1:未开始 2：已结束
   * @example
   */
  timeType?: number;
}

export interface AdminActivityFreeShippingGetParams {
  /**
   * 活动名称
   * @example
   */
  activityName?: string;

  /**
   * 活动编号
   * @example
   */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @example
   */
  activityStatus?: number;

  /**
   * 活动状态列表 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @example
   */
  activityStatusList?: string[];

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  activityType?: number;

  /**
   * 活动类型列表 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  activityTypeList?: string[];

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 创建结束时间(报名日期)
   * @example
   */
  endGmtCreated?: string;

  /**
   * 活动开始结束时间
   * @example
   */
  endStartTime?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 创建开始时间(报名日期)
   * @example
   */
  startGmtCreated?: string;

  /**
   * 活动开始时间
   * @example
   */
  startStartTime?: string;

  /**
   * 时间类型 0:进行中 1:未开始 2：已结束
   * @example
   */
  timeType?: number;
}

export interface AdminActivityFullGetParams {
  /**
   * 活动名称
   * @example
   */
  activityName?: string;

  /**
   * 活动编号
   * @example
   */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @example
   */
  activityStatus?: number;

  /**
   * 活动状态列表 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @example
   */
  activityStatusList?: string[];

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  activityType?: number;

  /**
   * 活动类型列表 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  activityTypeList?: string[];

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 创建结束时间(报名日期)
   * @example
   */
  endGmtCreated?: string;

  /**
   * 活动开始结束时间
   * @example
   */
  endStartTime?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 创建开始时间(报名日期)
   * @example
   */
  startGmtCreated?: string;

  /**
   * 活动开始时间
   * @example
   */
  startStartTime?: string;

  /**
   * 时间类型 0:进行中 1:未开始 2：已结束
   * @example
   */
  timeType?: number;
}

export interface AdminActivityPresaleGetParams {
  /**
   * 活动名称
   * @example
   */
  activityName?: string;

  /**
   * 活动编号
   * @example
   */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @example
   */
  activityStatus?: number;

  /**
   * 活动状态列表 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @example
   */
  activityStatusList?: string[];

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  activityType?: number;

  /**
   * 活动类型列表 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  activityTypeList?: string[];

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 创建结束时间(报名日期)
   * @example
   */
  endGmtCreated?: string;

  /**
   * 活动开始结束时间
   * @example
   */
  endStartTime?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 创建开始时间(报名日期)
   * @example
   */
  startGmtCreated?: string;

  /**
   * 活动开始时间
   * @example
   */
  startStartTime?: string;

  /**
   * 时间类型 0:进行中 1:未开始 2：已结束
   * @example
   */
  timeType?: number;
}

export interface AdminApiMallConfMaterialDeleteDeleteParams {
  /**
   * ids
   * @example
   */
  ids: string;
}

export interface AdminApiMallConfMaterialQueryListGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 分组id
   * @example
   */
  groupId?: number;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 类型 0 图片 1 视频
   * @example
   */
  type?: number;
}

export interface AdminApiMallConfMaterialGroupDeleteDeleteParams {
  /**
   * id
   * @example
   */
  id: number;
}

export interface AdminApiMallConfMaterialGroupQueryListAllGetParams {
  /**
   * 分组名称
   * @example
   */
  name?: string;

  /**
   * 分组类型 0图片 1视频
   * @example
   */
  type?: number;
}

export interface AdminApiMemberExportGetParams {
  /**
   * 可用积分 正序 asc 倒叙 desc
   * @example
   */
  availableScoreSort?: string;

  /**
   * 账户余额排序 正序 asc 倒叙 desc
   * @example
   */
  balanceSort?: string;

  /**
   * 可用余额开始
   * @example
   */
  beginBalanceAmount?: number;

  /**
   * 累计消费金额开始
   * @example
   */
  beginConsumeAmount?: number;

  /**
   * 可用积分开始
   * @example
   */
  beginScoreAmount?: number;

  /**
   * 注册开始时间开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 累计金额排序 正序 asc 倒叙 desc
   * @example
   */
  consumeAmountSort?: string;

  /**
   * 注册时间排序 正序 asc 倒叙 desc
   * @example
   */
  createTimeSort?: string;

  /**
   * 可用余额结束
   * @example
   */
  endBalanceAmount?: number;

  /**
   * 累计消费金额结束
   * @example
   */
  endConsumeAmount?: number;

  /**
   * 可用积分结束
   * @example
   */
  endScoreAmount?: number;

  /**
   * 注册结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /** @example  */
  idInList?: string[];

  /** @example  */
  idNotInList?: string[];

  /**
   * 身份 0 游客  2 会员
   * @example
   */
  memberType?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 用户名称/手机号/id
   * @example
   */
  searchString?: string;

  /**
   * 状态 1：正常 0：禁用
   * @example
   */
  status?: number;

  /**
   * 所属上级
   * @example
   */
  superiorUserId?: number;
}

export interface AdminApiMemberQueryGetParams {
  /**
   * 可用积分 正序 asc 倒叙 desc
   * @example
   */
  availableScoreSort?: string;

  /**
   * 账户余额排序 正序 asc 倒叙 desc
   * @example
   */
  balanceSort?: string;

  /**
   * 可用余额开始
   * @example
   */
  beginBalanceAmount?: number;

  /**
   * 累计消费金额开始
   * @example
   */
  beginConsumeAmount?: number;

  /**
   * 可用积分开始
   * @example
   */
  beginScoreAmount?: number;

  /**
   * 注册开始时间开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 累计金额排序 正序 asc 倒叙 desc
   * @example
   */
  consumeAmountSort?: string;

  /**
   * 注册时间排序 正序 asc 倒叙 desc
   * @example
   */
  createTimeSort?: string;

  /**
   * 可用余额结束
   * @example
   */
  endBalanceAmount?: number;

  /**
   * 累计消费金额结束
   * @example
   */
  endConsumeAmount?: number;

  /**
   * 可用积分结束
   * @example
   */
  endScoreAmount?: number;

  /**
   * 注册结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /** @example  */
  idInList?: string[];

  /** @example  */
  idNotInList?: string[];

  /**
   * 身份 0 游客  2 会员
   * @example
   */
  memberType?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 用户名称/手机号/id
   * @example
   */
  searchString?: string;

  /**
   * 状态 1：正常 0：禁用
   * @example
   */
  status?: number;

  /**
   * 所属上级
   * @example
   */
  superiorUserId?: number;
}

export interface AdminApiSmsSendCodeGetParams {
  /**
   * mobile
   * @example
   */
  mobile?: string;

  /**
   * scene
   * @example
   */
  scene?: string;
}

export interface AdminApiSysDeptDeleteDeleteParams {
  /**
   * 部门id
   * @example
   */
  id?: number;
}

export interface AdminApiSysDeptQueryGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 部门名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminApiSysResourceGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 资源名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 父级菜单ID
   * @example
   */
  parentId?: number;

  /**
   * 资源类型
   * @example
   */
  type?: string;
}

export interface AdminApiSysResourceTreeGetParams {
  /**
   * 资源名称
   * @example
   */
  name?: string;

  /**
   * 父级ID
   * @example
   */
  parentId?: number;

  /**
   * 资源类型
   * @example
   */
  type?: string;
}

export interface AdminApiSysRoleDeleteDeleteParams {
  /**
   * 角色id
   * @example
   */
  id?: number;
}

export interface AdminApiSysRoleQueryGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 角色名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminApiSysUserDeleteDeleteParams {
  /**
   * 员工id
   * @example
   */
  id?: number;
}

export interface AdminApiSysUserExportGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 员工名称
   * @example
   */
  username?: string;
}

export interface AdminApiSysUserQueryGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 员工名称
   * @example
   */
  username?: string;
}

export interface AdminApiSysUserResetDefaultDeleteParams {
  /**
   * 员工id
   * @example
   */
  id?: number;
}

export interface AdminBuyerManageV1ConsoleEarningRecordListGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 订货商ID
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 订单号/用户编码/昵称
   * @example
   */
  searchString?: string;
}

export interface AdminBuyerManageV1ConsolePageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 等级id
   * @example
   */
  gradeId?: number;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 手机账号/昵称
   * @example
   */
  searchString?: string;
}

export interface AdminBuyerManageV1ConsoleSubMemberListGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 订货商ID
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 用户编码/昵称
   * @example
   */
  searchString?: string;
}

export interface AdminCacheGetParams {
  /**
   * key
   * @example
   */
  key?: string;
}

export interface AdminCommentsGetParams {
  /**
   * 评论状态  0 待审核 1 审核通过 2:审核驳回
   * @example
   */
  auditStatus?: number;

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 评价来源 1：后台评价 2：用户添加
   * @example
   */
  fromType?: number;

  /**
   * 商品编号
   * @example
   */
  goodsNo?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 手机号
   * @example
   */
  mobile?: string;

  /**
   * 评论用户
   * @example
   */
  nickName?: string;

  /**
   * 订单编号
   * @example
   */
  orderNo?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 显示状态 显示_true 隐藏_false
   * @example
   */
  show?: string;
}

export interface AdminCommentsExportGetParams {
  /**
   * 评论状态  0 待审核 1 审核通过 2:审核驳回
   * @example
   */
  auditStatus?: number;

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 评价来源 1：后台评价 2：用户添加
   * @example
   */
  fromType?: number;

  /**
   * 商品编号
   * @example
   */
  goodsNo?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 手机号
   * @example
   */
  mobile?: string;

  /**
   * 评论用户
   * @example
   */
  nickName?: string;

  /**
   * 订单编号
   * @example
   */
  orderNo?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 显示状态 显示_true 隐藏_false
   * @example
   */
  show?: string;
}

export interface AdminGoodsExportGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 身份限制
   * @example
   */
  buyerGrade?: number;

  /**
   * 末级分类id  二级分类
   * @example
   */
  classifyId?: string;

  /**
   * 分类父id1（末级的上一级） 一级分类
   * @example
   */
  classifyPid1?: string;

  /**
   * 分类父id2（分类父id1的上一级）
   * @example
   */
  classifyPid2?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 前台是否可见
   * @example
   */
  frontShow?: string;

  /**
   * 商品名称
   * @example
   */
  goodsName?: string;

  /**
   * 商品编号
   * @example
   */
  goodsNo?: string;

  /**
   * 商品编号列表
   * @example
   */
  goodsNoList?: string[];

  /**
   * 分组ID
   * @example
   */
  groupId?: number;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 是否推荐 0 否 1 是
   * @example
   */
  recommendStatus?: string;

  /**
   * 销售方式1:纯现金 2: 纯积分 3:现金+积分
   * @example
   */
  saleType?: number;

  /**
   * 排序类型 1:sort 2:实际销量倒序 3:实际销量正序 4:价格倒序 5:价格正序 6：上架时间倒序 7：上架时间正序 8：积分倒序 9：积分正序,10:创建时间倒序
   * @example
   */
  selectSortType?: number;

  /**
   * 是否上架 0 否 1 是
   * @example
   */
  shelved?: string;

  /**
   * 去升级
   * @example
   */
  toUp?: string;

  /**
   * 商品类型 0 实物商品 1 虚拟商品
   * @example
   */
  virtualType?: number;
}

export interface AdminHotKeywordGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 热词
   * @example
   */
  hotKeyword?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminLiveGetParams {
  /**
   * 直播ids集合
   * @example
   */
  ids?: string[];
}

export interface AdminLiveUpdateGetParams {
  /** @example  */
  activityID?: string;

  /** @example  */
  announcement?: string;

  /** @example  */
  coverImage?: string;

  /** @example  */
  eventType?: string;

  /** @example  */
  liveStatus?: string;

  /** @example  */
  liveTime?: string;

  /** @example  */
  liveTimeDate?: string;

  /** @example  */
  name?: string;

  /** @example  */
  sign?: string;

  /** @example  */
  status?: string;

  /** @example  */
  timestamp?: string;

  /** @example  */
  viewUrl?: string;
}

export interface AdminLiveStatisticsGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 商品编号/商品名称/规格编号
   * @example
   */
  goodsKeyword?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 直播间ID/直播名称
   * @example
   */
  liveKeyword?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminLiveStatisticsExportGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 商品编号/商品名称/规格编号
   * @example
   */
  goodsKeyword?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 直播间ID/直播名称
   * @example
   */
  liveKeyword?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminLivePageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 页面名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminMallAddressQueryListAllGetParams {
  /**
   * isDefault
   * @example
   */
  isDefault?: string[];
}

export interface AdminMallBalanceQueryUserIdGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 是否本月
   * @example
   */
  currentMonth?: string;

  /**
   * 结束日期
   * @example
   */
  endDate?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 余额增加类型
   * @example
   */
  plusType?: number;

  /**
   * 开始日期
   * @example
   */
  startDate?: string;

  /**
   * 余额扣减类型
   * @example
   */
  subtractType?: number;

  /**
   * userId
   * @example
   */
  userId: number;
}

export interface AdminMallBannerQueryListGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 显示状态 1显示0不显示
   * @example
   */
  showStatus?: number;
}

export interface AdminMallClassifyTreeGetParams {
  /**
   * 前端是否展示
   * @example
   */
  frontShow?: string;

  /**
   * 商品类型 0 普通商品(默认) 1 积分商品
   * @example
   */
  goodsType?: number;
}

export interface AdminMallCommentsHeadImgListGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminMallConfigQueryByKeyGetParams {
  /**
   * key
   * @example
   */
  key?: string;
}

export interface AdminMallConfigQueryByMultipleKeyGetParams {
  /**
   * key
   * @example
   */
  key?: string;
}

export interface AdminMallCouponExportGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 礼券记录id
   * @example
   */
  couponId?: number;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 会员编号
   * @example
   */
  memberNo?: string;

  /**
   * 手机号
   * @example
   */
  mobile?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 状态 0 失败 1 成功
   * @example
   */
  status?: number;
}

export interface AdminMallCouponCodeGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 礼券名称
   * @example
   */
  couponName?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminMallCouponCodeDetailGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 绑定状态 1：未兑换 2：已兑换 4：过期未兑换
   * @example
   */
  bindStatus?: number;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 核销用户昵称
   * @example
   */
  nickName?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 核销用户电话
   * @example
   */
  userMobile?: string;
}

export interface AdminMallExpressQueryGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /** @example  */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminMallGroupGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 商品类型 0 普通商品 1 积分商品
   * @example
   */
  goodsType?: number;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminMallMemberCardGetParams {
  /**
   * 获得方式 1：自动发放 2：用户领取 3：后台发放 4：付费
   * @example
   */
  acquisitionType?: number;

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * id
   * @example
   */
  id?: number;

  /**
   * 会员卡名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminMallMemberCardMemberUserIdGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * userId
   * @example
   */
  userId: number;
}

export interface AdminMallPageDeleteDeleteParams {
  /**
   * 自定义页面id
   * @example
   */
  id: number;
}

export interface AdminMallPageDetailGetParams {
  /**
   * 自定义页面id
   * @example
   */
  id?: number;
}

export interface AdminMallPageQueryGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminMallScoreQueryUserIdGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * userId
   * @example
   */
  userId: number;
}

export interface AdminMallSpecExportGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 父id
   * @example
   */
  pid?: number;

  /**
   * 规格ID
   * @example
   */
  specCode?: string;

  /**
   * 规格名称
   * @example
   */
  specName?: string;
}

export interface AdminMallSpecQueryGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 父id
   * @example
   */
  pid?: number;

  /**
   * 规格ID
   * @example
   */
  specCode?: string;

  /**
   * 规格名称
   * @example
   */
  specName?: string;
}

export interface AdminMallStatisticsExportOrderDetailsStatisticsGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 渠道类型
   * @example
   */
  orderChannelType?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 类型 0：日 1：月 2：年
   * @example
   */
  type?: number;
}

export interface AdminMallStatisticsGraphOrderCountStatisticsGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 渠道类型
   * @example
   */
  orderChannelType?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 类型 0：日 1：月 2：年
   * @example
   */
  type?: number;
}

export interface AdminMallStatisticsGraphSaleAmountStatisticsGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 渠道类型
   * @example
   */
  orderChannelType?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 类型 0：日 1：月 2：年
   * @example
   */
  type?: number;
}

export interface AdminMallStatisticsGraphUserCountStatisticsGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 渠道类型
   * @example
   */
  orderChannelType?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 类型 0：日 1：月 2：年
   * @example
   */
  type?: number;
}

export interface AdminMallStatisticsOrderDetailsStatisticsGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 渠道类型
   * @example
   */
  orderChannelType?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 类型 0：日 1：月 2：年
   * @example
   */
  type?: number;
}

export interface AdminMallUserTaskConfigGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 是否启用 0 否 1是
   * @example
   */
  enabled?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * id
   * @example
   */
  id?: number;

  /**
   * 任务名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 任务key
   * @example
   */
  taskKey?: string;

  /**
   * 用户id
   * @example
   */
  userId?: number;
}

export interface AdminMallCouponTemplateDeleteDeleteParams {
  /**
   * 优惠劵id
   * @example
   */
  id: number;
}

export interface AdminMallCouponTemplateDetailGetParams {
  /**
   * 优惠劵id
   * @example
   */
  id?: number;
}

export interface AdminMallCouponTemplateQueryListGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 优惠劵类型 0 抵扣 1 折扣 2 赠品 3 兑换 4 包邮
   * @example
   */
  couponType?: number;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 优惠劵状态 0 已作废 3 生效中 4 未生效 5 已过期
   * @example
   */
  status?: number;

  /**
   * 是否有库存，只对 true 生效
   * @example
   */
  stock?: string;

  /**
   * 优惠劵编号
   * @example
   */
  templateNo?: string;
}

export interface AdminMemCouponDetailGetParams {
  /**
   * 优惠劵id
   * @example
   */
  id?: number;
}

export interface AdminMemCouponExportGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 用户昵称/手机号/优惠券名称
   * @example
   */
  searchString?: string;

  /**
   * 状态 0 未使用 1 已使用 2 已过期 3已作废
   * @example
   */
  useStatus?: number;
}

export interface AdminMemCouponListGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 用户编码
   * @example
   */
  memberNo?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminMemCouponQueryListGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 用户昵称/手机号/优惠券名称
   * @example
   */
  searchString?: string;

  /**
   * 状态 0 未使用 1 已使用 2 已过期 3已作废
   * @example
   */
  useStatus?: number;
}

export interface AdminMemCouponStatisticGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 用户编码
   * @example
   */
  memberNo?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminOperateLogsGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 业务id
   * @example
   */
  bizNo?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 电话
   * @example
   */
  mobile?: string;

  /**
   * 模块
   * @example
   */
  module?: string;

  /**
   * 操作类型
   * @example
   */
  operateType?: string;

  /**
   * 操作者
   * @example
   */
  operator?: string;

  /**
   * 操作者名称
   * @example
   */
  operatorName?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 平台
   * @example
   */
  platform?: string;

  /**
   * 租户
   * @example
   */
  tenant?: string;
}

export interface AdminOperateLogsExportGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 业务id
   * @example
   */
  bizNo?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 电话
   * @example
   */
  mobile?: string;

  /**
   * 模块
   * @example
   */
  module?: string;

  /**
   * 操作类型
   * @example
   */
  operateType?: string;

  /**
   * 操作者
   * @example
   */
  operator?: string;

  /**
   * 操作者名称
   * @example
   */
  operatorName?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 平台
   * @example
   */
  platform?: string;

  /**
   * 租户
   * @example
   */
  tenant?: string;
}

export interface AdminOrdersGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 订货商等级名称(会员类型，普通会员传0)
   * @example
   */
  buyerGradeName?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 商品名称
   * @example
   */
  goodsName?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  marketingType?: number;

  /**
   * 用户编号
   * @example
   */
  memberNo?: string;

  /**
   * 订单渠道
   * @example
   */
  orderChannelType?: string;

  /**
   * 订单编号
   * @example
   */
  orderNo?: string;

  /**
   * 订单状态
   * @example
   */
  orderStatus?: number;

  /**
   * 订单类型
   * @example
   */
  orderType?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 查询类型 0：全部 1：待付款 2：待发货 3：待收货 4：待评价 5：交易完成 6：交易关闭 7：已付款-拼团中 8：待发货 (拼团成功) 9：交易关闭 (拼团失败)
   * @example
   */
  queryType?: number;

  /**
   * 收货人地址
   * @example
   */
  shippingAddress?: string;

  /**
   * 收件人手机号
   * @example
   */
  shippingMobile?: string;

  /**
   * 收件人姓名
   * @example
   */
  shippingName?: string;

  /**
   * 会员手机号
   * @example
   */
  userMobile?: string;

  /**
   * 会员姓名
   * @example
   */
  userName?: string;
}

export interface AdminOrdersExportGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 订货商等级名称(会员类型，普通会员传0)
   * @example
   */
  buyerGradeName?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 商品名称
   * @example
   */
  goodsName?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  marketingType?: number;

  /**
   * 用户编号
   * @example
   */
  memberNo?: string;

  /**
   * 订单渠道
   * @example
   */
  orderChannelType?: string;

  /**
   * 订单编号
   * @example
   */
  orderNo?: string;

  /**
   * 订单状态
   * @example
   */
  orderStatus?: number;

  /**
   * 订单类型
   * @example
   */
  orderType?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 查询类型 0：全部 1：待付款 2：待发货 3：待收货 4：待评价 5：交易完成 6：交易关闭 7：已付款-拼团中 8：待发货 (拼团成功) 9：交易关闭 (拼团失败)
   * @example
   */
  queryType?: number;

  /**
   * 收货人地址
   * @example
   */
  shippingAddress?: string;

  /**
   * 收件人手机号
   * @example
   */
  shippingMobile?: string;

  /**
   * 收件人姓名
   * @example
   */
  shippingName?: string;

  /**
   * 会员手机号
   * @example
   */
  userMobile?: string;

  /**
   * 会员姓名
   * @example
   */
  userName?: string;
}

export interface AdminOrdersListGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 订货商等级名称(会员类型，普通会员传0)
   * @example
   */
  buyerGradeName?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 商品名称
   * @example
   */
  goodsName?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  marketingType?: number;

  /**
   * 用户编号
   * @example
   */
  memberNo?: string;

  /**
   * 订单渠道
   * @example
   */
  orderChannelType?: string;

  /**
   * 订单编号
   * @example
   */
  orderNo?: string;

  /**
   * 订单状态
   * @example
   */
  orderStatus?: number;

  /**
   * 订单类型
   * @example
   */
  orderType?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 查询类型 0：全部 1：待付款 2：待发货 3：待收货 4：待评价 5：交易完成 6：交易关闭 7：已付款-拼团中 8：待发货 (拼团成功) 9：交易关闭 (拼团失败)
   * @example
   */
  queryType?: number;

  /**
   * 收货人地址
   * @example
   */
  shippingAddress?: string;

  /**
   * 收件人手机号
   * @example
   */
  shippingMobile?: string;

  /**
   * 收件人姓名
   * @example
   */
  shippingName?: string;

  /**
   * 会员手机号
   * @example
   */
  userMobile?: string;

  /**
   * 会员姓名
   * @example
   */
  userName?: string;
}

export interface AdminPopupAdsGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 到期时间
   * @example
   */
  expirationTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 标题
   * @example
   */
  title?: string;
}

export interface AdminRefundInfoGetParams {
  /**
   * refundNo
   * @example
   */
  refundNo?: string;
}

export interface AdminRefundListGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 会员编号
   * @example
   */
  memberNo?: string;

  /**
   * 订单编号
   * @example
   */
  orderNo?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 售后单编号
   * @example
   */
  refundNo?: string;

  /**
   * 售后状态
   * @example
   */
  refundStatus?: number;

  /**
   * 售后类型 0：退款 1：退货退款
   * @example
   */
  refundType?: number;

  /**
   * 会员手机号
   * @example
   */
  userMobile?: string;

  /**
   * 会员姓名
   * @example
   */
  userName?: string;
}

export interface AdminRichtextGetParams {
  /**
   * id
   * @example
   */
  id?: string;
}

export interface AdminScoreOrdersGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 订货商等级名称(会员类型，普通会员传0)
   * @example
   */
  buyerGradeName?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 商品名称
   * @example
   */
  goodsName?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  marketingType?: number;

  /**
   * 用户编号
   * @example
   */
  memberNo?: string;

  /**
   * 订单渠道
   * @example
   */
  orderChannelType?: string;

  /**
   * 订单编号
   * @example
   */
  orderNo?: string;

  /**
   * 订单状态
   * @example
   */
  orderStatus?: number;

  /**
   * 订单类型
   * @example
   */
  orderType?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 查询类型 0：全部 1：待付款 2：待发货 3：待收货 4：待评价 5：交易完成 6：交易关闭 7：已付款-拼团中 8：待发货 (拼团成功) 9：交易关闭 (拼团失败)
   * @example
   */
  queryType?: number;

  /**
   * 收货人地址
   * @example
   */
  shippingAddress?: string;

  /**
   * 收件人手机号
   * @example
   */
  shippingMobile?: string;

  /**
   * 收件人姓名
   * @example
   */
  shippingName?: string;

  /**
   * 会员手机号
   * @example
   */
  userMobile?: string;

  /**
   * 会员姓名
   * @example
   */
  userName?: string;
}

export interface AdminScoreOrdersExportGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 订货商等级名称(会员类型，普通会员传0)
   * @example
   */
  buyerGradeName?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 商品名称
   * @example
   */
  goodsName?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  marketingType?: number;

  /**
   * 用户编号
   * @example
   */
  memberNo?: string;

  /**
   * 订单渠道
   * @example
   */
  orderChannelType?: string;

  /**
   * 订单编号
   * @example
   */
  orderNo?: string;

  /**
   * 订单状态
   * @example
   */
  orderStatus?: number;

  /**
   * 订单类型
   * @example
   */
  orderType?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 查询类型 0：全部 1：待付款 2：待发货 3：待收货 4：待评价 5：交易完成 6：交易关闭 7：已付款-拼团中 8：待发货 (拼团成功) 9：交易关闭 (拼团失败)
   * @example
   */
  queryType?: number;

  /**
   * 收货人地址
   * @example
   */
  shippingAddress?: string;

  /**
   * 收件人手机号
   * @example
   */
  shippingMobile?: string;

  /**
   * 收件人姓名
   * @example
   */
  shippingName?: string;

  /**
   * 会员手机号
   * @example
   */
  userMobile?: string;

  /**
   * 会员姓名
   * @example
   */
  userName?: string;
}

export interface AdminUserAgreementUserAgreeRecordGetParams {
  /**
   * 同意开始时间
   * @example
   */
  agreeBeginTime?: string;

  /**
   * 同意结束时间
   * @example
   */
  agreeEndTime?: string;

  /**
   * 协议编号
   * @example
   */
  agreementNo?: string;

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 用户协议类型 1：用户协议 2：会员协议
   * @example
   */
  type?: number;

  /**
   * 更新开始时间
   * @example
   */
  updateBeginTime?: string;

  /**
   * 更新结束时间
   * @example
   */
  updateEndTime?: string;

  /**
   * 用户id
   * @example
   */
  userId?: number;
}

export interface AdminUserAgreementUserAgreementRecordGetParams {
  /**
   * 协议编号
   * @example
   */
  agreementNo?: string;

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 操作人
   * @example
   */
  createUser?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 手机号
   * @example
   */
  mobile?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 用户协议类型 1：用户协议 2：会员协议
   * @example
   */
  type?: number;
}

export interface AdminV1ConsoleBuyerGradePageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * ID数组
   * @example
   */
  ids?: string[];

  /**
   * 名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface WechatActivityGetParams {
  /**
   * 活动名称
   * @example
   */
  activityName?: string;

  /**
   * 活动编号
   * @example
   */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @example
   */
  activityStatus?: number;

  /**
   * 活动状态列表 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @example
   */
  activityStatusList?: string[];

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  activityType?: number;

  /**
   * 活动类型列表 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  activityTypeList?: string[];

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 创建结束时间(报名日期)
   * @example
   */
  endGmtCreated?: string;

  /**
   * 活动开始结束时间
   * @example
   */
  endStartTime?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 创建开始时间(报名日期)
   * @example
   */
  startGmtCreated?: string;

  /**
   * 活动开始时间
   * @example
   */
  startStartTime?: string;

  /**
   * 时间类型 0:进行中 1:未开始 2：已结束
   * @example
   */
  timeType?: number;
}

export interface WechatActivityGoodsGetParams {
  /**
   * activityNo
   * @example
   */
  activityNo?: string;
}

export interface WechatActivityFlashSaleGetParams {
  /**
   * 活动名称
   * @example
   */
  activityName?: string;

  /**
   * 活动编号
   * @example
   */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @example
   */
  activityStatus?: number;

  /**
   * 活动状态列表 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @example
   */
  activityStatusList?: string[];

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  activityType?: number;

  /**
   * 活动类型列表 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  activityTypeList?: string[];

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 创建结束时间(报名日期)
   * @example
   */
  endGmtCreated?: string;

  /**
   * 活动开始结束时间
   * @example
   */
  endStartTime?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 创建开始时间(报名日期)
   * @example
   */
  startGmtCreated?: string;

  /**
   * 活动开始时间
   * @example
   */
  startStartTime?: string;

  /**
   * 时间类型 0:进行中 1:未开始 2：已结束
   * @example
   */
  timeType?: number;
}

export interface WechatActivityPreSaleGetParams {
  /**
   * 活动名称
   * @example
   */
  activityName?: string;

  /**
   * 活动编号
   * @example
   */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @example
   */
  activityStatus?: number;

  /**
   * 活动状态列表 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @example
   */
  activityStatusList?: string[];

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  activityType?: number;

  /**
   * 活动类型列表 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  activityTypeList?: string[];

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 创建结束时间(报名日期)
   * @example
   */
  endGmtCreated?: string;

  /**
   * 活动开始结束时间
   * @example
   */
  endStartTime?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 创建开始时间(报名日期)
   * @example
   */
  startGmtCreated?: string;

  /**
   * 活动开始时间
   * @example
   */
  startStartTime?: string;

  /**
   * 时间类型 0:进行中 1:未开始 2：已结束
   * @example
   */
  timeType?: number;
}

export interface WechatApiSmsSendCodeGetParams {
  /**
   * mobile
   * @example
   */
  mobile?: string;

  /**
   * scene
   * @example
   */
  scene?: string;
}

export interface WechatBuyerManageV1AppTeamListGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface WechatCollectionGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface WechatGoodsClassifyGetParams {
  /**
   * 前端是否展示
   * @example
   */
  frontShow?: string;

  /**
   * 商品类型 0 普通商品(默认) 1 积分商品
   * @example
   */
  goodsType?: number;
}

export interface WechatGoodsCommentsNoGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * no
   * @example
   */
  no: string;
}

export interface WechatGoodsDetailsNoGetParams {
  /**
   * 直播id
   * @example
   */
  liveId?: string;

  /**
   * no
   * @example
   */
  no: string;
}

export interface WechatGoodsSkuStockAndPriceSkuNoGetParams {
  /**
   * tiered
   * @example
   */
  tiered?: string;

  /**
   * skuNo
   * @example
   */
  skuNo: string;
}

export interface WechatLiveGetParams {
  /**
   * 直播ids集合
   * @example
   */
  ids?: string[];
}

export interface WechatMallAddressQueryListGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface WechatMallBalanceQueryGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 是否本月
   * @example
   */
  currentMonth?: string;

  /**
   * 结束日期
   * @example
   */
  endDate?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 余额增加类型
   * @example
   */
  plusType?: number;

  /**
   * 开始日期
   * @example
   */
  startDate?: string;

  /**
   * 余额扣减类型
   * @example
   */
  subtractType?: number;
}

export interface WechatMallConfigQueryByKeyGetParams {
  /**
   * key
   * @example
   */
  key?: string;
}

export interface WechatMallConfigQueryByMultipleKeyGetParams {
  /**
   * key
   * @example
   */
  key?: string;
}

export interface WechatMallMemberCardGetParams {
  /**
   * 获得方式 1：自动发放 2：用户领取 3：后台发放 4：付费
   * @example
   */
  acquisitionType?: number;

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * id
   * @example
   */
  id?: number;

  /**
   * 会员卡名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface WechatMallMemberCardNotHaveListGetParams {
  /**
   * 获得方式 1：自动发放 2：用户领取 3：后台发放 4：付费
   * @example
   */
  acquisitionType?: number;

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * id
   * @example
   */
  id?: number;

  /**
   * 会员卡名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface WechatMallScoreQueryGetParams {
  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 查询类型：0-全部，1-获取，2-使用
   * @example
   */
  type?: number;
}

export interface WechatMallSigninSwitchGetParams {
  /**
   * date
   * @example
   */
  date: string;
}

export interface WechatMallUserTaskConfigGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 是否启用 0 否 1是
   * @example
   */
  enabled?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * id
   * @example
   */
  id?: number;

  /**
   * 任务名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 任务key
   * @example
   */
  taskKey?: string;

  /**
   * 用户id
   * @example
   */
  userId?: number;
}

export interface WechatRichtextGetParams {
  /**
   * id
   * @example
   */
  id?: string;
}

export interface WechatWebMemCouponGetAvailableCouponGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface WechatWebMemCouponMyGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 优惠券类型集合 0 抵扣 1 折扣 2 赠品 3 兑换 4 包邮
   * @example
   */
  couponTypeList?: string[];

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 状态 1：已使用 2：已过期
   * @example
   */
  status?: number;
}

export interface WechatWebMemCouponMyHistoryGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 优惠券类型集合 0 抵扣 1 折扣 2 赠品 3 兑换 4 包邮
   * @example
   */
  couponTypeList?: string[];

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 状态 1：已使用 2：已过期
   * @example
   */
  status?: number;
}

export interface WechatWebMemCouponReceiveGetParams {
  /**
   * 优惠劵编码
   * @example
   */
  templateNo?: string;
}

export interface WechatWebMemberDecodePhoneGetParams {
  /**
   * code
   * @example
   */
  code?: string;

  /**
   * encrypted
   * @example
   */
  encrypted?: string;

  /**
   * iv
   * @example
   */
  iv?: string;
}

export interface WechatWebMemberDecodeUserInfoGetParams {
  /**
   * code
   * @example
   */
  code?: string;

  /**
   * encrypted
   * @example
   */
  encrypted?: string;

  /**
   * iv
   * @example
   */
  iv?: string;
}

export interface WechatWebMemberExistsUnionIdGetParams {
  /**
   * code
   * @example
   */
  code?: string;
}

export interface WechatWebMemberUpdateMobilePutParams {
  /**
   * 验证码
   * @example
   */
  code?: string;

  /**
   * 手机号
   * @example
   */
  mobile?: string;
}

export interface WechatWebRefundGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 查询条件
   * @example
   */
  keyword?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 售后状态
   * @example
   */
  refundStatus?: string;
}

export interface WechatWebRefundDeleteGetParams {
  /**
   * refundNo
   * @example
   */
  refundNo?: string;
}

export interface WechatWebRefundInfoGetParams {
  /**
   * refundNo
   * @example
   */
  refundNo?: string;
}

export interface WechatWebRefundRefundableFreightAmountGetParams {
  /**
   * orderNo
   * @example
   */
  orderNo?: string;
}

export interface WechatWepayNotifyPostParams {
  /** @example  */
  acct?: string;

  /** @example  */
  accttype?: string;

  /** @example  */
  appid?: string;

  /** @example  */
  chnltrxid?: string;

  /** @example  */
  cmid?: string;

  /** @example  */
  cusid?: string;

  /** @example  */
  cusorderid?: string;

  /** @example  */
  fee?: string;

  /** @example  */
  initamt?: string;

  /** @example  */
  outtrxid?: string;

  /** @example  */
  paytime?: string;

  /** @example  */
  sign?: string;

  /** @example  */
  signtype?: string;

  /** @example  */
  termrefnum?: string;

  /** @example  */
  termtraceno?: string;

  /** @example  */
  trxamt?: string;

  /** @example  */
  trxcode?: string;

  /** @example  */
  trxdate?: string;

  /** @example  */
  trxid?: string;

  /** @example  */
  trxreserved?: string;

  /** @example  */
  trxstatus?: string;
}

export interface WechatWepayRechargeNotifyPostParams {
  /** @example  */
  acct?: string;

  /** @example  */
  accttype?: string;

  /** @example  */
  appid?: string;

  /** @example  */
  chnltrxid?: string;

  /** @example  */
  cmid?: string;

  /** @example  */
  cusid?: string;

  /** @example  */
  cusorderid?: string;

  /** @example  */
  fee?: string;

  /** @example  */
  initamt?: string;

  /** @example  */
  outtrxid?: string;

  /** @example  */
  paytime?: string;

  /** @example  */
  sign?: string;

  /** @example  */
  signtype?: string;

  /** @example  */
  termrefnum?: string;

  /** @example  */
  termtraceno?: string;

  /** @example  */
  trxamt?: string;

  /** @example  */
  trxcode?: string;

  /** @example  */
  trxdate?: string;

  /** @example  */
  trxid?: string;

  /** @example  */
  trxreserved?: string;

  /** @example  */
  trxstatus?: string;
}

export interface WechatOrdersGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 订货商等级名称(会员类型，普通会员传0)
   * @example
   */
  buyerGradeName?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 商品名称
   * @example
   */
  goodsName?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  marketingType?: number;

  /**
   * 用户编号
   * @example
   */
  memberNo?: string;

  /**
   * 订单渠道
   * @example
   */
  orderChannelType?: string;

  /**
   * 订单编号
   * @example
   */
  orderNo?: string;

  /**
   * 订单状态
   * @example
   */
  orderStatus?: number;

  /**
   * 订单类型
   * @example
   */
  orderType?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 查询类型 0：全部 1：待付款 2：待发货 3：待收货 4：待评价 5：交易完成 6：交易关闭 7：已付款-拼团中 8：待发货 (拼团成功) 9：交易关闭 (拼团失败)
   * @example
   */
  queryType?: number;

  /**
   * 收货人地址
   * @example
   */
  shippingAddress?: string;

  /**
   * 收件人手机号
   * @example
   */
  shippingMobile?: string;

  /**
   * 收件人姓名
   * @example
   */
  shippingName?: string;

  /**
   * 会员手机号
   * @example
   */
  userMobile?: string;

  /**
   * 会员姓名
   * @example
   */
  userName?: string;
}

export interface WechatOrdersCommentListGetParams {
  /**
   * 数据状态  0 待审核 1 审核通过 2:审核驳回
   * @example
   */
  auditStatus?: number;

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface WechatOrdersExpressGetParams {
  /**
   * expressNo
   * @example
   */
  expressNo?: string;

  /**
   * orderNo
   * @example
   */
  orderNo?: string;
}

export interface AdminV1ConsoleMemLabelPageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminRefundExportGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 会员编号
   * @example
   */
  memberNo?: string;

  /**
   * 订单编号
   * @example
   */
  orderNo?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 售后单编号
   * @example
   */
  refundNo?: string;

  /**
   * 售后状态
   * @example
   */
  refundStatus?: number;

  /**
   * 售后类型 0：退款 1：退货退款
   * @example
   */
  refundType?: number;

  /**
   * 会员手机号
   * @example
   */
  userMobile?: string;

  /**
   * 会员姓名
   * @example
   */
  userName?: string;
}

export interface AdminGoodsGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 身份限制
   * @example
   */
  buyerGrade?: number;

  /**
   * 末级分类id  二级分类
   * @example
   */
  classifyId?: string;

  /**
   * 分类父id1（末级的上一级） 一级分类
   * @example
   */
  classifyPid1?: string;

  /**
   * 分类父id2（分类父id1的上一级）
   * @example
   */
  classifyPid2?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 前台是否可见
   * @example
   */
  frontShow?: string;

  /**
   * 商品名称
   * @example
   */
  goodsName?: string;

  /**
   * 商品编号
   * @example
   */
  goodsNo?: string;

  /**
   * 商品编号列表
   * @example
   */
  goodsNoList?: string[];

  /**
   * 分组ID
   * @example
   */
  groupId?: number;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 是否推荐 0 否 1 是
   * @example
   */
  recommendStatus?: string;

  /**
   * 销售方式1:纯现金 2: 纯积分 3:现金+积分
   * @example
   */
  saleType?: number;

  /**
   * 排序类型 1:sort 2:实际销量倒序 3:实际销量正序 4:价格倒序 5:价格正序 6：上架时间倒序 7：上架时间正序 8：积分倒序 9：积分正序,10:创建时间倒序
   * @example
   */
  selectSortType?: number;

  /**
   * 是否上架 0 否 1 是
   * @example
   */
  shelved?: string;

  /**
   * 去升级
   * @example
   */
  toUp?: string;

  /**
   * 商品类型 0 实物商品 1 虚拟商品
   * @example
   */
  virtualType?: number;
}

export interface AdminMallBalanceExportUserIdGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 是否本月
   * @example
   */
  currentMonth?: string;

  /**
   * 结束日期
   * @example
   */
  endDate?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 余额增加类型
   * @example
   */
  plusType?: number;

  /**
   * 开始日期
   * @example
   */
  startDate?: string;

  /**
   * 余额扣减类型
   * @example
   */
  subtractType?: number;

  /**
   * userId
   * @example
   */
  userId: number;
}

export interface AdminMallTagGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 商品类型 0 普通商品 1 积分商品
   * @example
   */
  goodsType?: number;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface CircleV1WebCommentListRepliesGetParams {
  /**
   * 查询开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 数据主体ID
   * @example
   */
  dataId?: number;

  /**
   * 查询结束时间
   * @example
   */
  endTime?: string;

  /**
   * 楼层评论ID
   * @example
   */
  floorId?: number;

  /**
   * 排序字段名
   * @example
   */
  orderField?: string;

  /**
   * 页码
   * @example
   */
  pageNum?: number;

  /**
   * 分页大小
   * @example
   */
  pageSize?: number;

  /**
   * 排序方式;ASC:升序DESC:降序
   * @example
   */
  sortEnum?: string;

  /**
   * 类型：1帖子，2资讯
   * @example
   */
  type: number;
}

export interface CircleV1WebCommentTopListGetParams {
  /**
   * 查询开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 数据主体ID
   * @example
   */
  dataId?: number;

  /**
   * 查询结束时间
   * @example
   */
  endTime?: string;

  /**
   * 楼层评论ID
   * @example
   */
  floorId?: number;

  /**
   * 排序字段名
   * @example
   */
  orderField?: string;

  /**
   * 页码
   * @example
   */
  pageNum?: number;

  /**
   * 分页大小
   * @example
   */
  pageSize?: number;

  /**
   * 排序方式;ASC:升序DESC:降序
   * @example
   */
  sortEnum?: string;

  /**
   * 类型：1帖子，2资讯
   * @example
   */
  type: number;
}

export interface CircleV1ConsoleInformationPageGetParams {
  /**
   * 资讯分类
   * @example
   */
  classifyId?: number;

  /**
   * 页码
   * @example
   */
  pageNum?: number;

  /**
   * 分页大小
   * @example
   */
  pageSize?: number;

  /**
   * 资讯标题
   * @example
   */
  title?: string;
}

export interface CircleV1ConsoleInformationclassifyPageGetParams {
  /**
   * 名称
   * @example
   */
  name?: string;

  /**
   * 页码
   * @example
   */
  pageNum?: number;

  /**
   * 分页大小
   * @example
   */
  pageSize?: number;
}

export interface CircleV1ConsolePostsAuditGetParams {
  /**
   * 帖子id
   * @example
   */
  postsId?: string;
}

export interface CircleV1ConsolePostsPageGetParams {
  /**
   * 审核状态：0未审核1已审核-1已驳回
   * @example
   */
  auditStatus?: number;

  /**
   * 查询开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 分类二级id
   * @example
   */
  classifyId?: number;

  /**
   * 分类一级id
   * @example
   */
  classifyPid?: number;

  /**
   * 查询结束时间
   * @example
   */
  endTime?: string;

  /**
   * 页码
   * @example
   */
  pageNum?: number;

  /**
   * 分页大小
   * @example
   */
  pageSize?: number;

  /**
   * 文章编号
   * @example
   */
  postsNo?: string;

  /**
   * 发布者昵称
   * @example
   */
  publisherNickname?: string;

  /**
   * 发布者编号
   * @example
   */
  publisherNo?: string;

  /**
   * 排序方式;ASC:升序DESC:降序
   * @example
   */
  sortEnum?: string;

  /**
   * 帖子来源:0自发贴；1后台发贴
   * @example
   */
  source?: number;

  /**
   * 标题
   * @example
   */
  title?: string;

  /**
   * 是否置顶
   * @example
   */
  top?: string;

  /**
   * 是否可见
   * @example
   */
  visible?: string;
}

export interface CircleV1WebInformationCollectGetParams {
  /**
   * 查询开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询结束时间
   * @example
   */
  endTime?: string;

  /** @example  */
  id?: number;

  /**
   * 咨询id
   * @example
   */
  informationId?: number;

  /**
   * 排序字段名
   * @example
   */
  orderField?: string;

  /**
   * 页码
   * @example
   */
  pageNum?: number;

  /**
   * 分页大小
   * @example
   */
  pageSize?: number;

  /**
   * 排序方式;ASC:升序DESC:降序
   * @example
   */
  sortEnum?: string;

  /**
   * 咨询标题
   * @example
   */
  title?: string;

  /**
   * 用户id
   * @example
   */
  userId?: number;
}

export interface CircleV1WebPostsMyGetParams {
  /**
   * 审核状态：0未审核1已审核-1已驳回
   * @example
   */
  auditStatus?: number;

  /**
   * 二级分类id
   * @example
   */
  classifyId?: number;

  /**
   * 页码
   * @example
   */
  pageNum?: number;

  /**
   * 分页大小
   * @example
   */
  pageSize?: number;

  /**
   * 标题
   * @example
   */
  title?: string;
}

export interface CircleV1WebPostsQueryGetParams {
  /**
   * 二级分类id
   * @example
   */
  classifyId?: number;

  /**
   * 页码
   * @example
   */
  pageNum?: number;

  /**
   * 分页大小
   * @example
   */
  pageSize?: number;

  /**
   * 标题
   * @example
   */
  title?: string;
}

export interface WechatWebMemberVerifyMobilePostParams {
  /**
   * 验证码
   * @example
   */
  code?: string;

  /**
   * 手机号
   * @example
   */
  mobile?: string;
}

export interface WechatAuthLoginGetParams {
  /**
   * 微信code
   * @example
   */
  code?: string;

  /**
   * 微信手机授权encrypted
   * @example
   */
  encrypted?: string;

  /**
   * 微信手机授权iv
   * @example
   */
  iv?: string;

  /**
   * 手机号
   * @example
   */
  mobile?: string;

  /**
   * 用户名称
   * @example
   */
  nickName?: string;

  /** @example  */
  orderChannelTypeEnum?: string;

  /**
   * 密钥
   * @example
   */
  secret?: string;

  /**
   * 登录类型 0:微信Code登录 1:手机号验证码登录 2:第三方密钥登录
   * @example
   */
  type?: number;

  /**
   * 验证码
   * @example
   */
  verificationCode?: string;
}

export interface AdminMallBalanceRechargeRecordGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 充值结束时间
   * @example
   */
  endDate?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 会员类型id
   * @example
   */
  gradeId?: number;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 会员编号
   * @example
   */
  memberNo?: string;

  /**
   * 会员手机号
   * @example
   */
  mobile?: string;

  /**
   * 会员昵称
   * @example
   */
  nickName?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /** @example  */
  startDate?: string;
}

export interface AdminMallBalanceRechargeRecordExportGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 充值结束时间
   * @example
   */
  endDate?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 会员类型id
   * @example
   */
  gradeId?: number;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 会员编号
   * @example
   */
  memberNo?: string;

  /**
   * 会员手机号
   * @example
   */
  mobile?: string;

  /**
   * 会员昵称
   * @example
   */
  nickName?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /** @example  */
  startDate?: string;
}

export interface AdminMallStatisticsBuyUserCountStatisticsGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 渠道类型
   * @example
   */
  orderChannelType?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 类型 0：日 1：月 2：年
   * @example
   */
  type?: number;
}

export interface AdminOrdersGoodsStatGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 渠道类型
   * @example
   */
  orderChannelType?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 类型 0：日 1：月 2：年
   * @example
   */
  type?: number;
}

export interface AdminOrdersGoodsStatExportGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 渠道类型
   * @example
   */
  orderChannelType?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 类型 0：日 1：月 2：年
   * @example
   */
  type?: number;
}

export interface AdminMallStatisticsKpiGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 渠道类型
   * @example
   */
  orderChannelType?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 类型 0：日 1：月 2：年
   * @example
   */
  type?: number;
}

export interface AdminMallStatisticsKpiExportGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 渠道类型
   * @example
   */
  orderChannelType?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 类型 0：日 1：月 2：年
   * @example
   */
  type?: number;
}

export interface AdminMallStatisticsKpiGradeGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 渠道类型
   * @example
   */
  orderChannelType?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 类型 0：日 1：月 2：年
   * @example
   */
  type?: number;
}

export interface AdminActivityGroupGetParams {
  /**
   * 活动名称
   * @example
   */
  activityName?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束
   * @example
   */
  activityStatus?: number;

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 团购人数
   * @example
   */
  groupBuyingNum?: number;

  /**
   * 拼团类型 1:普通团 2：一分团 3：阶梯团
   * @example
   */
  groupType?: number;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminActivityGroupStatOrderGetParams {
  /**
   * 活动编号
   * @example
   */
  activityNo?: string;

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 拼团状态:  0: 队长开团中（待支付） 1: 拼团中 2: 拼团成功 3: 拼团失败
   * @example
   */
  groupStatus?: number;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface WechatActivityGroupGetParams {
  /**
   * 活动名称
   * @example
   */
  activityName?: string;

  /**
   * 活动编号
   * @example
   */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @example
   */
  activityStatus?: number;

  /**
   * 活动状态列表 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @example
   */
  activityStatusList?: string[];

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  activityType?: number;

  /**
   * 活动类型列表 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  activityTypeList?: string[];

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 创建结束时间(报名日期)
   * @example
   */
  endGmtCreated?: string;

  /**
   * 活动开始结束时间
   * @example
   */
  endStartTime?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 创建开始时间(报名日期)
   * @example
   */
  startGmtCreated?: string;

  /**
   * 活动开始时间
   * @example
   */
  startStartTime?: string;

  /**
   * 时间类型 0:进行中 1:未开始 2：已结束
   * @example
   */
  timeType?: number;
}

export interface WechatActivityGroupRecordGoodsGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 商品编号
   * @example
   */
  goodsNo?: string;

  /**
   * 是否返回拼团人数
   * @example
   */
  hashNumber?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface WechatActivityGroupRecordInfoIdGetParams {
  /**
   * orderNo
   * @example
   */
  orderNo?: string;

  /**
   * share
   * @example
   */
  share?: number;

  /**
   * id
   * @example
   */
  id: number;
}

export interface WechatActivityGroupRecordMyGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 拼团状态:  0: 队长开团中（待支付） 1: 拼团中 2: 拼团成功 3: 拼团失败
   * @example
   */
  groupStatus?: number;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface WechatMallBalancePayStatusGetParams {
  /**
   * rechargeNo
   * @example
   */
  rechargeNo: string;
}

export interface AdminActivityChainGetParams {
  /**
   * 活动名称
   * @example
   */
  activityName?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束
   * @example
   */
  activityStatus?: number;

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 团购人数
   * @example
   */
  groupBuyingNum?: number;

  /**
   * 拼团类型 1:普通团 2：一分团 3：阶梯团
   * @example
   */
  groupType?: number;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminActivityChainStatOrderGetParams {
  /**
   * 活动编号
   * @example
   */
  activityNo?: string;

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 拼团状态:  0: 队长开团中（待支付） 1: 拼团中 2: 拼团成功 3: 拼团失败
   * @example
   */
  groupStatus?: number;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface WechatActivityChainGetParams {
  /**
   * 活动名称
   * @example
   */
  activityName?: string;

  /**
   * 活动编号
   * @example
   */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @example
   */
  activityStatus?: number;

  /**
   * 活动状态列表 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @example
   */
  activityStatusList?: string[];

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  activityType?: number;

  /**
   * 活动类型列表 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @example
   */
  activityTypeList?: string[];

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 创建结束时间(报名日期)
   * @example
   */
  endGmtCreated?: string;

  /**
   * 活动开始结束时间
   * @example
   */
  endStartTime?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 创建开始时间(报名日期)
   * @example
   */
  startGmtCreated?: string;

  /**
   * 活动开始时间
   * @example
   */
  startStartTime?: string;

  /**
   * 时间类型 0:进行中 1:未开始 2：已结束
   * @example
   */
  timeType?: number;
}

export interface WechatActivityChainRecordInfoGetParams {
  /**
   * 活动编号
   * @example
   */
  activityNo?: string;

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface WechatOrdersPayStatusGetParams {
  /**
   * orderNo
   * @example
   */
  orderNo: string;
}

export interface CircleV1WebInformationMyCommentsGetParams {
  /** @example  */
  pageNum?: string;

  /** @example  */
  pageSize?: string;
}

export interface AdminApiSysUserBaseInfoGetParams {
  /**
   * userId
   * @example
   */
  userId?: number;
}

export interface WechatHotelGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 城市
   * @example
   */
  city?: string;

  /**
   * 城市id
   * @example
   */
  cityId?: number;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 酒店名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 是否上架 0 否 1 是
   * @example
   */
  shelved?: string;
}

export interface WechatHotelBannerGetParams {
  /** @example  */
  createUser?: string;

  /**
   * 是否删除 0 正常 1 删除
   * @example
   */
  deleted?: string;

  /** @example  */
  gmtCreated?: string;

  /** @example  */
  gmtModified?: string;

  /** @example  */
  id?: number;

  /**
   * 图片/视频链接
   * @example
   */
  img?: string;

  /** @example  */
  modified?: string;

  /** @example  */
  modifyUser?: string;

  /**
   * 名称
   * @example
   */
  name?: string;

  /** @example  */
  status?: number;

  /** @example  */
  transient?: string;

  /**
   * 类型 0：图片，1：视频
   * @example
   */
  type?: number;

  /**
   * 外链地址
   * @example
   */
  url?: string;
}

export interface WechatHotelOrderGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 离店时间
   * @example
   */
  endDate?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /** @example  */
  HIdList?: string[];

  /**
   * 酒店名称
   * @example
   */
  hotelName?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 状态 0：待付款 1：待使用 2：已使用 3：已关闭
   * @example
   */
  orderStatus?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 下单结束时间
   * @example
   */
  payEndDate?: string;

  /**
   * 下单开始时间
   * @example
   */
  payStartDate?: string;

  /**
   * 入住时间
   * @example
   */
  startDate?: string;

  /**
   * 用户id
   * @example
   */
  userId?: number;
}

export interface WechatHotelOrderPayStatusGetParams {
  /**
   * orderNo
   * @example
   */
  orderNo: string;
}

export interface WechatHotelOrderRefundGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 离店时间
   * @example
   */
  endDate?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /** @example  */
  HIdList?: string[];

  /**
   * 酒店名称
   * @example
   */
  hotelName?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 入住时间
   * @example
   */
  startDate?: string;

  /**
   * 用户id
   * @example
   */
  userId?: number;
}

export interface WechatHotelRoomGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束日期
   * @example
   */
  endDate?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /** @example  */
  HId?: number;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 开始日期
   * @example
   */
  startDate?: string;
}

export interface WechatHotelRoomIdGetParams {
  /**
   * endDate
   * @example
   */
  endDate?: string;

  /**
   * startDate
   * @example
   */
  startDate?: string;

  /**
   * id
   * @example
   */
  id: string;
}

export interface WechatWepayHotelNotifyPostParams {
  /** @example  */
  acct?: string;

  /** @example  */
  accttype?: string;

  /** @example  */
  appid?: string;

  /** @example  */
  chnltrxid?: string;

  /** @example  */
  cmid?: string;

  /** @example  */
  cusid?: string;

  /** @example  */
  cusorderid?: string;

  /** @example  */
  fee?: string;

  /** @example  */
  initamt?: string;

  /** @example  */
  outtrxid?: string;

  /** @example  */
  paytime?: string;

  /** @example  */
  sign?: string;

  /** @example  */
  signtype?: string;

  /** @example  */
  termrefnum?: string;

  /** @example  */
  termtraceno?: string;

  /** @example  */
  trxamt?: string;

  /** @example  */
  trxcode?: string;

  /** @example  */
  trxdate?: string;

  /** @example  */
  trxid?: string;

  /** @example  */
  trxreserved?: string;

  /** @example  */
  trxstatus?: string;
}

export interface AdminApiSysUserListGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 员工名称
   * @example
   */
  username?: string;
}

export interface AdminHotelGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 城市
   * @example
   */
  city?: string;

  /**
   * 城市id
   * @example
   */
  cityId?: number;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 酒店名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 是否上架 0 否 1 是
   * @example
   */
  shelved?: string;
}

export interface AdminHotelBannerGetParams {
  /** @example  */
  createUser?: string;

  /**
   * 是否删除 0 正常 1 删除
   * @example
   */
  deleted?: string;

  /** @example  */
  gmtCreated?: string;

  /** @example  */
  gmtModified?: string;

  /** @example  */
  id?: number;

  /**
   * 图片/视频链接
   * @example
   */
  img?: string;

  /** @example  */
  modified?: string;

  /** @example  */
  modifyUser?: string;

  /**
   * 名称
   * @example
   */
  name?: string;

  /** @example  */
  status?: number;

  /** @example  */
  transient?: string;

  /**
   * 类型 0：图片，1：视频
   * @example
   */
  type?: number;

  /**
   * 外链地址
   * @example
   */
  url?: string;
}

export interface AdminHotelBlacklistGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 添加人
   * @example
   */
  createUser?: string;

  /**
   * 结束日期
   * @example
   */
  endDate?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 身份证号
   * @example
   */
  idcard?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 开始日期
   * @example
   */
  startDate?: string;
}

export interface AdminHotelBlacklistExportsGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 添加人
   * @example
   */
  createUser?: string;

  /**
   * 结束日期
   * @example
   */
  endDate?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 身份证号
   * @example
   */
  idcard?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 开始日期
   * @example
   */
  startDate?: string;
}

export interface AdminHotelOrderGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 离店时间
   * @example
   */
  endDate?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /** @example  */
  HIdList?: string[];

  /**
   * 酒店名称
   * @example
   */
  hotelName?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 状态 0：待付款 1：待使用 2：已使用 3：已关闭
   * @example
   */
  orderStatus?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 下单结束时间
   * @example
   */
  payEndDate?: string;

  /**
   * 下单开始时间
   * @example
   */
  payStartDate?: string;

  /**
   * 入住时间
   * @example
   */
  startDate?: string;

  /**
   * 用户id
   * @example
   */
  userId?: number;
}

export interface AdminHotelOrderRefundGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 离店时间
   * @example
   */
  endDate?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /** @example  */
  HIdList?: string[];

  /**
   * 酒店名称
   * @example
   */
  hotelName?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 入住时间
   * @example
   */
  startDate?: string;

  /**
   * 用户id
   * @example
   */
  userId?: number;
}

export interface AdminHotelRoomGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束日期
   * @example
   */
  endDate?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /** @example  */
  HId?: number;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 开始日期
   * @example
   */
  startDate?: string;
}

export interface AdminHotelUserGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 添加人
   * @example
   */
  createUser?: string;

  /**
   * 结束日期
   * @example
   */
  endDate?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /** @example  */
  HId?: number;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 开始日期
   * @example
   */
  startDate?: string;

  /**
   * 系统用户id
   * @example
   */
  sysUserId?: number;

  /**
   * 用户账号
   * @example
   */
  username?: string;
}

export interface AdminHotelUserExportsGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 添加人
   * @example
   */
  createUser?: string;

  /**
   * 结束日期
   * @example
   */
  endDate?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /** @example  */
  HId?: number;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 开始日期
   * @example
   */
  startDate?: string;

  /**
   * 系统用户id
   * @example
   */
  sysUserId?: number;

  /**
   * 用户账号
   * @example
   */
  username?: string;
}
