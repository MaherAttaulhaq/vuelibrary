<!-- components/SocialProofFullWidth.vue -->
<template>
  <section class="bg-muted py-16 md:py-24">
    <UContainer>
      <div class="flex flex-col gap-8">
        <p class="text-center text-md font-medium text-tertiary">Join 4,000+ companies already growing</p>
        <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 xl:gap-x-6">
          <!-- Light mode logos -->
          <img v-for="logo in lightLogos" :key="logo.alt" :alt="logo.alt" :src="logo.src" class="h-9 md:h-10 dark:hidden" />
          <!-- Dark mode logos -->
          <img v-for="logo in darkLogos" :key="logo.alt" :alt="logo.alt" :src="logo.src" class="h-9 opacity-85 not-dark:hidden md:h-10" />
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const lightLogos = [
  { alt: 'Odeaolabs', src: 'https://www.untitledui.com/logos/logotype/color/odeao-labs.svg' },
  { alt: 'Kintsugi', src: 'https://www.untitledui.com/logos/logotype/color/kintsugi.svg' },
  { alt: 'Stackedlab', src: 'https://www.untitledui.com/logos/logotype/color/stacked-lab.svg' },
  { alt: 'Magnolia', src: 'https://www.untitledui.com/logos/logotype/color/magnolia.svg' },
  { alt: 'Warpspeed', src: 'https://www.untitledui.com/logos/logotype/color/warpspeed.svg' },
  { alt: 'Sisyphus', src: 'https://www.untitledui.com/logos/logotype/color/sisyphus.svg' }
]

const darkLogos = [
  { alt: 'Odeaolabs', src: 'https://www.untitledui.com/logos/logotype/white/odeao-labs.svg' },
  { alt: 'Kintsugi', src: 'https://www.untitledui.com/logos/logotype/white/kintsugi.svg' },
  { alt: 'Stackedlab', src: 'https://www.untitledui.com/logos/logotype/white/stacked-lab.svg' },
  { alt: 'Magnolia', src: 'https://www.untitledui.com/logos/logotype/white/magnolia.svg' },
  { alt: 'Warpspeed', src: 'https://www.untitledui.com/logos/logotype/white/warpspeed.svg' },
  { alt: 'Sisyphus', src: 'https://www.untitledui.com/logos/logotype/white/sisyphus.svg' }
]
</script>