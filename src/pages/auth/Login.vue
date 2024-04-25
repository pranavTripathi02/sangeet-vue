<script setup>
import Input from "../../components/primitives/input.vue";
import Button from "../../components/primitives/button.vue";
import { ref } from "vue";

const emailRef = ref("");
const passwordRef = ref("");
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
    class="flex w-fit min-w-80 flex-col items-center justify-between gap-8 rounded bg-secondary px-8 py-4"
  >
    <h1>Log In</h1>
    <form class="flex w-80 flex-col gap-8 px-2 py-2">
      <div class="flex flex-col gap-2">
        <Input
          ref="emailRef"
          type="email"
          label="Email"
          value="emailRef"
          v-bind:showLabel="true"
        />
        <Input
          ref="passwordRef"
          type="password"
          label="Password"
          v-bind:showLabel="true"
        />
      </div>
      <Button
        variant="primary"
        v-bind:pill="true"
        @click="(e) => handleSubmit(e)"
        :disabled="isLoading"
        >Log in</Button
      >
    </form>
    <span class="text-primary/50">
      Don't have an account?
      <router-link to="/auth/register" class="text-primary underline"
        >Sign up</router-link
      >
      here.
    </span>
  </section>
</template>
