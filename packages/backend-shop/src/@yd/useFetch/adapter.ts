/** @format */

import { RequestConfig } from './types';

export default async (config: RequestConfig) => {
    const { method, headers, transformRequestUrl, transformRequestBody } = config;
    try {
        const res = await fetch(transformRequestUrl!(config), {
            method,
            headers,
            body: transformRequestBody!(config)
        });
        const data = await res.json().catch(() => ({ code: 0 }));
        const { status, headers: h } = res;
        data.code = data.code ?? status;
        data.msg = data.msg ?? data.error;
        return {
            ...res,
            data,
            headers: (h as any).map,
            errMsg: data.msg,
            config
        };
    } catch ({ message: errMsg }) {
        return Promise.reject({ errMsg, config });
    }
};
