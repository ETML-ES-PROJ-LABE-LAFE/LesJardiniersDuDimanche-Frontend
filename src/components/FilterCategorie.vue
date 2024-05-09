<!-- Dossier components/ Fichier FilterCategories-->
<template>
  <div class="filter-categorie">
    <select :value="value" @change="onCategoryChange($event.target.value)">
      <option value="">Toutes</option>
      <template v-if="categories && categories.length">
        <option v-for="category in categories" :value="category.name" :key="category.id">
          {{ category.name }}
        </option>
      </template>
    </select>
  </div>
</template>

<script>
export default {
  name: 'FilterCategories',
  props: {
    categories: Array,
    value: String // Assurez-vous d'utiliser 'value' ici pour correspondre à v-model dans le parent
  },
  methods: {
    onCategoryChange(value) {
      console.log("Changement de catégorie :", value);
      this.$emit('input', value);
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


