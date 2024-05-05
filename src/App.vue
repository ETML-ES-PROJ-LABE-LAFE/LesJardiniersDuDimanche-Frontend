<!-- Dossier views / Fichier App.vue -->
<template>
  <div>
    <nav class="navbar">
      <img class="nav-logo" src="./assets/logo_enchere.jpg" alt="Logo">
      <ul class="nav-links">
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/lots">Lots</router-link></li>
        <li><router-link to="/about">À Propos</router-link></li>
        <li><router-link to="/contact">Login</router-link></li>
      </ul>
    </nav>
  </div>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

body {
  font-family: 'Nunito', sans-serif;
}

.navbar {
  display: flex;
  height : 60px;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-logo {
  width: auto; /* cela maintient le ratio de l'image */
  height: 50px; /* hauteur fixe qui s'adapte bien dans la barre */
  transition: transform 0.3s ease;
  object-fit: cover; /* assure que l'image couvre la zone sans être déformée */
}

.nav-logo:hover {
  transform: scale(1.1); /* un léger agrandissement au survol */
}

.nav-logo:hover {
  transform: scale(1.1);
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s;
}

.nav-links a:hover, .nav-links a:focus {
  color: #1e90ff;
  text-decoration: underline;
}

.nav-links a, .nav-links router-link {
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s;
}
</style>
<script setup>
</script>