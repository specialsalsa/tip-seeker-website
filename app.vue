<script setup>
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

await preloadComponents(["ScreenshotCard", "MobileWindowContainer"]);
</script>

<template>
  <NuxtLayout>
    <v-app class="app">
      <Header></Header>
      <DownloadButton></DownloadButton>
      <MobileWindowContainer v-if="mobile"></MobileWindowContainer>
      <DesktopSheetContainer v-else></DesktopSheetContainer>
    </v-app>
  </NuxtLayout>
</template>

<style scoped>
.app {
  display: flex;
}
</style>
