<template>
  <v-card
    class="mx-auto my-8 title-card"
    :elevation="elevation"
    max-width="1500"
    max-height="800"
    :width="width < 1024 ? width - 20 : 1600"
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
const { width, mobile } = useDisplay();

const headerCardWidth = computed(() => width - 20);

function addElevation() {
  elevation.value = 16;
}
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  font-size: 4rem;
  transition: color 0.5s;
}

.title:hover {
  color: green;
}

.subtitle {
  display: flex;
  justify-content: center;
}
</style>
