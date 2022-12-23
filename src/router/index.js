import { createRouter, createWebHistory } from "vue-router";
import ModelsView from "@/views/ModelsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "models",
      component: ModelsView,
    },
    {
      path: "/colors",
      name: "colors",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ColorsView.vue"),
    },
    {
      path: "/accessories",
      name: "accessories",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AccessoriesView.vue"),
    },
    {
      path: "/summary",
      name: "summary",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SummaryView.vue"),
    },
  ],
});

export default router;
