<script setup lang="ts">
import AppHeader from '../components/landingpage13/AppHeader.vue'
import HeroSection from '../components/landingpage13/HeroSection.vue'
import TrustedBy from '../components/landingpage13/TrustedBy.vue'
import FeaturesSection from '../components/landingpage13/FeaturesSection.vue'
import PricingSection from '../components/landingpage13/PricingSection.vue'
import NewsletterSection from '../components/landingpage13/NewsletterSection.vue'
import AppFooter from '../components/landingpage13/AppFooter.vue'
</script>

<template>
  <UApp>
    <div class="bg-muted overflow-x-hidden">
      <!-- Background Grid -->
      <div class="relative overflow-hidden">
        <img
          alt="Grid of dots"
          aria-hidden="true"
          src="https://www.untitledui.com/patterns/light/grid-md-desktop.svg"
          class="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 dark:brightness-[0.2] md:block"
        >
        <img
          alt="Grid of dots"
          aria-hidden="true"
          src="https://www.untitledui.com/patterns/light/grid-md-mobile.svg"
          class="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 dark:brightness-[0.2] md:hidden"
        >

        <AppHeader />
        <HeroSection />
      </div>

      <TrustedBy />
      <FeaturesSection />
      <PricingSection />
      <NewsletterSection />
      <AppFooter />
    </div>
  </UApp>
</template>
