/** @format */

import { MutableRefObject } from 'react';

export type Mount<V> = (context: MutableRefObject<V | undefined>) => void;
export type Handler = () => void;
