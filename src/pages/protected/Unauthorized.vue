<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <h3>This feature is available to registered users.</h3>
  <h4>
    Please
    <router-link
      :to="{ name: 'login' }"
      class="underline"
      >log into</router-link
    >
    your account or
    <router-link
      :to="{ name: 'register' }"
      class="underline"
      >sign up</router-link
    >
    .
  </h4>
</template>
