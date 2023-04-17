<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../store/TaskStore'
const TaskStore = useTaskStore()
console.log()
const word = ref('')
const handleSubmit =()=>{
// console.log(word.value)
if(word.value.length >0){
let totaldata = TaskStore.task.length
let obj = {id:totaldata++, title:word.value, isFav:false }
TaskStore.AddTask(obj)
}

}


</script>
<template>
    <!-- submit.prevent this is meant for submiting a form and prevent the webpage from refreshing  -->
<form @submit.prevent="handleSubmit">
<input type="text" v-model="word" placeholder="I need to .." />
<button @click="handleSubmit">add</button>
</form>
</template>
<style scoped>
</style>