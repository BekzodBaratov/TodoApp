import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../view/Home.vue";
import ListView from "../view/List.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/list/:id",
    name: "list",
    component: ListView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});
export default router;
