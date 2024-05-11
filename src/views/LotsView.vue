<!-- Dossier Views/ Fichier LotsView.vue-->
<template>
  <div class="lots-background">
    <SearchBar v-model="searchQuery" />
    <FilterCategorie :categories="mainCategories" v-model="selectedMainCategory" @category-changed="loadLotsByCategory" />
    <FilterSubCategorie :subCategories="subCategories" v-model="selectedSubCategory" @subCategory-changed="loadLotsByCategory" />
    <LotList :lots="filteredLotsCategories"/>
    <SearchBarNoResults v-if="filteredLotsSearchBar.length === 0" />
  </div>
</template>

<script>
import LotService from "@/services/LotService";
import CategoryService from "@/services/CategoryService";
import LotList from "@/components/LotList.vue";
import SearchBar from "@/components/SearchBar.vue";
import FilterCategorie from "@/components/FilterCategorie.vue";
import FilterSubCategorie from "@/components/FilterSubCategorie.vue";
import SearchBarNoResults from "@/components/SearchBarNoResults.vue";

export default {
  name: 'LotsView',
  components: {
    LotList,
    SearchBar,
    FilterCategorie,
    FilterSubCategorie,
    SearchBarNoResults
  },
  data() {
    return {
      lots: [],
      mainCategories: [], //Récupère dans le filtre les catégories parents
      subCategories: [], //Récupère dans le filtre les sous-catégories (catégories sans parents)
      selectedMainCategory: '', //Récupère la valeur sélectionnée de la catégorie sélectionnée.
      selectedSubCategory: '', //Récupère la valeur sélectionnée de la sous-catégorie sélectionnée.
      searchQuery: '', //Récupère la valeur saisie dans la barre de recherche
      loading: true,
    };
  },
  computed: {
    filteredLotsSearchBar() {
      return this.lots.filter(lot =>
        lot.nom.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        lot.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filteredLotsCategories() {
      let filtered = this.filteredLotsSearchBar;

      if (this.selectedMainCategory) {
        filtered = filtered.filter(lot =>
          lot.category && lot.category.id === parseInt(this.selectedMainCategory)
        );
      }

      if (this.selectedSubCategory) {
        filtered = filtered.filter(lot =>
          lot.sousCategory.name && lot.sousCategory.id === parseInt(this.selectedSubCategory)
        );
      }

      return filtered;
    },
  },
  methods: {
    async loadLots() {
      try {
        this.lots = await LotService.get();
      } catch (error) {
        console.error("Erreur lors du chargement des lots: " + error);
      }
    },
    async loadLotsByCategory(categoryId) {
      if (categoryId === null) {
        this.resetFilters();
      } else {
        try {
          this.lots = await LotService.getLotsByCategory(categoryId);
          console.log("Lots chargés pour la catégorie :", categoryId, this.lots);
        } catch (error) {
          console.error(`Erreur lors du chargement des lots pour la catégorie ${categoryId}: ${error}`);
        }
      }
    },
    async loadCategories() {
      try {
        const allCategories = await CategoryService.getAllCategories();
        this.mainCategories = allCategories.filter(cat => !cat.parentCategory);
        this.subCategories = allCategories.filter(cat => cat.parentCategory);
      } catch (error) {
        console.error("Erreur lors du chargement des catégories: " + error);
      }
    },

    resetFilters() {
      this.selectedMainCategory = '';
      this.selectedSubCategory = '';
      this.loadLots();  // Reload all lots when filters are cleared
    }
  },
  async created() {
    await this.loadLots(); // Charge tous les lots initialement sans distinction de catégories/sous-catégories
    await this.loadCategories(); //Charge les lots en fonction des catégories et sous-catégories sélectionnées.
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

  select {
    margin: 10px;
    padding: 8px 16px;
    border-radius: 4px;
    background-color: white;
    border: 1px solid #ccc;
  }
}
</style>

