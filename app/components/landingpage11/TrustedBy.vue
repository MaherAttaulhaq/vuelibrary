<template>
  <section class="py-12 bg-gray-100 dark:bg-gray-900/30">
    <div class="max-w-[1560px] mx-auto px-4 md:px-8 text-center">
      <p class="text-sm font-medium text-gray-500 uppercase tracking-wide">Trusted by 4,000+ companies</p>
      <div class="flex flex-wrap justify-center gap-8 mt-6 opacity-70">
        <span v-for="company in companies" :key="company" class="text-xl font-semibold text-gray-400">
          {{ company }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const companies = ['Catalog', 'Pictel AI', 'Leapyear', 'Peregrin', 'EasyTax', 'CoreOS']
</script>