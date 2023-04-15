<script setup>
import courses from "./components/Data.json"
import { ref, watch } from "vue";
import Card from "./components/Card.vue";
const quizez = ref(courses)
const search = ref("")


watch(search, ()=>{
    // watch is used to watch the state as it is changing here the search variable
     quizez.value = courses.filter((item)=>item.name.toLowerCase().includes(search.value.toLowerCase()))
    // console.log('hello from watcher')
})

</script>
<template>
<div class="container">
<header>
<h1>Quizes</h1>
<!-- trim is used to remove wide space on search -->
<input v-model.trim="search" type="text" placeholder="search..." />
</header>
<!-- container -->
<div class="options-container">
<!-- card -->

  <!--this is how to pass props into a compnonent eg you use this : and call the name preferable the name of the function, array, or variable   -->
   <Card :quizez="quizez" />
  <!-- <div class="card">
  <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1661162418/Tmc%20institute/Risk-Based-Approach-to-AML_fb2eqh.png" alt="" />
  <div class="card-text">
  <h2>Math</h2>
  <p>15 questions</p>
  </div>
    </div> -->
    <!-- card -->
</div>
<!-- container -->
</div>
</template>
<style scoped>
.container{
 max-width: 1000px;  
 margin:0 auto; 
}

header {
 margin-bottom:10px;
 margin-top: 30px;
 display: flex;
 align-items: center;
}

header h1{
    font-weight:bold;
    margin-right:30px;
}

header input{
    border:none;
    background-color:rgba(128, 128, 128, 0.1);
    padding:10px;
    border-radius:5px;
}

/* option */

.options-container{
    display:flex;
    flex-wrap: wrap;
    margin-top: 40px;
    margin: 3px;
}


</style>