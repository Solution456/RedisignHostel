<script setup>
const props = defineProps({
    width:{
        type:String,
        default:'12'
    },
    height:{
        type:String,
        default:'8'
    },
    fill:{
        type:String,
        default:'none'
    }
})

</script>


<template>
  <svg
    :width=width
    :height=height
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.59 0.59L6 5.17L1.41 0.59L0 2L6 8L12 2L10.59 0.59Z"
      :fill=fill
    />
  </svg>
</template>