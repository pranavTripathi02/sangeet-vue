<script setup>
import VueFeather from "vue-feather";
</script>
<template>
  <aside
    class="fixed h-full w-[128px] space-y-8 bg-secondary px-4 py-16 lg:w-[256px]"
  >
    <div class="flex flex-col space-y-4">
      <RouterLink
        active-class="bg-primary/20 text-primary opacity-100"
        class="rounded opacity-50 duration-200 hover:opacity-100"
        to="/"
      >
        <div
          class="ms-0 flex items-center justify-center gap-2 py-4 lg:ms-12 lg:justify-start"
        >
          <vue-feather type="home" size="24" />
          <span class="hidden lg:inline-block">Home</span>
        </div>
      </RouterLink>
      <RouterLink
        active-class="bg-primary/20 text-primary opacity-100"
        class="rounded opacity-50 duration-200 hover:opacity-100"
        to="/feed"
      >
        <div
          class="ms-0 flex items-center justify-center gap-2 py-4 lg:ms-12 lg:justify-start"
        >
          <vue-feather type="inbox" size="24" />
          <span class="hidden lg:inline-block">Feed</span>
        </div>
      </RouterLink>
      <RouterLink
        active-class="bg-primary/20 text-primary opacity-100"
        class="rounded opacity-50 duration-200 hover:opacity-100"
        to="/search"
      >
        <div
          class="ms-0 flex items-center justify-center gap-2 py-4 lg:ms-12 lg:justify-start"
        >
          <vue-feather type="search" size="24" />
          <span class="hidden lg:inline-block">Search</span>
        </div>
      </RouterLink>
    </div>
    <div class="h-0 w-full border-t border-primary bg-background" />
    <div class="flex flex-col space-y-4">
      <RouterLink
        active-class="bg-primary/20 text-primary opacity-100"
        class="rounded opacity-50 duration-200 hover:opacity-100"
        to="/library"
      >
        <div
          class="ms-0 flex items-center justify-center gap-2 py-4 lg:ms-12 lg:justify-start"
        >
          <vue-feather type="archive" size="24" />
          <span class="hidden lg:inline-block">Library</span>
        </div>
      </RouterLink>
    </div>
  </aside>
</template>
