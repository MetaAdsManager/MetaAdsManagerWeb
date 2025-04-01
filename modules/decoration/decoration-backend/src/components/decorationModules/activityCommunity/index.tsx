/** @format */

import { BasicModuleSignEnum, IModuleInfo } from '@MetaAdsManager-modules/decoration-data';
import { EModuleCategory } from '@MetaAdsManager-modules/decoration-data/src/enums/EModuleCategory';
import { EProductDataType } from '@MetaAdsManager-modules/decoration-data/src/enums/EProductDataType';
import { Empty, Tabs, Image, Row, Col } from 'antd';
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
                <span>热门社区</span>
                <span style={{ fontSize: 12 }}>查看更多 {'>'}</span>
            </div>
            {!!data.length && (
                <Tabs style={{ padding: '0 15px', background: '#FFFFFF' }}>
                    {data.map(({ tab, list }, i) => {
                        const { name } = tab ? JSON.parse(tab) : { name: '分类' };
                        return (
                            <Tabs.TabPane tab={name} key={i}>
                                <div className={styles.goodContent}>
                                    {list.map(
                                        (
                                            {
                                                publisherAvatar,
                                                publisherNickname,
                                                publishTime,
                                                title,
                                                imgUrl = [],
                                                videoUrl
                                            },
                                            index
                                        ) => {
                                            return (
                                                <div
                                                    className={styles.goodItem}
                                                    style={{
                                                        borderBottom:
                                                            index === list.length - 1
                                                                ? 'none'
                                                                : '1px solid rgba(0,0,0,.06)'
                                                    }}
                                                >
                                                    <div className={styles.row}>
                                                        <div
                                                            className={styles.row_image}
                                                            style={{
                                                                background: `url(${publisherAvatar}) no-repeat`,
                                                                backgroundSize: 'cover'
                                                            }}
                                                        />
                                                        <div className={styles.row_content}>
                                                            <div>{publisherNickname}</div>
                                                            <div>发布时间：{publishTime}</div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.row_title}>{title}</div>
                                                    {videoUrl ? (
                                                        <video
                                                            src={videoUrl}
                                                            controls
                                                            className={styles.row_mb}
                                                        />
                                                    ) : (
                                                        <Row gutter={10}>
                                                            {imgUrl?.slice(0, 3).map((item, i) => (
                                                                <Col
                                                                    span={8}
                                                                    className={styles.row_mb}
                                                                >
                                                                    <Image src={item} />
                                                                    {i == 2 &&
                                                                        imgUrl.length > 3 && (
                                                                            <span
                                                                                className={
                                                                                    styles.row_mb_badge
                                                                                }
                                                                            >
                                                                                +{imgUrl.length - 3}
                                                                            </span>
                                                                        )}
                                                                </Col>
                                                            ))}
                                                        </Row>
                                                    )}
                                                </div>
                                            );
                                        }
                                    )}
                                    {!list.length && (
                                        <ModuleInfoCard
                                            type={BasicModuleSignEnum.Community}
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

Component.displayName = 'ActivityCommunity';
Component.defaultProps = getDefaultProps();

const ActivityCommunity = memo(Component);
export default ActivityCommunity;

export const moduleInfo: IModuleInfo = {
    type: BasicModuleSignEnum.Community,
    cname: '社区',
    icon,
    category: EModuleCategory.Content,
    getDefaultProps,
    settingComponet
};
