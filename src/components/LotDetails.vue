<!-- Dossier components / Fichier LotDetails.vue -->

<template>
  <div class="lot-details">
    <h2>{{ lot.nom }}</h2>
    <p>{{ lot.description }}</p>
    <!-- Ajoutez ici d'autres détails du lot -->
  </div>
</template>

<script>
export default {
  props: ['lot'],
};
</script>

<style scoped>
/* Style spécifique pour les détails du lot */
</style>
