define(function (require, exports) {

    return ['$rootScope', '$scope', '$http', '$location', function($rootScope, $scope, $http, $location){

        // 攻略列表
        $http.post('/getExhibitList').success(function(data){

            if(data.err){
            return $scope.err = data.err;
            }

            var exhibitList = data;

            // 大列表
            exhibitList = exhibitList.sort(function(a, b){
            var x = a.eid || 0,
            y = b.eid || 0;
            return y - x;
            });
            $scope.exhibitList = exhibitList;
            masonryExhibitList();
        });

    }];
  
});