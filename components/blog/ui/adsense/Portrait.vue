<template>
    <ins class="adsbygoogle" style="display:block" :data-ad-client="adsenseID" data-ad-slot="6171367194"
        data-ad-format="auto" data-full-width-responsive="true"></ins>
</template>

<script setup>

const config = useRuntimeConfig();

const adsenseID = ref(config.ADSENCE_CLIENT_ID);

onMounted(() => {
  nextTick(() => {
    (adsbygoogle = window.adsbygoogle || []).push({})
  })
})

</script>