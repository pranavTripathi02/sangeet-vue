<script setup lang="ts">
import { ref } from "vue";
import api from "../../api/api";
import PlaylistCard from "../cards/playlistCard.vue";
const isLoading = ref(false);
const fetchTrendingPlaylists = async () => {
  isLoading.value = true;
  try {
    const { data } = await api.get("/playlists?sort=trending");
    return data;
  } catch (err) {
    return { error: err };
  } finally {
    isLoading.value = false;
  }
};
const { playlists, error } = await fetchTrendingPlaylists();
</script>

<template>
  <div v-if="error"><Error /></div>
  <div v-else-if="playlists.length > 0">
    <div class="flex flex-col gap-2 overflow-hidden">
      <h2>Trending Playlists</h2>
      <div class="flex gap-4">
        <div v-for="playlist in playlists">
          <playlist-card :playlist="playlist" />
        </div>
      </div>
    </div>
  </div>
</template>
