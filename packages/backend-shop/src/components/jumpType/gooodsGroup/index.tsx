import { FC, memo, useEffect, useState } from 'react';
import styles from './index.module.less';
import { CateDataNode, IGoodCatesProps } from './const';
import { Tree } from 'antd';
import { api } from '~/request';
import { GoodsGroupOutputDto, MenuTreeOutputDto } from '~/request/data-contracts';
import { ICoventTree } from '@MetaAdsManager/utils/src/tree/types';

const Component: FC<IGoodCatesProps> = (props) => {
    const { value, onChange } = props;
    const [list, setList] = useState<CateDataNode[]>([]);

    useEffect(() => {
        getClassifyTree();
    }, []);

    async function getClassifyTree() {
        let treeData: ICoventTree<MenuTreeOutputDto>[] = [];
        try {
            const { data = {} } = await api['/admin/mall/group_GET']({});
            const treeData = recursionTree(data?.list || []);
            setList(treeData);
        } catch (error) {}
        return treeData;
    }

    function recursionTree(data: GoodsGroupOutputDto[], level = 1) {
        return data.map((item) => {
            return {
                ...item,
                title: item.name,
                key: item.id,
                level
            } as CateDataNode;
        });
    }

    return (
        <Tree
            selectedKeys={value ? [value.categoryNo] : []}
            treeData={list}
            onSelect={(_keys, { selectedNodes }) => {
                const { title, key, level } = (selectedNodes[0] || {}) as CateDataNode;
                onChange?.({ categoryNo: key as string, categoryName: title as string, level });
            }}
            className={styles.goodCatesStyle}
        />
    );
};

Component.displayName = 'GoodsGroup';

const GoodsGroup = memo(Component);
export default GoodsGroup;
