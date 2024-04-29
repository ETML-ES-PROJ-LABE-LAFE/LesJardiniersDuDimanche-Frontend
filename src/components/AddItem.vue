<template>
    <div class="add-item">
        <input type="text" v-model="description">
        <button v-on:click="$emit('add-task', description)">ADD</button>
    </div> 
</template>

<script>

export default {
    name: 'AddItem',
    props: {
    },
    data() {
        return {
            description: 'Ajouter une tâche...'
        }
    }
}
</script>

<style scoped>
   
    .add-item {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        padding: 5px 20px 5px 20px;
        background: lightgray;
    }

    input {
        width: 70%;
    }

    button {
        padding: 0 10px;
    }

</style>