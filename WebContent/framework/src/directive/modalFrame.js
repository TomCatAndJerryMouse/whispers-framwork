///**
// * 定义弹出框模块
// */
	
app.directive('promptBox',
	function promptBox(){
		return {
			restrict:"E",
	        templateUrl: '/ui/view/modalFrame/frame.html',
	        replace: false,
	        scope:false
		}
	}
);