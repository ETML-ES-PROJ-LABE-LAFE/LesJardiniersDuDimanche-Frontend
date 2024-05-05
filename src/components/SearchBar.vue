<template>
  <input type="text" v-model="searchQuery" placeholder="Rechercher..." class="search-input"/>
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
  margin-bottom: 2px;
  margin-right: 1%;
  padding: 10px;
  width: 30%;
  max-width: 300px;
  border-radius: 10px;
  border: 1px solid #ccc;
}
</style>
