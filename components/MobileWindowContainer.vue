<template>
  <v-window
    class="sheet mx-auto my-8 d-flex"
    elevation="16"
    show-arrows="hover"
    :style="{ height: height - height / 4 + 'px' }"
  >
    <v-window-item class="card">
      <ScreenshotCard
        title="Check addresses for tip data"
        :img="tipperLookup"
      ></ScreenshotCard>
    </v-window-item>
    <v-divider vertical></v-divider>
    <v-window-item class="card">
      <ScreenshotCard
        title="Record tips & notes"
        :img="addNew"
      ></ScreenshotCard>
    </v-window-item>
    <v-divider vertical></v-divider>
    <v-window-item class="card">
      <ScreenshotCard
        title="View recently logged trips"
        :img="tipLog"
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

const isMobile = computed(() => width < 1024);
</script>

<style scoped></style>
