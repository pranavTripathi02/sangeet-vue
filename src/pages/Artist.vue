<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import api from "../api/api";
import Loading from "../components/loading.vue";
import Error from "../components/error.vue";
import { TArtist } from "../types";
import PlayBtn from "../components/playBtn.vue";
import AlbumCard from "../components/cards/albumCard.vue";

const route = useRoute();
const artistId = route.params.id;

const isLoading = ref(false);

const fetchArtist = async () => {
  isLoading.value = true;
  try {
    const { data } = await api.get(`/artists/${artistId}`);
    return data;
  } catch (err) {
    return { error: err };
  } finally {
    isLoading.value = false;
  }
};

const { artist, error }: { artist: TArtist; error: unknown } =
  await fetchArtist();
// console.log(artist);
</script>

<template>
  <div v-if="isLoading">
    <Loading />
  </div>
  <div v-else>
    <div v-if="!error && artist">
      <!-- Header -->
      <header
        class="flex w-full gap-4 rounded-lg p-2"
        :style="{
          background: `linear-gradient( to bottom right, rgba(0,0,0, .45), rgba(0,0,0, 1)),url(${artist.artist_image})`,
          'background-size': 'cover',
          'background-position': 'center',
          'background-repeat': 'no-repeat',
        }"
      >
        <div class="max-h-80 max-w-80 overflow-clip rounded-full">
          <img
            :src="artist.artist_image"
            alt="artist image"
            height="320"
            width="320"
            class="aspect-square object-cover"
          />
        </div>
        <div class="flex max-h-80 flex-col justify-between gap-8 py-4">
          <div class="flex flex-col gap-6">
            <span class="block capitalize">artist</span>
            <span class="block text-3xl"
              >{{ artist.first_name }} {{ artist.last_name }}</span
            >
          </div>
          <div class="flex flex-col gap-2">
            <span v-if="(artist.tracks?.length ?? 0) > 0" class="block"
              >{{ artist.tracks?.length }} Tracks</span
            >
            <span v-if="(artist.albums?.length ?? 0) > 0" class="block"
              >{{ artist.albums?.length }} Albums</span
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
      <!-- Albums list -->
      <div v-if="artist.albums" class="flex flex-col gap-2 overflow-hidden">
        <h2>Artist Albums</h2>
        <div class="flex gap-4">
          <div v-for="album in artist.albums">
            <album-card :album="album" />
          </div>
        </div>
      </div>
      <!-- Songs List -->
      <div v-if="artist.tracks">
        <h2>Artist Albums</h2>
        <song-table :track-ids="artist.tracks" />
      </div>
    </div>
    <div v-else><Error /></div>
  </div>
</template>
