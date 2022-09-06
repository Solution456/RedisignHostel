<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import {ArrowLeftOnRectangleIcon} from '@heroicons/vue/24/outline/'
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
  <div class="h-full flex justify-around items-center">

    <div class="user-info relative flex items-center gap-x-3 text-primary text-xl">
      <Menu >
        <MenuButton class="flex items-center gap-3 transition">
          <div class="avatar">
            <img
              class="w-10 h-10 rounded-full object-cover object-center"
              src="https://i.pinimg.com/564x/04/38/f6/0438f6019adc4f0a1f8023ab5577fee4.jpg"
              alt=""
            />
          </div>
          <span>Erik Askarov</span>
        </MenuButton>
        <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems class="absolute left-0 mt-28 opacity-100 z-10 w-64 origin-top-right rounded-lg bg-white border border-gray-200 p-3 shadow-lg translate-y-0">
          <MenuItem>
            <a class="flex items-center rounded-lg cursor-pointer px-3 py-2 text-sm font-medium uppercase text-blue-600 transition hover:bg-blue-300 hover:text-white">
              <ArrowLeftOnRectangleIcon class="w-8 h-8"/>
              Выход
              
            </a>
          </MenuItem>
        </MenuItems>
        </transition>
      </Menu>
    </div>

    <nav class="nav flex items-center">
      <div class="link" v-for="({ name, link }, id) in links" :key="{ id }">
        <router-link class="route-link" :to="link">{{ name }}</router-link>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  .route-link {
    margin-left: 12px;
    color: #3269f6;
    font-size: 20;
    font-weight: bold;
    border-radius: 15px;
    padding: 7px 30px;
    background-color: white;
    transition: all 0.5s ease;
    &:first-child {
      margin-left: 0px;
    }

    &:hover {
      background-color: #3269f6;
      color: white;
    }
  }
  router-link-active,
  .router-link-exact-active {
    background-color: #3269f6;
    color: white;
    cursor: pointer;
  }
}
</style>