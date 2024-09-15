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
        <SideCard title="About the app" v-if="!mobile" />
        <MobileWindowContainer />
        <SideCard title="About me" v-if="!mobile" />
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
}
</style>
