<!-- Dossier components/ Fichier FilterCategories-->
<template>
  <div class="filter-categorie">
    <select :value="selectedCategory" @change="onCategoryChange($event.target.value)">
      <option value="">Toutes les catégories</option>
      <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'FilterCategories', // Assurez-vous que le nom du composant est cohérent partout
  props: {
    categories: Array,
    selectedCategory: String
  },
  methods: {
    onCategoryChange(value) {
      this.$emit('input', value);  // Émet l'événement 'input' avec la valeur sélectionnée pour une gestion propre de v-model
    }
  }
};
</script>

<style scoped>
select {
  margin: 10px;
  padding: 12px 20px; /* Plus de padding pour un meilleur confort visuel */
  border-radius: 8px; /* Bordures plus arrondies pour un look moderne */
  background-color: white;
  border: 1px solid #ccc;
  font-size: 16px; /* Taille de police légèrement plus grande pour une meilleure lisibilité */
  color: #333; /* Couleur de texte foncée pour un contraste élevé */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Ajout d'ombre pour la profondeur */
  transition: all 0.3s; /* Transition pour un effet doux sur le focus/hover */
}

select:hover {
  border-color: #888; /* Changement de couleur de bordure au survol */
}

select:focus {
  outline: none; /* Suppression de l'outline par défaut pour le focus */
  box-shadow: 0 0 5px rgba(66, 153, 225, 0.5); /* Ombre bleue autour pour un effet focus clair */
}

.v-select {
  margin: 10px;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: white;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%; /* Assurez-vous que le sélecteur s'adapte à son conteneur */
}

.option-content {
  display: flex;
  align-items: center;
}
</style>

