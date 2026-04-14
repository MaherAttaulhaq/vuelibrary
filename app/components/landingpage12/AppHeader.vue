<template>
  <UHeader>
    <!-- Logo -->
    <template #title>
      <span class="text-lg font-semibold">Untitled</span>
    </template>

    <!-- Center Navigation -->
    <UNavigationMenu :items="items" class="hidden md:flex" />

    <!-- Right Actions -->
    <template #right>
      <div class="flex items-center gap-2">
        <UColorModeButton />

        <UButton
          variant="ghost"
          label="Login"
          class="hidden md:inline-flex"
        />
        <UButton
          color="primary"
          label="Sign up"
          class="hidden md:inline-flex"
        />
      </div>
    </template>

    <!-- Mobile Menu -->
    <template #body>
      <div class="md:hidden space-y-2">
        <UButton
          v-for="item in items"
          :key="item.label"
          variant="ghost"
          block
          :label="item.label"
        />
      </div>
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' }
]
</script>