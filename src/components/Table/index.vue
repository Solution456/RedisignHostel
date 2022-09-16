<script setup>
import { computed } from 'vue';
import CardLayout from '../public/cardLayout.vue';

const props = defineProps({
  tableData: { type: Array },
  mockHeader: { type: Array },
  residentId: { type: Number }
})

const cols = computed(() => {
  return {
    'grid-template-columns': `repeat(${props.mockHeader.length}, minmax(0, 1fr))`,
  }
})
</script>


<template>
  <div class="mx-auto w-full sm:pt-8">
    <div class="
      relative
      z-10
      mb-6
      flex flex-col
      justify-between
      gap-4
      md:flex-row md:items-center md:gap-6
    ">
      <div class="flex flex-col sm:flex-row items-center w-full justify-between gap-4 lg:gap-8">
        <div class="sm:pl-4">
          <span class="
            font-['Raleway-Medium']
            text-lg
          ">
            {{ residentId }}
          </span>
        </div>
        <div class="flex gap-4 flex-col sm:flex-row ">
          <form class="relative flex w-full rounded-full md:w-auto lg:w-64" role="search" novalidate>
            <label class="flex w-full items-center">
              <input type="text" placeholder="Поиск студентов" autocomplete="none" class="
                h-11
                w-full
                appearance-none
                rounded-lg
                border-2 border-blue-300
                py-1
                text-sm
                tracking-tighter
                text-gray900
                outline-none
                transition-all
                placeholder:text-gray600
                focus:border-blue-600
                ltr:pr-5 ltr:pl-10
                rtl:pr-10
              " />
              <span class="
                pointer-events-none
                absolute
                flex
                h-full
                w-8
                cursor-pointer
                items-center
                justify-center
                text-gray600
                hover:text-gray900
                ltr:left-0 ltr:pl-2
                rtl:right-0 rtl:pr-2
                sm:ltr:pl-3 sm:rtl:pr-3
              ">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M11.3851 12.4457C8.73488 14.5684 4.85544 14.4013 2.39866 11.9445C-0.237379 9.3085 -0.237379 5.03464 2.39866 2.3986C5.0347 -0.23744 9.30856 -0.23744 11.9446 2.3986C14.4014 4.85538 14.5685 8.73481 12.4458 11.3851L17.6014 16.5407C17.8943 16.8336 17.8943 17.3085 17.6014 17.6014C17.3085 17.8943 16.8337 17.8943 16.5408 17.6014L11.3851 12.4457ZM3.45932 10.8839C1.40907 8.83363 1.40907 5.50951 3.45932 3.45926C5.50957 1.40901 8.83369 1.40901 10.8839 3.45926C12.9327 5.50801 12.9342 8.82875 10.8885 10.8794C10.8869 10.8809 10.8854 10.8823 10.8839 10.8839C10.8824 10.8854 10.8809 10.8869 10.8794 10.8884C8.82882 12.9341 5.50807 12.9326 3.45932 10.8839Z"
                    fill="currentColor"></path>
                </svg>
              </span>
            </label>
          </form>
          <div class="relative w-full md:w-auto">
            <SelectVue />
          </div>
        </div>
      </div>
    </div>
    <div class="
      table__header
      mb-3
      gap-6
      rounded-lg
      bg-white
      shadow-sm
      grid
      items-center
    "
    :style="cols">
      <span v-for="title in mockHeader" :key="title"
        class="title-item px-8 py-6 text-sm tracking-wider font-['Raleway-Medium'] text-blue-500 text-center self-center">
        {{ title.name }}
      </span>
    </div>
    <div class="table__body">
      <CardLayout v-for="item in tableData" :key="item" class="mb-3 last:mb-0">

          <div class="grid items-center gap-6 cursor-pointer text-center h-auto" :style="cols">
            <span v-for="itemHead in mockHeader" :key="itemHead" class="
            title-item px-8 py-6 text-sm tracking-wider font-['Raleway-Medium'] text-blue-700 text-center self-center
            ">
              {{ item[itemHead.value] }}
            </span>
          </div>
      </CardLayout>
    </div>
  </div>
</template>



<style lang="scss" scoped>
</style>