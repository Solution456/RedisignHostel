<script setup>
const props = defineProps({
    name:{
        type:String,
        default:'title'
    },
    disabled:{
        type:Boolean,
        default:false
    },
    value:{
        type:[String, Boolean, Number],
        default:''
    }
})

</script>



<template>
    <div class="mb-8">
        <div v-if="name !== 'title'" class="relative mb-3">
            <span class="block text-sm font-medium uppercase tracking-wider text-blue-600">
                {{name}}
            </span>
        </div>
        <div class="text-xs sm:text-sm">
            <label>
                <input :value=value :disabled=disabled type="text" min="0" class="mt-1 block h-10 w-full rounded-md border border-blue-300 bg-white px-4 py-2 text-sm placeholder-gray-400  transition-shadow duration-200 invalid:border-red-500 invalid:text-orange focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-primary focus:invalid:border-orange focus:invalid:ring-orange disabled:border-gray-200 disabled:bg-gray-50 disabled:text-blue-500  sm:h-12 sm:rounded-lg spin-button-hidden"/>
            </label>
        </div>
    </div>
</template>