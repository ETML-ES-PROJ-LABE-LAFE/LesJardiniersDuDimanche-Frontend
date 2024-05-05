<template>
  <input type="text" v-model="searchQuery" placeholder="Rechercher nom ou une description ..." class="search-input"/>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  }
};
</script>

<style>
.search-input {
  margin-right: 1%;
  padding: 10px;
  width: 30%;
  max-width: 230px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

</style>
