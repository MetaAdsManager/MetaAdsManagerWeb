/** @format */

import { RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import classNames from 'classnames';
import { FC, memo, ReactNode } from 'react';
import styles from './index.module.less';

interface IGoodListProps {
    btnName?: string;

    data: any[];

    /**
     * 是否显示更多
     * @default false
     */
    showMore?: boolean;

    renderTitle?: (item: any, index: number) => ReactNode;
}

const Component: FC<IGoodListProps> = (props) => {
    const { btnName = '去抢购', data = [], showMore = false } = props;

    const handleClickMore = () => {};

    return (
        <div className={styles.goodListStyle}>
            {data.map((item, index) => {
                return (
                    <div key={index} className={styles.goodItem}>
                        <div className={styles.goodCover} />
                        <div className={styles.goodContent}>
                            {props.renderTitle?.(item, index)}

                            <div style={{ minWidth: 0 }}>
                                <div className={classNames(styles.goodName, 'textOverflow2')}>
                                    商品名称商品名称商品名称最多显示两行，超商品名称商品名称商品名称最多显示两行，超
                                </div>
                            </div>
                            <div className={styles.goodFooter}>
                                <div className={styles.price}>￥284.00</div>
                                <div className={styles.linePrice}>￥284.00</div>
                                <Button size='small' className={styles.btn}>
                                    {btnName}
                                </Button>
                            </div>
                        </div>
                    </div>
                );
            })}
            {showMore && (
                <div className={styles.more} onClick={handleClickMore}>
                    <span style={{ marginRight: '4px' }}>更多</span>
                    <RightOutlined size={12} />
                </div>
            )}
        </div>
    );
};

Component.displayName = 'GoodList';

const GoodList = memo(Component);
export default GoodList;
