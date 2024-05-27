<script setup>
import loadingArtistCard from "./loadingArtistCard.vue";
</script>
<template>
  <div>
    <div class="flex animate-pulse flex-col gap-2 overflow-hidden">
      <span class="h-4 w-40 bg-primary/5" />
      <div class="flex gap-8">
        <loading-artist-card />
        <loading-artist-card />
        <loading-artist-card />
        <loading-artist-card />
        <loading-artist-card />
        <loading-artist-card />
        <loading-artist-card />
      </div>
    </div>
  </div>
</template>
