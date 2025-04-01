"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function _path() {
    return data;
  };

  return data;
}

function _fs() {
  const data = _interopRequireDefault(require("fs"));

  _fs = function _fs() {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _default(api) {
  const paths = api.paths,
        utils = api.utils;
  const execa = utils.execa,
        lodash = utils.lodash,
        chokidar = utils.chokidar,
        chalk = utils.chalk; // 路由生成函数

  const generateRoute = lodash.debounce( /*#__PURE__*/_asyncToGenerator(function* () {
    try {
      yield execa('ts-node', [_path().default.join(__dirname, '../scripts/convertRoutes.ts'), `--absSrcPath=${paths.absSrcPath}`]);
      api.logger.info(chalk.green('生成路由表成功'));
    } catch (error) {
      api.logger.error(error.message);
    }
  }), 200); // 注册配置

  api.describe({
    key: 'autoRoute',
    config: {
      default: false,

      schema(joi) {
        return joi.boolean();
      }

    },
    enableBy: api.EnableBy.config
  }); // 注册命令。

  api.registerCommand({
    name: 'autoRoute',
    alias: 'ar',
    fn: function () {
      var _fn = _asyncToGenerator(function* () {
        yield generateRoute();
        return '';
      });

      function fn() {
        return _fn.apply(this, arguments);
      }

      return fn;
    }()
  });

  if (api.userConfig.autoRoute) {
    let watcher;
    api.onDevCompileDone(() => {
      if (watcher) {
        return;
      }

      const routePath = _path().default.join(paths.absSrcPath, '../config/routes');

      try {
        const isExits = _fs().default.existsSync(routePath); // 文件存在则监听


        if (isExits) {
          api.logger.info(`'已启用autoRoute自动生成${chalk.green('src/routes.ts')}'`);
          watcher = chokidar.watch(routePath, {
            ignoreInitial: true
          }).on('change', () => {
            generateRoute();
          }).on('add', () => {
            generateRoute();
          }).on('unlink', () => {
            generateRoute();
          });
        } else {
          api.logger.warn('不存在config/route文件或目录。请新建文件夹后重新启动项目');
        }
      } catch (error) {
        api.logger.warn('不存在config/route文件或目录。请新建文件夹后重新启动项目');
      }
    });
    api.onExit(() => {
      if (watcher) {
        watcher.close();
      }
    });
  }
}