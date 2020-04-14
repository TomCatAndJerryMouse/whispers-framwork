#!/usr/bin/env bash
currentFileName=`basename $0`
currentDir=`dirname $0`
cd $currentDir
. ./bin/constant.sh
. ./bin/log.sh

copyPackageFiles () {
    # remove install dir
    # echo $instllallDir
    # if [ -d  $instllallDir ]; then 
    #     rm -rf $instllallDir
    #     log info [$currentFileName] "Remove files from install dir success."
    # fi
    # copy new procet files
    mkdir -p $instllallDir && cp -rf ./* -t "$_"
    rm -rf $instllallDir/*.sh
    log info [$currentFileName] "Copy files to install dir success!"
}

installTomcat () {
    tar -zxf  $tomctDir/apache-tomcat-9.0.33.tar.gz --strip-components 1 -C $tomctDir
    rm $tomctDir/apache-tomcat-9.0.33.tar.gz
    rm -rf $appDir
    log info [$currentFileName] "Install tomcat success!"
}

installJre () {
    tar -zxf  $jreDir/server-jre-8u241-linux-x64.tar.gz --strip-components 1 -C $jreDir
    rm  $jreDir/server-jre-8u241-linux-x64.tar.gz
    log info [$currentFileName] "Install jre success！"
}

install() {
    log info [$currentFileName] "Begin install ..."
    if [ -e $instllallDir/bin/uninstall.sh ];then
      sh $instllallDir/bin/uninstall.sh
    fi
    # 检查日志目录
    checkLogDir
    # 将项目目录拷贝到运行目录
    copyPackageFiles
    # 安装tomcat目录
    installTomcat
    # 安装jre目录
    installJre
    # 执行升级
    cd $currentDir
    sh upgrade.sh
    log info [$currentFileName] "Install success!"
}

install