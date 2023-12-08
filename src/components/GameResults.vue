<template>
  <q-page class="flex flex-center">
    <div class="resultsAll">
      <div class="divTitulo">
        <h1 class="titulo">Seu Resultado:</h1>
      </div>

      <div v-if="results" class="aprovado">
        <div>Parabens voce passou de fase!</div>
      </div>
      <div v-else class="reprovado">
        Infelizmente voce nao passou, dicas para o Quiz se encontram no Diario
      </div>
      <button @click="goToMap" class="botaoMapa">Go To MAP</button>
    </div>
  </q-page>
</template>
<script>
export default {
  props: {
    results: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    goToMap() {
      this.$emit("goToMap");
      console.log(this.results);
    },
  },
};
</script>
<style>
.resultsAll {
  display: grid;
}

.titulo {
  color: #0077cc; /* Azul principal */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Sombra suave */
  font-family: "Comic Sans MS", cursive; /* Fonte infantil (substitua por sua preferida) */
  text-align: center; /* Centralizar o texto */
  padding: 0px; /* Espaçamento interno */

  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Cor de fundo para destacar o texto */
  font-size: 10vh;
  border-radius: 20px;
}
.reprovado {
  text-align: center; /* Centralizar o texto */
  font-family: "Comic Sans MS", cursive; /* Fonte infantil (substitua por sua preferida) */
  background-color: rgb(220, 151, 151);
  font-size: 5vh;
  color: #cc0033; /* Cor do texto (um tom de vermelho) */
  border-radius: 50px;
  margin: 30px; /* Remover margens padrão */
  padding: 5px; /* Espaçamento interno */
  margin-top: 0%;
}
.aprovado {
  text-align: center; /* Centralizar o texto */
  font-family: "Comic Sans MS", cursive; /* Fonte infantil (substitua por sua preferida) */
  background-color: rgb(162, 210, 162);
  border-radius: 50px;
  font-size: 5vh;
  color: #0f8e04; /* Cor do texto (um tom de vermelho) */
  margin: 30px; /* Remover margens padrão */
  padding: 5px; /* Espaçamento interno */
  margin-top: 0%;
}

.botaoMapa {
  margin-top: -2%;
  display: inline-block;
  padding: 10px 20px;
  font-size: 15vh;
  height: 20vh;
  font-family: "Comic Sans MS", cursive; /* Fonte infantil (substitua por sua preferida) */
  text-decoration: none;
  color: #fff;
  background-color: #4caf50; /* Cor de fundo do botão (verde) */
  border-radius: 5px;
  transition: 1s ease; /* Adicionando transição para suavizar a mudança de cor */
  border: transparent;
}
.botaoMapa:hover {
  background-color: rgb(213, 196, 6); /* Mudança de cor ao passar o mouse */
  border: 5px solid white;
}
</style>
