/** @format */

import { FC, memo, useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { message, Radio, Select, InputNumber, Input } from 'antd';
import { ModalForm } from '@ant-design/pro-form';
import useProTableRequest from '@MetaAdsManager/backend-pro/src/hooks/useProTableRequest';
import OperationsColumns from '@MetaAdsManager/backend-pro/src/components/table/operationsColumns';
import useProTableForm from '@MetaAdsManager/backend-pro/src/hooks/useProTableForm';
import { LoginOutputDto } from '@MetaAdsManager/backend-api/src/request/data-contracts';
import { useFetch } from '~/@yd';
import { useForm } from 'antd/lib/form/Form';
import { ProFormItem } from '@ant-design/pro-form';
// import { country, zone } from '../openAccount/country_zone';
const { Option } = Select;
/** @format */

export enum ETypeOptions {
  /** 国内 */
  China = 1,
  /** 海外 */
  Abroad = 2,
}

export const MTypeOptions = {
  [ETypeOptions.China]: '国内',
  [ETypeOptions.Abroad]: '海外'
};
export enum EAuditOptions {
  /** 待审核 */
  Audit,
  /** 通过 */
  Approval,
  /** 驳回 */
  Reject
}

export const MAuditOptions = {
  [EAuditOptions.Audit]: '待审核',
  [EAuditOptions.Approval]: '通过',
  [EAuditOptions.Reject]: '驳回'
};
const Component: FC<any> = (props) => {
  const { post, get } = useFetch();
  const [auditForm] = useForm()
  const [auditVisible, setAuditVisible] = useState(false);
  const [currentTicketId, setcurrentTicketId] = useState();
  const [columns] = useState<ProColumns[]>([
    { title: '账户ID', dataIndex: 'account_id', hideInSearch: false },
    { title: '账户名称', dataIndex: 'account_name', hideInSearch: false },
    { title: '有效状态', dataIndex: 'time_zone', hideInSearch: true },
    { title: 'BMID', dataIndex: 'bm_id', hideInSearch: false },
    { title: 'BM名称', dataIndex: 'bm_name', hideInSearch: true },
    { title: '开户工单ID', dataIndex: 'ticket_id', hideInSearch: false },
    {
      title: '审核反馈',
      dataIndex: 'audit_status',
      valueType: 'select',
      hideInSearch: true,
      valueEnum: MAuditOptions,
      render: (_, { audit_status }) => (audit_status === 0 ? '' : audit_status === 1 ? '' : '')
    },
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
                text: '编辑',
                onClick: () => {
                  setEditData(record);
                  modalProps.form.setFieldsValue({ ...record });
                  setVisible(true);
                }
              },

              {
                id: 'del',
                text: '删除',
                onClick: async () => {
                  const res = await post('/admin/delete_company_account', {
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
    (params) => get('/admin/company_account_list', params),
    {
      dataFormat: (data) =>
        data.map((item: any) => {
          return {
            ...item
          };
        })
    }
  );

  const { modalProps, editData, setEditData, setVisible } = useProTableForm();
  const handleFormFinish = async (data) => {
    try {
      let { ...rest } = data;
      const saveData = { ...editData, ...rest };
      await post('/admin/edit_company_account', {
        ...rest,
        company_id:saveData.company_id,
        ticket_id: saveData.ticket_id,
        id: saveData.id
      });
      setVisible(false);
      message.success('修改成功');
      actionRef.current?.reload();
    } catch (error) {
      message.error('修改失败');
    }
  };

  useEffect(() => {
    if (!modalProps.visible) {
      setAccount({});
    }
  }, [modalProps.visible]);
  const onAuditFinish = async (val) => {
    try {
      await post('/admin/audit_account_ticket', { ...val, ticket_id: currentTicketId })
      auditForm.resetFields()
      setAuditVisible(false)
      message.success('审核完成');
      actionRef.current?.reload();
    } catch (error) {
      message.error('审核失败');
    }

  }
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
            ...dom
          ]
        }}
      />
      <ModalForm {...modalProps} modalProps={{ closable: false }} onFinish={handleFormFinish}>
        <ProFormItem label="账户ID" name='account_id' rules={[{ required: true }]}>
          <Input />
        </ProFormItem>
        <ProFormItem label="账户名称" name='account_name' rules={[{ required: true }]}>
          <Input />
        </ProFormItem>
        <ProFormItem label="BMID" name='bm_id' rules={[{ required: true }]}>
          <Input />
        </ProFormItem>
        <ProFormItem label="BM名称" name="bm_name" rules={[{ required: true }]}>
          <Input />
        </ProFormItem>
      </ModalForm>
    </PageContainer>
  );
};

Component.displayName = 'MMTrafficManagementPage';

const MMTrafficManagementPage = memo(Component);
export default MMTrafficManagementPage;
