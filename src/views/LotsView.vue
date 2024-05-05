<!-- Dossier views/ Fichier LostView.vue-->

<template>
  <div class="lots-background">
    <LotList :lots="lots" />
  </div>
</template>

<script>
import LotList from "@/components/LotList.vue";
import lotServices from "@/services/LotService";

export default {
  name: 'LotsView',
  components: {
    LotList
  },
  data() {
    return {
      lots: [],  // Ajout d'un état pour stocker les lots
      loading: true  // État pour la gestion du chargement
    };
  },
  async created() {
    try {
      this.lots = await lotServices.get();  // Chargement des lots
    } catch (error) {
      console.error("Erreur lors du chargement des lots: " + error);
    } finally {
      this.loading = false;  // Mise à jour de l'état de chargement
    }
  }
};
</script>

<style>
.lots-background {
  min-height: calc(100vh - 80px);
  width: 100%;
  background: linear-gradient(120deg, #6a11cb 0%, #2575fc 100%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px; /* Ajout d'un peu d'espace en haut */
}
</style>
