app.controller("indexCtr",function($scope){
	// 当前已发送文件总大小
	$scope.alreadySendFileSize = 0;
    $scope.sliceFileStart = function () {
    	$scope.alreadySendFileSize = 0;
    	var file  = document.getElementById("sliceFileUploadFile").files[0];
    	// 每一片定义为5M
    	var sliceSize = 1024*1024*5;
    	if (!file)
		{
    		console.log("file is null");
    		return;
		}
    	console.log("文件总大小   " + file.size);
    	// 向上取整计算文件总片数
    	var sliceCount = Math.ceil(file.size/sliceSize);
    	console.log("文件总片数  " + sliceCount);
    	// 判断是否把文件所有分段都上传完成
    	var isUploadComplete = false;
    	// 当前已发送了的分段
    	var currentSendSliceCount = 0;
    	// 已经发送了的文件片段数量小于总数量一直循环发送
    	while (currentSendSliceCount < sliceCount)
		{
    		start = sliceSize * currentSendSliceCount;
    		end = start + sliceSize;
    		var currentSliceFile = 	file.slice(start,end);
    		currentSendSliceCount++;
    		// 执行上传
    		$scope.upload(currentSliceFile,currentSendSliceCount);
    
		}
    }
    
    $scope.upload = function (currentSliceFile,currentSendSliceCount) {
		console.log("当前已发送文件片数数量  " + currentSendSliceCount);
		console.log("当前发送文件片段大小  " + currentSliceFile.size);
		$scope.alreadySendFileSize += currentSliceFile.size;
		console.log("已经发送文件总大小  " + $scope.alreadySendFileSize);
    }
});