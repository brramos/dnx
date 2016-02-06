(function() {
  'use strict';

  angular.module('app').config(['$locationProvider, $urlRouterProvider', '$stateProvider',
    function ($locationProvider, $urlRouterProvider, $stateProvider) {
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');
      $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'app/home/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
          })
          .state('runner', {
            url: '/runner',
            templateUrl: 'app/runner/runner.html',
            controller: 'RunnerController',
            controllerAs: 'vm'
          });

    }]);

})();
