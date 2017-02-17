angular.module('app',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.when('','/')

    $urlRouterProvider.otherwise('/404')

    $stateProvider
    .state('home',{
      url: '/',
      templateUrl:'home/home.html',
      controller: 'homeCtrl'
    })
    .state('matchwords',{
        url:'/matchWords',
        templateUrl: 'matchWords/matchWords.html',
        controller: 'matchWordsCtrl'
    })
    .state('matchpics',{
        url: '/matchPics',
        templateUrl: 'matchPics/matchPics.html',
        controller: 'matchPicsCtrl'
    })
})