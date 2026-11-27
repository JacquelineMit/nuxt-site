<script setup>
const data = ref([
  { id: 1, name: "Анна Иванова", email: "anna@example.com" },
  { id: 2, name: "Иван Петров", email: "ivan@example.com" },
  { id: 3, name: "Мария Смирнова", email: "maria@example.com" },
  { id: 4, name: "Алексей Сидоров", email: "alex@example.com" },
]);

const columns = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Имя" },
  { accessorKey: "email", header: "Электронная почта" },
];
</script>

<template>
  <main class="main">
    <h1 class="title">Таблица пользователей</h1>
    <UTable :data="data" :columns="columns" class="flex-1" />
  </main>
</template>

<style></style>
