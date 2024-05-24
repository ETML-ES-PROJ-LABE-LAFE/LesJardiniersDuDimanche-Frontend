<template>
  <div class="lot-details-view">
    <LotDetails :lot="lot" v-if="lot" />
      <BidAuction @update-bid-amount="handleBidAmountUpdate" @validate-bid="handleBidValidation" />
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import LotDetails from "@/components/LotDetails.vue";
import BidAuction from "@/components/BidAuction.vue";
import lotServices from "@/services/LotService";

export default {
  components: {
    LotDetails,
    BidAuction
  },
  data() {
    return {
      lot: null,
      bidAmount: '',
      errorMessage: ''
    };
  },
  created() {
    const lotId = this.$route.params.id;
    this.fetchLotDetails(lotId);
  },
  methods: {
    async fetchLotDetails(lotId) {
      try {
        this.lot = await lotServices.getById(lotId);
      } catch (error) {
        console.error("Erreur lors de la récupération des détails du lot: " + error);
      }
    },
    handleBidAmountUpdate(amount) {
      this.bidAmount = amount;
      this.errorMessage = ''; // Réinitialise le message d'erreur lors de la mise à jour de l'enchère
    },
    handleBidValidation(amount) {
      if (isNaN(amount) || amount === '') {
        this.errorMessage = 'Veuillez entrer un nombre valide pour l\'enchère !';
      } else {
        // Logique de validation de l'enchère
        console.log(`Enchère validée avec le montant : ${amount}`);
        this.errorMessage = ''; // Réinitialiser le message d'erreur après validation réussie
      }
    }
  }
};
</script>

<style scoped>
.lot-details-view {
    min-height: calc(100vh - 80px); /* Hauteur minimale pour prendre toute la hauteur visible */
    width: 100%; /* Largeur pleine page */
    background: linear-gradient(120deg, #6a11cb 0%, #2575fc 100%); /* Dégradé de couleur en arrière-plan */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centre les éléments verticalement */
    align-items: center; /* Centre les éléments horizontalement */
    padding-top: 0px;
}

.bid-controls {
  width: 100%;
}

.error-message {
  color: white;
  margin-top: 15px;
  font-size: 25px;
}
</style>
