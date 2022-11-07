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

const adsenseID = ref(config.ADSENCE_CLIENT_ID);

</script>
<style scoped>
</style>