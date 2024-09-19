<template>
  <div class="header-container">
    <img :src="tipSeekerLogo" />
    <h2>Tip Seeker</h2>
  </div>
</template>

<script setup>
import tipSeekerLogo from "../public/Tip_Seeker_Logo.png";
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: flex-start;
  height: 5vh;
  background-color: black;
}

h2 {
  font-size: 2rem;
  align-self: center;
  color: rgb(0, 207, 45);
}
</style>
