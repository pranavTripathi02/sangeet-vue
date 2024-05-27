<script setup lang="ts">
import PlaylistCard from "../cards/playlistCard.vue";
import { ref } from "vue";
import api from "../../api/api.ts";
import Loading from "../loading.vue";
import Error from "../error.vue";
const isLoading = ref(false);
const fetchFeaturedPlaylists = async () => {
  isLoading.value = true;
  try {
    const { data } = await api.get("/playlists?sort=featured");
    return data;
  } catch (err) {
    return { error: err };
  } finally {
    isLoading.value = false;
  }
};

const { playlists, error } = await fetchFeaturedPlaylists();
</script>

<template>
  <div v-if="isLoading"><Loading /></div>
  <div v-else-if="error"><Error /></div>
  <div v-else-if="playlists.length > 0">
    <div class="flex flex-col gap-2 overflow-hidden">
      <h2>Featured Playlists</h2>
      <div class="flex gap-4">
        <div v-for="playlist in playlists">
          <playlist-card :playlist="playlist" />
        </div>
      </div>
    </div>
  </div>
</template>
