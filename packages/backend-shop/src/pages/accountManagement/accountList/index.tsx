/** @format */

import { FC, memo, useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { message, Radio, Select, InputNumber, Input, Table,Button } from 'antd';
import { ModalForm } from '@ant-design/pro-form';
import useProTableRequest from '@MetaAdsManager/backend-pro/src/hooks/useProTableRequest';
import OperationsColumns from '@MetaAdsManager/backend-pro/src/components/table/operationsColumns';
import useProTableForm from '@MetaAdsManager/backend-pro/src/hooks/useProTableForm';
import { LoginOutputDto } from '@MetaAdsManager/backend-api/src/request/data-contracts';
import { useFetch } from '~/@yd';
import { useForm } from 'antd/lib/form/Form';
import { ProFormItem } from '@ant-design/pro-form';
import { country, zone } from '../openAccount/country_zone';
import { set } from 'lodash';
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
  const [currentCompanyId, setcurrentCompanyId] = useState();
  const [accoutListshow, setaccoutListshow] = useState(true);
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
    { title: '账户数量', dataIndex: 'account_num', hideInSearch: true },
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
                  setcurrentCompanyId(record.company_id);
                  let newData = []
                  for (let i = 1; i <= record.account_num; i++) {
                    newData.push(
                      {
                        key: String(i+1),
                        account_id: '',
                        account_name: '',
                        bm_id: '',
                        bm_name: '',
                        action: '删除'
                    })
                  }
                  setData(newData);
                  setaccoutListshow(true);
                  setAuditVisible(true);
                }}
                >审核</a>
              }
            ]}
          />


        );
      }
    }
  ]);
  const [account, setAccount] = useState<LoginOutputDto & { type?: 'change' }>({});
  const handleChange = (value, key,index) => {
    const newData = [...data];
    // console.log(value,'index', index,key);
    newData[index][key] = value;
    setData(newData);
  }
   

  const columnsAccount = [
      {
          title: '账户ID',
          dataIndex: 'account_id',
          key: 'account_id',
          width: '20%',
          render: (text,record,index) => (
            <Input value={record['account_id']} onChange={e => handleChange(e.target.value, 'account_id',index)}/>
          )
      },
      {
          title: '账户名称',
          dataIndex: 'account_name',
          key: 'account_name',
          width: '20%',
          render: (text,record,index) => (
            <Input value={record['account_name']} onChange={e => handleChange(e.target.value, 'account_name',index)}/>
          )
      },
      {
        title: 'BMID',
        dataIndex: 'bm_id',
        key: 'bm_id',
        width: '20%',
        render: (text,record,index) => (
          <Input value={record['bm_id']} onChange={e => handleChange(e.target.value, 'bm_id',index)}/>
        )
      },
      {
          title: 'BM名称',
          dataIndex: 'bm_name',
          key: 'bm_name',
          width: '20%',
          render: (text,record,index) => (
            <Input value={record['bm_name']} onChange={e => handleChange(e.target.value, 'bm_name',index)}/>
          )
      },
      {
          title: '',
          dataIndex: 'action',
          key: 'action',
          width: '20%',
          render: (text, record) => (
              <Button style={{ display: data.length <= 1 ? 'none' : 'inline-block' }} onClick={() => handleDelete(record.key)}>
                  {text}
              </Button>
          )
      }
  ];

  const [data, setData] = useState([]);
  const createNewItem = () => {
      const newItem = {
          key: String(data.length + 1),
          account_id: '',
          account_name: '',
          bm_id: '',
          bm_name: '',
          action: '删除'
      };
      setData([...data, newItem]);
  }
  const handleDelete = (key) => {
      setData(data.filter(item => item.key !== key));
  };


  const { request, actionRef } = useProTableRequest(
    (params) => get('/admin/account_ticket_list', params),
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
    const allNonEmpty = data.every(obj => Object.values(obj).every(value => value !== null && value !== undefined && value !== ''));
    if (!allNonEmpty && val.audit_status === 1) {
      message.error('请填写所有账户信息');
      return;
    }
    try {
      await post('/admin/audit_account_ticket', { ...val, ticket_id: currentTicketId })
      if(val.audit_status === 1) {
        const newData = data.map((item) => ({
          account_id: item.account_id,
          account_name: item.account_name,
          bm_id: item.bm_id,
          bm_name: item.bm_name,
          ticket_id:currentTicketId,
          company_id:currentCompanyId
        }))
        await post('/admin/add_company_accounts', newData)
      }
      auditForm.resetFields()
      setAuditVisible(false)
      message.success('审核完成');
      actionRef.current?.reload();
    } catch (error) {
      auditForm.resetFields()
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
        modalProps={{ destroyOnClose: true }}
        onFinish={onAuditFinish}
      >
        <ProFormItem label='审核操作' name="audit_status" rules={[{ required: true }]}>
          <Radio.Group onChange={(e) => {
            if (e.target.value === 1) {
              setaccoutListshow(false);
            } else {
              setaccoutListshow(true);
            }
          }}
          >
            <Radio value={1} >通过</Radio>
            <Radio value={2} >驳回</Radio>
          </Radio.Group>
        </ProFormItem>
        <ProFormItem label='账户列表' hidden={accoutListshow} >
            <Table
                columns={columnsAccount}
                dataSource={data}
                pagination={false}
                bordered={true}
                size="small"
                style={{
                    width: '100%'

                }}
            />
          <div onClick={() => createNewItem()} style={{cursor:'pointer'}}>
              <span role="img" aria-label="plus" style={{ marginRight: '4px', color: '#709dd7' }}><svg viewBox="64 64 896 896" focusable="false" data-icon="plus" width="13px" height="13px" fill="currentColor" aria-hidden="true"><defs><style /></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" /><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" /></svg></span>
              <span>新增</span>
          </div>
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
