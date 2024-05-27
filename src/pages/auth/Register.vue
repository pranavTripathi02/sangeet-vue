<script setup>
import Input from "../../components/primitives/input.vue";
import PasswordInput from "../../components/primitives/passwordInput.vue";
import Button from "../../components/primitives/button.vue";
import VueFeather from "vue-feather";
import { ref } from "vue";
import api from "../../api/api";

const isLoading = ref(false);
const isError = ref(false);
const isSuccess = ref(false);
const msg = ref("");

let email = ref("");
let first_name = ref("");
let last_name = ref("");
let password = ref("");
let rePassword = ref("");

// TODO: validation
const handleSubmit = async (e) => {
  e.preventDefault();
  isLoading.value = true;
  isError.value = false;
  isSuccess.value = false;
  msg.value = "";
  try {
    const { res } = await api.post(
      "/auth/register",
      {
        user_email: email.value,
        user_first_name: first_name.value,
        user_last_name: last_name.value,
        user_password: password.value,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    isSuccess.value = true;
    msg.value = "Success. Please Login";
  } catch (err) {
    isError.value = true;
    msg.value = err.response.data.error ?? err.message;
    // console.error(err, err.message);
  }
  email.value = "";
  first_name.value = "";
  last_name.value = "";
  password.value = "";
  rePassword.value = "";
  isLoading.value = false;
};
</script>
<template>
  <section
    class="flex min-w-80 max-w-lg flex-col items-center justify-between gap-8 rounded bg-secondary px-8 py-4"
  >
    <h1>Register</h1>
    <form class="flex w-80 flex-col gap-8 px-2 py-2">
      <div class="flex flex-col gap-2">
        <Input type="email" label="Email" v-model="email" :required="true" />
        <Input type="text" label="First Name" v-model="first_name" required />
        <Input type="text" label="Last Name" v-model="last_name" required />
        <password-input
          label="Password"
          v-model="password"
          required
          min="8"
          max="16"
        />
        <password-input
          label="Confirm password"
          v-model="rePassword"
          required
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
    <div
      v-if="isError"
      class="flex items-center rounded bg-danger/80 px-4 py-4"
    >
      <vue-feather type="alert-triangle" class="me-4 min-w-fit" />
      {{ msg }}
    </div>
    <div
      v-if="isSuccess"
      class="bg-success/80 flex items-center rounded px-4 py-4"
    >
      <vue-feather type="check" class="me-4 min-w-fit" />
      {{ msg }}
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
