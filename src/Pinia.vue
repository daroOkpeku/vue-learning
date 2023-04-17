<script setup>
import { ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue'
import TaskForm from './components/TaskForm.vue';
// this how you call the pinia data into another file
import { useTaskStore } from './store/TaskStore'
import { storeToRefs } from 'pinia';
// import {useTaskStore} from './store/TaskStore'
const TaskStore = useTaskStore()
const filters = ref("all");
// console.log(TaskStore.name)

// export default {
//   setup(){
//     const TaskStore = useTaskStore()
//     console.log(TaskStore.)
//   }
// }
const stephen = (task)=>{
 console.log(task)
}
// this is how to get favorite function from getters
// console.log(TaskStore.favorite)

// This is to fetch the data
TaskStore.getJsondata();
//  storeToRefs() is a function in pinia that is used to get all the state properities in the store and change them to refs
const {isLoadingapi, TotalCount, favoritecount, favorite}  = storeToRefs(TaskStore)
</script>
<template>
<!-- heading  -->
<header>
    <img src="./assets/pinia-logo.svg" alt="image"/>
    <h1>Pinia Task</h1>
</header>
<!-- heading  -->

<!-- filter nav -->
<nav class="filter">
  <button @click="filters = 'all'">All Task</button>
  <button @click="filters = 'fav'">Favorite</button>

</nav>
<!-- filter nav -->
<div class="new-task-form">
  <TaskForm/>
</div>

<!-- loading -->
<div class="loading" v-if="isLoadingapi">loading...</div>
<!-- loading -->

<!-- Task List -->
<div class="task-list" v-if="filters === 'all'">
  <p>all task</p>
  <p>your have {{ TotalCount }} total number of task</p>

  <div v-for="task in TaskStore.task">
    <TaskDetails :tasks="task"/>
  </div>
</div>
<!-- Task List -->

<div class="task-list" v-if="filters === 'fav'">
  <p>favorite task</p>
  <p>your have {{ favoritecount }} favorite task</p>
  <div v-for="task in favorite">
    <TaskDetails :tasks="task"/>
  </div>
  <!-- TaskStore.$reset this function is used to take the state to the default state for an example empty array -->
</div>
<button @click="TaskStore.$reset">Reset</button>

</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&family=VT323&display=swap');

body {
  background: #f2f2f2;
  color: #444;
  margin: 0;
}
body * {
  font-family: "Poppins";
}

/* header */
header {
  text-align: center;
  background: #e7e7e7;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
header img {
  max-width: 60px;
  transform: rotate(-10deg);
}
header h1 {
  margin: 0;
  font-size: 2em;
  padding-top: 25px;
  margin-left: 15px;
  color: #777;
  transform: rotate(2deg);
}
.task-list{
    max-width: 640px;
    margin: 20px auto;
}

.filter{
  width: 640px;
  margin: 10px auto;
}

.filter button{
  display: inline-block;
  margin-left: 10px;
  background-color: #fff;
  border:2px solid #555 ;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 0.8em;
  font-size: 1em;
}

.loading{
max-width: 640px;
border: 1px solid #fdd859;
background-color: #ffe9a0;
color: #3a3a3a;
padding: 5px 0;
text-align: center;
margin: 30px auto;
}
</style>