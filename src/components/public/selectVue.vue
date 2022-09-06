<script setup>
import { ref } from "vue";
import ArrowDown from "../../assets/svg/arrow-down.vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const props = defineProps({
  optionsItems: {
    type:Array,
    required:true,
    default:[{name:''}]
  }
})

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]
const selectedOption = ref(props.optionsItems[0])


</script>


<template>






  <div class="select-group flex gap-6">
    <Listbox v-model="selectedOption">
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
          <span class="block truncate">{{ selectedOption.name }}</span>
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
              v-for="option in optionsItems"
              :key="option.name"
              :value="option"
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
                  >{{ option.name }}</span
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