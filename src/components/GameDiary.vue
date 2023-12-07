<template>
  <q-page class="gameDiary">
    <div v-for="(section, key, index) in diarySection" :key="index">
      <div v-if="index + 1 == fase" class="page">
        <div>
          <div class="tituloDiario">{{ section.titulo }}</div>
        </div>

        <div class="section1">
          <div class="divParagrafo">
            <p class="paragrafo">{{ section.text1 }}</p>
          </div>

          <img
            src="https://images-ext-1.discordapp.net/external/62yVZWdMvZC3dPAwe7Gyie2d3j4xOx70LfIGjcxyNN0/https/via.placeholder.com/400?format=webp"
            alt=""
            class="imagem1"
          />
        </div>

        <div class="section1">
          <img
            src="https://images-ext-1.discordapp.net/external/62yVZWdMvZC3dPAwe7Gyie2d3j4xOx70LfIGjcxyNN0/https/via.placeholder.com/400?format=webp"
            alt=""
            class="imagem1"
          />
          <div class="divParagrafo">
            <p class="paragrafo">{{ section.text2 }}</p>
          </div>
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
.gameDiary {
}
.tituloDiario {
  margin-left: 20vh;

  margin-right: 20vh;
  background-color: rgba(255, 255, 255, 0.7);
  font-family: "Comic Sans MS", cursive; /* Fonte infantil (substitua por sua preferida) */
  font-size: 70px;
  text-align: center;
  margin-bottom: 10vh;
  color: #000000; /* Azul principal */
  border-radius: 20px;
  border: 1px solid black;
}
.page {
  display: grid;
  justify-content: center;
  align-items: center;
}
.section1 {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 10vh;
  margin-right: 10vh;
}
.divParagrafo {
  justify-content: center;
  align-items: center;
  display: flex;
  margin-left: 10vh;
}
.paragrafo {
  text-indent: 50px;

  margin-left: 0vh;
  margin-right: 5vh;
  font-size: 3vh;
  font-family: "Comic Sans MS", cursive; /* Fonte infantil (substitua por sua preferida) */
  color: #000000; /* Azul principal */
  text-align: justify;
  line-height: 1.2; /* Adjust vertical spacing */
  word-spacing: 2px; /* Adjust horizontal spacing between words */
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 20px;
  padding: 6vh;
}
.imagem1 {
  height: 50vh;
  border-radius: 20px;
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
  background-color: rgb(220, 174, 9); /* Mudança de cor ao passar o mouse */
  border: 5px solid white;
}
.centerBotao {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
