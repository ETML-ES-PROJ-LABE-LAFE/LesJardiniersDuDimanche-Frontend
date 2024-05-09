<template>
  <div class="lots-background">
    <SearchBar v-model="searchQuery" />
    <FilterCategories :categories="mainCategories" v-model="selectedMainCategory" />
    <FilterCategories :categories="subCategories" v-model="selectedSubCategory" />
    <LotList :lots="filteredLots" />
    <SearchBarNoResults v-if="filteredLots.length === 0" />
  </div>
</template>

<script>
import LotService from "@/services/LotService";
import CategoryService from "@/services/CategoryService";
import LotList from "@/components/LotList.vue";
import SearchBar from "@/components/SearchBar.vue";
import FilterCategories from "@/components/FilterCategorie.vue";
import SearchBarNoResults from "@/components/SearchBarNoResults.vue";

export default {
  name: 'LotsView',
  components: {
    LotList,
    SearchBar,
    FilterCategories,
    SearchBarNoResults
  },
  data() {
    return {
      lots: [],
      mainCategories: [],
      subCategories: [],
      selectedMainCategory: '',
      selectedSubCategory: '',
      searchQuery: '',
      loading: true,
    };
  },
  computed: {
    filteredLots() {
      return this.lots.filter(lot => {
        const matchesMainCategory = this.selectedMainCategory === '' || (lot.category && lot.category.name === this.selectedMainCategory);
        const matchesSubCategory = this.selectedSubCategory === '' || (lot.sousCategory && lot.sousCategory.name === this.selectedSubCategory);
        const matchesSearch = this.searchQuery === '' || lot.nom.toLowerCase().includes(this.searchQuery.toLowerCase()) || lot.description.toLowerCase().includes(this.searchQuery.toLowerCase());
        return matchesMainCategory && matchesSubCategory && matchesSearch;
      });
    }
  },
  watch: {
    selectedMainCategory(newVal) {
      console.log("Nouvelle catégorie principale sélectionnée :", newVal);
      // Mettre à jour les sous-catégories en fonction de la nouvelle catégorie principale
      this.subCategories = this.mainCategories.find(cat => cat.name === newVal)?.subCategories || [];
      console.log("Sous-catégories mises à jour :", this.subCategories);
    },
    selectedSubCategory(newVal) {
      console.log("Nouvelle sous-catégorie sélectionnée :", newVal);
    }
  },
  methods: {
    async loadCategories() {
      try {
        const categories = await CategoryService.getAllCategories();
        this.mainCategories = categories.filter(cat => !cat.parentCategory);
        this.subCategories = categories.filter(cat => cat.parentCategory);
        console.log("Catégories principales chargées :", this.mainCategories);
        console.log("Sous-catégories chargées :", this.subCategories);
      } catch (error) {
        console.error("Erreur lors du chargement des catégories: " + error);
      }
    }
  },
  async created() {
    this.loading = true;
    try {
      console.log("Création du composant LotsView");
      await this.loadCategories();
      this.lots = await LotService.get();
      console.log("Lots chargés :", this.lots);
    } catch (error) {
      console.error("Erreur lors du chargement: " + error);
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