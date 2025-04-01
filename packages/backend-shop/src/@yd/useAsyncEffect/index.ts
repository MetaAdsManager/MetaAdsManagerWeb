/** @format */

import { DependencyList, useEffect, useRef } from 'react';
import { Mount, Handler } from './types';

export const useAsyncEffect = <V>(
    mount?: Mount<V>,
    unMount?: Mount<V> | DependencyList,
    deps?: DependencyList
) => {
    const context = useRef<V>();
    if (Array.isArray(unMount)) {
        deps = unMount;
    }
    useEffect(() => {
        mount?.(context);
        return () => {
            typeof unMount === 'function' && unMount(context);
        };
    }, deps);
};
export const useMount = (mount: Handler) => useAsyncEffect(mount, []);
export const useUnmount = (unMount: Handler) => useAsyncEffect(undefined, unMount, []);
export const useUpdate = (mount: Handler, deps: DependencyList, skip: number = 1) => {
    const count = useRef(0);
    useAsyncEffect(() => {
        if (count.current < skip) {
            return count.current++;
        }
        mount();
    }, deps);
};
