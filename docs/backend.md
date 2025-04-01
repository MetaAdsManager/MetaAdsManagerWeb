# 美萌后台管理系统框架

此项目框架是基于[Ant Design Pro](https://pro.ant.design)。 下面将会讲述如何快速使用

## 目录结构

项目开始之前，你必须要知道项目目录的结构。**⚠️目录结构不允许修改** .以下结构是在官网基础上做了一定的延伸

```js
├── config                   # umi 配置，包含路由，构建等配置
│   ├── routes.ts            # 路由配置
│   ├── config.ts            # 构建配置
│   └── proxy.ts             # 后台接口代理配置
├── mock                     # 本地模拟数据
├── public
│   └── favicon.png          # Favicon
├── src
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── e2e                  # 集成测试用例
│   ├── layouts              # 通用布局
│   ├── hooks                # 业务通用hook文件
│   ├── styles               # 样式文件 用于自定义与覆盖样式
│   ├── models               # 全局 dva model
│   ├── pages                # 业务页面入口和常用模板
│   ├── services             # 后台接口服务--本项目废弃不使用。请使用request
│   ├── request              # 后台接口服务
│   ├── utils                # 工具库 提供通用工具函数
│   ├── locales              # 国际化资源 --框架废弃未使用
│   ├── global.less          # 全局样式
│   └── global.ts            # 全局 JS
├── swagerApi                # swagerApi接口代码生成工具
├── tests                    # 测试工具
├── README.md
└── package.json

```

## 运行命令

框架提供了许多有用的脚本命令。帮助你快速启动、构建项目。执行项目测试等。
所有的命令都在`package.json`中.

### 安装 `node_modules`:

```bash
npm install  或者  yarn
```

### 启动项目

```bash
// 启动项目
npm start

// 启动开发环境 此环境下数据接口会优先走`mock`目录下定义的接口数据 适用于后端服务不可用或者需要自行拟造测试数据时使用
yarn start:mock
```

关于mock的更多介绍。参考[这里](https://pro.ant.design/zh-CN/docs/openapi#mock)

### 构建项目

框架内部默认提供了四种环境。即 dev(开发环境)、uat(测试环境)、stg(预发布环境)、prd(生产环境)。其对应命令如下:

```bash
// 打包测试环境
npm run uat

// 打包stg环境
npm run stg

// 打包开发环境
npm run build

```

根据环境的不同。可以相应的配置想要设置的参数。你可以根据项目实际情况选择全部或者部分环境。

### 代码检查

```bash
npm run lint
```

你也可以使用命令自动修复 lint error:
当然我们还是建议你配合开发工具插件。在开发阶段就解决所有 lint error

```bash
npm run lint:fix
```

## 文档资源

### 官方资源

[antd](https://ant.design/index-cn)
基于 Ant Design 设计体系的 React UI 组件库

[pro components](https://procomponents.ant.design/)
Ant Design 定义了基础的设计规范，对应也提供了大量的基础组件。但是对于中后台类应用，我们希望提供更高程度的抽象，提供更上层的设计规范，并且对应提供相应的组件使得开发者可以快速搭建出高质量的页面。
在 ProComponents 中我们内置了一系列的设计规范，预设了常用的逻辑。在这个基础上我们同样提供了灵活的支持，比如对于 ProTable 来说你也可以把它完全当做 Ant Design 的 Table 来用，对于 ProForm 来说你也可以直接使用 Ant Design 的基础组件或者你的自定义组件。我们希望通过 Pro 系列组件提供快速高效大家高质量中后台应用的能力，进一步扩展 Ant Design 的能力，欢迎使用并提出宝贵的意见

[antd pro 官网](https://pro.ant.design)

Ant Design Pro 是基于 Ant Design 和 umi 的封装的一整套企业级中后台前端/设计解决方案，致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。随着『设计者』的不断反馈，我们将持续迭代，逐步沉淀和总结出更多设计模式和相应的代码实现，阐述中后台产品模板/组件/业务场景的最佳实践，
如遇问题可以前往[github](https://github.com/ant-design/ant-design-pro)搜寻反馈或提交建议.
你也可以找架构部寻求帮助

### 其他

项目中绝大部分内容都可以在[antd pro 官网](https://pro.ant.design)获得解答。这里列举文档中没有或额外新增的内容。

[接口请求](/~docs/api)
