(function () {
  angular.module('app').component('appcomp',{
    template: `
      <navbarcomp></navbarcomp>
      <ui-view></ui-view>
    `
  });
})();
