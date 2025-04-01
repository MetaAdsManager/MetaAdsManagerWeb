/** @format */

import { Props as FormProps } from '../useForm/types';

export type Props = Omit<FormProps, 'back'>;
export interface Store {
    visible: boolean;
}
