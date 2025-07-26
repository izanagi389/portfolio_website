<template>
    <div class="ml-5 mr-5">
        <a href="/" class="hover:opacity-50 ml-4 mr-4" ><i class="fa-solid fa-house"></i></a>
        <span>/</span>
        <a href="/blog/" class="hover:opacity-50 ml-4 mr-4" >Articles</a>
        <template v-for="(item, index) in breadcrumb">
            <span>/</span>
            <a v-if="index !== breadcrumb.length - 1" href="/blog/" class="hover:opacity-50 ml-4 mr-4" >{{ item }}</a>
            <span v-else class="ml-4 mr-4" >{{ item }}</span>
        </template>
                
    </div>
</template>

<script setup lang="ts">
interface Props {
    breadcrumb: string[];
}
const { breadcrumb } = defineProps<Props>();
</script>