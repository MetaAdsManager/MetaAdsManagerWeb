/** @format */

import { BasicModuleProductDTO, BasicModuleProductGood } from '@MetaAdsManager-modules/decoration-data';
import { EProductDataType } from '@MetaAdsManager-modules/decoration-data/src/enums/EProductDataType';
import { Modal, ModalProps, Tabs } from 'antd';
import { FC, memo, useEffect, useMemo, useState } from 'react';
import NewsList from './newsList';

type DataType = BasicModuleProductDTO;
interface IGoodsSelectModalProps extends Omit<ModalProps, 'onOk'> {
    data: DataType;
    onOk(data: DataType): void;
}

const { TabPane } = Tabs;

const Component: FC<IGoodsSelectModalProps> = (props) => {
    // 通过解构定义defaultProps
    const { data, visible, onOk, index } = props;

    const [innerGoods, setInnerGoods] = useState<BasicModuleProductGood[]>([]);

    useEffect(() => {
        if (visible) {
            setInnerGoods(data.data[index].list);
        }
    }, [visible, data, index]);

    const handleOk = () => onOk(innerGoods);

    const classifyId = useMemo(() => {
        const { tab } = data.data[index] || {};
        const { id } = tab ? JSON.parse(tab) : { id: '' };
        return id;
    }, [props]);

    return (
        <Modal {...props} visible={visible} title='选择资讯' width={800} onOk={handleOk}>
            <NewsList
                value={innerGoods}
                onChange={(goods) => setInnerGoods(goods)}
                classifyId={classifyId}
                visible={visible}
            />
        </Modal>
    );
};

Component.displayName = 'NewsSelectModal';

const NewsSelectModal = memo(Component);
export default NewsSelectModal;
