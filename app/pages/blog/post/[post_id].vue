<template>
  <main id="post" class="pt-20">
    <section>
      <BlogBreadcrumb :breadcrumb="[title]" />
      <PartsTitle :title="title" />
      <div class="flex flex-row p-5">
        <section ref="content" class="p-5 m-5 bg-white md:w-2/3 w-full min-w-80">
          <template v-for="c in contents" :key="c.id">
            <div class="leading-[4rem]" v-html="c.content"></div>
            <!-- <Shiki v-if="c.viewHtml !== '' && c.html.includes('blockquote') == false" :code="c.viewHtml" :theme="theme"
              :lang="c.lang" /> -->
            <!-- <div v-else v-html="c.viewHtml" /> -->
            <div v-html="c.html" />

          </template>
        </section>

        <aside class="md:w-1/3 md:block hidden">
          <div class="sticky top-[120px] max-h-[500px] m-5 bg-white border-2 border-sky-500 min-w-56 max-w-72 overflow-y-auto">
            <div class="text-center text-white bg-sky-500">
              <i class="fa-solid fa-list"><span class="ml-2">目次</span></i>
            </div>
            <div class="p-5">
              <BlogTopic :topic="topic" />
            </div>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts" local>
import Prism from 'prismjs'

const route = useRoute();
const post_id = route.params.post_id;

// 初期表示の記事データを取得
let { data }: any = await useAsyncData("mountains", () =>
  $fetch(`/api/microcms?post_id=${post_id}`)
);


const title = data.value.title;
const contents = data.value.blogContent;

// 目次作成
const content_template = useTemplateRef("content")
let topic: any[] = []
onMounted(() => {
  if (content_template.value) {
    content_template.value.focus()
    let list = content_template.value.querySelectorAll("h1, h2, h3, h4, h5")

    let i3 = 0
    let i4 = 0
    list.forEach((l) => {
      let t = {
        id: l.id,
        text: l.innerText,
        tag: l.localName,
        children: []
      }

      if (l.localName == "h2") {
        topic.push(t)
        i3 = 0
        i4 = 0
      } else if (l.localName == "h3" && topic.length !== 0) {
        topic[topic.length - 1].children.push(t)
        i3++
        i4 = 0
      } else if (l.localName == "h4" && i3 - 1 >= 0) {
        topic[topic.length - 1].children[i3 - 1].children.push(t)
        i4++
      } else if (l.localName == "h5" && i3 - 1 >= 0 && i4 - 1 >= 0) {
        topic[topic.length - 1].children[i3 - 1].children[i4 - 1].children.push(t)
      }
    })
  }

  Prism.highlightAll()
})
</script>

<style>
@import url("~/assets/css/post.css");
</style>