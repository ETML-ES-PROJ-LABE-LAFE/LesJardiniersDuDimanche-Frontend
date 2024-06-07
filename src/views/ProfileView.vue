<template>
  <div class="profile-view background" v-if="user">
    <div class="profile-card">
      <img :src="getUserImage(user.id)" alt="User Icon" class="profile-image" />
      <h1>Profil de {{ user.name }}</h1>

      <!-- Sections disposées horizontalement avec boutons à droite -->
      <div class="profile-sections">
        <!-- Section Changer l'email -->
        <div class="section">
          <div class="section-content">
            <div>
              <h2><i class="fas fa-envelope icon"></i> Changer l'email</h2>
              <p>{{ user.email }}</p>
            </div>
            <button @click="navigateToUpdateEmail">Changer l'email</button>
          </div>
        </div>

        <!-- Section Porte-Monnaie -->
        <div class="section">
          <div class="section-content">
            <div>
              <h2><i class="fas fa-wallet icon"></i> Porte-Monnaie</h2>
              <p>Solde: {{ user.wallet }} CHF</p>
            </div>
            <button @click="navigateToAddMoney">Ajouter de l'argent</button>
          </div>
        </div>

        <!-- Section Ajouter un Lot -->
        <div class="section">
          <div class="section-content">
            <div>
              <h2><i class="fas fa-plus-circle icon"></i> Ajouter un Lot</h2>
            </div>
            <button @click="navigateToAddLot">Ajouter un lot</button>
          </div>
        </div>

        <!-- Section Suivi des Lots -->
        <div class="section">
          <div class="section-content">
            <div>
              <h2><i class="fas fa-list icon"></i> Lots Suivis</h2>
            </div>
            <button @click="navigateToTrackedLots">Voir les lots</button>
          </div>
        </div>
      </div>

      <!-- Déconnexion -->
      <button class="logout-button" @click="logout">Déconnexion</button>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import UserService from '../services/UserService';

export default {
  name: 'ProfileView',
  props: ['id'],
  data() {
    return {
      user: null
    };
  },
  async created() {
    await this.fetchUserDetails();
  },
  watch: {
    id: 'fetchUserDetails'
  },
  methods: {
    async fetchUserDetails() {
      try {
        this.user = await UserService.getUserById(this.id);
        console.log('Détails de l\'utilisateur récupérés:', this.user);
      } catch (error) {
        console.error('Erreur lors de la récupération des détails de l\'utilisateur:', error);
      }
    },
    getUserImage(userId) {
      return require(`@/assets/user${userId}.png`);
    },
    async logout() {
      try {
        await UserService.logoutUser(this.user.id);
        this.$emit('userLoggedOut'); // Émet l'événement de déconnexion
        this.$router.push({ name: 'Login' }); // Redirection vers la page de connexion
      } catch (error) {
        console.error('Erreur lors de la déconnexion:', error);
      }
    }
  }
};
</script>

<style scoped>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

  .background {
    background: linear-gradient(120deg, #ffaeae 0%, #8726ff 130%);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
  }

  .profile-card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px; /* Réduire le padding pour éviter les débordements */
    max-width: 1000px;
    width: 100%;
    text-align: center;
    animation: fadeIn 1s ease-in-out;
  }

  .profile-image {
    margin-top: -75px; /* Ajusté pour aligner avec le padding réduit */
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid white;
    margin-bottom: 20px;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h1 {
    margin-top: 10px;
    color: #333;
    font-size: 28px;
  }

  .profile-sections {
    display: flex;
    flex-direction: column;
    gap: 10px; /* Réduire l'espacement entre les sections */
    margin-top: 20px;
  }

  .section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 15px; /* Réduire le padding interne des sections */
    background: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .section-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .section h2 {
    display: flex;
    align-items: center;
    font-size: 18px; /* Réduire la taille de la police pour plus de compacité */
    margin-bottom: 0; /* Enlever la marge pour aligner mieux */
  }

  .section p {
    margin: 10px 0;
    font-size: 16px;
  }

  .section .icon {
    margin-right: 10px;
    font-size: 18px; /* Réduire la taille de l'icône pour plus de compacité */
    color: #555;
  }

  button {
    padding: 8px 16px; /* Réduire le padding pour ajuster la taille du bouton */
    background-color: #888888;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
    white-space: nowrap;
    margin-left: 10px; /* Ajouter un espacement pour ne pas coller au texte */
  }

  button:hover {
    background-color: #ff1a1a;
  }

  .logout-button {
    margin-top: 20px;
    padding: 10px 20px;
  }

  .tracking-section ul {
    list-style-type: none;
    padding: 0;
    margin: 10px 0 0 0;
    text-align: left;
  }

  .tracking-section li {
    background-color: #f9f9f9;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 14px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

