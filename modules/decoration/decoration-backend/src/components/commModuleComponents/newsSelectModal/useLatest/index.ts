/** @format */

import { useCallback, useRef } from 'react';
import { Handler } from './types';

export default (handler: Handler) => {
    const fn = useRef<Handler>(handler);
    fn.current = handler;
    return useCallback((...args: any[]) => fn.current(...args), []);
};
