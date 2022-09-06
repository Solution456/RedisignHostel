<script setup>
import ChipVue from "../../public/chipVue.vue";
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
  } from '@headlessui/vue'
import { ref } from "vue";

const emits = defineEmits(['select'])

const emitSelect = (event) => {
  emits('select',event)
}

  const radioSelect = ref('Прошедшие')
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
        uppercase
        text-primary
        tracking-wider
      "
    >
      Статус
    </div>
    <div class="sideCard-tw-content border-t border-dashed border-gray-200">
        <RadioGroup @update:model-value="emitSelect" v-model="radioSelect" class="grid grid-cols-1 gap-2 p-5">
          <RadioGroupOption v-slot="{ checked }" value="Прошедшие">
            <ChipVue :class="checked? 'bg-primary text-white':''" 
            >Прошедшие</ChipVue>
          </RadioGroupOption>
          <RadioGroupOption v-slot="{ checked }" value="Актуальные">
          <ChipVue :class="checked?'bg-primary text-white':''">Актуальные</ChipVue>
          </RadioGroupOption>
        </RadioGroup>

    </div>
  </div>
</template>