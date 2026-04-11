<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const navigationItems = computed<NavigationMenuItem[]>(() => [
  { label: 'Product', to: '#product' },
  { label: 'Features', to: '#features' },
  { label: 'Pricing', to: '#pricing' },
  { label: 'Resources', to: '#resources' }
])
</script>

<template>
  <UApp>
    <div class="min-h-screen bg-default text-default">
      <!-- Header -->
      <Landing02Header />

      <!-- Hero Section -->
      <Landing02Hero />

      <!-- Integrations Section -->
      <Landing02Integrations />

      <!-- Metrics Section -->
      <Landing02Metrics />

      <!-- Features Section -->
      <Landing02Features />

      <!-- Pricing Section -->
      <Landing02Pricing />

      <!-- FAQ Section -->
      <Landing02FAQ />

      <!-- Social Proof Section -->
      <Landing02SocialProof />

      <!-- Footer -->
      <Landing02Footer />
    </div>
  </UApp>
</template>
