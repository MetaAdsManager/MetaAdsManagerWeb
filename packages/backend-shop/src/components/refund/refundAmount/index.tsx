/** @format */

import { FC, memo } from 'react';
import { IRefundAmountProps } from './const';
import mmCurrenty, { mmAdds } from '@MetaAdsManager/utils/src/mmCurrency';
import { Space } from 'antd';
import useRefundAmount from '~/hooks/refund/useRefundAmount';

/**
 * 售后申请金额信息
 * 退款金额为：商品金额+运费
 */
const Component: FC<IRefundAmountProps> = ({ data = {} }) => {
    // 列表 -  展示实际退款金额
    const { refundAmount, freightAmount } = useRefundAmount(data);

    return (
        <Space>
            {refundAmount || freightAmount ? (
                <>
                    <span>{mmCurrenty(mmAdds(refundAmount, freightAmount))}</span>

                    {!!freightAmount && <span>(含运费{mmCurrenty(freightAmount)})</span>}
                </>
            ) : (
                '-'
            )}
        </Space>
    );
};

Component.displayName = 'RefundAmount';

const RefundAmount = memo(Component);
export default RefundAmount;
