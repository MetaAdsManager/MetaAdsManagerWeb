/** @format */

import { api } from '@MetaAdsManager/backend-api/src/request';
import useProTableRequest from '@MetaAdsManager/backend-pro/src/hooks/useProTableRequest';
import { getClassifyValues, setClassifyValues } from '../pages/goodsClassify/const';
import { getGlobalData } from '@MetaAdsManager/backend-store';

/**
 * 表格请求
 * @returns
 */
export default function useGoodRequest() {
    const request = useProTableRequest(async (params: any) => api['/admin/goods_GET'](params), {
        cache: {},
        paramsFormat(params) {
            let { classifys, ...rest } = params;
            //   处理商品分类
            if (classifys?.length) {
                const classify = getClassifyValues(classifys);
                rest = { ...rest, ...classify };
            }

            rest.selectSortType = 11;
            return rest;
        },
        dataFormat: (data) => {
            const value = data.map((it) => {
                return {
                    ...it,
                    classifys: setClassifyValues(it)
                };
            });
            return value;
        },
        exportUrl: `${getGlobalData('apiUrl')}/admin/goods/export`
    });

    return request;
}
