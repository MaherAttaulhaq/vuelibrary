<script setup>
import AppHeader from '~/components/landingpage11/AppHeader.vue'
import HeroSection from '~/components/landingpage11/HeroSection.vue'
import FeaturesSection from '~/components/landingpage11/FeaturesSection.vue'
import PricingSection from '~/components/landingpage11/PricingSection.vue'
import TestimonialsSection from '~/components/landingpage11/TestimonialsSection.vue'
import TrustedBy from '~/components/landingpage11/TrustedBy.vue'
import CtaSection from '~/components/landingpage11/CtaSection.vue'
import AppFooter from '~/components/landingpage11/AppFooter.vue'
</script>

<template>
  <div class="relative overflow-hidden bg-muted dark:bg-gray-950">
    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 pointer-events-none bg-grid-dots" />    
    <AppHeader />

    <main>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <TrustedBy />
      <CtaSection />
    </main>
    
    <AppFooter />
  </div>
</template>

