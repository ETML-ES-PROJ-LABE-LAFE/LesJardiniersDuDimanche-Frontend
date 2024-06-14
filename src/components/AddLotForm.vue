<template>
  <div class="form-container">
    <h1 class="form-title">Créer un nouveau lot</h1>
    <p class="required-message">Tous les champs sont obligatoires.</p>
    <form @submit.prevent="handleSubmit">
      <div :class="['form-group', { 'has-error': errors.name }]">
        <label for="name">Nom <span class="required">*</span> :</label>
        <input placeholder="Veuillez entrer un nom d'article" type="text" v-model="lot.name" />
      </div>
      <div :class="['form-group', { 'has-error': errors.description }]">
        <label for="description">Description <span class="required">*</span> :</label>
        <textarea placeholder="Veuillez entrer une description" v-model="lot.description"></textarea>
      </div>
      <div :class="['form-group', { 'has-error': errors.startingPrice }]">
        <label for="startingPrice">Prix de départ <span class="required">*</span> :</label>
        <input placeholder="CHF" type="number" v-model="lot.startingPrice" />
      </div>
      <div :class="['form-group', { 'has-error': errors.endingDateHours }]">
        <label for="endingDateHours">Date de fin <span class="required">*</span> :</label>
        <input type="datetime-local" v-model="lot.endingDateHours" />
      </div>
      <div :class="['form-group', { 'has-error': errors.category }]">
        <label for="category">Catégorie <span class="required">*</span> :</label>
        <select v-model="lot.category.id" @change="onCategoryChange">
          <option value="">Choisissez une catégorie</option>
          <option v-for="category in categories" :value="category.id" :key="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div :class="['form-group', { 'has-error': errors.subCategory }]">
        <label for="subCategory">Sous-catégorie <span class="required">*</span> :</label>
        <select v-model="lot.subCategory.id">
          <option value="">Choisissez une sous-catégorie</option>
          <option v-for="subCategory in filteredSubCategories" :value="subCategory.id" :key="subCategory.id">
            {{ subCategory.name }}
          </option>
        </select>
      </div>
      <button type="submit" :disabled="isSubmitting">Ajouter</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddLotForm",
  props: {
    categories: Array,
    subCategories: Array
  },
  data() {
    return {
      isSubmitting: false,
      lot: {
        name: "",
        description: "",
        startingPrice: null,
        endingDateHours: "",
        category: { id: null, name: "" },
        subCategory: { id: null, name: "" },
        state: null
      },
      errors: {
        name: false,
        description: false,
        startingPrice: false,
        endingDateHours: false,
        category: false,
        subCategory: false
      }
    };
  },
  computed: {
    filteredSubCategories() {
      return this.subCategories.filter(subCategory => subCategory.parentCategory.id === this.lot.category.id);
    }
  },
  methods: {
    handleSubmit() {
      this.clearErrors();
      if (this.validateForm()) {
        this.isSubmitting = true;
        this.lot.startingDateHours = new Date().toISOString();
        this.lot.actualPrice = this.lot.startingPrice;
        this.$emit('submit-lot', this.lot);
      }
    },
    validateForm() {
      let isValid = true;
      if (!this.lot.name) {
        this.errors.name = true;
        isValid = false;
      }
      if (!this.lot.description) {
        this.errors.description = true;
        isValid = false;
      }
      if (this.lot.startingPrice === null) {
        this.errors.startingPrice = true;
        isValid = false;
      }
      if (!this.lot.endingDateHours || new Date(this.lot.endingDateHours) <= new Date()) {
        this.errors.endingDateHours = true;
        isValid = false;
      }
      if (!this.lot.category.id) {
        this.errors.category = true;
        isValid = false;
      }
      if (!this.lot.subCategory.id) {
        this.errors.subCategory = true;
        isValid = false;
      }
      return isValid;
    },
    clearErrors() {
      this.errors = {
        name: false,
        description: false,
        startingPrice: false,
        endingDateHours: false,
        category: false,
        subCategory: false
      };
    },
    onCategoryChange() {
      this.lot.subCategory.id = null;
    }
  }
};
</script>

<style scoped>
.form-container {
  width: 800px;
  margin: 20px auto;
  padding: 40px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  border: 1.5px solid #cccccc;
  opacity: 0;
  animation: fadeInAnimation 1.5s ease-out forwards;
}

.form-title {
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.required-message {
  text-align: center;
  font-size: 14px;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 1rem;
}

.has-error input,
.has-error textarea,
.has-error select {
  border-color: red;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.required {
  color: red;
}

input, textarea, select {
  width: calc(100% - 50px);
  padding: 10px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus, textarea:focus, select:focus {
  border-color: #6dc571;
  box-shadow: 0 0 8px rgba(109, 197, 113, 0.3);
}

button {
  display: block;
  width: 100%;
  padding: 15px;
  background-color: #6dc571;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #5cb85c;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>

