<!-- Dossier views / Fichier LotDetailsView.vue -->

<template>
  <div class="lot-details-view">
    <LotDetails :lot="lot" />
  </div>
</template>

<script>
import LotDetails from "@/components/LotDetails.vue";
import lotService from "@/services/LotService";

export default {
  components: {
    LotDetails
  },
  data() {
    return {
      lot: null
    };
  },
  created() {
    // Récupérez les détails du lot en utilisant l'ID du lot dans les paramètres de l'URL
    const lotId = this.$route.params.id;
    // Utilisez une méthode pour récupérer les détails du lot depuis votre service backend
    this.fetchLotDetails(lotId);
  },
  methods: {
    async fetchLotDetails(lotId) {
      try {
        // Faites appel à votre service backend pour récupérer les détails du lot en fonction de l'ID
        this.lot = await lotService.getById(lotId)
      } catch (error) {
        console.error("Erreur lors de la récupération des détails du lot: " + error);
      }
    }
  }
};
</script>

<style scoped>
/* Style spécifique pour afficher les détails du lot */
</style>
