<template>
    <div class="lot-details">
      <div class="lot-image">
        <img :src="require('@/assets/article_test.png')" alt="Image de l'article" />
      </div>
      <div class="lot-content">
        <h2 class="lot-title">{{ lot.name }}</h2>
        <div class="lot-info-card">
          <strong>Vendeur : </strong>
          <span>{{ lot.user.name }}</span>
        </div>
        <div class="lot-info">
          <div class="lot-info-card">
            <strong>Catégorie : </strong>
            <span>{{ lot.category.name }}</span>
          </div>
          <div class="lot-info-card">
            <strong>Sous-catégorie : </strong>
            <span>{{ lot.subCategory.name }}</span>
          </div>
          <div class="lot-info-card">
            <strong>Prix de départ : </strong>
            <span>{{ lot.startingPrice }} CHF</span>
          </div>
          <div class="lot-info-card">
            <strong>Prix de l'enchère actuelle : </strong>
            <span>{{ lot.actualPrice }} CHF</span>
          </div>
          <div class="lot-info-card">
            <strong>Date de publication : </strong>
            <span>{{ formatDate(lot.startingDateHours) }}</span>
          </div>
          <div class="lot-info-card">
            <strong>Date de fin : </strong>
            <span>{{ formatDate(lot.endingDateHours) }}</span>
          </div>
          <div class="lot-info-card">
            <strong>Description : </strong>
            <span>{{ lot.description }}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      lot: {
        type: Object,
        required: true
      }
    },
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

  .lot-details {
    display: flex;
    flex-direction: column;
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 800px;
    align-items: center;
    border: 1.5px solid #cccccc;
    opacity: 0;
    animation: fadeInAnimation 1.5s ease-out forwards;
  }

  .lot-image img {
    width: 100%;
    max-width: 250px;
    max-height: 300px;
    border-radius: 8px;
    object-fit: cover;
    border: 1.5px solid #cccccc;
    margin-right: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    opacity: 1;
    animation: slideInFromLeft 1.5s ease-out forwards;
  }

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .lot-content {
    width: 100%;
  }

  .lot-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .lot-info-card {
    flex: 1 1 250px;
    margin-bottom: 10px;
    margin-right: 5px;
    background: #ffffff;
    padding: 10px;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    min-height: 5px;
  }

  .lot-title {
    color: #333;
    text-align: center;
    margin: 10px;
  }

</style>
