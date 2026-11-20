<script setup>
let color = ref("warning");
function coloClick() {
  color.value = "error";
}
</script>

<template>
  <UButton :color="color" @click="coloClick">Button</UButton>
</template>
