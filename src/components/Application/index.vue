<script setup>
import TaskLayout from '../public/taskLayout.vue';
import ButtonTail from '../public/buttonTail.vue';
import { ref } from 'vue';

const name = ref('Аскаров Эрик');
const flat = ref(603);
const selectedItem = ref(false);

const selectItem = (item) => {
  selectedItem.value = { title: item };

  console.log(selectedItem.value);
};
</script>

<template>

  <div class="
      application
      grow
      pb-9
      md:-mt-2.5 md:pt-1.5 md:pb-0
      ">
    <div class="application__header">
      <div class="pb-6 w-full">
        <span class="
            text-xl
            text-primary
          ">Заявки</span>
      </div>
    </div>
    <div class="application__body block">
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        <TaskLayout class="transition-transform hover:-translate-y-1" v-for="item in 6" :key="item">
          <div class="flex item-center">
            <div class="rounded-full w-8 h-8 sm:w-10 sm:h-10">
              <div class="avatar">
                <img class="w-10 h-10 rounded-full object-cover object-center"
                  src="https://i.pinimg.com/564x/04/38/f6/0438f6019adc4f0a1f8023ab5577fee4.jpg" alt="" />
              </div>
            </div>
            <div class="ltr:ml-2 rtl:mr-2 font-['Raleway-Medium'] text-blue-700">
              {{ name }}
              <span class="
                  block pt-0.5 text-xs font-['Raleway-Regular'] text-gray600
                ">
                {{ flat }}
              </span>
            </div>
          </div>
          <div class="overflow-hidden text-ellipsis -tracking-wider ltr:pl-2 rtl:pr-2">
            <ButtonTail @click="$emit('selectItem', item)">Открыть</ButtonTail>
          </div>
        </TaskLayout>

      </div>
    </div>
  </div>
</template>