require.config({

    paths: {    
        'angular'           : '../lib/angular',
        'moveTop'           : '../plugins/move-top',//回到顶部
        'easing'            : '../plugins/easing',//动画扩展
        'jquery.lazyload'   : '../plugins/jquery.lazyload',//延迟加载
        'jquery.swipebox'   : '../plugins/swipebox/jquery.swipebox.min'//幻灯片
    },
    shim: {
        'angular'               : { exports :   'angular'},
        'moveTop'               : { deps    :   ['angular']},
        'easing'                : { deps    :   ['angular']},
        'jquery.lazyload'       : { deps    :   ['angular']},
        'jquery.swipebox'       : { deps    :   ['angular']}
    },
    urlArgs: 'v=' + new Date().getTime()
});

require(['angular',
        'app',
        'routes',
        'moveTop',
        'easing'], function (angular) {

    // 手动注册加载模块
    angular.bootstrap(document, ['app']);
});