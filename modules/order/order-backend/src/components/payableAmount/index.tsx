import { FC, memo } from 'react'
import styles from './index.module.less'
import { IPayableAmountProps } from './const'
import mmCurrenty from '@MetaAdsManager/utils/src/mmCurrency'
import useOrderAmount from '@MetaAdsManager/shop-data/src/hooks/order/useOrderAmount'
import { Space } from 'antd'
import { EOrderType } from '@MetaAdsManager/shop-data/src/enums/order/EOrderType'

/**
 * 应付金额
 * @param props
 * @returns
 */
const Component: FC<IPayableAmountProps> = (props) => {
  const { exchangeIntegral = 0, orderType } = props.data
  const { shouldPayAmount } = useOrderAmount(props.data)

  if (orderType !== EOrderType.Integral) {
    return <div className={styles.payableAmountStyle}>{mmCurrenty(shouldPayAmount)}</div>
  }

  return (
    <Space>
      {!!shouldPayAmount && <span>{mmCurrenty(shouldPayAmount)}</span>}

      {!!shouldPayAmount && !!exchangeIntegral && <span>+</span>}

      {!!exchangeIntegral && <span>{exchangeIntegral}积分</span>}
    </Space>
  )
}

Component.displayName = 'PayableAmount'

const PayableAmount = memo(Component)
export default PayableAmount
