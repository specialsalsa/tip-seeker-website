<template>
  <v-container class="container">
    <v-row align="center" justify="center">
      <v-btn @click="goToDownloadPage()" class="button"> Download Now </v-btn>
    </v-row>
  </v-container>
</template>

<script setup>
const goToDownloadPage = () => {
  window.location.href = "https://fastupload.io/6c46a6a50b52bd1f";
};
</script>

<style scoped>
.container {
  margin-top: -20px;
}
</style>
