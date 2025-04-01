/* eslint-disable object-shorthand */
/* eslint-disable max-lines */
/* eslint-disable id-length */
export interface ActivityOpenDto {
  /** 活动编号 */
  activityNo?: string;

  /**
   * 开启关闭 0 关闭 1 开启
   * @format int32
   */
  open?: number;
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

  /** id数组 */
  idList?: number[];

  /** 驳回原因 */
  reason?: string;
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

export interface BookGoodsReq {
  /**
   * 实际销量
   * @format int32
   */
  actualSales?: number;

  /** 库存列表 */
  bookGoodsStockList?: BookGoodsStockReq[];

  /** 封面图片 */
  coverImg?: string;
  createUser?: string;

  /** 是否删除 */
  deleted?: boolean;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;

  /** 商品单价 */
  goodsPrice?: number;

  /** 商品部分单价 */
  goodsPricePart?: number;

  /**
   * 商品积分
   * @format int32
   */
  goodsScore?: number;

  /**
   * 商品部分积分
   * @format int32
   */
  goodsScorePart?: number;

  /** 商品类型 0餐饮类 1熏蒸类 */
  goodsType?: boolean;

  /** @format int64 */
  id?: number;
  modifyUser?: string;

  /**
   * 过期数量
   * @format int32
   */
  overdue?: number;

  /**
   * 详情文本
   * @format int64
   */
  richId?: number;

  /** 富文本详情 */
  richText?: string;

  /** 销售方式 0：纯现金 1：纯积分 2：积分+现金 */
  salesType?: number[];

  /** 是否上架 0 否 1 是 */
  shelved?: boolean;

  /**
   * 排序值
   * @format int32
   */
  sort?: number;

  /** @format int32 */
  status?: number;

  /**
   * 库存
   * @format int32
   */
  stock?: number;

  /**
   * 门店商品id
   * @format int64
   */
  storeGoodsId?: number;

  /**
   * 门店库存
   * @format int32
   */
  storeStock?: number;
}

export interface BookGoodsRes {
  /**
   * 实际销量
   * @format int32
   */
  actualSales?: number;

  /** 库存列表 */
  bookGoodsStockList?: BookGoodsStockRes[];

  /** 封面图片 */
  coverImg?: string;
  createUser?: string;

  /** 是否删除 */
  deleted?: boolean;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;

  /** 商品单价 */
  goodsPrice?: number;

  /** 商品部分单价 */
  goodsPricePart?: number;

  /**
   * 商品积分
   * @format int32
   */
  goodsScore?: number;

  /**
   * 商品部分积分
   * @format int32
   */
  goodsScorePart?: number;

  /** 商品类型 0餐饮类 1熏蒸类 */
  goodsType?: boolean;

  /** @format int64 */
  id?: number;
  modified?: boolean;
  modifyUser?: string;

  /**
   * 过期数量
   * @format int32
   */
  overdue?: number;

  /**
   * 详情文本
   * @format int64
   */
  richId?: number;

  /** 富文本详情 */
  richText?: string;

  /** 销售方式 0：纯现金 1：纯积分 2：积分+现金 */
  salesType?: number[];

  /** 是否上架 0 否 1 是 */
  shelved?: boolean;

  /**
   * 排序值
   * @format int32
   */
  sort?: number;

  /** @format int32 */
  status?: number;

  /**
   * 库存
   * @format int32
   */
  stock?: number;

  /**
   * 门店商品id
   * @format int64
   */
  storeGoodsId?: number;

  /**
   * 门店库存
   * @format int32
   */
  storeStock?: number;
  transient?: boolean;
}

export interface BookGoodsStockReq {
  /**
   * 实际销量
   * @format int32
   */
  actualSales?: number;

  /**
   * 预约商品id
   * @format int64
   */
  bookGoodsId?: number;
  createUser?: string;

  /** 是否删除 */
  deleted?: boolean;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;
  modifyUser?: string;

  /**
   * 过期数量
   * @format int32
   */
  overdue?: number;

  /** 是否上架 0 否 1 是 */
  shelved?: boolean;

  /** @format int32 */
  status?: number;

  /**
   * 库存
   * @format int32
   */
  stock?: number;

  /**
   * 门店id
   * @format int64
   */
  storeId?: number;

  /** 门店名称 */
  storeName?: string;
}

export interface BookGoodsStockRes {
  /**
   * 实际销量
   * @format int32
   */
  actualSales?: number;

  /**
   * 预约商品id
   * @format int64
   */
  bookGoodsId?: number;
  createUser?: string;

  /** 是否删除 */
  deleted?: boolean;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;
  modified?: boolean;
  modifyUser?: string;

  /**
   * 过期数量
   * @format int32
   */
  overdue?: number;

  /** 是否上架 0 否 1 是 */
  shelved?: boolean;

  /** @format int32 */
  status?: number;

  /**
   * 库存
   * @format int32
   */
  stock?: number;

  /**
   * 门店id
   * @format int64
   */
  storeId?: number;

  /** 门店名称 */
  storeName?: string;
  transient?: boolean;
}

export interface BookOrder {
  /** 详细地址 */
  address?: string;

  /**
   * 预约商品id
   * @format int64
   */
  bookGoodsId?: number;

  /** 预约人电话 */
  bookMobile?: string;

  /** 预约时间 */
  bookTime?: string;

  /** 预约人姓名 */
  bookUser?: string;

  /** 订货商收益金额 */
  buyerEarningBalance?: number;

  /**
   * 取消时间
   * @format date-time
   */
  cancelAt?: string;

  /** 市 */
  city?: string;

  /**
   * 市id
   * @format int32
   */
  cityId?: number;

  /** 联系方式 */
  contactInfo?: string;

  /** 封面图片 */
  coverImg?: string;
  createUser?: string;

  /** 是否删除 */
  deleted?: boolean;

  /** 区 */
  district?: string;

  /**
   * 区id
   * @format int32
   */
  districtId?: number;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;

  /** 商品单价 */
  goodsPrice?: number;

  /** 商品部分单价 */
  goodsPricePart?: number;

  /**
   * 商品积分
   * @format int32
   */
  goodsScore?: number;

  /**
   * 商品部分积分
   * @format int32
   */
  goodsScorePart?: number;

  /** 商品类型 0餐饮类 1熏蒸类 */
  goodsType?: boolean;

  /** @format int64 */
  id?: number;

  /** 会员编号 */
  memberNo?: string;
  modified?: boolean;
  modifyUser?: string;

  /** 订单编号 */
  orderNo?: string;

  /**
   * 订单状态 -1:未支付关闭 0:待付款 1：待核销 2：已核销 3：已过期 4：已取消
   * @format int32
   */
  orderStatus?: number;

  /**
   * 过期时间
   * @format date-time
   */
  overdueAt?: string;

  /** 实付金额 */
  payAmount?: number;

  /**
   * 支付时间
   * @format date-time
   */
  payAt?: string;

  /**
   * 实付积分
   * @format int32
   */
  payScore?: number;

  /**
   * 支付类型: 1微信支付 2支付宝支付 3线下支付 4余额,5如是心 6银行卡
   * @format int32
   */
  payType?: number;

  /** 平台收益金额 */
  platformEarningBalance?: number;

  /** 省 */
  province?: string;

  /**
   * 省id
   * @format int32
   */
  provinceId?: number;

  /**
   * 数量
   * @format int32
   */
  quantity?: number;

  /**
   * 销售方式 0：纯现金 1：纯积分 2：积分+现金
   * @format int64
   */
  salesType?: number;

  /** 分佣比例 */
  splitRatio?: number;

  /** @format int32 */
  status?: number;

  /**
   * 门店id
   * @format int64
   */
  storeId?: number;

  /** 门店名称 */
  storeName?: string;

  /**
   * 预约时间类型 0:早餐 1:午餐 2:晚餐
   * @format int32
   */
  timeType?: number;

  /** 微信支付交易流水号 */
  transactionId?: string;
  transient?: boolean;

  /**
   * 会员ID
   * @format int64
   */
  userId?: number;

  /** 会员姓名 */
  userName?: string;

  /**
   * 核销时间
   * @format date-time
   */
  verificationAt?: string;

  /** 核销码 */
  verificationCode?: string;

  /** 核销人会员编号 */
  verificationMemberNo?: string;
}

export interface BookOrderDataDTO {
  /** 订货商收益 */
  buyerEarningBalance?: number;

  /**
   * 取消订单量
   * @format int32
   */
  cancelOrders?: number;

  /** 日期 */
  createDate?: string;

  /**
   * 过期订单量
   * @format int32
   */
  overdueOrders?: number;

  /** 平台总分佣 */
  platformEarningBalance?: number;

  /** 待核销订单总金额 */
  toVerificationAmount?: number;

  /**
   * 待核销订单量
   * @format int32
   */
  toVerificationOrders?: number;

  /** 已核销订单总金额 */
  verificationAmount?: number;

  /**
   * 核销订单量
   * @format int32
   */
  verificationOrders?: number;

  /**
   * 已核销订单总积分
   * @format int32
   */
  verificationScore?: number;
}

export interface BookOrderEarning {
  /** 订货商收益金额 */
  buyerEarningBalance?: number;
  createUser?: string;

  /** 是否删除 */
  deleted?: boolean;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 会员编号 */
  memberNo?: string;
  modified?: boolean;
  modifyUser?: string;

  /** 订单编号 */
  orderNo?: string;

  /** 实付金额 */
  payAmount?: number;

  /** 平台收益金额 */
  platformEarningBalance?: number;

  /** 分佣比例 */
  splitRatio?: number;

  /** @format int32 */
  status?: number;

  /**
   * 门店id
   * @format int64
   */
  storeId?: number;

  /** 门店名称 */
  storeName?: string;
  transient?: boolean;

  /**
   * 会员ID
   * @format int64
   */
  userId?: number;

  /** 会员姓名 */
  userName?: string;
}

export interface BookStoreReq {
  /** 详细地址 */
  address?: string;

  /** 市 */
  city?: string;

  /**
   * 市id
   * @format int32
   */
  cityId?: number;

  /** 联系方式 */
  contactInfo?: string;

  /** 封面图片 */
  coverImg?: string;
  createUser?: string;

  /** 是否删除 */
  deleted?: boolean;

  /**
   * 距离
   * @format double
   */
  distance?: number;

  /** 区 */
  district?: string;

  /**
   * 区id
   * @format int32
   */
  districtId?: number;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 纬度 */
  lat?: number;

  /** 经度 */
  lng?: number;

  /** 订货商会员编号 */
  memberNo?: string;

  /** 订货商手机号 */
  mobile?: string;
  modifyUser?: string;

  /** 省 */
  province?: string;

  /**
   * 省id
   * @format int32
   */
  provinceId?: number;

  /**
   * 详情文本
   * @format int64
   */
  richId?: number;

  /** 富文本详情 */
  richText?: string;

  /**
   * 排序值
   * @format int32
   */
  sort?: number;

  /** @format int32 */
  status?: number;

  /** 门店名称 */
  storeName?: string;

  /**
   * 门店类型 0：订货商门店 1：自营门店
   * @format int32
   */
  storeType?: number;
}

export interface BookStoreRes {
  /** 详细地址 */
  address?: string;

  /** 市 */
  city?: string;

  /**
   * 市id
   * @format int32
   */
  cityId?: number;

  /** 联系方式 */
  contactInfo?: string;

  /** 封面图片 */
  coverImg?: string;
  createUser?: string;

  /** 是否删除 */
  deleted?: boolean;

  /**
   * 距离
   * @format double
   */
  distance?: number;

  /** 区 */
  district?: string;

  /**
   * 区id
   * @format int32
   */
  districtId?: number;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 纬度 */
  lat?: number;

  /** 经度 */
  lng?: number;

  /** 订货商会员编号 */
  memberNo?: string;

  /** 订货商手机号 */
  mobile?: string;
  modified?: boolean;
  modifyUser?: string;

  /** 省 */
  province?: string;

  /**
   * 省id
   * @format int32
   */
  provinceId?: number;

  /**
   * 详情文本
   * @format int64
   */
  richId?: number;

  /** 富文本详情 */
  richText?: string;

  /**
   * 排序值
   * @format int32
   */
  sort?: number;

  /** @format int32 */
  status?: number;

  /** 门店名称 */
  storeName?: string;

  /**
   * 门店类型 0：订货商门店 1：自营门店
   * @format int32
   */
  storeType?: number;
  transient?: boolean;
}

export interface BuyerGradeListResponseDTO {
  /**
   * 关联订货商数量
   * @format int32
   */
  buyerNum?: number;

  /** 是否分佣 0：否 1：是 */
  distribution?: boolean;

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

export interface BuyerGradeSaveRequestDTO {
  createUser?: string;

  /** 是否分佣 0：否 1：是 */
  distribution?: boolean;

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

export interface BuyerGradeUpdateRequestDTO {
  createUser?: string;

  /** 是否分佣 0：否 1：是 */
  distribution?: boolean;

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

export interface BuyerManageListResponseDTO {
  /**
   * 入驻订货商时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 等级id
   * @format int64
   */
  gradeId?: number;

  /** 等级名称 */
  gradeName?: string;

  /** 头像 */
  headImg?: string;

  /** 订货商id */
  id?: string;

  /**
   * 会员id
   * @format int64
   */
  memId?: number;

  /** 用户编码 */
  memberNo?: string;

  /** 手机号 */
  mobile?: string;

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

export interface CommentsHeadImgOutputDto {
  /** 头像 */
  headImg?: string;

  /**
   * id
   * @format int64
   */
  id?: number;
}

export interface CommentsImportInputDto {
  items?: CommentsImportItem[];
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

export interface CommonModifyStatusInputDto {
  /**
   * 编号
   * @format int64
   */
  id?: number;

  /** 批量操作id数组 */
  idList?: number[];

  /** 显示状态 1显示0不显示 */
  status: boolean;
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

export interface CouponCodeCreateInputDto {
  /**
   * 数量
   * @format int32
   */
  num?: number;

  /** 礼券号 */
  templateNo?: string;
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

export interface CouponSendBymemberNosInputDto {
  memberNos?: string[];

  /** @format int32 */
  num?: number;
  templateNo?: string;
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

export interface CreateActivityResult {
  /** 商品id数组 */
  goodsIdList?: number[];

  /**
   * 活动id
   * @format int64
   */
  id?: number;

  /** 错误原因 */
  msg?: string;
}

export interface EarningBalanceRecordReq {
  /** 调整余额 */
  balance?: number;
  createUser?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;
  modifyUser?: string;

  /** 单据编号 */
  recordNo?: string;

