<template>
  <q-page class="all">
    <div>
      <!-- <div v-show="show"> -->

      <div v-for="gameQuestion in gameQuestions" :key="gameQuestion.id">
        <div v-if="gameQuestion.id == this.index">
          <div class="questionBg">
            <!-- style="--img: var(gameQuestion.imagemBg)"-->
            <div class="pergunta">{{ gameQuestion.pergunta }}</div>

            <div
              v-for="(value, key, index) in gameQuestion.alternativas"
              :key="index"
              class="alternativas"
            >
              <input
                type="button"
                :value="value"
                @click="
                  nextQuestion(gameQuestions.length), checkIfIsCorrect(key)
                "
                class="botaoResposta"
              />
              <!-- checkIfIsCorrect(key), -->
              <!-- com : antes do value ele aceita variaveis dentro de " "-->
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <!--<button @click="previousQuestion">Pergunta Anterior</button>  <button @click="nextQuestion">Proxima Pergunta</button>-->
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
    nextQuestion(numberOfQuestions) {
      this.index += 1;

      if (this.index > numberOfQuestions) {
        this.index = 1;
        let aprovado = false;
        let media = numberOfQuestions / 2;

        if (this.totalScore > media) {
          aprovado = true;
        }
        console.log(aprovado);
        this.$emit("goToResults", aprovado);
        this.totalScore = 0; //reseta o score para a proxima fase
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
        alert("correta");
        this.totalScore += 1;
        console.log(this.totalScore);
      } else {
        alert("errou!");
        console.log(this.totalScore);
      }
      /*else {
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
.all {
  background-image: url("https://img.freepik.com/vetores-gratis/plano-de-fundo-de-aventura-de-design_23-2149059266.jpg");
  background-size: cover;

  display: flex;
  padding: 50px;
  margin: 40px;
}
.botaoResposta {
  color: rgb(10, 10, 10);
  background-color: rgb(193, 127, 6);

  border-radius: 10px;
  font-size: 30px;
  transition: 1s;
}
.botaoResposta:hover {
  background-color: blue;
  border-radius: 50px;
}
.pergunta {
  color: white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding: 10px;
}

.alternativas {
  display: flex;
}

.questionBg {
  display: grid;
}
</style>
