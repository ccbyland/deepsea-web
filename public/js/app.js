define(['angular', 'moveTop', 'easing'], function (angular) {

    var pathname = location.pathname;
    var pname = pathname.substring(1) || 'index';

    $('div.header').find('li[class='+ (pname + '_nav') +']').addClass('active');

    $('div.header').on('click', 'li', function(){

        $(this).addClass('active').siblings().removeClass('active');
    });

    // 置顶
    $('#toTop').UItoTop({ easingType: 'easeOutQuart' });

    return angular.module('app', []);
});