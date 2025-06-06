import { FC, memo } from 'react'
import styles from './index.module.less'
import { IPaidAmountProps } from './const'
import mmCurrenty from '@MetaAdsManager/utils/src/mmCurrency'
import useOrderAmount from '@MetaAdsManager/shop-data/src/hooks/order/useOrderAmount'
import { Space } from 'antd'
import { EOrderType } from '@MetaAdsManager/shop-data/src/enums/order/EOrderType'

/**
 * 实付金额
 *
 * 实付 + 积分
 * @param props
 * @returns
 */
const Component: FC<IPaidAmountProps> = (props) => {
  const { orderType, payStatus } = props.data
  const { payAmount, scoreDeductionCount, exchangeIntegral } = useOrderAmount(props.data)

  if (orderType !== EOrderType.Integral) {
    return payStatus === 0 ? (
      <span>-</span>
    ) : (
      <div className={styles.paidAmountStyle}>
        {mmCurrenty(payAmount)}
        {!!scoreDeductionCount && ` + ${scoreDeductionCount}积分`}
      </div>
    )
  }

  return payStatus === 1 ? (
    <Space>
      {!!payAmount && <span>{mmCurrenty(payAmount)}</span>}

      {!!payAmount && !!exchangeIntegral && <span>+</span>}

      {!!exchangeIntegral && <span>{exchangeIntegral}积分</span>}
    </Space>
  ) : (
    <span>-</span>
  )
}

Component.displayName = 'PaidAmount'

const PaidAmount = memo(Component)
export default PaidAmount
