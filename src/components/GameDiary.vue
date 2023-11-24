<template>
  <q-page>
    <h1>Diario</h1>
    <div v-for="(section, key, index) in diarySection" :key="index">
      <div v-if="index + 1 == fase">{{ section.titulo }}</div>
    </div>
    <button @click="goToGame">ir para o QUIZ</button>
  </q-page>
</template>

<script>
export default {
  props: {
    diarySection: Object,
    fase: Number,
  },
  methods: {
    goToGame() {
      this.$emit("goToGame");
    },
  },
};
</script>
<style></style>
