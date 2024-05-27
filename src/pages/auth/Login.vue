<script setup>
import Input from "../../components/primitives/input.vue";
import Button from "../../components/primitives/button.vue";
import { ref } from "vue";
import api from "../../api/api";
import { router } from "../../route/router";

const emailRef = ref("");
const passwordRef = ref("");
const isLoading = ref(false);
const isError = ref(false);
const errMsg = ref("");

const email = ref("");
const password = ref("");

const handleSubmit = async (e) => {
  e.preventDefault();
  isLoading.value = true;
  isError.value = false;
  errMsg.value = "";
  try {
    const data = await api.post(
      "/auth/login",
      {
        user_email: email.value,
        user_password: password.value,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    // reset form after successful submission
    email.value = "";
    password.value = "";
    router.push("/");
  } catch (err) {
    isError.value = true;
    errMsg.value = err;
  }
  isLoading.value = false;
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
          type="email"
          label="Email"
          v-model="email"
          required
        />
        <Input
          type="password"
          label="Password"
          v-model="password"
          required
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
      <router-link
        to="/auth/register"
        class="text-primary underline"
        >Sign up</router-link
      >
      here.
    </span>
  </section>
</template>
