<template>
  <div class="form-container">
    <h2 class="form-title">Ajouter un nouveau lot</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Nom :</label>
        <input type="text" v-model="lot.name" required />
      </div>
      <div class="form-group">
        <label for="description">Description :</label>
        <textarea v-model="lot.description" required></textarea>
      </div>
      <div class="form-group">
        <label for="startingPrice">Prix de départ :</label>
        <input type="number" v-model="lot.startingPrice" required />
      </div>
      <div class="form-group">
        <label for="endingDateHours">Date de fin :</label>
        <input type="datetime-local" v-model="lot.endingDateHours" required />
      </div>
      <div class="form-group">
        <label for="category">Catégorie :</label>
        <select v-model="lot.category.id" required>
          <option value="" disabled>Choisissez une catégorie</option>
          <option v-for="category in categories" :value="category.id" :key="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="subCategory">Sous-catégorie :</label>
        <select v-model="lot.subCategory.id" required>
          <option value="" disabled>Choisissez une sous-catégorie</option>
          <option v-for="subCategory in subCategories" :value="subCategory.id" :key="subCategory.id">
            {{ subCategory.name }}
          </option>
        </select>
      </div>
      <button type="submit" :disabled="isSubmitting">Ajouter le lot</button>
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
        subCategory: { id: null, name: "" }
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted');
      if (this.validateForm()) {
        console.log('Form is valid');
        this.isSubmitting = true;
        this.lot.startingDateHours = new Date().toISOString(); // Set starting date to current date and time
        this.lot.actualPrice = this.lot.startingPrice; // Ensure actual price is equal to starting price
        this.$emit('submit-lot', this.lot);
      } else {
        alert('Veuillez remplir tous les champs requis avec des valeurs valides.');
      }
    },
    validateForm() {
      const endingDate = new Date(this.lot.endingDateHours);
      const now = new Date();
      const isDateValid = endingDate > now;

      if (!isDateValid) {
        alert('La date de fin doit être après la date actuelle.');
      }

      return (
          this.lot.name &&
          this.lot.description &&
          this.lot.startingPrice !== null &&
          this.lot.endingDateHours &&
          this.lot.category.id &&
          this.lot.subCategory.id &&
          isDateValid // Ensure ending date is after the current date and time
      );
    }
  }
};
</script>

<style scoped>
.form-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
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

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input, textarea, select {
  width: 100%;
  padding: 10px;
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
  padding: 10px;
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
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
