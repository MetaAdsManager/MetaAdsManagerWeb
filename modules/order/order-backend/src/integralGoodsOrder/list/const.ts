import { OrderVO } from '@MetaAdsManager/backend-api/src/request/data-contracts'
import { EOrderStatus } from '@MetaAdsManager/shop-data/src/enums/order/EOrderStatus'

export interface IOrderListProps {}

export interface IOrderVo extends OrderVO {
  queryType: EOrderStatus
}
