/** @format */

import { FC, memo, useEffect, useState } from 'react';
// import styles from './index.module.less';
// import { IEmployeeManagementProps } from './const';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Button, message, Modal, Alert, Space } from 'antd';
import { ModalForm } from '@ant-design/pro-form';
import useProTableRequest from '@MetaAdsManager/backend-pro/src/hooks/useProTableRequest';
import OperationsColumns from '@MetaAdsManager/backend-pro/src/components/table/operationsColumns';
import useProTableForm from '@MetaAdsManager/backend-pro/src/hooks/useProTableForm';
import useExport from '@MetaAdsManager/backend-pro/src/hooks/useExport';
import ProFormLimitInput from '@MetaAdsManager/backend-pro/src/components/form/proFormLimitInput';
import Clipboard from '@MetaAdsManager/backend-pro/src/components/clipboard';
import { api } from '@MetaAdsManager/backend-api';
import { SysUserVo, LoginOutputDto } from '@MetaAdsManager/backend-api/src/request/data-contracts';
import { getGlobalData } from '@MetaAdsManager/backend-store';
import { useFetch } from '~/@yd';
import dayjs from 'dayjs';

const Component: FC<any> = (props) => {
  const { post, get } = useFetch();
  const [columns] = useState<ProColumns<SysUserVo>[]>([
    { title: '客户名称', dataIndex: 'name' },
    { title: '创建时间', dataIndex: 'activityTime', hideInSearch: true },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => {
        return (
          <OperationsColumns
            operations={[
              {
                id: 'edit',
                text: '编辑客户',
                onClick: () => {
                  console.log('record', record);
                  // 这里忽略deptIds. 在ProFormTreeSelect中需要重新组装数据
                  // const { roleIds, ...rest } = record;
                  const company_name = record.name;
                  setEditData({ ...record });

                  setEditData(record);
                  modalProps.form.setFieldsValue({ ...record });
                  setVisible(true);
                }
              },
              {
                id: 'del',
                text: '删除客户',
                onClick: async () => {
                  const res = await post('/admin/delete_company', {
                    id: record.id
                  });
                  actionRef.current?.reload();
                }
              }
            ]}
          />
        );
      }
    }
  ]);
  const [account, setAccount] = useState<LoginOutputDto & { type?: 'change' }>({});


  const { request, actionRef } = useProTableRequest(
    (params) => get('/admin/company_list', params),
    {
      dataFormat: (data) =>
        data.map((item: any) => {
          return {
            ...item,
            activityTime: dayjs.unix(item.add_time).format('YYYY-MM-DD HH:mm:ss'),
            name: item.name,
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
      const saveData = { ...editData, ...rest };
      if (editData) {

        const res = await post('/admin/edit_company', {
          id: saveData.id,
          name: data.name

        });
        setVisible(false);
        message.success('保存成功');
      } else {
        const { data = {} } = await post('/admin/add_company', saveData);
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

  return (
    <PageContainer >
      <ProTable
        actionRef={actionRef}
        rowKey='id'
        columns={columns}
        request={request}
        search={{
          defaultCollapsed: false,
          labelWidth: 'auto',
          optionRender: (searchConfig, formProps, dom) => [
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
       
          <ProFormLimitInput
            label='客户名称'
            name='name'
            rules={[{ required: true }]}
            maxLength={12}
          />

      </ModalForm>
    </PageContainer>
  );
};

Component.displayName = 'MMCustomerManagementPage';

const MMCustomerManagementPage = memo(Component);
export default MMCustomerManagementPage;
