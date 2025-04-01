-- 全量创建accessCode
--  ⚠️注意:
--    库与表名需要替换为实际库表
USE `framework_admin_dev`;
-- 创建备份 在执行此sql前备份备份原数据表
CREATE TABLE `sys_resource_1689674700757` SELECT * FROM `sys_resource`;
-- 清空原数据表
TRUNCATE `sys_resource`;
-- 插入新数据
INSERT INTO `sys_resource` (
	`id`,
	`code`,
	`type`,
	`title`,
	`path`,
	`method`,
	`memo`,
	`icon`,
	`sort_num`,
	`visible`,
	`parent_id`,
	`gmt_created`,
	`gmt_modified`,
	`create_user`,
	`modify_user`,
	`status`,
	`deleted`
)
VALUES
(1,'home',0,'首页',NULL,NULL,'','',0,1,0,'2023-07-18 18:05:00','2023-07-18 18:05:00','admin',NULL,1,0),