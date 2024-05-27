<script setup lang="ts">
type Props = {
  title: string;
  // songList: [],
  type: "artist" | "song";
};
const props = withDefaults(defineProps<Props>(), {
  title: "Recommended Songs",
  type: "song",
});
</script>
<template>
  <h2>{{ props.title }}</h2>
</template>
