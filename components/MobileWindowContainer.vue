<template>
  <div class="container">
    <v-window
      :class="`mx-auto my-8 d-flex sheet`"
      elevation="0"
      :show-arrows="true"
    >
      <v-window-item
        transition="slide-x-reverse-transition"
        reverse-transition="slide-x-transition"
        mode="in-out"
        duration="1"
        eager
        v-for="n in 3"
        :key="`card_${n - 1}`"
        class="card"
      >
        <ScreenshotCard :title="titles[n - 1]" :img="imgs[n - 1]" />
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup>
import addNew from "../public/add-new.png";
import tipperLookup from "../public/tipper-lookup.png";
import tipLog from "../public/tip-log.png";
import { useDisplay } from "vuetify";

const { height } = useDisplay();

const imgs = [tipperLookup, addNew, tipLog];

const titles = [
  "Check addresses for tip data",
  "Record tips & notes",
  "View recently logged trips",
];
</script>

<style scoped>
.sheet {
  position: absolute;
  min-height: 600px;
}

.card {
  position: relative;
  min-height: 600px;
}

.container {
  position: relative;
  display: flex;
  justify-content: center;
}

.card-actions {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
