/** @format */

import { api } from './request';
import { TreeResourceVo } from './request/data-contracts';

/**
 * 获取用户信息
 * @returns
 */
export const fetchUserInfo = async () => {
    let authCodes: string[] = [];
    let currentUser = { name: '', email: '', storeId: '' };
    try {
        const { data } = await api['/admin/api/sysUser/current-authorities_GET']();
        if (data) {
            const { buttons = [], menusTree = [], email = '', username = '', storeId = '' } = data;
            authCodes = buttons.concat(getMenuCodesFromMenuTree(menusTree));
            currentUser = {
                name: username,
                email,
                storeId
            };
        }
    } catch (error) {}

    return { authCodes, currentUser };
};

function getMenuCodesFromMenuTree(data: TreeResourceVo[], codes: string[] = []) {
    return data.reduce((result, item) => {
        const { code = '', children = [] } = item;
        result.push(code);
        if (children.length) {
            return getMenuCodesFromMenuTree(children, result);
        }

        return result;
    }, codes);
}
