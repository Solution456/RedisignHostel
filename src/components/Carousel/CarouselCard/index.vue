<script setup>
import { useRouter } from 'vue-router';
import ButtonTail from '../../public/buttonTail.vue';
const props = defineProps({
    item:{
        type: Object,
        require:true,
    }
})

const router = useRouter()


function pushRoute(nameRoute, param){

    router.push({name:nameRoute,params:param})
}
</script>


<template>
<div class="card-slide">
    <div class="image" :style="`background-image: url('${item?.url}')`">
        <!-- <img class=" rounded-lg object-center bg-cover h-full" :src="imgURL" alt=""> -->
    </div>
    <div class="card-slide__fade"></div>
    <div class="card-slide__content text-start text-white flex flex-col justify-between py-12 pl-8 absolute bottom-0 top-0 left-0 overflow-hidden text-ellipsis min-h-0">
        <div class="flex flex-col">
            <div class="text-subtitle text-xl text-primary">
                Lorem, ipsum.
            </div>
            <div class="text-description mt-2 mb-1 overflow-hidden font-['Raleway-Regular'] text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, veniam.
            </div>
            <div class="text-date text-primary text-xs">05/05/2000</div>
        </div>
        <div class="card-slide__actions">
        <ButtonTail @click="pushRoute('event',{id:item.id})">Посмотреть</ButtonTail>
    </div>
    </div>

</div>

</template>


<style lang="scss" scoped>
    .card-slide{
        display: flex;
        height: 100%;
        width: 100%;
        border-radius: 8px;
        position: relative;
        text-decoration: none;
        user-select: none;
        background: #888;

        .image{
            display: block;
            overflow: hidden;
            width: 100%;
            height: auto;
            max-width: 100%;
            position: absolute;
            bottom: 0;
            top: 0;
            left: 0;
            right: 0;
            border-radius: 8px;
            object-fit: cover;
            background-repeat: no-repeat;
            background-size:cover;
            background-position: center center;
            width: 100%;
            height: 100%;
        }
        .card-slide__fade{
            background-image:  linear-gradient(266.15deg, rgba(50, 105, 246, 0.55) 10.32%, rgba(255, 255, 255, 0.55) 100.74%);;
            position: absolute;
            bottom: 0;
            top: 0;
            left: 0;
            right: 0;
            border-radius: 8px;
            transition: .3s cubic-bezier(0.23, .8, 0.5, 1);
        }
        .card-slide__content{
            right: 50%;
        }
    }
</style>


