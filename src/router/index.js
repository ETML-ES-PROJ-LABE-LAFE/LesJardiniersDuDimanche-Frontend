// Dossier routeur Fichier index.js

import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' //Importer la vue pour revenir à l'écran d'accueil
import LotsView from '../views/LotsView.vue' // Importer la vue pour afficher la liste des lots
import LotDetailsView from '../views/LotDetailsView.vue' // Importez la vue pour afficher les détails du lot
import LoginView from '../views/LoginView..vue' //Importer la vue pour la page de connexion user
import ProfileView from '../views/ProfileView.vue' //Importer la vue pour la page de profil de l'user connecté

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/lots',
    name: 'Lots',
    component: LotsView
  },
  {
    path: '/lots/:id', // Utilisation d'un paramètre dynamique pour l'ID du lot
    name: 'LotDetails',
    component: LotDetailsView,
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    props: true
  },
  {
    path: '/profile/:id', // Utilisation d'un paramètre dynamique pour l'ID de l'utilisateur
    name: 'Profile',
    component: ProfileView,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
