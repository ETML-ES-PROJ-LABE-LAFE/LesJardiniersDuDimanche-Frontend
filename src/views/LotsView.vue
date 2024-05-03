<template>
  <div>
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
