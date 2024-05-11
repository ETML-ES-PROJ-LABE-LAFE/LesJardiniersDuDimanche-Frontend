<!-- Dossier components / Fichier LotDetails.vue -->

<template>
  <div class="lots-background">
    <div class="lot-details">
      <div class="lot-image">
        <!-- <img :src="lot.imageUrl" alt="Image de l'article" /> -->
        <img :src="require('@/assets/article_test.png')" alt="Image de l'article" />
      </div>
      <div class="lot-content">
        <h2 class="lot-title">{{ lot.nom }}</h2>
        <div class="lot-info">
          <div class="lot-info-card">
            <strong>Catégorie:</strong>
            <span>{{ lot.category.name }}</span>
          </div>
          <div class="lot-info-card">
            <strong>Sous-catégorie: </strong>
            <span>{{ lot.sousCategory.name }}</span>
          </div>
          <div class="lot-info-card">
            <strong>ID:</strong>
            <span>{{ lot.id }}</span>
          </div>
          <div class="lot-info-card">
            <strong>Description:</strong>
            <span>{{ lot.description }}</span>
          </div>
          <div class="lot-info-card">
            <strong>Prix de départ:</strong>
            <span>{{ lot.prixDepart }} CHF</span>
          </div>
          <div class="lot-info-card">
            <strong>Date et heure de début:</strong>
            <span>{{ lot.dateHeureDebut }}</span>
          </div>
          <div class="lot-info-card">
            <strong>Date et heure de fin:</strong>
            <span>{{ lot.dateHeureFin }}</span>
          </div>
        </div>
      </div>
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
  display: flex;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-top: 20px;
  align-items: flex-start; /* Assure que l'image et le contenu sont alignés en haut */
}

.lot-image img {
  width: 300px; /* Largeur fixe pour l'image */
  height: 300px; /* Hauteur fixe pour l'image */
  border-radius: 8px; /* Bords arrondis pour l'image */
  object-fit: cover; /* Assure que l'image couvre bien l'espace dédié sans être déformée */
  margin-right: 20px; /* Espace entre l'image et les détails du lot */
}

.lot-content {
  flex-grow: 1; /* Prend l'espace restant après l'image */
}

.lot-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.lot-info-card {
  background: #ffffff;
  padding: 10px;
  border: 1px solid #dee2e6;
  border-radius: 5px;
}

.lot-title {
  color: #333;
  margin-bottom: 20px;
}

.lots-background {
  min-height: calc(100vh - 80px);
  width: 100%;
  background: linear-gradient(120deg, #6a11cb 0%, #2575fc 100%);
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrer le contenu dans le fond */
  padding-top: 20px;
}
</style>

