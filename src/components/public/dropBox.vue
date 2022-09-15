<script setup>
import { ref } from "vue";
import ButtonTail from "./buttonTail.vue";

const props = defineProps({
    modelValue:{
        type:[Array,String,File]
    }
})
const emits = defineEmits(['update:modelValue'])

const active = ref(false)
const inputFile = ref(null)
const imgURL = ref(null)


const toggleActive = () => {
    active.value = !active.value
}

const selectFile = () => {
    inputFile.value.click()
}

const drop = (e) => {
  const fileObj = e.dataTransfer.files[0]
  e.target.value = null
  imgURL.value = URL.createObjectURL(fileObj)
  active.value = false
  emits('update:modelValue', fileObj)
}

const cancelIMG = () => {
    imgURL.value = null
    emits('update:modelValue','')
}

const handleFileChange = (e) => {
    const fileObj = e.target.files && e.target.files[0]
    if (!fileObj){
        return
    }
    e.target.value = null
    imgURL.value = URL.createObjectURL(fileObj)


    emits('update:modelValue', fileObj)

}
</script>


<template>
  <div class="mb-8">
    <div class="relative mb-3">
      <span
        class="
          block
          text-sm
          font-['Raleway-Medium']
          uppercase
          tracking-wider
          text-primary
        "
      >
        Загрузка файла
      </span>
      <div
        class="
          rounden-lg
          border border-solid border-blue-300
          bg-white
          p-4
          sm:p-6
        "
      >
        <div
          @dragenter.prevent="toggleActive"
          @dragleave.prevent="toggleActive"
          @dragover.prevent
          @drop.prevent="drop"
          role="button"
          tabindex="0"
          class="
            border border-dashed
            relative
            border-blue-700
            h-48
            flex
            items-center
            justify-center
            rounded-lg
          "
          :class="{'active-dropbox': active}"
        >
          <input
            type="file"
            accept="image/*"
            style="display: none"
            tabindex="-1"
            ref="inputFile"
            @change="handleFileChange"
          />
          <div v-if="!imgURL" class="text-center">
            <p
              class="
                mb-6
                text-sm
                tracking-tighter
                text-gray-600
                dark:text-gray-400
              "
            >
              PNG, GIF, WEBP, MP4 or MP3. Max 100mb.
            </p>
            <ButtonTail @click="selectFile">Выберите файл</ButtonTail>
          </div>

          <div v-else class="filePreviewImg flex gap-1 justify-center flex-col items-center rounded-lg overflow-hidden w-full h-full">
            
            <div class="imgBlock relative">
                <img :src=imgURL class="rounded-lg relative my-1 mx-auto max-h-36 max-w-full object-contain" alt="">
                <div @click="cancelIMG" class="absolute block rounded-full -right-3 -top-1.5 text-white bg-primary hover:bg-red-500 transition hover:-translate-y-0.5">
                    <Icon icon="carbon:close" width="32" height="32"/>
                </div>
            </div>
            
            
            <span class="text-primary text-center text-xs break-all sm:text-md font-['Raleway-Medium']">{{props.modelValue?.name}}</span>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.active-dropbox{
    color: #fff;
    border-color: #fff;
    background-color: #93c5fd;
    transition: all .5s ease;

    button{
        visibility: hidden;;
    }
}
</style>