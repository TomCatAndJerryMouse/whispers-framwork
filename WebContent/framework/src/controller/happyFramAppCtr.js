app.controller("happyFramAppCtr",function($scope,$location,happyFarmServce) {
	
		//期数数据容器
        $scope.phases = "";
        
        //添加期数变量
        $scope.addPhase;
        
        //添加框
        $scope.frameAttr = {
        	frametitle : "添加期数",
        	cancle : "关闭",
        	concomf : "确定"
        };
        
        //获取所有期数
        $scope.getAllPhases = function()
        {
	    	happyFarmServce.getAllPhases().then(function(phasesDatas)
			{
	    		angular.forEach(phasesDatas,function(phaseData,index){
	    			//开奖结果对应界面共有20个数据格子，有结果的格子只有8个，为了好渲染界面，从后台查询回来的数据要还原成20个数据
	    			var alllotteryResults = new Array(["","","","","","","","","","","","","","","","","","","","20"])
	    	        angular.forEach(phaseData.lotteryResults,function(lr,index){
	    	        	alllotteryResults[lr-1] = lr;
	    	        });
	    			phaseData.lotteryResults = alllotteryResults;
	    	    });
	    		$scope.phases = phasesDatas;
			});
        }
        
        //添加期数
        $scope.addPhases = function(phase)
        {
        	happyFarmServce.addPhases($scope.addPhase).then(function(data)
			{
        		$scope.getAllPhases();
        		happyFarmServce.closeAddPhaseFrame();
			});
        }
        //获取奖期数据模型
        var phase = function (){
        		paase="";
        		firstThree=["","",""],
        		lotteryResults=["","","","","","","",""]
        		return {
        			paase: this.paase,
            		firstThree:this.firstThree,
            		lotteryResults:this.lotteryResults
        		}
        }
        //打开添加框
        $scope.openAddFrame = function ()
        {
        	//让模态框居中显示
        	$('#myModal').on('shown.bs.modal', function (e) {
                // 关键代码，如没将modal设置为 block，则$modala_dialog.height() 为零
                $(this).css('display', 'block');
                var modalHeight=$(window).height() / 2 - $('#myModal .modal-dialog').height() / 2;
                $(this).find('.modal-dialog').css({
                    'margin-top': modalHeight
                });
            });
        	$scope.addPhase = phase();
         	happyFarmServce.getNewPhases().then(function(newPaase){
         		console.log(newPaase);
         		$scope.addPhase.paase = newPaase;
        		happyFarmServce.alertAddPhaseFrame();
        	});
        }
        //检查输入
        $scope.check = function(value)
        {
        	console.log(value);
        	console.log($scope.addPhase);
        }
        //页面加载完成查询数据刷新页面
        $scope.$watch('$viewContentLoaded', function() {  
        	$scope.phases = $scope.getAllPhases();
        });
});