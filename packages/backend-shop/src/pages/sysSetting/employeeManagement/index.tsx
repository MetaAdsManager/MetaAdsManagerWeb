/** @format */

import { FC, memo, useEffect, useRef, useState } from 'react';
import styles from './index.module.less';
import { IEmployeeManagementProps } from './const';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { Button, message, Modal, Alert, Space,Input, InputProps } from 'antd';
import { ModalForm, ProFormSelect,ProFormField } from '@ant-design/pro-form';
import useProTableRequest from '@MetaAdsManager/backend-pro/src/hooks/useProTableRequest';
import OperationsColumns from '@MetaAdsManager/backend-pro/src/components/table/operationsColumns';
import useProTableForm from '@MetaAdsManager/backend-pro/src/hooks/useProTableForm';
import ProFormEmail from '@MetaAdsManager/backend-pro/src/components/form/proFormEmail';
import ProFormMobile from '@MetaAdsManager/backend-pro/src/components/form/proFormMobile';
import useExport from '@MetaAdsManager/backend-pro/src/hooks/useExport';
import ProFormLimitInput from '@MetaAdsManager/backend-pro/src/components/form/proFormLimitInput';
import Clipboard from '@MetaAdsManager/backend-pro/src/components/clipboard';
import { api } from '@MetaAdsManager/backend-api';
import { SysUserVo, LoginOutputDto } from '@MetaAdsManager/backend-api/src/request/data-contracts';
import { getGlobalData } from '@MetaAdsManager/backend-store';
import requestInstance from '@MetaAdsManager/backend-api/src/request/instance';
import { useFetch } from '~/@yd';
import dayjs from 'dayjs';

