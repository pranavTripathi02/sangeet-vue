<script setup lang="ts">
import Sidebar from "./components/sidebar.vue";
import TopNav from "./components/topnav.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <TopNav />
  <Sidebar />
  <div class="ms-[128px] px-8 py-8 lg:ms-[256px] lg:px-16 lg:py-16">
    <router-view />
  </div>
</template>
