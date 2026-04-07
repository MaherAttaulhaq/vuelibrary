<script setup lang="ts">
import HeroCardMockup from '@/components/landing03/HeroCardMockup.vue'
import SocialProofFullWidth from '@/components/landing03/SocialProofFullWidth.vue'
import FeaturesSimpleIcons from '@/components/landing03/FeaturesSimpleIcons.vue'
import PricingSection from '@/components/landing03/PricingSection.vue'
import TestimonialCarousel from '@/components/landing03/TestimonialCarousel.vue'
import CTAScreenMockup from '@/components/landing03/CTAScreenMockup.vue'
import FooterLarge from '@/components/landing03/FooterLarge.vue'
</script>

<template>
  <div class="bg-muted">
    <HeroCardMockup />
    <SocialProofFullWidth />
    <FeaturesSimpleIcons />
    <PricingSection />

    <div class="mx-auto max-w-container px-4 md:px-8">
      <UDivider class="my-16 md:my-24" />
    </div>

    <TestimonialCarousel />

    <div class="mx-auto max-w-container px-4 md:px-8">
      <UDivider class="my-16 md:my-24" />
    </div>

    <CTAScreenMockup />
    <FooterLarge />
  </div>
</template>
