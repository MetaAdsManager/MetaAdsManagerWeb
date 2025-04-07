/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 *
 * @format
 */

export default {
    dev: {
        '/admin': {
            target: 'https://uat-admin.vip8lucky.com', // UAT
            // target: 'https://dugaoqiang-rushixin.f.wmeimob.com', // 杜高强
            changeOrigin: true,
            pathRewrite: { '^admin': '' }
        },
    },
    test: {
        '/api/': {
            target: 'https://proapi.azurewebsites.net',
            changeOrigin: true,
            pathRewrite: { '^': '' }
        }
    },
    pre: {
        '/api/': {
            target: 'your pre url',
            changeOrigin: true,
            pathRewrite: { '^': '' }
        }
    }
};
