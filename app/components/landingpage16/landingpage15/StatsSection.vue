<script setup lang="ts">
const stats = [
  { label: 'Projects completed', value: '400+' },
  { label: 'Return on investment', value: '600%' },
  { label: 'Global downloads', value: '10k' },
  { label: '5-star reviews', value: '200+' }
]
</script>

<template>
  <section class="bg-muted py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <dl class="grid gap-x-4 gap-y-8 border-muted-200 dark:border-muted-800 md:grid-cols-2 md:border-y md:py-16 lg:grid-cols-4">
        <div v-for="stat in stats" :key="stat.label" class="flex flex-1 flex-col-reverse gap-3 text-center">
          <dt class="text-lg font-semibold text-primary">
            {{ stat.label }}
          </dt>
          <dd class="text-display-lg font-semibold text-primary md:text-display-xl">
            {{ stat.value }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
