<template>
    <div class="border-dashed border-gray-200 py-5 xl:py-6">
        <div class="title-block text-sm uppercase tracking-wider text-primary">
            <slot name="title"></slot>
        </div>
        <div class="desciption-block text-sm font-['Raleway-Medium'] leading-6 tracking-tighter text-blue-500">
            <slot name="description"></slot>
        </div>
    </div>
</template>