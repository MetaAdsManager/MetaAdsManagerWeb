/* eslint-disable no-param-reassign */
/* eslint-disable max-params */
/* eslint-disable @typescript-eslint/no-require-imports */
// @ts-nocheck

/**
 * 权限code生成器
 */
import * as fs from 'fs'
import * as path from 'path'
import { generateSql } from './const'

// 解析参数
const [, , arg = ''] = process.argv
const args = arg.split(' ').reduce((obj, item) => {
  const [key, value] = item.split('=')
  if (key && value) {
    obj[key.replace(/-/g, '')] = value
  }
  return obj
}, {})

const routesPath = path.join(args.absSrcPath, '../config/routes')
const excludeCodes = [...new Set((args.exclude ?? '').split(','))] // 需要排除生成的code
const routes = require(routesPath)

let currentId = 0
const routeArray = extractRoutes(routes.default || routes)

// 获取所有去重的codes
let codes = routeArray.map(({ code }) => code)
codes = [...new Set(codes)] // 去重

// 生成code文本
let codeStr = `// CODE_START
  /**
   * 权限code
   * 以下内容均为access-code插件生成（CODE_START至CODE_END部分）
   * 所以请勿在此区域内写入内容。
   * 你可以通过运行 pnpm umi accessCode 自动生成
   */
`
codeStr += codes
  .map((code, index) => {
    return `  '${code}'${index < codes.length - 1 ? ',' : ''}`
  })
  .join('\n')

codeStr += `\n  // CODE_END`

// 读取并替换src/access.ts中的code
const accessFilePath = path.join(args.absSrcPath, './access.ts')
let accessFileText = fs.readFileSync(accessFilePath).toString()
const codeReg = /\/\/ CODE_START[\s\S]*CODE_END/gm
if (!codeReg.test(accessFileText)) {
  throw new Error(`[ERROR] 权限code标识符不存在 ${accessFilePath}`)
}
accessFileText = accessFileText.replace(/\/\/ CODE_START[\s\S]*CODE_END/gm, codeStr)
fs.writeFileSync(accessFilePath, accessFileText)

// fs.writeFileSync(path.join(__dirname, './output.ts'), accessFileText)
// fs.writeFileSync(path.join(__dirname, './routeArray.json'), JSON.stringify(routeArray, null, 2))
// fs.writeFileSync(path.join(__dirname, './codes.json'), JSON.stringify(codes, null, 2))

// 写入sql文件
if (args.sql) {
  const sql = generateSql(routeArray)
  const sqlFilePath = path.join(args.absSrcPath, './accessCode.sql')
  fs.writeFileSync(sqlFilePath, sql)
}

/**
 * 处理路由
 * @param data
 * @param results
 * @returns
 */
function extractRoutes(data: any[], results: any[] = [], pid = 0) {
  return data.reduce(
    (result, item) => {
      const { name, path, routes = [], operationAccess = [] } = item

      if (!!path && !!name) {
        const code = path.replace(/^\//, '').replace(/\//g, '-')
        if (excludeCodes.indexOf(code) !== -1) {
          return result
        }

        const routeObj = {
          pid,
          id: ++currentId,
          name,
          path,
          code,
          type: 0
        }
        result.push(routeObj)

        // 获取操作权限
        if (operationAccess.length) {
          operationAccess.forEach((item) => {
            result.push({
              pid: routeObj.id,
              id: ++currentId,
              name: item.name,
              code: code + '-' + item.code,
              type: 1
            })
          })
        }

        if (routes.length) {
          return extractRoutes(routes, result, routeObj.id)
        }
      }

      return result
    },
    [...results]
  )
}
