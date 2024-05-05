<!-- Dossier views/ Fichier LostView.vue-->

<template>
  <div class="lots-background">
    <SearchBar v-model="searchQuery" />
    <LotList :lots="filteredLots" />
    <SearchBarNoResults v-if="filteredLots.length === 0" /> <!-- Utilisez SearchBarNoResults si aucun résultat n'est trouvé -->
  </div>
</template>

<script>
import LotList from "@/components/LotList.vue";
import lotServices from "@/services/LotService";
import SearchBarNoResults from "@/components/SearchBarNoResults.vue"; // Importez le composant SearchBarNoResults
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: 'LotsView',
  components: {
    SearchBarNoResults,
    LotList,
    SearchBar
  },
  data() {
    return {
      lots: [],
      loading: true,
      searchQuery:''
    };
  },
  computed: {
    filteredLots() {
      return this.lots.filter(lot =>
          lot.nom.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          lot.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
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
  flex-direction: column;
  align-items: flex-end; /* Maintient l'alignement à droite */
  padding-top: 20px;
  padding-right: 10%; /* Ajustez en fonction de la marge droite de votre tableau */
}

</style>

