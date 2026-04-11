<template>
  <li>
    <div class="flex max-w-sm flex-col items-center gap-4 text-center">
      <div class="hidden md:flex size-12 rounded-[10px] bg-bg-primary shadow-xs ring-1 ring-border-primary text-text-secondary items-center justify-center">
        <div :class="iconClass" />
      </div>
      <div class="flex md:hidden size-10 rounded-lg bg-bg-primary shadow-xs ring-1 ring-border-primary text-text-secondary items-center justify-center">
        <div :class="iconClassSmall" />
      </div>
      <div>
        <h3 class="text-lg font-semibold text-text-primary">{{ title }}</h3>
        <p class="mt-1 text-md text-text-tertiary">{{ description }}</p>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: String,
  title: String,
  description: String
})

const iconClass = `i-${props.icon} size-6`
const iconClassSmall = `i-${props.icon} size-5`
</script>
