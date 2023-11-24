<template>
  <q-page class="flex flex-center">
    <h1>
      <!-- -->
      <MapLevels
        v-show="this.showGame == 1"
        :fases="fases"
        @go-To-Diary="goToDiary"
      />

      <GameDiary
        v-show="this.showGame == 2"
        :diarySection="diario"
        :fase="this.faseIndex"
        @go-To-Game="goToGame"
      />

      <GameCard
        @go-To-Results="goToResults"
        :gameQuestions="this.faseSelected.perguntas"
        v-show="this.showGame == 3"
      />

      <GameResults
        :results="this.totalScore"
        v-show="this.showGame == 4"
        @go-To-Map="goToMap"
      />
    </h1>
  </q-page>
</template>

<script>
import GameCard from "src/components/GameCard.vue";
import GameDiary from "src/components/GameDiary.vue";
import GameResults from "src/components/GameResults.vue";
import MapLevels from "src/components/MapLevels.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  components: { GameCard, GameResults, MapLevels, GameDiary },
  data() {
    return {
      /* gameQuestions: [
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
      ],*/

      fases: {
        fase1: {
          title: "fase1",
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

        fase2: {
          title: "fase2",
          perguntas: [
            {
              id: 1,
              pergunta: "pergunta 1 fase 2",
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
              pergunta: "pergunta 2 fase 2",
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
              pergunta: "pergunta 3 fase 2",
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

        fase3: {
          title: "fase3",
          perguntas: [
            {
              id: 1,
              pergunta: "pergunta 1 fase 3",
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
              pergunta: "pergunta 2 fase 3",
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
              pergunta: "pergunta 3 fase 3",
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

        fase4: {
          title: "fase4",
          perguntas: [
            {
              id: 1,
              pergunta: "pergunta 1 fase 4",
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
              pergunta: "pergunta 2 fase 4",
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
              pergunta: "pergunta 3 fase 4",
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
      },

      diario: {
        capitulo1: {
          titulo: "O COMECO",
          text: "asdalorem ipsum llorem ipsum lorem ipsum",
          imagem1:
            "https://img.freepik.com/fotos-premium/batalha-de-fundos-de-ilustracao-3d-rpg_670008-2.jpg",
        },
        capitulo2: {
          titulo: "Os primeiros Dias",
          text: "asdalorem ipsum llorem ipsum lorem ipsum",
          imagem1:
            "https://img.freepik.com/fotos-premium/batalha-de-fundos-de-ilustracao-3d-rpg_670008-2.jpg",
        },
        capitulo3: {
          titulo: "O desafio",
          text: "asdalorem ipsum llorem ipsum lorem ipsum",
          imagem1:
            "https://img.freepik.com/fotos-premium/batalha-de-fundos-de-ilustracao-3d-rpg_670008-2.jpg",
        },
        capitulo4: {
          titulo: "A RETA Final",
          text: "asdalorem ipsum llorem ipsum lorem ipsum",
          imagem1:
            "https://img.freepik.com/fotos-premium/batalha-de-fundos-de-ilustracao-3d-rpg_670008-2.jpg",
        },
      },

      showGame: 1,
      totalScore: 0,
      faseSelected: {},
      faseIndex: 0,
    };
  },
  methods: {
    goToResults(data) {
      this.totalScore = data + 5;
      this.showGame = 4;
    },
    goToMap() {
      this.showGame = 1;
    },
    goToDiary(faseIndex) {
      //recebe, vindo do componente filho o index da fase e atribui para uma variavel aqui
      this.faseIndex = faseIndex;
      //fase + faseIndex, para assim acessar a partir da key do dict fases: fase1, fase2 ... essas sao as keys
      let key = "fase" + this.faseIndex;

      this.faseSelected = this.fases[key];
      //console.log(this.faseSelected);
      this.showGame = 2;
      //fazer uma variavel que tem o index da fase que e passado para os compoonentes se acharem dentrro da page Jogo
    },
    goToGame() {
      this.showGame = 3;
    },
  },
});
</script>

<style></style>
