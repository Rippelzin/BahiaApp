<template>
  <q-page>
    <div v-for="(section, key, index) in diarySection" :key="index">
      <div v-if="index + 1 == fase" class="page">
        <div class="tituloDiario">{{ section.titulo }}</div>

        <div class="section1">
          <p class="paragrafo">{{ section.text1 }}</p>
          <img :src="section.imagem1" alt="" class="imagem1" />
        </div>

        <div class="section1">
          <img :src="section.imagem2" alt="" class="imagem1" />
          <p class="paragrafo">{{ section.text2 }}</p>
        </div>
      </div>
    </div>
    <div class="centerBotao">
      <button @click="goToGame" class="botaoQuiz">ir para o QUIZ</button>
    </div>
  </q-page>
</template>

<script>
export default {
  props: {
    diarySection: Object,
    fase: Number,
  },
  methods: {
    goToGame() {
      this.$emit("goToGame");
    },
  },
};
</script>
<style>
.tituloDiario {
  margin-left: 20vh;

  margin-right: 20vh;
  background-color: white;
  font-family: "Comic Sans MS", cursive; /* Fonte infantil (substitua por sua preferida) */
  font-size: 70px;
  text-align: center;
  margin-bottom: 10vh;
  color: #0077cc; /* Azul principal */
}
.page {
  display: grid;
  justify-content: center;
  align-items: center;
}
.section1 {
  display: flex;

  margin-left: 10vh;
  margin-right: 10vh;

  background-color: rgba(255, 255, 255, 0.718);
}
.paragrafo {
  text-indent: 50px;
  font-size: 20px;
  font-family: "Comic Sans MS", cursive; /* Fonte infantil (substitua por sua preferida) */
  color: #000000; /* Azul principal */
  text-align: left;
  line-height: 1.2; /* Adjust vertical spacing */
  word-spacing: 2px; /* Adjust horizontal spacing between words */
}
.imagem1 {
  height: 50vh;
}
.botaoQuiz {
  margin-top: 10vh;
  display: inline-block;
  padding: 10px 20px;
  font-size: 50px;
  height: 100px;
  font-family: "Comic Sans MS", cursive; /* Fonte infantil (substitua por sua preferida) */
  text-decoration: none;
  color: #fff;
  background-color: #4caf50; /* Cor de fundo do botão (verde) */
  border-radius: 5px;
  transition: 1s ease; /* Adicionando transição para suavizar a mudança de cor */
  border: transparent;
}
.botaoQuiz:hover {
  background-color: rgb(164, 164, 4); /* Mudança de cor ao passar o mouse */
  border: 5px solid white;
}
.centerBotao {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
