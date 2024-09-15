<template>
  <div
    class="title-card has-elevation"
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

.has-elevation {
  box-shadow: 0 clamp(5px, 1vw, 25px) clamp(10px, 2vh, 50px) rgba(0, 0, 0, 0.35),
    0 clamp(2px, 1vw, 20px) clamp(5px, 1vh, 15px) rgba(0, 0, 0, 0.25);
}

.card-item {
  max-height: 50vh;
}

.title {
  display: flex;
  font-size: 1rem;
  justify-content: center;
}

@media (max-width: 1280px) {
  .title {
    font-size: 0.8rem;
  }
}

@media (max-height: 900px) {
  .has-elevation {
    /* Adjust the shadow to ensure visibility */
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.35),
      /* Larger shadow for lower resolutions */ 0 10px 20px rgba(0, 0, 0, 0.25);
  }
}

@media (max-height: 700px) {
  .has-elevation {
    /* Ensure shadows stay small and visible at even smaller resolutions */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.35), 0 8px 15px rgba(0, 0, 0, 0.25);
  }
}
</style>
