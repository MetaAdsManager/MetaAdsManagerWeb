import { ModalFormProps } from '@ant-design/pro-form'
import { MarketingActivityGoodsParam } from '~/request/data-contracts'

export interface ISetGoodModalProps extends Omit<ModalFormProps, 'onChange'> {
  good?: MarketingActivityGoodsParam

  disabled?: boolean

  onChange(good: MarketingActivityGoodsParam): void
}
