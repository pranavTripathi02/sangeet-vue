<script setup lang="ts">
import { ref } from "vue";
import VueFeather from "vue-feather";

type Props = {
  label: string;
  modelValue: string;
};
// validator: (val: string) => ["email", "password", "text"].includes(val),
const props = withDefaults(defineProps<Props>(), {
  type: "text",
  modelValue: "",
});

const passwordVisible = ref(false);
const togglePassword = () => {
  passwordVisible.value = !passwordVisible.value;
};
</script>

<template>
  <div class="relative flex w-full flex-col gap-2">
    <label v-if="props.label" :for="props.label"
      >{{ props.label }}<span class="text-danger">*</span></label
    >
    <input
      class="w-full rounded bg-primary px-2 py-2 text-background outline-none focus:outline-1 focus:outline-accent/50"
      :id="props.label"
      :type="passwordVisible ? 'text' : 'password'"
      :placeholder="props.label"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as any).value)"
    />
    <span
      class="absolute bottom-1 right-2 cursor-pointer text-background"
      @click="togglePassword"
    >
      <vue-feather v-if="!passwordVisible" type="eye-off" />
      <vue-feather v-if="passwordVisible" type="eye" />
    </span>
  </div>
</template>
