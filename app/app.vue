<template>
  <div id="c-bg-image">
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <TheHeader />
    <NuxtPage />
    <PartsPageTopButton />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">

const runtimeConfig = useRuntimeConfig();

const title = runtimeConfig.public.site_title;
useHead({
  titleTemplate: (productCategory) => {
    return productCategory
      ? `${productCategory} | ${title}`
      : title
  }
  
})
</script>