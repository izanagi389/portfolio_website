<template>
    <div class="flex flex-wrap p-4 items-center justify-center">
        <a v-for="t in tags" class="w-1/6 text-center border-solid border-2 rounded-[25px] bg-white m-2 p-2"
            :href="'/blog/tag/' + t">{{ t }}</a>
    </div>
</template>

<script setup lang="ts">
let tags = [
    "Hello", "world", "normally", "you", "want", "more", "words",
    "than", "this"]
</script>