/** @format */
import sysSetting from './sysSetting';
import user from './user';

export default [
    { name: '登录', path: '/login', component: './login', layout: false, hideInMenu: true },
    { name: '首页', path: '/home', component: './home' },
    { name: '开户申请', path: '/accountApply', component: './accountApply' },
    ...user,
    // ...integralGoodsManagement,

    // ...liveBroadcastManagement,
    ...sysSetting,
    { path: '/', redirect: '/home' },
    { component: './404' }
];
