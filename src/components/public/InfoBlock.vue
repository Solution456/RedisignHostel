<template>
    <div class="border-y border-dashed border-gray-200 py-5 xl:py-6">
        <div class="title-block text-sm font-medium uppercase tracking-wider text-primary">
            <slot name="title"></slot>
        </div>
        <div class="desciption-block text-sm leading-6 tracking-tighter text-blue-500">
            <slot name="description"></slot>
        </div>
    </div>
</template>