<!-- Dossier components / Fichier LotDetails.vue -->

<template>
  <div class="lot-details">
    <h2>{{ lot.nom }}</h2>
    <div class="lot-info">
      <div class="lot-info-item">
        <strong>Catégorie:</strong> {{ lot.category.name }}
      </div>
      <div class="lot-info-item">
        <strong>Sous-catégorie:</strong> {{ lot.sousCategory.name }}
      </div>
      <div class="lot-info-item">
        <strong>ID:</strong> {{ lot.id }}
      </div>
      <div class="lot-info-item">
        <strong>Description:</strong> {{ lot.description }}
      </div>
      <div class="lot-info-item">
        <strong>Prix de départ:</strong> {{ lot.prixDepart }} CHF
      </div>
      <div class="lot-info-item">
        <strong>Date et heure de début:</strong> {{ lot.dateHeureDebut }}
      </div>
      <div class="lot-info-item">
        <strong>Date et heure de fin:</strong> {{ lot.dateHeureFin }}
      </div>
      <!-- Ajoutez ici d'autres détails du lot -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['lot'],
};
</script>

<style scoped>
.lot-details {
  background-color: #e5e5e5;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 4px rgba(0,0,0,0.3);
}

.lot-info {
  margin-top: 20px;
}

.lot-info-item {
  margin-bottom: 10px;
}
</style>
