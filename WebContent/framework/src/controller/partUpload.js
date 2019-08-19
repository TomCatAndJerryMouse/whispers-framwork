
var partsUpload = {
    // 允许上传文件的并发数
    allowdUploadFileConcurrentNumber : 1,
    // 允许每片文件异步上传并发数
    allowdPartConcurrentNumber : 1,
    // 每一片定义为5M
    sliceSize : 1024*1024*5,
    afterSliceFile : {
        "id":"",
        "name":"",
        "size":"",
        "sliceCount":"",
        "parts":null,
        "currentUploadingSliceCount":"sliceCount",
    },
    // 选择后准备分割的文件队列
    selectArrayQueue : function() {
        var proccess = false;
        var currentFile = "";
        var arr = [];
        // 获取当正在队列中上传的对象
        this.getCurrentFile = function(){
            return currentFile;
        }
        // 入队操作
        this.isProccess = function(element){
            return proccess;
        }
        // 设置队列是否在运行标识
        this.setProccess = function(element){
            proccess = element;
        }
        this.push = function(element){
            arr.push(element);
            return true;
        }
        // 出队操作
        this.pop = function(){
            currentFile= arr.shift();
            return currentFile;
        }
        // 获取队首
        this.getFront = function(){
            return arr[0];
        }
        // 获取队尾
        this.getRear = function(){
            return arr[arr.length - 1]
        }
        // 清空队列
        this.clear = function(){
            arr = [];
        }
        // 获取队长
        this.size = function(){
            return arr.length;
        }
    },
    // 分割后的文件队列
    uploadingFilesQueue : function() {
        // 切割好的文件集合
        var arr = [];
        // 正在上传的文件
        var uploadingArr = [];
        // 添加
        this.push = function(f){
            arr.push(f);
        }
        // 获取队首
        this.getFront = function(){
            return arr[0];
        }
        // 出队操作
        this.pop = function(){
            var f = arr.shift();
            // 出队设置到正在上传集合
            uploadingArr.push(f)
            return f;
        }
        // 正在上传
        this.uploadingFileSize = function(){
            return arr.length;
        }
        // 分割了准备上传集合长度
        this.slicedFileSize = function(){
            return arr.length;
        }
    },
    // 上传前准备，切割将要上传队列中的文件
    beforeUploadPrepare : function (){
        while (this.selectArrayQueue.getFront())
        {
            // 如果当前正在上传文件数大于等于允许阀值，则等待。
            if (this.uploadingFilesQueue.size >= this.allowdUploadFileConcurrentNumber) {
                continue;
            }
            // 从队列中取出将要上传的文件
            var file = this.selectArrayQueue.pop();
            // 切割文件
            var fileParts = this.sliceFile(file)
            // 将切割后的文件放入正在上传文件集合
            this.uploadingFilesQueue.push(fileParts);
        }
    },
    // 启动上传
    startUpload : function (){
        while (this.uploadingFilesQueue.getFront())
        {
            var file  = this.uploadingFilesQueue.pop();
            this.start(file).then(function (response){

            });
        }
    },
    start : function (file)
    {
        return new Promise(function (resolve, reject)
        {
            // 如果当前文件上传的分片数量大于并发
            while (file.parts[0] && file.currentUploadingSliceCount < this.allowdPartConcurrentNumber)
            {
                let currentPart = file.parts[0].shift();
                var formData = xhrPlugin.construtsUploadData(currentPart);
                var xhr = xhrPlugin.construtsUploadRequest("http://127.0.0.1:8080/rest/upload/partial");
                xhrPlugin.startUpload.call(xhrPlugin,xhr,formData);
                sendPartCount ++;
                file.currentUploadingSliceCount ++;
            }
        });
    },
    sliceFile : function (file){
        console.log("文件总大小   " + file.size);
        // 向上取整计算文件总片数
        var sliceCount = Math.ceil(file.size / this.sliceSize);
        console.log("文件总片数  " + sliceCount);
        // 已切割的分片
        var currentSendSliceCount = 0;
        // 保存当前文件切割后的文件集合
        var parts = [];
        // 循环切割
        while (currentSendSliceCount < sliceCount) {
            start = this.sliceSize * currentSendSliceCount;
            end = start + this.sliceSize;
            currentSendSliceCount ++;
            parts.push(file.slice(start, end));
        }
        return  {
                    "id":"",
                    "name":file.name,
                    "size":file.size,
                    "parts":parts,
                    "sliceCount":sliceCount,
                    "currentUploadingSliceCount":0
                };
    }
}

// XMLHttpRequest组件
var xhrPlugin = {
    // 构造上传请求
    construtsUploadRequest : function (url)
    {
        console.log("construtsUploadRequest");
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, false); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
        // 上传前
        xhr.upload.onloadstart = uploadPlugin.beforeUpload;
        xhr.upload.onloadstart = partsUpload.beforeUploadPrepare;
        // 上传中
        xhr.upload.onprogress = uploadPlugin.uploadFailed;
        // 上传完成
        xhr.onload = uploadPlugin.uploadComplete;
        // 上传失败
        xhr.onerror = uploadPlugin.uploadFailed;
        return xhr;
    },
    // 构造上传请求
    construtsUploadData : function (file)
    {
        console.log("construtsUploadData");
        var form = new FormData();
        // 多个文件
        if (files ) {
            form.append(i,files[i])
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
    uploadComplete : function (resp)
    {
        console.log("uploadComplete");
    },
    // 上传失败
    uploadFailed : function ()
    {
        console.log("uploadFailed");
    }
}