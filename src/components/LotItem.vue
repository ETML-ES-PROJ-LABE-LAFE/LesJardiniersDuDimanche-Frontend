<template>
  <tr class="lot">
    <td class="fixed-width">{{ lot.category.name }}</td>
    <td class="fixed-width">{{ lot.subCategory.name }}</td>
    <td class="fixed-width">{{ lot.name }}</td>
    <td class="description-width">{{ lot.description }}</td>
    <td class="fixed-width">{{ lot.startingPrice }} CHF</td>
    <td class="fixed-width">{{ lot.actualPrice }} CHF</td>
    <td class="fixed-width">
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
  text-align: left;
}
.lot:hover {
  background-color: #e8f0fe;
}
.fixed-width {
  width: 10%; /* Ajustez ce pourcentage en fonction du nombre total de colonnes */
}
.description-width {
  width: 30%; /* Ajustez ce pourcentage pour la colonne description */
}
</style>
