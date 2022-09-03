<script setup>
import CarouselVue from "../../components/Carousel/index.vue";
import SideCard from "../../components/Home/SideCard/index.vue";
import SelectVue from "../../components/public/selectVue.vue";
import CardLayout from "../../components/public/cardLayout.vue";
import ButtonTail from "../../components/public/buttonTail.vue";
import { useRouter } from "vue-router";
const router = useRouter()


function pushRoute(nameRoute, param){
    
    router.push({name:nameRoute,params:param})
}

const items = [
  {
    id: 1,
    url: "https://i.pinimg.com/564x/6e/64/f3/6e64f3172b2d90cbc1a3f747018d2614.jpg",
  },
  {
    id: 2,
    url: "https://i.pinimg.com/564x/7e/17/fc/7e17fc8bde30ba84b543dcbf748113ab.jpg",
  },
  {
    id: 3,
    url: "https://i.pinimg.com/564x/4a/08/01/4a080139ea7cb3b378c82d12cda6b0cd.jpg",
  },
  {
    id: 4,
    url: "https://i.pinimg.com/564x/65/1c/88/651c88bdaa4faadb07cc86191ac41b24.jpg",
  },
  {
    id: 5,
    url: "https://i.pinimg.com/564x/60/7c/26/607c26bb39e351eda00e0ae5361cdbfe.jpg",
  },
  {
    id: 6,
    url: "https://i.pinimg.com/564x/20/4f/c7/204fc76beccb6cb52b36ff9defcb91cc.jpg",
  },
];
</script>

<template>
  <div class="carousel mt-3">
    <CarouselVue :items="items"></CarouselVue>
  </div>

  <div class="wrapper justify-center">
    <div class="left-section hidden justify-center  md:w-1/3 md:flex">
        <div class="sideCard--left max-w-full md:max-w-50">
            <SideCard></SideCard>
        </div>
    </div>
    <div class="right-section flex flex-col w-2/3 sm:w-full">
      <div class="filter relative flex justify-center sm:justify-end">
        <SelectVue/>
      </div>
      <div class="main-content mt-7 p-0 sm:pt-5 border-t border-dashed border-gray-200 grid gap-6 sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-3">
        <div class="main-content-item" v-for="item in items" :key="item.id">
            <CardLayout>
                <div class="p-4">
                    <a href="#" class="flex items-center text-sm font-medium text-primary transition hover:text-blue-700">@{{item.id}}</a>
                </div>
                <a href="#" class="relative block w-full  pb-full">
                    <span class="box-border block overflow-hidden bg-none  border-0 m-0 p-0 absolute inset-0">
                        <img class="absolute inset-0 box-border p-0  border-none m-auto block min-w-full max-w-full min-h-full max-h-full  object-cover" :src=item.url alt="">
                    </span>
                </a>
                <div class="p-5">
                    <div class="text-sm font-medium text-primary">Text fasfas</div>
                    <div class="mt-1.5 flex text-gray600">
                        date picker
                    </div>
                    <div class="mt-6 text-center">
                        <ButtonTail @click="pushRoute('event', {id:item.id})">Посмотреть</ButtonTail>
                    </div>
                </div>
            </CardLayout>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: row;
  width: 95%;
  max-width: 1275px;
  margin: 0 auto;
  margin-top: 75px !important;

  @media only screen and (max-width: 1275px) and (min-width: 961px) {
    .wrapper {
      width: 1080px;
    }
  }

  @media only screen and (max-width: 961px) {
    .wrapper {
      width: 96%;
      margin-left: 2%;
      margin-right: 2%;
    }
  }
}

.max-w-50{
    width: 50%;
}

.pb-full {
    padding-bottom: 100%;
}

</style>



