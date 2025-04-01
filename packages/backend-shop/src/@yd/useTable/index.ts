/** @format */

import { ActionType } from '@ant-design/pro-table';
import { Props, Store } from './types';
import { useMemo, useRef, useState } from 'react';
import { useStore, useFetch, useUpdate } from '../index';
import { message } from 'antd';
import { confirm } from '~/utils';
import { RowSelectionType } from 'antd/lib/table/interface';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
    columns,
    requestUrl,
    removeUrl,
    updateUrl,
    formatParams = (params) => params,
    formatData = (data) => data,
    selection,
    refs
}: Props) => {
    const { get, del, put } = useFetch();
    const [param, setParam] = useState<any>({})
    const { type, key, value } = {
        type: 'checkbox' as RowSelectionType,
        key: 'id',
        value: [],
        ...selection
    };
    const { ids, data, total, idsVal, dispatch } = useStore<Store>({
        ids: value,
        data: [],
        total: 0,
        idsVal: []
    });
    const amountTotal = useMemo(() => {
        const val = idsVal.length > 1 ? idsVal.reduce((pre, cur) => {
            const last = pre.withdrawAmount || pre
            return Number((last + cur.withdrawAmount).toFixed(2))
        }) : idsVal[0]?.withdrawAmount
        return val
    },[idsVal]);
    const actionRef = useRef<ActionType>();
    const formRef = useRef();
    const selectionOpts = useMemo(
        () => ({
            rowKey: key,
            rowSelection: {
                type,
                selectedRowKeys: ids,
                onChange: (ids,val) => dispatch({ ids, idsVal: val })
            }
        }),
        [key, type, ids]
    );
    const onRequest = async (params: Record<string, any>) => {
        const { current: pageNum, ...props } = formatParams(params);
        const paramData = { ...props, pageNum}
        let { list: data, total } = await get(requestUrl!, paramData)
            .then((list) => (Array.isArray(list) ? { list, total: list.length } : list))
            .catch(() => ({
                list: [],
                total: 0
            }));
        setParam(paramData)
        data = formatData(data);
        dispatch({ data, total });
        return {
            data,
            success: true,
            total
        };
    };
    const onRemove = async (params: Record<string, any>, content: string = '') => {
        content && (await confirm(content, '提示'));
        await del(removeUrl!, params);
        await actionRef.current?.reloadAndRest?.();
        message.success('删除成功');
    };
    const onUpdate = async (params: Record<string, any>, content: string = '') => {
        content && (await confirm(content, '提示'));
        await put(updateUrl!, params);
        await actionRef.current?.reloadAndRest?.();
        message.success('更新成功');
    };
    useUpdate(() => {
        if (!refs) {
            return;
        }
        refs = Array.isArray(refs) ? refs : [refs];
        refs.forEach((ref) => (ref.current = actionRef.current));
    }, [actionRef.current]);
    return {
        actionRef,
        formRef,
        param,
        columns,
        ids,
        data,
        total,
        selectionOpts,
        amountTotal,
        onRequest,
        onRemove,
        onUpdate
    };
};
