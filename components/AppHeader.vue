<template>
  <div class="header-container">
    <img id="logo" :src="tipSeekerLogo" />
    <h2 :style="{ 'font-size': '2rem' }">Tip Seeker</h2>
  </div>
</template>

<script setup>
import tipSeekerLogo from "../public/Tip_Seeker_Logo.png";
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: flex-start;
  width: 100%;

  height: 5vh;
  min-height: 120px;
  background-color: black;
}

#logo {
  width: 120px;
  height: 120px;
}

h2 {
  font-size: 2rem;
  align-self: center;
  color: rgb(0, 207, 45);
}
</style>
