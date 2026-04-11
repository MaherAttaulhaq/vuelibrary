<template>
  <li>
    <div :class="['relative flex cursor-pointer flex-col items-start gap-4 border-l-4 py-4 pl-5 transition duration-100 ease-linear hover:border-border-brand', isActive ? 'border-border-brand' : 'border-border-tertiary']">
      <div>
        <h3 class="text-lg font-semibold text-text-primary">{{ title }}</h3>
        <p class="mt-1 text-md text-text-tertiary">{{ description }}</p>
      </div>
      <UButton label="Learn more" variant="link" color="primary" to="#" />
    </div>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  isActive: Boolean
})
</script>
