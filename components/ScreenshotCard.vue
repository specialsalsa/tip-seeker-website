<template>
  <v-card
    class="title-card"
    :elevation="elevation"
    :min-width="mobile ? width - width / 2.5 : '300'"
    @mouseover="addElevation()"
    @mouseleave="mobile ? null : (elevation = 0)"
  >
    <v-card-item class="card-item">
      <v-card-title class="title">{{ title }}</v-card-title>
      <v-img :src="img" />
    </v-card-item>
  </v-card>
</template>

<script setup>
import { useDisplay } from "vuetify";

defineProps({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const elevation = ref(24);

const { width, mobile } = useDisplay();

function addElevation() {
  elevation.value = 16;
}
</script>

<style scoped>
.title-card {
  /* position: fixed; */
  /* height: 60vh; */

  background-color: #000000;
  border-radius: 20px;
  max-height: 60vh;
  margin-left: 20px;
  margin-right: 20px;
}

.card-item {
  max-height: 60vh;
}

.title {
  display: flex;
  font-size: 1.2rem;
  justify-content: center;
}

.img {
  height: auto;
}

@media (max-width: 1280px) {
  .title {
    font-size: 0.8rem;
  }
}
</style>
