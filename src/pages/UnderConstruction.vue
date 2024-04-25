<script setup>
import underConstructionSVG from "../assets/underConstruction.svg";
</script>

<template>
  <div className="mx-auto text-center">
    <div className="mx-auto w-1/2 md:w-2/5 text-end">
      <img :src="underConstructionSVG" alt="site under development" />
      <a
        href="https://storyset.com/work"
        className="opacity-10 text-xs"
        aria-label="Attribution link"
      >
        Work illustrations by Storyset
      </a>
    </div>
    <div>
      <h1>This part of the application is still under development.</h1>
      <h2>Please try again soon.</h2>
    </div>
  </div>
</template>
