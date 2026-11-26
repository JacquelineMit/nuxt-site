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
  <main>
    <h1>Вход</h1>
    <form>
      <UFormField label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormField>
      <UFormField label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormField>
      <UButton :loading="loading" type="submit" @click="clickButton">
        Submit
      </UButton>
    </form>
  </main>
</template>

<style></style>
