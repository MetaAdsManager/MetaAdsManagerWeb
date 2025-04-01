import dayjs from 'dayjs'
import { EActivityType } from '../../../src/enums/activity/EActivityType'
import { EActivityStep } from '../../enums/EActivityStep'
import { IActivity } from './const'

/**
 * 过滤有效的营销活动
 *
 * 满减、满折、满赠、免邮 并且已经开始的活动
 */
export function getValidActivities(
  activities: IActivity[] = [],
  activityTypes: EActivityType[] = [EActivityType.Discount, EActivityType.Presented, EActivityType.Deduction, EActivityType.FreeShipping]
) {
  return activities.filter(({ activityType, startTime }) => {
    // 是否已经开始
    const isStart = startTime && dayjs().isAfter(dayjs(startTime))
    // 过滤营销活动
    return isStart && activityTypes.includes(activityType!)
  })
}

/**
 * 从商品的活动信息中取出指定活动类型距离当前时间最近的一个
 *
 * 注：商品活动信息中同一类型活动也会有多个
 */
export function getEarlyGoodsActivity(goodsActivities: IActivity[] = [], filterTypes: EActivityType[]) {
  const [marketingActivity] = goodsActivities
    // 过滤指定类型的活动
    .filter((actData) => filterTypes.indexOf(actData.activityType!) !== -1)
    // 按时间排序，最终取出离当前最近的活动
    .sort((aa, bb) => (dayjs(aa.startTime).isBefore(dayjs(bb.startTime), 'millisecond') ? -1 : 1))

  // 没有符合条件类型的活动
  if (!marketingActivity) {
    return undefined
  }

  const startTimestamp = Number(dayjs(marketingActivity.startTime).toDate())
  const endTimestamp = Number(dayjs(marketingActivity.endTime).toDate())

  const now = Date.now()
  const activityStep = now >= endTimestamp ? EActivityStep.End : now >= startTimestamp ? EActivityStep.InProgress : EActivityStep.NotStarted
  return { ...marketingActivity, activityStep, startTimestamp, endTimestamp }
}

/**
 * 当前是否是限时抢购状态
 *
 * 存在限时抢购活动并且没有进行中的满减满折营销活动
 */
export function isFlashSaleStatus(goodsActivities: IActivity[] = []) {
  const flashSale = getEarlyGoodsActivity(goodsActivities, [EActivityType.FlashSale])

  // 不存在为false
  if (!flashSale) {
    return false
  }

  // 如果开始了 为真
  if (flashSale.startTime && dayjs().isAfter(dayjs(flashSale.startTime), 'millisecond')) {
    return true
  }

  // 如果没有开始。并且有活动则展示为活动
  // 若也没有常规活动，会显示限时抢购按钮，但由于没开始活动，所以按钮为禁用状态
  return !getValidActivities(goodsActivities).length
}

/**
 * 当前是否是预售状态
 *
 * 存在预售活动并且没有进行中的满减满折营销活动
 *
 * 目前为直接拷贝 isFlashSaleStatus()
 */
export function isPreSaleStatus(goodsActivities: IActivity[] = []) {
  const preSale = getEarlyGoodsActivity(goodsActivities, [EActivityType.PreSale])

  // 不存在为false
  if (!preSale) {
    return false
  }

  // 如果开始了 为真
  if (preSale.startTime && dayjs().isAfter(dayjs(preSale.startTime), 'millisecond')) {
    return true
  }

  // 如果没有开始，需要显示倒计时
  return true
}
