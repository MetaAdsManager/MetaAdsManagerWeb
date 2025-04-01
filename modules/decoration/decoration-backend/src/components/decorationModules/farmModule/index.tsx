import { IModuleInfo, BasicModuleSignEnum, BasicModuleImageDTO, getModuleImageDefaultProps } from '@MetaAdsManager-modules/decoration-data'
import { EArrangeType } from '@MetaAdsManager-modules/decoration-data/src/enums/EArrangeType'
import classNames from 'classnames'
import { CSSProperties, FC, memo } from 'react'
import useComponentStyle from '../../../hooks/useComponentStyle'
import ModuleInfoCard from '../../moduleInfoCard'
import icon from './icon.png'
import backImage from './backImage.png'
import styles from './index.module.less'
import settingComponet from './settingComponet'
import exampleImg from './smallImage.png'
import weatherImg from './fineDay.gif'
import locationIcon from './location.png'

interface IImageModuleProps extends BasicModuleImageDTO { }

const Component: FC<IImageModuleProps> = (props) => {
  const { arrangeType, data = [], contentStyle, componentStyle } = props
  const { pagePadding = 0 } = componentStyle

  const { style } = useComponentStyle(componentStyle)

  let imageStyle: CSSProperties = {}

  if (arrangeType === EArrangeType.Orientation) {
    imageStyle = {
      borderRadius: contentStyle.borderRadius,
      marginRight: contentStyle.imageMargin
    }
  } else if (arrangeType === EArrangeType.Scroll) {
    imageStyle = {
      borderRadius: contentStyle.borderRadius,
      marginRight: contentStyle.imageMargin
    }
  } else {
    imageStyle = {
      width: 375 - pagePadding * 2,
      borderRadius: contentStyle.borderRadius,
      marginBottom: contentStyle.imageMargin
    }
  }
  const imgStyle = {
    backgroundImage: `url(${backImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
  const imgStyleIcon = {
    backgroundImage: `url(${locationIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <div
      className={styles.farmModuleStyle}
      style={imgStyle}
    >
      <div className={styles.leftColumn}>
        {data.map((item) => <img key={item.key} src={item.url} style={imageStyle} className={styles.img} />)}
        {!data.length && <img src={exampleImg} alt="" className={styles.smallImage} />}
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.content}>
          <span className={styles.farmInfo}>如是农场</span>
          <span className={styles.introductionInfo}>自然耕种 当季蔬菜 实时跟踪</span>
          <span className={styles.weatherInfo}>15-20℃｜晴<img src={weatherImg} alt="" style={{ width: 20, height: 20, marginBottom: 5, marginLeft: 5 }} /></span>
          <span className={styles.locationInfo}>
            <div style={imgStyleIcon} className={styles.farmInfoicon} />
            安徽省·池州市·九华山风景区
          </span>
        </div>
        <div className={styles.footer}>
          <span className={styles.participants}>已有888人参与</span>
          <div className={styles.joinButton}>立即参加</div>
        </div>
      </div>


    </div>
  )
}

Component.displayName = 'FarmModule'
Component.defaultProps = getModuleImageDefaultProps()

const FarmModule = memo(Component)
export default FarmModule

export const moduleInfo: IModuleInfo = {
  type: BasicModuleSignEnum.Farm,
  cname: '如是农场',
  icon,
  getDefaultProps: getModuleImageDefaultProps,
  settingComponet
}
