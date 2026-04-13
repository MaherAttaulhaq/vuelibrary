<script setup lang="ts">
import AppHeader from '~/components/landingpage19/AppHeader.vue'
import HeroSection from '~/components/landingpage19/HeroSection.vue'
import TrustedBy from '~/components/landingpage19/TrustedBy.vue'
import IntegrationsSection from '~/components/landingpage19/IntegrationsSection.vue'
import DashboardMockup from '~/components/landingpage19/DashboardMockup.vue'
import StatsSection from '~/components/landingpage19/StatsSection.vue'
import FreeTrialBanner from '~/components/landingpage19/FreeTrialBanner.vue'
import TestimonialSection from '~/components/landingpage19/TestimonialSection.vue'
import CTASection from '~/components/landingpage19/CTASection.vue'
import NewsletterSection from '~/components/landingpage19/NewsletterSection.vue'
import AppFooter from '~/components/landingpage19/AppFooter.vue'
</script>

<template>
  <div class="bg-muted">
    <AppHeader />
    <main>
      <HeroSection />
      <TrustedBy />
      <IntegrationsSection />
      <DashboardMockup />
      <StatsSection />
      <FreeTrialBanner />
      <TestimonialSection />
      <CTASection />
      <NewsletterSection />
    </main>
    <AppFooter />
  </div>
</template>
