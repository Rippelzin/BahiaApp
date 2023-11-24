<template>
  <q-page>
    <h1>Seu Resultado:</h1>
    <div v-if="results > 6" class="aprovado">{{ results }} / 10</div>
    <div v-else class="reprovado">{{ results }} / 10</div>
    <button @click="goToMap">Go To MAP</button>
  </q-page>
</template>
<script>
export default {
  props: {
    results: Number,
  },
  data() {
    return {};
  },
  methods: {
    goToMap() {
      this.$emit("goToMap");
    },
  },
};
</script>
<style>
.reprovado {
  color: red;
}
.aprovado {
  color: rgb(41, 226, 41);
}
</style>
