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
  width: 30rem;
  height: 30rem;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 50px;

  border-radius: 16px;
}
</style>
