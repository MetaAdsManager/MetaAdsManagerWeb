/** @format */

import { Props as ModalProps } from '../useForm/types';
import { ProColumns } from '@ant-design/pro-table';

export interface Props extends Pick<ModalProps, 'submitUrl' | 'formatParams'> {
    downloadUrl?: string;
    columns?: ProColumns[];
    fileName?: string;
}
