<script setup>
import ArrowDown from '../../assets/svg/arrow-down.vue';
</script>


<template>
    <div class="select-group flex gap-6">
        <div class="relative">
            <button class="flex h-8 w-64 items-center justify-between rounded-lg bg-secondary p-2 text-xs text-white">
                Дата проведения:
                <ArrowDown :fill="'white'"/>
            </button>
        </div>
    </div>
</template>