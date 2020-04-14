#!/usr/bin/env bash
currentFileName=`basename $0`
cd `dirname $0`
sh stop.sh
sh start.sh