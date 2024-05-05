<!-- Fichier HomeView.vue-->
<!-- d'acceuil -->
<template>
  <header class="home">
    <h1>Venez claquer vos thunes !</h1>
  </header>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    }
}
</script>

<style>

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Prévenir le débordement horizontal */
}

.home {
  min-height: calc(100vh - 80px); /* Ajustez '50px' à la hauteur de votre navbar */
  width: 100%;
  background: linear-gradient(120deg, #6a11cb 0%, #2575fc 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 250%;
  color: white;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
}

.home h1 {
  transition: transform 0.3s ease;
}

.home h1:hover {
  transform: scale(1.2);
}


</style>