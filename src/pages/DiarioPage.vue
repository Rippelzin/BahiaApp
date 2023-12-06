<template>
  <q-page class="flex flex-center">
    <h1>
      <GameDiary />
    </h1>
  </q-page>
</template>

<script>
import GameDiary from "src/components/GameDiary.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  components: { GameDiary },
});
</script>

<style>
.botao {
  background-color: orange;
  border-radius: 50px;
}
</style>
