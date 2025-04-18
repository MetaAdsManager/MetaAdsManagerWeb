/** @format */

import { api } from './request';
import { TreeResourceVo } from './request/data-contracts';
import { useFetch } from '~/@yd';
import homePageData from './h5homePageData.json';
const { post,get } = useFetch();


/**
 * 获取用户信息
 * @returns
 */
export const fetchUserInfo = async () => {
    let authCodes: string[] = [];
    let currentUser = { name: '', email: '', storeId: '',avatar:'' };
    try {
        const  {user} = await get('/admin/user_detail')

        // const { data } = await api['/admin/api/sysUser/current-authorities_GET']();
        // if (data) {
            const { buttons = [], menu_json = [], storeId = '',roles } = user
            const menuTree = filterTreeByIds(homePageData, JSON.parse(roles[0]?.menu_json || '[]'));
            authCodes = buttons.concat(getMenuCodesFromMenuTree(menuTree));
            currentUser = {
                name: user?.name,
                email: user?.email,
                avatar: user?.head_img,
                storeId
            };
        // }
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
function filterTreeByIds(tree, ids) {
    const targetIds = new Set(ids);
    
    const filterNode = (node) => {
      // 处理子节点
      const children = (node.children || []).map(child => filterNode(child)).filter(child => child !== null);
      // 判断当前节点是否需要保留
      if (targetIds.has(node.id) || children.length > 0) {
        // 返回新节点，避免修改原对象
        return { ...node, children };
      }
      return null;
    };
  
    // 过滤顶层节点
    return tree.map(node => filterNode(node)).filter(node => node !== null);
  }
