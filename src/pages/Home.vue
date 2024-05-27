<script setup>
import Button from "../components/primitives/button.vue";
import api from "../api/api";
import { defineAsyncComponent } from "vue";
import TopArtists from "../components/recommendations/topArtists.vue";
import TrendingPlaylists from "../components/recommendations/trendingPlaylists.vue";
import FeaturedPlaylists from "../components/recommendations/featuredPlaylists.vue";
import loadingPlaylists from "../components/loading/loadingPlaylists.vue";
import loadingArtists from "../components/loading/loadingArtists.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <trending-playlists />
    </template>
    <template #fallback>
      <loading-playlists />
    </template>
  </Suspense>
  <Suspense>
    <template #default>
      <featured-playlists />
    </template>
    <template #fallback>
      <loading-playlists />
    </template>
  </Suspense>
  <Suspense>
    <template #default>
      <top-artists />
    </template>
    <template #fallback>
      <loading-artists />
    </template>
  </Suspense>
</template>
