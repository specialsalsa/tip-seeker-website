<script setup>
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

await preloadComponents(["ScreenshotCard", "MobileWindowContainer"]);
</script>

<template>
  <NuxtLayout>
    <v-app class="app">
      <AppHeader />
      <!-- <DownloadButton /> -->
      <div class="container">
        <SideCard v-if="!mobile" title="About the app" />
        <MobileWindowContainer />
        <SideCard v-if="!mobile" title="About me" />
      </div>
      <!-- <DesktopSheetContainer v-else /> -->
    </v-app>
  </NuxtLayout>
</template>

<style scoped>
.app {
  display: flex;
}

.container {
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
</style>
