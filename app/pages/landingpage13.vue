<script setup lang="eng">

import AppHeader from './AppHeader.vue'
import HeroSection from './HeroSection.vue'
import TrustedBy from './TrustedBy.vue'
import FeaturesSection from './FeaturesSection.vue'
import PricingSection from './PricingSection.vue'
import NewsletterSection from './NewsletterSection.vue'
import AppFooter from './AppFooter.vue'
</script>
<template>
  <UApp>
    <div class="bg-primary">
      <!-- Background Grid -->
      <div class="relative overflow-hidden">
        <img
          alt="Grid of dots"
          aria-hidden="true"
          src="https://www.untitledui.com/patterns/light/grid-md-desktop.svg"
          class="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 dark:brightness-[0.2] md:block"
        />
        <img
          alt="Grid of dots"
          aria-hidden="true"
          src="https://www.untitledui.com/patterns/light/grid-md-mobile.svg"
          class="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 dark:brightness-[0.2] md:hidden"
        />
        
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