  /** 备注 */
  remark?: string;

  /**
   * 调整类型 0：后台调整
   * @format int32
   */
  source?: number;

  /** @format int32 */
  status?: number;

  /**
   * 类型 0：减少 1：增加
   * @format int32
   */
  type?: number;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface EarningBalanceRecordRes {
  /** 调整余额 */
  balance?: number;
  createUser?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;
  modified?: boolean;
  modifyUser?: string;

  /** 单据编号 */
  recordNo?: string;

  /** 备注 */
  remark?: string;

  /**
   * 调整类型 0：后台调整
   * @format int32
   */
  source?: number;

  /** @format int32 */
  status?: number;
  transient?: boolean;

  /**
   * 类型 0：减少 1：增加
   * @format int32
   */
  type?: number;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface EarningRecordDetailOutputDto {
  /** 收益余额 */
  earningBalance?: number;

  /**
   * 收益记录ID
   * @format int64
   */
  earningRecordId?: number;

  /**
   * 收益状态 0:未结算 1:已结算 2:已售后 3：已核销 4：过期不退
   * @format int32
   */
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

export interface EarningRecordOutputDto {
  /** 调整余额 */
  balance?: number;

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

  /** 备注 */
  remark?: string;

  /**
   * 类型 0：减少 1：增加
   * @format int32
   */
  type?: number;
}

export interface ErpShippingParam {
  /** 快递公司名称 */
  expressCompany?: string;

  /** 快递单号 */
  expressNo?: string;

  /** 是否拆单 true:是，false:否 */
  isSplit?: boolean;

  /** 规格商家编码，多个按逗号分隔 */
  outerId?: string;

  /** 平台订单号；多个按逗号分隔（即合单发货） */
  tid?: string;
}

export interface ExcelImportResultDto {
  /** 错误原因集合 */
  failMsgList?: string[];

  /** 是否导入成功 */
  success?: boolean;
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

  /** 订单实付满X包邮 */
  price?: number;

  /** 区域文本 */
  text?: string;
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

  /** 订单实付满X包邮 */
  price?: number;

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

export interface ForgotPasswordDto {
  /** 验证码 */
  code?: string;

  /** 手机号 */
  mobile?: string;

  /** 密码 */
  password?: string;
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
  del?: boolean;

  /**
   * 运费模板ID
   * @format int64
   */
  expressTemplateId?: number;

  /** 是否包邮 */
  freePost?: boolean;

  /** 前台是否可见 */
  frontShow?: boolean;

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
   * 销售方式 1:纯现金 2:纯积分 3:现金+积分 4：纯如是心
   * @format int32
   */
  saleType?: number;

  /** 是否自提 0：否，1：是 */
  selfTake?: boolean;

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

  /**
   * 库存预警 0：不预警 1：预警
   * @format int32
   */
  stockWarn?: number;

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

  /**
   * 预警置顶 0：不置顶 1：置顶
   * @format int32
   */
  warnTop?: number;

  /**
   * 微盟商品id
   * @format int64
   */
  wmGoodsId?: number;
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

export interface GoodsQueryByNoAndGrId {
  /** 商品编号列表 */
  goodNos?: GoodsNoAndGrIds[];
}

export interface GoodsSaveDTO {
  /** 商品详情页轮播图地址 */
  bannerImgPaths?: string;

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
   * 销售方式 1:纯现金 2:纯积分 3:现金+积分 4：纯如是心
   * @format int32
   */
  saleType?: number;

  /** 是否自提 0：否，1：是 */
  selfTake?: boolean;

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

  /**
   * 微盟商品id
   * @format int64
   */
  wmGoodsId?: number;
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

  /** 规格编码 */
  specCode?: string;

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

  /** 删除标记 */
  del?: boolean;

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

  /** 规格编码 */
  specCode?: string;

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

export interface GoodsStatusInputDto {
  /** 编号 */
  no: string;

  /** 编号数组 */
  noList?: string[];

  /** 开关状态 */
  status: boolean;
}

export interface GoodsTagBatchInputDto {
  /** 编号数组 */
  noList: string[];

  /** 标签数组 */
  tagIdList: number[];
}

export interface GoodsTagDto {
  /** 名称 */
  name?: string;

  /** key 特殊标签用 */
  tagKey?: string;

  /**
   * 标签类型 1: 活动 2:升级 3:订货商专享 4:包邮(含满邮) 5:可自提
   * @format int32
   */
  type?: number;
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
  del?: boolean;

  /**
   * 运费模板ID
   * @format int64
   */
  expressTemplateId?: number;

  /** 是否包邮 */
  freePost?: boolean;

  /** 前台是否可见 */
  frontShow?: boolean;

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
   * 销售方式 1:纯现金 2:纯积分 3:现金+积分 4：纯如是心
   * @format int32
   */
  saleType?: number;

  /** 是否自提 0：否，1：是 */
  selfTake?: boolean;

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

  /**
   * 库存预警 0：不预警 1：预警
   * @format int32
   */
  stockWarn?: number;

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

  /**
   * 预警置顶 0：不置顶 1：置顶
   * @format int32
   */
  warnTop?: number;

  /**
   * 微盟商品id
   * @format int64
   */
  wmGoodsId?: number;
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

  /** 集团代码 */
  groupId?: string;

  /**
   * 酒店id
   * @format int64
   */
  hid?: number;

  /** 酒店代码 */
  hotelId?: string;

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
   * 订单积分
   * @format int32
   */
  orderScore?: number;

  /**
   * 订单状态 0：待付款 1：待使用 2：已使用 3：已关闭
   * @format int32
   */
  orderStatus?: number;

  /** 外部订单id */
  outOrderId?: string;

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
   * 实付积分
   * @format int32
   */
  payScore?: number;

  /**
   * 支付状态：0未支付 1支付成功 -1支付失败
   * @format int32
   */
  payStatus?: number;

  /**
   * 支付类型: 1微信支付 2支付宝支付 3线下支付 4余额 5如是心 6银行卡
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

  /** 房型代码 */
  roomTypeId?: string;

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

  /** 银盛交易状态 */
  ysRefund?: string;
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

  /**
   * 订单积分
   * @format int32
   */
  orderScore?: number;

  /** 退款金额 */
  refundAmount?: number;

  /** 售后说明 */
  refundDesc?: string;

  /** 售后编号 */
  refundNo?: string;

  /** 售后原因 */
  refundReason?: string;

  /**
   * 退回积分
   * @format int32
   */
  refundScore?: number;

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

  /** 集团代码 */
  groupId?: string;

  /** 酒店代码 */
  hotelId?: string;

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

  /**
   * 消耗积分
   * @format int32
   */
  score?: number;

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

  /** 集团代码 */
  groupId?: string;

  /** 酒店代码 */
  hotelId?: string;

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

  /**
   * 消耗积分
   * @format int32
   */
  score?: number;

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

  /** 房型代码 */
  roomTypeId?: string;

  /**
   * 房间总数
   * @format int32
   */
  rooms?: number;

  /**
   * 消耗积分
   * @format int32
   */
  score?: number;

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

  /** 房型代码 */
  roomTypeId?: string;

  /**
   * 房间总数
   * @format int32
   */
  rooms?: number;

  /**
   * 消耗积分
   * @format int32
   */
  score?: number;

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

export interface HotelUserInputDto {
  /** @format int64 */
  hid?: number;

  /** 系统用户id */
  sysUserId?: number[];
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

export interface JsonResult {
  /** @format int32 */
  code?: number;
  data?: object;
  msg?: string;
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

export interface LivePageInsert {
  /** 直播ids */
  liveIds?: string[];

  /** 页面名称 */
  name?: string;

  /** 页面类型 */
  type?: "Details" | "List";
}

export interface LivePageUpdate {
  /** 直播ids */
  liveIds?: string[];

  /** 页面名称 */
  name?: string;

  /** 页面类型 */
  type?: "Details" | "List";
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

export interface LoginDto {
  /** 密码 */
  password?: string;

  /** 用户名 */
  username?: string;
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

  /** 优惠设置 */
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
  templateNoNum?: number;
  name?: string;
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

  /** 优惠设置 */
  promotionParam?: MarketingActivityPromotionParam;

  /**
   * 活动开始时间
   * @format date-time
   */
  startTime?: string;
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

  /** 优惠设置 */
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

  /** 拼团活动设置 */
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

  /** 推荐奖励 */
  rewards?: number;

  /**
   * 积分 非必填
   * @format int32
   */
  score?: number;

  /** 商品sku 非必填 */
  skuNo?: string;
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

export interface MarketingActivitySkuTieredPriceVo {
  /** sku编号 */
  skuNo?: string;

  /** 活动价格列表 */
  tieredPriceList?: TieredPriceVo[];
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
  registrationId?: string;

  /** @format int32 */
  role?: number;

  /** @format int32 */
  status?: number;

  /** @format int64 */
  superiorUserId?: number;
  transient?: boolean;
  unionId?: string;
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

export interface MemCardRightsGoodsDto {
  /** 商品编号 */
  goodsNo?: string;
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

export interface MemCouponListVo {
  /** 优惠劵模板名称 */
  couponName?: string;

  /** 优惠劵编号 */
  couponNo?: string;

  /**
   * 操作时间
   * @format date-time
   */
  gmtModified?: string;

  /** 操作人 */
  modifyUser?: string;

  /**
   * 状态 0 未使用 1 已使用 2 已过期 3 已作废
   * @format int32
   */
  useStatus?: number;
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

export interface MemCouponStatisticVoS {
  id?: number;
  key?: string;
  value?: number;
  name?: string;
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

export interface MemberDetailOutputDto {
  /** 微信应用id */
  appId?: string;

  /** 可用如是心 */
  availableCoin?: number;

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

  /**
   * 上级用户id
   * @format int64
   */
  superiorUserId?: number;

  /** 所属上级 */
  superiorUserName?: string;

  /**
   * 累计积分
   * @format int32
   */
  totalScore?: number;

  /** 用户微信全局唯一编号 */
  unionId?: string;

  /** 是否自用会员 0：否 1：是 */
  zyMember?: boolean;
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

export interface MemberQuery {
  /** 如是心排序 正序 asc 倒序 desc */
  availableCoinSort?: string;

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

  /** 分页列表 */
  statVOPagedResult?: PagedResultOrderGoodsStatItemVO;
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

export interface OrderItemsVO {
  refundType: any;
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

  /** 售后单号 */
  refundNo?: string;

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

export interface OrderMasterMarketingDto {
  /** （下单时有值）优惠条件 N件/N元 */
  con?: number;

  /** 优惠券vo，此优惠是优惠券才返回 */
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

export interface OrderShipping {
  /** 快递单号 */
  expressNo?: string;

  /** 订单号 */
  orderNo?: string;
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

export interface OrderSignDTO {
  /** 订单编号 */
  orderNo?: string;

  /** 标记 */
  sign?: string;
}

export interface OrderVO {
  /** 活动名称 */
  activityName?: string;
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
   * 支付类型: 1微信支付 2支付宝支付 3线下支付 4余额 5如是心 6银行卡
   * @format int32
   */
  payType?: number;

  /**
   * 供养活动ID
   * @format int64
   */
  provideId?: number;

  /** 抵扣前运费 */
  realFreightAmount?: number;

  /**
   * 确认收货时间
   * @format date-time
   */
  receiptAt?: string;

  /** 提货码 */
  receiveCode?: string;

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
   * 快麦系统订单号
   * @format int64
   */
  sid?: number;

  /** 标记 */
  sign?: string;

  /**
   * 统一状态
   * @format int32
   */
  status?: number;

  /** 快麦平台订单号 */
  tid?: string;

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
  /** 活动名称 */
  activityName?: string;

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
   * 支付类型: 1微信支付 2支付宝支付 3线下支付 4余额 5如是心 6银行卡
   * @format int32
   */
  payType?: number;

  /**
   * 供养活动ID
   * @format int64
   */
  provideId?: number;

  /** 抵扣前运费 */
  realFreightAmount?: number;

  /**
   * 确认收货时间
   * @format date-time
   */
  receiptAt?: string;

  /** 提货码 */
  receiveCode?: string;

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
   * 快麦系统订单号
   * @format int64
   */
  sid?: number;

  /** 标记 */
  sign?: string;

  /**
   * 统一状态
   * @format int32
   */
  status?: number;

  /** 快麦平台订单号 */
  tid?: string;

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

export interface OrderVORes {
  /** 活动名称 */
  activityName?: string;
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
   * 支付类型: 1微信支付 2支付宝支付 3线下支付 4余额 5如是心 6银行卡
   * @format int32
   */
  payType?: number;

  /**
   * 供养活动ID
   * @format int64
   */
  provideId?: number;

  /** 抵扣前运费 */
  realFreightAmount?: number;

  /**
   * 确认收货时间
   * @format date-time
   */
  receiptAt?: string;

  /** 提货码 */
  receiveCode?: string;

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
   * 快麦系统订单号
   * @format int64
   */
  sid?: number;

  /** 标记 */
  sign?: string;

  /**
   * 统一状态
   * @format int32
   */
  status?: number;

  /** 快麦平台订单号 */
  tid?: string;

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

export interface PostsAwardDTO {
  /** @format int64 */
  postsId?: number;

  /** @format int64 */
  userId?: number;
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

export interface ProvideActivityGoodsSkuReq {
  createUser?: string;

  /** 是否删除 */
  deleted?: boolean;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /**
   * 商品id
   * @format int64
   */
  goodsId?: number;

  /** 商品编码 */
  goodsName?: string;

  /** 商品名称 */
  goodsNo?: string;

  /** @format int64 */
  id?: number;
  modifyUser?: string;

  /**
   * 供养活动ID
   * @format int64
   */
  provideId?: number;

  /** 单价 */
  salesPrice?: number;

  /**
   * skuId
   * @format int64
   */
  skuId?: number;

  /** sku编码 */
  skuNo?: string;

  /** @format int32 */
  status?: number;

  /**
   * 活动库存
   * @format int32
   */
  stock?: number;
}

export interface ProvideActivityGoodsSkuRes {
  createUser?: string;

  /** 是否删除 */
  deleted?: boolean;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /**
   * 商品id
   * @format int64
   */
  goodsId?: number;

  /** 商品编码 */
  goodsName?: string;

  /** 商品名称 */
  goodsNo?: string;

  /** @format int64 */
  id?: number;
  modified?: boolean;
  modifyUser?: string;

  /**
   * 供养活动ID
   * @format int64
   */
  provideId?: number;

  /** 单价 */
  salesPrice?: number;

  /**
   * skuId
   * @format int64
   */
  skuId?: number;

  /** sku编码 */
  skuNo?: string;

  /** @format int32 */
  status?: number;

  /**
   * 活动库存
   * @format int32
   */
  stock?: number;
  transient?: boolean;
}

export interface ProvideActivityReq {
  /** 活动名称 */
  activityName?: string;

  /** 活动图片 */
  activityPicture?: string;

  /**
   * 活动状态 0：待审核 1：活动中 2：已驳回 3：已结束
   * @format int32
   */
  activityState?: number;

  /** 详细地址 */
  address?: string;

  /** 后管活动情况 */
  adminActivitySituation?: string[];

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

  /** 市 */
  city?: string;

  /**
   * 市id
   * @format int32
   */
  cityId?: number;

  /** 活动内容 */
  content?: string;

  /** 封面图片 */
  coverImg?: string;
  createUser?: string;

  /** 是否删除 */
  deleted?: boolean;

  /** 区 */
  district?: string;

  /**
   * 区id
   * @format int32
   */
  districtId?: number;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /** 快递公司名称 */
  expressCompany?: string;

  /** 快递公司编码 */
  expressCompanyCode?: string;

  /** 快递单号 */
  expressNo?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** 发布人头像 */
  headImg?: string;

  /** @format int64 */
  id?: number;

  /** 会员编号 */
  memberNo?: string;
  modifyUser?: string;

  /**
   * 供养订单数
   * @format int32
   */
  orderCounts?: number;

  /** 活动商品 */
  provideActivityGoodsSkuList?: ProvideActivityGoodsSkuReq[];

  /** app活动商品列表 */
  provideGoodsParams?: ProvideGoodsParam[];

  /** 省 */
  province?: string;

  /**
   * 省id
   * @format int32
   */
  provinceId?: number;

  /** 收货详细地址 */
  receiveAddress?: string;

  /** 收货市 */
  receiveCity?: string;

  /**
   * 收货市id
   * @format int32
   */
  receiveCityId?: number;

  /** 收货区 */
  receiveDistrict?: string;

  /**
   * 收货区id
   * @format int32
   */
  receiveDistrictId?: number;

  /** 收货省 */
  receiveProvince?: string;

  /**
   * 收货省id
   * @format int32
   */
  receiveProvinceId?: number;

  /** 收货人电话 */
  receiveUserMobile?: string;

  /** 收货人姓名 */
  receiveUserName?: string;

  /** 驳回的App活动情况 */
  rejectActivitySituation?: string[];

  /**
   * 活动情况富文本
   * @format int64
   */
  richId?: number;

  /** 富文本详情 */
  richText?: string;

  /** 活动情况审核人 */
  situationAuditName?: string;

  /**
   * 活动情况审核状态 0：待审核，1：已通过，2：已拒绝
   * @format int32
   */
  situationAuditState?: number;

  /**
   * 活动情况审核时间
   * @format date-time
   */
  situationAuditTime?: string;

  /** 活动情况审核原因 */
  situationRefuseReason?: string;

  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;

  /** @format int32 */
  status?: number;

  /**
   * 活动库存
   * @format int32
   */
  stock?: number;

  /**
   * 寺庙人数
   * @format int32
   */
  templeNum?: number;

  /**
   * 会员ID
   * @format int64
   */
  userId?: number;

  /** 会员姓名 */
  userName?: string;

  /** App活动情况 */
  webActivitySituation?: string[];
}

export interface ProvideActivityRes {
  /** 活动名称 */
  activityName?: string;

  /** 活动图片 */
  activityPicture?: string;

  /**
   * 活动状态 0：待审核 1：活动中 2：已驳回 3：已结束
   * @format int32
   */
  activityState?: number;

  /** 详细地址 */
  address?: string;

  /** 后管活动情况 */
  adminActivitySituation?: string[];

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

  /** 市 */
  city?: string;

  /**
   * 市id
   * @format int32
   */
  cityId?: number;

  /** 活动内容 */
  content?: string;

  /** 封面图片 */
  coverImg?: string;
  createUser?: string;

  /** 是否删除 */
  deleted?: boolean;

  /** 区 */
  district?: string;

  /**
   * 区id
   * @format int32
   */
  districtId?: number;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /** 快递公司名称 */
  expressCompany?: string;

  /** 快递公司编码 */
  expressCompanyCode?: string;

  /** 快递单号 */
  expressNo?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** 发布人头像 */
  headImg?: string;

  /** @format int64 */
  id?: number;

  /** 会员编号 */
  memberNo?: string;
  modified?: boolean;
  modifyUser?: string;

  /**
   * 供养订单数
   * @format int32
   */
  orderCounts?: number;

  /** 活动商品 */
  provideActivityGoodsSkuList?: ProvideActivityGoodsSkuRes[];

  /** app活动商品列表 */
  provideGoodsParams?: ProvideGoodsParam[];

  /** 省 */
  province?: string;

  /**
   * 省id
   * @format int32
   */
  provinceId?: number;

  /** 收货详细地址 */
  receiveAddress?: string;

  /** 收货市 */
  receiveCity?: string;

  /**
   * 收货市id
   * @format int32
   */
  receiveCityId?: number;

  /** 收货区 */
  receiveDistrict?: string;

  /**
   * 收货区id
   * @format int32
   */
  receiveDistrictId?: number;

  /** 收货省 */
  receiveProvince?: string;

  /**
   * 收货省id
   * @format int32
   */
  receiveProvinceId?: number;

  /** 收货人电话 */
  receiveUserMobile?: string;

  /** 收货人姓名 */
  receiveUserName?: string;

  /** 驳回的App活动情况 */
  rejectActivitySituation?: string[];

  /**
   * 活动情况富文本
   * @format int64
   */
  richId?: number;

  /** 富文本详情 */
  richText?: string;

  /** 活动情况审核人 */
  situationAuditName?: string;

  /**
   * 活动情况审核状态 0：待审核，1：已通过，2：已拒绝
   * @format int32
   */
  situationAuditState?: number;

  /**
   * 活动情况审核时间
   * @format date-time
   */
  situationAuditTime?: string;

  /** 活动情况审核原因 */
  situationRefuseReason?: string;

  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;

  /** @format int32 */
  status?: number;

  /**
   * 活动库存
   * @format int32
   */
  stock?: number;

  /**
   * 寺庙人数
   * @format int32
   */
  templeNum?: number;
  transient?: boolean;

  /**
   * 会员ID
   * @format int64
   */
  userId?: number;

  /** 会员姓名 */
  userName?: string;

  /** App活动情况 */
  webActivitySituation?: string[];
}

export interface ProvideActivityShippingDTO {
  /** 快递公司名称 */
  expressCompany?: string;

  /** 快递公司编码 */
  expressCompanyCode?: string;

  /** 快递单号 */
  expressNo?: string;

  /**
   * 供养活动id
   * @format int64
   */
  id?: number;
}

export interface ProvideActivitySituationDTO {
  /** 活动情况 */
  activitySituation?: string[];

  /**
   * 供养活动id
   * @format int64
   */
  id?: number;
}

export interface ProvideActivityUpdateDTO {
  /** 活动名称 */
  activityName?: string;

  /** 活动图片 */
  activityPicture?: string;

  /**
   * 活动状态 0：待审核 1：活动中 2：已驳回 3：已结束
   * @format int32
   */
  activityState?: number;

  /** 详细地址 */
  address?: string;

  /** 市 */
  city?: string;

  /**
   * 市id
   * @format int32
   */
  cityId?: number;

  /** 活动内容 */
  content?: string;

  /** 封面图片 */
  coverImg?: string;

  /** 区 */
  district?: string;

  /**
   * 区id
   * @format int32
   */
  districtId?: number;

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

  /** 商品 */
  provideGoodsDTOList?: ProvideGoodsDTO[];

  /** 省 */
  province?: string;

  /**
   * 省id
   * @format int32
   */
  provinceId?: number;

  /** 收货详细地址 */
  receiveAddress?: string;

  /** 收货市 */
  receiveCity?: string;

  /**
   * 收货市id
   * @format int32
   */
  receiveCityId?: number;

  /** 收货区 */
  receiveDistrict?: string;

  /**
   * 收货区id
   * @format int32
   */
  receiveDistrictId?: number;

  /** 收货省 */
  receiveProvince?: string;

  /**
   * 收货省id
   * @format int32
   */
  receiveProvinceId?: number;

  /** 收货人电话 */
  receiveUserMobile?: string;

  /** 收货人姓名 */
  receiveUserName?: string;

  /** 富文本详情 */
  richText?: string;

  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;

  /**
   * 寺庙人数
   * @format int32
   */
  templeNum?: number;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface ProvideGoodsDTO {
  /**
   * 商品id
   * @format int64
   */
  goodsId?: number;

  /** 规格 */
  provideGoodsSkuDTOList?: ProvideGoodsSkuDTO[];
}

export interface ProvideGoodsParam {
  /** 身份限制 */
  buyerGrades?: number[];

  /** 封面图片 */
  coverImg?: string;

  /** 前台是否可见 */
  frontShow?: boolean;

  /**
   * 商品id
   * @format int64
   */
  goodsId?: number;

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;

  /**
   * 活动商品id
   * @format int64
   */
  id?: number;

  /** 商品规格 */
  provideGoodsSkuParams?: ProvideGoodsSkuParam[];

  /**
   * 供养活动id
   * @format int64
   */
  provideId?: number;

  /** 售价 */
  salePrice?: number;

  /** 是否上架 0 否 1 是 */
  shelved?: boolean;
}

export interface ProvideGoodsSkuDTO {
  /**
   * 商品skuid
   * @format int64
   */
  skuId?: number;

  /**
   * 库存
   * @format int32
   */
  stock?: number;
}

export interface ProvideGoodsSkuParam {
  /** 是否启用 0 否 1是 */
  enabled?: boolean;

  /**
   * 活动商品规格id
   * @format int64
   */
  id?: number;

  /** 售价 */
  salesPrice?: number;

  /**
   * skuId
   * @format int64
   */
  skuId?: number;

  /** sku图片 */
  skuImg?: string;

  /** sku名称 */
  skuName?: string;

  /** sku编号 */
  skuNo?: string;

  /**
   * 商品库存
   * @format int32
   */
  skuTotalStock?: number;

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
}

export interface ProvideOrderVO {
  /** 活动名称 */
  activityName?: string;

  /**
   * 数量
   * @format int32
   */
  counts?: number;

  /** 积分 */
  exchangeIntegral?: number;

  /**
   * 参与时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 序号
   * @format int64
   */
  id?: number;

  /** 参与人编号 */
  memberNo?: string;

  /** 共计 */
  orderAmount?: number;

  /** 参与编号 */
  orderNo?: string;

  /** 实付 */
  payAmount?: number;

  /**
   * 活动id
   * @format int64
   */
  provideId?: number;

  /** 参与人昵称 */
  userName?: string;
}

export interface PushMsgDto {
  /** 内容 */
  content?: string;

  /**
   * 活动类型 4：拼团 5：秒杀 6：满赠 7：接龙
   * @format int32
   */
  type?: number;
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

export interface ReachStandUpgradeConfRequest {
  /** 下级人数达标升级请求DTO */
  reachStandUpgradeConfQueryDto?: ReachStandUpgradeConfQueryDto[];
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

  /** 赠送金额 */
  presentBalance?: number;

  /** 充值金额 */
  rechargeBalance?: number;

  /** 订单编号 */
  rechargeNo?: string;

  /** 订单备注 */
  remark?: string;

  /** 交易流水号 */
  transactionId?: string;
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

export interface RefundMasterDto {
  createType: any;
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

export interface ReplyCommentsDto {
  /**
   * 评价id
   * @format int64
   */
  commentsId?: number;

  /** 回复内容 */
  replyContent?: string;
}

export interface ResetPwdDto {
  /** 新密码 */
  newPassword?: string;

  /** 原密码 */
  password?: string;
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

export interface RoleResourceSaveDto {
  resourceIds?: number[];

  /** @format int64 */
  roleId?: number;
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

export interface SelfPickUpSiteReq {
  /** 详细地址 */
  address?: string;

  /** 市 */
  city?: string;

  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  createUser?: string;

  /** 是否删除 */
  deleted?: boolean;

  /** 区 */
  district?: string;

  /**
   * 区id
   * @format int32
   */
  districtId?: number;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;
  modifyUser?: string;

  /** 省 */
  province?: string;

  /**
   * 省id
   * @format int32
   */
  provinceId?: number;

  /**
   * 排序值
   * @format int32
   */
  sort?: number;

  /** @format int32 */
  status?: number;
}

export interface SelfPickUpSiteRes {
  /** 详细地址 */
  address?: string;

  /** 市 */
  city?: string;

  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  createUser?: string;

  /** 是否删除 */
  deleted?: boolean;

  /** 区 */
  district?: string;

  /**
   * 区id
   * @format int32
   */
  districtId?: number;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;
  modified?: boolean;
  modifyUser?: string;

  /** 省 */
  province?: string;

  /**
   * 省id
   * @format int32
   */
  provinceId?: number;

  /**
   * 排序值
   * @format int32
   */
  sort?: number;

  /** @format int32 */
  status?: number;
  transient?: boolean;
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
  // 是否是来自erp
  fromErp?: boolean;
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

export interface StatisticsGraphOutputDto {
  /** 总计 */
  count?: object;

  /** 数据 */
  series?: StatisticsGraphDataOutputDto[];
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

export interface SuperiorOutputDTO {
  /** 用户全局唯一编号 */
  superiorMemberNo?: string;

  /**
   * 上级用户id
   * @format int64
   */
  superiorUserId?: number;

  /** 所属上级 */
  superiorUserName?: string;
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
   * 门店ID
   * @format int64
   */
  storeId?: number;

  /**
   * id
   * @format int64
   */
  userId?: number;

  /** 登录人名称 */
  username?: string;
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

export interface SysRoleCreateInputDto {
  /** 描述 */
  description?: string;

  /** 角色名 */
  name?: string;

  /** 资源 id 集合 */
  resourceIds?: number[];
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

  /**
   * 门店id
   * @format int64
   */
  storeId?: number;

  /** 用户名 */
  username?: string;
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

  /**
   * 门店id
   * @format int64
   */
  storeId?: number;

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

  /**
   * 门店id
   * @format int64
   */
  storeId?: number;

  /** 用户名 */
  username?: string;
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

export interface UnlimitedInputDto {
  /** 是否透明底色 */
  hyaline?: boolean;

  /** 页面 */
  page?: string;
  scene?: string;

  /** 版本 */
  version?: string;
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

export interface UpdateBuyerShopInStatusRequestDTO {
  /**
   * id
   * @format int64
   */
  id?: number;

  /** 店中店状态 0 无效 1 有效 */
  shopInStatus?: boolean;
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

export interface UserRolesDto {
  roleIds?: number[];

  /** @format int64 */
  userId?: number;
}

export interface Verification {
  createUser?: string;

  /** 是否删除 */
  deleted?: boolean;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 会员编号 */
  memberNo?: string;

  /** 手机号 */
  mobile?: string;
  modified?: boolean;
  modifyUser?: string;

  /** @format int32 */
  status?: number;

  /**
   * 门店id
   * @format int64
   */
  storeId?: number;

  /** 门店名称 */
  storeName?: string;
  transient?: boolean;
}

export interface VerificationDTO {
  /** 核销员id数组 */
  idList?: number[];
}

export interface VirtualCoin {
  /** 可用虚拟币 */
  availableCoin?: number;
  createUser?: string;

  /** 是否删除 */
  deleted?: boolean;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;
  modified?: boolean;
  modifyUser?: string;

  /** @format int32 */
  status?: number;

  /** 总虚拟币 */
  totalCoin?: number;
  transient?: boolean;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface VirtualCoinAdjustInputDto {
  /** 如是心 */
  coin?: number;

  /** 是否增加 */
  isPlus?: boolean;
  remark?: string;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;

  /** 用户id数组 */
  userIdList?: number[];
}

export interface VirtualCoinFlow {
  /** 虚拟币 */
  coin?: number;
  createUser?: string;

  /** 当前虚拟币 */
  currentCoin?: number;

  /** 会员编号 */
  currentMemberNo?: string;

  /** 是否删除 */
  deleted?: boolean;

  /** Description */
  description?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 赠/接人编号 */
  memberNo?: string;

  /** 手机号 */
  mobile?: string;
  modified?: boolean;
  modifyUser?: string;

  /** 昵称 */
  nickName?: string;

  /**
   * 余额的增加方式 1：后台增加 2：订单退回 3：好友赠送 4：系统赠送
   * @format int32
   */
  plusType?: number;

  /** 单据号 */
  relNo?: string;

  /** 备注 */
  remark?: string;

  /** 来源：0:系统调整 1:订单消费 2:订单取消退回 3:好友赠送 4:转赠好友 5:系统赠送 */
  source?: string;

  /** @format int32 */
  status?: number;

  /**
   * 余额的扣除方式 1：后台扣减 2：订单消费 3：转赠
   * @format int32
   */
  subtractType?: number;
  transient?: boolean;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface WithdrawRecord {
  /**
   * 到账时间
   * @format date-time
   */
  accountTime?: string;

  /** 支付宝账号 */
  alipayAccount?: string;

  /** 支付宝户名 */
  alipayName?: string;

  /** 审核人 */
  auditName?: string;

  /**
   * 审核时间
   * @format date-time
   */
  auditTime?: string;

  /** 收款户名 */
  bankAccount?: string;

  /** 银行卡号 */
  bankCard?: string;

  /**
   * 收款卡类型 0：借记卡 1：信用卡
   * @format int32
   */
  bankCardType?: number;

  /** 收款银行名称 */
  bankName?: string;

  /** 审核原因 */
  checkMsg?: string;

  /**
   * 审核状态 0：待审核，1：已通过，2：已驳回
   * @format int32
   */
  checkState?: number;
  createUser?: string;

  /** 错误信息 */
  errorMsg?: string;

  /**
   * 失败时间
   * @format date-time
   */
  errorTime?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 身份证号 */
  idcard?: string;

  /** 会员编号 */
  memberNo?: string;

  /** 手机号 */
  mobile?: string;
  modified?: boolean;
  modifyUser?: string;

  /** 昵称 */
  nickName?: string;

  /**
   * 收款方式 0：银行账号 1：支付宝 2：微信
   * @format int32
   */
  paymentType?: number;

  /** 实际到账金额 */
  realAmount?: number;

  /** 单据编号 */
  recordNo?: string;

  /** 手续费 */
  serviceCharge?: number;

  /** @format int32 */
  status?: number;
  transient?: boolean;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;

  /** 微信真实姓名 */
  wechatName?: string;

  /** 微信openid */
  wechatOpenid?: string;

  /** 提现金额 */
  withdrawAmount?: number;

  /**
   * 提现状态 0：待到账 1：已到账 2：提现失败
   * @format int32
   */
  withdrawStatus?: number;
}

export interface WithdrawRecordAuditDto {
  /** 审核原因 */
  checkMsg?: string;

  /**
   * 审核状态 0：待审核，1：已通过，2：已拒绝
   * @format int32
   */
  checkState?: number;

  /**
   * 提现记录id
   * @format int64
   */
  id?: number;
}

export interface JsonResultAddressOutputDto {
  /** @format int32 */
  code?: number;
  data?: AddressOutputDto;
  msg?: string;
}

export interface JsonResultBalanceGetOutputDto {
  /** @format int32 */
  code?: number;
  data?: BalanceGetOutputDto;
  msg?: string;
}

export interface JsonResultBannerOutputDto {
  /** @format int32 */
  code?: number;
  data?: BannerOutputDto;
  msg?: string;
}

export interface JsonResultBookGoods {
  /** @format int32 */
  code?: number;
  data?: BookGoodsRes;
  msg?: string;
}

export interface JsonResultBookOrderDataDTO {
  /** @format int32 */
  code?: number;
  data?: BookOrderDataDTO;
  msg?: string;
}

export interface JsonResultBookOrder {
  /** @format int32 */
  code?: number;
  data?: BookOrder;
  msg?: string;
}

export interface JsonResultBookStore {
  /** @format int32 */
  code?: number;
  data?: BookStoreRes;
  msg?: string;
}

export interface JsonResultBuyerGradeResponseDTO {
  /** @format int32 */
  code?: number;
  data?: BuyerGradeResponseDTO;
  msg?: string;
}

export interface JsonResultBuyerManageDetailResponseDTO {
  /** @format int32 */
  code?: number;
  data?: BuyerManageDetailResponseDTO;
  msg?: string;
}

export interface JsonResultCouponTemplateVo {
  /** @format int32 */
  code?: number;
  data?: CouponTemplateVo;
  msg?: string;
}

export interface JsonResultCreateActivityResult {
  /** @format int32 */
  code?: number;
  data?: CreateActivityResult;
  msg?: string;
}

export interface JsonResultExcelImportResultDto {
  /** @format int32 */
  code?: number;
  data?: ExcelImportResultDto;
  msg?: string;
}

export interface JsonResultExpressTemplateDetailOutputDto {
  /** @format int32 */
  code?: number;
  data?: ExpressTemplateDetailOutputDto;
  msg?: string;
}

export interface JsonResultGoodsClassifyOutputDto {
  /** @format int32 */
  code?: number;
  data?: GoodsClassifyOutputDto;
  msg?: string;
}

export interface JsonResultGoodsGroupOutputDto {
  /** @format int32 */
  code?: number;
  data?: GoodsGroupOutputDto;
  msg?: string;
}

export interface JsonResultGoodsSpecOutputDto {
  /** @format int32 */
  code?: number;
  data?: GoodsSpecOutputDto;
  msg?: string;
}

export interface JsonResultGoodsTagOutputDto {
  /** @format int32 */
  code?: number;
  data?: GoodsTagOutputDto;
  msg?: string;
}

export interface JsonResultGoodsVO {
  /** @format int32 */
  code?: number;
  data?: GoodsVO;
  msg?: string;
}

export interface JsonResultHotKeywordDto {
  /** @format int32 */
  code?: number;
  data?: HotKeywordDto;
  msg?: string;
}

export interface JsonResultHotelBanner {
  /** @format int32 */
  code?: number;
  data?: HotelBannerRes;
  msg?: string;
}

export interface JsonResultHotelBlacklist {
  /** @format int32 */
  code?: number;
  data?: HotelBlacklistRes;
  msg?: string;
}

export interface JsonResultHotelOrderRefund {
  /** @format int32 */
  code?: number;
  data?: HotelOrderRefund;
  msg?: string;
}

export interface JsonResultHotelOrder {
  /** @format int32 */
  code?: number;
  data?: HotelOrder;
  msg?: string;
}

export interface JsonResultHotelRoom {
  /** @format int32 */
  code?: number;
  data?: HotelRoomRes;
  msg?: string;
}

export interface JsonResultHotel {
  /** @format int32 */
  code?: number;
  data?: HotelRes;
  msg?: string;
}

export interface JsonResultListAddressOutputDto {
  /** @format int32 */
  code?: number;
  data?: AddressOutputDto[];
  msg?: string;
}

export interface JsonResultListBookStore {
  /** @format int32 */
  code?: number;
  data?: BookStoreRes[];
  msg?: string;
}

export interface JsonResultListConfConfigOutputDto {
  /** @format int32 */
  code?: number;
  data?: ConfConfigOutputDto[];
  msg?: string;
}

export interface JsonResultListCouponTemplateVo {
  /** @format int32 */
  code?: number;
  data?: CouponTemplateVo[];
  msg?: string;
}

export interface JsonResultListGoodsGradeVO {
  /** @format int32 */
  code?: number;
  data?: GoodsGradeVO[];
  msg?: string;
}

export interface JsonResultListGradeStatDto {
  /** @format int32 */
  code?: number;
  data?: GradeStatDto[];
  msg?: string;
}

export interface JsonResultListHotelBanner {
  /** @format int32 */
  code?: number;
  data?: HotelBannerRes[];
  msg?: string;
}

export interface JsonResultListLive {
  /** @format int32 */
  code?: number;
  data?: Live[];
  msg?: string;
}

export interface JsonResultListMallConfPageOutputDto {
  /** @format int32 */
  code?: number;
  data?: MallConfPageOutputDto[];
  msg?: string;
}

export interface JsonResultListMallExpressCompanyVo {
  /** @format int32 */
  code?: number;
  data?: MallExpressCompanyVo[];
  msg?: string;
}

export interface JsonResultListMaterialGroupVo {
  /** @format int32 */
  code?: number;
  data?: MaterialGroupVo[];
  msg?: string;
}

export interface JsonResultListMemBaseInfo {
  /** @format int32 */
  code?: number;
  data?: MemBaseInfo[];
  msg?: string;
}

export interface JsonResultListMenuTreeOutputDto {
  /** @format int32 */
  code?: number;
  data?: MenuTreeOutputDto[];
  msg?: string;
}

export interface JsonResultListReachStandUpgradeConfOutputDto {
  /** @format int32 */
  code?: number;
  data?: ReachStandUpgradeConfOutputDto[];
  msg?: string;
}

export interface JsonResultListRefundReasonOutputDto {
  /** @format int32 */
  code?: number;
  data?: RefundReasonOutputDto[];
  msg?: string;
}

export interface JsonResultListSuperiorOutputDTO {
  /** @format int32 */
  code?: number;
  data?: SuperiorOutputDTO[];
  msg?: string;
}
export interface JsonResultListSuperiorOutputQueryDTO {
  /** @format int32 */
  code?: number;
  data?: { list: SuperiorOutputDTO[] };
  msg?: string;
}

export interface JsonResultListSysApi {
  /** @format int32 */
  code?: number;
  data?: SysApiRes[];
  msg?: string;
}

export interface JsonResultListSysResource {
  /** @format int32 */
  code?: number;
  data?: SysResource[];
  msg?: string;
}

export interface JsonResultListSysRoleSelectOutputDto {
  /** @format int32 */
  code?: number;
  data?: SysRoleSelectOutputDto[];
  msg?: string;
}

export interface JsonResultListSysRole {
  /** @format int32 */
  code?: number;
  data?: SysRole[];
  msg?: string;
}

export interface JsonResultListSysUserVo {
  /** @format int32 */
  code?: number;
  data?: SysUserVo[];
  msg?: string;
}

export interface JsonResultListTreeResourceVo {
  /** @format int32 */
  code?: number;
  data?: TreeResourceVo[];
  msg?: string;
}

export interface JsonResultListString {
  /** @format int32 */
  code?: number;
  data?: string[];
  msg?: string;
}

export interface JsonResultLivePage {
  /** @format int32 */
  code?: number;
  data?: LivePage;
  msg?: string;
}

export interface JsonResultLive {
  /** @format int32 */
  code?: number;
  data?: Live;
  msg?: string;
}

export interface JsonResultLoginOutputDto {
  /** @format int32 */
  code?: number;
  data?: LoginOutputDto;
  msg?: string;
}

export interface JsonResultMallConfPageOutputDto {
  /** @format int32 */
  code?: number;
  data?: MallConfPageOutputDto;
  msg?: string;
}

export interface JsonResultMapStringObject {
  /** @format int32 */
  code?: number;
  data?: object;
  msg?: string;
}

export interface JsonResultMapStringString {
  /** @format int32 */
  code?: number;
  data?: Record<string, string>;
  msg?: string;
}

export interface JsonResultMarketingActivityDto {
  /** @format int32 */
  code?: number;
  data?: MarketingActivityDto;
  msg?: string;
}

export interface JsonResultMarketingActivityOfGroupDto {
  /** @format int32 */
  code?: number;
  data?: MarketingActivityOfGroupDto;
  msg?: string;
}

export interface JsonResultMemCardDto {
  /** @format int32 */
  code?: number;
  data?: MemCardDto;
  msg?: string;
}

export interface JsonResultMemCouponStatisticVo {
  /** @format int32 */
  code?: number;
  data?: MemCouponStatisticVo;
  msg?: string;
}

export interface JsonResultMemLabelResponseDTO {
  /** @format int32 */
  code?: number;
  data?: MemLabelResponseDTO;
  msg?: string;
}

export interface JsonResultMemberDetailOutputDto {
  /** @format int32 */
  code?: number;
  data?: MemberDetailOutputDto;
  msg?: string;
}

export interface JsonResultOrderGoodsStatVO {
  /** @format int32 */
  code?: number;
  data?: OrderGoodsStatVO;
  msg?: string;
}

export interface JsonResultOrderVO {
  /** @format int32 */
  code?: number;
  data?: OrderVORes;
  msg?: string;
}

export interface JsonResultPageInfoBuyerGradeListResponseDTO {
  /** @format int32 */
  code?: number;
  data?: PageInfoBuyerGradeListResponseDTO;
  msg?: string;
}

export interface JsonResultPageInfoBuyerManageListResponseDTO {
  /** @format int32 */
  code?: number;
  data?: PageInfoBuyerManageListResponseDTO;
  msg?: string;
}

export interface JsonResultPageInfoEarningRecordOutputDto {
  /** @format int32 */
  code?: number;
  data?: PageInfoEarningRecordOutputDto;
  msg?: string;
}

export interface JsonResultPageInfoMemLabelResponseDTO {
  /** @format int32 */
  code?: number;
  data?: PageInfoMemLabelResponseDTO;
  msg?: string;
}

export interface JsonResultPageInfoMemberListDto {
  /** @format int32 */
  code?: number;
  data?: PageInfoMemberListDto;
  msg?: string;
}

export interface JsonResultPagedResultBalanceFlowOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultBalanceFlowOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultBannerOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultBannerOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultBookGoods {
  /** @format int32 */
  code?: number;
  data?: PagedResultBookGoods;
  msg?: string;
}

export interface JsonResultPagedResultBookOrderDataDTO {
  /** @format int32 */
  code?: number;
  data?: PagedResultBookOrderDataDTO;
  msg?: string;
}

export interface JsonResultPagedResultBookOrderEarning {
  /** @format int32 */
  code?: number;
  data?: PagedResultBookOrderEarning;
  msg?: string;
}

export interface JsonResultPagedResultBookOrder {
  /** @format int32 */
  code?: number;
  data?: PagedResultBookOrder;
  msg?: string;
}

export interface JsonResultPagedResultBookStore {
  /** @format int32 */
  code?: number;
  data?: PagedResultBookStore;
  msg?: string;
}

export interface JsonResultPagedResultCommentsHeadImgOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultCommentsHeadImgOutputDto;
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

export interface JsonResultPagedResultCouponCodeOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultCouponCodeOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultCouponRecordDetailOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultCouponRecordDetailOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultCouponRecordOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultCouponRecordOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultCouponTemplateVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultCouponTemplateVo;
  msg?: string;
}

export interface JsonResultPagedResultEarningBalanceRecord {
  /** @format int32 */
  code?: number;
  data?: PagedResultEarningBalanceRecord;
  msg?: string;
}

export interface JsonResultPagedResultExpressTemplateListOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultExpressTemplateListOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultGoodsGroupOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultGoodsGroupOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultGoodsSpecOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultGoodsSpecOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultGoodsTagOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultGoodsTagOutputDto;
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

export interface JsonResultPagedResultHotelBlacklist {
  /** @format int32 */
  code?: number;
  data?: PagedResultHotelBlacklist;
  msg?: string;
}

export interface JsonResultPagedResultHotelOrderRefund {
  /** @format int32 */
  code?: number;
  data?: PagedResultHotelOrderRefund;
  msg?: string;
}

export interface JsonResultPagedResultHotelOrder {
  /** @format int32 */
  code?: number;
  data?: PagedResultHotelOrder;
  msg?: string;
}

export interface JsonResultPagedResultHotelRoom {
  /** @format int32 */
  code?: number;
  data?: PagedResultHotelRoom;
  msg?: string;
}

export interface JsonResultPagedResultHotelUser {
  /** @format int32 */
  code?: number;
  data?: PagedResultHotelUser;
  msg?: string;
}

export interface JsonResultPagedResultHotel {
  /** @format int32 */
  code?: number;
  data?: PagedResultHotel;
  msg?: string;
}

export interface JsonResultPagedResultKpiStatDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultKpiStatDto;
  msg?: string;
}

export interface JsonResultPagedResultLivePage {
  /** @format int32 */
  code?: number;
  data?: PagedResultLivePage;
  msg?: string;
}

export interface JsonResultPagedResultLiveStatistics {
  /** @format int32 */
  code?: number;
  data?: PagedResultLiveStatistics;
  msg?: string;
}

export interface JsonResultPagedResultMallConfPageOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultMallConfPageOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultMallConfUserTaskDTO {
  /** @format int32 */
  code?: number;
  data?: PagedResultMallConfUserTaskDTO;
  msg?: string;
}

export interface JsonResultPagedResultMarketingActivityOfGroupOrderVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultMarketingActivityOfGroupOrderVo;
  msg?: string;
}

export interface JsonResultPagedResultMarketingActivityOfGroupVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultMarketingActivityOfGroupVo;
  msg?: string;
}

export interface JsonResultPagedResultMarketingActivityVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultMarketingActivityVo;
  msg?: string;
}

export interface JsonResultPagedResultMaterialVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultMaterialVo;
  msg?: string;
}

export interface JsonResultPagedResultMemCardDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultMemCardDto;
  msg?: string;
}

export interface JsonResultPagedResultMemCouponListVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultMemCouponListVo;
  msg?: string;
}

export interface JsonResultPagedResultMemCouponRecordVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultMemCouponRecordVo;
  msg?: string;
}

export interface JsonResultPagedResultMemberDetailOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultMemberDetailOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultOperateLogsDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultOperateLogsDto;
  msg?: string;
}

export interface JsonResultPagedResultOrderVO {
  /** @format int32 */
  code?: number;
  data?: PagedResultOrderVO;
  msg?: string;
}

export interface JsonResultPagedResultPopupAdsDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultPopupAdsDto;
  msg?: string;
}

export interface JsonResultPagedResultProvideActivity {
  /** @format int32 */
  code?: number;
  data?: PagedResultProvideActivity;
  msg?: string;
}

export interface JsonResultPagedResultProvideOrderVO {
  /** @format int32 */
  code?: number;
  data?: PagedResultProvideOrderVO;
  msg?: string;
}

export interface JsonResultPagedResultRechargeRecordOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultRechargeRecordOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultRefundMasterDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultRefundMasterDto;
  msg?: string;
}

export interface JsonResultPagedResultScoreFlowOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultScoreFlowOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultSelfPickUpSite {
  /** @format int32 */
  code?: number;
  data?: PagedResultSelfPickUpSite;
  msg?: string;
}

export interface JsonResultPagedResultSysDeptVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultSysDeptVo;
  msg?: string;
}

export interface JsonResultPagedResultSysResource {
  /** @format int32 */
  code?: number;
  data?: PagedResultSysResource;
  msg?: string;
}

export interface JsonResultPagedResultSysRoleOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultSysRoleOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultSysUserVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultSysUserVo;
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

export interface JsonResultPagedResultVerification {
  /** @format int32 */
  code?: number;
  data?: PagedResultVerification;
  msg?: string;
}

export interface JsonResultPagedResultVirtualCoinFlow {
  /** @format int32 */
  code?: number;
  data?: PagedResultVirtualCoinFlow;
  msg?: string;
}

export interface JsonResultPagedResultWithdrawRecord {
  /** @format int32 */
  code?: number;
  data?: PagedResultWithdrawRecord;
  msg?: string;
}

export interface JsonResultPopupAdsDto {
  /** @format int32 */
  code?: number;
  data?: PopupAdsDto;
  msg?: string;
}

export interface JsonResultProvideActivity {
  /** @format int32 */
  code?: number;
  data?: ProvideActivityRes;
  msg?: string;
}

export interface JsonResultRefundMasterDto {
  /** @format int32 */
  code?: number;
  data?: RefundMasterDto;
  msg?: string;
}

export interface JsonResultResourceDetailVo {
  /** @format int32 */
  code?: number;
  data?: ResourceDetailVo;
  msg?: string;
}

export interface JsonResultScoreGetOutputDto {
  /** @format int32 */
  code?: number;
  data?: ScoreGetOutputDto;
  msg?: string;
}

export interface JsonResultSelfPickUpSite {
  /** @format int32 */
  code?: number;
  data?: SelfPickUpSiteRes;
  msg?: string;
}

export interface JsonResultSigninTaskOutputDto {
  /** @format int32 */
  code?: number;
  data?: SigninTaskOutputDto;
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

export interface JsonResultSysAuthVo {
  /** @format int32 */
  code?: number;
  data?: SysAuthVo;
  msg?: string;
}

export interface JsonResultSysResource {
  /** @format int32 */
  code?: number;
  data?: SysResourceRes;
  msg?: string;
}

export interface JsonResultSysRoleDetailOutputDto {
  /** @format int32 */
  code?: number;
  data?: SysRoleDetailOutputDto;
  msg?: string;
}

export interface JsonResultSysUserVo {
  /** @format int32 */
  code?: number;
  data?: SysUserVo;
  msg?: string;
}

export interface JsonResultUserAgreementRecordDto {
  /** @format int32 */
  code?: number;
  data?: UserAgreementRecordDto;
  msg?: string;
}

export interface JsonResultVirtualCoin {
  /** @format int32 */
  code?: number;
  data?: VirtualCoin;
  msg?: string;
}

export interface JsonResultVoid {
  /** @format int32 */
  code?: number;
  msg?: string;
}

export interface JsonResultWithdrawRecord {
  /** @format int32 */
  code?: number;
  data?: WithdrawRecord;
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

export interface JsonResultString {
  /** @format int32 */
  code?: number;
  data?: string;
  msg?: string;
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

export interface PagedResultBalanceFlowOutputDto {
  list?: BalanceFlowOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultBannerOutputDto {
  list?: BannerOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultBookGoods {
  list?: BookGoodsRes[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultBookOrderDataDTO {
  list?: BookOrderDataDTO[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultBookOrderEarning {
  list?: BookOrderEarning[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultBookOrder {
  list?: BookOrder[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultBookStore {
  list?: BookStoreRes[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultCommentsHeadImgOutputDto {
  list?: CommentsHeadImgOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultCommentsVO {
  list?: CommentsVO[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultCouponCodeDetailOutputDto {
  list?: CouponCodeDetailOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultCouponCodeOutputDto {
  list?: CouponCodeOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultCouponRecordDetailOutputDto {
  list?: CouponRecordDetailOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultCouponRecordOutputDto {
  list?: CouponRecordOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultCouponTemplateVo {
  list?: CouponTemplateVo[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultEarningBalanceRecord {
  list?: EarningBalanceRecordRes[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultExpressTemplateListOutputDto {
  list?: ExpressTemplateListOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultGoodsGroupOutputDto {
  list?: GoodsGroupOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultGoodsSpecOutputDto {
  list?: GoodsSpecOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultGoodsTagOutputDto {
  list?: GoodsTagOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultGoodsVO {
  list?: GoodsVO[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultHotKeywordDto {
  list?: HotKeywordDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultHotelBlacklist {
  list?: HotelBlacklistRes[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultHotelOrderRefund {
  list?: HotelOrderRefund[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultHotelOrder {
  list?: HotelOrder[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultHotelRoom {
  list?: HotelRoomRes[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultHotelUser {
  list?: HotelUser[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultHotel {
  list?: HotelRes[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultKpiStatDto {
  list?: KpiStatDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultLivePage {
  list?: LivePage[];

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

export interface PagedResultMallConfUserTaskDTO {
  list?: MallConfUserTaskDTO[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultMarketingActivityOfGroupOrderVo {
  list?: MarketingActivityOfGroupOrderVo[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultMarketingActivityOfGroupVo {
  list?: MarketingActivityOfGroupVo[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultMarketingActivityVo {
  list?: MarketingActivityVo[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultMaterialVo {
  list?: MaterialVo[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultMemCardDto {
  list?: MemCardDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultMemCouponListVo {
  list?: MemCouponListVo[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultMemCouponRecordVo {
  list?: MemCouponRecordVo[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultMemberDetailOutputDto {
  list?: MemberDetailOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultOperateLogsDto {
  list?: OperateLogsDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultOrderGoodsStatItemVO {
  list?: OrderGoodsStatItemVO[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultOrderVO {
  list?: OrderVO[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultPopupAdsDto {
  list?: PopupAdsDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultProvideActivity {
  list?: ProvideActivityRes[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultProvideOrderVO {
  list?: ProvideOrderVO[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultRechargeRecordOutputDto {
  list?: RechargeRecordOutputDto[];

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

export interface PagedResultSelfPickUpSite {
  list?: SelfPickUpSiteRes[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultSysDeptVo {
  list?: SysDeptVo[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultSysResource {
  list?: SysResourceRes[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultSysRoleOutputDto {
  list?: SysRoleOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultSysUserVo {
  list?: SysUserVo[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultUserAgreeRecordDto {
  list?: UserAgreeRecordDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultUserAgreementRecordDto {
  list?: UserAgreementRecordDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultVerification {
  list?: Verification[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultVirtualCoinFlow {
  list?: VirtualCoinFlow[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultWithdrawRecord {
  list?: WithdrawRecord[];

  /** @format int64 */
  total?: number;
}

export interface AdminActivityGetParams {
  /** 活动名称 */
  activityName?: string;

  /** 活动编号 */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @format int32
   */
  activityStatus?: number;

  /** 活动状态列表 0：未启用 1：启用 2：结束 3：待审核 4：审核失败 */
  activityStatusList?: number[];

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @format int32
   */
  activityType?: number;

  /** 活动类型列表 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙 */
  activityTypeList?: number[];

  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 创建结束时间(报名日期) */
  endGmtCreated?: string;

  /** 活动开始结束时间 */
  endStartTime?: string;

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

  /** 创建开始时间(报名日期) */
  startGmtCreated?: string;

  /** 活动开始时间 */
  startStartTime?: string;

  /**
   * 时间类型 0:进行中 1:未开始 2：已结束
   * @format int32
   */
  timeType?: number;
}

export interface AdminActivityChainGetParams {
  /** 活动名称 */
  activityName?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束
   * @format int32
   */
  activityStatus?: number;

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
   * 团购人数
   * @format int32
   */
  groupBuyingNum?: number;

  /**
   * 拼团类型 1:普通团 2：一分团 3：阶梯团
   * @format int32
   */
  groupType?: number;

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

export interface AdminActivityChainStatOrderGetParams {
  /** 活动编号 */
  activityNo?: string;

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
   * 拼团状态:  0: 队长开团中（待支付） 1: 拼团中 2: 拼团成功 3: 拼团失败
   * @format int32
   */
  groupStatus?: number;

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

export interface AdminActivityFlashSaleGetParams {
  /** 活动名称 */
  activityName?: string;

  /** 活动编号 */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @format int32
   */
  activityStatus?: number;

  /** 活动状态列表 0：未启用 1：启用 2：结束 3：待审核 4：审核失败 */
  activityStatusList?: number[];

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @format int32
   */
  activityType?: number;

  /** 活动类型列表 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙 */
  activityTypeList?: number[];

  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 创建结束时间(报名日期) */
  endGmtCreated?: string;

  /** 活动开始结束时间 */
  endStartTime?: string;

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

  /** 创建开始时间(报名日期) */
  startGmtCreated?: string;

  /** 活动开始时间 */
  startStartTime?: string;

  /**
   * 时间类型 0:进行中 1:未开始 2：已结束
   * @format int32
   */
  timeType?: number;
}

export interface AdminActivityFreeShippingGetParams {
  /** 活动名称 */
  activityName?: string;

  /** 活动编号 */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @format int32
   */
  activityStatus?: number;

  /** 活动状态列表 0：未启用 1：启用 2：结束 3：待审核 4：审核失败 */
  activityStatusList?: number[];

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @format int32
   */
  activityType?: number;

  /** 活动类型列表 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙 */
  activityTypeList?: number[];

  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 创建结束时间(报名日期) */
  endGmtCreated?: string;

  /** 活动开始结束时间 */
  endStartTime?: string;

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

  /** 创建开始时间(报名日期) */
  startGmtCreated?: string;

  /** 活动开始时间 */
  startStartTime?: string;

  /**
   * 时间类型 0:进行中 1:未开始 2：已结束
   * @format int32
   */
  timeType?: number;
}

export interface AdminActivityFullGetParams {
  /** 活动名称 */
  activityName?: string;

  /** 活动编号 */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @format int32
   */
  activityStatus?: number;

  /** 活动状态列表 0：未启用 1：启用 2：结束 3：待审核 4：审核失败 */
  activityStatusList?: number[];

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @format int32
   */
  activityType?: number;

  /** 活动类型列表 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙 */
  activityTypeList?: number[];

  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 创建结束时间(报名日期) */
  endGmtCreated?: string;

  /** 活动开始结束时间 */
  endStartTime?: string;

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

  /** 创建开始时间(报名日期) */
  startGmtCreated?: string;

  /** 活动开始时间 */
  startStartTime?: string;

  /**
   * 时间类型 0:进行中 1:未开始 2：已结束
   * @format int32
   */
  timeType?: number;
}

export interface AdminActivityGroupGetParams {
  /** 活动名称 */
  activityName?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束
   * @format int32
   */
  activityStatus?: number;

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
   * 团购人数
   * @format int32
   */
  groupBuyingNum?: number;

  /**
   * 拼团类型 1:普通团 2：一分团 3：阶梯团
   * @format int32
   */
  groupType?: number;

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

export interface AdminActivityGroupStatOrderGetParams {
  /** 活动编号 */
  activityNo?: string;

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
   * 拼团状态:  0: 队长开团中（待支付） 1: 拼团中 2: 拼团成功 3: 拼团失败
   * @format int32
   */
  groupStatus?: number;

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

export interface AdminActivityPresaleGetParams {
  /** 活动名称 */
  activityName?: string;

  /** 活动编号 */
  activityNo?: string;

  /**
   * 活动状态 0：未启用 1：启用 2：结束 3：待审核 4：审核失败
   * @format int32
   */
  activityStatus?: number;

  /** 活动状态列表 0：未启用 1：启用 2：结束 3：待审核 4：审核失败 */
  activityStatusList?: number[];

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙
   * @format int32
   */
  activityType?: number;

  /** 活动类型列表 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙 */
  activityTypeList?: number[];

  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 创建结束时间(报名日期) */
  endGmtCreated?: string;

  /** 活动开始结束时间 */
  endStartTime?: string;

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

  /** 创建开始时间(报名日期) */
  startGmtCreated?: string;

  /** 活动开始时间 */
  startStartTime?: string;

  /**
   * 时间类型 0:进行中 1:未开始 2：已结束
   * @format int32
   */
  timeType?: number;
}

export interface AdminApiMallConfMaterialDeleteDeleteParams {
  /** ids */
  ids: string;
}

export interface AdminApiMallConfMaterialQueryListGetParams {
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
   * 分组id
   * @format int64
   */
  groupId?: number;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 名称 */
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

  /**
   * 类型 0 图片 1 视频
   * @format int32
   */
  type?: number;
}

export interface AdminApiMallConfMaterialGroupDeleteDeleteParams {
  /**
   * id
   * @format int64
   */
  id: number;
}

export interface AdminApiMallConfMaterialGroupQueryListAllGetParams {
  /** 分组名称 */
  name?: string;

  /**
   * 分组类型 0图片 1视频
   * @format int32
   */
  type?: number;
}

export interface AdminApiMemberExportGetParams {
  /** 如是心排序 正序 asc 倒序 desc */
  availableCoinSort?: string;

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

export interface AdminApiMemberQueryGetParams {
  /** 如是心排序 正序 asc 倒序 desc */
  availableCoinSort?: string;

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

export interface AdminApiSysDeptDeleteDeleteParams {
  /**
   * 部门id
   * @format int64
   */
  id?: number;
}

export interface AdminApiSysDeptQueryGetParams {
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

  /** 部门名称 */
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

export interface AdminApiSysResourceGetParams {
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

  /** 资源名称 */
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

  /**
   * 父级菜单ID
   * @format int64
   */
  parentId?: number;

  /** 资源类型 */
  type?: "API" | "BUTTON" | "MENU";
}

export interface AdminApiSysResourceTreeGetParams {
  /** 资源名称 */
  name?: string;

  /**
   * 父级ID
   * @format int64
   */
  parentId?: number;

  /** 资源类型 */
  type?: "API" | "BUTTON" | "MENU";
}

export interface AdminApiSysRoleDeleteDeleteParams {
  /**
   * 角色id
   * @format int64
   */
  id?: number;
}

export interface AdminApiSysRoleQueryGetParams {
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

  /** 角色名称 */
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

export interface AdminApiSysUserBaseInfoGetParams {
  /**
   * userId
   * @format int64
   */
  userId?: number;
}

export interface AdminApiSysUserDeleteDeleteParams {
  /**
   * 员工id
   * @format int64
   */
  id?: number;
}

export interface AdminApiSysUserExportGetParams {
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

  /** 员工名称 */
  username?: string;
}

export interface AdminApiSysUserListGetParams {
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

  /** 员工名称 */
  username?: string;
}

export interface AdminApiSysUserQueryGetParams {
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

  /** 员工名称 */
  username?: string;
}

export interface AdminApiSysUserResetDefaultDeleteParams {
  /**
   * 员工id
   * @format int64
   */
  id?: number;
}

export interface AdminBookGoodsGetParams {
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

  /** 商品名称 */
  goodsName?: string;

  /** 商品编号 */
  goodsNo?: string;

  /** 商品类型 0餐饮类 1熏蒸类 */
  goodsType?: boolean;

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

  /** 是否上架 0 否 1 是 */
  shelved?: boolean;

  /**
   * 门店id
   * @format int64
   */
  storeId?: number;
}

export interface AdminBookOrderGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 预约人姓名 */
  bookUser?: string;

  /** 预约人信息 */
  bookUserInfo?: string;

  /** 查询条件 */
  condition?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /** 商品类型 0餐饮类 1熏蒸类 */
  goodsType?: boolean;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 会员编号 */
  memberNo?: string;

  /** 订单编号 */
  orderNo?: string;

  /**
   * 订单状态 0:待付款 1：待核销 2：已核销 3：已过期 4：已取消
   * @format int32
   */
  orderStatus?: number;

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

  /** 下单结束时间 */
  payEndDate?: string;

  /** 下单开始时间 */
  payStartDate?: string;

  /**
   * 门店id
   * @format int64
   */
  storeId?: number;

  /** 门店名称 */
  storeName?: string;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;

  /** 会员姓名 */
  userName?: string;

  /** 核销结束时间 */
  verificationEndDate?: string;

  /** 核销开始时间 */
  verificationStartDate?: string;
}

export interface AdminBookOrderDataGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 结束时间 */
  endDate?: string;

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

  /** 开始时间 */
  startDate?: string;

  /**
   * 门店id
   * @format int64
   */
  storeId?: number;

  /** 门店名称 */
  storeName?: string;
}

export interface AdminBookOrderDataSumGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 结束时间 */
  endDate?: string;

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

  /** 开始时间 */
  startDate?: string;

  /**
   * 门店id
   * @format int64
   */
  storeId?: number;

  /** 门店名称 */
  storeName?: string;
}

export interface AdminBookOrderExportsGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 预约人姓名 */
  bookUser?: string;

  /** 预约人信息 */
  bookUserInfo?: string;

  /** 查询条件 */
  condition?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /** 商品类型 0餐饮类 1熏蒸类 */
  goodsType?: boolean;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 会员编号 */
  memberNo?: string;

  /** 订单编号 */
  orderNo?: string;

  /**
   * 订单状态 0:待付款 1：待核销 2：已核销 3：已过期 4：已取消
   * @format int32
   */
  orderStatus?: number;

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

  /** 下单结束时间 */
  payEndDate?: string;

  /** 下单开始时间 */
  payStartDate?: string;

  /**
   * 门店id
   * @format int64
   */
  storeId?: number;

  /** 门店名称 */
  storeName?: string;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;

  /** 会员姓名 */
  userName?: string;

  /** 核销结束时间 */
  verificationEndDate?: string;

  /** 核销开始时间 */
  verificationStartDate?: string;
}

export interface AdminBookOrderEarningGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 分佣结束时间 */
  endDate?: string;

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

  /** 订单编号 */
  orderNo?: string;

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

  /** 分佣开始时间 */
  startDate?: string;

  /**
   * 门店id
   * @format int64
   */
  storeId?: number;

  /** 门店名称 */
  storeName?: string;

  /** 会员姓名 */
  userName?: string;
}

export interface AdminBookOrderEarningExportsGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 分佣结束时间 */
  endDate?: string;

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

  /** 订单编号 */
  orderNo?: string;

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

  /** 分佣开始时间 */
  startDate?: string;

  /**
   * 门店id
   * @format int64
   */
  storeId?: number;

  /** 门店名称 */
  storeName?: string;

  /** 会员姓名 */
  userName?: string;
}

export interface AdminBookStoreGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /**
   * 预约商品id
   * @format int64
   */
  bookGoodsId?: number;

  /** 订货商信息 */
  buyerInfo?: string;

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

  /** 当前纬度 */
  nowLat?: string;

  /** 当前经度 */
  nowLng?: string;

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
   * 排序方式 0：综合 1：距我最近
   * @format int32
   */
  sortType?: number;

  /**
   * 状态 0：禁用 1：启用
   * @format int32
   */
  status?: number;

  /** 门店信息 */
  storeInfo?: string;

  /** 门店名称 */
  storeName?: string;

  /**
   * 门店类型 0：订货商门店 1：自营门店
   * @format int32
   */
  storeType?: number;
}

export interface AdminBookStoreListGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /**
   * 预约商品id
   * @format int64
   */
  bookGoodsId?: number;

  /** 订货商信息 */
  buyerInfo?: string;

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

  /** 当前纬度 */
  nowLat?: string;

  /** 当前经度 */
  nowLng?: string;

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
   * 排序方式 0：综合 1：距我最近
   * @format int32
   */
  sortType?: number;

  /**
   * 状态 0：禁用 1：启用
   * @format int32
   */
  status?: number;

  /** 门店信息 */
  storeInfo?: string;

  /** 门店名称 */
  storeName?: string;

  /**
   * 门店类型 0：订货商门店 1：自营门店
   * @format int32
   */
  storeType?: number;
}

export interface AdminBuyerManageV1ConsoleEarningRecordListGetParams {
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
   * 订货商ID
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

  /** 订单号/用户编码/昵称 */
  searchString?: string;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface AdminBuyerManageV1ConsolePageGetParams {
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
   * 等级id
   * @format int32
   */
  gradeId?: number;

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

  /** 手机账号/昵称 */
  searchString?: string;
}

export interface AdminBuyerManageV1ConsoleSubMemberListGetParams {
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
   * 订货商ID
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

  /** 用户编码/昵称 */
  searchString?: string;
}

export interface AdminCacheGetParams {
  /** key */
  key?: string;
}

export interface AdminCommentsGetParams {
  /**
   * 评论状态  0 待审核 1 审核通过 2:审核驳回
   * @format int32
   */
  auditStatus?: number;

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
   * 评价来源 1：后台评价 2：用户添加
   * @format int32
   */
  fromType?: number;

  /** 商品编号 */
  goodsNo?: string;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 手机号 */
  mobile?: string;

  /** 评论用户 */
  nickName?: string;

  /** 订单编号 */
  orderNo?: string;

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

  /** 显示状态 显示_true 隐藏_false */
  show?: boolean;
}

export interface AdminCommentsExportGetParams {
  /**
   * 评论状态  0 待审核 1 审核通过 2:审核驳回
   * @format int32
   */
  auditStatus?: number;

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
   * 评价来源 1：后台评价 2：用户添加
   * @format int32
   */
  fromType?: number;

  /** 商品编号 */
  goodsNo?: string;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 手机号 */
  mobile?: string;

  /** 评论用户 */
  nickName?: string;

  /** 订单编号 */
  orderNo?: string;

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

  /** 显示状态 显示_true 隐藏_false */
  show?: boolean;
}

export interface AdminEarningBalanceRecordGetParams {
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

  /** 会员编号 */
  memberNo?: string;

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
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface AdminGoodsGetParams {
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

  /** 是否纯如是心商品 */
  rushixin?: boolean;

  /**
   * 销售方式1:纯现金 2: 纯积分 3:现金+积分 4：纯如是心
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

  /** 标签数组 */
  tagIdList?: number[];

  /** 去升级 */
  toUp?: boolean;

  /**
   * 商品类型 0 实物商品 1 虚拟商品
   * @format int32
   */
  virtualType?: number;
}

export interface AdminGoodsExportGetParams {
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

  /** 是否纯如是心商品 */
  rushixin?: boolean;

  /**
   * 销售方式1:纯现金 2: 纯积分 3:现金+积分 4：纯如是心
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

  /** 标签数组 */
  tagIdList?: number[];

  /** 去升级 */
  toUp?: boolean;

  /**
   * 商品类型 0 实物商品 1 虚拟商品
   * @format int32
   */
  virtualType?: number;
}

export interface AdminHotKeywordGetParams {
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

  /** 热词 */
  hotKeyword?: string;

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

export interface AdminHotelGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 城市 */
  city?: string;

  /**
   * 城市id
   * @format int32
   */
  cityId?: number;

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

  /** 酒店名称 */
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

  /** 是否上架 0 否 1 是 */
  shelved?: boolean;
}

export interface AdminHotelBannerGetParams {
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

export interface AdminHotelBlacklistGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 添加人 */
  createUser?: string;

  /** 结束日期 */
  endDate?: string;

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

  /** 身份证号 */
  idcard?: string;

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

  /** 开始日期 */
  startDate?: string;
}

export interface AdminHotelBlacklistExportsGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 添加人 */
  createUser?: string;

  /** 结束日期 */
  endDate?: string;

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

  /** 身份证号 */
  idcard?: string;

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

  /** 开始日期 */
  startDate?: string;
}

export interface AdminHotelOrderGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 离店时间 */
  endDate?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  HIdList?: number[];

  /** 酒店名称 */
  hotelName?: string;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /**
   * 状态 0：待付款 1：待使用 2：已使用 3：已关闭
   * @format int32
   */
  orderStatus?: number;

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

  /** 下单结束时间 */
  payEndDate?: string;

  /** 下单开始时间 */
  payStartDate?: string;

  /** 入住时间 */
  startDate?: string;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface AdminHotelOrderRefundGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 离店时间 */
  endDate?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  HIdList?: number[];

  /** 酒店名称 */
  hotelName?: string;

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

  /** 入住时间 */
  startDate?: string;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface AdminHotelRoomGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 结束日期 */
  endDate?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /** @format int64 */
  HId?: number;

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

  /** 开始日期 */
  startDate?: string;
}

export interface AdminHotelUserGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 添加人 */
  createUser?: string;

  /** 结束日期 */
  endDate?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /** @format int64 */
  HId?: number;

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

  /** 开始日期 */
  startDate?: string;

  /**
   * 系统用户id
   * @format int64
   */
  sysUserId?: number;

  /** 用户账号 */
  username?: string;
}

export interface AdminHotelUserExportsGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 添加人 */
  createUser?: string;

  /** 结束日期 */
  endDate?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /** @format int64 */
  HId?: number;

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

  /** 开始日期 */
  startDate?: string;

  /**
   * 系统用户id
   * @format int64
   */
  sysUserId?: number;

  /** 用户账号 */
  username?: string;
}

export interface AdminLiveGetParams {
  /** 直播ids集合 */
  ids?: string[];
}

export interface AdminLiveStatisticsGetParams {
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

  /** 商品编号/商品名称/规格编号 */
  goodsKeyword?: string;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 直播间ID/直播名称 */
  liveKeyword?: string;

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

export interface AdminLiveStatisticsExportGetParams {
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

  /** 商品编号/商品名称/规格编号 */
  goodsKeyword?: string;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 直播间ID/直播名称 */
  liveKeyword?: string;

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

export interface AdminLiveUpdateGetParams {
  activityID?: string;
  announcement?: string;
  coverImage?: string;
  eventType?: string;
  liveStatus?: "Creating" | "LiveIng" | "Playback" | "Preview" | "Stop";
  liveTime?: string;

  /** @format date-time */
  liveTimeDate?: string;
  name?: string;
  sign?: string;
  status?: string;
  timestamp?: string;
  viewUrl?: string;
}

export interface AdminLivePageGetParams {
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

  /** 页面名称 */
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

export interface AdminMallAddressQueryListAllGetParams {
  /** isDefault */
  isDefault?: number[];
}

export interface AdminMallBalanceExportUserIdGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 是否本月 */
  currentMonth?: boolean;

  /** 结束日期 */
  endDate?: string;

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
   * 余额增加类型
   * @format int32
   */
  plusType?: number;

  /** 开始日期 */
  startDate?: string;

  /**
   * 余额扣减类型
   * @format int32
   */
  subtractType?: number;

  /**
   * userId
   * @format int64
   */
  userId: number;
}

export interface AdminMallBalanceQueryUserIdGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 是否本月 */
  currentMonth?: boolean;

  /** 结束日期 */
  endDate?: string;

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
   * 余额增加类型
   * @format int32
   */
  plusType?: number;

  /** 开始日期 */
  startDate?: string;

  /**
   * 余额扣减类型
   * @format int32
   */
  subtractType?: number;

  /**
   * userId
   * @format int64
   */
  userId: number;
}

export interface AdminMallBalanceRechargeRecordGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /**
   * 充值结束时间
   * @format date-time
   */
  endDate?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /**
   * 会员类型id
   * @format int32
   */
  gradeId?: number;

  /**
   * 主键
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
   * 当前页码
   * @format int32
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;

  /** @format date-time */
  startDate?: string;
}

export interface AdminMallBalanceRechargeRecordExportGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /**
   * 充值结束时间
   * @format date-time
   */
  endDate?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /**
   * 会员类型id
   * @format int32
   */
  gradeId?: number;

  /**
   * 主键
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
   * 当前页码
   * @format int32
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;

  /** @format date-time */
  startDate?: string;
}

export interface AdminMallBannerQueryListGetParams {
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

  /** 名称 */
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

  /**
   * 显示状态 1显示0不显示
   * @format int32
   */
  showStatus?: number;
}

export interface AdminMallClassifyTreeGetParams {
  /** 前端是否展示 */
  frontShow?: boolean;

  /**
   * 商品类型 0 普通商品(默认) 1 积分商品
   * @format int32
   */
  goodsType?: number;
}

export interface AdminMallCommentsHeadImgListGetParams {
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

export interface AdminMallConfigQueryByKeyGetParams {
  /** key */
  key?: string;
}

export interface AdminMallConfigQueryByMultipleKeyGetParams {
  /** key */
  key?: string;
}

export interface AdminMallCouponExportGetParams {
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

export interface AdminMallCouponCodeGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 礼券名称 */
  couponName?: string;

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

export interface AdminMallCouponCodeDetailGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /**
   * 绑定状态 1：未兑换 2：已兑换 4：过期未兑换
   * @format int32
   */
  bindStatus?: number;

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

  /** 核销用户昵称 */
  nickName?: string;

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

  /** 核销用户电话 */
  userMobile?: string;
}

export interface AdminMallExpressQueryGetParams {
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

export interface AdminMallGroupGetParams {
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
   * 商品类型 0 普通商品 1 积分商品
   * @format int32
   */
  goodsType?: number;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 名称 */
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

export interface AdminMallMemberCardGetParams {
  /**
   * 获得方式 1：自动发放 2：用户领取 3：后台发放 4：付费
   * @format int32
   */
  acquisitionType?: number;

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
   * id
   * @format int64
   */
  id?: number;

  /** 会员卡名称 */
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

export interface AdminMallMemberCardMemberUserIdGetParams {
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
   * userId
   * @format int64
   */
  userId: number;
}

export interface AdminMallPageDeleteDeleteParams {
  /**
   * 自定义页面id
   * @format int64
   */
  id: number;
}

export interface AdminMallPageDetailGetParams {
  /**
   * 自定义页面id
   * @format int64
   */
  id?: number;
}

export interface AdminMallPageQueryGetParams {
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
   * 0：自定义页面 1：我的页面
   * @format int32
   */
  type?: number;
}

export interface AdminMallScoreQueryUserIdGetParams {
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
   * userId
   * @format int64
   */
  userId: number;
}

export interface AdminMallSpecExportGetParams {
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
   * 父id
   * @format int64
   */
  pid?: number;

  /** 规格ID */
  specCode?: string;

  /** 规格名称 */
  specName?: string;
}

export interface AdminMallSpecQueryGetParams {
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
   * 父id
   * @format int64
   */
  pid?: number;

  /** 规格ID */
  specCode?: string;

  /** 规格名称 */
  specName?: string;
}

export interface AdminMallStatisticsBuyUserCountStatisticsGetParams {
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

  /** 渠道类型 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

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
   * 类型 0：日 1：月 2：年
   * @format int32
   */
  type?: number;
}

export interface AdminMallStatisticsExportOrderDetailsStatisticsGetParams {
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

  /** 渠道类型 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

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
   * 类型 0：日 1：月 2：年
   * @format int32
   */
  type?: number;
}

export interface AdminMallStatisticsGraphOrderCountStatisticsGetParams {
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

  /** 渠道类型 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

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
   * 类型 0：日 1：月 2：年
   * @format int32
   */
  type?: number;
}

export interface AdminMallStatisticsGraphSaleAmountStatisticsGetParams {
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

  /** 渠道类型 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

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
   * 类型 0：日 1：月 2：年
   * @format int32
   */
  type?: number;
}

export interface AdminMallStatisticsGraphUserCountStatisticsGetParams {
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

  /** 渠道类型 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

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
   * 类型 0：日 1：月 2：年
   * @format int32
   */
  type?: number;
}

export interface AdminMallStatisticsKpiGetParams {
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

  /** 渠道类型 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

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
   * 类型 0：日 1：月 2：年
   * @format int32
   */
  type?: number;
}

export interface AdminMallStatisticsKpiExportGetParams {
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

  /** 渠道类型 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

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
   * 类型 0：日 1：月 2：年
   * @format int32
   */
  type?: number;
}

export interface AdminMallStatisticsKpiGradeGetParams {
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

  /** 渠道类型 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

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
   * 类型 0：日 1：月 2：年
   * @format int32
   */
  type?: number;
}

export interface AdminMallStatisticsOrderDetailsStatisticsGetParams {
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

  /** 渠道类型 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

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
   * 类型 0：日 1：月 2：年
   * @format int32
   */
  type?: number;
}

export interface AdminMallTagGetParams {
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
   * 商品类型 0 普通商品 1 积分商品
   * @format int32
   */
  goodsType?: number;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 名称 */
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

export interface AdminMallUserTaskConfigGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 是否启用 0 否 1是 */
  enabled?: boolean;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 任务名称 */
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

  /** 任务key */
  taskKey?: string;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface AdminMallCouponTemplateDeleteDeleteParams {
  /**
   * 优惠劵id
   * @format int64
   */
  id: number;
}

export interface AdminMallCouponTemplateDetailGetParams {
  /**
   * 优惠劵id
   * @format int64
   */
  id?: number;
}

export interface AdminMallCouponTemplateQueryListGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /**
   * 优惠劵类型 0 抵扣 1 折扣 2 赠品 3 兑换 4 包邮
   * @format int32
   */
  couponType?: number;

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

  /** 名称 */
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

  /**
   * 优惠劵状态 0 已作废 3 生效中 4 未生效 5 已过期
   * @format int32
   */
  status?: number;

  /** 是否有库存，只对 true 生效 */
  stock?: boolean;

  /** 优惠劵编号 */
  templateNo?: string;
}

export interface AdminMemCouponDeleteDeleteParams {
  /** couponNo */
  couponNo: string;
}

export interface AdminMemCouponDetailGetParams {
  /**
   * 优惠劵id
   * @format int64
   */
  id?: number;
}

export interface AdminMemCouponExportGetParams {
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

  /** 用户昵称/手机号/优惠券名称 */
  searchString?: string;

  /**
   * 状态 0 未使用 1 已使用 2 已过期 3已作废
   * @format int32
   */
  useStatus?: number;
}

export interface AdminMemCouponListGetParams {
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

  /** 用户编码 */
  memberNo?: string;

  /**
  * 优惠券类型
  * @example
  */
  useStatus?: string | number;
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

export interface AdminMemCouponQueryListGetParams {
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

  /** 用户昵称/手机号/优惠券名称 */
  searchString?: string;

  /**
   * 状态 0 未使用 1 已使用 2 已过期 3已作废
   * @format int32
   */
  useStatus?: number;
}

export interface AdminMemCouponStatisticGetParams {
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

  /** 用户编码 */
  memberNo?: string;

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

export interface AdminOperateLogsGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 业务id */
  bizNo?: string;

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

  /** 电话 */
  mobile?: string;

  /** 模块 */
  module?: string;

  /** 操作类型 */
  operateType?: string;

  /** 操作者 */
  operator?: string;

  /** 操作者名称 */
  operatorName?: string;

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

  /** 平台 */
  platform?: string;

  /** 租户 */
  tenant?: string;
}

export interface AdminOperateLogsExportGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 业务id */
  bizNo?: string;

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

  /** 电话 */
  mobile?: string;

  /** 模块 */
  module?: string;

  /** 操作类型 */
  operateType?: string;

  /** 操作者 */
  operator?: string;

  /** 操作者名称 */
  operatorName?: string;

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

  /** 平台 */
  platform?: string;

  /** 租户 */
  tenant?: string;
}

export interface AdminOrdersGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 订货商等级名称(会员类型，普通会员传0) */
  buyerGradeName?: string;

  /** 查询条件 */
  condition?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /** 物流单号 */
  expressNo?: string;

  /** 商品名称 */
  goodsName?: string;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙 11:供养
   * @format int32
   */
  marketingType?: number;

  /** 用户编号 */
  memberNo?: string;

  /** 订单渠道 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

  /** 订单编号 */
  orderNo?: string;

  /**
   * 订单状态
   * @format int32
   */
  orderStatus?: number;

  /**
   * 订单类型
   * @format int32
   */
  orderType?: number;

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
   * 供养活动id
   * @format int64
   */
  provideId?: number;

  /**
   * 查询类型 0：全部 1：待付款 2：待发货 3：待收货 4：待评价 5：交易完成 6：交易关闭 7：已付款-拼团中 8：待发货 (拼团成功) 9：交易关闭 (拼团失败) 10：待erp发货
   * @format int32
   */
  queryType?: number;

  /** 0快递，1自提 */
  selfPicked?: boolean;

  /** 收货人地址 */
  shippingAddress?: string;

  /** 收件人手机号 */
  shippingMobile?: string;

  /** 收件人姓名 */
  shippingName?: string;

  /** 会员手机号 */
  userMobile?: string;

  /** 会员姓名 */
  userName?: string;
}

export interface AdminOrdersErpsearchGetParams {
  /** sid */
  sid?: string;
}

export interface AdminOrdersExportGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 订货商等级名称(会员类型，普通会员传0) */
  buyerGradeName?: string;

  /** 查询条件 */
  condition?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /** 物流单号 */
  expressNo?: string;

  /** 商品名称 */
  goodsName?: string;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙 11:供养
   * @format int32
   */
  marketingType?: number;

  /** 用户编号 */
  memberNo?: string;

  /** 订单渠道 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

  /** 订单编号 */
  orderNo?: string;

  /**
   * 订单状态
   * @format int32
   */
  orderStatus?: number;

  /**
   * 订单类型
   * @format int32
   */
  orderType?: number;

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
   * 供养活动id
   * @format int64
   */
  provideId?: number;

  /**
   * 查询类型 0：全部 1：待付款 2：待发货 3：待收货 4：待评价 5：交易完成 6：交易关闭 7：已付款-拼团中 8：待发货 (拼团成功) 9：交易关闭 (拼团失败) 10：待erp发货
   * @format int32
   */
  queryType?: number;

  /** 0快递，1自提 */
  selfPicked?: boolean;

  /** 收货人地址 */
  shippingAddress?: string;

  /** 收件人手机号 */
  shippingMobile?: string;

  /** 收件人姓名 */
  shippingName?: string;

  /** 会员手机号 */
  userMobile?: string;

  /** 会员姓名 */
  userName?: string;
}

export interface AdminOrdersGoodsStatGetParams {
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

  /** 渠道类型 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

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
   * 类型 0：日 1：月 2：年
   * @format int32
   */
  type?: number;
}

export interface AdminOrdersGoodsStatExportGetParams {
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

  /** 渠道类型 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

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
   * 类型 0：日 1：月 2：年
   * @format int32
   */
  type?: number;
}

export interface AdminOrdersListGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 订货商等级名称(会员类型，普通会员传0) */
  buyerGradeName?: string;

  /** 查询条件 */
  condition?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /** 物流单号 */
  expressNo?: string;

  /** 商品名称 */
  goodsName?: string;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙 11:供养
   * @format int32
   */
  marketingType?: number;

  /** 用户编号 */
  memberNo?: string;

  /** 订单渠道 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

  /** 订单编号 */
  orderNo?: string;

  /**
   * 订单状态
   * @format int32
   */
  orderStatus?: number;

  /**
   * 订单类型
   * @format int32
   */
  orderType?: number;

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
   * 供养活动id
   * @format int64
   */
  provideId?: number;

  /**
   * 查询类型 0：全部 1：待付款 2：待发货 3：待收货 4：待评价 5：交易完成 6：交易关闭 7：已付款-拼团中 8：待发货 (拼团成功) 9：交易关闭 (拼团失败) 10：待erp发货
   * @format int32
   */
  queryType?: number;

  /** 0快递，1自提 */
  selfPicked?: boolean;

  /** 收货人地址 */
  shippingAddress?: string;

  /** 收件人手机号 */
  shippingMobile?: string;

  /** 收件人姓名 */
  shippingName?: string;

  /** 会员手机号 */
  userMobile?: string;

  /** 会员姓名 */
  userName?: string;
}

export interface AdminOrdersUpdateErpShippingPostParams {
  /** orderNo */
  orderNo?: string;
}

export interface AdminPopupAdsGetParams {
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

  /** 到期时间 */
  expirationTime?: string;

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

  /** 标题 */
  title?: string;
}

export interface AdminProvideActivityGetParams {
  /** 活动名称 */
  activityName?: string;

  /**
   * 活动状态 0：待审核 1：活动中 2：已驳回 3：已结束
   * @format int32
   */
  activityState?: number;

  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /**
   * 审核状态 0：待审核，1：已通过，2：已拒绝
   * @format int32
   */
  checkState?: number;

  /** 查询条件 */
  condition?: string;

  /** 发布结束时间 */
  endDate?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /** 活动结束结束时间 */
  finishEndDate?: string;

  /** 活动结束开始时间 */
  finishStartDate?: string;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 发布人编号 */
  memberNo?: string;

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
   * 活动情况审核状态 0：待审核，1：已通过，2：已拒绝
   * @format int32
   */
  situationAuditState?: number;

  /** 发布开始时间 */
  startDate?: string;

  /**
   * 状态 0：禁用 1：启用
   * @format int32
   */
  status?: number;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;

  /** 发布人昵称 */
  userName?: string;
}

export interface AdminProvideActivityExportGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 订货商等级名称(会员类型，普通会员传0) */
  buyerGradeName?: string;

  /** 查询条件 */
  condition?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /** 物流单号 */
  expressNo?: string;

  /** 商品名称 */
  goodsName?: string;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙 11:供养
   * @format int32
   */
  marketingType?: number;

  /** 用户编号 */
  memberNo?: string;

  /** 订单渠道 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

  /** 订单编号 */
  orderNo?: string;

  /**
   * 订单状态
   * @format int32
   */
  orderStatus?: number;

  /**
   * 订单类型
   * @format int32
   */
  orderType?: number;

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
   * 供养活动id
   * @format int64
   */
  provideId?: number;

  /**
   * 查询类型 0：全部 1：待付款 2：待发货 3：待收货 4：待评价 5：交易完成 6：交易关闭 7：已付款-拼团中 8：待发货 (拼团成功) 9：交易关闭 (拼团失败) 10：待erp发货
   * @format int32
   */
  queryType?: number;

  /** 0快递，1自提 */
  selfPicked?: boolean;

  /** 收货人地址 */
  shippingAddress?: string;

  /** 收件人手机号 */
  shippingMobile?: string;

  /** 收件人姓名 */
  shippingName?: string;

  /** 会员手机号 */
  userMobile?: string;

  /** 会员姓名 */
  userName?: string;
}

export interface AdminProvideActivityOrderGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 订货商等级名称(会员类型，普通会员传0) */
  buyerGradeName?: string;

  /** 查询条件 */
  condition?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /** 物流单号 */
  expressNo?: string;

  /** 商品名称 */
  goodsName?: string;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙 11:供养
   * @format int32
   */
  marketingType?: number;

  /** 用户编号 */
  memberNo?: string;

  /** 订单渠道 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

  /** 订单编号 */
  orderNo?: string;

  /**
   * 订单状态
   * @format int32
   */
  orderStatus?: number;

  /**
   * 订单类型
   * @format int32
   */
  orderType?: number;

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
   * 供养活动id
   * @format int64
   */
  provideId?: number;

  /**
   * 查询类型 0：全部 1：待付款 2：待发货 3：待收货 4：待评价 5：交易完成 6：交易关闭 7：已付款-拼团中 8：待发货 (拼团成功) 9：交易关闭 (拼团失败) 10：待erp发货
   * @format int32
   */
  queryType?: number;

  /** 0快递，1自提 */
  selfPicked?: boolean;

  /** 收货人地址 */
  shippingAddress?: string;

  /** 收件人手机号 */
  shippingMobile?: string;

  /** 收件人姓名 */
  shippingName?: string;

  /** 会员手机号 */
  userMobile?: string;

  /** 会员姓名 */
  userName?: string;
}

export interface AdminRefundExportGetParams {
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

  /** 会员编号 */
  memberNo?: string;

  /** 订单编号 */
  orderNo?: string;

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

  /** 售后单编号 */
  refundNo?: string;

  /**
   * 售后状态
   * @format int32
   */
  refundStatus?: number;

  /**
   * 售后类型 0：退款 1：退货退款
   * @format int32
   */
  refundType?: number;

  /** 会员手机号 */
  userMobile?: string;

  /** 会员姓名 */
  userName?: string;
}

export interface AdminRefundInfoGetParams {
  /** refundNo */
  refundNo?: string;
}

export interface AdminRefundListGetParams {
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

  /** 会员编号 */
  memberNo?: string;

  /** 订单编号 */
  orderNo?: string;

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

  /** 售后单编号 */
  refundNo?: string;

  /**
   * 售后状态
   * @format int32
   */
  refundStatus?: number;

  /**
   * 售后类型 0：退款 1：退货退款
   * @format int32
   */
  refundType?: number;

  /** 会员手机号 */
  userMobile?: string;

  /** 会员姓名 */
  userName?: string;
}

export interface AdminRichtextGetParams {
  /** id */
  id?: string;
}

export interface AdminScoreOrdersGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 订货商等级名称(会员类型，普通会员传0) */
  buyerGradeName?: string;

  /** 查询条件 */
  condition?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /** 物流单号 */
  expressNo?: string;

  /** 商品名称 */
  goodsName?: string;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙 11:供养
   * @format int32
   */
  marketingType?: number;

  /** 用户编号 */
  memberNo?: string;

  /** 订单渠道 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

  /** 订单编号 */
  orderNo?: string;

  /**
   * 订单状态
   * @format int32
   */
  orderStatus?: number;

  /**
   * 订单类型
   * @format int32
   */
  orderType?: number;

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
   * 供养活动id
   * @format int64
   */
  provideId?: number;

  /**
   * 查询类型 0：全部 1：待付款 2：待发货 3：待收货 4：待评价 5：交易完成 6：交易关闭 7：已付款-拼团中 8：待发货 (拼团成功) 9：交易关闭 (拼团失败) 10：待erp发货
   * @format int32
   */
  queryType?: number;

  /** 0快递，1自提 */
  selfPicked?: boolean;

  /** 收货人地址 */
  shippingAddress?: string;

  /** 收件人手机号 */
  shippingMobile?: string;

  /** 收件人姓名 */
  shippingName?: string;

  /** 会员手机号 */
  userMobile?: string;

  /** 会员姓名 */
  userName?: string;
}

export interface AdminScoreOrdersExportGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 订货商等级名称(会员类型，普通会员传0) */
  buyerGradeName?: string;

  /** 查询条件 */
  condition?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /** 物流单号 */
  expressNo?: string;

  /** 商品名称 */
  goodsName?: string;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /**
   * 活动类型 0:拼团 1:预售 2:限时抢购 3:满减 4:满折 5:满赠 6:优惠券 7:会员折扣 8:积分 9:包邮 10:接龙 11:供养
   * @format int32
   */
  marketingType?: number;

  /** 用户编号 */
  memberNo?: string;

  /** 订单渠道 */
  orderChannelType?: "WebApp" | "WeiXin" | "Weimob";

  /** 订单编号 */
  orderNo?: string;

  /**
   * 订单状态
   * @format int32
   */
  orderStatus?: number;

  /**
   * 订单类型
   * @format int32
   */
  orderType?: number;

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
   * 供养活动id
   * @format int64
   */
  provideId?: number;

  /**
   * 查询类型 0：全部 1：待付款 2：待发货 3：待收货 4：待评价 5：交易完成 6：交易关闭 7：已付款-拼团中 8：待发货 (拼团成功) 9：交易关闭 (拼团失败) 10：待erp发货
   * @format int32
   */
  queryType?: number;

  /** 0快递，1自提 */
  selfPicked?: boolean;

  /** 收货人地址 */
  shippingAddress?: string;

  /** 收件人手机号 */
  shippingMobile?: string;

  /** 收件人姓名 */
  shippingName?: string;

  /** 会员手机号 */
  userMobile?: string;

  /** 会员姓名 */
  userName?: string;
}

export interface AdminSelfPickUpSiteGetParams {
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

  /** @format int32 */
  status?: number;
}

export interface AdminShippingErpSyncPostParams {
  /** orderNo */
  orderNo: string;
}

export interface AdminUserAgreementUserAgreeRecordGetParams {
  /**
   * 同意开始时间
   * @format date-time
   */
  agreeBeginTime?: string;

  /**
   * 同意结束时间
   * @format date-time
   */
  agreeEndTime?: string;

  /** 协议编号 */
  agreementNo?: string;

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
   * 用户协议类型 1：用户协议 2：会员协议
   * @format int32
   */
  type?: number;

  /**
   * 更新开始时间
   * @format date-time
   */
  updateBeginTime?: string;

  /**
   * 更新结束时间
   * @format date-time
   */
  updateEndTime?: string;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface AdminUserAgreementUserAgreementRecordGetParams {
  /** 协议编号 */
  agreementNo?: string;

  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 操作人 */
  createUser?: string;

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
   * 用户协议类型 1：用户协议 2：会员协议
   * @format int32
   */
  type?: number;
}

export interface AdminV1ConsoleBuyerGradePageGetParams {
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

  /** ID数组 */
  ids?: number[];

  /** 名称 */
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

export interface AdminV1ConsoleMemLabelPageGetParams {
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

  /** 名称 */
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

export interface AdminVerificationGetParams {
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

  /** 状态 0：禁用 1：启用 */
  status?: boolean;

  /** 门店信息 */
  storeInfo?: string;

  /** 核销员信息 */
  userInfo?: string;
}

export interface AdminVirtualCoinFlowGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 结束时间 */
  endDate?: string;

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

  /** 开始时间 */
  startDate?: string;

  /**
   * 类型 0：获得 1：消耗
   * @format int32
   */
  type?: number;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface AdminVirtualCoinFlowAllExportsGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 结束时间 */
  endDate?: string;

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

  /** 开始时间 */
  startDate?: string;

  /**
   * 类型 0：获得 1：消耗
   * @format int32
   */
  type?: number;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface AdminVirtualCoinFlowExportsGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 结束时间 */
  endDate?: string;

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

  /** 开始时间 */
  startDate?: string;

  /**
   * 类型 0：获得 1：消耗
   * @format int32
   */
  type?: number;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface AdminWithdrawRecordGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /**
   * 审核状态 0：待审核，1：已通过，2：已驳回
   * @format int32
   */
  checkState?: number;

  /** 查询条件 */
  condition?: string;

  /** 结束日期 */
  endDate?: string;

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

  /** 开始日期 */
  startDate?: string;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;

  /**
   * 提现状态 0：待到账 1：已到账 2：提现失败
   * @format int32
   */
  withdrawStatus?: number;
}

export interface AdminWithdrawRecordExportGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /**
   * 审核状态 0：待审核，1：已通过，2：已驳回
   * @format int32
   */
  checkState?: number;

  /** 查询条件 */
  condition?: string;

  /** 结束日期 */
  endDate?: string;

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

  /** 开始日期 */
  startDate?: string;

  /**
   * 用户id
   * @format int64
   */
  userId?: number;

  /**
   * 提现状态 0：待到账 1：已到账 2：提现失败
   * @format int32
   */
  withdrawStatus?: number;
}

export interface AdminWithdrawRecordNotifyPostParams {
  /** requestBody */
  requestBody: string;
}
export interface AdminMemberMobilePostParams {
  /** requestBody */
  id: number | string,
  mobile: string
}
export interface AdminMemberMobileChangeLogGetParams {
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
   * 会员编号
   * @example
   */
  businessNo?: string;

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
   * 查询类型，1：手机号记录查询
   * @example
   */
  type?: number;

  /**
   * createUser
   * @example
   */
  createUser?: number;
}
export interface JsonResultPagedResultMobileChangeLogDto {
  /** @format int32 */
  code?: number;
  data?: {
    list?: MobileChangeLogDto[];

    /** @format int64 */
    total?: number;
  };
  msg?: string;
}
export interface MobileChangeLogDto {
  /** 修改前手机号 */
  afterChange?: string;

  /** 修改后手机号 */
  beforeChange?: string;

  /** 操作人 */
  createUser?: string;

  /** 业务编号 */
  businessNo?: string;

  /**
   * 使用时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 类型：1.修改手机号
   * @format int32
   */
  type?: number;

  /** 备注 */
  remark?: string;

  status?: number;
  id?: number;
}

