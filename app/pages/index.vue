<script setup>
const state = reactive({
  name: "",
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
  const response = await fetch(`/api/user/signup`, {
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
      <h1 class="title">Регистрация</h1>
      <UFormField class="cont-input" label="Name" name="name">
        <UInput class="input" v-model="state.name" />
      </UFormField>
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
