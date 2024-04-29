<template>
  <div>
    <app-header title="Todos List"></app-header>
    <todo-list v-bind:todos="todos" v-on:delete-task="deleteTask($event)"
                                    v-on:change-selected="changeSelected($event)"
                                    v-on:add-task="addTask($event)"></todo-list>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import TodoList from './components/TodoList.vue'
import taskService from './services/TaskService.js'

/*import { v4 as uuidv4 } from 'uuid';*/

export default {
  name: 'App',
  components: {
    AppHeader,
    TodoList
  },
  data() {
    return {
      todos: [
      ]
    }
  },
  methods: {
    changeSelected(id) {
      console.log(id)
      let task = this.todos.find( elem => elem.id === id )
      task.completed = ! task.completed
    },
    async addTask(description) {
      try {
        // Ajout d'une nouvelle tâche via le service
        let newTask = await taskService.add( description);

        // Affichage de la tâche ajoutée
        console.log( newTask);

        // Ajout de la nouvelle tâche au tableau todos
        this.todos.push(newTask );
      }
      catch( error ) {
        console.log("Erreur " + error);
      }
  },
  async deleteTask(id) {
      try {
        // Suppression de la tâche
        let removedTask = await taskService.delete( id );
        console.log(removedTask)

        // Suppression de la tâche du tableau todos
        this.todos = this.todos.filter( el => el.id !== id)
      }
      catch( error ) {
        console.log("Erreur " + error);
      }
  }
},
// Méthode appelée à la création de la vue
async created() {
      try {
        // Recherche des tâches et remplissage du tableau todos
        this.todos = await taskService.get(); 
      }
      catch( error ) {
        console.log("Erreur " + error);
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color:rgb(102, 107, 102)e;
  width: 50%;
  margin: 0 auto;
}
</style>
