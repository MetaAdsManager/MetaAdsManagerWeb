import { Card } from 'antd'
import { FC, memo } from 'react'
import ProFormRichText from '@MetaAdsManager/backend-pro/src/components/form/proFormRichText'

interface IMemberDescriptionCardProps {}

const Component: FC<IMemberDescriptionCardProps> = (props) => {
  return (
    <Card title="会员类型说明">
      <ProFormRichText labelCol={{ span: 0 }} name="richTextContent" wrapperCol={{ span: 24 }} />
    </Card>
  )
}

const MemberDescriptionCard = memo(Component)
export default MemberDescriptionCard
