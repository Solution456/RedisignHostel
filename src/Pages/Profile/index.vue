<script setup>
import InfoBlock from "../../components/public/InfoBlock.vue";

import ButtonTail from "../../components/public/buttonTail.vue";





</script>

<template>
  <div class="wrapper">
    
    <div
      class="profile-main mx-auto flex w-full shrink-0 flex-col md:px4 xl:px-6"
    >
      <figure
        class="
          relative
          shrink-0
          overflow-hidden
          z-2
          mx-auto
          -mt-12
          sm:-mt-14
          md:mx-0 md:-mt-16
          xl:mx-0
          rounded-full
          border-white border-[5px]
          h-24
          w-24
          sm:h-28 sm:w-28
          md:h-32 md:w-32
          shadow-lg
        "
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
        >
          <span
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
              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%27160%27/%3e"
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
            />
          </span>
          <img
            alt="Author"
            src="https://i.pinimg.com/564x/04/38/f6/0438f6019adc4f0a1f8023ab5577fee4.jpg"
            decoding="async"
            data-nimg="intrinsic"
            class="rounded-full"
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
      </figure>
      <div
        class="
          flex
          w-full
          flex-col
          pt-4
          md:flex-row md:pt-10
          lg:flex-row
          xl:pt-12
        "
      >
        <div
          class="
            shrink-0
            border-dashed border-gray-200
            md:w-72
            ltr:md:border-r
            md:rtl:border-l md:rtl:pl-7
            lg:ltr:pr-10 lg:rtl:pl-10
            xl:ltr:pr-10 xl:rtl:pl-14
          "
        >
          <div
            class="
              profile-main__text
              text-center
              ltr:md:text-left
              rtl:md:text-right
              mb-5
            "
          >
            <h2
              class="
                text-xl
                font-['Raleway-Medium']
                tracking-tighter
                text-blue-700
                xl:text-2xl
              "
            >
              Erik Askarov
            </h2>
            <div
              class="
                mt-1
                text-sm
                font-['Raleway-Medium']
                tracking-tighter
                text-blue-500
                xl:mt-3
              "
            >
              6 ???????? - 303 ??????????????
            </div>
          </div>
          <div class="profile-main__bio hidden md:block">
            <InfoBlock class="border-y">
              <template #title> ?????????? ???????????????? </template>
              <template #description> +7-399-333-25-25 </template>
            </InfoBlock>
            <InfoBlock class="border-y">
              <template #title> ?????????? </template>
              <template #description> 150 </template>
            </InfoBlock>
            <InfoBlock class="border-y">
              <template #title> Social </template>
              <template #description>
                <a
                  href="vk/com"
                  target="_blank"
                  class="
                    mb-2
                    flex
                    items-center
                    gap-x-2
                    text-sm
                    transition
                    last:mb-0
                    hover:text-blue-700 hover:underline
                  "
                >
                  <Icon icon="ion:logo-vk" height="24px" />
                  @link/social
                </a>
              </template>
            </InfoBlock>
          </div>
        </div>
        
        <div class="application__form flex flex-col w-full">
          <router-view></router-view>
        </div>

       
        <!-- <Application v-if="!residentId" @selectItem="openTable"></Application>
        <Table v-else></Table> -->
      </div>
    </div>
  </div>
</template>



<style>
</style>