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

  border: 2px solid transparent; /* Remove default border if present */
  transition: border 0.3s ease-in-out; /* Smooth transition for hover effect */
}
.card:hover {
  border: 2px solid #b3e5ab; /* Pastel green inner border when hovered */
  box-shadow: inset 0 0 0 2px #b3e5ab; /* Create the inner border effect */
}
</style>
