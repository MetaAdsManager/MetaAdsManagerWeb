/** @format */

import { Config, Fetch, MethodKeys, Methods } from './types';
import { Request } from './request';
import { defaultConfig } from './utils';
import { requestInterceptor, responseInterceptor } from './interceptors';

let fetch: Fetch;

export const createFetch = (config: Config) => {
    const instance = new Request(config);
    instance.interceptors.request.use(requestInterceptor);
    instance.interceptors.response.use(responseInterceptor);
    fetch = <D>(fetchConfig) => {
        const { method, url } = fetchConfig;
        return instance[method === 'delete' ? 'del' : (method as MethodKeys)]<D>(url, {
            ...config,
            ...fetchConfig
        });
    };
    return Object.assign(fetch, instance);
};
export const useFetch = () => {
    const methods = (['get', 'post', 'put', 'del'] as MethodKeys[]).reduce((hooks, method) => {
        hooks[method] = async <D>(url, params, config) => {
            const res = await (fetch as Fetch & Request)[method]<D>(url, params, config);
            const { defaultValue } = config ?? {};
            return typeof defaultValue != undefined && typeof defaultValue === 'object'
                ? Object.assign(defaultValue!, res)
                : res;
        };
        return hooks;
    }, {} as Methods);
    return {
        ...methods,
        instance: fetch as Fetch & Request,
        defaultConfig
    };
};
