<script setup lang="ts">
import { motion } from 'motion-v'
import type { VariantType } from 'motion-v'
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
    to: '/pricing',
    icon: 'i-lucide-credit-card',
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
    to: '/about',
    icon: 'i-lucide-info',
    active: route.path.startsWith('/about')
  }
])

const variants: { [k: string]: VariantType | ((custom: unknown) => VariantType) } = {
  normal: {
    rotate: 0,
    y: 0,
    opacity: 1
  },
  close: (custom: unknown) => {
    const c = custom as number
    return {
      rotate: c === 1 ? 45 : c === 3 ? -45 : 0,
      y: c === 1 ? 6 : c === 3 ? -6 : 0,
      opacity: c === 2 ? 0 : 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }
  }
}
</script>

<template>
  <UHeader>
    <!-- LEFT: Logo -->
    <template #title>
      <NuxtLink to="/" class="flex items-center gap-2">
        <svg viewBox="0 0 38 38" class="size-7 text-brand-700">
          <rect width="38" height="38" rx="10" fill="currentColor" />
        </svg>
      </NuxtLink>
    </template>

    <!-- CENTER: Navigation -->
    <UNavigationMenu :items="items" />

    <!-- RIGHT: Actions -->
    <template #right>
      <div class="hidden items-center gap-3 md:flex">
        <UButton variant="ghost" color="neutral">
          Log in
        </UButton>

        <UButton color="primary">
          Sign up
        </UButton>
      </div>
    </template>

    <!-- MOBILE TOGGLE -->
    <template #toggle="{ open, toggle, ui }">
      <UButton
        size="sm"
        variant="ghost"
        color="neutral"
        square
        :class="ui.toggle({ toggleSide: 'right' })"
        @click="toggle"
      >
        <svg
          class="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <motion.line
            x1="4"
            y1="6"
            x2="20"
            y2="6"
            :variants="variants"
            :animate="open ? 'close' : 'normal'"
            :custom="1"
          />
          <motion.line
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            :variants="variants"
            :animate="open ? 'close' : 'normal'"
            :custom="2"
          />
          <motion.line
            x1="4"
            y1="18"
            x2="20"
            y2="18"
            :variants="variants"
            :animate="open ? 'close' : 'normal'"
            :custom="3"
          />
        </svg>
      </UButton>
    </template>

    <!-- MOBILE BODY -->
    <template #body>
      <div class="flex flex-col gap-6">
        <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />

        <div class="flex flex-col gap-3 border-t pt-4">
          <UButton variant="ghost" block>
            Log in
          </UButton>
          <UButton color="primary" block>
            Sign up
          </UButton>
        </div>
      </div>
    </template>
  </UHeader>
</template>