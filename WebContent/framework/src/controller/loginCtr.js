app.controller("loginCtr",function($scope,$location,$http) {
        $scope.code = Math.ceil(Math.random()*10);
        $scope.showLoginErrorTips = false;
        $scope.login = function (data)
        {
        	var user = {"username":$scope.username,"pwd":$scope.pwd};
            $http({
                method : 'POST',
                url : '/rest/user/login',
                data : user
            }).then(function successCallback(response) {
            	var data = response.data;
            	if (data && data.type != "ERROE")
        		{
            		$location.path("/index");
        		}
            	else if (data && data.type === "ERROE")
        		{
            		if (data.code === "10002")
        			{
            			$scope.showLoginErrorTips = true;
            			console.log(data.code);
        			}
        		}
            }, function errorCallback(response) {
            	$scope.showLoginErrorTips = true;
            	$location.path("/login");
     			console.log(data);
            });
    	}
});