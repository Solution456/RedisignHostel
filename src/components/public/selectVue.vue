<script setup>
import { computed, ref } from "vue";
import ArrowDown from "../../assets/svg/arrow-down.vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { prop } from "dom7";

const props = defineProps({
  optionsItems: {
    type:Array,
    required:true,
    default:[{value:0,name:''}]
  },
  modelValue: [String, Number, Array],
  placeholder:{
    type:String,
    default: 'Выберите: опцию'
  }
})

const emit = defineEmits(['update:modelValue'])


const label = computed(() => {
  return props.optionsItems.filter(option => {
    if (Array.isArray(props.modelValue)){
      return props.modelValue.includes(option?.value)
    }

    return props.modelValue === option?.value
  }).map(option => option?.label).join(', ')
})


</script>


<template>






  <div class="select-group flex gap-6">
    <Listbox 
    @update:model-value="value => emit('update:modelValue', value)"
    :model-value="props.modelValue">
      <div class="relative">
        <ListboxButton
          class="relative flex
          h-11
          w-64
          items-center
          justify-between
          rounded-lg
          bg-blue-500
          p-2
          text-xs text-white"
        >
          <span class="block truncate" v-if="label">{{ label }}</span>
          <span class="text-white" v-else>{{props.placeholder}}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <ArrowDown :fill="'white'" />
          </span>
        </ListboxButton>

        <transition

        >
          <ListboxOptions
            class="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="option in props.optionsItems"
              :key="option.label"
              :value="option.value"
              as="template"
            >
              <li

                :class="[
                  active ? 'bg-blue-300 text-white' : 'text-gray600',
                  'relative cursor-default select-none py-2 pl-10 pr-4',
                ]"
              >
                <span
                  :class="[
                    selected ? `font-['Raleway-Medium']` : `font-['Raleway-Regular']`,
                    'block truncate',
                  ]"
                  >{{ option?.label }}</span
                >
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                >
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>


<style scoped>

.v-leave-active, .v-enter-active {
  transition: opacity 0.2s ease-in;
}

.v-enter-to,
.v-leave-from{
    opacity: 1;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>