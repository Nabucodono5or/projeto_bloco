(function () {

  angular.module('app', ['angular-loading-bar','component','common', 'ui.router','ui.bootstrap', 'ngAnimate']);

})();

(function () {
  angular.module('app').config(function($stateProvider, $urlRouterProvider) {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: '/',
      component: 'homecomp',
      resolve: {
        'title': ['$rootScope', function($rootScope){
          $rootScope.title = "Home | Coleção de cartas Hearthstone";
        }],
      }
    }).state('deckbuilder', {
      url: '/deckbuilder',
      component: 'deckbuildercomp',
      resolve: {
        'title': ['$rootScope', function($rootScope){
          $rootScope.title = "DeckBuilder | Coleção de cartas Hearthstone";
        }],
      }
    });

  });

})();


(function () {
  angular.module('app').run(['$rootScope', function($rootScope){

    $rootScope.$on('$stateChangeStart', 
      function(event, toState, toParams, fromState, fromParams){ 
          $rootScope.stateIsLoading = true;
    });

    $rootScope.$on('$stateChangeSuccess', 
      function(event, toState, toParams, fromState, fromParams){
          $rootScope.stateIsLoading = false;
    });

  }]); 
  
})();


