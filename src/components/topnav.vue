<script setup lang="ts">
import Logo from "./logo.vue";
import Button from "./primitives/button.vue";
import Input from "./primitives/input.vue";
import VueFeather from "vue-feather";
import { RouterLink } from "vue-router";
</script>

<template>
  <header
    class="sticky top-0 flex w-full items-center justify-between bg-secondary px-6 py-2"
  >
    <div class="flex items-center justify-start gap-8 lg:w-1/2">
      <div class="flex min-w-fit gap-4">
        <button>
          <vue-feather
            type="menu"
            class="align-bottom"
            size="32"
            stroke="white"
          />
        </button>
        <Logo />
      </div>
      <div class="hidden w-full md:block">
        <Input type="text" label="Search" />
      </div>
    </div>
    <div>
      <router-link to="/auth/register"
        ><Button variant="primary">Sign up</Button></router-link
      >
      <router-link to="/auth/login"
        ><Button variant="text">Log in</Button></router-link
      >
    </div>
  </header>
</template>
