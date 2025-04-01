import { merge } from 'lodash-es'
import { IBasicModuleLiverPlayer } from '@MetaAdsManager-modules/decoration-data'
import { getDefaultComponetStyle } from '../../utils'

export interface ILivePlayerModuleProps extends IBasicModuleLiverPlayer {}

export function getDefaultProps<T = IBasicModuleLiverPlayer>(data?: Partial<T>) {
  const defaultData: IBasicModuleLiverPlayer = {
    data: [],
    componentStyle: getDefaultComponetStyle()
  }
  return merge(defaultData, data) as unknown as T
}
