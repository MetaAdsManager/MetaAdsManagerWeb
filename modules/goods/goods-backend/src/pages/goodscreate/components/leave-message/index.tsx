/** @format */

import { FC, memo } from 'react';
import styles from './index.module.less';
import { Button, message, Space, Table, Typography } from 'antd';
import useProTableForm from '@MetaAdsManager/backend-pro/src/hooks/useProTableForm';
import { ColumnType } from 'antd/lib/table';
import ProForm, { ModalForm, ProFormRadio, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import { MGoodMessageType, OGoodMessageType } from '../../../../enums/goods';
import { GoodsMessageDTOS, GoodsVO } from '@MetaAdsManager/backend-api/src/request/data-contracts';

interface ILeaveMessageProps {
    goodsId?: number;

    value?: GoodsMessageDTOS[];
    onChange?(value?: GoodsMessageDTOS[]): void;
}

const { Text, Link } = Typography;

const Component: FC<ILeaveMessageProps> = (props) => {
    const { value, onChange, goodsId } = props;

    const { modalProps, setShowModal } = useProTableForm({
        title: () => '商品留言',
        modalProps: {
            onFinish(values: GoodsMessageDTOS) {
                const result: GoodsMessageDTOS = { ...values, goodsId };
                onChange?.((value || []).concat([result]));
                return Promise.resolve(true);
            }
        }
    });

    const columns: ColumnType<GoodsMessageDTOS>[] = [
        { title: '字段名', dataIndex: 'columnName' },
        { title: '字段格式', dataIndex: 'columnType', render: (value) => MGoodMessageType[value] },
        { title: '是否必填', dataIndex: 'requiredState', render: (value) => (value ? '是' : '否') },
        {
            title: '操作',
            dataIndex: 'op',
            render: (_, record, index) => {
                return (
                    <Space size={12}>
                        <Link onClick={() => setShowModal(record)}>编辑</Link>
                        <Text
                            type='danger'
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                onChange?.(
                                    (value || []).filter((item, itemIndex) => index !== itemIndex)
                                );
                            }}
                        >
                            删除
                        </Text>
                    </Space>
                );
            }
        }
    ];

    return (
        <div>
            <Space>
                <Button
                    type='primary'
                    onClick={() => {
                        if (!value || value.length < 5) {
                            setShowModal();
                        } else {
                            message.error('最多添加5条留言');
                        }
                    }}
                >
                    添加留言字段
                </Button>
                <Text type='secondary'>*最多添加5个留言字段</Text>
            </Space>

            <Table
                columns={columns}
                dataSource={value}
                pagination={false}
                bordered
                style={{ marginTop: 15 }}
            />

            <ModalForm {...modalProps}>
                <ProFormText
                    label='字段名'
                    name='columnName'
                    fieldProps={{ maxLength: 10, showCount: true }}
                    rules={[{ required: true, message: '请输入字段名' }]}
                />
                <ProFormSelect
                    label='字段格式'
                    name='columnType'
                    options={OGoodMessageType}
                    rules={[{ required: true, message: '请选择字段格式' }]}
                />
                <ProFormRadio.Group
                    label='是否必填'
                    name='requiredState'
                    options={[
                        { value: true, label: '是' },
                        { value: false, label: '否' }
                    ]}
                    rules={[{ required: true, message: '请选择是否必填' }]}
                />
            </ModalForm>
        </div>
    );
};

const LeaveMessage = memo(Component);
export default LeaveMessage;
