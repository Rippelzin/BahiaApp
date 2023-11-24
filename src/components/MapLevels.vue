<template>
  <q-page>
    Mapa

    <div v-for="(fase, key, index) in fases" :key="index">
      <button @click="goToDiary(index)">{{ fase.title }}</button>
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
  },
  methods: {
    goToDiary(faseIndex) {
      //recebe o index do button clicado,, e passa para o componente pai, MapLevels, assim sabemos qual a fase escolhida
      faseIndex += 1;
      //faseIndex = "fase" + faseIndex;
      this.$emit("goToDiary", faseIndex);
    },
  },
};
</script>
