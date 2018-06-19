(function () {
  function deckbuilderController() {

  }

  deckbuilderController.$inject = [];
  angular.module('deckbuilder').controller('deckbuilderController', deckbuilderController);

  angular.module('deckbuilder').component('deckbuildercomp', {
    template: `
    <p>DeckBuilder</p>
    `
  });
})();
