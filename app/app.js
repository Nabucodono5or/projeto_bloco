(function () {

  angular.module('app', ['component','common', 'ui.router','ui.bootstrap', 'ngAnimate']);

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
          $rootScope.title = "Home";
        }],
      }
    }).state('deckbuilder', {
      url: '/deckbuilder',
      component: 'deckbuildercomp',
      resolve: {
        'title': ['$rootScope', function($rootScope){
          $rootScope.title = "DeckBuilder";
        }],
      }
    });

    /*


    */

  });


})();
