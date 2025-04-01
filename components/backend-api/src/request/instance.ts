import { getGlobalData } from '@MetaAdsManager/backend-store'

export default (...args) => getGlobalData('instance')(...args)
