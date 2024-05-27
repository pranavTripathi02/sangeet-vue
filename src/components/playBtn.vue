<script setup lang="ts">
import VueFeather from "vue-feather";
import { TTrack } from "../types";
import { usePlayer } from "../store/store";
type Props = {
  size?: number;
  track?: TTrack | null;
};
const props = withDefaults(defineProps<Props>(), { size: 24, track: null });
const { updateTrack } = usePlayer();
// const handleClick = () => {
//   updateTrack(props.track);
// };
</script>
<template>
  <!-- play/pause btn svg -->
  <button
    class="m-auto flex h-full w-full items-center justify-center"
    @click="updateTrack(props.track)"
  >
    <vue-feather
      type="play"
      :size="props.size"
    />
  </button>
</template>
