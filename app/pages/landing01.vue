<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

definePageMeta({
  title: 'Landing Page 06 | Untitled UI Redux',
  meta: [
    { name: 'description', content: 'Nuxt recreation of Untitled UI Landing page 06 with hero, proof, logos, and pricing.' },
    { name: 'robots', content: 'index,follow' }
  ]
})

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Hero',
    to: '#hero',
    active: route.hash === '#hero'
  },
  {
    label: 'Proof',
    to: '#proof',
    active: route.hash === '#proof'
  },
  {
    label: 'Pricing',
    to: '#pricing',
    active: route.hash === '#pricing'
  }
])
</script>

<template>
  <UContainer class="min-h-screen bg-muted">
    <Landing01Header />

    <main class="space-y-12 pt-8">
      <!-- Hero Section -->
      <Landing01Hero />

      <!-- Proof Section -->
      <Landing01Proof />


      <!-- Logo Clouds & Integrations -->
      <Landing01LogoClouds />

      <!-- Pricing Section -->
      <Landing01Pricing />

      <!-- FAQ Section -->
      <Landing01FAQ />

      <!-- Footer -->
      <Landing01Footer />
    </main>
  </UContainer>
</template>