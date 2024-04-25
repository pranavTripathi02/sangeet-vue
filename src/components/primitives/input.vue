<script setup lang="ts">
import { InputTypeHTMLAttribute, ref } from "vue";
import VueFeather from "vue-feather";

type Props = {
  label: string;
  showLabel?: boolean;
  type: InputTypeHTMLAttribute;
};
// validator: (val: string) => ["email", "password", "text"].includes(val),
const props = withDefaults(defineProps<Props>(), {
  showLabel: false,
  type: "text",
});

const passwordVisible = ref(false);
const togglePassword = () => {
  passwordVisible.value = !passwordVisible.value;
};
</script>

<template>
  <div class="relative flex w-full flex-col gap-2">
    <label v-if="props.showLabel" :for="props.label">{{ props.label }}</label>
    <input
      class="focus:outline-accent/50 w-full rounded bg-primary px-2 py-2 text-background outline-none focus:outline-1"
      v-if="props.type === 'password'"
      :id="props.label"
      :type="passwordVisible ? 'text' : 'password'"
      :placeholder="props.label"
    />
    <input
      class="focus:outline-accent/50 w-full rounded bg-primary px-2 py-2 text-background outline-none focus:outline-1"
      v-if="props.type !== 'password'"
      :id="props.label"
      :type="props.type"
      :placeholder="props.label"
    />
    <span
      v-if="props.type === 'password'"
      class="absolute bottom-1 right-2 cursor-pointer text-background"
      @click="togglePassword"
    >
      <vue-feather v-if="!passwordVisible" type="eye-off" />
      <vue-feather v-if="passwordVisible" type="eye" />
    </span>
  </div>
</template>
