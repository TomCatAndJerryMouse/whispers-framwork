app.controller("loginCtr",function($scope,$location,$http) {
        $scope.code = Math.ceil(Math.random()*10);
        $scope.showLoginErrorTips = false;
        $scope.login = function (data)
        {
        	var user = {"username":$scope.username,"pwd":$scope.pwd};
            $http({
                method : 'POST',
                url : '/user/login',
                data : user
            }).then(function successCallback(response) {
    			console.log(data);
    		    $location.path("/index");
            }, function errorCallback(response) {
            	$scope.showLoginErrorTips = true;
     			console.log(data);
            });
    	}
});