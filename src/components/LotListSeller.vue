<template>
  <div class="lot-list-seller">
    <table class="lot-table">
      <thead>
      <tr>
        <th>Aperçu</th>
        <th>Catégorie</th>
        <th>Sous-Catégorie</th>
        <th>Nom</th>
        <th>Description</th>
        <th>Prix de départ</th>
        <th>Prix actuel</th>
        <th>État</th>
        <th>Details</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="lot in paginatedLots" :key="lot.id">
         <td class="image-width">
          <img :src="lot.img" alt="Lot Image" class="lot-image" />
        </td>
        <td>{{ lot.category.name }}</td>
        <td>{{ lot.subCategory.name }}</td>
        <td>{{ lot.name }}</td>
        <td>{{ lot.description }}</td>
        <td>{{ lot.startingPrice }} CHF</td>
        <td>{{ lot.actualPrice }} CHF</td>
        <td>
          <span :class="getStateClass(lot.state.stateName)">
            {{ lot.state.stateName }}
          </span>
        </td>
        <td>
          <router-link :to="{ name: 'LotDetails', params: { articleNumber: lot.articleNumber }}">
            Voir les détails
          </router-link>
        </td>
        <td>
          <button @click="cloturerLot(lot.articleNumber)" :disabled="lot.state.stateName === 'Terminé'">Clôturer</button>
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
import LotService from "@/services/LotService";

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
    },
    async cloturerLot(articleNumber) {
      console.log("Tentative de clôture du lot avec le numéro d'article:", articleNumber);
      try {
        const response = await LotService.cloturerLot(articleNumber);
        console.log("Réponse de l'API pour la clôture du lot:", response);
        this.$emit('lotUpdated');
      } catch (error) {
        console.error("Erreur lors de la clôture du lot !!!!!", error);
      }
    },
     getStateClass(stateName) {
      return {
        'state-label': true,
        'state-en-cours': stateName === 'En Cours',
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

.lot-table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
  font-family: 'Nunito', sans-serif;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.lot-table th {
  background-color: #333;
  color: white;
  text-align: left;
  padding: 15px;
}

.lot-table td {
  padding: 15px;
  border-bottom: 1px solid #ddd;
  background-color: #f4f4f4;
  font-size: 16px;
  color: #333;
}

.lot-table tr:nth-child(even) td {
  background-color: #f0f0f0;
}

.lot-table tr:hover td {
  background-color: #e2e2e2;
}
.image-width {
  width: 12%;
  padding: 0;
}

.lot-image {
  max-width: 100%;
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}


button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: indianred;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: royalblue;
}

.state-label {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: white;
}

.state-en-cours {
  background-color: green;
}
</style>
