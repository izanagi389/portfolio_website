<template>
  <main class="pt-20">
    <section>
      <div
        class="w-full text-center text-3xl pb-3 text-white drop-shadow-[0_0px_3px_rgba(0,0,0,1)]"
      >
        {{ title }}
      </div>

      <section class="m-10 p-2 bg-white ">
        <template v-for="c in contents" :key="c.id">
          <div class="leading-[4rem]" v-html="c.content"></div>
          <Shiki
            v-if="c.viewHtml.includes('blockquote') == false && c.viewHtml !== ''"
            :code="c.viewHtml"
            :theme="theme"
            :lang="c.lang"
          />
          <div v-else v-html="c.viewHtml" />
        </template>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
const post_id = route.params.post_id;

// 初期表示の記事データを取得
let { data }: any = await useAsyncData("mountains", () =>
  $fetch(`/api/microcms?post_id=${post_id}`)
);

let theme = "github-dark-dimmed"

const title = data.value.title;
const contents = data.value.blogContent;

// pre,codeタグを削除
const removetags = (element: string) => {
  let e;

  if (typeof element == "string") {
    e = element.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    e = e.replace(/<.*pre.*>/g, "");
    e = e.replace(/<.*code.*>/g, "");
    e = e.trim();
  } else {
    e = "";
  }

  return e;
};

// コードの言語を取得
const codeLang = (element: string) => {
  let lang;

  if (typeof element == "string") {
    if (element.search(/lang-.*>/g) !== -1) {
      lang = element.match(/lang-.*>/g);
      if (lang !== null) {
        lang = lang[0].replace("lang-", "").replace('">', "");
      }
    } else if (element.search(/language-.*>/g) !== -1) {
      lang = element.match(/language-.*>/g);
      if (lang !== null) {
        lang = lang[0].replace("language-", "").replace('">', "");
      }
    } else {
      lang = "";
    }
  } else {
    lang = "";
  }

  if (lang == "markup" || lang == "nginx") {
    lang = "markdown";
  } else if (lang == "bash") {
    lang = "shellscript";
  }

  return lang;
};

contents.forEach((element) => {
  element.lang = codeLang(element.html);
  element.viewHtml = removetags(element.html);
});
</script>

<style>
.shiki {
  display: block;
  padding: 10px 20px;
}

img{
  border: 1px solid black;
}
</style>