<template>
  <v-window class="sheet mx-auto my-8 d-flex" elevation="0" show-arrows="true">
    <v-window-item
      v-for="(_, index) in titles"
      :key="`card_${index}`"
      class="card"
    >
      <ScreenshotCard :title="titles[index]" :img="imgs[index]" />
    </v-window-item>
  </v-window>
</template>

<script setup>
import addNew from "../public/add-new.png";
import tipperLookup from "../public/tipper-lookup.png";
import tipLog from "../public/tip-log.png";

const imgs = [tipperLookup, addNew, tipLog];

const titles = [
  "Check addresses for tip data",
  "Record tips & notes",
  "View recently logged trips",
];
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
