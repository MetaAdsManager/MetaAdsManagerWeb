import { OrderVO } from '@MetaAdsManager/backend-api/src/request/data-contracts'
import { DescriptionsProps } from 'antd'
import { atom } from 'jotai'

export const orderDetailAtom = atom<OrderVO>({})

export const orderDescriptionsPropsAtom = atom<Partial<DescriptionsProps>>({
  column: 1,
  labelStyle: { width: 100 }
})
