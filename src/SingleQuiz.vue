<script setup>
import Data from "./components/Data.json"
import Question from "./components/Question.vue"
import Questionheader from "./components/Questionheader.vue"
import Result from "./components/Result.vue";
import { ref, watchEffect, watch, computed } from "vue";
import { useRoute } from "vue-router";
const slug = useRoute().params.slug
// console.log(slug)
const quizes = ref([]);
const totalnum = ref(0)
const currentnum = ref(0)
const questionanswered = ref([])
const numberOfCorrect = ref(0)
const showResult = ref(false)
// watcheffect can be used to update any state in an application while watch is used to update a particular
// state or list state in watch method
// watchEffect(()=>{
const show = Data.find((item)=>item.id == parseInt(slug))
quizes.value.push(show.questions)
// const questionstatus = ref(`${currentnum.value}/${show.questions.length}`)


// })

// watch(()=>currentnum.value, ()=>{
//     // this method is used to check if there is an update in a state value eg currentnum.value
//     if(currentnum.value <= show.questions.length){
//         questionstatus.value = `${currentnum.value}/${show.questions.length}`
//     }
// })

const questionstatus = computed(()=>{
    // computed method is used to update status that dependence on other statuses update
    if(currentnum.value <= show.questions.length){
    return `${currentnum.value}/${show.questions.length}`
    }else{
        return `${show.questions.length}/${show.questions.length}` 
    }
})
const questionspercentage = computed(()=>{
    if(currentnum.value <= show.questions.length){

  return`${currentnum.value/show.questions.length * 100 }%`
    }else{
        return `100%`
    }
})

const onOptionSelected =(isCorrect)=>{
 console.log("emited event is:", isCorrect)
 if(isCorrect == true){
    numberOfCorrect.value++
 }

//  if(currentnum.value <= show.questions.length){
//     currentnum.value++
// }else if (currentnum.value == show.questions.length){
//      currentnum.value++
// }else{
//     currentnum.value = show.questions.length
// }

if(show.questions.length - 1 === currentnum.value){
    showResult.value = true 
}
currentnum.value++
}


</script>
<template>
<section>

<Questionheader  :total="questionstatus" :questionspercentage="questionspercentage"  />
<div>
  <!--question container-->
  <!-- @selectOption this is how you listen emit in Question compnent for changes -->
    <Question v-if="!showResult" :currentnum="currentnum"   :quizes="show.questions[currentnum]" :questionanswered="questionanswered" @selectOption="onOptionSelected" />
    <!--question container-->
   
   <Result
    :total="show.questions.length"
    :numberOfCorrect="numberOfCorrect"
    v-else/>
</div>

<!-- <button @click="currentnum++">next</button> -->
</section>
</template>
<style scoped>



</style>