<script setup>
import Data from "./components/Data.json"
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
const slug = useRoute().params.slug

const quizes = ref([]);
// watcheffect can be used to update any state in an application while watch is used to update a particular
// state or list state in watch method
watchEffect(()=>{
const show = Data.filter((item)=>item.id == parseInt(slug))
quizes.value.push(show[0].questions)

})
console.log(quizes.value)

</script>
<template>
<div>
dkdhjdhjd dkdkjdkkj
</div>
</template>
<style scoped>

</style>