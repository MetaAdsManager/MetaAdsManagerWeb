import { FC, memo, useEffect, useMemo, useState } from 'react'
import styles from './index.module.less'
import { ICouponSelectDrawerProps } from './const'
import { Button, Drawer, Space } from 'antd'
import ProTable from '@ant-design/pro-table'
import useCouponChoose from '../../../../../hooks/coupon/useCouponChoose'
import { CouponTemplateVo } from '@MetaAdsManager/backend-api/src/request/data-contracts'
import { api } from '@MetaAdsManager/backend-api'

const Component: FC<ICouponSelectDrawerProps> = (props) => {
  const { drawerProps, value, max, onChange } = props

  const [visible, setVisible] = useState(false)

  const [selectedRows, setSelectedRows] = useState<CouponTemplateVo[]>([])
  const selectedRowKeys = useMemo(() => selectedRows.map((it) => it.templateNo!), [selectedRows])

  const [innerValue, setInnerValue] = useState<CouponTemplateVo[]>([])

  const { tableProps } = useCouponChoose()

  useEffect(() => {
    if (!value) {
      setInnerValue([])
      return
    }

    try {
      const res = JSON.parse(value)

      if (Array.isArray(res) && res.length) {
        getCouponTemplates(res.map((item) => item.templateNo!))
      } else {
        setInnerValue([])
      }
    } catch (error) {}
  }, [value])

  const getCouponTemplates = async (templateNos: string[] = []) => {
    const params = [...new Set(templateNos)]
    const { data = [] } = await api['/admin/mallCouponTemplate/queryListByTemplateNos_POST'](params)

    // 同一编号的券可以选多张
    const res = templateNos.reduce((list, templateNo) => {
      const coupon = data.find((item) => item.templateNo === templateNo)

      // 有可能券已不存在
      return coupon ? [...list, coupon] : list
    }, [] as CouponTemplateVo[])

    setInnerValue(res)
  }

  const handleRemove = (idx?: number) => {
    if (idx === undefined) {
      onChange?.(JSON.stringify([]))
      return
    }

    const selected: CouponTemplateVo[] = innerValue.slice()
    selected.splice(idx, 1)
    onChange?.(JSON.stringify(selected))
  }

  const handleAdd = () => {
    setVisible(true)
    setSelectedRows([])
  }

  const handleClose = () => {
    setVisible(false)
  }

  const handleOk = () => {
    const had = !!selectedRows.length
    const list = [...innerValue, ...(had ? selectedRows : [])]
    onChange?.(JSON.stringify(max ? list.slice(-1 * max) : list))
    handleClose()
  }

  return (
    <>
      {props.render?.({
        coupons: innerValue || [],
        remove: handleRemove,
        add: handleAdd
      })}

      <Drawer
        {...drawerProps}
        visible={visible}
        width="80%"
        className={styles.couponSelectDrawerStyle}
        onClose={handleClose}
        extra={
          <Space>
            <Button onClick={handleClose}>取消</Button>
            <Button type="primary" onClick={handleOk}>
              确定
            </Button>
          </Space>
        }
      >
        <ProTable
          {...tableProps}
          rowSelection={{
            type: 'radio',
            selectedRowKeys,
            onChange: (_, selectedRows: CouponTemplateVo[]) => {
              setSelectedRows(selectedRows)
            }
          }}
        />
      </Drawer>
    </>
  )
}

Component.displayName = 'CouponSelectDrawer'

const CouponSelectDrawer = memo(Component)
export default CouponSelectDrawer
