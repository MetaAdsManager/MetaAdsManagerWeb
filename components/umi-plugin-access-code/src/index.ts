// ref:
// - https://umijs.org/plugins/api
import { IApi } from '@umijs/types'
import path from 'path'

export default function(api: IApi, ops: any) {
  const { paths, utils } = api
  const { execa, lodash, chokidar, chalk } = utils
  // 注册配置
  api.describe({
    key: 'accessCodes',
    config: {
      schema(joi) {
        return joi.object({
          routeInject: joi.boolean(),
          exclude: joi.array(),
          sql: joi.boolean()
        })
      }
    },
    enableBy: api.EnableBy.config
  })

  // 注册命令。
  api.registerCommand({
    name: 'accessCode',
    alias: 'ac',
    fn: async () => {
      await generateCode()
      return ''
    }
  })

  const { routeInject = false, sql = false, exclude = [] } = api.userConfig.accessCodes ?? {}

  // 给路由注入accessCode
  if (routeInject) {
    api.onPatchRoute(({ route }) => {
      if (route.path) {
        const code = route.path.replace(/^\//, '').replace(/\//g, '-')
        if (exclude.indexOf(code) === -1) {
          route.access = code
        }
      }
    })
  }

  // 生成code
  const generateCode = lodash.debounce(async () => {
    try {
      const args = [`--absSrcPath=${paths.absSrcPath}`]
      !!exclude.length && args.push(`--exclude=${exclude.join(',')}`)
      sql && args.push(`--sql=true`)

      await execa('ts-node', [path.join(__dirname, '../scripts/convertRoutes.ts'), args.join(' ')])
      api.logger.info(chalk.green('生成accessCode成功'))
    } catch (error) {
      api.logger.error((error as any).message)
    }
  }, 200)
}
