/** @format */

import { ProColumns } from '@ant-design/pro-table';
import { RowSelectionType } from 'antd/lib/table/interface';
import { MutableRefObject } from 'react';

export interface Props {
    columns: ProColumns[];
    requestUrl?: string;
    removeUrl?: string;
    updateUrl?: string;
    formatParams?: (params: Record<string, any>) => Record<string, any>;
    formatData?: (data: Record<string, any>) => Record<string, any>;
    selection?: Selection;
    refs?: MutableRefObject<any> | MutableRefObject<any>[];
}
interface Selection {
    key?: string;
    type?: RowSelectionType;
    value?: (string | number)[];
}
export interface Store {
    ids: Selection['value'];
    data: Record<string, any>[];
    total: number;
    idsVal: any[];
}
