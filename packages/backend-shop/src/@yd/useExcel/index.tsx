/** @format */

import { Props } from './types';
import { downloadFile, selectFile, transformUrlParams } from '~/utils';
import { useFetch } from '../index';
import { message } from 'antd';
// import { read, utils } from 'xlsx/xlsx.mjs';
import { useRef } from 'react';
import { ActionType } from '@ant-design/pro-table';

export default ({
    columns,
    fileName,
    submitUrl,
    downloadUrl,
    formatParams = (params) => params
}: Props) => {
    const {
        defaultConfig: { baseURL, headers }
        // post
    } = useFetch();
    const tableRef = useRef<ActionType>();
    const onImport = async () => {
        const { 0: file } = await selectFile('single', '.xls');
        const body = new FormData();
        body.append('file', file);
        const { code, msg } = await fetch(`${baseURL}${submitUrl}`, {
            method: 'POST',
            body,
            headers: { Authorization: headers!.Authorization }
        }).then((response) => response.json());
        if (code) {
            return message.error(msg);
        }
        tableRef.current?.reload();
        message.success('导入成功');

        // const { Sheets, SheetNames } = read(await file.arrayBuffer());
        // const [header, ...data] = utils.sheet_to_json(Sheets[SheetNames[0]]);
        // const params = data.map((item) =>
        //     Object.entries(header).reduce((obj, [a, b]) => {
        //         const { dataIndex, valueType, valueEnum } =
        //             columns!.find(({ title }) => title === b) ?? {};
        //         if (dataIndex) {
        //             let value = item[a];
        //             if (valueType === 'select') {
        //                 const [v] = Object.entries(valueEnum!).find(([, v]) => v === value) ?? [];
        //                 value = v ?? value;
        //             }
        //             obj[dataIndex as string] = value;
        //         }
        //         return obj;
        //     }, {})
        // );
        // await post(submitUrl!, formatParams(params));
        // tableRef.current?.reload();
        // message.success('导入成功');
    };
    const onExport = async (params: Record<string, any> = {}) => {
        params = params.nativeEvent ? {} : params;
        await downloadFile(`${baseURL}${downloadUrl}${transformUrlParams(params)}`, fileName!, {
            headers
        });
        message.success('导出成功');
    };
    return {
        tableRef,
        onImport,
        onExport
    };
};
