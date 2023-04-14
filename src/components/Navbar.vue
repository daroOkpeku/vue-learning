<script setup>
import {RouterLink} from "vue-router"
</script>
<template>
    <div>
      <RouterLink to="/quiz">quiz</RouterLink>
      <RouterLink to="/counter">counter</RouterLink>
      <!-- <RouterLink to="">counter</RouterLink> -->
    </div>
</template>
<style scoped>
.whole{
    width:100%;
    display: flex;
    align-items: center;
    justify-content:space-between;
    margin: 0, 5px;
}
</style>