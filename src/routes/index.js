import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../view/Home.vue";
import ListView from "../view/List.vue";
import EditView from "../view/listEdit.vue";
import NotFound from "../view/404.vue";

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
  {
    path: "/list/edit/:id",
    name: "edit",
    component: EditView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: NotFound,
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
