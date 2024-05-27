<script setup>
import { RouterView } from "vue-router";
import Sidebar from "../components/sidebar.vue";
import TopNav from "../components/topnav.vue";
import Home from "../pages/Home.vue";
import Player from "../components/player/player.vue";
</script>
<template>
  <TopNav />
  <Sidebar />
  <div class="ms-[128px] px-8 py-8 lg:ms-[256px] lg:px-16 lg:py-16">
    <Suspense>
      <router-view />
    </Suspense>
  </div>
  <Player />
</template>
