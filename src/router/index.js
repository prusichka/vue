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
  {
    path: "/films",
    name: "Film",
    component: () => import("../views/FilmPage.vue"),
  },
  {
    path: "/film/card",
    name: "Film Card",
    component: () => import("../views/FilmCard.vue"),
  },
  {
    path: "/cinema",
    name: "Cinema",
    component: () => import("../views/CinemaPage.vue"),
  },
  {
    path: "/cinema/card",
    name: "Cinema Card",
    component: () => import("../views/CinemaCard.vue"),
  },
  {
    path: "/halls/card",
    name: "Halls Card",
    component: () => import("../views/HallsPage.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/NewsPage.vue"),
  },
  {
    path: "/news/card",
    name: "News Card",
    component: () => import("../views/NewsCard.vue"),
  },
  {
    path: "/stock",
    name: "Stock",
    component: () => import("../views/StockPage.vue"),
  },
  {
    path: "/stock/card",
    name: "Stock Card",
    component: () => import("../views/StockCard.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
