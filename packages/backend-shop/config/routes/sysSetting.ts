/** @format */

export default [
    {
        name: '系统设置',
        path: '/sysSetting',
        routes: [
            {
                name: '人员管理',
                path: '/sysSetting/employeeManagement',
                component: './sysSetting/employeeManagement'
            },
            {
                name: '角色管理',
                path: '/sysSetting/roleManagement',
                component: './sysSetting/roleManagement'
            },
            // {
            //     name: '菜单管理',
            //     path: '/sysSetting/resourcesManagement',
            //     component: './sysSetting/resourcesManagement',
            //     hideInMenu: process.env.REACT_APP_ENV !== 'dev'
            // },

            { redirect: '/sysSetting/employeeManagement' }
        ]
    }
];
