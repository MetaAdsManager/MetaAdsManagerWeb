/**
 * swagger api接口生成配置文件
 *
 * 详细配置请查看 @MetaAdsManager/swagger-api-templates/config.js
 * 这里的配置文件会与默认配置进行合并
 * 你可以在项目根目录下新建一个 swaggerApi.config.private.js文件。改文件不会被git追踪。便于多人开发
 *
 * @format
 */

module.exports = {
    templatesType: 'backend',
    apifoxOption: {
        projects: [
            { name: '', url: 'https://shenbin-rushixin.f.wmeimob.com/admin/v2/api-docs' }
        ]
    }
};
