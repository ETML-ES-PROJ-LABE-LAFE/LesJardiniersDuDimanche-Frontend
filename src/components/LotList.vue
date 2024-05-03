<template>
  <table class="lot-table">
    <thead>
    <tr>
      <th>Numéro de Lot</th>
      <th>Nom</th>
      <th>Description</th>
      <th>Prix de Départ</th>
      <th>Catégorie</th>
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
  props: ['lots']
};
</script>

<style scoped>
.lot-table {
  width: 90%;
  border-collapse: collapse;
  margin: 20px auto; /* Modifie les marges pour centrer le tableau */
  box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
}
.lot-table th, .lot-table td {
  text-align: left;
  padding: 15px; /* Assurez-vous que le padding est le même pour th et td */
  vertical-align: top; /* Assure l'alignement vertical si nécessaire */
  border-bottom: 3px solid #ddd;
  background-color: #f4f4f4;
  font-size: 16px; /* Utilisez la même taille de police pour les th et td */
  width: 5%;
}
.lot-table th {
  background-color: #666;
  color: white;
}
.lot-table tr:nth-child(even) {
  background-color: #f9f9f9;
}
.lot-table tr:hover {
  background-color: #e8f0fe;
}
</style>
