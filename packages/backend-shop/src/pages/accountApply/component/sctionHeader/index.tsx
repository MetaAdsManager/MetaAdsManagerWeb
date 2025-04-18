import { FC, ReactNode, memo } from 'react'
import styled from './index.less'

interface IProps {
  title: string
  renderRight?: ReactNode
}

const SectionHeader: FC<IProps> = memo((props) => {
  return (
    <div className={styled.section_header}>
      <div className={styled.header_left}>
        <div className={styled.vertical_line} />
        <div className={styled.title}>{props.title}</div>
      </div>
      <div className={styled.header_right}>{props.renderRight}</div>
    </div>
  )
})

export default SectionHeader
