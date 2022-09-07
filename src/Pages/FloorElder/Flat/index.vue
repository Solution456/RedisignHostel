<script setup>
import CardLayout from '../../../components/public/cardLayout.vue';
import BaselineArrowUpward from '../../../assets/svg/baseline-arrow-upward.vue';
import Table from '../../../components/Table/Table.vue';
import { onMounted } from 'vue';

const props = defineProps({
  id: {
    type: String
  },
})


</script>

<template>
  <div class="wrapper flex-col__imp justify-center">
    <section class="flat w-full">
      <div class="flat__intro bas p-8 bg-white rounded-lg shadow-lg">
        <div class="flat__text text-center text-3xl text-primary">
          Квартира {{ id }}
        </div>
      </div>
    </section>

    <section class="flat__content justify-center gap-4 mt-20 flex">
      <div class="flat__table flex flex-col w-full">
        <Table />
      </div>

    </section>

  </div>
</template>

<style lang="scss" scoped>
.flex-col__imp {
  flex-direction: column !important;
}
</style>