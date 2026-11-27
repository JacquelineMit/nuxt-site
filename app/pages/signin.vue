<script setup>
const state = reactive({
  email: "",
  password: "",
});
console.log(state);
let loading = ref(false);
async function clickButton() {
  loading.value = true;
  await login(state.email, state.password);
  loading.value = false;
  navigateTo(`/users`);
}
async function login(email, password) {
  const form = new FormData();
  form.append("email", email);
  form.append("password", password);
  const response = await fetch(`/api/user/signin`, {
    method: "POST",
    body: form,
    credentials: "include",
  });
  const data = await response.json();
  return data;
}
</script>

<template>
  <main class="main">
    <form class="form">
      <h1 class="title">Вход</h1>
      <UFormField class="cont-input" label="Email" name="email">
        <UInput class="input" v-model="state.email" />
      </UFormField>
      <UFormField class="cont-input" label="Password" name="password">
        <UInput class="input" v-model="state.password" type="password" />
      </UFormField>
      <UButton
        class="submit"
        :loading="loading"
        type="submit"
        @click="clickButton"
      >
        Submit
      </UButton>
    </form>
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
.cont-input {
  font-family: "Roboto", Arial, sans-serif;
  font-size: 12px;
  margin-bottom: 5px;
}
</style>
