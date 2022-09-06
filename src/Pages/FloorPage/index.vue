<script setup>
import CardLayout from "../../components/public/cardLayout.vue";
import BaselineArrowUpward from "../../assets/svg/baseline-arrow-upward.vue";
import { useRouter } from "vue-router";
const router = useRouter()

function pushRoute(nameRoute, param) {

  router.push({ name: nameRoute, params: param })
  window.scrollTo(0, 0);
}


</script>



<template>
  <div class="wrapper justify-center">
    <section class="floors w-full">
      <div class="floors__intro bas p-8 bg-white rounded-lg shadow-lg">
        <div class="title-text text-center text-3xl text-primary">
          Выберите этаж
        </div>
      </div>
      <div class="
          floors__content
          p-8
          mt-24
          grid
          gap-6
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          3xl:grid-cols-4
        ">
        <div class="floors__content-item" v-for="item in 12" :key="item">

          <CardLayout class="h-72" @click="pushRoute('FloorPage', { id: item + 2 })">
            <div class="flex flex-col h-full justify-center items-stretch">
              <div class="
                  cursor-default
                  h-2/3
                  flex
                  relative
                  z-3
                  items-center
                  text-7xl
                  text-primary
                  justify-center
                ">
                {{ item + 2 }}
              </div>
              <div class="
                  absolute
                  flex
                  justify-center
                  text-blue-opac
                  items-center
                  text-6xl
                  z-0
                  centeredT
                  right-0
                  bottom-0
                  left-[10%]
                  md:left-[20%]
                  lg:left-[15%]
                ">
                {{ item + 2 }}
              </div>
              <div class="action flex justify-center">
                <BaselineArrowUpward class="cursor-pointer" />
              </div>
            </div>
          </CardLayout>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.centeredT {
  top: 30%;
  transform: translateY(-30%);
}
</style>