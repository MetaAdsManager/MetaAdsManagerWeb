/** @format */

import { getInitialState } from './app';
import { systemConfig } from '~/config';
const { config } = systemConfig;

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */

type ThenArg<T> = T extends Promise<infer U> ? U : T;
type TInitialState = ThenArg<ReturnType<typeof getInitialState>>;

export default function access(initialState: TInitialState) {
    const { authCodes = [], currentUser: { storeId } = {} } = initialState || {};

    const authMap = authCodes.reduce((result, code) => {
        result[code] = true;
        return result;
    }, {} as Record<string, any>);

    const accessCodes = {
        ...codes.reduce((result, code) => {
            result[code] = false;
            return result;
        }, {} as Record<string, boolean>),
        ...authMap
    };

    if (accessCodes['marketingActivity-hotKeyword']) {
        accessCodes['marketingActivity-hotKeyword'] = config.enableHotKeyword;
    }

    // for (const key in accessCodes) {
    //     if (
    //         (storeId !== '' && key.startsWith('reservationServiceManagement')) ||
    //         (storeId === '' && key.startsWith('reservationServiceOrderManagement'))
    //     ) {
    //         accessCodes[key] = false;
    //     }
    // }

    return accessCodes;
}

/**
 * 所有权限code
 *
 * 如果没有在config/confg.ts中开启access.strictMode = true。 那就就需要将所有的权限code都声明为false。否则会认为有权限跳过
 *
 * 在【系统设置-资源管理】页面中可以复制所有权限code。粘贴在此处
 */

export const codes = [
    'sysSetting',
    'sysSetting-employeeManagement',
    'sysSetting-roleManagement',
    'accountApply',
    'sysSetting-customerManagement'
];

export type TAccessCode = (typeof codes)[number];
