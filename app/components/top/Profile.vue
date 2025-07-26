<template>
  <!-- プロフィールカードセクション -->
  <section class="pb-32">
    <div class="p-4 w-full self-center">
      <PartsTitle :title="'Profile'" />
      <div
        class="text-center w-4/5 ml-auto mr-auto border-solid border-2 border-sky-500 bg-white p-4"
      >
        <img
          src="/img/profile_image.png"
          class="rounded-full w-36 ml-auto mr-auto mb-4"
          alt=""
        />
        <div class="mt-4 mb-4 text-sm">{{ profile.ncikname.title }}</div>
        <div class="mt-4 mb-4 text-6xl font_dancing_script">
          {{ profile.ncikname.content }}
        </div>
        <div class="mt-10 mb-4 text-sm">{{ profile.hobby.title }}</div>
        <div>{{ profile.hobby.content }}</div>
        <div class="flex flex-wrap justify-end">
          <template v-for="a in account" :key="a">
            <a :href="a.href" target="_blank" rel="noopener"><i :class="a.class"></i></a>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PROFILE, ACCOUNTS } from '~/constants';

const profile = PROFILE;
const account = ACCOUNTS;
</script>
