<script setup>
import ButtonTail from './buttonTail.vue';

</script>


<template>
    <div class="mb-8">
        <div class="relative mb-3">
            <span class="block text-sm font-medium uppercase tracking-wider text-primary">
                Загрузка файла
            </span>
            <div class="rounden-lg border border-solid border-blue-300 bg-white p-4 sm:p-6">
                <div role="button" tabindex="0" class="border border-dashed relative border-blue-700 h-48 flex items-center justify-center rounded-lg">
                    <input type="file" accept="image/*" style="display:none" tabindex="-1">
                    <div class="text-center">
                        <p class="mb-6 text-sm tracking-tighter text-gray-600 dark:text-gray-400">PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>
                        <ButtonTail>Выберите файл</ButtonTail>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>