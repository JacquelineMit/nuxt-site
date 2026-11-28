<script setup>
const data = ref([
  { id: 1, name: "Анна Иванова", email: "anna@example.com" },
  { id: 2, name: "Иван Петров", email: "ivan@example.com" },
  { id: 3, name: "Мария Смирнова", email: "maria@example.com" },
  { id: 4, name: "Алексей Сидоров", email: "alex@example.com" },
]);

const name = ref("");
const email = ref("");

let nextId = Math.max(0, ...data.value.map((user) => user.id)) + 1;

function addUser() {
  const userName = name.value.trim();
  const userEmail = email.value.trim();

  if (!userName || !userEmail) return;

  data.value.push({
    id: nextId++,
    name: userName,
    email: userEmail,
  });

  name.value = "";
  email.value = "";
}

function removeUser(id) {
  data.value = data.value.filter((user) => user.id !== id);
}

const UButton = resolveComponent("UButton");

const columns = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Имя" },
  { accessorKey: "email", header: "Электронная почта" },
  {
    id: "actions",
    header: "Действия",
    cell: ({ row }) =>
      h(UButton, {
        label: "Удалить",
        color: "error",
        variant: "soft",
        size: "sm",
        onClick: () => removeUser(row.original.id),
      }),
  },
];
</script>

<template>
  <main class="main">
    <h1 class="title">Таблица пользователей</h1>
    <form class="form" @submit.prevent="addUser">
      <UFormField class="cont-input" label="Name" name="name">
        <UInput
          v-model="name"
          placeholder="Имя пользователя"
          aria-label="Имя пользователя"
          required
        />
      </UFormField>
      <UFormField class="cont-input" label="Email" name="email">
        <UInput
          v-model="email"
          type="email"
          placeholder="Электронная почта"
          aria-label="Электронная почта"
          required
        />
      </UFormField>

      <UButton type="submit" label="Добавить пользователя" />
    </form>
    <UTable :data="data" :columns="columns" class="flex-1" />
  </main>
</template>

<style>
.main {
  min-height: 100vh;
  margin: 0;
  padding: 24px;
  display: grid;
  place-items: center;
  background-color: #edf4ef;
  border: 10px solid #d4e3d8;
  border-radius: 20px;
}
.title {
  text-align: center;
  font-size: 30px;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: bold;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: #eef9f1;
  border: 5px solid #d4e3d8;
  border-radius: 20px;
  padding: 30px;
}
</style>
