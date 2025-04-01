/**
 * 订单状类型
 */

import { convertEnum } from '@MetaAdsManager/utils/src/enumUtil'

export enum EOrderType {
  /** 普通订单 */
  Normal = 1,

  /** 限时抢购订单 */
  FlashSale,

  /** 积分订单 */
  Integral,

  /** 预售商品订单 */
  PreSale,

  /** 拼团、接龙订单 */
  Activity,
  
  /** 虚拟订单 */
  Virtual = 7
}

export const [MOrderType, OOrderType] = convertEnum([
  [EOrderType.Normal, '普通订单'],
  [EOrderType.FlashSale, '限时抢购订单'],
  [EOrderType.Integral, '积分订单'],
  [EOrderType.PreSale, '预售商品订单'],
  [EOrderType.Activity, '拼团、接龙订单'],
  [EOrderType.Virtual, '虚拟订单']
])
