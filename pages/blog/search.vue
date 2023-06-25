<template>
    <div id="search_page">
        <TheHeader />
        <BlogSearch />
        <TheFooter />
    </div>
</template>

<script lang="ts" setup>

const route = useRoute()
const config = useRuntimeConfig()
const title = `ブログ検索`;
const description = "ブログ内検索ページになります。"
const url = config.public.HOMEPAGE_ROOT_URL + route.fullPath;

useHead({
    title: title,
    meta: [
        { property: 'og:title', hid: 'og:title', content: title },
        { name: 'description', hid: 'description', content: description },
        { property: 'og:description', hid: 'og:description', content: description },
        { property: 'og:url', hid: 'og:url', content: url },
        { name: 'robots', content: 'noindex,nofollow' }
    ],
})
</script>
