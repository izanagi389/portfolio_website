<template>
    <div id="contact_page">
        <TheHeader />
        <TopContact />
        <TheFooter />
    </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const config = useRuntimeConfig()
const title = "お問い合わせ";
const description = "お問い合わせページになります。"
const url = config.HOMEPAGE_ROOT_URL + route.fullPath;

useHead({
    title: title,
    meta: [
        { property: 'og:title', hid: 'og:title', content: title },
        { name: 'description', hid: 'description', content: description },
        { property: 'og:description', hid: 'og:description', content: description },
        { property: 'og:url', hid: 'og:url', content: url },
        { name: 'robots', content: 'noindex,nofollow' }
    ],
    script: [
        { src: 'https://sdk.form.run/js/v2/formrun.js' }
    ],

})
</script>