<script setup>
const props = defineProps({
    imgURL:{
        type: String,
        require:true,
    }
})
</script>


<template>
<div class="card">
    <div class="image" :style="`background-image: url('${imgURL}')`">
        <!-- <img class=" rounded-lg object-center bg-cover h-full" :src="imgURL" alt=""> -->
    </div>
    
</div>
  
</template>


<style lang="scss" scoped>
    .card{
        display: flex;
        height: 100%;
        border-radius: 8px;
        position: relative;
        text-decoration: none;
        user-select: none;
        background: #888;

        .image{
            position: absolute;
            bottom: 0;
            top: 0;
            left: 0;
            right: 0;
            border-radius: 8px;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            width: 100%;
            height: 100%;
        }
    }
</style>


