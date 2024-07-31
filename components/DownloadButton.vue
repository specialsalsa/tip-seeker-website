<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-btn @click="goToDownloadPage()"> Download Now </v-btn>
    </v-row>
  </v-container>
</template>

<script setup>
const goToDownloadPage = () => {
  window.location.href = "https://fastupload.io/6c46a6a50b52bd1f";
};
</script>
