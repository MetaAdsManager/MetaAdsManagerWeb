/** @format */

import { BasicModuleProductDTO } from '@MetaAdsManager-modules/decoration-data';
import { EProductDataType } from '@MetaAdsManager-modules/decoration-data/src/enums/EProductDataType';
import { getDefaultComponetStyle } from '../../utils';

export interface IProductModuleProps extends BasicModuleProductDTO {}

export function getDefaultProps() {
    return {
        data: [],
        componentStyle: getDefaultComponetStyle()
    };
}
