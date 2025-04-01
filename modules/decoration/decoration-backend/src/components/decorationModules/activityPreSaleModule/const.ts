import { IBasicModuleActivity } from '@MetaAdsManager-modules/decoration-data'
import { getDefaultComponetStyle } from '../../utils'

export interface IActivityPreSaleModuleProps extends IBasicModuleActivity {}

export function getDefaultProps() {
  const initData: IBasicModuleActivity = {
    data: [],
    componentStyle: getDefaultComponetStyle()
  }
  return initData
}
