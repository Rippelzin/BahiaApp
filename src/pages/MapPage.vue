<template>
  <q-page>
    <MapLevels :fases="fases" />
  </q-page>
</template>
<script>
import MapLevels from "src/components/MapLevels.vue";

export default {
  components: { MapLevels },

  data() {
    return {
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
    };
  },
};
</script>
