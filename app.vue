<script setup></script>

<template>
  <NuxtLayout>
    <v-app class="app">
      <AppHeader />
      <QuestionText />
      <AnswerText />
      <DesktopSheetContainer />
    </v-app>
  </NuxtLayout>
</template>

<style scoped>
.app {
  display: flex;
}
</style>
