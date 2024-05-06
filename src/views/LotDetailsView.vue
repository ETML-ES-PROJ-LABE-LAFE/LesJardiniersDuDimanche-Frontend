<!-- Dossier views / Fichier LotDetailsView.vue -->

<template>
  <div class="lot-details-view">
    <LotDetails :lot="lot" v-if="lot" />
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import LotDetails from "@/components/LotDetails.vue";
import lotServices from "@/services/LotService";

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
    }
  }
};
</script>

<style scoped>
/* Styles */
</style>
