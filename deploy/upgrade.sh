#!/usr/bin/env bash
cd `dirname $0`
currentFileName=`basename $0`
. ./bin/constant.sh
. ./bin/log.sh

# nignx静态资源升级
updateStatic (){
    rm -rf $nginxRuningDir/$projectName
    \cp -rf ./Runtime/app/html/$projectName  $nginxRuningDir
    log info [$currentFileName] "Update static success!"
}

# nignx配置升级
updateNginxConfig (){
    \cp -rf ./conf/nginx/conf/  $nginxRuningDir
    # 更新配置后重新加载配置
    service nginx -s reload
     log info [$currentFileName] "Update nginx config success!"
}

# 升级tomcat内的app
updateTomcatApp (){
    \cp -rf ./Runtime/app/*.war  $tomctDir/webapps
    log info [$currentFileName] "Update tomcat app success!"
}

# 升级tomcat配置
updateTomcatConfigs (){
    \cp -rf ./conf/tomcat/* $tomctDir
    log info [$currentFileName] "Update tomcat configs success!"
}

doAll() {
    updateStatic
    updateNginxConfig
    updateTomcatApp
    updateTomcatConfigs
}

doAll