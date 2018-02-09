var app = angular.module('myApp', ['ui.router', 'ngCookies']); //, 'ngCookies'

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('/',{
            url: '/',
            template: '<h2>Home page</h2><h3>Welcome to home.....</h3>'
        })
        .state('manage',{
            url: '/manage',
            templateUrl: 'partials/manage.html',
            controller: 'manageCtrl',
        })
        .state('login',{
            url: '/login',
            templateUrl: 'partials/login.html',
            controller: 'loginCtrl'
        })        
        .state('isLogin',{
            url: '/isLogin',
            templateUrl: 'partials/isLogin.html',
            controller: 'isLogin',
        })
        .state('register',{
            url: '/register',
            templateUrl: 'partials/register.html',
            controller: 'registerCtrl'
        });
    $urlRouterProvider.otherwise('/');
});

app.run(function($state, $rootScope, authService, $cookieStore, $cookies, $location){
    $rootScope.authService = authService;
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      if($location.url() == "/isLogin" || $location.url() == "/manage"){
        //Your function code or function call goes here
        if($cookieStore.get('token')!= null){
            return true;
        }else{
            $state.go('/');
        }
      }
    });
});
