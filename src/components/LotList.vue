<template>
  <table class="lot-table">
    <thead>
    <tr>
      <th>Catégorie</th>
      <th>Sous-Catégorie</th>
      <th>Nom</th>
      <th>Description</th>
      <th>Prix de départ</th>
      <th>Prix actuel</th>
      <th>Details</th>
    </tr>
    </thead>
    <tbody>
    <LotItem v-for="lot in paginatedLots" :key="lot.id" :lot="lot" />
    </tbody>
  </table>
  <PageNumber
      :currentPage="currentPage"
      :totalPages="totalPages"
      @change-page="handleChangePage"
    />
</template>

<script>
import LotItem from "@/components/LotItem.vue";
import PageNumber from "@/components/PageNumber.vue";

export default {
  components: {
    LotItem,
    PageNumber
  },
  props: {
    lots: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
      currentPage : 1,
      itemsPerPage : 2
    }
  },
  computed :{
    totalPages() {
      return Math.ceil(this.lots.length / this.itemsPerPage);
    },
    paginatedLots() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.lots.slice(start, end);
    }
  },
  methods : {
    handleChangePage(page){
      this.currentPage = page;
    }
  }
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

.lot-table {
  width: 98%;
  border-collapse: collapse;
  margin: 5px auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  font-family: 'Nunito', sans-serif;
  font-weight : bold;
}

.lot-table th, .lot-table td {
  text-align: left;
  padding: 15px;
  vertical-align: middle;
  border-bottom: 1px solid #ddd;
  background-color: #f4f4f4;
  font-size: 16px;
  color: #333;
}

.lot-table th {
  background-color: #333;
  color: white;
}

.lot-table tr:nth-child(even) {
  background-color: #f0f0f0;
}

.lot-table tr:hover {
  background-color: #e2e2e2;
}
</style>
