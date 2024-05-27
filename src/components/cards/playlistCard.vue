<script setup lang="ts">
import { router } from "../../route/router";
import { TPlaylist } from "../../types";
import playBtn from "../playBtn.vue";

type TProps = {
  playlist: TPlaylist;
};
const props = defineProps<TProps>();
const handleClick = () => {
  router.push(`/playlists/${props.playlist._id}`);
};
</script>
<template>
  <div
    class="group flex min-h-[260px] w-[200px] flex-col gap-2 rounded p-2 hover:bg-secondary"
    @click="handleClick"
  >
    <!-- image -->
    <div
      class="relative h-[184px] w-[184px] overflow-hidden rounded-md object-fill"
    >
      <img
        :src="props.playlist.image"
        height="184"
        width="184"
        alt="playlist Art"
        class="scale-[2] object-fill"
      />
      <div
        class="invisible absolute bottom-2 right-2 h-12 w-12 translate-y-full cursor-pointer rounded-full bg-accent text-background opacity-0 duration-75 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
      >
        <!-- play/pause btn svg -->
        <play-btn :size="32" />
      </div>
    </div>
    <!-- info -->
    <div class="flex cursor-pointer flex-col space-y-1">
      <span class="block text-lg">{{ props.playlist.title }}</span>
      <span v-if="props.playlist.creator?.name" class="block opacity-80">{{
        props.playlist.creator.name
      }}</span>
    </div>
  </div>
</template>
