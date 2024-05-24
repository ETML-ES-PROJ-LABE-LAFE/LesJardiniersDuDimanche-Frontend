<template>
  <div>
    <nav class="navbar">
      <div class="logo-and-name">
        <router-link to="/">
          <img class="nav-logo" src="./assets/logo_enchere.jpg" alt="Logo">
        </router-link>
        <span class="site-name">RIZCARDEAU</span>
      </div>
      <ul class="nav-links">
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/lots">Lots</router-link></li>
        <li><router-link to="/about">À Propos</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
      </ul>
    </nav>
    <router-view/>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 RIZCARDEAU. Tous droits réservés.</p>
      </div>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

body {
  font-family: 'Nunito', sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: #333333;
  color: white;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo-and-name {
  display: flex;
  align-items: center; /* Align vertical des éléments */
}

.nav-logo {
  width: auto;
  height: 50px;
  transition: transform 0.3s ease;
  object-fit: cover;
  border-radius: 30%;
}

.nav-logo:hover {
  transform: scale(1.1);
}

.site-name {
  margin-left: 10px;
  font-size: 23px;
  color: #FFF;
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

.footer {
  background-color: #333333;
  color: white;
  text-align: center;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
}

.footer-content p {
  margin: 5px 0;
}

.footer-content a {
  color: #1e90ff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-content a:hover {
  text-decoration: underline;
}
</style>
