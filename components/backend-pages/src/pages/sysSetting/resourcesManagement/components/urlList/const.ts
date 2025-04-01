import { SysApiRes } from '@MetaAdsManager/backend-api/src/request/data-contracts'

export interface IUrlListProps {
  list: SysApiRes[]

  onChange(data: SysApiRes[]): void
}
