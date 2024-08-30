<template>
  <v-card
    class="title-card"
    :elevation="elevation"
    @mouseover="addElevation()"
    @mouseleave="elevation = 0"
    :min-width="mobile ? width - width / 5 : '400'"
  >
    <v-card-item class="card-item">
      <v-card-title class="title">{{ title }}</v-card-title>
      <v-img :src="img"></v-img>
    </v-card-item>
  </v-card>
</template>

<script setup>
import { useDisplay } from "vuetify";

const props = defineProps({
  title: String,
  img: String,
});

const elevation = ref(0);

const { width, height, mobile } = useDisplay();

const color = ref("red");

function addElevation() {
  elevation.value = 16;
}
</script>

<style scoped>
.title-card {
  background-color: #000000;
  border-radius: 20px;
  max-height: 66vh;
  margin-left: 20px;
  margin-right: 20px;
}

.title {
  display: flex;
  font-size: 1.2rem;
  justify-content: center;
}
</style>
