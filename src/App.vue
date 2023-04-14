<!-- composition api -->
<script setup>
// setup: is used to tell if you are using the composition api in vue 3
import { ref } from 'vue';
// ref is a state in vue 3 
// ref is just like  useref or useState in react js where the string or the number is declared
// inside the ref()
const count = ref(0);

const OnAddtoCount =()=>{
 count.value  = count.value + 1
}

const OnSubtoCount =()=>{
  count.value = count.value - 1
}

</script>
<!-- composition api -->

<!-- options api -->
<!-- <script >
// this is where all the state and method  will be using option api
export default ({
  data(){
    return {
      count:0
    }
  }, 
  methods:{
    OnAddtoCount(){
       this.count = this.count + 1;
    },
    OnSubtoCount(){
      this.count = this.count - 1;
    }
  }
})

</script> -->
<!-- options api -->

<!-- to write html code you have write the <template></template> before inserting any html code -->
<!-- it is just like jsx in react js -->
<template>
  <main>
    <div>
    <h4>
      The current count is ...
    </h4>
    <h1>{{ count }}</h1>
    <button @click="OnSubtoCount()">-</button>
    <button @click="OnAddtoCount()">+</button>
  </div>
  </main>

</template>

<style scoped>
/* scoped: it is used to apply css styles to particular vue file  */
main{
  height:100vh;
  width:100vw;
  background-color: aliceblue;
  display:flex;
  align-items: center;
  justify-content: center;
}
div{
  text-align: center;
}
</style>