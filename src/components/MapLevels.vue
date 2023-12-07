<template>
  <q-page class="masterDiv">
    <div class="divTitulo">
      <div class="tituloMapa">Mapa da sua aventura</div>
    </div>

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
.masterDiv {
  margin-top: -vh;
}
.divTitulo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.tituloMapa {
  font-size: 10vh;
  text-align: center;
  font-family: "Comic Sans MS", cursive; /* Fonte infantil (substitua por sua preferida) */
  color: #000000; /* Azul principal */
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5vh;
  border-radius: 30px;
  border: 3px solid black;

  margin: 10px;
}
.mapBg {
  width: 200vh;
  height: 450px;
}
.fases {
  display: flex;
  justify-content: center;
  align-items: center;
}
.levelButton {
  margin: 20px;
  font-size: 5vh;
  color: #0077cc; /* Azul principal */
  font-family: "Comic Sans MS", cursive; /* Fonte infantil (substitua por sua preferida) */
  border-radius: 30px;
  width: 25vh;
  transition: 1s;
}
.levelButton:hover {
  background-color: orange;
  border: 5px solid white;
  width: 150px;
}
</style>
