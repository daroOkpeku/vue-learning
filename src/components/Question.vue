<script setup>
import { defineProps, defineEmits } from 'vue';
// defineEmits is used to pass event through component vue to update a state
const { currentnum, quizes, questionanswered} = defineProps([ 'currentnum', 'quizes', 'questionanswered']);
const emit = defineEmits(['selectOption']);
let alpha = ['A', 'B', 'C', 'D'];
// console.log(quizes)
const alphaVan = (index)=>{
return alpha[index]
}

const answerClick =(isCorrect)=>{
    console.log(isCorrect)
    // questionanswered.value.push([isCorrect]) 
}

// console.log(questionanswered)
 const emitSelectOption =(isCorrect)=>{
    // selectOption is the event while isCorrect is the data passed through 
   emit("selectOption", isCorrect)
 }
</script>
<template>
 <div class="question-container">
  <h1 class="question">
   {{ quizes.text }}
  </h1>
  </div>

  <div v-for="quiz, index in quizes.options"  @click="emitSelectOption(quiz.isCorrect)" class="options-container">
  <article class="option" @click="answerClick(quiz.isCorrect)">
    <p class="option-label">{{ alphaVan(index) }}</p>
    <div class="option-value">
    <p>{{ quiz.text }}</p>
    </div>
  </article>
  </div>
</template>
<style scoped>
.question-container{
   margin-top: 20px; 
}
.question{
    font-size: 40px;
    margin-bottom: 20px;
}

.option{
    display:flex;
    margin-bottom: 20px;
    cursor: pointer;
}

.option-label{
    background-color: bisque;
    width: 50px;
    height: 50px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.option-value{
    background-color: rgb(244, 239, 239);
    width: 100%;
    font-size: 30px;
    padding: 0 20px;
}
</style>