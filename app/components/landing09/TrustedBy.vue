<script setup lang="ts">
const logos = [
  { src: 'https://www.untitledui.com/logos/logotype/color/odeao-labs.svg', alt: 'Odeaolabs' },
  { src: 'https://www.untitledui.com/logos/logotype/color/kintsugi.svg', alt: 'Kintsugi' },
  { src: 'https://www.untitledui.com/logos/logotype/color/stacked-lab.svg', alt: 'Stackedlab' },
  { src: 'https://www.untitledui.com/logos/logotype/color/magnolia.svg', alt: 'Magnolia' },
  { src: 'https://www.untitledui.com/logos/logotype/color/powersurge.svg', alt: 'Powersurge' },
  { src: 'https://www.untitledui.com/logos/logotype/color/warpspeed.svg', alt: 'Warpspeed' },
  { src: 'https://www.untitledui.com/logos/logotype/color/leapyear.svg', alt: 'Leapyear' },
  { src: 'https://www.untitledui.com/logos/logotype/color/easy-tax.svg', alt: 'Easytax' },
  { src: 'https://www.untitledui.com/logos/logotype/color/sisyphus.svg', alt: 'Sisyphus' },
  { src: 'https://www.untitledui.com/logos/logotype/color/catalog.svg', alt: 'Catalog' }
]
</script>

<template>
  <section class="bg-muted py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">

      <!-- Heading -->
      <p class="text-center text-md font-medium mb-10">
        Trusted by 4,000+ companies
      </p>

      <!-- ✅ REAL Nuxt UI Marquee -->
      <UMarquee pause-on-hover>

        <div
          v-for="(logo, index) in logos"
          :key="index"
          class="mx-6 flex items-center"
        >
          <img
            :src="logo.src"
            :alt="logo.alt"
            class="h-8 md:h-10 opacity-70 hover:opacity-100 transition"
          />
        </div>

      </UMarquee>

    </div>
  </section>
</template>