/** @format */

import { filterNone } from '~/utils';
import { RequestConfig, Response } from './types';
import { log } from './utils';

export class Interceptor<I extends Function> {
    private interceptors = new Set<I>();
    public use = (interceptor: I) => this.interceptors.add(interceptor);
    public async notify<P>(params: P) {
        for (const interceptor of [...this.interceptors]) {
            params = await interceptor(params);
        }
        return params;
    }
}
export const requestInterceptor = async ({
    method,
    query,
    headers,
    onHeader,
    baseURL,
    url,
    ...config
}: RequestConfig) => {
    baseURL = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL;
    url = url.startsWith('/') ? url.slice(1) : url;
    return {
        method,
        onHeader,
        ...config,
        baseURL,
        url: `${baseURL}/${url}`,
        headers: await onHeader!(headers!),
        query: filterNone(query)
    };
};
export const responseInterceptor = async (response: Response) => {
    const {
        data: { code },
        status,
        config: { errCode, onLayout }
    } = response;
    if (status! >= 400 || code !== 200) {
        (status === 401 || errCode!.includes(code)) && onLayout!(response);
        return Promise.reject(response);
    }
    log('Success', response);
    return response;
};
