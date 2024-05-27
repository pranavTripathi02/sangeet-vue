<script setup lang="ts">
type Props = {
  label?: string;
  showLabel?: boolean;
  modelValue: string;
  required?: boolean;
};
// validator: (val: string) => ["email", "password", "text"].includes(val),
const props = withDefaults(defineProps<Props>(), {
  showLabel: false,
  modelValue: "",
  required: false,
});
</script>

<template>
  <div class="relative flex w-full flex-col gap-2">
    <label v-if="props.showLabel" :for="props.label"
      >{{ props.label
      }}<span class="text-danger">{{
        props.required ? "*" : null
      }}</span></label
    >
    <input
      class="w-full rounded bg-primary px-2 py-2 text-background outline-none focus:outline-1 focus:outline-accent/50"
      :id="props.label"
      :placeholder="props.label"
      :value="props.modelValue"
      @input="$emit('update:modelValue', ($event.currentTarget as any)?.value)"
      v-bind="$attrs"
    />
  </div>
</template>
