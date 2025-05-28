// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import About from "../views/AboutView.vue";
import Home from "../views/HomeView.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
