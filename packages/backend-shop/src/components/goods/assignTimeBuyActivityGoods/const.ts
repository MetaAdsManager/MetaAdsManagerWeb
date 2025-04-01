import { CardProps } from 'antd'
import { MarketingActivityGoodsParam } from '~/request/data-contracts'

export interface IAssignTimeBuyActivityGoodsProps {
  value: MarketingActivityGoodsParam[]

  cardProps?: CardProps

  disabled?: boolean

  onChange(value: MarketingActivityGoodsParam[]): void
}
