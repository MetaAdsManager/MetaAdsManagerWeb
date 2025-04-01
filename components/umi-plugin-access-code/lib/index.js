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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _default(api, ops) {
  var _api$userConfig$acces;

  const paths = api.paths,
        utils = api.utils;
  const execa = utils.execa,
        lodash = utils.lodash,
        chokidar = utils.chokidar,
        chalk = utils.chalk; // 注册配置

  api.describe({
    key: 'accessCodes',
    config: {
      schema(joi) {
        return joi.object({
          routeInject: joi.boolean(),
          exclude: joi.array(),
          sql: joi.boolean()
        });
      }

    },
    enableBy: api.EnableBy.config
  }); // 注册命令。

  api.registerCommand({
    name: 'accessCode',
    alias: 'ac',
    fn: function () {
      var _fn = _asyncToGenerator(function* () {
        yield generateCode();
        return '';
      });

      function fn() {
        return _fn.apply(this, arguments);
      }

      return fn;
    }()
  });

  const _ref = (_api$userConfig$acces = api.userConfig.accessCodes) !== null && _api$userConfig$acces !== void 0 ? _api$userConfig$acces : {},
        _ref$routeInject = _ref.routeInject,
        routeInject = _ref$routeInject === void 0 ? false : _ref$routeInject,
        _ref$sql = _ref.sql,
        sql = _ref$sql === void 0 ? false : _ref$sql,
        _ref$exclude = _ref.exclude,
        exclude = _ref$exclude === void 0 ? [] : _ref$exclude; // 给路由注入accessCode


  if (routeInject) {
    api.onPatchRoute(({
      route
    }) => {
      if (route.path) {
        const code = route.path.replace(/^\//, '').replace(/\//g, '-');

        if (exclude.indexOf(code) === -1) {
          route.access = code;
        }
      }
    });
  } // 生成code


  const generateCode = lodash.debounce( /*#__PURE__*/_asyncToGenerator(function* () {
    try {
      const args = [`--absSrcPath=${paths.absSrcPath}`];
      !!exclude.length && args.push(`--exclude=${exclude.join(',')}`);
      sql && args.push(`--sql=true`);
      yield execa('ts-node', [_path().default.join(__dirname, '../scripts/convertRoutes.ts'), args.join(' ')]);
      api.logger.info(chalk.green('生成accessCode成功'));
    } catch (error) {
      api.logger.error(error.message);
    }
  }), 200);
}