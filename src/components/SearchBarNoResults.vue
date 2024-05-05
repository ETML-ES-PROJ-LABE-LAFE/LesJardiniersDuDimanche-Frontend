<template>
  <div class="no-results">
    <img src="../assets/pinguin_erro.png" alt="Pinguin dort" class="pinguin-dort">
    Aucun lot correspondant à votre recherche.
  </div>
</template>

<script>
export default {
  // Pas de données spécifiques à ce composant
};
</script>

<style scoped>
/* Styles CSS spécifiques à ce composant */
.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  color: #fff;
}

.pinguin-dort {
  width: 300px;
  height: 200px;
  margin-bottom: 10px;
}
</style>
