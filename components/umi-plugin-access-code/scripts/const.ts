// sql语句开始值
export const sqlStart = () => `-- 全量创建accessCode
--  ⚠️注意:
--    库与表名需要替换为实际库表
USE \`framework_admin_dev\`;
-- 创建备份 在执行此sql前备份备份原数据表
CREATE TABLE \`sys_resource_${Date.now()}\` SELECT * FROM \`sys_resource\`;
-- 清空原数据表
TRUNCATE \`sys_resource\`;
-- 插入新数据
INSERT INTO \`sys_resource\` (
	\`id\`,
	\`code\`,
	\`type\`,
	\`title\`,
	\`path\`,
	\`method\`,
	\`memo\`,
	\`icon\`,
	\`sort_num\`,
	\`visible\`,
	\`parent_id\`,
	\`gmt_created\`,
	\`gmt_modified\`,
	\`create_user\`,
	\`modify_user\`,
	\`status\`,
	\`deleted\`
)
VALUES\n`

export function generateSql(data: any[]) {
  const date = timestampToDateTime()

  return (
    sqlStart() +
    data
      .map((item, index) => {
        return `(${index + 1},'${item.code}',${item.type},'${item.name}',NULL,NULL,'','',0,1,${item.pid},'${date}','${date}','admin',NULL,1,0)`
      })
      .join(',\n')
  )
}

/**
 * 时间戳 转换为 yyyy-MM-dd HH:mm:ss
 * @param {number} timestamp
 * @param {string} format
 */
function timestampToDateTime(timestamp = Date.now(), format = 'yyyy-MM-dd HH:mm:ss') {
  if (isNaN(timestamp)) {
    return ''
  }

  if (format.length < 4 || 'yyyy-MM-dd HH:mm:ss'.indexOf(format) !== 0) {
    return ''
  }

  const date = new Date(Number(timestamp))

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return format
    .replace('yyyy', `${year}`)
    .replace('MM', month > 9 ? `${month}` : `0${month}`)
    .replace('dd', day > 9 ? `${day}` : `0${day}`)
    .replace('HH', hour > 9 ? `${hour}` : `0${hour}`)
    .replace('mm', minute > 9 ? `${minute}` : `0${minute}`)
    .replace('ss', second > 9 ? `${second}` : `0${second}`)
}
