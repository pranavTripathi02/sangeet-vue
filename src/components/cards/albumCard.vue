<script setup lang="ts">
import { ref } from "vue";
import { router } from "../../route/router";
import { TAlbum } from "../../types";
import playBtn from "../playBtn.vue";
import api from "../../api/api";
import Error from "../error.vue";

type TProps = {
  album: { id: string };
};
const props = defineProps<TProps>();
const handleClick = () => {
  router.push(`/albums/${props.album.id}`);
};

const loading = ref(false);
const fetchAlbum = async () => {
  loading.value = true;
  try {
    const { data } = await api.get(`/albums/${props.album.id}`);
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
  <div v-if="error"><Error /></div>
  <div
    v-else
    class="group flex min-h-[260px] w-[200px] flex-col gap-2 rounded p-2 hover:bg-secondary"
    @click="handleClick"
  >
    <!-- image -->
    <div
      class="relative h-[184px] w-[184px] overflow-hidden rounded-md object-fill"
    >
      <img
        :src="album.image"
        height="184"
        width="184"
        alt="album art"
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
      <span class="block text-lg">{{ album.title }}</span>
      <span v-if="album.artist?.first_name" class="block opacity-80"
        >{{ album.artist.first_name }} {{ album.artist.last_name ?? "" }}</span
      >
    </div>
  </div>
</template>
