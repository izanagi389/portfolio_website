<template>
  <div ref="containerRef">
    <client-only>
      <ins class="adsbygoogle" style="display:block" :data-ad-client="adsenseID" data-ad-slot="6171367194"
        data-ad-format="auto" data-full-width-responsive="true"></ins>
    </client-only>
  </div>
</template>

<script setup lang="ts">

const config = useRuntimeConfig();

const adsenseID = ref(config.public.ADSENCE_CLIENT_ID);

onMounted(() => {
  nextTick(() => {
    (adsbygoogle = window.adsbygoogle || []).push({});
  })
}) 
</script>


<style scoped>
/* ➍ 広告未配信なら広告セクションを非表示にする */
ins.adsbygoogle[data-ad-status="unfilled"] {
  display: none !important;
}
</style>
