// Dossier routeur Fichier index.js

import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LotsView from '../views/LotsView.vue' // Importez la vue pour afficher la liste des lots
import LotDetailsView from '../views/LotDetailsView.vue' // Importez la vue pour afficher les détails du lot

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
    path: '/lots/:id', // Utilisez un paramètre dynamique pour l'ID du lot
    name: 'LotDetails',
    component: LotDetailsView,
    props: true // Passez les paramètres en tant que props au composant
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
