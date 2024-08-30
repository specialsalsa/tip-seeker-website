<script setup>
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

await preloadComponents(["ScreenshotCard", "MobileWindowContainer"]);
</script>

<template>
  <NuxtLayout>
    <v-app class="app">
      <AppHeader />
      <DownloadButton />
      <MobileWindowContainer v-if="mobile" />
      <DesktopSheetContainer v-else />
    </v-app>
  </NuxtLayout>
</template>

<style scoped>
.app {
  display: flex;
}
</style>
