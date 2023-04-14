<script setup>
import { RouterLink } from 'vue-router';
// this is how to get the props passed from another file in vue
import { defineProps } from 'vue';
const {quizez} = defineProps(['quizez'])
// this is how to get the props passed from another file in vue


</script>
<template>

<div  v-for="quiz in quizez"  :key="quiz.id" class="card">
  <img :src="quiz.img" alt="" />
  <!-- this is how to pass data through the url :to="{name:'singlequiz', params:{slug:quiz.id}}  -->
  <RouterLink :to="{name:'singlequiz', params:{slug:quiz.id}}">
    <div class="card-text">
  <h2>{{ quiz.name }}</h2>
  <p>{{ quiz.questions.length }} questions</p>
  </div>
  </RouterLink>
  
    </div>

</template>
<style scoped>
/* card */
.card{
    width: 310px;
    overflow: hidden;
    border-radius:2%;
    box-shadow:1px 1px 1px 10px rgba(0, 0, 0, 0.1) ;
    margin-bottom: 35px;
    margin-right:20px;
    cursor: pointer;
}
.card img{
    width: 100%;
    height:190px;
    margin:0;
}
.card .card-text{
padding: 0 5px;
}
.card .card-text h2{
    font-weight: bold;
}
</style>