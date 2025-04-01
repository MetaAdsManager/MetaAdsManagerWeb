/** @format */

import { log as l, transformUrlParams, isNone } from '~/utils';
import { Config, Response } from './types';
import adapter from './adapter';

export const defaultConfig: Config = {
    baseURL: '',
    headers: { 'Content-Type': 'application/json' },
    errCode: [401, 40001, 40003],
    onHeader: (headers) => headers,
    onError: ({ errMsg }) => alert(errMsg),
    onLayout: () => {
        localStorage.removeItem('Authorization');
        location.pathname !== '/login' && (location.href = '/login');
    },
    transformRequestUrl: ({ url, query = {} }) => `${url}${transformUrlParams(query)}`,
    transformRequestBody: ({ body }) => (body ? JSON.stringify(body) : body),
    adapter
};
export const log = (
    status: 'Success' | 'Fail',
    { errMsg, data, config: { url, method, logProps, query, body } }: Response
) => {
    l({
        title: `${status}【${method}】请求接口：${url}`,
        data: data?.data ?? data ?? errMsg,
        handler: () => {
            !isNone(query) && console.log('%cquery', 'color:#C73737;', query);
            !isNone(body) && console.log('%cbody', 'color:#C73737;', body);
        },
        ...logProps
    });
};
