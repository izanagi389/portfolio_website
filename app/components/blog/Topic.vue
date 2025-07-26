<template>
  <ul v-if="contents_show" class="pl-2 text-[12px] list-[upper-roman] list-inside">
    <template v-for="t in topic">
      <li class="mb-2">
        <a :href="`#${t.id}`">{{ t.text }}</a>
      </li>
      <BlogTopic v-if="cildrenChecker(t.children)" :topic="t.children" />
    </template>
  </ul>
</template>

<script setup lang="ts">

import type { TopicItem } from '~/types';

interface Props {
  topic: TopicItem[];
}

const props = defineProps<Props>();

let topic: any;
let contents_show = ref(true)
onMounted(() => {

  topic = props.topic

  contents_show.value = false;
  nextTick();
  contents_show.value = true;

})


const cildrenChecker = (children: TopicItem[]) => {
  return children && children.length > 0;
};
</script>

