/** @format */

import { Log } from '../../utils/types';

export interface Config {
    baseURL: string;
    headers?: Record<string, string>;
    errCode?: number[];
    logProps?: Partial<Log>;
    adapter?: <D>(config: RequestConfig) => Promise<Response<D>>;
    onHeader?: (
        headers: Record<string, string>
    ) => Promise<Record<string, string>> | Record<string, string>;
    onLayout?: (response: Response) => void;
    onError?: (response: Response) => void;
    transformRequestUrl?: (response: RequestConfig) => string;
    transformRequestBody?: (response: RequestConfig) => any;
}
export interface Response<D = any> {
    data: Data<D>;
    status: number;
    statusText: string;
    errMsg: string;
    headers?: Record<string, string>;
    config: RequestConfig;
}
interface Data<D> {
    code: number;
    data?: D;
    msg: string;
}
export interface RequestConfig extends Config {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    query?: Record<string, any>;
    body?: Record<string, any>;
}
export type RequestInterceptor = (request: RequestConfig) => Promise<RequestConfig>;
export type ResponseInterceptor = (response: Response) => Promise<Response>;
export type RequestMethodFn = <D = any>(
    url: string,
    params?: Record<string, any>,
    config?: Partial<RequestConfig>
) => Promise<D>;
export type Fetch = <D>(fetchConfig: FetchConfig) => Promise<D>;
interface FetchConfig extends Omit<RequestConfig, 'baseURL' | 'method'> {
    baseURL?: string;
    method: 'get' | 'post' | 'put' | 'delete';
}
export type MethodKeys = 'get' | 'post' | 'put' | 'del';
export type Methods = Record<
    MethodKeys,
    <D = any>(
        url: string,
        params?: Record<string, any>,
        config?: Partial<RequestConfig> & { defaultValue?: D }
    ) => Promise<D>
>;
