<template>
    <div class="w-full text-center text-3xl pb-3 mt-10 text-white drop-shadow-[0_0px_3px_rgba(0,0,0,1)]">
        {{ title }}
    </div>
</template>

<script setup lang="ts">

interface Props {
    title: String;
}

const props = defineProps<Props>();
const title = props.title;

</script>