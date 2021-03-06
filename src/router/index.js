import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/exemplo1-v2",
    name: "Exemplo01-Vue2",
    
    component: () =>
      import("../views/Exemplo01-Vue2.vue")
  },
  {
    path: "/exemplo1-v3",
    name: "Exemplo01-Vue3",
    
    component: () =>
      import("../views/Exemplo01-Vue3.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
