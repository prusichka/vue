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
  {
    path: "/pages",
    name: "Pages",
    component: () => import("../views/PagesPage.vue"),
  },
  {
    path: "/pages/card",
    name: "Pages Card",
    component: () => import("../views/PagesCard.vue"),
  },
  {
    path: "/pages/main/page",
    name: "Main Page",
    component: () => import("../views/PagesMainPage.vue"),
  },
  {
    path: "/aboutCinema",
    name: "About Cinema",
    component: () => import("../views/AboutCinema.vue"),
  },
  {
    path: "/cafebar",
    name: "Cafe Bar",
    component: () => import("../views/CafeBar.vue"),
  },
  {
    path: "/vipHall",
    name: "Vip Hall",
    component: () => import("../views/VipHall.vue"),
  },
  {
    path: "/advertising/card",
    name: "Advert Card",
    component: () => import("../views/AdvertCard.vue"),
  },
  {
    path: "/childRoom",
    name: "Child Room",
    component: () => import("../views/ChildRoom.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../views/ContactsCard.vue"),
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("../views/UsersPage.vue"),
  },
  {
    path: "/user/rename",
    name: "Rename User",
    component: () => import("../views/UserRename.vue"),
  },
  {
    path: "/mailing",
    name: "Mailing",
    component: () => import("../views/MailingPage.vue"),
  },
  {
    path: "/select/user",
    name: "Select User",
    component: () => import("../views/SelectUser.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
