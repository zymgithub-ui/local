//控制所有控制器间的数据传输和模型更新
app.controller('RootController', function($scope){
	//广播微博数据
	$scope.$on('weiboDataUp', function(e, data) { 
        $scope.$broadcast('weiboDataDown', data);
    });
});
