/** @format */

export default [
    {
        name: '开户管理',
        path: '/accountManagement',
        routes: [
            {
                name: '开户申请',
                path: '/accountManagement/openAccount',
                component: './accountManagement/openAccount'
            },
            {
                name: '开户列表',
                path: '/accountManagement/accountList',
                component: './accountManagement/accountList'
            },
            { redirect: '/accountManagement/openAccount' }
        ]
    }
];
