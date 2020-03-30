// 使用默认路由
var app = angular.module("app",['ui.router','pascalprecht.translate']);

//注册路由
app.config(function ($stateProvider, $urlRouterProvider, $translateProvider)
{
	//注册路由
    $urlRouterProvider
    	.when("", "/login")
    		.when("/", "/login");
    $stateProvider.state("login", {
        url: '/login',
        templateUrl: '/framework/src/view/login.html',
        controller: 'loginCtr'
    }).state('index', {
        url: '/index',
        templateUrl: '/framework/src/view/index.html',
        controller: 'indexCtr'
    })
    
    //加载json文件：$translateProvider.useStaticFilesLoader()这个方法非常重要：
    $translateProvider.useStaticFilesLoader({
         prefix:'/framework/locale/locale-',
         suffix:'.json'
    });
    //设置默认的语言
    $translateProvider.preferredLanguage('zh');
});

//顶级作用于
app.controller("appCtr",function($scope,$location,$http) {
    $scope.validate = function (data)
    {
        $http({
            method : 'GET',
            url : '/rest/validate'
        }).then(function successCallback(response) {
        	var data = response.data;
        	console.log(data);
        	if (data && data.type != "ERROE")
    		{
        		$location.path("/index");
    		}
        	else if (data && data.type === "ERROE")
    		{
        		console.log(data);
        		$location.path("/login");
    		}
        }, function errorCallback(response) {
 			console.log(data);
        });
    }
    // 获取用户信息
    $scope.validate();
});
