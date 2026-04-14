<template>
  <section class="py-12 bg-gray-100 dark:bg-gray-900/30">
    <div class="max-w-[1560px] mx-auto px-4 md:px-8 text-center">
      <p class="text-sm font-medium text-gray-500 uppercase tracking-wide">
        Trusted by 4,000+ companies
      </p>

      <!-- Marquee -->
      <UMarquee
        pause-on-hover
        class="mt-6"
        :ui="{
          root: 'gap-10 [--duration:30s]'
        }"
      >
        <span
          v-for="(company, index) in companies"
          :key="index"
          class="text-xl font-semibold text-gray-400 shrink-0"
        >
          {{ company }}
        </span>
      </UMarquee>
    </div>
  </section>
</template>

<script setup lang="ts">
const companies = [
  'Catalog',
  'Pictel AI',
  'Leapyear',
  'Peregrin',
  'EasyTax',
  'CoreOS'
]
</script>