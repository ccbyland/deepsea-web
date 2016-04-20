define(function (require, exports) {

    return ['$rootScope', '$scope', '$http', '$location', function($rootScope, $scope, $http, $location){

        require(['jquery.lazyload', 'jquery.swipebox'], function(){

            $('img.lazy').lazyload({
                skip_invisible : false,
                placeholder : "/images/load.jpg",  
                effect : "fadeIn",
                load:function(){

                    new Masonry($('#masonry')[0], {
                        columnWidth: 1, 
                        animate : true,
                        itemSelector: '.box'
                    });

                }
            });

            $(".swipebox").swipebox();
        });
    }];
});