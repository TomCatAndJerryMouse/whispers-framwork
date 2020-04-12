#!/usr/bin/env bash
currentFileName=`basename $0`
cd `dirname $0`
. ./constant.sh
. ./log.sh
log info [$currentFileName] "Stop tomcat ..."
PID=`lsof -i:8080|awk 'NR==2{print $2}'`
if [ ! -z "$PID" ];then
    kill $PID
fi
log info [$currentFileName] "Stop tomcat success!"