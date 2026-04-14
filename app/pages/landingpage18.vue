<script setup lang="ts">
import AppHeader from '../components/landingpage18/AppHeader.vue'
import HeroSection from '../components/landingpage18/HeroSection.vue'
import FeaturesSection from '../components/landingpage18/FeaturesSection.vue'
import FreeTrialBanner from '../components/landingpage18/FreeTrialBanner.vue'
import HireFasterSection from '../components/landingpage18/HireFasterSection.vue'
import FinalCTASection from '../components/landingpage18/FinalCTASection.vue'
import TestimonialSection from '../components/landingpage18/TestimonialSection.vue'
import NewsletterSection from '../components/landingpage18/NewsletterSection.vue'
import AppFooter from '../components/landingpage18/AppFooter.vue'

defineOptions({
  name: 'LandingPage18'
})
</script>

<template>
  <div class="bg-muted">
    <HeroSection>
      <template #header>
        <AppHeader />
      </template>
    </HeroSection>
    <FeaturesSection />
    <FreeTrialBanner />
    <HireFasterSection />
    <TestimonialSection />
    <FinalCTASection />
    <NewsletterSection />
    <AppFooter />
  </div>
</template>
