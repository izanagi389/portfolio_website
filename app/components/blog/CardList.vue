<template>
  <ul class="flex flex-wrap md:justify-between justify-center">
    <template v-for="content, index in contents">
      <li
        class="bg-white lg:w-1/4 md:w-2/5 w-80 m-2 p-3 rounded-md hover:scale-105 duration-300 min-w-[320px]"
        v-if="contents_show"
        :key="'contents-' + index"
      >
        <a :href="'/blog/articles/' + content.id" class="">
          <img
            :src="content.thumbnail.url"
            alt=""
            class="h-64 object-cover w-full"
          />
          <div class="truncate font-semibold">{{ content.title }}</div>
          <div class="h-10 flex flex-col text-end">
            <time class="mt-auto" :datetime="content.createdAt">{{
              dateFommter(content.createdAt)
            }}</time>
          </div>
        </a>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import type { Content } from '~/types';
import { formatDate } from '~/utils';

interface Props {
  contents_show: boolean;
  contents: readonly Content[];
}

const props = defineProps<Props>();

const dateFommter = formatDate;
</script>