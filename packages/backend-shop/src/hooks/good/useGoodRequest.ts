/** @format */

import useProTableRequest from '@MetaAdsManager/backend-pro/src/hooks/useProTableRequest';
import { getClassifyValues, setClassifyValues } from '~/pages/goodsManagement/goodsClassify/const';
import { api } from '~/request';

/**
 * 表格请求
 * @returns
 */
export default function useGoodRequest(pa = {}) {
    const request = useProTableRequest(async (params: any) => api['/admin/goods_GET'](params), {
        paramsFormat(params) {
            let { classifys, ...rest } = params;
            //   处理商品分类
            if (classifys && classifys.length) {
                const classify = getClassifyValues(classifys);
                rest = { ...rest, ...classify };
            }
            return {
                ...rest,
                ...pa
            };
        },
        dataFormat: (data) => {
            return data.map((it) => {
                return {
                    ...it,
                    classifys: setClassifyValues(it)
                };
            });
        }
    });

    return request;
}
