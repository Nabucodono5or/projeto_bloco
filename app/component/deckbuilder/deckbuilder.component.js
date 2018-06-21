(function() {

  function deckbuilderController($http) {
    this.classeEscolhida = false;
    var cartas = this;
    this.myDeck = [];
    cartas.listaByClass;
    this.sets =  [
          "",
        "Basic",
        "Classic",
        "Naxxramas",
        "Goblins vs Gnomes",
        "Blackrock Mountain",
        "The League of Explorers",
        "Knights of the Frozen Throne",
        "Journey to Un'Goro",
        "One Night in Karazhan",
        "Whispers of the Old Gods",
        "The Witchwood",
        "Kobolds & Catacombs",
        "The Grand Tournament"
      ]

        this.raridade =  [
        "Free",
        "Common",
        "Rare",
        "Epic",
        "Legendary"
      ]

      this.tipos = [
       "Hero",
       "Minion",
       "Spell",
       "Weapon"
     ]

     this.mana = [
       1, 2, 3, 4, 5, 6, 7, 8, 9, 10
     ]

    this.raca =  [
        "",
        "Demon",
        "Dragon",
        "Mech",
        "Murloc",
        "Beast",
        "Pirate",
        "Totem"
      ]

    this.formatos = [
      {
        name: "standard",
        values: [
          "Classic",
          "Kobolds & Catacombs",
          "The Witchwood",
          "Knights of the Frozen Throne",
          "Journey to Un'Goro"
        ]
      },
      {
        name: "wild",
        values: [
          "Basic",
          "Classic",
          "Naxxramas",
          "Goblins vs Gnomes",
          "Blackrock Mountain",
          "The League of Explorers",
          "Knights of the Frozen Throne",
          "Journey to Un'Goro",
          "One Night in Karazhan",
          "Whispers of the Old Gods",
          "The Witchwood",
          "Kobolds & Catacombs",
          "The Grand Tournament"
        ]
      }
    ]


    function getByClass(classe) {
      let baseUrl = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/" + classe;

      $http.get(baseUrl, {
        headers: {
          'X-Mashape-Key': '4CHqGYa6nHmshNfnozNiJO9OZB7kp1ad8UgjsnV2SjQzO4fBqS'
        }
      }).then(function(response) {
        cartas.listaByClass = response.data;
        console.log(cartas.listaByClass);
      }, function(err) {
        console.log(err);
      });

    }

    this.clickEscolhaDaClasse = (classe) => {
      this.classeEscolhida = true;
      getByClass(classe);
    }

    // isso tem de ser eleiminado
    //getByClass('Hunter');

    function getNeutral() {
      let classe = "Neutral"
      let baseUrl = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/" + classe;

      $http.get(baseUrl, {
        headers: {
          'X-Mashape-Key': '4CHqGYa6nHmshNfnozNiJO9OZB7kp1ad8UgjsnV2SjQzO4fBqS'
        }
      }).then(function(response) {
        cartas.lista = response.data;
      }, function(err) {
        console.log(err);
      });

    }


    this.clickAdd = (carta) => {
      if(!this.limiteDeCartas(this.myDeck.length) && !this.cartaRepetida(carta)){
        this.myDeck.push(carta);
      }

      console.log(carta.name);
    }

    this.clickRemove = (index) => {
      console.log(index);
      this.myDeck.splice(index,1);
    }

    this.limiteDeCartas = (tamanhoLista) => {
      if(tamanhoLista === 40){
        return true;
      }else {
        return false;
      }
    }

    this.cartaRepetida = (carta) => {
      let limite = 0;

      for (let i = 0; i < this.myDeck.length; i++) {
        if(this.myDeck[i] == carta){
          limite++;
        }
      }

      if(limite >1){
        return true;
      }

      return false;
    }

  }

  deckbuilderController.$inject = ['$http'];
  angular.module('deckbuilder').controller('deckbuilderController', deckbuilderController);

  angular.module('deckbuilder').component('deckbuildercomp', {
    controller: deckbuilderController,
    template: `
    <div>

        <h2>DeckBuilder</h2>
        <div>
          <p>
            texto explicativo
          </p>
        </div>

        <!--  zzzzzzzzzzzzzzzzzzzzzzz escolha da classe zzzzzzzzzzzzzzzzzzzz -->

        <!--  zzzzzzzzzzzzzzzzzzzzzzz escolha da classe zzzzzzzzzzzzzzzzzzzz -->


      <div ng-show="!$ctrl.classeEscolhida" >
        <!-- corresponde a escolha de classe  -->
        <h2>
          Escolha sua classe
        </h2>
        <div>
          <a href="" ng-click="$ctrl.clickEscolhaDaClasse('')"> <img src="imagens/Anduin_Wrynn.png" alt="Classe Sacerdote"> </a>
          <a href="" ng-click="$ctrl.clickEscolhaDaClasse('')"> <img src="imagens/Garrosh_Hellscream.png" alt="Classe Guerreiro"> </a>
          <a href="" ng-click="$ctrl.clickEscolhaDaClasse('')"> <img src="imagens/Jaina_Proudmoore.png" alt="Classe Mago"> </a>
          <a href="" ng-click="$ctrl.clickEscolhaDaClasse('')"> <img src="imagens/Malfurion_Stormrage.png" alt="Classe Druida"> </a>
          <a href="" ng-click="$ctrl.clickEscolhaDaClasse('Hunter')"> <img src="imagens/Rexxar.png" alt="Classe Caçador"> </a>
          <a href="" ng-click="$ctrl.clickEscolhaDaClasse('')"> <img src="imagens/valeera-sanguinar.png" alt="Classe Ladino"> </a>
        </div>
      </div>

      <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxx parte de classe xxxxxxxxxxxxxxxxxxxxxxxxxxx -->

      <div ng-show="$ctrl.classeEscolhida">
      <div>
        <label for="">Buscar carta
          <input type="text">
        </label>
      </div>

      <!--  zzzzzzzzzzzzzzzzzzzzzzz Filtros zzzzzzzzzzzzzzzzzzzz -->

      <!--  zzzzzzzzzzzzzzzzzzzzzzz Filtros zzzzzzzzzzzzzzzzzzzz -->


      <div>
        <!-- filtros -->

        <label for="raridade">Raridade
          <select name="raridade" id="" ng-model="selectedRarity" ng-options="rarity for rarity in $ctrl.raridade"></select>
        </label>

        <label for="tipo">Tipo
          <select name="tipo" id="" ng-model="selectedType" ng-options="type for type in $ctrl.tipos"></select>
        </label>

        <label for="">Mana
          <select name="mana" id="" ng-model="selectedMana" ng-options="cost for cost in $ctrl.mana" ></select>
        </label>

        <label for="raca">Raça
          <select name="raca" id="" ng-model="selectedRaca" ng-options="race for race in $ctrl.raca"></select>
        </label>

        <label for="conjunto">Conjunto
          <select name="conjunto" ng-model="selectedSet" ng-options="set for set in $ctrl.sets" ></select>
        </label>

      </div>

      <!--  zzzzzzzzzzzzzzzzzzzzzzz tabela lateral zzzzzzzzzzzzzzzzzzzz -->

      <!--  zzzzzzzzzzzzzzzzzzzzzzz tabela lateral zzzzzzzzzzzzzzzzzzzz -->

      <div>
        <div>
          <!--titulo do baralho-->
          <p>Deck de {{ classe }} </p>
        </div>

        <div>
          <div>
            <p>Nome</p>
          </div>

          <div>
            <p>Custo</p>
          </div>
        </div>


        <div >
          <!-- lista de cartas -->
          <!-- baseado hearthstone pwn  -->
          <div ng-click="$ctrl.clickRemove($index)" ng-repeat="carta in $ctrl.myDeck track by $index">
              <div> <p> {{ carta.name }} </p></div>
              <div> {{ carta.cost }} </div>
          </div>
        </div>


        <div>
          <!-- tabela de mana-->
          <!-- fazer um teste disso amanhã de forma isolada-->
          <div>

          </div>
        </div>
      </div>

      <!--  zzzzzzzzzzzzzzzzzzzzzzz tabela lateral zzzzzzzzzzzzzzzzzzzz -->

      <!--  zzzzzzzzzzzzzzzzzzzzzzz tabela lateral zzzzzzzzzzzzzzzzzzzz -->


      <div class="">
        <div class="">
          <img ng-click="$ctrl.clickAdd(carta)" ng-repeat="carta in $ctrl.listaByClass | filter: { cardSet: selectedSet, rarity: selectedRarity, type: selectedType, cost: selectedMana, race: selectedRaca } track by $index" src="{{ carta.img }}">
        </div>
      </div>


      <!--  zzzzzzzzzzzzzzzzzzzzzzz botões zzzzzzzzzzzzzzzzzzzz -->

      <!--  zzzzzzzzzzzzzzzzzzzzzzz botões zzzzzzzzzzzzzzzzzzzz -->


      <div>
        <!-- botões de salvamento e volta a escolha da classe -->
        <button>Voltar</button>
        <button>Salvar</button>
      </div>

      </div>

    </div>
    `
  });
})();
