<template>
  <client-only>
    <ins class="adsbygoogle" style="display:block" :data-ad-client="adsenseID" data-ad-slot="3707681924"
      data-ad-format="auto" data-full-width-responsive="true"></ins>
  </client-only>
</template>

<script setup>

const props = defineProps({
  adsenseID: String
})

const adsenseID = ref(props.adsenseID)

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