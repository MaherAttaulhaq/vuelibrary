<script setup lang="ts">
import AboutSection from '../components/landingpage15/AboutSection.vue'
import AppFooter from '../components/landingpage15/AppFooter.vue'
import AppHeader from '../components/landingpage15/AppHeader.vue'
import ContactFormSection from '../components/landingpage15/ContactFormSection.vue'
import HeroSection from '../components/landingpage15/HeroSection.vue'
import StatsSection from '../components/landingpage15/StatsSection.vue'
import TestimonialSection from '../components/landingpage15/TestimonialSection.vue'
import TrustedBy from '../components/landingpage15/TrustedBy.vue'
</script>

<template>
  <div class="bg-muted">
    <div class="relative overflow-hidden bg-brand-700 dark:bg-brand-900">
      <img
        alt="Grid of dots"
        aria-hidden="true"
        src="https://www.untitledui.com/patterns/light/grid-dot-sm-desktop.svg"
        class="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 opacity-20 md:block"
      >
      <img
        alt="Grid of dots"
        aria-hidden="true"
        src="https://www.untitledui.com/patterns/light/grid-dot-sm-mobile.svg"
        class="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 opacity-20 md:hidden"
      >

      <AppHeader />
      <HeroSection />
    </div>

    <TrustedBy />
    <AboutSection />
    <TestimonialSection />
    <StatsSection />
    <ContactFormSection />
    <AppFooter />
  </div>
</template>
