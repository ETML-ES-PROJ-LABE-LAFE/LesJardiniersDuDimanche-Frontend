import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LotsView from '../views/LotsView.vue';
import LotDetailsView from '../views/LotDetailsView.vue';
import LoginView from '../views/LoginView..vue';
import ProfileView from '../views/ProfileView.vue';
import AddLotView from '../views/AddLotView.vue';
import AboutView from '../views/AboutView.vue';
import TrackedLotsView from "@/views/TrackedLotsView.vue";

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
    path: '/lots/:articleNumber',
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
    path: '/profile/:id',
    name: 'Profile',
    component: ProfileView,
    props: true
  },
  {
    path: '/add-lot',
    name: 'AddLot',
    component: AddLotView,
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/trackedlots',
    name: 'TrackedLots',
    component: TrackedLotsView,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
