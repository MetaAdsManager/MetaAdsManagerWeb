// ref:
// - https://umijs.org/plugins/api
import { IApi } from '@umijs/types';
import path from 'path';
import fs, { FSWatcher } from 'fs';

export default function(api: IApi) {
  const { paths, utils } = api;
  const { execa, lodash, chokidar, chalk } = utils;

  // 路由生成函数
  const generateRoute = lodash.debounce(async () => {
    try {
      await execa('ts-node', [
        path.join(__dirname, '../scripts/convertRoutes.ts'),
        `--absSrcPath=${paths.absSrcPath}`,
      ]);
      api.logger.info(chalk.green('生成路由表成功'));
    } catch (error) {
      api.logger.error((error as any).message);
    }
  }, 200);

  // 注册配置
  api.describe({
    key: 'autoRoute',
    config: {
      default: false,
      schema(joi) {
        return joi.boolean();
      },
    },
    enableBy: api.EnableBy.config,
  });

  // 注册命令。
  api.registerCommand({
    name: 'autoRoute',
    alias: 'ar',
    fn: async () => {
      await generateRoute();
      return '';
    },
  });

  if (api.userConfig.autoRoute) {
    let watcher: FSWatcher;
    api.onDevCompileDone(() => {
      if (watcher) {
        return;
      }
      const routePath = path.join(paths.absSrcPath!, '../config/routes');
      try {
        const isExits = fs.existsSync(routePath);
        // 文件存在则监听
        if (isExits) {
          api.logger.info(
            `'已启用autoRoute自动生成${chalk.green('src/routes.ts')}'`,
          );
          watcher = chokidar
            .watch(routePath, { ignoreInitial: true })
            .on('change', () => {
              generateRoute();
            })
            .on('add', () => {
              generateRoute();
            })
            .on('unlink', () => {
              generateRoute();
            });
        } else {
          api.logger.warn(
            '不存在config/route文件或目录。请新建文件夹后重新启动项目',
          );
        }
      } catch (error) {
        api.logger.warn(
          '不存在config/route文件或目录。请新建文件夹后重新启动项目',
        );
      }
    });

    api.onExit(() => {
      if (watcher) {
        watcher.close();
      }
    });
  }
}
