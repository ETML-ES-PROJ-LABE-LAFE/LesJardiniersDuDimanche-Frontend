<template>
  <div class="filter-categorie">


    <select :value="value" @change="onCategoryChange($event.target.value)">
      <option value="">Sélectionnez une catégorie</option>

      <template v-if="categories && categories.length">
        <option v-for="category in categories" :value="category.id" :key="category.id">
          {{ category.name }}
        </option>
      </template>
    </select>
  </div>
</template>

<script>
export default {
  name: 'FilterCategories',
  props: {
    categories: {
      type: Array,
      required: true
    },
    value: {
      type: String
    }
  },
  methods: {

    onCategoryChange(value) {
      if (!value) {
        this.$emit('category-changed', null);
      }
      else {
        const category = this.categories.find(cat => cat.id === parseInt(value));
        const categoryName = category ? category.name : 'Inconnue';
        console.log("Changement de catégorie : ID :", value, "Nom:", categoryName);
        this.$emit('input', value);
        this.$emit('category-changed', value);
      }
    }
  }
};
</script>

<style scoped>
  .filter-categorie {
    display: inline-block;
    vertical-align: middle;
    margin: 0px 10px;
    width: 100%;
  }

  select {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    background-color: white;
    font-size: 16px;
    color: #333;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
  }

  select:hover {
    border-color: #888;
  }

  select:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(66, 153, 225, 0.5);
  }

</style>



