(function () {
  angular.module('app').component('appcomp',{
    template: `
      <p> Olá mundo</p>
      <ui-view></ui-view>
    `
  });
})();
