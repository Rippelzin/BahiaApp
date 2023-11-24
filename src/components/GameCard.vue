<template>
  <q-page class="flex flex-center">
    <div>
      <!-- <div v-show="show"> -->
      <h1>Jogo Card</h1>
      <div v-for="gameQuestion in gameQuestions" :key="gameQuestion.id">
        <div v-if="gameQuestion.id == this.index">
          {{ gameQuestion.pergunta }}
          <div
            v-for="(value, key, index) in gameQuestion.alternativas"
            :key="index"
          >
            <input type="button" :value="value" @click="nextQuestion()" />
            <!-- checkIfIsCorrect(key), -->
            <!-- com : antes do value ele aceita variaveis dentro de " "-->
          </div>
        </div>
      </div>
      <br />
      <div>
        <button @click="previousQuestion">Pergunta Anterior</button>
        <button @click="nextQuestion">Proxima Pergunta</button>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "GameCard",
  data() {
    return {
      index: 1,
      chaves: "",
      totalScore: 0,
    };
  },

  props: {
    gameQuestions: Object,
  },

  methods: {
    nextQuestion() {
      this.index += 1;
      if (this.index > 3) {
        this.index = 1;

        this.$emit("goToResults", this.totalScore);
      }
    },
    previousQuestion() {
      this.index -= 1;
      if (this.index < 1) {
        this.index = 1;
      }
    },
    checkIfIsCorrect(key) {
      this.chave = key;
      if (this.chave == "certa") {
        //console.log(this.chave);
        this.totalScore += 1;
        //console.log(this.totalScore);
      } /*else {
        this.totalScore -= 1;
        if (this.totalScore < 0) {
          this.totalScore = 0;
        }
        console.log(this.totalScore);
      }*/
    },
  },
});
</script>

<style>
.estilo {
  background-color: red;
}
</style>
