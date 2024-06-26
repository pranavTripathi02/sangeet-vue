<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import api from "../api/api";
import Loading from "../components/loading.vue";
import Error from "../components/error.vue";
import { TPlaylist } from "../types";
import SongTable from "../components/songTable.vue";
import PlayBtn from "../components/playBtn.vue";

const route = useRoute();
const playlistId = route.params.id;

const loading = ref(false);

const fetchPlaylist = async () => {
  loading.value = true;
  try {
    const { data } = await api.get(`/playlists/${playlistId}`);
    return data;
  } catch (err) {
    return { error: err };
  } finally {
    loading.value = false;
  }
};

const { playlist, error }: { playlist: TPlaylist; error: unknown } =
  await fetchPlaylist();
</script>

<template>
  <div v-if="loading">
    <Loading />
  </div>
  <div v-else>
    <div v-if="!error && playlist">
      <!-- Header -->
      <!-- 
          TODO: 
          use playlist img age backdrop 
      -->
      <header
        class="flex w-full gap-4 rounded-lg p-2"
        :style="{
          background: `linear-gradient( to bottom right, rgba(0,0,0, .45), rgba(0,0,0, 1)),url(${playlist.image})`,
          'background-size': 'cover',
          'background-position': 'center',
          'background-repeat': 'no-repeat',
        }"
      >
        <div class="max-h-80 max-w-80 overflow-clip rounded-lg shadow-xl">
          <img
            :src="playlist.image"
            alt="playlist image"
            height="320"
            width="320"
            class="aspect-square object-cover"
          />
        </div>
        <div class="flex max-h-80 flex-col justify-between gap-8 py-4">
          <div class="flex flex-col gap-6">
            <span class="block">Playlist</span>
            <span class="block text-3xl">{{ playlist.title }}</span>
            <span
              v-if="playlist.description"
              class="block text-xl"
              >{{ playlist.description }}</span
            >
          </div>
          <div class="flex flex-col gap-2">
            <span class="block">{{ playlist.tracks.length }} Tracks</span>
            <span
              v-if="playlist.creator"
              class="block"
              >Created by {{ playlist.creator }}</span
            >
          </div>
          <!-- Play button + ... menu -->
          <div>
            <div class="h-fit w-fit rounded-full bg-accent p-2 text-background">
              <play-btn :size="48" />
            </div>
          </div>
        </div>
      </header>
      <!-- search and sort -->
      <!-- Songs List -->
      <Suspense>
        <song-table :track-ids="playlist.tracks" />
      </Suspense>
    </div>
    <div v-else><Error /></div>
  </div>
</template>
