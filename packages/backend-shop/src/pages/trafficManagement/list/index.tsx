/** @format */

import { FC, memo, useEffect, useState,useRef } from 'react';
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
import { ProFormItem,ProFormInstance } from '@ant-design/pro-form';
import dayjs from 'dayjs';
// import { country, zone } from '../openAccount/country_zone';
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
  const [UserList, setUserList] = useState([]);
  const formRef = useRef<ProFormInstance>();
  const handleGetcompany = async() => {
    const res = await get('/admin/company_list',{
         page:1,
         page_size:100000
    })
    formRef.current?.setFieldsValue({   //这个formRef作用在ProTable标签上，如下图
      company_id: res.data[0].id
    });
    actionRef.current?.reload();
    // setUserList(res.data.map((item:any) => ({
    //     label: item.name,
    //     value: item.id
    // })));
    return res.data.map((item:any) => ({
        label: item.name,
        value: item.id
    }))
  };
  // useEffect(() => {
  //   handleGetcompany();
  // }, []);
  const [columns] = useState<ProColumns[]>([
    {
        title: '客户Id',
        dataIndex: 'company_id',
        key: 'company_id',
        valueType: 'select',
        // debounceTime: 500,
        // fieldProps: {
        //     showSearch: true,
        //     options: UserList
        // },
        fieldProps: {

          allowClear: false // 不允许清除，强制有值
          
        },
        hideInTable: true,
        request: handleGetcompany,
        render: (_, record, index) => {
            return (
                <>
                    <span>{record.company_id || '-'}</span>
                </>
            );
        }
    },
    { title: '账户ID', dataIndex: 'account_id', hideInSearch: false },
    { title: '账户名称', dataIndex: 'account_name', hideInSearch: false },
    { title: '有效状态', dataIndex: 'time_zone', hideInSearch: true },
    { title: 'BMID', dataIndex: 'bm_id', hideInSearch: false },
    { title: 'BM名称', dataIndex: 'bm_name', hideInSearch: false },
    { title: '开户工单ID', dataIndex: 'ticket_id', hideInSearch: false },
    {
      title: '创建时间',
      dataIndex: 'add_time',
      key: 'add_time',
      valueType: 'dateRange',
      search: {
          transform: (values) => {
              return {
                  created_start: values[0],
                  created_end: values[1]
              };
          }
      },
      render: (_, record) => {
          return record.add_time?dayjs.unix(record.add_time).format('YYYY-MM-DD HH:mm:ss'):''
      }
    },
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
    (params) => get('/admin/company_account_list', {
      ...params
    }),
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
        formRef={formRef}
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
