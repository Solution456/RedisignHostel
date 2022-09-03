<script setup>
    const props = defineProps({
        url:{
            type:String
        }
    })
</script>


<template>
  <div
    class="
      shrink-0
      border-dashed border-gray-200
      dark:border-gray-700
      lg:px-6 lg:ltr:border-r lg:rtl:border-l
    "
  >
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
    >
      Опубликовано:
    </h3>
    <a class="inline-flex" href=""
      ><div
        class="
          flex
          items-center
          justify-between
          bg-white
          text-sm
          font-medium
          shadow-md
          rounded-full
          p-2
          text-blue-600
          hover:text-primary
        "
      >
        <div class="flex items-center">
          <div class="rounded-full w-6 h-6">
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
                ><img
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e"
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
                  " /></span
              ><img
                class="rounded-full"
                alt=""
                :src=url
                decoding="async"
                data-nimg="intrinsic"
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
            /></span>
          </div>
          <div class="ltr:ml-2 rtl:mr-2">@<slot></slot></div>
        </div>
        <div
          class="
            overflow-hidden
            text-ellipsis
            -tracking-wider
            ltr:pl-2
            rtl:pr-2
          "
        ></div></div
    ></a>
  </div>
</template>