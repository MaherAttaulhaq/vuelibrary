<script setup lang="ts">
import AboutSection from '../components/landingpage16/AboutSection.vue'
import AppFooter from '../components/landingpage16/AppFooter.vue'
import AppHeader from '../components/landingpage16/AppHeader.vue'
import CapabilitiesSection from '../components/landingpage16/CapabilitiesSection.vue'
import ContactSection from '../components/landingpage16/ContactSection.vue'
import HeroSection from '../components/landingpage16/HeroSection.vue'
import NewsletterSection from '../components/landingpage16/NewsletterSection.vue'
import TestimonialSection from '../components/landingpage16/TestimonialSection.vue'
import TrustedBy from '../components/landingpage16/TrustedBy.vue'
</script>

<template>
  <div class="bg-muted">
    <div class="relative overflow-hidden bg-muted">
      <img
        alt="Grid background pattern"
        aria-hidden="true"
        src="https://www.untitledui.com/patterns/light/grid-md-desktop.svg"
        class="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 dark:brightness-[0.2] md:block"
      >
      <img
        alt="Grid background pattern"
        aria-hidden="true"
        src="https://www.untitledui.com/patterns/light/grid-sm-mobile.svg"
        class="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 dark:brightness-[0.2] md:hidden"
      >

      <AppHeader />
      <HeroSection />
    </div>

    <TrustedBy />
    <AboutSection />
    <TestimonialSection />
    <CapabilitiesSection />
    <ContactSection />
    <NewsletterSection />
    <AppFooter />
  </div>
</template>
