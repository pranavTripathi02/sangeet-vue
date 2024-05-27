<script setup lang="ts">
import { TTrack } from "../../types";
import VueFeather from "vue-feather";

type TProps = {
  track: TTrack;
};
const props = defineProps<TProps>();
</script>
<template>
  <div
    class="group flex min-h-[260px] w-[200px] flex-col gap-2 rounded p-2 hover:bg-secondary"
  >
    <!-- image -->
    <div
      class="relative h-[184px] w-[184px] overflow-hidden rounded-md object-fill"
    >
      <img
        :src="props.track.image"
        height="184"
        width="184"
        alt="Track Art"
        class="scale-[2] object-fill"
      />
      <div
        class="invisible absolute bottom-2 right-2 h-12 w-12 translate-y-full cursor-pointer rounded-full bg-accent text-background opacity-0 duration-75 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
      >
        <!-- play/pause btn svg -->
        <div class="m-auto flex h-full w-full items-center justify-center">
          <vue-feather type="play" size="32" />
        </div>
      </div>
    </div>
    <!-- info -->
    <div class="flex cursor-pointer flex-col space-y-1">
      <span class="block text-lg">{{ props.track.title }}</span>
      <span v-if="props.track.artist" class="block opacity-80">{{
        props.track.artist.first_name
      }}</span>
    </div>
  </div>
</template>
