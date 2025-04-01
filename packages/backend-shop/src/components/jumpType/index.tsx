/** @format */

import { DeleteOutlined } from '@ant-design/icons';
import convertEnumMap from '@MetaAdsManager/backend-pro/src/utils/convertEnumMap';
import { Button, Drawer, Tabs, message } from 'antd';
import { pick } from 'lodash';
import { FC, memo, useEffect, useMemo, useState } from 'react';
import { GoodsVO, MallConfPageOutputDto } from '~/request/data-contracts';
import { CustomLinkValue, JumpTypeProps } from './const';
import CustomLink from './customLink';
import Decorations from './decorations';
import { EJumpType, MJumpType } from './enums/EJumpType';
import GoodCates from './goodCates';
import GoodsList from './goodsList';
import H5Link from './h5Link';
import styles from './index.module.less';
import JumpTypeValueComponet from './jumpTypeValue';
import SystemPage from './systemPage';
import GoodsGroup from './gooodsGroup';
import Hotel from './hotel';
import LiveList from './liveList';

const { TabPane } = Tabs;

const initCate = () => ({ categoryName: '', categoryNo: '', level: 2 });
const initGroup = () => ({ categoryName: '', categoryNo: '', level: 1 });

const Component: FC<JumpTypeProps> = (props) => {
    const {
        value = { type: EJumpType.None, content: {} },
        include,
        clearable = true,
        onChange = () => {}
    } = props;

    const [tabKey, setTabKey] = useState(EJumpType.SystemPage); // tabkey
    const [visible, setVisible] = useState(false);
    const [sysPageValue, setSysPageValue] = useState('');
    const [customValue, setCustomValue] = useState<CustomLinkValue>({});
    const [decorationValue, setDecorationValue] = useState<MallConfPageOutputDto | undefined>();
    const [cateValue, setCateValue] = useState<any>(initCate);
    const [goodsGroupValue, setGoodsGroupValue] = useState<any>(initGroup);
    const [goodDetail, setGoodDetail] = useState<Pick<GoodsVO, 'goodsName' | 'goodsNo'>>();
    const [livePage, setLivePage] = useState({});
    const [h5Value, setH5Value] = useState({});
    const [hotel, setHotel] = useState({});

    const tabPanes = useMemo(() => {
        const panes = convertEnumMap(MJumpType);
        return include ? panes.filter((it) => include.indexOf(it.value) !== -1) : panes;
    }, [include]);

    useEffect(() => {
        if (!visible) {
            setSysPageValue('');
            setCustomValue({});
            setDecorationValue(undefined);
            setCateValue(initCate);
            setGoodsGroupValue(initGroup);
            setGoodDetail({});
            setLivePage({});
            setH5Value({});
            setHotel({});
        }
    }, [visible]);

    const handleShowModal = () => {
        const { type, content }: any = value;
        const _type = Number(value.type);
        // 打开弹窗赋值
        const setValueFn =
            {
                [EJumpType.SystemPage]: () => setSysPageValue(content.path || ''),
                // [EJumpType.CustomLink]: () => setCustomValue(content),
                [EJumpType.DecorationPage]: () => setDecorationValue(content),
                [EJumpType.GoodCate]: () => setCateValue(content),
                [EJumpType.GoodDetail]: () => setGoodDetail(content),
                [EJumpType.LivePage]: () => setLivePage(content),
                [EJumpType.H5Link]: () => setH5Value(content),
                [EJumpType.GoodsGroup]: () => setGoodsGroupValue(content),
                [EJumpType.Hotel]: () => setHotel(content)
            }[type] || (() => setSysPageValue(''));

        setValueFn();

        setTabKey(
            include?.length ? include[0] : _type === EJumpType.None ? EJumpType.SystemPage : _type
        );
        setVisible(true);
    };

    const handleModalOk = () => {
        let content: any = {};
        switch (tabKey) {
            case EJumpType.SystemPage:
                if (!sysPageValue) {
                    return message.error('请选择链接');
                }
                content = { path: sysPageValue };
                break;
            // case EJumpType.CustomLink:
            //     content = customValue;
            //     break;
            case EJumpType.H5Link:
                if (!h5Value.path) {
                    return message.error('请输入H5链接');
                }
                content = h5Value;
                break;
            case EJumpType.DecorationPage:
                if (!decorationValue) {
                    return message.error('请选择链接');
                }
                content = decorationValue;
                break;
            case EJumpType.GoodCate:
                if (!cateValue.categoryNo) {
                    return message.error('请选择一个类目');
                }
                content = cateValue;
                break;
            case EJumpType.GoodsGroup:
                if (!goodsGroupValue.categoryNo) {
                    return message.error('请选择一个分组');
                }
                content = goodsGroupValue;
                break;
            case EJumpType.GoodDetail:
                if (!goodDetail?.goodsNo) {
                    return message.error('请选择一个商品');
                }
                content = pick(goodDetail, ['goodsName', 'goodsNo']);
                break;
            case EJumpType.LivePage:
                if (!livePage.path) {
                    return message.error('请输入直播链接');
                }
                content = livePage;
                break;
            case EJumpType.Hotel:
                if (!hotel?.id) {
                    return message.error('请选择一个酒店');
                }
                content = pick(hotel, ['id', 'name']);
                break;
        }

        onChange({ type: tabKey, content });
        setVisible(false);
    };

    return (
        <span>
            <span>
                {value.content && Object.keys(value.content).length ? (
                    <span
                        className={styles.linkText}
                        onClick={handleShowModal}
                    >
                        <JumpTypeValueComponet
                            jumpTypePrefix
                            jumpValue={value}
                        />

                        {clearable && (
                            <DeleteOutlined
                                className={styles.linkText_remove}
                                onClick={(ev) => {
                                    ev.stopPropagation();
                                    onChange({ type: EJumpType.None, content: {} });
                                }}
                            />
                        )}
                    </span>
                ) : (
                    <span
                        className={styles.linkText}
                        onClick={handleShowModal}
                    >
                        选择链接
                    </span>
                )}
            </span>

            <Drawer
                visible={visible}
                title='选择链接'
                onClose={() => setVisible(false)}
                width={996}
                extra={
                    <Button
                        type='primary'
                        onClick={handleModalOk}
                    >
                        确定
                    </Button>
                }
            >
                <Tabs
                    activeKey={`${tabKey}`}
                    onChange={(value) => setTabKey(parseInt(value))}
                >
                    {tabPanes.map((item) => (
                        <TabPane
                            tab={item.label}
                            key={`${item.value}`}
                        >
                            {{
                                [EJumpType.SystemPage]: (
                                    <SystemPage
                                        value={sysPageValue}
                                        onChange={setSysPageValue}
                                    />
                                ),
                                [EJumpType.CustomLink]: (
                                    <CustomLink
                                        value={customValue}
                                        onChange={setCustomValue}
                                    />
                                ),
                                [EJumpType.DecorationPage]: (
                                    <Decorations
                                        value={decorationValue}
                                        onChange={setDecorationValue}
                                    />
                                ),
                                [EJumpType.GoodCate]: (
                                    <GoodCates
                                        value={cateValue}
                                        onChange={setCateValue}
                                    />
                                ),
                                [EJumpType.GoodDetail]: (
                                    <GoodsList
                                        value={goodDetail}
                                        onChange={setGoodDetail}
                                    />
                                ),
                                [EJumpType.LivePage]: (
                                    <LiveList
                                        value={livePage}
                                        onChange={setLivePage}
                                    />
                                ),
                                [EJumpType.H5Link]: (
                                    <H5Link
                                        value={h5Value}
                                        onChange={setH5Value}
                                    />
                                ),
                                [EJumpType.GoodsGroup]: (
                                    <GoodsGroup
                                        value={goodsGroupValue}
                                        onChange={setGoodsGroupValue}
                                    />
                                ),
                                [EJumpType.Hotel]: (
                                    <Hotel
                                        value={hotel}
                                        onChange={setHotel}
                                    />
                                )
                            }[item.value] || MJumpType[item.value]}
                        </TabPane>
                    ))}
                </Tabs>
            </Drawer>
        </span>
    );
};

Component.displayName = 'JumpType';

const JumpType = memo(Component);
export default JumpType;
