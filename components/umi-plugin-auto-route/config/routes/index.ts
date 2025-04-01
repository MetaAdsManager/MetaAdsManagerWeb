import sysSetting from './sysSetting';

export default [
  {
    name: '登录',
    path: '/login',
    component: './login',
    layout: false,
    hideInMenu: true,
  },
  { name: '首页', path: '/home', component: './home', icon: 'smile' },
  ...sysSetting,
  { path: '/', redirect: '/home' },
  { component: './404' },
];
