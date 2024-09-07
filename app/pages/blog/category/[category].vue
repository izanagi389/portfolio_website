<template>
    <main class="pt-20">
        <div class="">カテゴリページ</div>
    </main>
</template>

<script setup>
const route = useRoute()
console.log(route.params.category)
</script>