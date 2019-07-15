//使用默认路由
var app = angular.module("app",['ui.router','pascalprecht.translate']);
//注册路由
app.config(function ($stateProvider, $urlRouterProvider, $translateProvider)
{
	//注册路由
    $urlRouterProvider
    	.when("", "/lgoin")
    		.when("/", "/lgoin");
    $stateProvider.state("lgoin", {
        url: '/lgoin',
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
