<script setup>
const data = ref([]);
</script>

<template>
  <main class="main">
    <h1 class="title">Таблица пользователей</h1>
    <UTable :data="data" class="flex-1" />
  </main>
</template>

<style></style>
