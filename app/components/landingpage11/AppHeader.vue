<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const isMobileMenuOpen = ref(false)

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Products',
    icon: 'i-heroicons-chevron-down-20-solid',
    children: [
      { label: 'Overview', to: '#' },
      { label: 'Features', to: '#' }
    ]
  },
  {
    label: 'Services',
    icon: 'i-heroicons-chevron-down-20-solid',
    children: [
      { label: 'Consulting', to: '#' },
      { label: 'Support', to: '#' }
    ]
  },
  {
    label: 'Pricing',
    to: '#',
    active: route.path === '/pricing'
  },
  {
    label: 'Resources',
    icon: 'i-heroicons-chevron-down-20-solid',
    children: [
      { label: 'Blog', to: '#' },
      { label: 'Docs', to: '#' }
    ]
  },
  {
    label: 'About',
    to: '#',
    active: route.path === '/about'
  }
])
</script>

<template>
  <UHeader
    class="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
  >
    <!-- Logo -->
    <template #title>
      <div class="flex items-center gap-2">
        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 shadow-md">
          <span class="text-white font-bold text-sm">U</span>
        </div>
        <span class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Untitled UI
        </span>
      </div>
    </template>

    <!-- Desktop Nav -->
    <UNavigationMenu :items="items" />

    <!-- Right Actions -->
    <template #right>
      <UButton
        variant="ghost"
        color="neutral"
        label="Log in"
        class="hidden md:inline-flex"
      />

      <UButton
        color="primary"
        label="Sign up"
        class="hidden md:inline-flex"
      />

      <UColorModeButton />

    </template>

    <!-- Mobile Menu -->
    <template #body>
      <div v-if="isMobileMenuOpen" class="px-4 pb-4">
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          class="-mx-2.5"
        />

        <div class="mt-4 border-t border-gray-200 dark:border-gray-800 pt-4 space-y-3">
          <UButton block variant="ghost" label="Log in" />
          <UButton block color="primary" label="Sign up" />
        </div>
      </div>
    </template>
  </UHeader>
</template>