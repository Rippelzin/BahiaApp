<template>
  <q-page>
    <h1>Seu Resultado:</h1>
    <div v-if="results" class="aprovado">
      <div>Parabens voce passou de fase</div>
    </div>
    <div v-else class="reprovado">{{ results }} / 10</div>
    <button @click="goToMap">Go To MAP</button>
  </q-page>
</template>
<script>
export default {
  props: {
    results: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    goToMap() {
      this.$emit("goToMap");
      console.log(this.results);
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
  background-color: yellow;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 100px;
}
.aprovado:hover {
  width: 1000px;
  height: 1000px;
  background-color: red;
}
</style>
