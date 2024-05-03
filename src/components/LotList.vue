<template>
  <div class="lot-list">
    <div v-if="loading">Chargement en cours...</div>
    <div v-else>
      <h2>Lots</h2>
      <div v-if="lots.length > 0">
        <div v-for="lot in lots" :key="lot.id">
          <p><strong>Nom:</strong> {{ lot.nom }}</p>
          <p><strong>Description:</strong> {{ lot.description }}</p>
          <p><strong>Prix de départ:</strong> {{ lot.prixDepart }}</p>
        </div>
      </div>
      <div v-else>
        <p>Aucun lot trouvé.</p>
      </div>
    </div>
  </div>
</template>

<script>
import lotServices from "@/services/LotService";

export default {
  name: 'LotList',
  data() {
    return {
      lots: [],
      loading: true
    }
  },
  async created() {
    try {
      this.lots = await lotServices.get();
    } catch (error) {
      console.error("Erreur lors du chargement des lots: " + error);
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style scoped>
h2 {
  margin-top: 20px;
}

div.lot-list > div {
  margin: 10px 0;
}
</style>
