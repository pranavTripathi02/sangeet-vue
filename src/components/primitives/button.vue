<script setup lang="ts">
import { cva } from "class-variance-authority";
import { computed } from "vue";

type TBtn = "primary" | "secondary" | "outline" | "text" | "danger";
type Props = {
  disabled?: boolean;
  variant: TBtn;
  pill?: boolean;
};
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  variant: "secondary",
  pill: false,
});

const buttonClass = computed(() =>
  cva("px-6 py-2  mx-2", {
    variants: {
      intent: {
        primary: "border border-accent",
        secondary: "bg-secondary",
        outline: "border border-primary",
        text: "hover:bg-secondary",
        danger: "bg-red-500",
      },
      pill: {
        true: "rounded-full",
        false: "rounded-lg",
      },
      disabled: {
        true: "animate-pulse text-primary/30 cursor-wait",
        false: "",
      },
    },
  })({ intent: props.variant, pill: props.pill, disabled: props.disabled }),
);
</script>

<template>
  <button :class="buttonClass" :disabled="disabled">
    <slot />
  </button>
</template>
