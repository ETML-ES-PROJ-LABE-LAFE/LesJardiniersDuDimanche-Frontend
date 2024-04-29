<template>
    <div class="flex">
        <h1>{{ title }}</h1>
    </div>
    
</template>

<script>

export default {
    name : 'AppHeader',
    props : {
        title : {
            type : String, 
            require : true
        } 
    }
}

</script>

<style scoped>

    .flex {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div {
        background: lightgray;
    }

</style>