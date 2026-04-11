<script setup lang="ts">
import AppFooter from "../components/landingpage14/AppFooter.vue";
import AppHeader from "../components/landingpage14/AppHeader.vue";
import ContactSection from "../components/landingpage14/ContactSection.vue";
import HeroSection from "../components/landingpage14/HeroSection.vue";
import NewsletterSection from "../components/landingpage14/NewsletterSection.vue";
import StatsSection from "../components/landingpage14/StatsSection.vue";
import StudioSection from "../components/landingpage14/StudioSection.vue";
import TestimonialSection from "../components/landingpage14/TestimonialSection.vue";
import TrustedBy from "../components/landingpage14/TrustedBy.vue";
</script>

<template>
  <div class="bg-muted">
    <div class="relative overflow-hidden">
      <img
        alt="Grid of dots"
        aria-hidden="true"
        src="https://www.untitledui.com/patterns/light/grid-dot-sm-desktop.svg"
        class="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 dark:brightness-[0.2] md:block"
      />
      <img
        alt="Grid of dots"
        aria-hidden="true"
        src="https://www.untitledui.com/patterns/light/grid-dot-sm-mobile.svg"
        class="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 dark:brightness-[0.2] md:hidden"
      />

      <AppHeader />
      <HeroSection />
    </div>

    <TrustedBy />
    <StudioSection />
    <TestimonialSection />
    <StatsSection />
    <ContactSection />
    <NewsletterSection />
    <AppFooter />
  </div>
</template>
