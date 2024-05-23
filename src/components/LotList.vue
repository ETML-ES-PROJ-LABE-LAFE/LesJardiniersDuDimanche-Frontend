<!-- Dossier Components/Fichier LostList.vue-->

<template>
  <table class="lot-table">
    <thead>
    <tr>
      <th>Catégorie</th>
      <th>Sous-Catégorie</th>
      <th>Nom</th>
      <th>Description</th>
      <th>Prix de départ</th>
      <th>Prix actuel</th>
      <th>Details</th>
    </tr>
    </thead>
    <tbody>
    <LotItem v-for="lot in lots" :key="lot.id" :lot="lot" />
    </tbody>
  </table>
</template>

<script>
import LotItem from "@/components/LotItem.vue";

export default {
  components: {
    LotItem
  },
  props: {
    lots: {
      type: Array,
      required: true
    }
  }
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

.lot-table {
  width: 98%;
  border-collapse: collapse;
  margin: 5px auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  font-family: 'Nunito', sans-serif; /* Assurez-vous que la police est appliquée au tableau */
  font-weight : bold;
}

.lot-table th, .lot-table td {
  text-align: left;
  padding: 15px;
  vertical-align: middle;
  border-bottom: 1px solid #ddd;
  background-color: #f4f4f4;
  font-size: 16px;
  color: #333; /* Définit la couleur du texte pour une meilleure visibilité */
}

.lot-table th {
  background-color: #333;
  color: white; /* Couleur de texte pour les en-têtes pour le contraste */
}

.lot-table tr:nth-child(even) {
  background-color: #f0f0f0;
}

.lot-table tr:hover {
  background-color: #e2e2e2;
}
</style>
