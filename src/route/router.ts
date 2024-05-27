import { createRouter, createWebHistory } from "vue-router";

import {
  Home,
  Feed,
  Search,
  Library,
  UnderConstruction,
  Register,
  Login,
  Playlist,
  Artist,
  Album,
} from "../pages";

import { DefaultLayout, AuthLayout } from "../layouts/";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "/", component: Home },
      { path: "/feed", component: Feed },
      { path: "/search", component: Search },
      { path: "/library", component: Library },
      { path: "/playlists/:id", name: "playlists", component: Playlist },
      { path: "/artists/:id", name: "artists", component: Artist },
      { path: "/albums/:id", name: "albums", component: Album },
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
