<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

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
  <UHeader
    class="sticky top-0 z-50 border-b border-border bg-muted/90 backdrop-blur"
  >
    <!-- LEFT (LOGO / TITLE) -->
    <template #title>
      <div>
        <span class="text-lg uppercase text-primary">
          Nuxt remix
        </span>
      </div>
    </template>

    <!-- CENTER NAV -->
    <UNavigationMenu
      :items="items"
      class="hidden text-sm md:flex"
    />

    <!-- RIGHT CTA -->
    <template #right>
      <UButton
        to="#pricing"
        color="neutral"
        variant="outline"
        size="sm"
        class="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em]"
      >
        Download
      </UButton>
    </template>

    <!-- MOBILE MENU -->
    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>