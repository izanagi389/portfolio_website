<template>
    <div class="pl-5 ml-5">
        <a href="/" class="hover:opacity-50 ml-4 mr-4" ><i class="fa-solid fa-house"></i></a>
        <span>/</span>
        <a href="/blog/" class="hover:opacity-50 ml-4 mr-4" >Articles</a>
        <template v-for="breadcrumb in props.breadcrumb">
            <span>/</span>
            <a href="/blog/" class="hover:opacity-50 ml-4 mr-4" >{{ breadcrumb }}</a>
        </template>
                
    </div>
</template>

<script setup lang="ts">
interface Props {
    breadcrumb: Object;
}
const props = defineProps<Props>();
</script>