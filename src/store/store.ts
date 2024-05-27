import { reactive, toRefs } from "vue";
import { TAlbum, TPlaylist, TTrack } from "../types";

const store = reactive({
  album: null as TAlbum | null,
  playlist: null as TPlaylist | null,
  track: null as TTrack | null,
});

export const usePlayer = () => {
  const updateTrack = (track: TTrack | null) => {
    store.track = track;
    console.log("store track", store.track);
  };
  return { ...toRefs(store), updateTrack };
};
