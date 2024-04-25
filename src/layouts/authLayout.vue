<script setup>
import { RouterView, RouterLink } from "vue-router";
import Logo from "../components/logo.vue";
</script>

<template>
  <div class="to-primary/50 h-dvh bg-gradient-to-b from-background from-30%">
    <div class="px-4 py-4">
      <Logo />
    </div>
    <div class="mx-auto mt-8 w-fit">
      <router-view />
    </div>
    <div class="w-full text-center">
      <span class="text-primary/50 text-sm"
        >Go back to
        <router-link to="/" class="underline">home</router-link>
      </span>
    </div>
  </div>
</template>
