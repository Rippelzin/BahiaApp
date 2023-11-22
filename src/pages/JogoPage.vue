<template>
  <q-page class="flex flex-center">
    <h1>
      <!-- -->
      <MapLevels v-show="this.showGame == 1" />

      <GameCard
        :gameQuestions="gameQuestions"
        @go-To-Results="goToResults"
        v-show="this.showGame == 2"
      />

      <GameResults
        :results="this.totalScore"
        v-show="this.showGame == 3"
        @go-To-Map="goToMap"
      />
    </h1>
  </q-page>
</template>

<script>
import GameCard from "src/components/GameCard.vue";
import GameResults from "src/components/GameResults.vue";
import MapLevels from "src/components/MapLevels.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  components: { GameCard, GameResults, MapLevels },
  data() {
    return {
      gameQuestions: [
        {
          id: 1,
          pergunta: "pergunta 1",
          alternativas: {
            certa: "alternativa 1",
            errada_um: "alternativa errada um",
            errada_dois: "alternativa errada dois",
            errada_tres: "alternativa errada tres",
          },
          imagemBg:
            "https://img.freepik.com/fotos-premium/batalha-de-fundos-de-ilustracao-3d-rpg_670008-2.jpg",
        },
        {
          id: 2,
          pergunta: "pergunta 2",
          alternativas: {
            certa: "alternativa 1",
            errada_um: "alternativa errada um",
            errada_dois: "alternativa errada dois",
            errada_tres: "alternativa errada tres",
          },

          imagemBg:
            "https://www.r2pg.com.br/wp-content/uploads/2016/07/First-Look-Dragon-Age-III-Inquisition-Concept-Art-dragon-age-origins-32650964-1920-1080.jpg",
        },
        {
          id: 3,
          pergunta: "pergutna 3",
          alternativas: {
            certa: "altasdassadaads",
            errada_um: "alternativa errada um",
            errada_dois: "alternativa errada dois",
            errada_tres: "alternativa errada tres",
          },
          imagemBg:
            "https://static.vecteezy.com/ti/fotos-gratis/p1/10552562-3d-ilustracao-gelo-planeta-rpg-backgrounds-battle-game-foto.jpeg",
        },
      ],

      fases: {
        fase1: {
          perguntas: [
            {
              id: 1,
              pergunta: "pergunta 1 fase 1",
              alternativas: {
                certa: "alternativa 1",
                errada_um: "alternativa errada um",
                errada_dois: "alternativa errada dois",
                errada_tres: "alternativa errada tres",
              },
              imagemBg:
                "https://img.freepik.com/fotos-premium/batalha-de-fundos-de-ilustracao-3d-rpg_670008-2.jpg",
            },
            {
              id: 2,
              pergunta: "pergunta 2 fase 1",
              alternativas: {
                certa: "alternativa 1",
                errada_um: "alternativa errada um",
                errada_dois: "alternativa errada dois",
                errada_tres: "alternativa errada tres",
              },
              imagemBg:
                "https://img.freepik.com/fotos-premium/batalha-de-fundos-de-ilustracao-3d-rpg_670008-2.jpg",
            },
            {
              id: 3,
              pergunta: "pergunta 3 fase 1",
              alternativas: {
                certa: "alternativa 1",
                errada_um: "alternativa errada um",
                errada_dois: "alternativa errada dois",
                errada_tres: "alternativa errada tres",
              },
              imagemBg:
                "https://img.freepik.com/fotos-premium/batalha-de-fundos-de-ilustracao-3d-rpg_670008-2.jpg",
            },
          ],
        },

        fase2: {},
      },

      showGame: 1,
      totalScore: 0,
    };
  },
  methods: {
    goToResults(data) {
      this.totalScore = data + 5;
      this.showGame = 3;
    },
    goToMap() {
      this.showGame = 1;
    },
  },
});
</script>

<style></style>
