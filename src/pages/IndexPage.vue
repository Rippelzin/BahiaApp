<template>
  <q-page class="flex flex-center">
    <h1>
      <h1>Titulo</h1>
      <q-item clickable to="/jogo" class="botao">Jogar</q-item>
      <q-item clickable to="/diario">Diario</q-item>
      <q-item clickable to="opcoes">Opcoes</q-item>
      <q-item clickable to="creditos">Creditos</q-item>
    </h1>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<style>
.botao {
  background-color: orange;
  border-radius: 50px;
}
</style>
