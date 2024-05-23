<template>
  <div class="login-view">
    <div class="login-container">
      <h1>Connexion</h1>
      <div class="user-buttons">
        <div class="user-button" @click="loginUser(1, 'John Doe')">
          <img src="@/assets/user1.png" alt="User 1" class="user-image"/>
          <span class="user-name">John Doe</span>
        </div>
        <div class="user-button" @click="loginUser(2, 'Jane Smith')">
          <img src="@/assets/user2.png" alt="User 2" class="user-image"/>
          <span class="user-name">Jane Smith</span>
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
      alertMessage: ''
    };
  },
  methods: {
    async loginUser(userId, userName) {
      try {
        await UserService.logoutUser(1); // Déconnexion de l'utilisateur 1 si connecté
        await UserService.logoutUser(2); // Déconnexion de l'utilisateur 2 si connecté
        await UserService.loginUser(userId);
        this.alertMessage = `Vous êtes connecté "${userName}"`;
        setTimeout(() => {
          this.alertMessage = '';
        }, 3000);
      } catch (error) {
        this.alertMessage = `Erreur lors de la connexion de l'utilisateur ${userName}: ${error.message}`;
      }
    }
  }
};
</script>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px); /* Ajustez en fonction de la hauteur de votre barre de navigation */
  background: linear-gradient(135deg, #f3f4f6 25%, #e2e8f0 100%);
}

.login-container {
  text-align: center;
  background: white;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

h1 {
  margin-bottom: 40px;

  color: #333;
}

.user-buttons {
  display: flex;
  justify-content: space-around;
  gap: 30px; /* Ajout d'espace entre les boutons */
  margin-bottom: 20px;
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
  width: 320px; /* Agrandissement de la taille des images */
  height: 320px; /* Agrandissement de la taille des images */
  border-radius: 50%;
  border: 4px solid white;
  transition: border-color 0.3s ease;
  margin-bottom: 10px;
}

.user-name {
  font-size: 24px; /* Augmentation de la taille de la police */
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
  animation: fadeInOut 3s ease-in-out;
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
