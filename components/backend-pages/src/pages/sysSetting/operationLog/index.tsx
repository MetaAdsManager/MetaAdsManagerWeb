/** @format */

import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { api } from '@MetaAdsManager/backend-api';
import useProTableRequest from '@MetaAdsManager/backend-pro/src/hooks/useProTableRequest';
import { getGlobalData } from '@MetaAdsManager/backend-store';
import { Button } from 'antd';
import { MMProColumns } from 'MMProType';
import { FC, memo, useState } from 'react';
import requestInstance from '@MetaAdsManager/backend-api/src/request/instance';

interface IOperationLogProps {}

const Component: FC<IOperationLogProps> = (props) => {
    // const {} = props

    const { columns, request, actionRef } = useService();

    return (
        <PageContainer>
            <ProTable
                actionRef={actionRef}
                rowKey='id'
                columns={columns}
                request={request}
                search={{
                    defaultCollapsed: false,
                    labelWidth: 'auto'
                }}
            />
        </PageContainer>
    );
};

const OperationLog = memo(Component);
export default OperationLog;

function useService() {
    const [columns] = useState<MMProColumns[]>([
        // 搜索
        {
            title: '时间',
            dataIndex: 'beginTime',
            valueType: 'dateRange',
            hideInTable: true,
            search: {
                transform: ([beginTime, endTime]) => ({
                    beginTime: `${beginTime} 00:00:00`,
                    endTime: `${endTime} 23:59:59`
                })
            }
        },
        {
            title: '模块',
            dataIndex: 'module',
            valueType: 'select',
            fieldProps: { placeholder: '请选择模块' },
            request: async () => {
                const { data } = await requestInstance({
                    url: '/admin/operate/logs/module',
                    method: 'GET'
                });
                return (data || []).map((item) => ({ label: item, value: item }));
            },
            hideInTable: true
        },
        {
            title: '关键词',
            dataIndex: 'searchString',
            fieldProps: { placeholder: '输入操作账户，操作内容' },
            hideInTable: true
        },
        // 列表
        {
            title: '操作账号',
            dataIndex: 'operatorName',
            hideInSearch: true
        },
        {
            title: '角色',
            dataIndex: 'roleNames',
            hideInSearch: true
        },
        {
            title: '模块',
            dataIndex: 'module',
            hideInSearch: true
        },
        // {
        //     title: '页面',
        //     dataIndex: '不要了',
        //     hideInSearch: true
        // },
        {
            title: '操作内容',
            dataIndex: 'operateDesc',
            hideInSearch: true
        },
        {
            title: '操作时间',
            dataIndex: 'gmtCreated',
            hideInSearch: true
        }
    ]);

    const { request, actionRef } = useProTableRequest(api['/admin/operate/logs_GET']);

    return {
        columns,
        request,
        actionRef
    };
}
