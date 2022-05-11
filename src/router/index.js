import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/after",
      name: "after",
      component: () => import("../views/AfterView.vue"),
    },
    {
      path: "/general",
      name: "general",
      component: () => import("../views/GeneralView.vue"),
    },
    {
      path: "/regular",
      name: "regular",
      component: () => import("../views/RegularView.vue"),
    },
    {
      path: "/windows",
      name: "windows",
      component: () => import("../views/WindowsView.vue"),
    },
  ],
});

export default router;
