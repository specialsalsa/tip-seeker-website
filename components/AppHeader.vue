<template>
  <v-card
    class="mx-auto my-8 title-card"
    :elevation="elevation"
    max-height="800"
    :width="width - 55"
    @mouseover="addElevation()"
    @mouseleave="elevation = 0"
  >
    <v-card-item>
      <v-card-title class="title">Tip Seeker</v-card-title>

      <v-card-subtitle class="subtitle"> Knowledge is Power! </v-card-subtitle>
    </v-card-item>
  </v-card>
</template>

<script setup>
import { useDisplay } from "vuetify";

const elevation = ref(0);
const { width } = useDisplay();

function addElevation() {
  elevation.value = 16;
}
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  font-size: 3rem;
  transition: color 0.5s;
}

.title-card {
  border-radius: 16px;

  border: 2px solid transparent; /* Remove default border if present */
  transition: border 0.3s ease-in-out; /* Smooth transition for hover effect */
}

.title:hover {
  color: green;
}

.title-card:hover {
  border: 2px solid #b3e5ab; /* Pastel green inner border when hovered */
  box-shadow: inset 0 0 0 2px #b3e5ab; /* Create the inner border effect */
}

.subtitle {
  display: flex;
  justify-content: center;
}
</style>
