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
  <UHeader class="sticky top-0 z-50 bg-muted/80 backdrop-blur-md border-b border-border">
    <template #title>
      <a href="#" class="flex items-center gap-2 text-xl font-bold text-primary">
        <UIcon name="i-lucide-layers" class="w-8 h-8 text-primary" />
        <span>Untitled UI</span>
      </a>
    </template>

    <UNavigationMenu :items="navigationItems" class="hidden md:flex" />

    <template #right>
      <UButton color="neutral" variant="ghost" class="hidden md:inline-flex">
        Sign in
      </UButton>
      <UButton color="primary">
        Get PRO
      </UButton>
    </template>

    <template #body>
      <UNavigationMenu :items="navigationItems" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>