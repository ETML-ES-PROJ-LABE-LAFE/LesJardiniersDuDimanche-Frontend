<template>
  <div class="lots-background">
    <div class="search-container">
      <SearchBar v-model="searchQuery" />
    </div>
    <div class="filter-container">
      <FilterCategorie :categories="mainCategories" v-model="selectedMainCategory" @category-changed="onCategoryChanged" />
      <FilterSubCategories :subCategories="filteredSubCategories" :subValue="selectedSubCategory" v-model="selectedSubCategory" @subCategory-changed="loadLotsBySubCategory" />
    </div>
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
import FilterSubCategories from "@/components/FilterSubCategorie.vue";
import SearchBarNoResults from "@/components/SearchBarNoResults.vue";
import UserService from "@/services/UserService";

export default {
  name: 'LotsView',
  components: {
    LotList,
    SearchBar,
    FilterCategorie,
    FilterSubCategories,
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
    filteredLotsSearchBar() {
      return this.lots.filter(lot =>
          lot.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          lot.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filteredLotsCategories() {
      let filtered = this.filteredLotsSearchBar;

      if (this.selectedMainCategory && this.selectedSubCategory) {
        filtered = filtered.filter(lot =>
            lot.category && lot.category.id === parseInt(this.selectedMainCategory) &&
            lot.subCategory && lot.subCategory.id === parseInt(this.selectedSubCategory)
        );
      } else if (this.selectedMainCategory) {
        filtered = filtered.filter(lot =>
            lot.category && lot.category.id === parseInt(this.selectedMainCategory)
        );
      } else if (this.selectedSubCategory) {
        filtered = filtered.filter(lot =>
            lot.subCategory && lot.subCategory.id === parseInt(this.selectedSubCategory)
        );
      }

      return filtered;
    },
    filteredSubCategories() {
      return this.selectedMainCategory ? this.subCategories : [];
    },
    isUserConnected() {
      return !!UserService.getLoggedInUserId();
    }
  },
  methods: {
    async loadLots() {
      try {
        const allLots = await LotService.get();
        this.lots = allLots.filter(lot => lot.state.stateName !== 'Terminé');
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
        } catch (error) {
          console.error(`Erreur lors du chargement des lots pour la catégorie ${categoryId}: ${error}`);
        }
      }
    },
    async loadLotsBySubCategory(subCategoryId) {
      if (subCategoryId === null) {
        this.resetFilters();
      } else {
        try {
          this.lots = await LotService.getLotsBySubCategory(subCategoryId);
        } catch (error) {
          console.error(`Erreur lors du chargement des lots pour la sous-catégorie ${subCategoryId}: ${error}`);
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
    async loadSubCategoriesByCategory(categoryId) {
      try {
        this.subCategories = await CategoryService.getSubCategoriesByParentId(categoryId);
      } catch (error) {
        console.error(`Erreur lors du chargement des sous-catégories pour la catégorie ${categoryId}: ${error}`);
      }
    },
    async onCategoryChanged(categoryId) {
      this.selectedMainCategory = categoryId;
      this.selectedSubCategory = '';
      if (categoryId) {
        await this.loadSubCategoriesByCategory(categoryId);
        await this.loadLotsByCategory(categoryId);
      } else {
        this.subCategories = [];
        this.resetFilters();
      }
    },
    resetFilters() {
      this.selectedMainCategory = '';
      this.selectedSubCategory = '';
      this.loadLots();
    }

  },
  async created() {
    await this.loadLots();
    await this.loadCategories();
  }
};
</script>

<style>
.lots-background {
  min-height: calc(100vh - 80px);
  width: 100%;
  background: linear-gradient(120deg, #ffaeae 0%, #8726ff 130%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-right: 10%;
}

.search-container {
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.search-container > * {
  width: 100%;
  max-width: 500px;
}

.filter-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
}

.filter-container > * {
  flex: 1;
  margin: 10px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
