<template>
  <div
    class="title-card"
    @mouseover="addElevation()"
    @mouseleave="mobile ? null : (elevation = 0)"
  >
    <h3 class="title">{{ title }}</h3>
    <v-img :src="img" />
  </div>
</template>

<script setup>
// :min-width="mobile ? width / 3.5 : '400'"
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
  min-width: 250px;
  background-color: #000000;
  border-radius: 20px;
  max-height: 60vh;
  margin-left: 20px;
  margin-right: 20px;
  overflow: hidden;
  border: 10px solid black;
  /* padding: 10px 10px; */
}

.container {
}

.card-item {
  max-height: 50vh;
}

.title {
  display: flex;
  font-size: 1rem;
  justify-content: center;
}

.img {
}

@media (max-width: 1280px) {
  .title {
    font-size: 0.8rem;
  }
}
</style>
