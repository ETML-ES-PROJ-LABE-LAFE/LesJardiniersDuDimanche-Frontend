<!-- Dossier components/ Fichier FilterCategories-->
<template>
  <div class="filter-categorie">

    <!-- Sélection de la catégorie avec gestion dynamique de la valeur et du changement -->
    <select :value="value" @change="onCategoryChange($event.target.value)">
      <option value="">Sélectionnez une catégorie</option>
      <!-- Bloc conditionnel qui vérifie si des catégories sont disponibles pour l'affichage -->
      <template v-if="categories && categories.length">
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
    // Gestion du changement de sélection dans le menu déroulant
    onCategoryChange(value) {
      if (!value) { // Si aucune valeur n'est sélectionnée (option vide - Sélectionner une catégorie)
        this.$emit('category-changed', null);  // Émet un événement avec `null` pour indiquer la réinitialisation
      }
      else { // Si une valeur est sélectionnée
        const category = this.categories.find(cat => cat.id === parseInt(value)); // Trouver la catégorie correspondante
        const categoryName = category ? category.name : 'Inconnue'; // Obtenir le nom de la catégorie ou 'Inconnue' si non trouvée
        console.log("Changement de catégorie : ID :", value, "Nom:", categoryName); // Logger le changement
        this.$emit('input', value);  // Émettre la valeur sélectionnée pour mise à jour du v-model
        this.$emit('category-changed', value);  // Émettre l'ID de la catégorie pour chargement des lots spécifiques
      }
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



