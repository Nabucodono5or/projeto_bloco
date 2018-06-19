(function () {

  angular.module('app', ['component','common', 'ui.router','ui.bootstrap', 'ngAnimate']);

})();

(function () {
  angular.module('app').config(function($stateProvider, $urlRouterProvider) {
    "ngInject";

    //$urlRouterProvider.otherwise('/');
    $urlRouterProvider.otherwise('/deckbuilder');

    $stateProvider.state('home', {
      url: '/',
      component: ''
    }).state('deckbuilder', {
      url: '/deckbuilder',
      component: 'deckbuildercomp'
    });

    /*


    */

  });


})();
