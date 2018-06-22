(function () {

  function homeController() {

    this.decksPopulares = [
      {
        nome: "Handbuff Paladin feat Val’Anyr (guide added)",
        tipo: "Paladin"
      },
      {
        nome: "abspacers ODD Quest – Health Poker Priest –",
        tipo: "Priest"
      },
      {
        nome: "Much’s Hand Token Druid",
        tipo: "Druid"
      },
      {
        nome: "Yogg Tempo Mage (Deck of Wonders Edition)",
        tipo: "Mage"
      },
      {
        nome: "Dean’s #4 Legend Renolock – S51 (June2018)",
        tipo: "Warlock"
      }

    ];

    this.novosDecks = [
      {
        nome: "Battlecry Shudderwock Combo Shaman Deck List Guide – Witchwood – June 2018",
        tipo: "Paladin"
      },

      {
        nome: "Token Druid Deck List Guide – Post Nerf: Witchwood – June 2018",
        tipo: "Druid"
      },

      {
        nome: "Mind Blast Control Priest Deck List Guide – Post Nerf: Witchwood – June 2018",
        tipo: "Priest"
      },

      {
        nome: "Cubelock Deck List Guide – Post Nerf: Witchwood – June 2018",
        tipo: "Warlock"
      },

      {
        nome: "Miracle Rogue Deck List Guide – Post Nerf: Witchwood – June 2018",
        tipo: "Rogue"
      }

    ];

    this.cardsPopulares = [
      "Savage Roar",
      "Swipe",
      "Violet Teacher",
      "Leeroy Jenkins",
      "Hex",
      "Hagatha the witch"
    ];

    this.cardsCarregados = [
      {

      }
    ]

  }

  homeController.$inject = [];
  angular.module('home').controller('homeController', homeController);

  angular.module('home').component('homecomp', {
    controller: homeController,
    template: `
    <div class="">
      <div class="">
        <h3>Cartas mais usadas</h3>
      </div>
      <div class="">
        <div class="" ng-repeat="">
          <a href="#"></a>
        </div>
      </div>

      <div class="">
        <h3>Decks mais populares</h3>
      </div>
      <div class="">
        <div class="" ng-repeat="deck in $ctrl.decksPopulares">
          <a href="#">{{ deck.nome }}</a>
        </div>

      </div>

      <div class="">
        <h3>Novos decks</h3>
      </div>
      <div class="">
        <div class="" ng-repeat="deck in $ctrl.novosDecks">
          <a href="#">{{ deck.nome }}</a>
        </div>
      </div>


    </div>
`,
  });
})();
