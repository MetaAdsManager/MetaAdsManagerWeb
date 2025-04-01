/** @format */

import { FC, memo } from 'react';
import { IOperationsColumnsProps } from './const';
import { Space, Modal, Typography } from 'antd';
import styles from './index.module.less';

const { Link } = Typography;

/**
 * 表格操作列
 * @param props
 * @returns
 */
const Component: FC<IOperationsColumnsProps> = (props) => {
    const { operations = [{ id: 'edit' }, { id: 'del' }] } = props;

    return (
        <Space className={styles.operationsColumnsStyle} wrap>
            {operations
                .filter((item) => item.show !== false)
                .map((ops) => {
                    const { onClick, id } = ops as any;
                    if (['edit', 'del', 'detail'].includes(ops.id)) {
                        return {
                            edit: (
                                <a key={id} onClick={onClick}>
                                    {ops.text || '编辑'}
                                </a>
                            ),
                            detail:
                                typeof ops.text === 'object' &&
                                ops.text !== null &&
                                ops.text.type === 'a' ? (
                                    ops.text
                                ) : (
                                    <a key={id} onClick={onClick}>
                                        {ops.text || '详情'}
                                    </a>
                                ),
                            del: (
                                <a
                                    key={id}
                                    onClick={() =>
                                        Modal.confirm({ title: '确定删除?', onOk: onClick })
                                    }
                                >
                                    {ops.text || '删除'}
                                </a>
                            )
                        }[ops.id];
                    }

                    return (
                        <Link
                            disabled={!!ops?.disabled}
                            key={ops.id}
                            className={styles.item}
                            onClick={onClick}
                        >
                            {ops.text}
                        </Link>
                    );
                })}
        </Space>
    );
};

Component.displayName = 'OperationsColumns';

const OperationsColumns = memo(Component);
export default OperationsColumns;
