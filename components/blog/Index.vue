<template>
    <v-main id="blog">
        <BlogUiTitleView />
        <v-container>
            <BlogUiContents :data="data" />
            <BlogUiPagenation :nowPageNum="nowPageNum" :pageMaxNum="pageMaxNum" :visibleNum="visibleNum" :path="path" />
        </v-container>
    </v-main>
</template>

<script setup lang="ts">
import { hash } from "ohash"

const route = useRoute()
const config = useRuntimeConfig()

const limit: number = 12;
const visibleNum: number = 4;

let nowPageNum: number = Number(route.params.page_num)
let offset: number = (nowPageNum - 1) * limit;
const categoryPath = route.params.category;
const tag = route.params.tag;

let filter: string | string[];
let filterKeyName: string;
let path: string;
let title: string;

if (categoryPath == "it") {
    path = `/blog/categories/${categoryPath}/`;
    filterKeyName = "categories";
    filter = "IT";
    title = `「IT」 - Develop blog - ${nowPageNum}ページ目`
} else if (categoryPath == "daily") {
    path = `/blog/categories/${categoryPath}/`;
    filterKeyName = "categories";
    filter = encodeURI("日記");
    title = `「日記」 - Develop blog - ${nowPageNum}ページ目`
} else if (categoryPath == "programming") {
    path = `/blog/categories/${categoryPath}/`;
    filterKeyName = "categories";
    filter = encodeURI("プログラミング");
    title = `「プログラミング」 - Develop blog - ${nowPageNum}ページ目`
} else if (!!tag) {
    path = `/blog/tags/${tag}/`;
    filterKeyName = "tags";
    filter = tag;
    title = `「${tag}」 - Develop blog - ${nowPageNum}ページ目`
} else {
    path = "/blog/pages/"
    filterKeyName = "";
    filter = "";
    title = `Develop blog - ${nowPageNum}ページ目`
}



let { data }: any = await useFetch("/api/microcms", {
    params: {
        offset: offset !== 0 ? offset : "",
        limit: limit,
        filterKeyName: filterKeyName,
        filter: filter
    },
    key: hash(['api-fetch', "/api/microcms", "Blog"]),
});


let pageMaxNum: number = Math.ceil(data.value["totalCount"] / limit);

const description: string = "ブログ一覧ページになります。"
const url: string = config.HOMEPAGE_ROOT_URL + route.fullPath;

useHead({
    title: title,
    meta: [
        { property: 'og:title', hid: 'og:title', content: title },
        { name: 'description', hid: 'description', content: description },
        { property: 'og:description', hid: 'og:description', content: description },
        { property: 'og:url', hid: 'og:url', content: url },
    ],
})

</script>

<style lang="scss" scoped>
#blog {
    background-color: #edf2f6;

    .v-container {
        max-width: 1296px !important;
    }
}
</style>