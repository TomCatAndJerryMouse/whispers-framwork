#!/usr/bin/env bash
currentFileName=`basename $0`
. ./bin/constant.sh
. ./bin/log.sh

copyPackageFiles () {
    # remove install dir
    echo $instllallDir
    if [ -d  $instllallDir ]; then 
        rm -rf $instllallDir
        log info [$currentFileName] "Remove files from install dir success."
    fi
    # copy new procet files
    mkdir -p $instllallDir && cp -rf ./* -t "$_"
      log info [$currentFileName] "Copy files to install dir success."
}

install() {
    checkLogDir
    copyPackageFiles
}

install