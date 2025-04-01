import React from 'react'
import { NativeModules } from 'react-native'
import { windowHeight, windowWidth } from '.'

/**
 * 查询元素大小
 *
 * @export
 * @param {string} name
 * @param {*} scope
 * @returns
 */
export function selectRect(layoutEvent: React.RefObject<unknown>): Promise<{
  left: number
  top: number
  right: number
  bottom: number
  width: number
  height: number
}> {
  return new Promise((resolve) => {
    // 页面打开有个动画所有不准要延迟
    setTimeout(() => {
      NativeModules.UIManager.measure(layoutEvent, (_x, _y, width, height, left, top, right) => {
        resolve({
          left,
          top,
          right: windowWidth - left,
          bottom: windowHeight - top,
          width,
          height
        })
      })
    }, 200)
  })
}
