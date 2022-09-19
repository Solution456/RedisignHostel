<script setup>
import CarouselVue from "../../components/Carousel/index.vue";
import SideCard from "../../components/Home/SideCard/index.vue";
import SelectVue from "../../components/public/selectVue.vue";
import CardLayout from "../../components/public/cardLayout.vue";
import ButtonTail from "../../components/public/buttonTail.vue";

import { useRouter } from "vue-router";
import { useEventsStore } from "../../stores/events/events";
import { ref } from "@vue/reactivity";
import { useSortedEvents } from "../../composables/useSortedEvents";
import { useSortedActualingEvents } from "../../composables/useSortedActualingEvents";

const router = useRouter();
const { CaraouselEvents, OtherEvents } = useEventsStore();
const options = [
  { value: 1, label: "По возрастанию" },
  { value: 2, label: "По убыванию" },
];
const { sortedEvents, sortVariant } = useSortedEvents(OtherEvents);
const { selectedVariant, SortedActualingEvents } =
  useSortedActualingEvents(sortedEvents);

const selectedRadio = (props) => {
  selectedVariant.value = props;
};

function pushRoute(nameRoute, param) {
  router.push({ name: nameRoute, params: param });
}
</script>

<template>
  <div class="carousel mt-3">
    <CarouselVue :items="CaraouselEvents"></CarouselVue>
  </div>

  <div class="wrapper justify-center">
    <div class="left-section hidden justify-center md:w-1/3 md:flex">
      <div class="sideCard--left max-w-full md:max-w-50">
        <SideCard @select="selectedRadio"></SideCard>
      </div>
    </div>
    <div class="right-section flex flex-col w-2/3 sm:w-full">
      <div class="filter relative flex justify-center sm:justify-end">
        <SelectVue v-model="sortVariant" :options-items="options" />
      </div>
      <div
        class="
          main-content
          mt-7
          p-0
          sm:pt-5
          border-t border-dashed border-gray-200
          grid
          gap-6
          sm:grid-cols-2
          md:grid-cols-3
          3xl:grid-cols-3
        "
      >
        <TransitionGroup name="event-list">
          <div
            class="main-content-item"
            v-for="item in SortedActualingEvents"
            :key="item.id"
          >
            <CardLayout>
              <div class="p-4">
                <a
                  href="#"
                  class="
                    flex
                    items-center
                    text-sm
                    font-['Raleway-Medium']
                    text-primary
                    transition
                    hover:text-blue-700
                  "
                  >@{{ item.id }}</a
                >
              </div>
              <a href="#" class="relative block w-full pb-full">
                <span
                  class="
                    box-border
                    block
                    overflow-hidden
                    bg-none
                    border-0
                    m-0
                    p-0
                    absolute
                    inset-0
                  "
                >
                  <img
                    class="
                      absolute
                      inset-0
                      box-border
                      p-0
                      border-none
                      m-auto
                      block
                      min-w-full
                      max-w-full
                      min-h-full
                      max-h-full
                      object-cover
                    "
                    :src="item.url"
                    alt=""
                  />
                </span>
              </a>
              <div class="p-5">
                <div class="text-sm font-['Raleway-Medium'] text-primary">
                  {{ item.description }}
                </div>
                <div
                  class="
                    mt-1.5
                    text-sm
                    flex
                    font-['Raleway-Regular']
                    text-gray600
                  "
                >
                  {{ $filters.formatedDate(item?.date) }}
                </div>
                <div class="mt-6 text-center">
                  <ButtonTail @click="pushRoute('event', { id: item.id })"
                    >Посмотреть</ButtonTail
                  >
                </div>
              </div>
            </CardLayout>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>


<style lang="scss">

.event-list-enter-active,
.event-list-leave-active {
  transition: all 0.4s ease;
}
.event-list-enter-from,
.event-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.event-list-enter-to,
.event-list-leave-from{
    opacity: 1;
}
.event-list-move {
  transition: transform 0.4s ease;
}


.wrapper {
  display: flex;
  flex-direction: row;
  width: 95%;
  max-width: 1275px;
  margin: 0 auto;
  padding-top: 75px !important;

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

.max-w-50 {
  width: 50%;
}

.pb-full {
  padding-bottom: 100%;
}
</style>



