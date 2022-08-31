<script setup>
import headerVue from './components/Header/index.vue'

import { ref } from "@vue/reactivity";


const active = ref(true)

</script>

<template>
<div class="div">
  <header v-if="active" class="h-14 ">
    <headerVue></headerVue>
  </header>
  <main class="min-h-screen bg-background pt-4 ">
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

</style>
