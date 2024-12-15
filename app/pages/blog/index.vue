<template>
  <main class="p-20">
    <section>
      <div class="w-full text-center text-3xl pb-3 text-white drop-shadow-[0_0px_3px_rgba(0,0,0,1)]">Articles</div>
      <ul class="flex flex-wrap justify-evenly">
        <li v-for="d in data" :key="d" class="bg-white w-1/4 m-2 p-3 rounded-md hover:scale-105 duration-300 ">
          <a :href="'/blog/post/' + d.id" class="">
            <img :src="d.thumbnail.url" alt="" class="h-64 object-cover w-full" />
            <div class="truncate">{{ d.title }}</div>
            <div class="h-10 flex flex-col text-end"> 
              <time class="mt-auto" :datetime="d.updatedAt">{{dateFommter(d.updatedAt)}}</time>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup>

useHead({
  title: "記事一覧",
});

const data = await useFetchArticles();

const dateFommter = (date) => {
  const date_objext = new Date(date)
  return `${date_objext.getFullYear()}年${date_objext.getMonth()}月${date_objext.getDate()}日`
}
</script>
