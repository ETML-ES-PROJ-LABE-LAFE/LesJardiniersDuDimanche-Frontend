<!-- Dossier components/ Fichier FilterCategories-->
<template>
  <div class="filter-categorie">
    <select :value="value" @change="onCategoryChange($event.target.value)">
      <option value="">Sélectionnez une catégorie</option>
      <template v-if="categories && categories.length">
        <!-- Render a list of categories dynamically using category ID -->
        <option v-for="category in categories" :value="category.id" :key="category.id">
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
    value: String
  },
  methods: {
    onCategoryChange(value) {
      // Trouver le nom de la catégorie à partir de l'ID
      const category = this.categories.find(cat => cat.id === parseInt(value));
      const categoryName = category ? category.name : 'Inconnue';

      // Log avec l'ID de la catégorie et le nom
      console.log("Changement de catégorie : ID :", value, "Nom:", categoryName);
      this.$emit('input', value);  // Émet l'ID de catégorie au parent
      this.$emit('category-changed', value);  // Nouvel événement pour le chargement des lots
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



