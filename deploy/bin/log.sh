#!/usr/bin/env bash
logDir="/var/log/"$projectName
installLogsDir=$logDir/install
tomcatLogsDir=$logDir/tomcat
monitorLogsDir=$logDir/monitor
installLogFile=$installLogsDir/install.log
monitorLogsFile=$monitorLogsDir/monitor.log

# 检查并创建日志目录
checkLogDir () {
    if [ ! -d $logDir  ]; then
      mkdir $logDir
      mkdir $installLogsDir
      mkdir $tomcatLogsDir
      mkdir $monitorLogsDir
      touch $installLogFile
      touch $monitorLogsFile
    fi
}

# 记录日志
log () {
    systemDate=$(date +"%Y-%m-%d %H:%M:%S")
    content="$2 $projectName: $3"
    case "$1" in
        info)
            echo [$systemDate] $content >> $installLogFile 2>>/dev/null
        ;;
        monitor)
           echo [$systemDate]  $content >> $monitorLogsFile 2>>/dev/null
        ;;
    esac
}
