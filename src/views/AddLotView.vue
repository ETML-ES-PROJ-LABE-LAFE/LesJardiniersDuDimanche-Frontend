<template>
  <div>
    <AddLotForm :categories="categories" :subCategories="subCategories" @submit-lot="handleLotSubmit"/>
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
    try {
      const allCategories = await CategoryService.getAllCategories();
      this.categories = allCategories.filter(cat => !cat.parentCategory);
      this.subCategories = allCategories.filter(cat => cat.parentCategory);
    } catch (error) {
      console.error("Erreur lors du chargement des catégories: " + error);
    }
  },
  methods: {
    async handleLotSubmit(lot) {
      console.log('Lot submitted:', lot);
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
