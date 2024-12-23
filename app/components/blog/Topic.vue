<template>
  <ul v-if="contents_show">
    <template v-for="t in topic">
      <li>
        <a :href="`#${t.id}`">{{ t.text }}</a>
      </li>
      <BlogTopic :topic="t.children" />
    </template>
  </ul>
</template>

<script setup lang="ts">

interface Props {
  topic: {
    id: String,
    text: String,
    tag: String,
    children: Object
  };
}

const props = defineProps<Props>();

console.log(props)

let topic;
let contents_show = ref(true)
onMounted( () => {

  topic = props.topic

  contents_show.value = false;
  nextTick();
  contents_show.value = true;

}) 



</script>