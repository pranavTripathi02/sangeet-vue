<script setup lang="ts">
import { TArtist } from "../../types";
import { router } from "../../route/router";
import VueFeather from "vue-feather";

type TProps = {
  artist: TArtist;
};
const props = defineProps<TProps>();
const handleClick = () => {
  router.push(`/artists/${props.artist._id}`);
};
</script>
<template>
  <div
    class="group flex h-[260px] w-[200px] flex-col gap-2 rounded p-2 hover:bg-secondary"
    @click="handleClick"
  >
    <!-- image -->
    <div class="relative h-[184px] w-[184px]">
      <img
        :src="props.artist.artist_image"
        alt="Artist Image"
        class="rounded-full"
      />
      <!-- TODO Create play/pause btn component -->
      <div
        class="invisible absolute bottom-2 right-2 h-12 w-12 translate-y-full cursor-pointer rounded-full bg-accent text-background opacity-0 duration-75 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
      >
        <!-- play/pause btn svg -->
        <div class="m-auto flex h-full w-full items-center justify-center">
          <vue-feather
            type="play"
            size="32"
          />
        </div>
      </div>
    </div>
    <!-- info -->
    <div class="flex flex-col">
      <span class="mx-auto inline-block text-lg"
        >{{ props.artist.first_name }} {{ props.artist.last_name }}</span
      >
    </div>
  </div>
</template>
