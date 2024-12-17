<template>
  <main class="p-20">
    <section>
      <div
        class="w-full text-center text-3xl pb-3 text-white drop-shadow-[0_0px_3px_rgba(0,0,0,1)]"
      >
        Articles
      </div>
      <ul class="flex flex-wrap justify-between">
        <template v-for="c in contents" :key="c">
          <BlogList :content="c" v-if="contents_show" />
        </template>
      </ul>
    </section>
    <div class="text-center mt-10">
      <button
        class="w-72 p-4 text-sky-500 hover:text-white bg-white hover:bg-sky-500 rounded-full duration-300"
        v-if="more_btn_show"
        @click="moreContents"
      >
        More
      </button>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: "記事一覧",
});

let offset = 9;
let limit = 9;

let { data } = await useAsyncData("mountains", () =>
  $fetch(`/api/microcms?limit=${limit}`)
);

let contents = data.value.contents;
let totalCount = data.value.totalCount;

let more_btn_show = ref(true);

const moreContents = async () => {
  data = await useAsyncData("contents", () =>
    $fetch(`/api/microcms?offset=${offset}&limit=${limit}`)
  );
  contents = contents.concat(data.data.value.contents);
  toggleComponent();

  if (totalCount > offset) {
    offset += 9;
  }
  if (totalCount < offset) {
    more_btn_show.value = false;
  }
};

let contents_show = ref(true);

const toggleComponent = () => {
  contents_show.value = false;
  nextTick();
  contents_show.value = true;
};
</script>
