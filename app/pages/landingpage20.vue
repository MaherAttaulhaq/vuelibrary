<script setup lang="ts">
import AppHeader from '~/components/landingpage20/AppHeader.vue'
import HeroSection from '~/components/landingpage20/HeroSection.vue'
import TrustedBy from '~/components/landingpage20/TrustedBy.vue'
import FeaturesSection from '~/components/landingpage20/FeaturesSection.vue'
import StatsSection from '~/components/landingpage20/StatsSection.vue'
import FreeTrialBanner from '~/components/landingpage20/FreeTrialBanner.vue'
import PricingSection from '~/components/landingpage20/PricingSection.vue'
import TestimonialSection from '~/components/landingpage20/TestimonialSection.vue'
import FinalCTASection from '~/components/landingpage20/FinalCTASection.vue'
import NewsletterSection from '~/components/landingpage20/NewsletterSection.vue'
import AppFooter from '~/components/landingpage20/AppFooter.vue'
</script>

<template>
  <div class="bg-muted">
    <AppHeader />
    <main>
      <HeroSection />
      <TrustedBy />
      <FeaturesSection />
      <StatsSection />
      <FreeTrialBanner />
      <PricingSection />
      <TestimonialSection />
      <FinalCTASection />
      <NewsletterSection />
    </main>
    <AppFooter />
  </div>
</template>
