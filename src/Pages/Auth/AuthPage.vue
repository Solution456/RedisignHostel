<script setup>

// IMG
import AuthImg from '../../assets/Img/logo.svg'
import AuthFormVue from '../../components/Auth/AuthForm.vue';



</script>




<template>
  <div class="mx-auto h-screen ">
    <div class="flex flex-row  h-screen justify-center">
      <div class="hidden md:block auth-intro basis-2/3 bg-authImg h-full">
        <div class="auth-text flex justify-center mt-52">
            <img :src=AuthImg alt="">
        </div>
        <div class="description flex justify-center mt-32">
            <span class="max-w-2xl text-2xl text-white text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
        </div>
      </div>
      <div class="auth-form basis-1/3 ">
        <AuthFormVue></AuthFormVue>
      </div>
    </div>
  </div>
</template>