const Component: FC<IEmployeeManagementProps> = (props) => {
    const { post,get } = useFetch();
    const [columns] = useState<ProColumns<SysUserVo>[]>([
        { title: '用户名称', dataIndex: 'username' },
        { title: '头像', dataIndex: 'head_img', hideInSearch: true, valueType: 'avatar', width: 80 },
        { title: '联系电话', dataIndex: 'phone', hideInSearch: true },
        { title: '用户邮箱', dataIndex: 'email', hideInSearch: true },
        // { title: '所属部门', dataIndex: 'deptNames', hideInSearch: true },
        { title: '角色', dataIndex: 'deptNames', hideInSearch: true },
        { title: '创建时间', dataIndex: 'activityTime', hideInSearch: true },
        {
            title: '操作',
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => {
                const isDisable = record.status === 1;
                return (
                    <OperationsColumns
                        operations={[
                            {
                                id: 'edit',
                                text:'编辑角色',
                                onClick: () => {
                                    record = {
                                        ...record,
                                        roleIds: +(record.roles.map((item) => item.id).join(',')) || undefined
                                    }
                                    console.log('record', record);
                                    // 这里忽略deptIds. 在ProFormTreeSelect中需要重新组装数据
                                    const { roleIds, ...rest } = record;
                                    setEditData(record);
                                    modalProps.form.setFieldsValue(record);
                                    setVisible(true);
                                }
                            },
                            {
                                show: record.roles.length > 0,
                                id: 'del',
                                text:'删除角色',
                                onClick: async () => {
                                    const res = await post('/admin/delete_user_role', {
                                        // ...editData,
                                        role_id: record.roles.map((item) => item.id),
                                        user_id: record.id
                                    });
                                    actionRef.current?.reload();
                                }
                            }
                            // {
                            //     id: 'rest',
                            //     text: (
                            //         <a
                            //             onClick={() => {
                            //                 Modal.confirm({
                            //                     title: '重置密码',
                            //                     content: `确认重置用户${record.username}的密码?`,
                            //                     onOk: async () => {
                            //                         try {
                            //                             const { data = {} } = await api[
                            //                                 '/admin/api/sysUser/resetDefault_DELETE'
                            //                             ]({ id: record.id as any });
                            //                             setAccount({ ...data, type: 'change' });
                            //                             setVisible(true);
                            //                         } catch (error) {
                            //                             message.success('重置失败');
                            //                         }
                            //                         Modal.destroyAll();
                            //                     }
                            //                 });
                            //             }}
                            //         >
                            //             重置密码
                            //         </a>
                            //     )
                            // }
                            // {
                            //     id: 'disableStatus',
                            //     text: (
                            //         <a onClick={() => handleToggleMemberStatus(record)}>
                            //             {isDisable ? '禁用' : '解禁'}
                            //         </a>
                            //     )
                            // }
                        ]}
                    />
                );
            }
        }
    ]);
    const [account, setAccount] = useState<LoginOutputDto & { type?: 'change' }>({});

    function handleToggleMemberStatus(record: SysUserVo) {
        const isDisable = record.status === 1;
        const text = isDisable ? '禁用' : '解禁';
        Modal.confirm({
            title: text,
            content: `确认${text}用户${record.username}?`,
            onOk: async () => {
                await api['/admin/api/sysUser/changeStatus_POST']({
                    id: record.id,
                    status: isDisable ? 0 : 1
                });
                actionRef.current?.reload();
            }
        });
    }

    const { request, params, actionRef } = useProTableRequest(
        (params) => get('/admin/user_list', params),
            // api['/admin/api/sysUser/query_GET'](params),
        {
            dataFormat: (data) =>
                data.map((item:any) => {
                    return {
                        ...item,
                        activityTime:dayjs.unix(item.create_time).format('YYYY-MM-DD HH:mm:ss'),
                        username:item.name,
                        deptNames: item.roles.map((s) => s.name).join(',')
                    };
                })
        }
    );

    const { modalProps, editData, setEditData, setVisible } = useProTableForm();
    const handleFormFinish = async (data) => {
        if (account.password) {
            setVisible(false);
            return;
        }
        try {
            let { ...rest } = data;
            // if (deptIds) {
            //     deptIds = deptIds.map((item) => item.value);
            // }
            const saveData = { ...editData, ...rest, roleIds: data.roleIds,head_image:'https://acadmin.yinolink.com/static/index/images/timg.png'};
            if (editData) {
                if(editData.roles && editData.roles.length > 0){
                    const res = await post('/admin/update_user_role', {
                        // ...editData,
                        role_id:data.roleIds,
                        user_id: editData.id
                    });
                }else{
                    const res = await post('/admin/add_user_role', {
                        // ...editData,
                        role_id:data.roleIds,
                        user_id: editData.id
                    });

                }
                // await api['/admin/api/sysUser/update_PUT'](saveData);
                setVisible(false);
                message.success('保存成功');
            } else {
                const { data = {} } = await post('/admin/add_user', saveData);
                message.success('新增成功');
                setVisible(false);
                // setAccount(data);
            }
            actionRef.current?.reload();
        } catch (error) {
            message.error('保存失败');
        }
    };

    useEffect(() => {
        if (!modalProps.visible) {
            setAccount({});
        }
    }, [modalProps.visible]);

    const [exportTable, loading] = useExport(`${getGlobalData('apiUrl')}/admin/api/sysUser/export`);

    return (
        <PageContainer className={styles.employeeManagementStyle}>
            <ProTable
                actionRef={actionRef}
                rowKey='id'
                columns={columns}
                request={request}
                search={{
                    defaultCollapsed: false,
                    labelWidth: 'auto',
                    optionRender: (searchConfig, formProps, dom) => [
                        // <Button
                        //     key='export'
                        //     loading={loading}
                        //     onClick={() => exportTable(params.current)}
                        // >
                        //     导出
                        // </Button>,
                        ...dom,
                        <Button
                            type='primary'
                            key='out'
                            onClick={() => {
                                setVisible(true);
                            }}
                        >
                            新增
                        </Button>
                    ]
                }}
            />

            <ModalForm {...modalProps} modalProps={{ closable: false }} onFinish={handleFormFinish}>
                {!account.password ? (
                    <>
                        <ProFormMobile
                            label='登录账号(手机号码)'
                            name='phone'
                            rules={[{ required: true }]}
                            disabled={!!editData}
                            fieldProps={{ placeholder: '请输入登录账号(用户手机)' }}
                        />

                        <ProFormLimitInput
                            label='用户名称'
                            name='username'
                            rules={[{ required: true }]}
                            disabled={!!editData}
                            maxLength={12}
                        />

                        <ProFormEmail label='用户邮箱' disabled={!!editData} name='email' rules={[{ required: true }]} />
                        {!editData && (<ProFormField
                            label="密码"
                            name="password"
                            rules={[
                                {
                                required: true,
                                pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/,
                                message: '字母+数字组合,最少8位'
                                }
                            ]}
                            >
                            <Input type={'password'} />
                        </ProFormField>
                        )}
                        {!!editData && (<ProFormSelect
                            label='角色'
                            name='roleIds'
                            rules={[{ required: true }]}
                            request={async () => {
                                const { data = [] } = await get('/admin/role_list', {
                                    page: 1,
                                    page_size: 10000
                                })
                                return data.map((item) => ({
                                    label: item.name || '',
                                    value: item.id
                                }));
                            }}
                        />)
                        }
                    </>
                ) : (
                    <Alert
                        message={
                            account.type === 'change'
                                ? `密码修改成功,请妥善保存账户密码`
                                : `账户创建成功,请妥善保存账户密码`
                        }
                        description={
                            <div>
                                <Space>
                                    <span>账户:</span>
                                    <span>{account.username}</span>
                                    <span>密码:</span>
                                    <span>{account.password}</span>

                                    <Clipboard
                                        text={`账号: ${account.username} 密码: ${account.password}`}
                                        onSuccess={() => {
                                            message.success('账户密码已复制');
                                        }}
                                    >
                                        点此复制
                                    </Clipboard>
                                </Space>
                            </div>
                        }
                        type='info'
                        showIcon
                    />
                )}
            </ModalForm>
        </PageContainer>
    );
};

Component.displayName = 'MMEmployeeManagementPage';

const MMEmployeeManagementPage = memo(Component);
export default MMEmployeeManagementPage;
