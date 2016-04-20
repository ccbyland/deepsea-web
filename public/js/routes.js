define(['app', 
    'controllers/indexControl',
    'controllers/talkControl',
    'controllers/raidersControl',
    'controllers/travelControl',
    'controllers/informationControl'
    ], function (app, indexControl, talkControl, raidersControl, travelControl, informationControl) {

        return app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

            $routeProvider.
                when('/', {templateUrl:'tpl/index.html', controller:indexControl}).
                when('/talk', {templateUrl:'tpl/talk.html', controller:talkControl}).
                when('/raiders', {templateUrl:'tpl/raiders.html', controller:raidersControl}).
                when('/travel', {templateUrl:'tpl/travel.html', controller:travelControl}).
                when('/information', {templateUrl:'tpl/information.html', controller:informationControl}).
                otherwise({redirectTo:'/'});

            $locationProvider.html5Mode(true);
        }]);
    });