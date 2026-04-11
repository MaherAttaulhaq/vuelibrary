<template>
  <li>
    <div class="flex max-w-sm flex-col items-center gap-4 text-center">
      <div class="flex size-13 shrink-0 items-center justify-center rounded-lg bg-bg-primary shadow-xs ring-1 ring-border-secondary ring-inset md:size-16 md:rounded-xl">
        <img :src="logo" :alt="name" class="size-12 md:size-14" />
      </div>
      <div class="flex flex-col items-center gap-4">
        <div>
          <h3 class="text-lg font-semibold text-text-primary">{{ name }}</h3>
          <p class="mt-1 text-md text-text-tertiary">{{ description }}</p>
        </div>
        <UButton label="View integration" variant="link" color="primary" to="#" />
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  description: String,
  logo: String
})
</script>
