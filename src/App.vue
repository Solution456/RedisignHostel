<script setup>
import headerVue from "./components/Header/index.vue";

import { ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import Aside from "./components/aside/index.vue";

const active = ref(true);
const Show = ref(false)
const isMobile = ref(false)

const onResize = () => {
  isMobile.value = window.innerWidth < 768 
}

const openDialog = () => {
  Show.value = !Show.value;
};

onMounted(() => {
  window.addEventListener('resize', onResize);
  let htmlEl = document.querySelector("html");
  htmlEl.setAttribute("dir", "ltr");
  htmlEl.setAttribute("lang", "fa");
});


watch(isMobile, (newIsMobile) =>{
  if (!newIsMobile){
    Show.value = false
  }
})


</script>

<template >
  <div class="div font-['Raleway-Bold']">
    <Dialog :open="Show" @close="openDialog">
      <div class="fixed  inset-0 bg-gray-700 bg-opacity-60 backdrop-blur opacity-100">
      </div>
      <div class="fixed inset-y-0 left-0 flex w-full max-w-full sm:w-auto translate-x-0">
        <aside class="top-0 z-40 h-full w-full max-w-full border-dashed border-gray-200 bg-white ltr:left-0 ltr:border-r rtl:right-0 rtl:border-1 xl:fixed xl:w-72 sm:w-80">
          <Aside @close-modal="openDialog"/>
        </aside>

      </div>
    </Dialog>
    <header v-if="active" id="head" class="h-14 top-0 z-30 w-full px-4 transition-all duration-300 ltr:right-0 rtl:left-0 sm:px-4 lg:px-8 xl:px-10 bg-white border-b border-blue-700">
      <headerVue @open-modal="openDialog" ></headerVue>

    </header>
    <main class="min-h-screen bg-background py-4">
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
