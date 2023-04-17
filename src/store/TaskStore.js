// defineStore function  enable the developer to make a store
import { defineStore } from "pinia";
// taskStore is a unique key idenify for the store just like the key in local store api
// the object is where we define ref
export const useTaskStore = defineStore('taskStore', {
    // this is how i invoke the state function
 state:()=>({
    // you can add muitlple different properties
    task:[
        // {id:1, title:"buy some milk", isFav:false},
        // {id:2, title:"play Groomhaven", isFav:true}
    ],
    //isLoadingapi: this is to check if the data has loaded successfully
    isLoadingapi:false,
    //  name:'Stephen Okpeku',
  
 }),
 getters:{
      // getters is used to get data from the state or get a specific kind of data such as filter array
    // favorite method or function can be name an thing 
    favorite(){
        return this.task.filter((item)=>item.isFav)
    },

    favoritecount(){
        return this.task.filter((item)=>item.isFav).length
  
    },

    TotalCount(){
        return this.task.length
    }
    
},
actions:{
    // action are used to update or change the state either a string, number or array

    // AddTask(task){
    //     if(task){
    //      let ansdata =  this.task.map((item)=>item.title === task.title) 
    //      let answer  = ansdata.includes(true);
    //      if(!answer){
    //        this.task.push(task)
    //      }
    //     }
    // },
    // DeleteTask(id){
    // let ans = this.task.filter((item)=>item.id != id)
    //   this.task = ans
    // },
    // toggleFav(id){
    //  let ans = this.task.map((item)=>{
    //     return item.id == id?{...item, isFav:true}:item
    //  })
    // this.task = ans
    // },
// i made it asynchronous here
   async AddTask(task){
        if(task){
         let ansdata =  this.task.map((item)=>item.title === task.title) 
         let answer  = ansdata.includes(true);
         if(!answer){
           this.task.push(task)
            //this is going to add new object to the json file    
           const fetchdata = await fetch(`http://localhost:3000/task`, {
            method:"POST",
            body: JSON.stringify(task),
            headers: {'Content-Type': 'application/json'},
           });
           if(fetchdata.error){
              console.log(fetchdata.error)
           }

         }
        }
    },
    async  DeleteTask(id){
    let ans = this.task.filter((item)=>item.id != id)
      this.task = ans
      const fetchdata = await fetch(`http://localhost:3000/task/${id}`, {
        method:"DELETE",
       });
       if(fetchdata.error){
          console.log(fetchdata.error)
       }
    },
    async  toggleFav(id){
     let ans = this.task.map((item)=>{
        return item.id == id?{...item, isFav:true}:item
     })
    this.task = ans
    const fetchdata = await fetch(`http://localhost:3000/task/${id}`, {
        method:"PATCH",
        body: JSON.stringify({isFav:true}),
        headers: {'Content-Type': 'application/json'},
       });
       if(fetchdata.error){
          console.log(fetchdata.error)
       }

    },

//   to access the json file you have to install json server (npm install -g json server)
// after installing the server you can watch the json file with the server command
// npx json-server --watch ./data/db.json

async getJsondata(){
    this.isLoadingapi = true
   const fetchdata = await fetch(`http://localhost:3000/task`);
   const data = await fetchdata.json();
   this.task = data
   this.isLoadingapi = false
}


}
})

