<script setup>
const state = reactive({
  email: "",
  password: "",
});
console.log(state);
let loading = ref(false);
function clickButton() {
  loading.value = true;
  setTimeout(function () {
    loading.value = false;
  }, 5000);
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
