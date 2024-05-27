<script setup lang="ts">
import { ref } from "vue";
import ArtistCard from "../cards/artistCard.vue";
import api from "../../api/api.ts";
import Loading from "../loading.vue";
const loading = ref(false);
const fetchTopArtists = async () => {
  loading.value = true;
  try {
    const { data } = await api.get("/artists?sort=top");
    return data;
  } catch (err) {
    return { error: err };
  } finally {
    loading.value = false;
  }
};

const { artists, error } = await fetchTopArtists();
</script>

<template>
  <div v-if="loading"><Loading /></div>
  <div v-else>
    <div
      v-if="!error"
      class="flex flex-col gap-2 overflow-hidden"
    >
      <h2>Top Artists</h2>
      <div class="flex gap-4">
        <div v-for="artist in artists">
          <artist-card
            :artist="artist"
            :key="artist._id"
          />
        </div>
      </div>
    </div>
  </div>
</template>
