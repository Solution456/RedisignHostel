<script setup>
import CardLayout from '../../../components/public/cardLayout.vue';
import BaselineArrowUpward from '../../../assets/svg/baseline-arrow-upward.vue';
import Table from '../../../components/Table/Table.vue';

const props = defineProps({
    id:{
        type:String
    }
})


</script>




<template>
  <div class="wrapper flex-col__imp justify-center">
    <section class="w-full">
      <div class="floors__intro bas p-8 bg-white rounded-lg shadow-lg">
        <div class="title-text text-center text-3xl font-bold text-primary">
          Этаж {{id}}
        </div>
      </div>
    </section>

    <section class="content justify-center gap-4 mt-20 flex">
        <div class="left-side hidden justify-center  md:w-1/3 md:flex">
            <div class="sideCard w-full max-w-full md:max-w-50">
            <CardLayout class="px-5
        py-2 flex flex-col justify-center">
                <div class="card-title text-center text-primary font-bold text-xl mt-2">Erik Askarov</div>
                <div class="card-avatar flex justify-center">
                    <img  height="115" width="115" class="rounded-full object-cover object-center my-5" src="https://i.pinimg.com/564x/04/38/f6/0438f6019adc4f0a1f8023ab5577fee4.jpg" alt="">
                </div>
                <div class="card-description text-center text-blue-600 font-medium mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, impedit!
                </div>
                <div class="card-action mt-2 mb-6 flex justify-center">
                    <BaselineArrowUpward/>
                </div>
            </CardLayout>
            </div>
        </div>
        <div class="right-side flex flex-col w-2/3 sm:w-full">
           <Table/>
        </div>

    </section>

  </div>
</template>



<style lang="scss" scoped>
    .flex-col__imp{
        flex-direction: column !important;
    }
</style>