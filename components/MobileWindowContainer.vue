<template>
  <v-window class="sheet mx-auto my-8 d-flex" elevation="16" show-arrows="true">
    <v-window-item class="card" v-for="(img, index) in titles">
      <ScreenshotCard
        :title="titles[index]"
        :img="imgs[index]"
      ></ScreenshotCard>
    </v-window-item>
  </v-window>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { width, height, mobile } = useDisplay();

import addNew from "../public/add-new.png";
import tipperLookup from "../public/tipper-lookup.png";
import tipLog from "../public/tip-log.png";

const imgs = [tipperLookup, addNew, tipLog];

const titles = [
  "Check addresses for tip data",
  "Record tips & notes",
  "View recently logged trips",
];

const activeCard = ref(0);
const cards = ref([0, 1, 2]);

function selectCard(index) {
  activeCard.value = cards[index];
}
</script>

<style scoped>
.sheet {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  min-height: 60vh;
}

.card-actions {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
