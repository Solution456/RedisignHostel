<script setup>
// import { Carousel, Pagination, Slide } from 'vue3-carousel';
// import 'vue3-carousel/dist/carousel.css';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    :modules="modules"
    :autoplay="true"
    :loop="true"
    :slides-per-view="3"
    :space-between="30"
    :navigation="true"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide class=" h-" v-for="item in items" :key="item.id">
      <CarouselCard :imgURL="item.url"></CarouselCard>
    </swiper-slide>
  </swiper>

  <!-- <Carousel  :wrap-around="true">
    <Slide v-for="item in items" :key="item.id" >
      <div class="carousel__item">
        <CarouselCard :imgURL="item.url"></CarouselCard>
      </div>
    </Slide>
  </Carousel> -->
</template>



<style scoped>

.swiper-slide{
  height: 18rem !important;
}

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
</style>