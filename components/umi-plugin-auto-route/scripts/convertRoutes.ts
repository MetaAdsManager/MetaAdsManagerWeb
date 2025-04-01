// @ts-nocheck

/**
 * 路由生成器
 */
// import routes from '../config/routes';
import * as fs from 'fs';
import * as path from 'path';

function extractRoutes(data: any[], results: any[] = []) {
  return data.reduce(
    (result, item) => {
      const { name, path, component, routes = [] } = item;

      if (!!path && component) {
        result.push({ name, path });
      }

      if (routes.length) {
        return extractRoutes(routes, result);
      }

      return result;
    },
    [...results],
  );
}

// 解析路径
const absSrcPath = process.argv[2].split('=')[1];
const routesPath = path.join(absSrcPath, '../config/routes');

// 拼接字符串
let str = `
/**
 * 页面路由映射.
 * 请不要在此文件添加任何代码。因为生成后会全量覆盖
 * 运行 npm run route 或者 yarn route 自动生成
 */

export const routeNames = {\n`;

try {
  const routes = require(routesPath);
  const routeMap = extractRoutes(routes.default || routes);
  const tab = '  ';

  str += routeMap
    .map(({ name, path }, index) => {
      const key = path
        .replace(/^\//, '')
        .replace(/\/([a-zA-Z])/g, (_m, p: string) => p.toUpperCase());
      return `${tab}/** ${name} */\n${tab}${key}: '${path}'${
        index !== routeMap.length - 1 ? ',' : ''
      }`;
    })
    .join('\n');

  str += '\n}\n\n';

  fs.writeFileSync(path.join(absSrcPath, './routes.ts'), str);
} catch (error) {
  throw error;
}

// fs.writeFileSync(path.join(__dirname, './output.json'), JSON.stringify(routes, null, 2))
// fs.writeFileSync(path.join(__dirname, './routeMap.json'), JSON.stringify(routeMap, null, 2))
