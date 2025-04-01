"use strict";
exports.__esModule = true;
exports["default"] = [
    {
        name: '系统设置',
        path: '/sysSetting',
        routes: [
            {
                name: '部门管理',
                path: '/sysSetting/deptManagement',
                component: './sysSetting/deptManagement'
            },
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
            {
                name: '资源管理',
                path: '/sysSetting/resourcesManagement',
                component: './sysSetting/resourcesManagement'
            },
            { component: './404' },
        ]
    },
];
