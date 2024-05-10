<!-- Dossier Views/ Fichier LotsView.vue-->
<template>
  <div class="lots-background">
    <SearchBar v-model="searchQuery" />
    <FilterCategories :categories="mainCategories" v-model="selectedMainCategory" @category-changed="loadLotsByCategory" />
    <FilterSubCategories :subCategories="subCategories" v-model="selectedSubCategory" />
    <LotList :lots="filteredLotsCategories"/>
    <SearchBarNoResults v-if="filteredLotsSearchBar.length === 0" />
  </div>
</template>

<script>
import LotService from "@/services/LotService";
import CategoryService from "@/services/CategoryService";
import LotList from "@/components/LotList.vue";
import SearchBar from "@/components/SearchBar.vue";
import FilterCategories from "@/components/FilterCategorie.vue";
import FilterSubCategories from "@/components/FilterSubCategorie.vue";
import SearchBarNoResults from "@/components/SearchBarNoResults.vue";

export default {
  name: 'LotsView',
  components: {
    LotList,
    SearchBar,
    FilterCategories,
    FilterSubCategories,
    SearchBarNoResults
  },
  data() {
    return {
      lots: [],
      mainCategories: [],
      selectedMainCategory: '',
      selectedSubCategory: '',
      searchQuery: '',
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
      return this.selectedMainCategory ?
        this.filteredLotsSearchBar.filter(lot =>
          lot.category && lot.category.id === parseInt(this.selectedMainCategory)
        ) : this.filteredLotsSearchBar;
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
      try {
        this.lots = await LotService.getLotsByCategory(categoryId);
        console.log("Lots chargés pour la catégorie :", categoryId, this.lots);
      } catch (error) {
        console.error(`Erreur lors du chargement des lots pour la catégorie ${categoryId}: ${error}`);
      }
    },
    async loadCategories() {
      try {
        const categories = await CategoryService.getAllCategories();
        this.mainCategories = categories.filter(cat => !cat.parentCategory);
      } catch (error) {
        console.error("Erreur lors du chargement des catégories: " + error);
      }
    }
  },
  async created() {
    await this.loadCategories();
    await this.loadLots(); // Charge tous les lots initialement
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
