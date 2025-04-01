/** @format */

import { BasicModuleSignEnum, IModuleInfo } from '@MetaAdsManager-modules/decoration-data';
import { EModuleCategory } from '@MetaAdsManager-modules/decoration-data/src/enums/EModuleCategory';
import { EProductDataType } from '@MetaAdsManager-modules/decoration-data/src/enums/EProductDataType';
import { Empty, Tabs } from 'antd';
import { FC, memo } from 'react';
import useComponentStyle from '../../../hooks/useComponentStyle';
import ModuleInfoCard from '../../moduleInfoCard';
import { IProductModuleProps, getDefaultProps } from './const';
import icon from './images/icon.png';
import icon_car from './images/icon_car.png';
import styles from './index.module.less';
import settingComponet from './settingComponet';

const Component: FC<IProductModuleProps> = (props) => {
    const { data = [], componentStyle } = props;

    const { style } = useComponentStyle(componentStyle);

    return (
        <div className={styles.productModuleStyle} style={style}>
            <div className={styles.card_title}>
                <span>热门资讯</span>
                <span style={{ fontSize: 12 }}>查看更多 {'>'}</span>
            </div>
            {!!data.length && (
                <Tabs style={{ padding: '0 15px', background: '#FFFFFF' }}>
                    {data.map(({ tab, list }, i) => {
                        const { name } = tab ? JSON.parse(tab) : { name: '分类' };
                        return (
                            <Tabs.TabPane tab={name} key={i}>
                                <div className={styles.goodContent}>
                                    {list.map((good, index) => {
                                        return (
                                            <div
                                                key={good.id}
                                                className={styles.goodItem}
                                                style={{
                                                    borderBottom:
                                                        index === list.length - 1
                                                            ? 'none'
                                                            : '1px solid rgba(0,0,0,.06)'
                                                }}
                                            >
                                                <div className={styles.goodItem_content}>
                                                    <div
                                                        className={styles.goodItem_img}
                                                        style={{
                                                            backgroundImage: `url(${good.coverImg})`
                                                        }}
                                                    />

                                                    <div className={styles.goodsDetail}>
                                                        <div className={styles.goodsName}>
                                                            {good.title}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}

                                    {!list.length && (
                                        <ModuleInfoCard
                                            type={BasicModuleSignEnum.News}
                                            text={false}
                                            style={{ minHeight: 200 }}
                                        />
                                    )}
                                </div>
                            </Tabs.TabPane>
                        );
                    })}
                </Tabs>
            )}
            {!data.length && <Empty style={{ minHeight: 200 }} />}
        </div>
    );
};

Component.displayName = 'ActivityNews';
Component.defaultProps = getDefaultProps();

const ActivityNews = memo(Component);
export default ActivityNews;

export const moduleInfo: IModuleInfo = {
    type: BasicModuleSignEnum.News,
    cname: '资讯',
    icon,
    category: EModuleCategory.Content,
    getDefaultProps,
    settingComponet
};
