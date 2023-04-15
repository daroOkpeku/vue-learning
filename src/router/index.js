import { createRouter, createWebHistory } from "vue-router";
import Quiz from '../Quiz.vue'
import Counter from '../Counter.vue'
import Home from '../Home.vue'
import SingleQuiz from '../SingleQuiz.vue'
const routers = createRouter({
    history:createWebHistory(import.meta.env.Base_URL),
    routes:[
        {
            path:'/',
            name:"/home",
            component:Home

        },
        {
            // this work when the user add 127.0.0.1/home it redirect the user to main page
            path:"/home",
            redirect:'/'

        },
        {
            path:'/quiz',
            name:"quiz",
            component:Quiz
        },
        {
            path:'/counter',
            name:'counter',
            component:Counter
        }, 
        {
            path:'/singlequiz/:slug',
            name:'singlequiz',
            component:SingleQuiz
        }
    ]
});

export default routers;