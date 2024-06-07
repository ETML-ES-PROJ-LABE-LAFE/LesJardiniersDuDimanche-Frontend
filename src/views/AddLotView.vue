<template>
  <div class="add-lot-view">
    <router-link to="/lots" class="back-button animated">Retour à la liste des lots</router-link>
    <div class="form-wrapper animated">
      <AddLotForm :categories="categories" :subCategories="subCategories" @submit-lot="handleLotSubmit"/>
    </div>
  </div>
</template>

<script>
import AddLotForm from "@/components/AddLotForm.vue";
import LotService from "@/services/LotService";
import CategoryService from "@/services/CategoryService";

export default {
  name: "AddLotView",
  components: {
    AddLotForm
  },
  data() {
    return {
      categories: [],
      subCategories: []
    };
  },
  async created() {
    await this.loadCategories();
  },
  methods: {
    async loadCategories() {
      try {
        const allCategories = await CategoryService.getAllCategories();
        this.categories = allCategories.filter(cat => !cat.parentCategory);
        this.subCategories = allCategories.filter(cat => cat.parentCategory);
      } catch (error) {
        console.error("Erreur lors du chargement des catégories: " + error);
      }
    },
    async handleLotSubmit(lot) {
      try {
        await LotService.createLot(lot);
        this.$router.push("/lots");
      } catch (error) {
        console.error("Erreur lors de la création du lot: " + error);
      }
    }
  }
};
</script>

<style scoped>
.add-lot-view {
  min-height: calc(100vh - 60px);
  width: 100%;
  background: linear-gradient(120deg, #ffaeae 0%, #8726ff 130%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: fadeInAnimation 1.5s ease-out forwards;
}

.back-button {
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 10px 20px;
  background-color: white;
  color: #333;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
  opacity: 0;
  animation: fadeInAnimation 1.5s ease-out forwards;
}

.back-button:hover {
  background-color: #6dc571;
  color: white;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
