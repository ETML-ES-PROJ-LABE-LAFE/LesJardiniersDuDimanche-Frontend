<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">Retour</button>
    <span>Page {{ currentPage }} sur {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Suivant</button>
  </div>
</template>

<script>
export default {
  name: 'PageNumber',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit('change-page', this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('change-page', this.currentPage + 1);
      }
    }
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 15px;
}


button {
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

button:hover:not(:disabled) {
  background-color: #0056b3;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
