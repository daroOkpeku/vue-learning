<script setup>
import { defineProps } from 'vue';
const {total, numberOfCorrect} = defineProps(["total", "numberOfCorrect"])
const showtotal =()=>{
    return `${numberOfCorrect}/${total}`;
}
</script>
<template>
<div class="results">
<p>Your Result ...</p>
<h1>
 {{ showtotal() }}
</h1>
</div>
</template>
<style scoped>
.results {
    text-align: center;
    padding: 100px 0;
}
p{
    font-size: 25px;
}
h1{
    font-size: 80px;
}
</style>