import { BasicModuleProductDTO } from '@MetaAdsManager-modules/decoration-data'
import { EProductDataType } from '@MetaAdsManager-modules/decoration-data/src/enums/EProductDataType'
import { getDefaultComponetStyle } from '../../utils'

export interface IProductModuleProps extends BasicModuleProductDTO {}

export function getDefaultProps(): BasicModuleProductDTO {
  return {
    type: EProductDataType.All,
    classify: [],
    sort: 1,
    pageSize: 10,
    goods: [],
    componentStyle: getDefaultComponetStyle()
  }
}
