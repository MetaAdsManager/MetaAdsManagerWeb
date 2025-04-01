import { useMemo } from 'react'
import { GoodsSkuDTO, GoodsVO } from '@MetaAdsManager/backend-api'
import { ProColumns } from '@ant-design/pro-table'

/**
 * 商品sku表格列
 *
 * 根据商品goodsSpecRelationList计算出sku列信息
 *
 * @export
 * @param {GoodsVO} data
 * @return {*}
 */
export default function useGoodSkuColumns(data: GoodsVO) {
  const columns = useMemo(() => {
    const { goodsSpecRelationList = [] } = data
    return goodsSpecRelationList
      .filter(({ specPid }) => !specPid) // 提取父级计算出表格列数
      .map((item, index) => {
        return {
          dataIndex: item.specId,
          title: item.specName,
          render: (_, { specIds = '' }) => {
            const sid = specIds.split(',')[index]
            const { specName } = goodsSpecRelationList.find((item) => `${item.specId}` === sid) || {}
            return specName
          }
        } as ProColumns<GoodsSkuDTO>
      })
      .concat([
        { dataIndex: 'skuImg', title: 'sku图片', valueType: 'image', width: 80 },
        { dataIndex: 'skuNo', title: 'sku编码' }
      ])
  }, [data])

  return [columns]
}
