<script setup lang="ts">
import Button from "./primitives/button.vue";
import Input from "./primitives/input.vue";
import VueFeather from "vue-feather";
</script>

<template>
  <header
    class="sticky top-0 flex w-full items-center justify-between bg-secondary px-6 py-2"
  >
    <div class="flex items-center justify-start gap-8 lg:w-1/2">
      <div class="flex min-w-fit items-center gap-4">
        <button class="max-h-fit min-w-fit">
          <vue-feather type="menu" size="32" stroke="white" />
        </button>
        <span class="text-[36px] -tracking-[.28rem]">Sangeet</span>
      </div>
      <div class="hidden w-full md:block">
        <Input type="text" label="Search" />
      </div>
    </div>
    <div>
      <Button variant="primary">Sign up</Button>
      <Button variant="text">Log in</Button>
    </div>
  </header>
</template>
