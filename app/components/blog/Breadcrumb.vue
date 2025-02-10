<template>
    <div class="ml-5 mr-5">
        <a href="/" class="hover:opacity-50 ml-4 mr-4" ><i class="fa-solid fa-house"></i></a>
        <span>/</span>
        <a href="/blog/" class="hover:opacity-50 ml-4 mr-4" >Articles</a>
        <template v-for="breadcrumb in props.breadcrumb">
            <span>/</span>
            <a v-if="props.breadcrumb.lastIndexOf(breadcrumb) !== props.breadcrumb.length -1" href="/blog/" class="hover:opacity-50 ml-4 mr-4" >{{ breadcrumb }}</a>
            <span class="ml-4 mr-4" >{{ breadcrumb }}</span>
        </template>
                
    </div>
</template>

<script setup lang="ts">
interface Props {
    breadcrumb: Object;
}
const props = defineProps<Props>();
</script>