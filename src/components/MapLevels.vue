<template>
  <q-page>
    <div class="titulo">Mapa da sua aventura</div>
    <div class="mapBg">
      <div class="fases">
        <div v-for="(fase, key, index) in fases" :key="index">
          <button @click="goToDiary(index)" class="levelButton">
            {{ fase.title }}
          </button>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      teste: "",
      actualFase: localStorage.getItem("actualFase"),
    };
  },
  props: {
    fases: Object,
    fase: Number,
  },
  methods: {
    goToDiary(faseIndex) {
      //recebe o index do button clicado,, e passa para o componente pai, MapLevels, assim sabemos qual a fase escolhida
      faseIndex += 1;

      if (faseIndex > localStorage.getItem("actualFase")) {
        alert("você ainda não liberou essa fase");
      } else {
        //faseIndex = "fase" + faseIndex;
        this.$emit("goToDiary", faseIndex);
      }
    },
  },
};
</script>

<style>
body {
  background-color: rgb(127, 127, 192);
}
.titulo {
  font-size: 50px;
  text-align: center;
  font-family: "Comic Sans MS", cursive; /* Fonte infantil (substitua por sua preferida) */
  color: #0077cc; /* Azul principal */
  background-color: white;
  margin: 10px;
}
.mapBg {
  background-image: url("https://static.mundoeducacao.uol.com.br/mundoeducacao/2023/02/mapa-mundi-em-fundo-azul.jpg");
  background-size: cover;
  width: 1000px;
  height: 600px;
}
.fases {
  display: flex;
  justify-content: center;
  align-items: center;
}
.levelButton {
  margin: 20px;
  font-size: 20px;
  height: 50%;
}
</style>
