<template>
  <section class="pb-32">
    <div
      class="w-full text-center text-3xl pb-3 text-white drop-shadow-[0_0px_3px_rgba(0,0,0,1)]"
    >
      Develop Blog
    </div>
    <div class="w-full self-center">
      <ul class="pl-4 pr-4">
        <li v-for="c in Props.contents" class="mb-2 hover:scale-105 ease-in duration-300">
          <a :href ="`/blog/post/${c.id}`" class="flex justify-center flex-wrap">
            <img :src="c.thumbnail.url" alt="" class="h-36 w-36 object-cover bg-white" />
            <div class="w-3/4 bg-white pl-3 pt-3">{{ c.title }}</div>
            </a>
        </li>
      </ul>
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