<template>
  <section class="pb-32">
    <PartsTitle :title="'Products'" />
    <div class="w-full self-center">
      <div class="flex justify-center flex-wrap pr-10 pl-10 pt-10">
        <template v-for="w in works">
          <a :href="w.url">
            <div class="w-72 h-96 bg-white m-2">
              <img :src="w.img" alt="" class="p-2 h-1/2 w-full object-cover" />
              <div class="p-2">
                <div class="text-center mt-3 mb-3 font-bold">
                  {{ w.name }}
                </div>
              </div>
            </div>
          </a>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const works = [
  {
    name: "Develop blog",
    url: "/blog",
    img:"/img/profile_image.png",
  },
  // {
  //   name: "Japanese MIddle Name",
  //   url: "/app/middle_name/",
  //   img: "/img/profile_image.png",
  // },
];
</script>
