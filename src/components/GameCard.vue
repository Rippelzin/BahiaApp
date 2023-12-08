<template>
  <q-page class="flex flex-center">
    <div class="all">
      <!-- <div v-show="show"> -->

      <div v-for="gameQuestion in gameQuestions" :key="gameQuestion.id">
        <div v-if="gameQuestion.id == this.index">
          <div class="questionBg">
            <!-- style="--img: var(gameQuestion.imagemBg)"-->
            <div class="pergunta">{{ gameQuestion.pergunta }}</div>

            <div class="alternativas">
              <div
                v-for="(value, key, index) in gameQuestion.alternativas"
                :key="index"
                class="alternativa"
              >
                <input
                  type="button"
                  :value="value"
                  @click="
                    nextQuestion(gameQuestions.length), checkIfIsCorrect(key)
                  "
                  class="botaoAlternativa"
                />
                <!-- checkIfIsCorrect(key), -->
                <!-- com : antes do value ele aceita variaveis dentro de " "-->
              </div>
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
import mapa from "assets/mapaBonitao.jpg";

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
  /* background-image: url("https://img.freepik.com/vetores-gratis/plano-de-fundo-de-aventura-de-design_23-2149059266.jpg");
  background-size: cover;
*/
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10vh;
  margin: 10vh;
  width: 150vh;
  height: 100vh;
}

.pergunta {
  color: rgb(0, 0, 0);
  background-color: rgba(255, 255, 255, 0.8);
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding: 10px;
  font-size: 10vh;
  text-align: center;
  border: 1px solid black;
  border-radius: 20px;
}
/* https://stackoverflow.com/questions/58478216/css-grid-2x2-grid-always-taking-up-the-full-width-when-possible */
.alternativas {
  display: grid;
}

.alternativa:nth-child(4) {
  grid-column: 2;
}

.botaoAlternativa {
  font-size: 5vh;
  border-radius: 20px;
  margin: 10px;
  width: 60vh;

  border: transparent;
  transition: 1s;
  border: 1px solid black;
  border-radius: 20px;
}
.botaoAlternativa:hover {
  background-color: rgb(40, 139, 220);
  border-radius: 50px;
  border: 3px solid black;
}
</style>
