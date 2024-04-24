<script setup lang="ts">
import { TArtist } from "../types";

type TProps = {
  artist: TArtist;
};
const props = defineProps<TProps>();
</script>
<template>
  <div
    class="group flex h-[260px] w-[200px] flex-col rounded p-2 hover:bg-secondary"
  >
    <!-- image -->
    <div class="relative h-[184px] w-[184px] overflow-hidden rounded-full">
      <img :src="props.artist.image" alt="Artist Image" />
      <!-- TODO Create play/pause btn component -->
      <div
        class="invisible absolute bottom-2 right-2 h-12 w-12 translate-y-full cursor-pointer rounded-full bg-accent text-background opacity-0 duration-75 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
      >
        <!-- play/pause btn svg -->
      </div>
    </div>
    <!-- info -->
    <div class="flex flex-col space-y-1">
      <span class="block text-lg">{Song Title}</span>
      <span class="block opacity-50">{Song Artist}</span>
    </div>
  </div>
</template>
