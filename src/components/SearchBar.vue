<template>
  <input type="text" v-model="searchQuery" placeholder="Rechercher nom, une description ..." class="search-input"/>
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
  width: 50%;
  max-width: 310px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

</style>
