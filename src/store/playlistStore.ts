import { defineStore } from "pinia";
import { ref } from "vue";

const usePlaylistStore = defineStore("playlist", () => {
  const selPlaylistId = ref<string | null>(null);

  return { selPlaylistId };
});

export default usePlaylistStore;
