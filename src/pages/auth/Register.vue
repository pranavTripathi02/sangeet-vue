<script setup>
import Input from "../../components/primitives/input.vue";
import Button from "../../components/primitives/button.vue";
import VueFeather from "vue-feather";
import { ref } from "vue";

const isLoading = ref(false);
const isError = ref(false);
const errMsg = ref("");

const handleSubmit = async (e) => {
  e.preventDefault();
  isLoading.value = true;
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  } catch (err) {
    isError.value = true;
    errMsg.value = err;
  }
  isLoading.value = false;
  console.log("to", isLoading.value);
};
</script>
<template>
  <section
    class="flex min-w-80 max-w-lg flex-col items-center justify-between gap-8 rounded bg-secondary px-8 py-4"
  >
    <h1>Register</h1>
    <form class="flex w-80 flex-col gap-8 px-2 py-2">
      <div class="flex flex-col gap-2">
        <Input type="email" label="Email" v-bind:showLabel="true" />
        <Input type="text" label="Name" v-bind:showLabel="true" />
        <Input type="password" label="Password" v-bind:showLabel="true" />
        <Input
          type="password"
          label="Confirm password"
          v-bind:showLabel="true"
        />
      </div>
      <Button
        variant="primary"
        v-bind:pill="true"
        :disabled="isLoading"
        @click="(e) => handleSubmit(e)"
        >Sign Up</Button
      >
    </form>
    <div v-if="isError" class="bg-danger flex items-center rounded px-4 py-4">
      <vue-feather type="alert-triangle" class="me-4 min-w-fit" />
      {{ errMsg }}
    </div>
    <span class="text-primary/50">
      Already have an account?
      <router-link to="/auth/login" class="text-primary underline"
        >Log In</router-link
      >
      here.
    </span>
  </section>
</template>
