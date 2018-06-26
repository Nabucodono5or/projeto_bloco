(function () {
  angular.module('app').component('appcomp',{
    template: `
      <navbarcomp></navbarcomp>
      <div class="ui-resolve marginTopExtra" ng-show="stateIsLoading"></div>
      <ui-view ng-hide="stateIsLoading"></ui-view>
    `
  });
})();
