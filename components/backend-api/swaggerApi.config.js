/**
 * swagger api接口生成配置文件
 *
 * 详细配置请查看 @MetaAdsManager/swagger-api-templates/config.js
 * 这里的配置文件会与默认配置进行合并
 * 你可以在项目根目录下新建一个 swaggerApi.config.private.js文件。改文件不会被git追踪。便于多人开发
 */

module.exports = {
  templatesType: 'backend',
  apifoxOption: {
    projects: [{ name: '', url: 'http://127.0.0.1:4523/export/openapi?projectId=2879458&version=2.0' }]
  }
}

