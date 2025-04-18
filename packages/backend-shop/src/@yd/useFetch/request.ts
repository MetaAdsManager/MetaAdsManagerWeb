/** @format */

import {
    RequestConfig,
    Config,
    RequestInterceptor,
    ResponseInterceptor,
    Response,
    RequestMethodFn
} from './types';
import { Interceptor } from './interceptors';
import { defaultConfig, log } from './utils';
import { isNone } from '~/utils';

export class Request {
    private config = defaultConfig;
    private label = '耗时';
    public interceptors = {
        request: new Interceptor<RequestInterceptor>(),
        response: new Interceptor<ResponseInterceptor>()
    };
    public get: RequestMethodFn = <D>(url, params, config) =>
        this.onRequest<D>('GET', url, params, config);
    public post: RequestMethodFn = <D>(url, params, config) =>
        this.onRequest<D>('POST', url, params, config);
    public put: RequestMethodFn = <D>(url, params, config) =>
        this.onRequest<D>('PUT', url, params, config);
    public del: RequestMethodFn = <D>(url, params, config) =>
        this.onRequest<D>('DELETE', url, params, config);
    constructor(config?: Config) {
        Object.assign(this.config, config);
    }
    private async onRequest<D>(
        method: RequestConfig['method'],
        url: string,
        params?: Record<string, any>,
        config?: Partial<RequestConfig>
    ): Promise<D> {
        const {
            config: c,
            label,
            interceptors: { request, response },
            replaceUrlParams,
            mergeParams
        } = this;
        config = { method, url, ...c, ...config };
        const { url: u, logProps: { disable } = {} } = config;
        !disable && console.time(label);
        config.url = replaceUrlParams(u!, params);
        mergeParams(method, params, config);
        config = await request.notify<RequestConfig>(config as RequestConfig);
        try {
            const res = await config.adapter!<D>(config as RequestConfig);
            const {
                data
            } = await response.notify<Response<D>>(res);
            !disable && console.timeEnd(label);
            return data!;
        } catch (response) {
            response.config.onError(response);
            log('Fail', response);
            !disable && console.timeEnd(label);
            return Promise.reject();
        }
    }
    private replaceUrlParams = (url: string, params: Record<string, any> = {}) =>
        url.replace(/\{(\w+)\}/g, (_, key) => {
            const value = params[key];
            if (isNone(value)) {
                return key;
            }
            delete params[key];
            return value;
        });
    private mergeParams(
        method: RequestConfig['method'],
        params: Record<string, any> | undefined,
        config: Partial<RequestConfig>
    ) {
        const { query, body } = config;
        if (method === 'GET' || method === 'DELETE') {
            config.query = query ? Object.assign(query, params) : params;
        } else {
            config.body = body ? Object.assign(body, params) : params;
        }
    }
}
