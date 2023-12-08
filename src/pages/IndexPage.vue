<template>
  <q-page class="flex flex-center">
    <h1>
      <h1 class="titulo">Aventuras de espaguete e picole</h1>
      <div class="botaoDiv">
        <q-item clickable to="/jogo" class="botao">Jogar</q-item>
      </div>
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
.botaoDiv {
  display: flex;
  align-items: center;
  justify-content: center;
}
.botao {
  background-color: orange;
  border-radius: 50px;
  margin-top: 20vh;
  width: 30%;
  transition: 1s;
  font-size: 10vh;
  border: 4px solid transparent;
  justify-content: center;
  align-items: center;
  font-family: "Comic Sans MS", cursive; /* Fonte infantil (substitua por sua preferida) */
}
.botao:hover {
  background-color: rgb(15, 129, 228);
  border-radius: 20px;
  border: 4px solid;
  border-color: white;
}
</style>
