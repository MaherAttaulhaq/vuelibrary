<script setup lang="ts">
const companies = [
  { name: 'Ephemeral', color: 'https://www.untitledui.com/logos/logotype/color/ephemeral.svg', white: 'https://www.untitledui.com/logos/logotype/white/ephemeral.svg' },
  { name: 'Wildcrafted', color: 'https://www.untitledui.com/logos/logotype/color/wildcrafted.svg', white: 'https://www.untitledui.com/logos/logotype/white/wildcrafted.svg' },
  { name: 'Codecraft', color: 'https://www.untitledui.com/logos/logotype/color/codecraft.svg', white: 'https://www.untitledui.com/logos/logotype/white/codecraft.svg' },
  { name: 'Convergence', color: 'https://www.untitledui.com/logos/logotype/color/convergence.svg', white: 'https://www.untitledui.com/logos/logotype/white/convergence.svg' },
  { name: 'Imgcompress', color: 'https://www.untitledui.com/logos/logotype/color/img-compress.svg', white: 'https://www.untitledui.com/logos/logotype/white/img-compress.svg' },
  { name: 'Epicurious', color: 'https://www.untitledui.com/logos/logotype/color/epicurious.svg', white: 'https://www.untitledui.com/logos/logotype/white/epicurious.svg' },
  { name: 'Watchtower', color: 'https://www.untitledui.com/logos/logotype/color/watchtower.svg', white: 'https://www.untitledui.com/logos/logotype/white/watchtower.svg' },
  { name: 'Renaissance', color: 'https://www.untitledui.com/logos/logotype/color/renaissance.svg', white: 'https://www.untitledui.com/logos/logotype/white/renaissance.svg' },
  { name: 'Contrastai', color: 'https://www.untitledui.com/logos/logotype/color/contrast-ai.svg', white: 'https://www.untitledui.com/logos/logotype/white/contrast-ai.svg' },
  { name: 'Nietzsche', color: 'https://www.untitledui.com/logos/logotype/color/nietzsche.svg', white: 'https://www.untitledui.com/logos/logotype/white/nietzsche.svg' }
]
</script>

<template>
  <section class="bg-muted pb-16 md:pb-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col gap-8">
        <p class="text-center text-md font-medium text-muted-500 dark:text-muted-400">
          We&apos;ve worked with some great startups
        </p>
        <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-y-6">
          <img
            v-for="company in companies.slice(0, 8)"
            :key="company.name"
            :alt="company.name"
            :src="company.color"
            class="h-9 md:h-10 dark:hidden"
          >
          <img
            v-for="company in companies.slice(8)"
            :key="`${company.name}-late`"
            :alt="company.name"
            :src="company.color"
            class="hidden h-9 md:inline-flex md:h-10 dark:hidden"
          >
          <img
            v-for="company in companies"
            :key="`${company.name}-dark`"
            :alt="company.name"
            :src="company.white"
            class="h-9 opacity-85 not-dark:hidden md:h-10"
          >
        </div>
      </div>
    </div>
  </section>
</template>
