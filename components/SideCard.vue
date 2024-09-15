<template>
  <v-card class="card" :text="title" variant="elevated" elevation="16" />
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.card {
  min-width: 25rem;
  width: 35%;
  height: 30rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 50px;

  border-radius: 16px;
}
</style>
