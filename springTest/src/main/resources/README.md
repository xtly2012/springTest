-- 数据库创建脚本
create database springtestDB;

create user springtest@'localhost' identified by 'springtest';

grant all privileges on springtestDB.* to springtest@'localhost';

use springtestDB;

create table TRANSACTION_TEST(
	ident INT comment '标识',
	text  VARCHAR(128) comment '文本'
);