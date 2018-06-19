(function () {
  angular.module('navbar').component('navbarcomp',{
    template: `<nav class="navbar navbar-default navbar-static-top navbar-fixed-top main-navigation"
         tooltip-placement="bottom-left"
         uib-tooltip="Barra principal" ng-init="$ctrl.isNavBarCollapsed = true">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button"
                  class="navbar-toggle collapsed"
                  ng-click="$ctrl.isNavBarCollapsed = !$ctrl.isNavBarCollapsed">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

        </div>
        <div id="navbar"
             class="navbar-collapse collapse"
             uib-collapse="$ctrl.isNavBarCollapsed">
          <ul class="nav navbar-nav">
            <li ui-sref-active="active"><a ui-sref="deckbuilder" class="text-titulo">DeckBuilder</a></li>
          </ul>
        </div>
      </div>
    </nav>`
  });

})();
