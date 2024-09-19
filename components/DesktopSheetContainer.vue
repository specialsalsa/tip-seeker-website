<template>
  <v-sheet :width="width - width / 4" class="sheet mx-auto my-8" elevation="16">
    <ScreenshotCard
      title="Look up tip data from previous addresses"
      :img="tipperLookup"
    />
    <v-divider vertical inset />
    <ScreenshotCard
      title="Add new tip information after each dropoff"
      :img="addNew"
    />
    <v-divider vertical inset />
    <ScreenshotCard
      title="Look over a tip log of your recent deliveries"
      :img="tipLog"
    />
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
  padding-top: 5vh;
  padding-bottom: 5vh;
}
</style>
