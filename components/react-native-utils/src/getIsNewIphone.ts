import DeviceInfo from 'react-native-device-info'
import { Dimensions } from 'react-native'
import { judgmentNewPhone } from '@MetaAdsManager/utils/src/judgmentNewPhone'

/**
 * 判断是不是新的下面有黑条的iphone
 *
 * @export
 * @returns
 */
export function getIsNewIphone() {
  const deviceId = DeviceInfo.getDeviceId()
  const { width, height } = Dimensions.get('window')
  return judgmentNewPhone(deviceId, width, height)
}
