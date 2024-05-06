<!-- Dossier views/ Fichier LostView.vue-->
<template>
  <div class="lots-background">
    <SearchBar v-model="searchQuery" />
    <FilterCategorie :categories="categories" v-model="selectedCategory" />
    <LotList :lots="filteredLots" />
    <SearchBarNoResults v-if="filteredLots.length === 0" />
  </div>
</template>

<script>
import LotList from "@/components/LotList.vue";
import LotService from "@/services/LotService";
import SearchBarNoResults from "@/components/SearchBarNoResults.vue";
import SearchBar from "@/components/SearchBar.vue";
import FilterCategorie from "@/components/FilterCategorie.vue";

export default {
  name: 'LotsView',
  components: {
    SearchBarNoResults,
    LotList,
    SearchBar,
    FilterCategorie
  },
  data() {
    return {
      lots: [],
      loading: true,
      searchQuery: '',
      selectedCategory: '', // Initialiser la catégorie sélectionnée à vide
      categories: []
    };
  },
  computed: {
    filteredLots() {
      return this.lots.filter(lot => {
        // Filtrer par catégorie et par recherche
        return (this.selectedCategory === '' || lot.categorie === this.selectedCategory) &&
               (this.searchQuery === '' || lot.nom.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                lot.description.toLowerCase().includes(this.searchQuery.toLowerCase()));
      });
    }
  },
  methods: {
    handleCategoryChange(newCategory) {
      this.selectedCategory = newCategory; // Mettre à jour la catégorie sélectionnée
    }
  },
  async created() {
    try {
      this.lots = await LotService.get();
      this.categories = [...new Set(this.lots.map(lot => lot.categorie))];
    } catch (error) {
      console.error("Erreur lors du chargement des lots: " + error);
    } finally {
      this.loading = false;
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
  align-items: flex-end;
  padding-top: 20px;
  padding-right: 10%;
}

select {
  margin: 10px;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: white;
  border: 1px solid #ccc;
}
</style>


