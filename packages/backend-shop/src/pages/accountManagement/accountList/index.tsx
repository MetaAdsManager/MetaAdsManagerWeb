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
import { country, zone } from '../openAccount/country_zone';
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
  const [countryData] = useState<any[]>(country);
  const [zoneData] = useState<any[]>(zone);
  const [columns] = useState<ProColumns[]>([
    {
      title: '账号类型',
      dataIndex: 'account_type',
      valueType: 'select',
      valueEnum: MTypeOptions,
      render: (_, { account_type }) => (account_type === 1 ? '国内' : '海外')


    },
    { title: '平台', dataIndex: 'platform', hideInSearch: true },
    { title: '国家/地区', dataIndex: 'country', hideInSearch: true },
    { title: '时区', dataIndex: 'time_zone', hideInSearch: true },
    {
      title: '审核状态',
      dataIndex: 'audit_status',
      valueType: 'select',
      valueEnum: MAuditOptions,
      render: (_, { audit_status }) => (audit_status === 0 ? '待审核' : audit_status === 1 ? '通过' : '驳回')
    },
    {
      title: '备注', dataIndex: 'mark', hideInSearch: true,
      render: (_, { mark }) => {
        try {
          return mark ? mark : '-'
        } catch (error) { }
        return '-'
      }
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
                  console.log('record', record);
                  // 这里忽略deptIds. 在ProFormTreeSelect中需要重新组装数据
                  // const { roleIds, ...rest } = record;
                  // setEditData({ ...record });

                  setEditData(record);
                  modalProps.form.setFieldsValue({ ...record });
                  setVisible(true);
                }
              },

              // {
              //   id: 'del',
              //   text: '删除',
              //   onClick: async () => {
              //     const res = await post('/admin/delete_company', {
              //       id: record.id
              //     });
              //     actionRef.current?.reload();
              //   }
              // }
              {
                id: 'audit',
                show: record.audit_status === 0,
                text: <a onClick={() => {
                  setcurrentTicketId(record.id);
                  setAuditVisible(true);
                }}>审核</a>
              }
            ]}
          />


        );
      }
    }
  ]);
  const [account, setAccount] = useState<LoginOutputDto & { type?: 'change' }>({});


  const { request, actionRef } = useProTableRequest(
    (params) => get('/admin/account_ticket_list', params),
    {
      dataFormat: (data) =>
        data.map((item: any) => {
          return {
            ...item,
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
      await post('/admin/edit_account_ticket', {
        ...rest,
        company_id:saveData.company_id,
        ticket_id: saveData.id
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

      <ModalForm {...modalProps} modalProps={{ closable: false, }} onFinish={handleFormFinish}>
        <ProFormItem label="申请平台" name='platform' rules={[{ required: true }]}>
          <Radio.Group >
            <Radio value={'facebook'}>Facebook</Radio>
          </Radio.Group>
        </ProFormItem>
        <ProFormItem label="账户类型" name='account_type' rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value={1}> 国内</Radio>
            <Radio value={2}>海外</Radio>
          </Radio.Group>
        </ProFormItem>
        <ProFormItem label="国家/地区" name='country' rules={[{ required: true, message: '请选择国家/地区' }]}>
          <Select>
            {countryData.map((item) => (
              <Option key={item} value={item}>{item}</Option>
            ))}
          </Select>
        </ProFormItem>
        <ProFormItem label="账号时区" name="time_zone" rules={[{ required: true, message: '请选择时区' }]}>
          <Select>
            {zoneData.map((item) => (
              <Option key={item} value={item}>{item}</Option>
            ))}

          </Select>
        </ProFormItem>
        <ProFormItem label="账户数量" name='account_num'>
          <InputNumber min={1} />
        </ProFormItem>
        <ProFormItem label="备注" name="mark">
          <Input.TextArea />
        </ProFormItem>
      </ModalForm>
      <ModalForm
        title='开户工单审核'
        layout="vertical"
        form={auditForm}
        visible={auditVisible}
        onVisibleChange={setAuditVisible}
        onFinish={onAuditFinish}
      >
        <ProFormItem label='审核操作' name="audit_status">
          <Radio.Group >
            <Radio value={1} >通过</Radio>
            <Radio value={2} >驳回</Radio>
          </Radio.Group>
        </ProFormItem>
        <ProFormItem label='审核理由' name="audit_mark">
          <Input.TextArea />
        </ProFormItem>
      </ModalForm>
    </PageContainer>
  );
};

Component.displayName = 'MMCustomerManagementPage';

const MMCustomerManagementPage = memo(Component);
export default MMCustomerManagementPage;
