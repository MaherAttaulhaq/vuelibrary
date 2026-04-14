<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Products',
    icon: 'i-lucide-box',
    children: [
      { label: 'Overview', to: '/products' },
      { label: 'Features', to: '/products/features' },
      { label: 'Integrations', to: '/products/integrations' }
    ]
  },
  {
    label: 'Services',
    icon: 'i-lucide-briefcase',
    children: [
      { label: 'Consulting', to: '/services/consulting' },
      { label: 'Support', to: '/services/support' },
      { label: 'Training', to: '/services/training' }
    ]
  },
  {
    label: 'Pricing',
    icon: 'i-lucide-credit-card',
    to: '/pricing',
    active: route.path.startsWith('/pricing')
  },
  {
    label: 'Resources',
    icon: 'i-lucide-book-open',
    children: [
      { label: 'Blog', to: '/resources/blog' },
      { label: 'Documentation', to: '/resources/docs' },
      { label: 'Help Center', to: '/resources/help' }
    ]
  },
  {
    label: 'About',
    icon: 'i-lucide-info',
    to: '/about',
    active: route.path.startsWith('/about')
  }
])
</script>

<template>
  <UHeader toggle-side="left">
    <!-- TITLE (logo) -->
    <template #title>
      <NuxtLink to="/" class="flex items-center gap-2">
        <svg viewBox="0 0 38 38" class="h-6 w-6 text-primary">
          <path
            d="M3 14.8C3 10.3196 3 8.07937 3.87195 6.36808C4.63893 4.86278 5.86278 3.63893 7.36808 2.87195C9.07937 2 11.3196 2 15.8 2H22.2C26.6804 2 28.9206 2 30.6319 2.87195C32.1372 3.63893 33.3611 4.86278 34.1281 6.36808C35 8.07937 35 10.3196 35 14.8V21.2C35 25.6804 35 27.9206 34.1281 29.6319C33.3611 31.1372 32.1372 32.3611 30.6319 33.1281C28.9206 34 26.6804 34 22.2 34H15.8C11.3196 34 9.07937 34 7.36808 33.1281C5.86278 32.3611 4.63893 31.1372 3.87195 29.6319C3 27.9206 3 25.6804 3 21.2V14.8Z"
            fill="currentColor"
          />
        </svg>

        <span class="font-semibold text-base">
          Untitled UI
        </span>
      </NuxtLink>
    </template>

    <!-- DESKTOP NAV -->
    <UNavigationMenu :items="items" />

    <!-- RIGHT ACTIONS -->
    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <!-- MOBILE BODY -->
    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />

      <div class="mt-4 flex flex-col gap-2 border-t pt-4">
        <UButton block variant="ghost">
          Log in
        </UButton>
        <UButton block color="primary">
          Sign up
        </UButton>
      </div>
    </template>
  </UHeader>
</template>