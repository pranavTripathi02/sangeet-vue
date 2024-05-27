<script setup lang="ts">
import { TPlaylist } from "../../types.ts";
import PlaylistCard from "../cards/playlistCard.vue";
type TProps = {
  playlists: TPlaylist[];
};
const props = defineProps<TProps>();
</script>

<template>
  <div v-if="props.playlists" class="flex flex-col gap-2 overflow-hidden">
    <h2>Your Playlists</h2>
    <div class="flex gap-4">
      <div v-for="playlist in props.playlists">
        <playlist-card :playlist="playlist" />
      </div>
    </div>
  </div>
</template>
