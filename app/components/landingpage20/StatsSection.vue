<script setup lang="ts">
const stats = [
  { label: 'Projects completed', value: '400+' },
  { label: 'Return on investment', value: '600%' },
  { label: 'Global downloads', value: '10k' }
]
</script>

<template>
  <section class="bg-muted py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div
        class="flex flex-col gap-8 rounded-2xl bg-muted-100 dark:bg-muted-900 px-6 py-10 md:gap-16 md:rounded-none md:bg-transparent md:p-0"
      >
        <div class="flex w-full flex-col self-center text-center md:max-w-3xl">
          <h2
            class="text-display-sm font-semibold text-primary md:text-display-md"
          >
            Unleash the full power of data
          </h2>
          <p
            class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl"
          >
            Everything you need to convert, engage, and retain more users.
          </p>
        </div>
        <dl
          class="flex flex-col gap-8 rounded-2xl bg-muted-100 dark:bg-muted-900 md:flex-row md:p-16"
        >
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="flex flex-1 flex-col-reverse gap-3 text-center"
          >
            <dt class="text-lg font-semibold text-primary">
              {{ stat.label }}
            </dt>
            <dd
              class="text-display-lg font-semibold text-brand-700 dark:text-brand-300 md:text-display-xl"
            >
              {{ stat.value }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
