<script setup lang="ts">
import { useMobileMenu } from './useMobileMenu'

const { isOpen, toggle, close } = useMobileMenu()

const navigationItems = [
  {
    label: 'Products',
    children: [
      { label: 'Overview', to: '/products' },
      { label: 'Features', to: '/products/features' }
    ]
  },
  {
    label: 'Services',
    children: [
      { label: 'Consulting', to: '/services/consulting' }
    ]
  },
  { label: 'Pricing', to: '/pricing' }
]
</script>

<template>
  <UHeader
    :toggle="{
      color: 'primary',
      variant: 'subtle',
      class: 'rounded-full'
    }"
  >
    <!-- LEFT -->
    <template #title>
      <NuxtLink to="/" class="flex items-center gap-2">
        <LogoIcon class="size-8" />
       <h1>Nuxt UI</h1>
      </NuxtLink>
    </template>

    <!-- ✅ THIS IS THE IMPORTANT PART -->
    <UNavigationMenu :items="navigationItems" />

    <!-- RIGHT -->
    <template #right>
      <div class="hidden md:flex items-center gap-3">
        <UButton variant="ghost">Log in</UButton>
        <UButton variant="solid">Sign up</UButton>
      </div>

      <UButton class="md:hidden" variant="ghost" @click="toggle">
        <Icon :name="isOpen ? 'lucide:x' : 'lucide:menu'" />
      </UButton>
    </template>

    <!-- MOBILE -->
    <template #body>
      <UNavigationMenu
        :items="navigationItems"
        orientation="vertical"
      />
    </template>
  </UHeader>
</template>