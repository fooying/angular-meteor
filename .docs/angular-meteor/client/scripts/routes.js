angular.module("meteor-angular-docs").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'client/views/main.ng.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'client/views/about.ng.html'
      })
      .state('manifest', {
        url: '/manifest',
        templateUrl: 'client/views/manifest.ng.html'
      })
      .state('api', {
        url: '/api',
        templateUrl: 'client/views/api.ng.html'
      })

      .state('tutorial', {
        abstract: true,
        url: '/tutorial',
        templateUrl: 'client/views/tutorial.ng.html',
        controller: 'TutorialCtrl'
      })
        .state('tutorial.intro', {
          url: '',
          templateUrl: 'client/views/tutorial.intro.ng.html'
        })
        .state('tutorial.step00', {
          url: '/step_00',
          templateUrl: 'client/views/steps/tutorial.step_00.ng.html'
        })

        .state('tutorial.step02', {
          url: '/step_02',
          templateUrl: 'client/views/steps/tutorial.step_02.ng.html'
        })

        .state('tutorial.step04', {
          url: '/step_04',
          templateUrl: 'client/views/steps/tutorial.step_04.ng.html'
        })
        .state('tutorial.step05', {
          url: '/step_05',
          templateUrl: 'client/views/steps/tutorial.step_05.ng.html'
        })

        .state('tutorial.step09', {
          url: '/step_09',
          templateUrl: 'client/views/steps/tutorial.step_09.ng.html'
        })
        .state('tutorial.step10', {
          url: '/step_10',
          templateUrl: 'client/views/steps/tutorial.step_10.ng.html'
        })
        .state('tutorial.step11', {
          url: '/step_11',
          templateUrl: 'client/views/steps/tutorial.step_11.ng.html'
        })
        .state('tutorial.step12', {
          url: '/step_12',
          templateUrl: 'client/views/steps/tutorial.step_12.ng.html'
        })
        .state('tutorial.step13', {
          url: '/step_13',
        templateUrl: 'client/views/steps/tutorial.step_13.ng.html'
        })
        .state('tutorial.step14', {
          url: '/step_14',
        templateUrl: 'client/views/steps/tutorial.step_14.ng.html'
        })
        .state('tutorial.step15', {
          url: '/step_15',
        templateUrl: 'client/views/steps/tutorial.step_15.ng.html'
        })
        ;

    $locationProvider.html5Mode(true);
  }]);
