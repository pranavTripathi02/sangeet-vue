import { createRouter, createWebHistory } from "vue-router";

import { Home, Feed, Search, Library, UnderConstruction } from "../pages";

const routes = [
  { path: "/", component: Home },
  { path: "/feed", component: Feed },
  { path: "/search", component: Search },
  { path: "/library", component: Library },
  { path: "/:pathMatch(.*)", component: UnderConstruction },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
