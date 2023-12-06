<template>
  <q-page>
    <h1>Diario da sua aventura</h1>
    <div v-for="(section, key, index) in diarySection" :key="index">
      <div v-if="index + 1 == fase" class="page">
        <div class="titulo">{{ section.titulo }}</div>

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
    <button @click="goToGame">ir para o QUIZ</button>
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
.titulo {
  margin-left: 10vh;
  margin-right: 10vh;
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
</style>
