#!/usr/bin/env bash
projectName="whispers"
# 安装目录
instllallDir="/opt/"$projectName
# 运行目录
runctimDir=$instllallDir/Runtime
tomctDir=$runctimDir/tomcat
jreDir=$runctimDir/jre
appDir=$runctimDir/app
nginxDir=$runctimDir/nginx
# niginx运行目录
nginxRuningDir=/usr/local/nginx/
#配置目录
configDir=$instllallDir/conf
sqlConfigDir=$configDir/sql
nginxConfigDir=$configDir/nginx
tomcatConfigDir=$configDir/tomcat
#日志目录
logDir="/var/log/"$projectName
