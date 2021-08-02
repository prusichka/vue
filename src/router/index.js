import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes = [
  {
    path: "/statistics",
    name: "Statistic",
    component: () => import("../views/StatisticPage.vue"),
  },
  {
    path: "/banners&sliders",
    name: "Banners/Sliders",
    component: () => import("../views/BannersSliders.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
