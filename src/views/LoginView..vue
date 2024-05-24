<template>
  <div class="login-view lots-background">
    <div class="login-container">
      <h1 class="title">Connexion</h1>
      <div class="user-buttons">
        <div v-for="user in users" :key="user.id" class="user-button" @click="loginUser(user.id, user.name)">
          <img :src="getUserImage(user.id)" :alt="`User ${user.id}`" class="user-image"/>
          <span class="user-name">{{ user.name }}</span>
        </div>
      </div>
      <div v-if="alertMessage" class="alert">
        {{ alertMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '../services/UserService';

export default {
  name: 'LoginView',
  data() {
    return {
      alertMessage: '',
      users: []  // Liste des utilisateurs
    };
  },
  created() {
    this.fetchUsers();  // Récupérer les utilisateurs au chargement du composant
  },
  methods: {
    async fetchUsers() {
      try {
        this.users = await UserService.getAllUsers();  // Récupère tous les utilisateurs
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      }
    },
    async loginUser(userId, userName) {
      try {
        await UserService.logoutUser(1); // Déconnexion de l'utilisateur 1 si connecté
        await UserService.logoutUser(2); // Déconnexion de l'utilisateur 2 si connecté
        await UserService.loginUser(userId);
        this.alertMessage = `Vous êtes connecté ${userName}`;
        console.log(`Vous êtes connecté ${userName}`);
        setTimeout(() => {
          this.alertMessage = '';
        }, 3000);
      } catch (error) {
        this.alertMessage = `Erreur lors de la connexion de l'utilisateur ${userName}: ${error.message}`;
        console.error(`Erreur lors de la connexion de l'utilisateur ${userName}: ${error.message}`);
      }
    },
    getUserImage(userId) {
      return require(`@/assets/user${userId}.png`);
    }
  }
};
</script>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  width: 100%;
  background: linear-gradient(120deg, #6a11cb 0%, #2575fc 100%);
  flex-direction: column;
  padding-top:  0px;
}

.login-container {
  text-align: center;
  background: white;
  padding: 20px 60px 150px; /* Ajuster le padding pour remonter le titre */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.title {
  font-size: 50px;
  margin-bottom: 100px; /* Réduire la marge inférieure pour remonter le titre */
  color: #333;
  margin-top: 40px; /* Assurez-vous qu'il n'y a pas de marge supérieure */
  padding: 0; /* Assurez-vous qu'il n'y a pas de padding */
}

.user-buttons {
  display: flex;
  justify-content: space-around;
  gap: 100px; /* Ajout d'espace entre les boutons */

}

.user-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.user-button:hover .user-image {
  border-color: #2563eb;
}

.user-image {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 4px solid white;
  transition: border-color 0.3s ease;
  margin-bottom: 20px;
}

.user-name {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.alert {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #3b82f6;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  opacity: 0.9;
  animation: fadeInOut 10s ease-in-out;
}

@keyframes fadeInOut {
  0%, 100% {
    opacity: 0;
  }
  10%, 90% {
    opacity: 0.9;
  }
}
</style>
