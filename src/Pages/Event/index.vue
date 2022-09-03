<script setup>
import SameInfoBlock from "../../components/public/sameInfoBlock.vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import ButtonTail from "../../components/public/buttonTail.vue";
import {CssFixedHeader, cssHeader} from '../../composable/CssClass.js'
import { onMounted, onUnmounted } from "@vue/runtime-core";

const props = defineProps({
  id: {
    type: [Number, String],
  },
});


const addFixedClassHeader= () => {
  let element = document.getElementById('head')
  CssFixedHeader.forEach(item => {
    element.classList.add(item)
  })

}

const removeFixedClassHeader = () => {
  let element = document.getElementById('head')
  CssFixedHeader.forEach(item => {
    element.classList.remove(item)
  })
  cssHeader.forEach( item => {
    element.classList.add(item)
  })
}

onMounted(()=>{
  console.log('mounted')
  addFixedClassHeader()
})

onUnmounted(() => {
  console.log('unmounted')
  removeFixedClassHeader()
})

const tabHeader = ["Описание", "Ссылки"];
</script>


<template>
  <div class="flex flex-grow mx-auto px-4 pt-20 sm:px-6 sm:pb-20 lg:px-8 !pb-0 xl:px-10 xl:pb-24">
    <div
      class="
        mx-auto
        flex
        w-full
        flex-grow flex-col
        transition-all
        xl:max-w-[1360px]
      "
    >
      <div
        class="
          relative
          mb-5
          flex flex-grow
          items-center
          justify-center
          md:pb-7 md:pt-4
          ltr:md:left-0 ltr:md:pl-6
          rtl:md:right-0 rtl:md:pr-6
          lg:fixed lg:mb-0 lg:h-[calc(100%-96px)] lg:w-[calc(100%-492px)]
          ltr:lg:pl-8
          rtl:lg:pr-8
          xl:w-[calc(100%-550px)]
          ltr:xl:pr-12 ltr:xl:pl-[100px]
          rtl:xl:pl-12 rtl:xl:pr-[100px]
        "
      >
        <div
          class="
            flex
            h-full
            max-h-full
            w-full
            items-center
            justify-center
            lg:max-w-[768px]
          "
        >
          <div
            class="relative aspect-square max-h-full overflow-hidden rounded-lg"
          >
            <span
              style="
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
              "
              ><span
                style="
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
                "
              >
                <img
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27768%27%20height=%27768%27/%3e"
                  style="
                    display: block;
                    max-width: 100%;
                    width: initial;
                    height: initial;
                    background: none;
                    opacity: 1;
                    border: 0px;
                    margin: 0px;
                    padding: 0px;
                  "
              /></span>
              <img
                alt=""
                src="https://i.pinimg.com/564x/87/a3/fd/87a3fddf4d05cb9cd6b06f8bb1e258fa.jpg"
                decoding="async"
                data-nimg="intrinsic"
                class="h-full bg-gray-200 dark:bg-light-dark"
                style="
                  position: absolute;
                  inset: 0px;
                  box-sizing: border-box;
                  padding: 0px;
                  border: none;
                  margin: auto;
                  display: block;
                  width: 0px;
                  height: 0px;
                  min-width: 100%;
                  max-width: 100%;
                  min-height: 100%;
                  max-height: 100%;
                "
              />
            </span>
          </div>
        </div>
      </div>

      <div
        class="
          relative
          flex
          w-full
          flex-grow flex-col
          justify-between
          ltr:md:ml-auto ltr:md:pl-8
          rtl:md:mr-auto rtl:md:pr-8
          lg:min-h-[calc(100vh-96px)] lg:w-[460px]
          ltr:lg:pl-12
          rtl:lg:pr-12
          xl:w-[592px]
          ltr:xl:pl-20
          rtl:xl:pr-20
        "
      >
        <div class="block">
          <div class="block">
            <div class="flex justify-between">
              <h2
                class="
                  text-xl
                  font-medium
                  leading-[1.45em]
                  -tracking-wider
                  text-primary
                  md:text-2xl
                  xl:text-3xl
                "
              >
                Events Title
              </h2>
            </div>
            <a
              class="
                mt-1.5
                inline-flex
                items-center
                text-sm
                -tracking-wider
                text-blue-600
                hover:text-primary
                xl:mt-2.5
              "
            >
              Опубликовано 05/05/2000
            </a>
            <div
              class="mt-4 flex flex-wrap gap-6 pt-0.5 lg:-mx-6 lg:mt-6 lg:gap-0"
            >
              <SameInfoBlock
                url="https://i.pinimg.com/564x/04/38/f6/0438f6019adc4f0a1f8023ab5577fee4.jpg"
                >AskarovE</SameInfoBlock
              >
            </div>
          </div>
          <div class="mt-5 flex flex-col pb-5 xl:mt-9">
            <TabGroup>
              <TabList
                class="
                  relative
                  mb-6
                  bg-body
                  text-sm
                  uppercase
                  before:absolute
                  before:left-0
                  before:bottom-0
                  before:w-full
                  before:rounded-sm
                  before:bg-gray-200
                  sm:gap-8 sm:rounded-none
                  md:before:h-0.5
                "
              >
                <div class="flex gap-6 md:gap-8 xl:gap-10">
                  <Tab
                    v-slot="{ selected }"
                    v-for="tab in tabHeader"
                    :key="tab"
                  >
                    <button
                      class="
                        relative
                        py-2
                        uppercase
                        tracking-wider
                        hover:text-primary
                        focus:outline-none
                        xs:py-2.5
                        sm:py-3
                      "
                      :class="
                        selected ? 'font-medium text-primary' : 'text-blue-600'
                      "
                    >
                      <span class="flex w-full justify-between px-3 md:px-0">
                        {{ tab }}
                      </span>
                      <span
                        class="
                          absolute
                          left-0
                          right-0
                          bottom-0
                          -z-[1]
                          h-0.5
                          w-full
                          rounded-lg
                          bg-primary
                          md:z-0
                        "
                        :class="selected ? 'block' : 'hidden'"
                      ></span>
                    </button>
                  </Tab>
                </div>
              </TabList>
              <TabPanels>
                <TabPanel class="focus:outline-none">
                  <div class="space-y-6">
                    <div class="block">
                      <h3
                        class="
                          text-sm
                          leading-5
                          font-medium
                          tracking-tighter
                          mb-2
                          uppercase
                          text-primary
                        "
                      > Описание</h3>
                      <div class="text-sm leading-6 -tracking-wider text-blue-600 dark:text-gray-400">Fisherian Runaways, Child of #48 Bat Veil &amp; #42 Screw Nose. This mushroom is the result of the cross-breeding of two original one of a kind generative mushrooms donated back to the Fisherian Runaways project their generous owner. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laudantium magni maiores alias. Qui quas tempore cumque? Ab odio ut cupiditate sunt maxime labore esse doloremque. Rem, ut, eveniet molestias cum, placeat dolor aliquam assumenda hic fuga mollitia laboriosam. Perferendis esse, nisi illum repudiandae dolor ullam architecto quo autem quas enim, deleniti possimus error dicta provident consectetur ipsa magni modi repellendus id, labore ducimus laborum ipsum temporibus! Aspernatur maiores molestias reprehenderit blanditiis perferendis reiciendis deserunt, voluptates tempore corporis. Tenetur atque fugiat amet repellat et quia rem excepturi. Odit voluptates magnam eligendi maxime error, veritatis consequatur quae excepturi ipsa dolor recusandae?</div>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
        <div class="sticky z-10 bottom-0 bg-background md:-mx-2 hidden md:block">
            <div class="-mx-4 border-t-2 border-gray900 px-4 pt-4 pb-5 sm:-mx-6 sm:px-6 md:mx-2 md:px-0 md:pt-5 lg:pt-6 lg:pb-7">
                <div class="grid grid-cols-2 gap-3">
                    <ButtonTail>Подписаться</ButtonTail>
                    <ButtonTail state="success">Поделиться</ButtonTail>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>