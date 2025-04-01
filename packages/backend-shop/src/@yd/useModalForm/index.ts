/** @format */

import { Props, Store } from './types';
import { useStore, useUpdate, useForm } from '../index';
import { useRef } from 'react';
import { ActionType } from '@ant-design/pro-table';

export default (props: Props) => {
    const {
        type,
        formRef,
        onFinish: finish,
        onSave,
        onAdd: add,
        onEdit: edit,
        onUpdate:update
    } = useForm({
        ...props,
        goBack: false
    });
    const tableRef = useRef<ActionType>();
    const { visible, dispatch } = useStore<Store>({ visible: false });
    const onVisibleChange = (visible: boolean) => dispatch({ visible });
    const onFinish = async (params: Record<string, any>) => {
        await finish(params);
        await tableRef.current?.reloadAndRest?.();
        onVisibleChange(false);
    };
    const onAdd = async (params?: Record<string, any>) => {
        onVisibleChange(true);
        await add(params);
    };
    const onEdit = async (params?: Record<string, any>) => {
        onVisibleChange(true);
        await edit(params);
    };
    const onUpdate = async (params?: Record<string, any>) => {
        onVisibleChange(true);
        await update(params);
    };
    useUpdate(() => !visible && formRef.current?.resetFields(), [visible]);
    return {
        visible,
        type,
        formRef,
        tableRef,
        onVisibleChange,
        onFinish,
        onSave,
        onAdd,
        onEdit,
        onUpdate
    };
};
