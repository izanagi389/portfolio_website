<template>
  <div>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<script setup>

const runtimeConfig = useRuntimeConfig();

const title = runtimeConfig.public.site_title;
useHead({
  titleTemplate: (productCategory) => {
    return productCategory
      ? `${productCategory} - ${title}`
      : title
  }
  
})
</script>