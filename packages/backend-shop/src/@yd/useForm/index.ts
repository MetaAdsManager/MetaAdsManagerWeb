/** @format */

import { Props, Store, Type } from './types';
import { useRef } from 'react';
import { useStore, useFetch, useNavigation } from '../index';
import { ProFormInstance } from '@ant-design/pro-form';
import { sleep } from '~/utils';
import { message } from 'antd';

export default ({
    submitUrl,
    updateUrl,
    goBack = true,
    formatParams = (params) => params
}: Props) => {
    const { post, put } = useFetch();
    const { goBack: back } = useNavigation();
    const { type, dispatch } = useStore<Store>({ type: Type.Add });
    const formRef = useRef<ProFormInstance>();
    const onFinish = async (params: Record<string, any>) => {
        params = formatParams(params);
        if (type === Type.Add) {
            await post(submitUrl!, params);
        } else if (type === Type.Update) {
            await post(updateUrl!, params);
        } else {
            await put(updateUrl!, params);
        }
        message.success('保存成功');
        goBack && back();
    };
    const onSave = async () => onFinish(await formRef.current?.validateFields());
    const onAdd = async (params: Record<string, any> = {}) => {
        dispatch({ type: Type.Add });
        await sleep();
        formRef.current?.setFieldsValue(params);
    };
    const onEdit = async (params: Record<string, any> = {}) => {
        dispatch({ type: Type.Edit });
        await sleep();
        formRef.current?.setFieldsValue(params);
    };
    const onUpdate = async (params: Record<string, any> = {}) => {
        dispatch({ type: Type.Update });
        await sleep();
        formRef.current?.setFieldsValue(params);
    };
    return {
        type,
        formRef,
        onFinish,
        onSave,
        onAdd,
        onEdit,
        onUpdate
    };
};
