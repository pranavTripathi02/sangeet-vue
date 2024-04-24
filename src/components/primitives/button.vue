<script setup lang="ts">
import { cva } from "class-variance-authority";
import { computed } from "vue";

type TBtn = "primary" | "secondary" | "outline" | "text" | "danger";
type Props = {
  disabled?: boolean;
  variant: TBtn;
};
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  variant: "secondary",
});

const buttonClass = computed(() =>
  cva("px-6 py-2 rounded-lg mx-2", {
    variants: {
      intent: {
        primary: "border border-accent",
        secondary: "bg-secondary",
        outline: "border border-primary",
        text: "hover:bg-secondary",
        danger: "bg-red-500",
      },
    },
  })({ intent: props.variant }),
);
</script>

<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>
