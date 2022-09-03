<script setup>
import headerVue from "./components/Header/index.vue";

import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const active = ref(true);

onMounted(() => {
  let htmlEl = document.querySelector("html");
  htmlEl.setAttribute("dir", "ltr");
  htmlEl.setAttribute("lang", "fa");
});
</script>

<template >
  <div class="div">
    <header v-if="active" id="head" class="h-14 border-b border-blue-700">
      <headerVue></headerVue>
    </header>
    <main class="min-h-screen bg-background pt-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.customShadow {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
