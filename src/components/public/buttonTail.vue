<template>
  <button
    type="button"
    class="
      text-white
      bg-gradient-to-r
      from-blue-500
      via-blue-600
      to-blue-700
      hover:bg-gradient-to-br
      focus:ring-4 focus:outline-none focus:ring-blue-300
      shadow-lg shadow-blue-500/50
      font-medium
      rounded-lg
      text-sm
      px-8
      py-2.5
      text-center
      mr-2
      mb-2
    "
  >
    <slot>Кнопка</slot>
  </button>
</template>