/** @format */

export default [
    {
        name: '账户管理',
        path: '/trafficManagement',
        routes: [
            {
                name: '广告列表',
                path: '/trafficManagement/list',
                component: './trafficManagement/list'
            },
            { redirect: '/trafficManagement/list' }
        ]
    }
];
