<!-- Dossier components/Fichier FilterSubCategories.vue -->
<template>
  <div class="filter-subcategorie">
    <select :value="selectedSubCategory" @change="handleSubCategoryChange($event.target.value)">
      <option value="">Sélectionnez une sous-catégorie</option>
      <option v-for="subCategory in subCategories" :value="subCategory.id" :key="subCategory.id">
        {{ subCategory.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'FilterSubCategories',
  props: {
    subCategories: Array,
    selectedSubCategory: String
  },
  methods: {
    handleSubCategoryChange(value) {
      this.$emit('update:selectedSubCategory', value);
    }
  }
};
</script>

<style scoped>
select {
  margin: 10px;
  padding: 12px 20px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid #ccc;
  font-size: 16px;
  color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

select:hover {
  border-color: #888;
}

select:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(66, 153, 225, 0.5);
}
</style>
