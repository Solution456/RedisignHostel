<script setup>
// import { Carousel, Pagination, Slide } from 'vue3-carousel';
// import 'vue3-carousel/dist/carousel.css';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, Zoom } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/zoom";
import CarouselCard from "./CarouselCard/index.vue";

const props = defineProps({
  items: {
    type: Array,
    require: true,
    default: [],
  },
});

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log("slide change");
};
</script>


<template>
  <swiper
    :modules="[Pagination, Navigation, Autoplay, Zoom]"
    :autoplay="{
      delay: 10000,
      disableOnInteraction: false,
    }"
    :centeredSlides="true"
    :slides-per-view="1.5"
    :space-between="30"
    :navigation="true"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide class=" shadow-lg"  v-for="item in items" :key="item.id">
      <CarouselCard :imgURL="item.url"></CarouselCard>
    </swiper-slide>
  </swiper>
</template>



<style scoped>
.swiper-slide {
  height: 18rem !important;
}
</style>