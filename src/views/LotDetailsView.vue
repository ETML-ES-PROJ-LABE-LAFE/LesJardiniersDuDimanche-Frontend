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
        this.errorMessage = 'Veuillez entrer un nombre valide pour l\'enchère.';
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
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.bid-controls {
  margin-top: 20px;
}

.error-message {
  color: red;
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
}
</style>
