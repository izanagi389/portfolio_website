<template>
    <ul>
        <template v-if="tl" v-for="toc in tl">
            <li><a :href="'#' + toc.id">{{toc.name}}</a></li>
            <BlogUiTocNode v-if="toc.children" :tocList="toc.children" />
        </template>
    </ul>

</template>

<script setup lang="ts">

const props = defineProps({
    tocList: {
        type: Object,
        required: true
    }
});

const tl: any = props.tocList;

</script>


<style lang="scss" scoped>
ul {
    margin-left: 15px;
    font-size: 12px;

    li {
        margin: 10px 0;
    }
}

a {
    color: black;
}
</style>