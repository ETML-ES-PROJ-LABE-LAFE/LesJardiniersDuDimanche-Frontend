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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0; /* Pas d'espace entre les composants */
}

.bid-controls {
  width: 100%;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
