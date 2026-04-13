<script setup lang="ts">
const trustedCompanies = [
  'catalog', 'pictel-ai', 'leapyear', 'peregrin', 'easy-tax'
]
</script>

<template>
  <section class="py-16 md:py-20 bg-muted">
    <UContainer class="text-center">
      <p class="text-muted-foreground font-medium">Trusted by 4,000+ companies</p>
      <div class="flex flex-wrap justify-center gap-8 mt-8 opacity-70 grayscale">
        <img v-for="company in trustedCompanies" :key="company" :src="`https://www.untitledui.com/logos/logotype/color/${company}.svg`" class="h-8" :alt="company">
      </div>
    </UContainer>
  </section>
</template>