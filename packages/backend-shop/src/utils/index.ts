/** @format */

import { Modal, ModalFuncProps } from 'antd';
import { Handler, Log } from './types';
import { ReactNode } from 'react';

export const confirm = (content: ReactNode, title: string, options?: ModalFuncProps) =>
    new Promise<void>((resolve) =>
        Modal.confirm({
            ...options,
            title,
            content,
            onOk: () => resolve()
        })
    );
export const filterNone = (target: any, filter: any[] = ['/', '-']) => {
    if (typeof target !== 'object' || target === null) {
        return filter.includes(target) ? null : target;
    }
    return Object.entries(target).reduce(
        (obj, [key, value]) => {
            const res = filterNone(value);
            if (!isNone(res)) {
                if (Array.isArray(obj)) {
                    obj.push(res);
                } else {
                    obj[key] = res;
                }
            }
            return obj;
        },
        Array.isArray(target) ? [] : {}
    );
};
export const isNone = (target: any) =>
    target == undefined ||
    target === '' ||
    target === '[]' ||
    target === '{}' ||
    typeof target === 'function' ||
    (typeof target === 'object' && !Object.keys(target).length);
export const transformUrlParams = (params: Record<string, any>) =>
    Object.entries(filterNone(params))
        .reduce(
            (str, [key, value]) =>
                str + `${key}=${typeof value === 'object' ? JSON.stringify(value) : value}&`,
            '?'
        )
        .slice(0, -1);
export const log = async ({ title, data, color = '#C73737', disable = false, handler }: Log) => {
    if (disable) {
        return;
    }
    console.group(title);
    await handler?.();
    console.log(...(typeof data === 'object' ? [data] : [`%c${data}`, `color:${color};`]));
    console.groupEnd();
};
export const throttle = <V>(handler: Handler<V>, time: number = 1500) => {
    let pTime = 0;
    return (...args: any[]) =>
        new Promise<V>((resolve) => {
            const cTime = Date.now();
            if (cTime - pTime < time) {
                return;
            }
            pTime = cTime;
            resolve(handler(...args));
        });
};
export const sleep = (delay: number = 0) => new Promise((resolve) => setTimeout(resolve, delay));
export const cutVideoImage = (url: string) =>
    `${url}?x-oss-process=video/snapshot,t_7000,f_jpg,w_400`;
export const downloadFile = async (url: string, fileName: string, config?: RequestInit) => {
    const blob = await fetch(url, config).then((res) => res.blob());
    const href = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = href;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(href);
};
export const selectFile = (type: 'single' | 'multiple' = 'single', accept: string = '*') =>
    new Promise<FileList>((resolve) => {
        const input = document.createElement('input');
        input.accept = accept;
        input.type = 'file';
        input.multiple = type === 'multiple';
        input.click();
        input.onchange = ({ target }: any) => resolve(target.files);
    });
export const debounce = <V>(handler: Handler<V>, delay: number = 250) => {
    let timer: NodeJS.Timeout;
    return (...args: any[]) =>
        new Promise<V>((resolve) => {
            timer && clearTimeout(timer);
            timer = setTimeout(() => resolve(handler(...args)), delay);
        });
};
export const toFixed = (target: string | number, digits: number = 2) => {
    target = Number(target);
    target = isNaN(target) ? 0 : target;
    return target.toFixed(digits < 0 ? 0 : digits > 10 ? 10 : digits);
};
