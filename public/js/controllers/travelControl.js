define(function (require, exports) {

    return ['$rootScope', '$scope', '$http', '$location', function($rootScope, $scope, $http, $location){

        // 游记列表
        $http.post('/getTravelList').success(function(data){

            $('#loading').remove();

            if(data.err){
                return $scope.err = data.err;
            }

            $scope.travelList = data;
        });

    }];
  
});