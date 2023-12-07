<template>
  <q-page class="flex flex-center">
    <h1>
      <h1>Aventuras de espaguete e picole</h1>
      <q-item clickable to="/jogo" class="botao">Jogar</q-item>
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
