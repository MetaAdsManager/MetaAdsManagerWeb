/** @format */

import { setGlobalData } from '@MetaAdsManager/backend-store';
import { defineShopConfig } from '@MetaAdsManager/shop-data';
import { createFetch } from '~/@yd';
import { message } from 'antd';

export const isDev = REACT_APP_ENV === 'dev'; // 开发环境
export const isUat = REACT_APP_ENV === 'uat'; // 测试环境
export const isStg = REACT_APP_ENV === 'stg'; // 预发布环境
export const isPrd = !isDev && !isUat && !isStg; // 生产环境

// TODO shop：接口域名修改
const baseUrl = '';
// const baseUrl = 'https://shenbin-rushixin.f.wmeimob.com';
// const baseUrl = 'https://dugaoqiang-rushixin.f.wmeimob.com';

// TODO shop：h5页面根路径
export const rootUrl = 'http://test.web.shop.wmeimob.cn';

export let apiUrl = {
    dev: baseUrl,
    uat: 'https://api.vip8lucky.com',
    prd: 'https://prd-admin.vip8lucky.com'
}[REACT_APP_ENV || 'prd'];

console.log('apiUrl', apiUrl, REACT_APP_ENV);

export const publicPath = PUBLIC_PATH;

export const applicationName = 'MetaAdsManager';

export const defaultAccount = '15757101467'; // 默认账号
export const defaultPwd = 'Abc1234'; // 默认密码

export const loginPath = '/login/';

/**
 * 系统配置项
 * 你可以根据项目实际情况进行合并覆盖配置
 */
export const systemConfig = defineShopConfig({});

setGlobalData({
    isDev,
    isUat,
    isStg,
    isPrd,
    baseUrl,
    apiUrl,
    publicPath,
    applicationName,
    defaultAccount,
    defaultPwd,
    loginPath,
    systemConfig
});

createFetch({
    baseURL: apiUrl,
    logProps: { disable: isPrd },
    async onHeader(header) {
        const Authorization = localStorage.getItem('Authorization');
        Authorization && Object.assign(header, { Authorization,token: Authorization });
        return header;
    },
    async onLayout() {
        localStorage.removeItem('Authorization');
        console.log('onLayout',location);
        location.pathname !== '/login' && (location.replace('/login'));
        // if (location.hash !== `#${loginPath}`) {
        //     location.hash = `#${loginPath}`;
        // }
    },
    onError: ({ errMsg }) => message.error(errMsg)
});
