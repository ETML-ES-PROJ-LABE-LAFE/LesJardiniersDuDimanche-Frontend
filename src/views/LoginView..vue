<template>
  <div class="login-view">
    <h1>Connexion</h1>
    <button @click="loginUser(1)">Se connecter en tant qu'Utilisateur 1</button>
    <button @click="loginUser(2)">Se connecter en tant qu'Utilisateur 2</button>
  </div>
</template>

<script>
import UserService from '../services/UserService';

export default {
  name: 'LoginView',
  methods: {
    async loginUser(userId) {
      try {
        await UserService.logoutUser(1); // Déconnexion de l'utilisateur 1 si connecté
        await UserService.logoutUser(2); // Déconnexion de l'utilisateur 2 si connecté
        await UserService.loginUser(userId);
        alert(`Utilisateur ${userId} connecté`);
      } catch (error) {
        alert(`Erreur lors de la connexion de l'utilisateur ${userId}: ${error.message}`);
      }
    }
  }
};
</script>

<style>
.login-view {
  text-align: center;
  margin-top: 50px;
}

button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
}
</style>
