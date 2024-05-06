<!-- Dossier components / Fichier LotItem.vue-->

<template>
  <tr class="lot">
    <td>{{ lot.categorie }}</td>
    <td>{{ lot.id }}</td>
    <td>{{ lot.nom }}</td>
    <td>{{ lot.description }}</td>
    <td>{{ lot.prixDepart }} CHF</td>
    <td>
      <router-link :to="{ name: 'LotDetails', params: { id: lot.id }}">
        Voir les détails
      </router-link>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['lot'],
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
