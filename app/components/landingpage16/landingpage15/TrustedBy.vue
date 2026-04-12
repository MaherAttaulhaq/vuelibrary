<script setup lang="ts">
const companies = [
  { name: 'Odeaolabs', white: 'https://www.untitledui.com/logos/logotype/white/odeao-labs.svg' },
  { name: 'Kintsugi', white: 'https://www.untitledui.com/logos/logotype/white/kintsugi.svg' },
  { name: 'Stackedlab', white: 'https://www.untitledui.com/logos/logotype/white/stacked-lab.svg' },
  { name: 'Magnolia', white: 'https://www.untitledui.com/logos/logotype/white/magnolia.svg' },
  { name: 'Warpspeed', white: 'https://www.untitledui.com/logos/logotype/white/warpspeed.svg' },
  { name: 'Sisyphus', white: 'https://www.untitledui.com/logos/logotype/white/sisyphus.svg' }
]
</script>

<template>
  <section class="bg-brand-700 pb-16 md:pb-24 dark:bg-brand-900">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col gap-8">
        <p class="text-center text-md font-medium text-white/70">
          We&apos;ve worked with some great startups
        </p>
        <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 xl:gap-x-6">
          <img
            v-for="company in companies"
            :key="company.name"
            :src="company.white"
            :alt="`${company.name} Logo`"
            class="h-9 opacity-85 md:h-10"
          >
        </div>
      </div>
    </div>
  </section>
</template>
