<template>
  <main id="post" class="pt-20">
    <section>
      <BlogBreadcrumb :breadcrumb="[title]" />
      <PartsTitle class="md:p-5" :title="title" />
      <div class="flex flex-row md:p-5 p-0 ">
        <section ref="content" class="p-5 m-5 bg-white md:w-2/3 w-full min-w-80">
          <template v-for="c in contents" :key="c.id">
            <div class="leading-[4rem]" v-html="c.content"></div>
            <div v-html="c.html" />
          </template>
        </section>

        <aside class="md:w-1/3 md:block hidden">
          <div class="sticky top-[120px] max-h-[500px] m-5 bg-white border-2 border-sky-500 min-w-56 max-w-72">
            <div class="text-center text-white bg-sky-500 h-[25px]">
              <i class="fa-solid fa-list"><span class="ml-2">目次</span></i>
            </div>
            <div class="p-5 h-[475px] overflow-y-auto">
              <BlogTopic v-if="topic.length > 0" :topic="topic" />
              <div v-else class="text-gray-500 text-center">目次を生成中...</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts" local>
import Prism from 'prismjs';
import { useTableOfContents } from '~/composables/useTableOfContents';
import type { BlogPost } from '~/types';

const route = useRoute();
const post_id = route.params.post_id;

// 初期表示の記事データを取得
const { data } = await useAsyncData<BlogPost>("mountains", () =>
  $fetch(`/api/microcms?post_id=${post_id}`)
);

const title = data.value?.title || '';
const contents = data.value?.blogContent || [];

// 目次作成
const content_template = useTemplateRef("content");
const topic = ref<any[]>([]);
const { generateTableOfContents } = useTableOfContents();

onMounted(() => {
  if (content_template.value) {
    content_template.value.focus();
    // 少し遅延を入れてDOMが完全に構築されてから目次を生成
    nextTick(() => {
      if (content_template.value) {
        topic.value = generateTableOfContents(content_template.value);
      }
    });
  }
  Prism.highlightAll();
});

// SSR時にも目次を生成するための処理
watchEffect(() => {
  if (content_template.value && contents.length > 0) {
    nextTick(() => {
      if (content_template.value) {
        topic.value = generateTableOfContents(content_template.value);
      }
    });
  }
});
</script>

<style>
@import url("~/assets/css/post.css");
</style>