<template>
  <v-window
    :class="`mx-auto my-8 d-flex sheet`"
    elevation="0"
    :show-arrows="true"
  >
    <v-window-item v-for="n in 3" :key="`card_${n - 1}`" class="card">
      <ScreenshotCard :title="titles[n - 1]" :img="imgs[n - 1]" />
    </v-window-item>
  </v-window>
</template>

<script setup>
import addNew from "../public/add-new.png";
import tipperLookup from "../public/tipper-lookup.png";
import details from "../public/details.png";
import { useDisplay } from "vuetify";

const { height } = useDisplay();

const imgs = [tipperLookup, addNew, details];

const titles = [
  "Check addresses for tip data",
  "Record tips & notes",
  "View recently logged trips",
];
</script>

<style scoped>
.sheet {
  height: 600px;
}

.card {
  height: 600px;
}

.card-actions {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
