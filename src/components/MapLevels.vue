<template>
  <q-page>
    Mapa da sua aventura
    <div class="mapBg">
      <div v-for="(fase, key, index) in fases" :key="index">
        <button @click="goToDiary(index)" class="levelButton">
          {{ fase.title }}
        </button>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      teste: "",
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
.mapBg {
  background-color: rgb(255, 166, 0);
}
.levelButton {
  margin: 20px;
}
</style>
