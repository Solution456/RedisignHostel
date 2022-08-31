<template>
  <div class="radiogroup">
    <span
      class="
        p-2
        flex
        h-9
        cursor-pointer
        items-center
        justify-center
        rounded-lg
        border border-solid
        text-center text-sm
        font-medium
        uppercase
        tracking-wide
        transition-all
        border-primary
        bg-white
        text-primary
        shadow-sm
        hover:bg-primary
        hover:text-white
      "
    >
      <slot>Чип</slot>
    </span>
  </div>
</template>