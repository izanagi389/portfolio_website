<template>
  <main class="p-20">
    <section>
      <PartsTitle :title="title" />
      <BlogCardList :contents="contents" :contents_show="contents_show" />
    </section>
    <section v-if="contents_show" class="flex justify-center text-center mt-10">
      <PartsRoundButton :more_btn_show="more_btn_show" :text="'More'" @click-method="handleMoreContents" :loading="loading" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { useBlogPagination } from '~/composables/useBlogPagination';
import type { BlogContents } from '~/types';

// ページタイトル
const title = "Develop Blog";

useHead({
  title: title,
});

const { 
  contents, 
  more_btn_show, 
  loading, 
  contents_show, 
  moreContents, 
  initializeData 
} = useBlogPagination();

// 初期表示の記事データを取得
const { data } = await useAsyncData<BlogContents>("mountains", () =>
  $fetch(`/api/microcms?limit=9`)
);

// データを初期化
await initializeData(data.value || { contents: [], totalCount: 0 });

const handleMoreContents = () => moreContents();
</script>
