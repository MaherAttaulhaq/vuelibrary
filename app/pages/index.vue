<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

// All your data remains exactly the same

definePageMeta({
  title: 'Modern Template - Build Stunning Websites',
  meta: [
    {
      name: 'description',
      content:
        'Professional website templates designed for developers. Build stunning, responsive websites with our modern templates. Perfect for startups, agencies, and personal projects.'
    },
    {
      name: 'keywords',
      content:
        'website templates, modern design, responsive, developers, Nuxt, Tailwind'
    },
    { name: 'author', content: 'Template Studio' },
    { name: 'robots', content: 'index, follow' }
  ]
})

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Docs',
    to: '/docs/getting-started',
    icon: 'i-lucide-book-open',
    active: route.path.startsWith('/docs/getting-started')
  },
  {
    label: 'Components',
    to: '/docs/components',
    icon: 'i-lucide-box',
    active: route.path.startsWith('/docs/components')
  },
  {
    label: 'Figma',
    icon: 'i-simple-icons-figma',
    to: 'https://go.nuxt.com/figma-ui',
    target: '_blank'
  },
  {
    label: 'Releases',
    icon: 'i-lucide-rocket',
    to: 'https://github.com/nuxt/ui/releases',
    target: '_blank'
  }
])
</script>

<template>
  <UContainer class="min-h-screen bg-default text-gray-100">
    <!-- Header with Nuxt UI components -->
    <Landing0Header />

    <main class="pt-24">
      <!-- Hero Section -->
      <Landing0Hero />

      <!-- Features Section -->
      <Landing0Features />

      <!-- Testimonials Section -->
      <Landing0Testimonials />

      <!-- Pricing Section -->
      <Landing0Pricing />
      <!-- Custom Solutions Section -->
      <Landing0CustomSolutions />

      <!-- FAQs Section -->
      <Landing0FAQs />
    </main>
  </UContainer>
</template>
