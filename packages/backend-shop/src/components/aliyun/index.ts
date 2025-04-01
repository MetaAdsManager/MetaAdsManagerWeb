import { api } from '~/request'
import AliYunWeb from '@MetaAdsManager/aliyun/src/webForm'

export const { upload } = new AliYunWeb({
  getOssToken: api['/admin/api/oss/info_GET']
})
