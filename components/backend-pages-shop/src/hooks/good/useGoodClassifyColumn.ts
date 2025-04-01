/** @format */

import { MMProColumns } from 'MMProType';
import { useState } from 'react';
import { api } from '@MetaAdsManager/backend-api/src/request';
import { GoodsVO } from '@MetaAdsManager/backend-api/src/request/data-contracts';
import convertToTree from '@MetaAdsManager/utils/src/tree/convertToTree';

/**
 * 商品分类表格列
 * @returns
 */
export default function useGoodClassifyColumn() {
    const [classifyColumn] = useState<MMProColumns<GoodsVO>>({
        title: '商品分类',
        dataIndex: 'classifys',
        valueType: 'cascader',
        request: async () => {
            const { data = [] } = await api['/admin/mall/classify/tree_GET']({});
            return convertToTree(data, { title: 'name', value: 'id' });
        }
    });

    return [classifyColumn];
}
