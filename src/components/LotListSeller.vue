<template>
  <div class="lot-list-seller">
    <table class="lot-table">
      <thead>
      <tr>
        <th>Catégorie</th>
        <th>Sous-Catégorie</th>
        <th>Nom</th>
        <th>Description</th>
        <th>Prix de départ</th>
        <th>Prix actuel</th>
        <th>État</th>
        <th>Details</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="lot in paginatedLots" :key="lot.id">
        <td>{{ lot.category.name }}</td>
        <td>{{ lot.subCategory.name }}</td>
        <td>{{ lot.name }}</td>
        <td>{{ lot.description }}</td>
        <td>{{ lot.startingPrice }} CHF</td>
        <td>{{ lot.actualPrice }} CHF</td>
        <td>{{ lot.state }}</td>
        <td>
          <router-link :to="{ name: 'LotDetails', params: { articleNumber: lot.articleNumber }}">
            Voir les détails
          </router-link>
        </td>
      </tr>
      </tbody>
    </table>
    <PageNumber
        :currentPage="currentPage"
        :totalPages="totalPages"
        @change-page="handleChangePage"
    />
  </div>
</template>

<script>
import PageNumber from "@/components/PageNumber.vue";

export default {
  name: 'LotListSeller',
  components: {
    PageNumber
  },
  props: {
    lots: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 10
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.lots.length / this.itemsPerPage);
    },
    paginatedLots() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.lots.slice(start, end);
    }
  },
  methods: {
    handleChangePage(page) {
      this.currentPage = page;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

.lot-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
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

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 18px;
  transition: background-color 0.3s ease;
}

.pagination button:hover:not(:disabled) {
  background-color: #0056b3;
}

.pagination button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
