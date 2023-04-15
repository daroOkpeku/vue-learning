<script setup>
import { defineProps } from 'vue';
let {total, questionspercentage}  = defineProps(["total", "questionspercentage"])

</script>
<template>
<header>
<h4>Question {{ total }}</h4>
<div class="bar" >
<div class="completion" :style="{width:questionspercentage}">
</div>
</div>
</header>
</template>
<style scoped>
header{
    margin-top: 20px;

}
header h4{
    font-size: 40px;
}

.bar{
    width:300px;
    height: 50px;
    border:3px solid bisque;
}

.completion{
    height:100%;
    width:0%;
    background-color: bisque;
}

</style>