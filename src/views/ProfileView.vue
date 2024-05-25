<template>
  <div class="profile-view" v-if="user">
    <img :src="getUserImage(user.id)" alt="User Icon" class="profile-image" />
    <h1>Profil de {{ user.name }}</h1>
    <p>Email: {{ user.email }}</p>
    <p> Porte-Monnaie: {{ user.wallet }} CHF </p>
    <p>Status: En ligne </p>
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
    }
  }
};
</script>

<style scoped>
.profile-view {
  margin-top: 50px;
  padding : 20px;
  background: white;
  border-radius: 10px;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid white;
  margin-bottom: 20px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-top: 0;
}

p {
  margin: 10px 0;
}
</style>
