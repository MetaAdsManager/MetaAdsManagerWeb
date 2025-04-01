/** @format */

import { useTable, useUpdate } from '~/@yd';
import ProTable from '@ant-design/pro-table';

export default ({ value: { id }, onChange }) => {
    const { columns, data, ids, selectionOpts, onRequest } = useTable({
        columns: [
            {
                title: '酒店名称',
                dataIndex: 'name',
                align: 'center',
                fieldProps: { placeholder: '酒店名称' }
            },
            {
                title: '上架状态',
                dataIndex: 'shelved',
                align: 'center',
                hideInSearch: true,
                renderText: (value) => (!value ? '是' : '否')
            }
        ],
        requestUrl: '/admin/hotel',
        selection: {
            type: 'radio',
            value: id != undefined ? [id] : []
        }
    });
    useUpdate(() => onChange(!ids.length ? {} : data.find(({ id }) => id === ids[0])), [ids]);
    return (
        <ProTable
            {...selectionOpts}
            columns={columns}
            request={onRequest}
            search={{ defaultCollapsed: false, labelWidth: 'auto' }}
            pagination={{ showSizeChanger: true, showQuickJumper: true }}
        />
    );
};
