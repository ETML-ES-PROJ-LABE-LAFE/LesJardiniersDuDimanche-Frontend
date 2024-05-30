<template>
  <div class="lot-details-view">
    <router-link to="/lots" class="back-button animated">Retour à la liste des lots</router-link>
    <div class="details-and-bid animated">
      <LotDetails :lot="lot" v-if="lot" />
      <BidAuction v-if="user && user.connected" @update-bid-amount="handleBidAmountUpdate" @validate-bid="handleBidValidation" />
    </div>
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import LotDetails from "@/components/LotDetails.vue";
import BidAuction from "@/components/BidAuction.vue";
import lotServices from "@/services/LotService";
import UserService from "@/services/UserService";

export default {
  components: {
    LotDetails,
    BidAuction
  },
  data() {
    return {
      lot: null,
      bidAmount: '',
      errorMessage: '',
      user: null // Ajoutez une propriété pour stocker l'utilisateur connecté
    };
  },
  created() {
    const lotId = this.$route.params.id;
    this.fetchLotDetails(lotId);
    this.fetchUserDetails(); // Récupérez les détails de l'utilisateur lors de la création du composant
  },
  methods: {
    async fetchLotDetails(lotId) {
      try {
        this.lot = await lotServices.getById(lotId);
      } catch (error) {
        console.error("Erreur lors de la récupération des détails du lot: " + error);
      }
    },
    async fetchUserDetails() {
      try {
        const userId = UserService.getLoggedInUserId(); // Récupérer l'ID de l'utilisateur depuis le local storage
        if (userId) {
          this.user = await UserService.getUserById(userId);
          console.log('Détails de l\'utilisateur récupérés:', this.user);
        } else {
          console.error("Aucun utilisateur connecté trouvé.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des détails de l'utilisateur: " + error);
      }
    },
    handleBidAmountUpdate(amount) {
      this.bidAmount = amount;
      this.errorMessage = ''; // Réinitialise le message d'erreur lors de la mise à jour de l'enchère
    },
    async handleBidValidation() {
      if (isNaN(this.bidAmount) || this.bidAmount === '') {
        this.errorMessage = 'Veuillez entrer un nombre valide pour l\'enchère !';
      } else {
        try {
          await lotServices.placeBid(this.lot.id, parseFloat(this.bidAmount));
          this.fetchLotDetails(this.lot.id); // Rafraîchir les détails du lot après une enchère réussie
          this.errorMessage = ''; // Réinitialiser le message d'erreur après validation réussie
        } catch (error) {
          this.errorMessage = `Erreur: ${error.message}`;
        }
      }
    }
  }
};
</script>

<style scoped>
  .lot-details-view {
    min-height: calc(100vh - 80px);
    width: 100%;
    background: linear-gradient(120deg, #ffaeae 0%, #8726ff 130%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .details-and-bid {
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    animation: fadeInAnimation 1.5s ease-out forwards;
  }

  .error-message {
    color: white;
    margin-top: 15px;
    font-size: 25px;
  }

  .back-button {
    margin-top: 5px;
    margin-bottom: 10px;
    padding: 10px 20px;
    background-color: white;
    color: #333;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s, color 0.3s;
    opacity: 0;
    animation: fadeInAnimation 1.5s ease-out forwards;
  }

  .back-button:hover {
    background-color: #6dc571;
    color: white;
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
</style>

