<script setup>
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
    name: "Выход",
    link: "''",
  },
];
</script>


<template>
  <div class="h-full flex justify-around items-center">
    <div class="user-info flex items-center gap-x-3 text-primary text-xl">
      <div class="avatar">
        <img
          class="w-10 h-10 rounded-full object-cover object-center"
          src="https://i.pinimg.com/564x/04/38/f6/0438f6019adc4f0a1f8023ab5577fee4.jpg"
          alt=""
        />
      </div>
      <span>Erik Askarov</span>
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