<template>
  <div class="filter-subcategorie">
    <select :value="subValue" @change="onSubCategorieChange($event.target.value)">
      <option value="">Sélectionnez une sous-catégorie</option>
      <option v-if="subCategories.length === 0" disabled>Aucune sous-catégorie disponible</option>
      <option v-for="subCategory in subCategories" :value="subCategory.id" :key="subCategory.id">
        {{ subCategory.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'FilterSubCategories',
  props: {
    subCategories: {
      type: Array,
      required: true
    },
    subValue: {
      type: String,
      required: true
    }
  },
  methods: {
    onSubCategorieChange(value) {
      if (!value) {
        this.$emit('subCategory-changed', null);
      } else {
        const subCategory = this.subCategories.find(cat => cat.id === parseInt(value));
        const subCategoryName = subCategory ? subCategory.name : 'Inconnue';
        console.log("Changement de sous-catégorie : ID :", value, "Nom:", subCategoryName);
        this.$emit('input', value);
        this.$emit('subCategory-changed', value);
      }
    }
  }
};
</script>

<style scoped>
  .filter-subcategorie {
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
