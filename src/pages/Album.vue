<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import api from "../api/api";
import Loading from "../components/loading.vue";
import Error from "../components/error.vue";
import { TAlbum } from "../types";
import SongTable from "../components/songTable.vue";
import PlayBtn from "../components/playBtn.vue";

const route = useRoute();
const albumId = route.params.id;

const loading = ref(false);

const fetchAlbum = async () => {
  loading.value = true;
  try {
    const { data } = await api.get(`/albums/${albumId}`);
    return data;
  } catch (err) {
    return { error: err };
  } finally {
    loading.value = false;
  }
};

const { album, error }: { album: TAlbum; error: unknown } = await fetchAlbum();
</script>

<template>
  <div v-if="loading">
    <Loading />
  </div>
  <div v-else>
    <div v-if="!error && album">
      <!-- Header -->
      <!-- 
          TODO: 
          use playlist img age backdrop 
      -->
      <header
        class="flex w-full gap-4 rounded-lg bg-gradient-to-br from-accent/50 to-transparent p-2"
        :style="{
          background: `linear-gradient( to bottom right, rgba(0,0,0, .45), rgba(0,0,0, 1)),url(${album.image})`,
          'background-size': 'cover',
          'background-position': 'center',
          'background-repeat': 'no-repeat',
        }"
      >
        <div class="max-h-80 max-w-80 overflow-clip rounded-lg">
          <img
            :src="album.image"
            alt="playlist image"
            height="320"
            width="320"
            class="aspect-square object-cover"
          />
        </div>
        <div class="flex max-h-80 flex-col justify-between gap-8 py-4">
          <div class="flex flex-col gap-6">
            <span class="block">Album</span>
            <span class="block text-3xl">{{ album.title }}</span>
          </div>
          <div class="flex flex-col gap-2">
            <span v-if="album.tracks" class="block"
              >{{ album.tracks.length }} Tracks</span
            >
            <span v-if="album.artist" class="block">By {{ album.artist }}</span>
          </div>
          <!-- Play button + ... menu -->
          <div>
            <div
              v-if="album.tracks"
              class="h-fit w-fit rounded-full bg-accent p-2 text-background"
            >
              <play-btn :size="48" />
            </div>
          </div>
        </div>
      </header>
      <!-- search and sort -->
      <!-- Songs List -->
      <song-table v-if="album.tracks" :track-ids="album.tracks" />
    </div>
    <div v-else><Error /></div>
  </div>
</template>
