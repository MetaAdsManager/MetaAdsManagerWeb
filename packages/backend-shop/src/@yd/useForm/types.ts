/** @format */

import { Props as TableProps } from '../useTable/types';

export interface Props extends Pick<TableProps, 'updateUrl' | 'formatParams'> {
    submitUrl?: string;
    goBack?: boolean;
}
export interface Store {
    type: Type;
}
export enum Type {
    Add,
    Edit,
    Update
}
