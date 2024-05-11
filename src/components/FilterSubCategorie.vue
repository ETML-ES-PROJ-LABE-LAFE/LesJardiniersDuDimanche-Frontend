<!-- Dossier components/Fichier FilterSubCategories.vue -->

<template>
  <div class="filter-subcategorie">

    <!-- Sélection de la catégorie avec gestion dynamique de la valeur et du changement -->
    <select :value="subValue" @change="onSubCategorieChange($event.target.value)">
      <option value="">Sélectionnez une sous-catégorie</option>

      <!-- Bloc conditionnel qui vérifie si des sous-catégories sont disponibles pour l'affichage -->
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
    subValue: String
  },
  methods: {
    // Gestion du changement de sélection dans le menu déroulant
    onSubCategorieChange(value) {
      if (!value){ // Si aucune valeur n'est sélectionnée (option vide - Sélectionner une sous-catégorie)
        this.$emit('subCategory-changed', null); // Émet un événement avec `null` pour indiquer la réinitialisation
      }
      else {
        const subCategory = this.subCategories.find(cat => cat.id === parseInt(value)); // Trouver la sous-catégorie correspondante
        const subCategoryName = subCategory ? subCategory.name : 'Inconnue'; // Obtenir le nom de la sous-catégorie ou 'Inconnue' si non trouvée
        console.log("Changement de sous-catégorie : ID :", value, "Nom:", subCategoryName); // Logger le changement
        this.$emit('input', value);  // Émettre la valeur sélectionnée pour mise à jour du v-model
        this.$emit('subCategory-changed', value);  // Émettre l'ID de la catégorie pour chargement des lots spécifiques
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
