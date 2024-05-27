<script setup lang="ts">
import Input from "../components/primitives/input.vue";
import { ref } from "vue";
const searchText = ref("");
</script>
<template>
  <div class="w-1/2 rounded overflow-clip block">
    <Input
      type="text"
      :model-value="searchText"
      label="Search"
    />
  </div>
</template>
