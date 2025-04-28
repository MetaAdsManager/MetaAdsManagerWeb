/** @format */
import sysSetting from './sysSetting';
import user from './user';
import accountManagement from './accountManagement';
import trafficManagement from './trafficManagement';

export default [
    { name: '登录', path: '/login', component: './login', layout: false, hideInMenu: true },
    { name: '首页', path: '/home', component: './home' },
    {
        name: '客户管理',
        path: '/sysSetting/customerManagement',
        component: './sysSetting/customerManagement'
    },
    // { name: '开户申请', path: '/accountApply', component: './accountApply' },

    ...user,
    // ...integralGoodsManagement,

    // ...liveBroadcastManagement,
    ...trafficManagement,
    ...accountManagement,
    ...sysSetting,
    { path: '/', redirect: '/home' },
    { component: './404' }
];
