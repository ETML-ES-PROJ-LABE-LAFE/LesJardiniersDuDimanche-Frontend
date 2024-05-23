<!-- Dossier components / Fichier LotItem.vue-->

<template>
  <tr class="lot">
    <td>{{ lot.category.name }}</td>
    <td>{{ lot.subCategory.name }}</td>
    <td>{{ lot.id }}</td>
    <td>{{ lot.name }}</td>
    <td>{{ lot.description }}</td>
    <td>{{ lot.startingPrice }} CHF</td>
    <td>
      <router-link :to="{ name: 'LotDetails', params: { id: lot.id }}">
        Voir les détails
      </router-link>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    lot: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.lot td {
  padding: 15px;
  border-bottom: 3px solid #ccc;
  background-color: #f9f9f9;
  text-align: left; /* Ajout pour aligner le texte à droite */
}
.lot:hover {
  background-color: #e8f0fe;
}
</style>
