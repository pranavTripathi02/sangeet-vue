<script setup lang="ts">
import { ref } from "vue";
import api from "../api/api";
import { TTrack } from "../types";
import Loading from "./loading.vue";
import PlayBtn from "./playBtn.vue";
type TProps = {
  trackIds: { id: string }[];
};
const isLoading = ref(false);
const tracks: TTrack[] = [];
const fetchTracks = async () => {
  isLoading.value = true;
  try {
    for (let i = 0; i < props.trackIds.length; i++) {
      try {
        const { data } = await api.get(`/tracks/${props.trackIds[i].id}`);
        tracks.push(data.track);
      } catch (err) {
        console.error(err);
      }
    }
    return { error: null };
  } catch (err) {
    return { error: err };
  } finally {
    isLoading.value = false;
  }
};
const props = defineProps<TProps>();
const { error } = await fetchTracks();
</script>

<template>
  <div v-if="isLoading"><Loading /></div>
  <div
    v-else-if="error"
    class="my-12 text-center text-lg"
  >
    <span>No songs to show</span>
  </div>
  <div v-else-if="tracks.length == 0">No tracks to show right now.</div>
  <div
    v-else
    class="grid grid-flow-row"
  >
    <div
      class="mt-4 grid select-none grid-flow-col grid-cols-[32px_minmax(128px,800px)_minmax(64px,256px)_minmax(64px,256px)_128px_64px] items-center justify-items-start gap-4 border-b border-primary/50 px-4 py-2 text-primary/50"
    >
      <div>#</div>
      <div>Title</div>
      <div>Artist</div>
      <div>Album</div>
      <div class="justify-self-center">Added</div>
      <div class="justify-self-center">Duration</div>
    </div>
    <div
      v-for="track in tracks"
      class="group my-2 grid grid-flow-col grid-cols-[32px_minmax(128px,800px)_minmax(64px,256px)_minmax(64px,256px)_128px_64px] items-center gap-4 rounded px-4 py-2 hover:bg-primary/20"
    >
      <div class="relative">
        {{ track.track_num }}
        <div
          class="invisible absolute inset-0 -left-3 my-auto h-12 w-12 -translate-x-full cursor-pointer rounded-full bg-accent text-background opacity-0 duration-75 ease-out group-hover:visible group-hover:translate-x-0 group-hover:opacity-100"
        >
          <play-btn
            :size="32"
            :track="track"
          />
        </div>
      </div>
      <div class="overflow-hidden">
        <div class="flex items-center justify-start gap-2">
          <div class="max-h-12 max-w-12">
            <img
              :src="track.image"
              alt="track image"
              height="48"
              width="48"
              class="aspect-square object-cover"
            />
          </div>
          <span>{{ track.title }}</span>
        </div>
      </div>
      <div class="overflow-hidden">
        <router-link
          :to="{ name: 'artists', params: { id: track.artist?.id } }"
          class="w-fit hover:underline"
          >{{
            track.artist.first_name + " " + track.artist.last_name
          }}</router-link
        >
      </div>
      <div class="overflow-hidden hover:underline">
        <router-link
          :to="{ name: 'albums', params: { id: track.album?.id } }"
          class="w-fit hover:underline"
          >{{ track.album?.title }}</router-link
        >
      </div>
      <div class="justify-self-center overflow-hidden">
        <span>{{ track.addedOn || 0 }}</span>
      </div>
      <div class="justify-self-center overflow-hidden">
        <span>{{ track.listens }}</span>
      </div>
    </div>
  </div>
</template>
