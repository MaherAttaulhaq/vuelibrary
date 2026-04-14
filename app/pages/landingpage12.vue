<script setup>
import AppHeader from '~/components/landingpage12/AppHeader.vue'
import HeroSection from '~/components/landingpage12/HeroSection.vue'
import FeaturesSection from '~/components/landingpage12/FeaturesSection.vue'
import CTASection from '~/components/landingpage12/CTASection.vue'
import FAQSection from '~/components/landingpage12/FAQSection.vue'
import NewsletterSection from '~/components/landingpage12/NewsletterSection.vue'
import AppFooter from '~/components/landingpage12/AppFooter.vue'
</script>

<template>
  <div class="relative overflow-hidden bg-white dark:bg-gray-950">
    <div class="absolute inset-0 pointer-events-none bg-grid-dots" />

    <AppHeader />

    <main>
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <FAQSection />
      <NewsletterSection />
    </main>

    <!-- <AppFooter /> -->
  </div>
</template>