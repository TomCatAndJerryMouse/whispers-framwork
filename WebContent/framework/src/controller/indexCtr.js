app.controller("indexCtr",function($scope){

    // 上传控件事件绑定
    $scope.bindEvent = function ()
    {
        /** 允许元素拖动
         ondragover 事件规定在何处放置被拖动的数据。
         默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，我们必须阻止对元素的默认处理方式。
         这要通过调用 ondragover 事件的 event.preventDefault() 方法：**/
        document.getElementById("uploadFIleArear").addEventListener("dragover",function (env) {
            env.stopPropagation();
            env.preventDefault();
            console.log("ondragover" + env);

        },false);

        // 拖放区域元素事件
        document.getElementById("uploadFIleArear").addEventListener("drop",function (env) {
            env.stopPropagation();
            env.preventDefault();
            // 文件列表
            var items =	env.dataTransfer.items;
            $scope.listFile(items);
            var datas = env
            console.log("drop over files length = " + $scope.files.length);

            // 调用分片
            [].forEach.call($scope.files,function (file){
                $scope.sliceFileStart(true,file);
            })
        },false);

        document.getElementById("sliceFileUploadFile").addEventListener("focus",function () {
            console.log("focus");
        });

        document.getElementById("sliceFileUploadFile").addEventListener("mousedown",function () {
            console.log("mousedown");
        });

        document.getElementById("sliceFileUploadFile").addEventListener("mouseup",function () {
            console.log("mouseup");
        });

        document.getElementById("sliceFileUploadFile").addEventListener("input",function (evn) {
            console.log("input");
        });

        document.getElementById("sliceFileUploadFile").addEventListener("change",function (evn) {
            console.log("change");
            var files;
            if (evn.currentTarget.files) {
                var files = evn.currentTarget.files;
            }
            if ($scope.partialUpload){
                $scope.singleUpload(files);
			}
			else
			{
                $scope.singleUpload(files);
			}

        });

        document.getElementById("sliceFileUploadFile").addEventListener("blur",function () {
            console.log("blur");
        });

        document.getElementById("sliceFileUploadFile").addEventListener("click",function () {
            console.log("click");
        });
    }
	// 绑定事件
    $scope.bindEvent();

	// 分片上传开关
    $scope.partialUpload = false;
    // 当前已发送文件总大小
    $scope.alreadySendFileSize = 0;
    // 所有文件
    $scope.files = new Array();
    // 分割文件
    $scope.prepareAndStartsliceFileUpload = function (files) {
        $scope.alreadySendFileSize = 0;
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

    // 启动分片个片段上传
    $scope.partialUpload = function (currentSliceFile,currentSendSliceCount) {
		console.log("当前已发送文件片数数量  " + currentSendSliceCount);
		console.log("当前发送文件片段大小  " + currentSliceFile.size);
		$scope.alreadySendFileSize += currentSliceFile.size;
		console.log("已经发送文件总大小  " + $scope.alreadySendFileSize);
		var formData = $scope.uploadPlugin.construtsUploadData(currentSliceFile);
		var xhr = $scope.uploadPlugin.construtsUploadRequest("http://127.0.0.1:8080/rest/upload/single");
		$scope.uploadPlugin.startUpload(xhr,formData);
    }

    // 启动分片上传
    $scope.singleUpload = function (files) {
        [].forEach.call(files,function(file) {
            var formDatas = $scope.uploadPlugin.construtsUploadData(file);
            var xhr = $scope.uploadPlugin.construtsUploadRequest("http://localhost:8080/rest/upload/single");
            $scope.uploadPlugin.startUpload(xhr,formDatas);
        });
    }

	// 上传组件
    $scope.uploadPlugin = {
		// 构造上传请求
		construtsUploadRequest : function (url)
		{
			console.log("construtsUploadRequest");
			var xhr = new XMLHttpRequest();
			xhr.open("POST", url, false); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
			// 上传前
			xhr.upload.onloadstart = $scope.uploadPlugin.beforeUpload;
			// 上传中
			xhr.upload.onprogress = $scope.uploadPlugin.uploadFailed;
			// 上传完成
			xhr.onload = $scope.uploadPlugin.uploadComplete;
			// 上传失败
			xhr.onerror = $scope.uploadPlugin.uploadFailed;
			return xhr;
		},
		// 构造上传请求
		construtsUploadData : function (files)
		{
			console.log("construtsUploadData");
            var form = new FormData();
            console.log("construtsUploadRequest");
            // 多个文件
            if (files && files.length) {
                for (var i = 0; i < files.length; i++) {
                    form.append(i,files[i])
                    console.log(files[i].name);
                }
            }
            // 单个文件
            else if (files.name)
			{
                form.append(files.name,files)
			}
			return form;
		},
		// 启动上传
		startUpload : function (xhr,formData)
		{
			console.log("startUpload");
			xhr.send(formData);
		},
		// 上传前
		beforeUpload : function ()
		{
			console.log("beforeUpload");
		},
		// 上传中
		uploadProgress : function ()
		{
			console.log("uploadProgress");
		},
		// 上传完成
		uploadComplete : function ()
		{
			console.log("uploadComplete");
		},
		// 上传失败
		uploadFailed : function ()
		{
			console.log("uploadFailed");
		}
    }

    // 列举本地文件
    $scope.listFile = function (items)
    {
 		[].forEach.call(items,function(item)
		{
 			let wkItemEntry = item.webkitGetAsEntry();
 			// 如果是文件夹
 			if (wkItemEntry.isDirectory)
			{
 				$scope.readDir(wkItemEntry);
			}
 			// 如果是文件
 			else if (wkItemEntry.isFile)
			{
 				$scope.files.push(wkItemEntry);
			}
		})
    }
    
    // 读取文件夹里面的内容
    $scope.readDir = function (dir)
    {
    	let dirReader = dir.createReader();
    	dirReader.readEntries(function(results) {
			if (results.length) {
				$scope.files = $scope.files.concat(results);
				$scope.readDir();
			}}, function(error) {
			});
    }
});