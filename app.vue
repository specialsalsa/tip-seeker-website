<script setup>
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();
</script>

<template>
  <NuxtLayout>
    <v-app class="app">
      <AppHeader />
      <QuestionText />
      <AnswerText />
      <DesktopSheetContainer v-if="!mobile" />
      <MobileWindowContainer v-else />
    </v-app>
  </NuxtLayout>
</template>

<style scoped>
.app {
  display: flex;
}
</style>
