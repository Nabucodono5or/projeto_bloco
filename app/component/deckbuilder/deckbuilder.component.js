(function() {

  function deckbuilderController($http) {
    this.classeEscolhida = false;
    var cartas = this;
    this.proibido = "Hero Power";
    this.myDeck = [];
    getNeutral();
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
      cartas.listaByClass = [];
      cartas.myDeck = [];
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
      this.classeTipo = classe;
      getByClass(classe);
    }

    this.clickRetorno = () => {
      this.classeEscolhida = false;

    }

    this.salvar = () => {
      alert('Para salvar é preciso está logado, por favor log no site antes de qualquer coisa');
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

        <h2 class="tituloDeckBuilder marginTopExtra">DeckBuilder</h2>
        <div class="paddingCards panel panel-default">
          <p class="textoExplicativo">
          Deckbuider é uma ferramenta usada para você criar qualquer tipo de deck de hearthstone, e isso se presume a decks de contendas, decks considerados absurdos, enfim todo o tipo de deck, contudo para salvar os decks é preciso está logado. 
          </p>
          <p class="textoExplicativo">
          Para começar a montar seu deck, escolha sua classe e depois click em cada carta. As regras do jogo serão as mesmas usadas aqui na limitação da criação dos deck’s.
          </p>
        </div>

        <!--  zzzzzzzzzzzzzzzzzzzzzzz escolha da classe zzzzzzzzzzzzzzzzzzzz -->

        <!--  zzzzzzzzzzzzzzzzzzzzzzz escolha da classe zzzzzzzzzzzzzzzzzzzz -->


      <div class="panel panel-defualt" ng-show="!$ctrl.classeEscolhida" >
        <!-- corresponde a escolha de classe  -->
        <h2 class="paddingCards tituloCards">
          Escolha sua classe
        </h2>
        <div class="row paddingPaineis">
          <a href="" ng-click="$ctrl.clickEscolhaDaClasse('Warrior')"> <img uib-tooltip="Classe Guerreiro" class="col-md-3 col-sm-6 col-xs-12" ng-src="app/component/deckbuilder/imagens/Garrosh_Hellscream.png" alt="Classe Guerreiro"> </a>
          <a href="" ng-click="$ctrl.clickEscolhaDaClasse('Mage')"> <img uib-tooltip="Classe Mago" class="col-md-3 col-sm-6 col-xs-12" ng-src="app/component/deckbuilder/imagens/Jaina_Proudmoore.png" alt="Classe Mago"> </a>
          <a href="" ng-click="$ctrl.clickEscolhaDaClasse('Druid')"> <img uib-tooltip="Classe Druída" class="col-md-3 col-sm-6 col-xs-12" ng-src="app/component/deckbuilder/imagens/Malfurion_Stormrage.png" alt="Classe Druida"> </a>
          <a href="" ng-click="$ctrl.clickEscolhaDaClasse('Hunter')"> <img uib-tooltip="Classe Caçador" class="col-md-3 col-sm-6 col-xs-12" ng-src="app/component/deckbuilder/imagens/Rexxar.png" alt="Classe Caçador"> </a>
          <a href="" ng-click="$ctrl.clickEscolhaDaClasse('Rogue')"> <img uib-tooltip="Classe Ladino" class="col-md-3 col-sm-6 col-xs-12" ng-src="app/component/deckbuilder/imagens/valeera-sanguinar.png" alt="Classe Ladino"> </a>
          <a href="" ng-click="$ctrl.clickEscolhaDaClasse('Warlock')"> <img uib-tooltip="Classe Bruxo" class="col-md-3 col-sm-6 col-xs-12" ng-src="app/component/deckbuilder/imagens/Guldan.png" alt="Classe Bruxo"> </a>
          <a href="" ng-click="$ctrl.clickEscolhaDaClasse('Shaman')"> <img uib-tooltip="Classe Xamã" class="col-md-3 col-sm-6 col-xs-12" ng-src="app/component/deckbuilder/imagens/Shaman.png" alt="Classe Xamã"> </a>
          <a href="" ng-click="$ctrl.clickEscolhaDaClasse('Paladin')"> <img uib-tooltip="Classe Paladino" class="col-md-3 col-sm-6 col-xs-12" ng-src="app/component/deckbuilder/imagens/Paladin.png" alt="Classe Paladino"> </a>
        </div>
      </div>

      <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxx parte de classe xxxxxxxxxxxxxxxxxxxxxxxxxxx -->

      <div class="panel panel-default paddingCards" ng-show="$ctrl.classeEscolhida">
      <div class="form-group">
        <label for="busca">Buscar carta <span class="glyphicon glyphicon-search"></span>
          <input class="form-control" name="busca" type="text" ng-model="buscaDoUsuario">
        </label>
      </div>

      <!--  zzzzzzzzzzzzzzzzzzzzzzz Filtros zzzzzzzzzzzzzzzzzzzz -->

      <!--  zzzzzzzzzzzzzzzzzzzzzzz Filtros zzzzzzzzzzzzzzzzzzzz -->


      <div class="panel panel-default paddingCards form-group marginExtra">
        <!-- filtros -->

        <label for="raridade">Raridade
          <select class=" form-control" name="raridade" id="" ng-model="selectedRarity" ng-options="rarity for rarity in $ctrl.raridade"></select>
        </label>

        <label for="tipo">Tipo
          <select class="form-control" name="tipo" id="" ng-model="selectedType" ng-options="type for type in $ctrl.tipos"></select>
        </label>

        <label for="">Mana
          <select class="form-control" name="mana" id="" ng-model="selectedMana" ng-options="cost for cost in $ctrl.mana" ></select>
        </label>

        <label for="raca">Raça
          <select class="form-control" name="raca" id="" ng-model="selectedRaca" ng-options="race for race in $ctrl.raca"></select>
        </label>

        <label for="conjunto">Conjunto
          <select class="form-control" name="conjunto" ng-model="selectedSet" ng-options="set for set in $ctrl.sets" ></select>
        </label>

      </div>

      <!--  zzzzzzzzzzzzzzzzzzzzzzz tabela lateral zzzzzzzzzzzzzzzzzzzz -->

      <!--  zzzzzzzzzzzzzzzzzzzzzzz tabela lateral zzzzzzzzzzzzzzzzzzzz -->

      <div>
        <div>
          <!--titulo do baralho-->
          <p class="tituloDeck">Deck de {{ $ctrl.classeTipo }} </p>
        </div>

        <div class="">
          <div class="row">
            <div class="tituloPanel col-xs-6 col-sm-3 col-md-3">
              <p>Nome</p>
            </div>

            <div class="tituloPanel col-xs-5 col-sm-2 col-md-2">
              <p>Custo</p>
            </div>
          </div>


          <div class="">
            <!-- lista de cartas -->
            <!-- baseado hearthstone pwn  -->
            <div uib-tooltip="clique nos nomes das caratas para tirá-las do deck" class="row" ng-click="$ctrl.clickRemove($index)" ng-repeat="carta in $ctrl.myDeck track by $index">
                <div ng-class="{lendario: carta.rarity == 'Legendary', epico: carta.rarity == 'Epic', raro: carta.rarity == 'Rare', comum: carta.rarity == 'Common'}" class="nomeCarta panelListaCards col-xs-6 col-sm-3 col-md-3"> <p> {{ carta.name }} </p></div>
                <div class="panelListaCards col-xs-6 col-sm-2 col-md-2"> {{ carta.cost }} </div>
            </div>
          </div>
        </div>


        <div>
          <!-- tabela de mana-->
          <!-- fazer um teste disso amanhã de forma isolada-->
          <div>

          </div>
        </div>

      <!--  zzzzzzzzzzzzzzzzzzzzzzz tabela lateral zzzzzzzzzzzzzzzzzzzz -->

      <!--  zzzzzzzzzzzzzzzzzzzzzzz tabela lateral zzzzzzzzzzzzzzzzzzzz -->


      <div class="panel panel-default col-xs-12 marginTopExtra">

      <uib-tabset active="active">
        
        <uib-tab index="0" heading="Cartas por Classe">
          <div class="row ex1 paddingPaineis">
            <img class="col-sm-3 col-md-3 col-xs-12" ng-click="$ctrl.clickAdd(carta)" ng-repeat="carta in $ctrl.listaByClass | filter: { cardSet: selectedSet, rarity: selectedRarity, type: selectedType, cost: selectedMana, race: selectedRaca, name: buscaDoUsuario } track by $index" ng-src="{{ carta.img }}">
          </div>
        </uib-tab> 

        <uib-tab index="1" heading="Cartas Neutras">
          <div class="row ex1 paddingPaineis">
            <img class="col-sm-3 col-md-3 col-xs-12" ng-click="$ctrl.clickAdd(carta)" ng-repeat="carta in $ctrl.lista | filter: { cardSet: selectedSet, rarity: selectedRarity, type: selectedType, cost: selectedMana, race: selectedRaca, name: buscaDoUsuario, img: '!!' } track by $index" ng-src="{{ carta.img }}">
          </div>
        </uib-tab> 
        
      </uib-tabset>

    </div>

      <!--  zzzzzzzzzzzzzzzzzzzzzzz botões zzzzzzzzzzzzzzzzzzzz -->

      <!--  zzzzzzzzzzzzzzzzzzzzzzz botões zzzzzzzzzzzzzzzzzzzz -->


      <div class="">
        <!-- botões de salvamento e volta a escolha da classe -->
        <button class="marginMiniTop col-sm-2 col-md-2 col-xs-12 btn btn-info" ng-click="$ctrl.clickRetorno()">Voltar</button>
        <button class="marginMiniTop col-sm-2 col-md-2 col-md-offset-1 col-sm-offset-1 col-xs-12 btn btn-warning" ng-click="$ctrl.salvar()">Salvar</button>
      </div>

      </div>

    </div>
    `
  });

})();
