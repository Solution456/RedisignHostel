<script setup>
import ChipVue from "../../public/chipVue.vue";
</script>

<template>
  <div
    class="
      sideCard-tw
      overflow-hidden
      rounded-lg
      bg-white
      shadow-sm
      transition-all
      duration-[350ms]
      last:shadow-md
    "
    style="height: 170px"
  >
    <div
      class="
        sideCard-tw-header
        flex
        h-12
        justify-center
        items-center
        px-5
        py-2
        text-sm
        font-bold
        uppercase
        text-primary
        tracking-wider
      "
    >
      Статус
    </div>
    <div class="sideCard-tw-content border-t border-dashed border-gray-200">
      <div class="grid grid-cols-1 gap-2 p-5">
        <ChipVue>Прошедшие</ChipVue>
        <ChipVue>Актуальные</ChipVue>
      </div>
    </div>
  </div>
</template>