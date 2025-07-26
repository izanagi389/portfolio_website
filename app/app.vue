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
import { createTitleTemplate } from '~/utils';

const runtimeConfig = useRuntimeConfig();
const title = runtimeConfig.public.site_title;

useHead({
  titleTemplate: createTitleTemplate(title)
});
</script>