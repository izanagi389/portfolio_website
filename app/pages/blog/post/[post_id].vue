<template>
  <main class="pt-20">
    <section>
      <div class="w-full text-center text-3xl pb-3 text-white drop-shadow-[0_0px_3px_rgba(0,0,0,1)]">
        {{ title }}
      </div>

      <div class="flex flex-row p-5">
        <section ref="content" class="p-5 m-5 bg-white w-3/4">
          <template v-for="c in contents" :key="c.id">
            <div class="leading-[4rem]" v-html="c.content"></div>
            <Shiki
              v-if="c.viewHtml !== '' && c.html.includes('blockquote') == false"
              :code="c.viewHtml"
              :theme="theme"
              :lang="c.lang"
            />
            <div v-else v-html="c.viewHtml" />
          </template>
        </section>

      <aside class="p-5 m-5 w-1/4 bg-black text-white">
        目次表示予定
      </aside>
      </div>
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

let theme = "github-dark-dimmed";

const title = data.value.title;
const contents = data.value.blogContent;

// pre,codeタグを削除
const removetags = (element: string) => {
  let e;

  if (typeof element == "string" && element !== undefined) {
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

contents.forEach((content: any) => {
  content.lang = codeLang(content.html);
  content.viewHtml = removetags(content.html);
});

const test = useTemplateRef("content")
let topic:any[] = []
onMounted( () => {
  if(test.value) {
    test.value.focus()
    let list = test.value.querySelectorAll("h1, h2, h3, h4, h5")
    console.log(list)
    
    let i3 = 0
    let i4 = 0
    list.forEach((l) => {
      let t = {
        id:l.id,
        text: l.innerText,
        tag: l.localName,
        children: []
      }

      if(l.localName == "h2") {
        topic.push(t)
        i3 = 0
        i4 = 0
      } else if(l.localName == "h3" && topic.length !== 0) {
        topic[topic.length - 1].children.push(t)
        i3++
        i4 = 0
      } else if(l.localName == "h4" && i3 - 1 >= 0) {
        topic[topic.length - 1].children[i3 - 1].children.push(t)
        i4++
      } else if(l.localName == "h5" && i3 - 1 >= 0 && i4 - 1 >= 0) {
        topic[topic.length - 1].children[i3 - 1].children[i4 - 1].children.push(t)
      }

      console.log(topic)
    })
  }
})
</script>

<style>
.shiki {
  display: block;
  padding: 10px 20px;
  overflow: auto;
}

img {
  border: 1px solid black;
}
</style>