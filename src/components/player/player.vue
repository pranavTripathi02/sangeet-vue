<script setup lang="ts">
import { computed, ref } from "vue";
import { usePlayer } from "../../store/store";
const { track } = usePlayer();
import VueFeather from "vue-feather";
const audioPlayer = ref<HTMLAudioElement | null>(null);
console.log(audioPlayer.value?.duration);
const duration = ref(audioPlayer.value?.duration);
const progress = ref(audioPlayer.value?.currentTime);
const currentProgress = computed(() => {
  console.log((progress.value! / duration.value!) * 100 + "%");
});
const isPlaying = ref<boolean>(true);
// const volume = ref(audioPlayer.value?.volume);
const handlePlayPause = async () => {
  if (isPlaying) {
    audioPlayer.value?.pause();
    isPlaying.value = false;
  } else {
    await audioPlayer.value?.play();
    // isPlaying.value = true;
  }
  console.log(audioPlayer.value, currentProgress.value);
};
const handleSkipBack = () => {};
const handleSkipForward = () => {};
</script>

<template>
  <div
    v-if="track"
    class="fixed bottom-0 left-0 right-0 z-20 flex w-full justify-between bg-secondary px-12 py-2"
  >
    <div class="flex items-center gap-2">
      <div class="h-20 w-20 overflow-clip rounded-lg">
        <img
          :src="track.image"
          alt="track image"
          class="object-fit aspect-square h-full w-full"
        />
      </div>
      <div class="flex flex-col items-start justify-center gap-2">
        <span class="block">{{ track.title }}</span>
        <router-link
          :to="{ name: 'artists', params: { id: track.artist.id } }"
          class="block text-primary/50"
          >{{ track.artist.first_name }}
          {{ track.artist.last_name }}</router-link
        >
      </div>
    </div>
    <div class="absolute inset-0 mx-auto flex w-fit items-center gap-4">
      <!-- backward -->
      <button @click="handleSkipBack">
        <vue-feather type="skip-back" size="24" />
      </button>
      <!-- play/pause -->
      <button @click="handlePlayPause">
        <vue-feather v-if="isPlaying" type="pause" size="40" />
        <vue-feather v-else type="play" size="40" />
      </button>
      <!-- forward -->
      <button @click="handleSkipForward">
        <vue-feather type="skip-forward" size="24" />
      </button>
    </div>
    <div class="flex items-center gap-4">
      <!-- heart -->
      <vue-feather type="heart" />
      <!-- volume -->
      <vue-feather type="volume-1" size="32" />
    </div>
    <!-- progress/seekbar -->
    <div class="absolute left-0 right-0 top-0 h-1 w-full bg-primary/5">
      <span class="h-2 border-2 bg-accent" />
    </div>
    <audio ref="audioPlayer" autoplay :src="track.track_uri" />
  </div>
</template>
