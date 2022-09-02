<script setup>
const props = defineProps({
  state: {
    type: String,
    default: "primary",
  },
});
</script>


<template>
  <button
    type="button"
    class="
      text-white
      shadow-lg
      font-medium
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
    :state === 'success'? ' from-red-500 via-red-600 to-red-700  focus:ring-red-300 shadow-red-500/50':'']"
  >
    <slot>Кнопка</slot>
  </button>
</template>