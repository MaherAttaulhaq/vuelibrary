<template>
  <li>
    <div class="flex max-w-140 gap-4">
      <div class="hidden md:flex size-12 rounded-[10px] bg-bg-primary shadow-xs ring-1 ring-border-primary text-text-secondary items-center justify-center">
        <div :class="iconClass" />
      </div>
      <div class="flex md:hidden size-10 rounded-lg bg-bg-primary shadow-xs ring-1 ring-border-primary text-text-secondary items-center justify-center">
        <div :class="iconClassSmall" />
      </div>
      <div class="flex flex-col items-start gap-4">
        <div>
          <h3 class="mt-1.5 text-lg font-semibold text-text-primary md:mt-2.5">{{ title }}</h3>
          <p class="mt-1 text-md text-text-tertiary">{{ description }}</p>
        </div>
        <UButton label="Learn more" variant="link" color="primary" to="#" />
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
