<template>
  <div class="profile-view background" v-if="user">
    <div class="profile-card">
      <img :src="getUserImage(user.id)" alt="User Icon" class="profile-image" />
      <h1>Profil de {{ user.name }}</h1>

      <div class="profile-sections">
        <!-- Section Changer l'email -->
        <div class="section">
          <div class="section-content">
            <div>
              <h2><i class="fas fa-envelope icon"></i> Changer l'email</h2>
              <p v-if="!isEditingEmail">{{ user.email }}</p>
              <input v-else v-model="newEmail" type="email" placeholder="Nouveau email" />
            </div>
            <button @click="toggleEditEmail" :class="[isEditingEmail ? 'confirm-button' : 'blue-button']">
              {{ isEditingEmail ? 'Confirmer' : 'Changer l\'email' }}
            </button>
          </div>
        </div>

        <!-- Section Porte-Monnaie -->
        <div class="section">
          <div class="section-content">
            <div>
              <h2><i class="fas fa-wallet icon"></i> Porte-Monnaie</h2>
              <p>Solde: {{ user.wallet }} CHF</p>
              <input v-if="isAddingMoney" v-model="amountToAdd" type="number" placeholder="Montant à ajouter" />
            </div>
            <button @click="toggleAddMoney" :class="[isAddingMoney ? 'confirm-button' : 'blue-button']">
              {{ isAddingMoney ? 'Confirmer' : 'Ajouter de l\'argent' }}
            </button>
          </div>
        </div>

        <!-- Section Ajouter un Lot -->
        <div class="section">
          <div class="section-content">
            <div>
              <h2><i class="fas fa-plus-circle icon"></i> Ajouter un Lot</h2>
            </div>
            <button @click="navigateToAddLot" class="blue-button">Ajouter un lot</button>
          </div>
        </div>

        <!-- Section Suivi des Lots -->
        <div class="section">
          <div class="section-content">
            <div>
              <h2><i class="fas fa-list icon"></i> Liste de mes lots </h2>
            </div>
            <button @click="navigateToTrackedLots" class="blue-button">Voir les lots</button>
          </div>
        </div>
      </div>

      <!-- Déconnexion -->
      <button class="logout-button" @click="logout">Déconnexion</button>
    </div>

    <!-- Zone de notification -->
    <div v-if="notificationMessage" class="notification">
      {{ notificationMessage }}
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
      user: null,
      isEditingEmail: false,
      newEmail: '',
      isAddingMoney: false,
      amountToAdd: 0,
      notificationMessage: '',
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
        this.$emit('userLoggedOut');
        this.$router.push({ name: 'Login' });
      } catch (error) {
        console.error('Erreur lors de la déconnexion:', error);
      }
    },
    toggleEditEmail() {
      if (this.isEditingEmail) {
        this.updateEmail();
      } else {
        this.newEmail = this.user.email;
      }
      this.isEditingEmail = !this.isEditingEmail;
    },
    async updateEmail() {
      try {
        await UserService.updateUserEmail(this.user.id, this.newEmail);
        this.user.email = this.newEmail;
        this.isEditingEmail = false;
        this.newEmail = '';
        this.showNotification('Email mis à jour avec succès.');
      } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'email:', error);
      }
    },
    toggleAddMoney() {
      if (this.isAddingMoney) {
        this.addMoney();
      }
      this.isAddingMoney = !this.isAddingMoney;
    },
    async addMoney() {
      try {
        const amount = parseFloat(this.amountToAdd);
        await UserService.addMoneyToWallet(this.user.id, amount);
        this.user.wallet += amount;
        this.isAddingMoney = false;
        this.amountToAdd = 0;
        this.showNotification('Montant ajouté avec succès.');
        // Émet un événement pour mettre à jour le solde dans App.vue
        this.$emit('walletUpdated', this.user.wallet);
      } catch (error) {
        console.error('Erreur lors de l\'ajout d\'argent:', error);
      }
    },
    navigateToAddLot() {
      this.$router.push({ name: 'AddLot' });
    },
    navigateToTrackedLots() {
      this.$router.push({ name: 'TrackedLots' });
    },
    showNotification(message) {
      this.notificationMessage = message;
      setTimeout(() => {
        this.notificationMessage = '';
      }, 3000);
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
    padding: 20px;
    margin-top: -50px;
    max-width: 1000px;
    width: 100%;
    text-align: center;
    animation: fadeIn 1s ease-in-out;
  }

  .profile-image {
    margin-top: -75px;
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
    gap: 10px;
    margin-top: 20px;
  }

  .section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 15px;
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
    font-size: 18px;
    margin-bottom: 0;
  }

  .section p {
    margin: 10px 0;
    font-size: 16px;
  }

  .section .icon {
    margin-right: 10px;
    font-size: 18px;
    color: #555;
  }

  .section input {
    margin-left: 20px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
  }

  /* Styles généraux pour les boutons */
  button {
    padding: 8px 16px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
    white-space: nowrap;
    margin-left: 10px;
  }

  /* Style des boutons par défaut (bleu) */
  button.blue-button {
    background-color: #007bff; /* Bleu pour les actions normales */
  }

  button.blue-button:hover {
    background-color: #0056b3; /* Bleu plus foncé au survol */
  }

  /* Style pour le mode confirmation (vert) */
  .confirm-button {
    background-color: #4CAF50; /* Vert pour le mode confirmation */
  }

  .confirm-button:hover {
    background-color: #45a049; /* Vert plus foncé au survol */
  }

  /* Style pour le bouton de déconnexion (rouge) */
  .logout-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #ff4d4d; /* Rouge pour la déconnexion */
  }

  .logout-button:hover {
    background-color: #ff1a1a;
  }

  /* Styles pour la notification */
  .notification {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #4CAF50; /* Vert pour indiquer le succès */
    color: white;
    padding: 15px 30px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-size: 18px;
    z-index: 1000; /* Assure que la notification est au-dessus de tout le reste */
    animation: fadeInOut 3s; /* Animation pour apparaître et disparaître */
  }

  @keyframes fadeInOut {
    0%, 100% {
      opacity: 0;
    }
    10%, 90% {
      opacity: 1;
    }
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

