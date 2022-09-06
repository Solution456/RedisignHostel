<script setup>
import SelectVue from "../public/selectVue.vue";
import CardLayout from "../public/cardLayout.vue";

const mockHeader = ["Pool", "Earned", "ARP", "Liquidity", "Multiplier"];
</script>


<template>
  <div class="mx-auto w-full sm:pt-8">
    <div
      class="
        relative
        z-10
        mb-6
        flex flex-col
        justify-between
        gap-4
        md:flex-row md:items-center md:gap-6
      "
    >
      <div class="flex items-center w-full justify-end gap-4 lg:gap-8">
        <form
          class="relative flex w-full rounded-full md:w-auto lg:w-64"
          role="search"
          novalidate
        >
          <label class="flex w-full items-center">
            <input
              type="text"
              class="
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
              "
              placeholder="Поиск студентов"
              autocomplete="none"
            />
            <span
              class="
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
              "
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.3851 12.4457C8.73488 14.5684 4.85544 14.4013 2.39866 11.9445C-0.237379 9.3085 -0.237379 5.03464 2.39866 2.3986C5.0347 -0.23744 9.30856 -0.23744 11.9446 2.3986C14.4014 4.85538 14.5685 8.73481 12.4458 11.3851L17.6014 16.5407C17.8943 16.8336 17.8943 17.3085 17.6014 17.6014C17.3085 17.8943 16.8337 17.8943 16.5408 17.6014L11.3851 12.4457ZM3.45932 10.8839C1.40907 8.83363 1.40907 5.50951 3.45932 3.45926C5.50957 1.40901 8.83369 1.40901 10.8839 3.45926C12.9327 5.50801 12.9342 8.82875 10.8885 10.8794C10.8869 10.8809 10.8854 10.8823 10.8839 10.8839C10.8824 10.8854 10.8809 10.8869 10.8794 10.8884C8.82882 12.9341 5.50807 12.9326 3.45932 10.8839Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </label>
        </form>
        <div class="relative w-full md:w-auto">
          <SelectVue />
        </div>
      </div>
    </div>
    <div
      class="
        mb-3
        hidden
        grid-cols-3
        gap-6
        rounded-lg
        bg-white
        shadow-sm
        sm:grid
        lg:grid-cols-5
      "
    >
      <span
        v-for="title in mockHeader"
        :key="title"
        class="title-item px-8 py-6 text-sm tracking-wider text-blue-500"
      >
        {{ title }}
      </span>
    </div>
    <div class="table-content">
      <CardLayout v-for="item in 10" :key="item" class="mb-3 last:mb-0">
        <div
          class="
            relative
            grid
            h-auto
            cursor-pointer
            grid-cols-2
            items-center
            gap-3
            py-4
            sm:h-20 sm:grid-cols-3 sm:gap-6 sm:py-0
            lg:grid-cols-5
          "
        >
          <div class="col-span-2 sm:col-auto sm:px-4">
            <div class="flex items-center">
              <div class="flex items-center">
                <img
                  height="32"
                  width="32"
                  class="rounded-full object-cover object-center"
                  src="https://i.pinimg.com/564x/04/38/f6/0438f6019adc4f0a1f8023ab5577fee4.jpg"
                  alt=""
                />
              </div>
              <div
                class="
                  whitespace-nowrap
                  text-sm
                  font-['Raleway-Medium']
                  uppercase
                  text-blue-700
                  ltr:ml-3
                  rtl:mr-3
                "
              >
                Askarov Erik
              </div>
            </div>
          </div>

          <div
            class="
              px-4
              text-xs
              font-['Raleway-Medium']
              tracking-wider
              text-blue-700
              sm:px-8 sm:text-sm
            "
          >
            <span class="mb-1 block font-['Raleway-Medium'] text-gray600 sm:hidden"
              >Earned</span
            >
            0
          </div>
          <div
            class="
              px-4
              text-xs
              font-['Raleway-Medium']
              tracking-wider
              text-blue-700
              sm:px-8 sm:text-sm
            "
          >
            <span class="mb-1 block font-['Raleway-Medium'] text-gray600 sm:hidden"
              >ARP</span
            >
            0
          </div>
          <div
            class="
              title-item
              px-4
              text-xs
              font-['Raleway-Medium']
              tracking-wider
              text-blue-700
              sm:px-8 sm:text-sm
            "
          >
            0
          </div>
          <div
            class="
              title-item
              px-4
              text-xs
              font-['Raleway-Medium']
              tracking-wider
              text-blue-700
              sm:px-8 sm:text-sm
            "
          >
            0
          </div>
        </div>
      </CardLayout>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.title-item {
  &:nth-last-child(-n + 2) {
    display: none;
  }
  @media only screen and (min-width: 1024px) {
    &:nth-last-child(-n + 2) {
      display: block;
    }
  }
}
</style>