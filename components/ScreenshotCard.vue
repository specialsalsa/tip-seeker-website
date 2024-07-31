<template>
  <v-card
    class="mx-auto my-8 title-card"
    :elevation="elevation"
    max-height="700"
    width="400"
    height="700"
    @mouseover="addElevation()"
    @mouseleave="elevation = 0"
  >
    <v-card-item>
      <v-card-title class="title">{{ title }}</v-card-title>
      <v-img :src="img"></v-img>
    </v-card-item>
  </v-card>
</template>

<script setup>
const props = defineProps({
  title: String,
  img: String,
});

const elevation = ref(0);

function addElevation() {
  elevation.value = 16;
}
</script>

<style scoped>
.title-card {
  background-color: #000000;
  border-radius: 30px;
}

.title {
  display: flex;
  justify-content: center;
}

img {
  width: 100%;
  height: auto;
}
</style>
