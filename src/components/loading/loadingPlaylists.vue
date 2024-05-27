<script setup>
import LoadingPlaylistCard from "./loadingPlaylistCard.vue";
</script>
<template>
  <div class="mb-12 flex animate-pulse flex-col gap-2 overflow-hidden">
    <span class="my-4 h-8 w-40 bg-secondary" />
    <div class="flex gap-8">
      <loading-playlist-card />
      <loading-playlist-card />
      <loading-playlist-card />
      <loading-playlist-card />
      <loading-playlist-card />
      <loading-playlist-card />
      <loading-playlist-card />
      <loading-playlist-card />
    </div>
  </div>
</template>
