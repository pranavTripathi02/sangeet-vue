import { createRouter, createWebHistory } from "vue-router";

import {
  Home,
  Feed,
  Search,
  Library,
  UnderConstruction,
  Register,
  Login,
} from "../pages";
import DefaultLayout from "../layouts/defaultLayout.vue";
import AuthLayout from "../layouts/authLayout.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "/", component: Home },
      { path: "/feed", component: Feed },
      { path: "/search", component: Search },
      { path: "/library", component: Library },
    ],
  },
  {
    path: "/auth",
    component: AuthLayout,
    children: [
      { path: "register", name: "register", component: Register },
      { path: "login", name: "login", component: Login },
    ],
  },
  { path: "/:pathMatch(.*)", component: UnderConstruction },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
