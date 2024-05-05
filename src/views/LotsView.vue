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
          lot.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          lot.categorie.toLowerCase().includes(this.searchQuery.toLowerCase())
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

.search-input {
  margin-bottom: 2px;
  margin-right: 1%; /* Ajustez cette marge pour aligner avec les colonnes du tableau */
  padding: 10px;
  width: 30%; /* Ajustez la largeur selon vos besoins */
  max-width: 300px; /* Garde une largeur maximale pour éviter une barre trop grande */
  border-radius: 10px;
  border: 1px solid #ccc;
}

.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Nunito', sans-serif; /* Assurez-vous que la police est appliquée au tableau */
  font-weight: bold;
  width: 100%; /* Utilisez toute la largeur disponible */
  margin-top: 20px;
  padding: 20px;
  color: #fff; /* Couleur de texte blanc pour le contraste */
}

.pingouin-dort{
  width: 300px; /* Taille de l'image */
  height: 200px; /* Maintien du ratio */
  margin-bottom: 10px;
}
</style>

