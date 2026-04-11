<script setup lang="ts">
const companies = [
  { name: 'Odeaolabs', color: 'https://www.untitledui.com/logos/logotype/color/odeao-labs.svg', white: 'https://www.untitledui.com/logos/logotype/white/odeao-labs.svg' },
  { name: 'Kintsugi', color: 'https://www.untitledui.com/logos/logotype/color/kintsugi.svg', white: 'https://www.untitledui.com/logos/logotype/white/kintsugi.svg' },
  { name: 'Stackedlab', color: 'https://www.untitledui.com/logos/logotype/color/stacked-lab.svg', white: 'https://www.untitledui.com/logos/logotype/white/stacked-lab.svg' },
  { name: 'Magnolia', color: 'https://www.untitledui.com/logos/logotype/color/magnolia.svg', white: 'https://www.untitledui.com/logos/logotype/white/magnolia.svg' },
  { name: 'Warpspeed', color: 'https://www.untitledui.com/logos/logotype/color/warpspeed.svg', white: 'https://www.untitledui.com/logos/logotype/white/warpspeed.svg' },
  { name: 'Sisyphus', color: 'https://www.untitledui.com/logos/logotype/color/sisyphus.svg', white: 'https://www.untitledui.com/logos/logotype/white/sisyphus.svg' },
]
</script>

<template>
  <section class="bg-muted py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col gap-8">
        <p class="text-center text-md font-medium text-tertiary">Official partner of these companies</p>
        <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 xl:gap-x-6">
          <img
            v-for="company in companies"
            :key="company.name"
            :alt="company.name"
            :src="company.color"
            class="h-9 md:h-10 dark:hidden"
          />
          <img
            v-for="company in companies"
            :key="`${company.name}-dark`"
            :alt="company.name"
            :src="company.white"
            class="h-9 opacity-85 not-dark:hidden md:h-10"
          />
        </div>
      </div>
    </div>
  </section>
</template>