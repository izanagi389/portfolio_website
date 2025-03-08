<template>
  <section class="pt-4 pr-4 pb-32 pl-4">
    <PartsTitle :title="'Develop Blog'" />
    <div class="w-full self-center">
      <ul class="pr-10 pl-10 pt-10">
        <li v-for="c in Props.contents" class="mb-2 hover:scale-105 ease-in duration-300">
          <a :href="`/blog/articles/${c.id}`" class="flex justify-center flex-wrap">
            <img :src="c.thumbnail.url" alt="" class="h-36 md:w-36 w-full object-cover bg-white" />
            <div class="md:w-3/4 w-full bg-white pl-3 pt-3">{{ c.title }}</div>
          </a>
        </li>
      </ul>
      <div class="block pr-10 pl-10 text-right text-white">
        <section class="text-center mt-10">
          <PartsRoundButton :more_btn_show="true" :text="'全ての記事を見る'" @click-method="jumpPage" :loading="false" />
        </section>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
type Contents = {
  id: string;
  title: string;
  thumbnail: Object;
};

interface Props {
  contents: Contents;
}

const Props = withDefaults(defineProps<Props>(), {
  contents: {
    type: Object as () => Props,
    required: true,
  },
});

const jumpPage = async () => {
  await navigateTo('/blog/')
}
</script>

<style>
img::after {
  color: #fff;
  content: "Read More";
  font-size: 22px;
  font-weight: bold;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 0;
}
</style>