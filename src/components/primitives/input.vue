<script setup lang="ts">
import { InputTypeHTMLAttribute } from "vue";

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
</script>

<template>
  <div class="w-full">
    <label v-if="props.showLabel">{{ props.label }}</label>
    <input
      class="focus:outline-accent/50 w-full rounded bg-primary px-4 py-2 text-background outline-none focus:outline-1"
      :id="props.label"
      :type="props.type"
      :placeholder="props.label"
    />
  </div>
</template>
