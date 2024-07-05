import { createRouter, createWebHistory } from "vue-router";

import Home from "~/pages/Home.vue";
import Index from "~/pages/Index.vue";

const routes = [
  { path: '/NavBar', name: 'NavBar', component: Home },
  { path: '/index', name: 'Index', component: Index },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;