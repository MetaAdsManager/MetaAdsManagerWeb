/** @format */

import mmCurrenty from '@MetaAdsManager/utils/src/mmCurrency';

/**
 * 格式化商品价格积分
 *
 * @export
 * @param {*} value
 * @return {*}
 */
export default function goodsPriceSaleScore(price?: number | string, saleScore?: number) {
    let value = '-';
    const isString = typeof price === 'string' && price?.includes('¥');
    if (!!price && !!saleScore) {
        return `${isString ? price : mmCurrenty(price)} + ${saleScore}积分`;
    }
    if (!!price && !saleScore) {
        return `${isString ? price : mmCurrenty(price)}`;
    }
    if (!price && !!saleScore) {
        return `${saleScore}积分`;
    }
    return value;
}
