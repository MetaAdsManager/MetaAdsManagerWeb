/** @format */

import { useMemo, useState } from 'react';

const map = new WeakMap();

export default <S extends Record<string, any>, K extends keyof S = keyof S>(
    initStore: S | (() => S)
) => {
    const iStore = typeof initStore === 'function' ? initStore() : initStore;
    const [, update] = useState({});
    const observer = (target: any) => {
        if (map.has(target)) {
            return map.get(target);
        }
        const proxy = new Proxy(target, {
            get(target: any, p: string | symbol, receiver: any) {
                const res = Reflect.get(target, p, receiver);
                return isObject(res) ? observer(res) : res;
            },
            set(target: any, p: string | symbol, newValue: any, receiver: any) {
                newValue = isObject(newValue) ? observer(newValue) : newValue;
                Reflect.set(target, p, newValue, receiver);
                forceUpdate();
                return true;
            },
            deleteProperty(target: any, p: string | symbol) {
                Reflect.deleteProperty(target, p);
                forceUpdate();
                return true;
            }
        });
        map.set(target, proxy);
        return proxy;
    };
    const forceUpdate = () => update({});
    const reset = (keys: K | K[] | '*') => {
        keys =
            keys === '*' ? (Object.keys(iStore) as K[]) : typeof keys === 'string' ? [keys] : keys;
        (keys as K[]).forEach((key) => (store[key] = iStore[key]));
    };
    const isObject = (target: any) => target && typeof target === 'object';
    const store = useMemo<S>(() => observer(iStore), []);
    return {
        store,
        forceUpdate,
        reset
    };
};
