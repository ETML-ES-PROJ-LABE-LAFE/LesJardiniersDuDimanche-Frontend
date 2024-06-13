<template>
  <div class="tracked-lots-view">
    <h1>Suivi de vos lots mis en enchère </h1>
    <SellerLots />

  </div>
</template>

<script>
import SellerLots from "@/components/SellerLots.vue";

export default {
  name: "TrackedLotsView",
  components: {
    SellerLots
  }
};
</script>

<style scoped>
.tracked-lots-view {
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}
</style>
