app.service("happyFarmServce",function($http,$q)
{
    //获取所有期数
	this.getAllPhases = function()
    {
		var defer = $q.defer();
        $http({
            method : 'GET',
            url : '/fram/get'
        }).then(function successCallback(response) {
        	defer.resolve(response.data);
        }, function errorCallback(response) {
 			console.log(response);
        });
        return defer.promise;
    }
    
    //添加期数
    this.addPhases = function(phase)
    {
    	var defer = $q.defer();
        $http({
            method : 'POST',
            url : '/fram/add',
            data : phase
        }).then(function successCallback(response) {
        	defer.resolve();
        }, function errorCallback(response) {
 			console.log(response);
        });
        return defer.promise;
    }

    //查询期数
    this.getNewPhases = function()
    {
    	var defer = $q.defer();
        $http({
            method : 'get',
            url : '/fram/get/newpaase'
        }).then(function successCallback(response) {
        	defer.resolve(response.data);
        }, function errorCallback(response) {
        	defer.resolve(response);
 			console.log(response);
        });
        return defer.promise;
    }
    
	this.alertError = function (message)
	{
		alertContentMsg = message;
    	$('#myModal').modal('show');
	}
	
	this.alertAddPhaseFrame = function (message)
	{
		alertContentMsg = message;
    	$('#myModal').modal('show');
	}
	
	this.closeAddPhaseFrame = function (message)
	{
		alertContentMsg = message;
    	$('#myModal').modal('hide');
	}
});