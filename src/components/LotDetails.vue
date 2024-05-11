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
            <strong>Catégorie : </strong>
            <span>{{ lot.category.name }}</span>
          </div>
          <div class="lot-info-card">
            <strong>Sous-catégorie : </strong>
            <span>{{ lot.sousCategory.name }}</span>
          </div>
          <div class="lot-info-card">
            <strong>Description : </strong>
            <span>{{ lot.description }}</span>
          </div>
          <div class="lot-info-card">
            <strong>Prix de départ : </strong>
            <span>{{ lot.prixDepart }} CHF</span>
          </div>
          <div class="lot-info-card">
            <strong>Date et heure de début : </strong>
            <span>{{ formatDate(lot.dateHeureDebut) }}</span>
          </div>
          <div class="lot-info-card">
            <strong>Date et heure de fin : </strong>
            <span>{{ formatDate(lot.dateHeureFin) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['lot'],

  methods: {
    formatDate(date) {
      if (!date) return ''; // Retourner une chaîne vide si la date est nulle ou indéfinie
      const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
      return new Date(date).toLocaleDateString('fr-CH', options).replace(/,/g, ' ');
    }
  }

};
</script>

<style scoped>

.lots-background {
  min-height: calc(100vh - 80px); /* Hauteur minimale pour prendre toute la hauteur visible */
  width: 100%; /* Largeur pleine page */
  background: linear-gradient(120deg, #6a11cb 0%, #2575fc 100%); /* Dégradé de couleur en arrière-plan */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centre les éléments verticalement */
  align-items: center; /* Centre les éléments horizontalement */
  padding-top: 0px;
}

.lot-details {
  display: flex;
  flex-direction: column; /* Change la direction pour une mise en page verticale */
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25); /* Ombre portée stylée pour un effet dynamique */
  width: 100%; /* Définir une largeur maximale pour le contrôle de la taille */
  max-width: 800px; /* Largeur maximale pour garder le contenu lisible */
  align-items: center; /* Assure que tous les éléments intérieurs sont centrés */
  border: 1.5px solid #cccccc; /* Bordure grise claire ajoutée ici */
  opacity: 0; /* Démarre avec l'image invisible */
  animation: fadeInAnimation 1.5s ease-out forwards; /* Animation pour faire apparaître l'image */
}

.lot-image img {
  width: 100%; /* Adaptation de la largeur de l'image à son conteneur */
  max-width: 250px; /* Largeur maximale pour l'image */
  max-height: 300px;
  /** height: auto; /* Hauteur auto pour garder le ratio */
  border-radius: 8px;
  object-fit: cover;
  border: 1.5px solid #cccccc; /* Bordure grise claire ajoutée ici */
  margin-right: 20px; /* Espace entre l'image et les détails du lot */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25); /* Ombre portée stylée pour un effet dynamique */
  opacity: 1; /* Démarre avec l'image invisible */
  animation: slideInFromLeft 1.5s ease-out forwards; /* Animation personnalisée pour l'effet de glissement */
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%); /* Démarre à gauche, en dehors du point de vue */
    opacity: 0; /* Commence complètement transparente */
  }
  100% {
    transform: translateX(0); /* Termine au centre du conteneur destiné */
    opacity: 1; /* Complètement visible */
  }
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0; /* L'image commence invisible */
    transform: scale(0.5); /* Commence à une échelle réduite */
  }
  100% {
    opacity: 1; /* L'image devient pleinement visible */
    transform: scale(1); /* Échelle normale */
  }
}

.lot-content {
  width: 100%; /* Utilisation de toute la largeur disponible */
}

.lot-info {
  display: flex; /* Utilise flex pour un alignement horizontal des cartes */
  flex-wrap: wrap; /* Permet aux éléments de passer à la ligne suivante si nécessaire */
  gap: 5px; /* Espace entre les cartes */
  justify-content: space-between; /* Répartit uniformément l'espace entre les cartes */
}

.lot-info-card {
  flex: 1 1 180px; /* Flexibilité pour que les cartes puissent grandir et avoir une base de 180px */
  background: #ffffff;
  padding: 10px;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  min-height: 5px; /* Hauteur minimale pour l'uniformité */
}

.lot-title {
  color: #333;
  text-align: center; /* Centrage du titre */
  margin: 10px; /* Aucun espace externe pour le titre */

}
</style>

