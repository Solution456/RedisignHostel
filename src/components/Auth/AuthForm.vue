<script setup>
import inputTailVue from '../public/inputTail.vue';
import buttonTailVue from '../public/buttonTail.vue';
</script>


<template>
    <div class="container p-4">
        <div class="form flex flex-col justify-center mt-32">
            <div class="form-title text-center text-primary text-4xl font-bold">
                Вход в @HostelApp
            </div>

            <div class="form-inputs mt-24">
                <div class="input-control">
                    <inputTailVue type="text">Логин</inputTailVue>
                </div>

                <div class="input-control">
                    <inputTailVue type-input="password">Пароль</inputTailVue>
                </div>
            </div>

            <div class="form-footer text-center mt-2">
                <buttonTailVue>Войти</buttonTailVue>
            </div>
        </div>
    </div>
</template>