<script setup>
import AppLoader from './appLoader.vue';
const props = defineProps({
  state: {
    type: String,
    default: "primary",
  },
  loading:{
    type: Boolean,
    default:false
  }
});

</script>


<template>
  <button
    type="button"
    class="
      text-white
      shadow-lg
      font-['Raleway-Medium']
      rounded-lg
      text-sm
      px-8
      py-2.5
      text-center
      mr-2
      mb-2
      bg-gradient-to-r
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none
    "
    :class="[state === 'primary'?' from-blue-500 via-blue-600 to-blue-700  focus:ring-blue-300 shadow-blue-500/50'
    :state === 'danger'?'from-red-500 via-red-600 to-red-700 focus:outline-none focus:ring-red-300 shadow-red-500/50'
    :state === 'success'? ' from-green-500 via-green-600 to-green-700  focus:ring-green-300 shadow-green-500/50':'']"
  >
    <slot v-if="!loading">Кнопка</slot>
    <AppLoader v-else/>
  </button>
</template>