<template>
  <tr class="lot">
    <td class="image-width">
      <img :src="lot.img" alt="Lot Image" class="lot-image" />
    </td>
    <td class="fixed-width">{{ lot.category.name }}</td>
    <td class="fixed-width">{{ lot.subCategory.name }}</td>
    <td class="fixed-width">{{ lot.name }}</td>
    <td class="description-width">{{ lot.description }}</td>
    <td class="fixed-width">{{ lot.startingPrice }} CHF</td>
    <td class="fixed-width">{{ lot.actualPrice }} CHF</td>
    <td class="fixed-width">
      <router-link :to="{ name: 'LotDetails', params: { articleNumber: lot.articleNumber }}">
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
  width: 10%;
}
.description-width {
  width: 30%;
}
.image-width {
  width: 12%;
  padding : 0;
}
.lot-image {
  max-width: 100%;
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

</style>
