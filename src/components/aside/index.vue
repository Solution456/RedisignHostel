<script setup>
import Crest from "../../assets/svg/crest.vue";


const emits = defineEmits(['closeModal'])


const close = () => {
    emits('closeModal')
}

const links = [
  {
    id: 1,
    name: "Мероприятия",
    link: "/",
  },
  {
    id: 2,
    name: "Этажи",
    link: "/floors",
  },
  {
    id: 3,
    name: "Профиль",
    link: "/profile",
  },
];


</script>

<template>
  <div
    class="
      relative
      flex
      h-24
      items-center
      justify-end
      overflow-hidden
      px-6
      py-4
    "
  >
    <button
      @click="close"
      class="
        relative
        inline-flex
        shrink-0
        items-center
        justify-center
        overflow-hidden
        text
        center
        text-xs
        font-medium
        tracking-wider
        outline-none
        rounded-full
        transition-all
        sm:text-sm
        text-gray900
        hover:bg-gray-100
        focus:bg-gray-100
        w-10
        h-10
      "
    >
      <span>
        <Crest />
      </span>
    </button>
  </div>
  <div class="px-6 pb-5">
    <div class="flex items-center rounded-lg bg-gray-100 p-5">
      <div class="avatar">
        <img
          class="w-10 h-10 rounded-full object-cover object-center"
          src="https://i.pinimg.com/564x/04/38/f6/0438f6019adc4f0a1f8023ab5577fee4.jpg"
          alt=""
        />
      </div>
      <div class="ltr:pl-3 rtl:pr-3">
        <h3 class="text-sm font-medium uppercase tracking-wide text-primary">
          Erik Askarov
        </h3>
        <span class="mt-1 block text-sm text-gray600">Староста</span>
      </div>
    </div>

    <div class="mt-12">
      <div
        v-for="({ name, link }, id) in links"
        :key="{ id }"
        class="mb-2 min-h-[48px] list-none"
      >
        <router-link
          @click="close"  
          :to="link"
          class="
            relative
            flex
            h-12
            cursor-pointer
            items-center
            whitespace-nowrap
            rounded-lg
            px-4
            text-sm
            transtition-all
            text-primary
          "
        >
          {{ name }}
        </router-link>
      </div>
    </div>
  </div>
</template>


<style scoped>
.router-link-active,
.router-link-exact-active {
  background-color: #3269f6;
  color: white;
  cursor: pointer;
}
</style>