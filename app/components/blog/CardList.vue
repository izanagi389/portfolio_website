<template>
  <li class="bg-white w-1/4 m-2 p-3 rounded-md hover:scale-105 duration-300">
    <a :href="'/blog/post/' + content.id" class="">
      <img :src="content.thumbnail.url" alt="" class="h-64 object-cover w-full" />
      <div class="truncate font-semibold">{{ content.title }}</div>
      <div class="h-10 flex flex-col text-end">
        <time class="mt-auto" :datetime="content.createdAt">{{
          dateFommter(content.updatedAt)
        }}</time>
      </div>
    </a>
  </li>
</template>

<script setup lang="ts">
type Content = {
  id: String;
  title: String;
  updatedAt: String
  thumbnail: Object;
};

interface Props {
  content: Content;
}

const Props = withDefaults(defineProps<Props>(), {
  content: {
    type: Object as () => Props,
    required: true,
  },
});

const dateFommter = (date) => {
  const date_object = new Date(date);
  return `${date_object.getFullYear()}年${date_object.getMonth()}月${date_object.getDate()}日`;
};
</script>