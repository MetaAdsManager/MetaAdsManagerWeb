/** @format */

import { useReducer, useRef, Reducer } from 'react';
import { Action, Handler } from './types';
import { useUpdate } from '../index';

export default <S extends Record<string, any>, K extends keyof S = keyof S>(
    initStore: S | (() => S)
) => {
    const iStore = typeof initStore === 'function' ? initStore() : initStore;
    const [store, setStore] = useReducer<Reducer<S, Action<S>>>((store, action) => {
        if (typeof action === 'object' || typeof action === 'function') {
            const nState = { ...store };
            const nAction = typeof action === 'function' ? action(store) : action;
            Object.entries(nAction).forEach(
                ([key, value]) => Reflect.has(nState, key) && Reflect.set(nState, key, value)
            );
            return nState;
        }
        return store;
    }, iStore);
    const nextTick = useRef<Handler<S>>();
    const dispatch = (value: Action<S>, handler?: Handler<S>) => {
        setStore(value);
        nextTick.current = handler;
    };
    const reset = (keys: K | K[] | '*', handler?: Handler<S>) => {
        keys =
            keys === '*' ? (Object.keys(iStore) as K[]) : typeof keys === 'string' ? [keys] : keys;
        const nState = (keys as K[]).reduce((obj, key) => {
            obj[key] = iStore[key];
            return obj;
        }, {} as Partial<S>);
        dispatch(nState, handler);
    };
    useUpdate(() => {
        nextTick.current?.(store);
        nextTick.current = undefined;
    }, [store]);
    return {
        ...store,
        dispatch,
        reset
    };
};
