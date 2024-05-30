<template>
  <div class="profile-view background" v-if="user">
    <div class="profile-card">
      <img :src="getUserImage(user.id)" alt="User Icon" class="profile-image" />
      <h1>Profil de {{ user.name }}</h1>
      <p><i class="fas fa-envelope icon"></i> {{ user.email }}</p>
      <p><i class="fas fa-wallet icon"></i> Porte-Monnaie: {{ user.wallet }} CHF</p>
      <button @click="logout">Déconnexion</button>
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
    padding: 60px;
    max-width: 600px;
    width: 100%;
    text-align: center;
    animation: fadeIn 1s ease-in-out;
  }

  .profile-image {
    margin-top: -120px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 4px solid white;
    margin-bottom: 30px;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h1 {
    margin-top: 20px;
    color: #333;
    font-size: 32px;
  }

  p {
    margin: 15px 0;
    font-weight: bold;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  p i {
    margin-right: 10px;
    font-size: 24px;
  }

  button {
    margin-top: 30px;
    padding: 15px 30px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #ff1a1a;
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
