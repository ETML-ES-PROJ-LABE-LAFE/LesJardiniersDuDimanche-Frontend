<template>
    <div class="item">
        <label v-bind:class="{ 'is-complete': todo.completed  }">{{ todo.title }}</label>
        <input type="checkbox" v-bind:checked="todo.completed" v-on:change="$emit('change-selected', todo.id)"/>
        <input type="button" class="delete" id="delete" value="DEL" v-on:click="$emit('delete-task', todo.id)">
    </div>
  </template>
  
  <script>
  export default {
    title: 'TodoItem',
    props: {
      todo: {
          type: Object,
          required: true
      }
    },
    methods: {
      /* Cette solution n'est plus acceptée, car le composant n'a pas le droit de modifier les objets du parent
      changeSelected() {
        console.log( this.todo.done )
        this.todo.done = !this.todo.done
      }*/
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
      .item {
          background: lightcyan;
          display: flex;
          justify-content: space-between;
          padding: 10px 10px;
      }
  
      .is-complete {
          text-decoration: line-through;
      }
  
      .hidden {
          display: none;
      }
  
      .delete {
          padding: 0 10px;
          margin: 0 10px;
      }
  
      label {
         width: 80%;
          padding: 0 10px;
          text-align: left;
      }
  
  </style>