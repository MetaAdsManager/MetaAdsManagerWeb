import { FC, memo } from 'react'
import { PageContainer } from '@ant-design/pro-layout'

const Component: FC = (props) => {
  return (
    <PageContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          fontSize: 24,
          color: '#999'
        }}
      >
        敬请期待
      </div>
    </PageContainer>
  )
}

Component.displayName = 'Notices'

const Notices = memo(Component)
export default Notices
