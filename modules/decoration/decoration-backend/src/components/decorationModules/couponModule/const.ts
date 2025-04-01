import { IBasicModuleCoupon } from '@MetaAdsManager-modules/decoration-data'
import { getDefaultComponetStyle } from '../../utils'

export interface ICouponModuleProps extends IBasicModuleCoupon {}

export function getDefaultProps() {
  const initData: IBasicModuleCoupon = {
    data: [],
    componentStyle: getDefaultComponetStyle()
  }
  return initData
}
