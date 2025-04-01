import { ESliderWithImageMode } from '@MetaAdsManager-modules/decoration-data/src/enums/ESliderWithImageMode'
import { BasicModuleSliderWithImageDTO } from '@MetaAdsManager-modules/decoration-data'
import { getDefaultComponetStyle } from '../../utils'

export interface ISliderWithImageModuleProps extends BasicModuleSliderWithImageDTO {}

export function getDefaultProps(): BasicModuleSliderWithImageDTO {
  return {
    mode: ESliderWithImageMode.SliderLeft,
    slider: {
      interval: 5,
      data: []
    },
    images: [],
    contentStyle: {
      borderRadius: 0,
      imageMargin: 0
    },
    componentStyle: getDefaultComponetStyle()
  }
}
