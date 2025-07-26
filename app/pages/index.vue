<template>
  <main class="max-w-7xl pt-14 ml-auto mr-auto overflow-auto">
    <div id="c-title-box">
      <div id="c-top-title" v-html="split_str"></div>
    </div>
    <TopWorks />
    <TopProfile />
    <TopPosts :contents="data?.contents || []" />
    <!-- <TopTags /> -->
    
  </main>
</template>

<script setup lang="ts">
import { splitTitle } from '~/utils';
import { TOP_POSTS_LIMIT } from '~/constants';
import type { BlogContents } from '~/types';

const runtimeConfig = useRuntimeConfig();
const title = runtimeConfig.public.site_title;

const split_str = splitTitle(title);
const { data } = await useAsyncData<BlogContents>("mountains", () =>
  $fetch(`/api/microcms?limit=${TOP_POSTS_LIMIT}`)
);
</script>
<style>
@import url(~/assets/css/top.css);
</style>
