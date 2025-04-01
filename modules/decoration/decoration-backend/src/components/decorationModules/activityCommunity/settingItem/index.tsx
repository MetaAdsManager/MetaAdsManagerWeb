/** @format */

import styles from '../index.module.less';
import AddImageButton from '../../../commModuleComponents/addImageButton';
import ProForm, { ProFormSelect } from '@ant-design/pro-form';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { api } from '@MetaAdsManager/backend-api';

interface Props {
    data: {
        tab: string;
        list: [];
        key: string;
    }[];
    onAdd: () => void;
    onRemove: (i: number) => void;
    onChange: (i: number, value: string) => void;
    onMove: (value: any) => void;
    onShow: (i: number) => void;
    columns: (i: number) => ProColumns[];
}
export default ({ data, onAdd, onRemove, onChange, onMove, onShow, columns }: Props) => (
    <>
        <AddImageButton text='添加一级分类' max={8} onClick={onAdd} />
        <DragDropContext onDragEnd={onMove}>
            <Droppable droppableId={'key'}>
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {data.map(({ tab, list, key }, i) => (
                            <Draggable key={key} draggableId={key} index={i}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <div className={styles.setting_item}>
                                            <div className={styles.setting_item_header}>
                                                {`分类${i + 1}`}
                                                <span onClick={onRemove.bind(null, i)}>删除</span>
                                            </div>
                                            <div className={styles.setting_item_body}>
                                                <ProFormSelect
                                                    label='选择分类'
                                                    request={async () => {
                                                        const { data } = await api[
                                                            '/circle/v1/console/postsclassify/tree_GET'
                                                        ]();
                                                        return data.map((item) => ({
                                                            label: item.name,
                                                            value: JSON.stringify(item)
                                                        }));
                                                    }}
                                                    rules={[{ required: true }]}
                                                    fieldProps={{
                                                        onChange: onChange.bind(null, i),
                                                        value: tab || undefined,
                                                        allowClear: false
                                                    }}
                                                    width={250}
                                                />
                                                <ProForm.Item label='论坛内容'>
                                                    <a onClick={onShow.bind(null, i)}>选择文章</a>
                                                    <span className={styles.tip}>*最多50个</span>
                                                </ProForm.Item>
                                                <ProTable
                                                    columns={columns(i)}
                                                    dataSource={list}
                                                    search={false}
                                                    pagination={false}
                                                    toolBarRender={false}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    </>
);
