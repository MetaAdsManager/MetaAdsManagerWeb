/** @format */

import { ModalForm, ProFormDigit } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { api, GoodsSpecOutputDto } from '@MetaAdsManager/backend-api';
import ProFormLimitInput from '@MetaAdsManager/backend-pro/src/components/form/proFormLimitInput';
import OperationsColumns from '@MetaAdsManager/backend-pro/src/components/table/operationsColumns';
import useProTableForm from '@MetaAdsManager/backend-pro/src/hooks/useProTableForm';
import useProTableRequest from '@MetaAdsManager/backend-pro/src/hooks/useProTableRequest';
import { concatRule } from '@MetaAdsManager/form-rules';
import { Button, message } from 'antd';
import { FC, memo, useState } from 'react';
import { apiUrl } from '~/config';

interface IGoodsSkuListProps {
    service: ReturnType<typeof useService>;
}

const Component: FC<IGoodsSkuListProps> = (props) => {
    const {
        actionRef,
        formRef,
        columns,
        request,
        modalProps,
        setVisible,
        handleFormFinish,
        exportLoading,
        onExport
    } = props.service;

    return (
        <PageContainer>
            <ProTable
                actionRef={actionRef}
                formRef={formRef}
                rowKey='id'
                columns={columns}
                request={request}
                search={{
                    defaultCollapsed: false,
                    labelWidth: 'auto'
                }}
                toolBarRender={() => {
                    return [
                        <Button
                            key='add'
                            type='primary'
                            onClick={() => {
                                setVisible(true);
                            }}
                        >
                            新增规格
                        </Button>,
                        <Button key='export' loading={exportLoading} onClick={onExport}>
                            导出
                        </Button>
                    ];
                }}
            />

            <ModalForm {...modalProps} onFinish={handleFormFinish}>
                <ProFormLimitInput
                    label='规格名称'
                    name='specName'
                    rules={concatRule(['required', 'emoji'])}
                    maxLength={20}
                />

                <ProFormDigit
                    label='排序值'
                    name='sort'
                    min={1}
                    max={10000}
                    fieldProps={{ precision: 0 }}
                    rules={[{ required: true, message: '请输入排序值' }]}
                />
            </ModalForm>
        </PageContainer>
    );
};

Component.displayName = 'GoodSkuList';

const GoodSkuList = memo(Component);
export default GoodSkuList;

interface IUseServiceProps {
    /** 父规格id */
    pid?: string;

    /** 点击子规格管理 */
    onChildSkuClick?(data: GoodsSpecOutputDto): void;
}

/**
 * 业务hook
 */
export function useService(props: IUseServiceProps) {
    const { pid } = props;
    const isChildSku = !!pid; // 是否是子规格

    const [columns] = useState<ProColumns<GoodsSpecOutputDto>[]>([
        { title: '序号', dataIndex: '', valueType: 'index', hideInSearch: true },
        { title: (isChildSku ? '子' : '') + '规格ID', dataIndex: 'specCode' },
        { title: (isChildSku ? '子' : '') + '规格名称', dataIndex: 'specName' },
        {
            title: '子规格数量',
            dataIndex: 'childrenNum',
            hideInSearch: true,
            hideInTable: isChildSku
        },
        { title: '排序值', dataIndex: 'sort', hideInSearch: true },
        {
            title: '操作',
            dataIndex: 'option',
            valueType: 'option',
            width: 200,
            render: (_, record) => (
                <OperationsColumns
                    operations={[
                        {
                            id: 'custom',
                            show: !isChildSku,
                            text: <a onClick={() => props.onChildSkuClick?.(record)}>子规格管理</a>
                        },
                        {
                            id: 'edit',
                            onClick: () => {
                                setEditData(record);
                                modalProps.form.setFieldsValue(record);
                                setVisible(true);
                            }
                        },
                        {
                            id: 'del',
                            onClick: async () => {
                                await api['/admin/mall/spec/delete/{id}_DELETE'](record.id as any);
                                actionRef.current?.reload();
                            }
                        }
                    ]}
                />
            )
        }
    ]);

    const { request, actionRef, formRef, exportLoading, exportTable } = useProTableRequest(
        (params) => api['/admin/mall/spec/query_GET']({ ...params, pid }),
        {
            cache:{},
            exportUrl: `${apiUrl}/admin/mall/spec/export?pid=${pid || 0}`,
        }
    );

    const { modalProps, editData, setEditData, setVisible } = useProTableForm();
    const handleFormFinish = async (data) => {
        try {
            const saveData = { ...editData, ...data, pid: pid ?? 0 };
            if (editData) {
                await api['/admin/mall/spec/update_PUT'](saveData);
            } else {
                await api['/admin/mall/spec/add_POST'](saveData);
            }
            message.success('保存成功');
            setVisible(false);
            actionRef.current?.reload();
        } catch (error) {
            message.error('保存失败');
        }
    };
    const onExport = () => {
        exportTable();
    };

    return {
        modalProps,
        setVisible,
        actionRef,
        formRef,
        columns,
        request,
        handleFormFinish,
        onExport,
        exportLoading
    };
}
