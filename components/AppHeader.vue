<template>
  <div class="header-container">
    <img id="logo" :src="tipSeekerLogo" />
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
  width: 100%;

  height: 5vh;
  background-color: black;
}

#logo {
  max-width: 120px;
}

h2 {
  font-size: 2rem;
  align-self: center;
  color: rgb(0, 207, 45);
}
</style>
