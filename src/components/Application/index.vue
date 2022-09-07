<script setup>
import TaskLayout from '../public/taskLayout.vue';
import ButtonTail from '../public/buttonTail.vue';

</script>

<template>
  <div class="wrapper">
    <div class="
      application__grid
      grow
      pt-6
      pb-9
      md:-mt-2.5 md:pt-1.5 md:pb-0 md:ltr:pl-7
      lg:ltr:pl-10 lg:rtl:pr-10
      xl:ltr:pl-14 xl:rtl:pr-14">
      <div class="block">
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          <TaskLayout class="transition-transform hover:-translate-y-1" v-for="item in 6" :key="item">
            <div class="flex item-center">
              <div class="text-blue-600 rounded-full w-8 h-8 sm:w-10 sm:h-10">
                <span style="
                  box-sizing: border-box;
                  display: inline-block;
                  overflow: hidden;
                  width: initial;
                  height: initial;
                  background: none;
                  opacity: 1;
                  border: 0px;
                  margin: 0px;
                  padding: 0px;
                  position: relative;
                  max-width: 100%;
                "><span style="
                    box-sizing: border-box;
                    display: block;
                    width: initial;
                    height: initial;
                    background: none;
                    opacity: 1;
                    border: 0px;
                    margin: 0px;
                    padding: 0px;
                    max-width: 100%;
                  ">
                    <Icon class="w-8 h-8  sm:w-10 sm:h-10" icon="ion:unlink-sharp" :class="item?.status === 'ongoing'?'text-primary'
                    :item?.status ==='fsa'?'text-green-500':'text-red-500'" />
                  </span>
                </span>
              </div>
              <div class="ltr:ml-2 rtl:mr-2">Title events<span
                  class="block pt-0.5 text-xs font-['Raleway-Regular'] capitalize text-gray-600 dark:text-gray-400">date
                  events</span></div>
            </div>
            <div class="overflow-hidden text-ellipsis -tracking-wider ltr:pl-2 rtl:pr-2">
              <ButtonTail @click="selectItem(item)">Открыть</ButtonTail>
            </div>
          </TaskLayout>

        </div>
      </div>
    </div>
  </div>
</template>