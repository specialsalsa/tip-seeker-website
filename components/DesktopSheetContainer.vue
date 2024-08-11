<template>
  <v-sheet
    height="800"
    :width="width - width / 5"
    class="sheet mx-auto my-8"
    elevation="16"
  >
    <ScreenshotCard
      title="Check addresses for tip data"
      :img="tipperLookup"
    ></ScreenshotCard>
    <v-divider vertical inset></v-divider>
    <ScreenshotCard title="Record tips & notes" :img="addNew"></ScreenshotCard>
    <v-divider vertical inset></v-divider>
    <ScreenshotCard
      title="View recently logged trips"
      :img="tipLog"
    ></ScreenshotCard>
  </v-sheet>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { width, mobile } = useDisplay();

import addNew from "../public/add-new.png";
import tipperLookup from "../public/tipper-lookup.png";
import tipLog from "../public/tip-log.png";
</script>

<style scoped>
.sheet {
  display: flex;
}

.card {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
