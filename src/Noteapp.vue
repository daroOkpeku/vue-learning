<!-- option api -->
<!-- <script>
import { ref } from 'vue';
export default({
    data(){ 
     return {
        pop:false,
        word:"",
        data:[],
        arr:[{id:1, name:"shsgfghfhsgs suyuy"}, {id:2, name:"shsgfghfhsgs suyuy"}, {id:3, name:"shsgfghfhsgs suyuy"}]
      }
     },
 methods:{
   addNote(){
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    if(this.data.length > 0){
      if(this.data.length == 1){
        let today = new Date();
     let obj = {id:this.data.length, word:this.word, today:today, backgroundColor:randomColor}
     this.data = [...this.data, obj]
     this.word = '';
      }else{
        let today = new Date();
     let obj = {id:this.data.length + 1, word:this.word, today:today, backgroundColor:randomColor}
     this.data = [...this.data, obj]
     this.word = '';
      }
    }else{
        let today = new Date();
     let obj = {id:0, word:this.word, today:today, backgroundColor:randomColor}
     this.data = [...this.data, obj]
     this.word = '';

    }

   },
   handleInput(){

   }
 }
})

</script> -->
<!-- option api -->

<!-- composition api -->
<script setup>
import { ref,  } from 'vue';
 const pop  = ref(false)
   const word = ref("")
    const  data = ref([])


    const addNote = ()=>{
       if(data.length > 0){
         if(data.length == 1){
            var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        let today = new Date();
        data.value.push({id:data.length, word:word.value, today:today, backgroundColor:randomColor})
        //  data.push({id:0, word:word.value, today:today, backgroundColor:randomColor})
         word.value = ""
         }else{
             var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        let today = new Date();
        data.value.push({id:data.length+1, word:word.value, today:today, backgroundColor:randomColor})
        //  data.push({id:0, word:word.value, today:today, backgroundColor:randomColor})
         word.value = ""
         }
       }else{
   var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        let today = new Date();
        data.value.push({id:0, word:word.value, today:today, backgroundColor:randomColor})
        //  data.push({id:0, word:word.value, today:today, backgroundColor:randomColor})
         word.value = ""
       }
     
    }

</script>
<!-- composition api -->

<template>
<main>
    <div> 
        <article>
            Note 
        </article>

        <span >
            <i @click="pop=true" class="pi pi-plus"></i>
        </span>
    </div>
   <!-- you can also use v-show like v-if -->
    <section v-if="pop" class="twice">
       <div class="module">
          <section>
            <span>
            <i  @click="pop = false" class="pi pi-times"></i>
        </span>
          </section>

          <section class="text">
          <!-- v-model is used for typing in words like onChange in react -->
       <textarea v-model="word">
       
       </textarea>
       <section class="">
        <button @click="addNote()">
            submit
        </button>
       </section>
       </section>
       </div>

       <section>
       </section>
    
    </section>

    <ul class="rat">
            
        
       
            <li v-for="({word, today, backgroundColor}, index) in data"  :key="index"     class="test" :style="{backgroundColor:backgroundColor}">
                <h2>{{ word }}</h2>
                <h3>{{ today }}</h3>
            </li>
        </ul>
</main>
   
</template>
<style scoped>
body{
    background-color: white;
}

div{
    width:70%;
    margin: auto;
    height:50px;
    padding:1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
div article{
    font-size: xx-large;
}
div i {
    font-size: x-large;
}
div span{
    width:30px;
    height:30px;
    border-radius: 50%;
    background-color: lightseagreen;
    display:flex;
    align-items: center;
    justify-content: center;
}
main{
    width:100%;
    position:relative;
}
.twice{
position: fixed;
z-index: 10;
top: 0;
left: 0;
right: 0;
background-color: black;
opacity:0.5;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
}

.module{
    width:500px;
    height: 300px;
    border-radius: 2px 2px;
    background-color: white;
    display: block;
    align-items: center;

}

.module section{
    width:100%;
    height:40px;
}

.module span{
    width:30px;
    height:30px;
    border-radius: 50%;
    background-color: lightseagreen;
    display:flex;
    align-items: center;
    justify-content: center;
    float: right;
}

.module i{
    font-size: medium;
}

.text{
    width: 100%;
    height: 100%;
}

.text textarea{
    width: 100%;
    height: 180px;
}

.test{
    color:white;
    font-size:small;
    display: block;
    border-radius: 3px 3px;
    justify-content: space-between;
    flex-direction: column;
   padding: 1rem;
   
}

.rat{
    width:100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

</style>