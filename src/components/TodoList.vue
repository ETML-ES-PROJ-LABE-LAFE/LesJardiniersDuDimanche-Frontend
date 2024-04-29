<template>
    <div>
       <todo-item v-for="todo in todos"  v-bind:todo="todo" v-bind:key="todo.id"
          v-on:change-selected="$emit('change-selected', todo.id)"
          v-on:delete-task="$emit('delete-task', todo.id)">
        </todo-item>
       <add-item  v-on:add-task="$emit('add-task', $event)"></add-item>
    </div>
</template>

<script>
import AddItem from './AddItem.vue'
import TodoItem from './TodoItem.vue'

export default {
  components: { TodoItem, AddItem },
    title: 'TodoList',
    props : {
        todos : {
            type : Array
        }
    }
}
</script>

<style scoped>

p {
    font-size: 0.8em;
    text-align: left;
}
  
</style>

