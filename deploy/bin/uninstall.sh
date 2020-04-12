#!/usr/bin/env bash
currentFileName=`basename $0`
cd `dirname $0`
. ./constant.sh
. ./log.sh
sh $instllallDir/bin/stop.sh
log info [$currentFileName] "uninstalling dir ..."
rm -rf $instllallDir
log info [$currentFileName] "uninstalling dir success!"

