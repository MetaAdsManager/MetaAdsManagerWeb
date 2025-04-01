/** @format */

import { InputNumberProps } from 'antd/es/input-number';

export const intgerProps: InputNumberProps<string | number> = {
    precision: 0,
    min: 0,
    max: 999999
};
export const amountProps: InputNumberProps = {
    precision: 2,
    min: 0,
    max: 999999.99
};
