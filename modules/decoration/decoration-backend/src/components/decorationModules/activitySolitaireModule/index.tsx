/** @format */

import { BasicModuleSignEnum, IModuleInfo } from '@MetaAdsManager-modules/decoration-data';
import { EModuleCategory } from '@MetaAdsManager-modules/decoration-data/src/enums/EModuleCategory';
import { FC, memo } from 'react';
import useComponentStyle from '../../../hooks/useComponentStyle';
import BuyCountDown from '../../commModuleComponents/activityModule/buyCountDown';
import GoodList from '../../commModuleComponents/activityModule/goodList';
import TabList from '../../commModuleComponents/activityModule/tabList';
import useActivityService from '../../commModuleComponents/activityModule/useActivityService';
import { IActivityModuleProps, getDefaultProps } from './const';
import icon from './icon.png';
import styles from './index.module.less';
import settingComponet from './settingComponet';

const Component: FC<IActivityModuleProps> = (props) => {
    const { componentStyle } = props;

    const { style } = useComponentStyle(componentStyle);
    const { localData, showCardTitle, activeIndex, setActiveIndex } = useActivityService(props, {
        showActivityTitle: '接龙',
        btnName: '去购买'
    });

    return (
        <div className={styles.activityModuleStyle} style={style}>
            {/* {!showCardTitle && <TabList activeIndex={activeIndex} data={localData} onChange={(idx) => setActiveIndex(idx)} />} */}
            <div className={styles.card_title}>
                <span>接龙活动</span>
                <span style={{ fontSize: 12 }}>查看更多 {'>'}</span>
                {/* <BuyCountDown endTime={item.endTime} startTime={item.startTime} /> */}
            </div>

            {localData.map((item, index) => {
                return (
                    <div
                        className={styles.card}
                        key={item.showActivityTitle + `${index}`}
                        style={{ marginTop: index > 0 ? 10 : 0 }}
                    >
                        {/* {showCardTitle && (
                            <div className={styles.card_title}>
                                <span>{item.showActivityTitle}</span>
                                <BuyCountDown endTime={item.endTime} startTime={item.startTime} />
                            </div>
                        )} */}
                        <GoodList btnName={item.btnName} data={[1]} />
                    </div>
                );
            })}
        </div>
    );
};

Component.displayName = 'ActivityModule';

const ActivityModule = memo(Component);
export default ActivityModule;

export const moduleInfo: IModuleInfo = {
    type: BasicModuleSignEnum.Solitaire,
    cname: '接龙',
    icon,
    category: EModuleCategory.Content,
    getDefaultProps,
    settingComponet
};
