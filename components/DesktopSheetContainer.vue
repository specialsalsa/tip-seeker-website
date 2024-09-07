<template>
  <v-sheet
    :width="width - width / 10"
    class="sheet mx-auto my-8"
    elevation="16"
  >
    <ScreenshotCard title="Check addresses for tip data" :img="tipperLookup" />
    <v-divider vertical inset />
    <ScreenshotCard title="Record tips & notes" :img="addNew" />
    <v-divider vertical inset />
    <ScreenshotCard title="View recently logged trips" :img="tipLog" />
  </v-sheet>
</template>

<script setup>
import addNew from "../public/add-new.png";
import tipperLookup from "../public/tipper-lookup.png";
import tipLog from "../public/tip-log.png";
import { useDisplay } from "vuetify";
const { width } = useDisplay();
</script>

<style scoped>
.sheet {
  display: flex;
  justify-content: space-around;
  padding-top: 8vh;
  padding-bottom: 8vh;
}
</style>
