#!/usr/bin/env bash
currentFileName=`basename $0`
cd `dirname $0`
. ./constant.sh
. ./log.sh
log info [$currentFileName] "Start tomcat ..."
cd $tomctDir/bin
sh startup.sh
log info [$currentFileName] "Start tomcat success!"
