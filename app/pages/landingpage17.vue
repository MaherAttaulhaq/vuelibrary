<script setup lang="ts">
import AppHeader from '../components/landingpage17/AppHeader.vue'
import HeroSection from '../components/landingpage17/HeroSection.vue'
import TrustedBy from './TrustedBy.vue'
import FeaturesSection from '../components/landingpage17/FeaturesSection.vue'
import CaseStudiesSection from '../components/landingpage17/CaseStudiesSection.vue'
import FreeTrialSection from '../components/landingpage17/FreeTrialSection.vue'
import BlogSection from '../components/landingpage17/BlogSection.vue'
import CTASection from '../components/landingpage17/CTASection.vue'
import AppFooter from '../components/landingpage17/AppFooter.vue'

defineOptions({
  name: 'LandingPage17'
})
</script>

<template>
  <div class="bg-muted">
    <div class="bg-muted">
      <AppHeader />
      <HeroSection />
    </div>

    <TrustedBy />

    <div class="mx-auto max-w-container px-4 md:px-8">
      <hr class="h-px w-full border-none bg-muted-200">
    </div>

    <FeaturesSection />

    <div class="mx-auto max-w-container px-4 md:px-8">
      <hr class="h-px w-full border-none bg-muted-200">
    </div>

    <CaseStudiesSection />

    <div class="mx-auto max-w-container px-4 md:px-8">
      <hr class="h-px w-full border-none bg-muted-200">
    </div>

    <FreeTrialSection />
    <BlogSection />
    <CTASection />
    <AppFooter />
  </div>
</template>
