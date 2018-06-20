(function() {

  function deckbuilderController($http) {
    var cartas = this;
    cartas.listaByClass;

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

    getByClass('Hunter');

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

    //falta criar os filtros

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


      <div>
        <!-- corresponde a escolha de classe  -->
        <h2>
          Escolha sua classe
        </h2>
        <div>
          <a href=""> <img src="imagens/Anduin_Wrynn.png" alt="Classe Sacerdote"> </a>
          <a href=""> <img src="imagens/Garrosh_Hellscream.png" alt="Classe Sacerdote"> </a>
          <a href=""> <img src="imagens/Jaina_Proudmoore.png" alt="Classe Sacerdote"> </a>
          <a href=""> <img src="imagens/Malfurion_Stormrage.png" alt="Classe Sacerdote"> </a>
          <a href=""> <img src="imagens/Rexxar.png" alt="Classe Sacerdote"> </a>
          <a href=""> <img src="imagens/valeera-sanguinar.png" alt="Classe Sacerdote"> </a>
        </div>
      </div>

      <div>
        <label for="">Buscar carta
          <input type="text">
        </label>
      </div>

      <!--  zzzzzzzzzzzzzzzzzzzzzzz Filtros zzzzzzzzzzzzzzzzzzzz -->

      <!--  zzzzzzzzzzzzzzzzzzzzzzz Filtros zzzzzzzzzzzzzzzzzzzz -->


      <div>
        <!-- filtros -->
        <label for="">Mecânica
          <select name="" id=""></select>
        </label>

        <label for="">Raridade
          <select name="" id=""></select>
        </label>

        <label for="">Tipo
          <select name="" id=""></select>
        </label>

        <label for="">Formato
          <select name="" id=""></select>
        </label>

        <label for="">Mana
          <select name="" id=""></select>
        </label>

        <label for="">Raça
          <select name="" id=""></select>
        </label>

        <label for="">Conjunto
          <select name="" id=""></select>
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
          <div>
              <p> {{ nome }} quantidade </p>
          </div>
              <p> custo </p> <img src="" alt=""> <!-- ícone de mana -->
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
          <img ng-repeat="carta in $ctrl.listaByClass | filter:  track by $index" src="{{ carta.img }}">
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
    `
  });
})();
