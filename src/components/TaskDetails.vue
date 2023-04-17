<script setup>
import { defineProps } from 'vue';
import { useTaskStore } from '../store/TaskStore'
const {tasks} = defineProps(["tasks"]);
const TaskStore = useTaskStore()
// console.log()

</script>
<template>
    <div class="task">
        <h3>{{ tasks.title }}</h3>
        <div class="icons">
            <i class="material-icons"  @click="TaskStore.DeleteTask(tasks.id)">delete</i>
            <!-- task.isFav if it is true condition active class will icon be red if it is not no color  -->
            <i class="material-icons" :class="{active:tasks.isFav}" @click="TaskStore.toggleFav(tasks.id)">favorite</i>

        </div>
    </div>
</template>
<style scoped>
.task{
    padding: 6px 20px;
    background-color: #fff;
    margin-top: 20px;
    border-radius: 4px;
    box-shadow: 2px 4px 6px rgba(0, 0, 0 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.task h3, .task .icons{
display: inline-block;
}
.task .icons{
    text-align: right;
}

.task i{
    font-size: 1.4em;
    margin-left: 6px;
    color: #bbb;
    cursor: pointer;
}

.active{
    background-color: rgba(255, 0, 0, 0.427);
}
</style>