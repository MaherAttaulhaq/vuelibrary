<template>
  <header class="sticky top-0 z-50 bg-muted/80 backdrop-blur-md">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center gap-8">
          <Logo />
          <nav class="hidden lg:flex">
            <ul class="flex items-center gap-8">
              <li v-for="item in menuItems" :key="item.label">
                <UNavigationMenuItem :item="item" />
              </li>
            </ul>
          </nav>
        </div>
        <div class="flex items-center gap-3">
          <UButton
            label="Log in"
            variant="ghost"
            color="neutral"
            class="hidden md:flex"
          />
          <UButton
            label="Sign up"
            color="primary"
            class="hidden md:flex"
          />
          <UButton
            :icon="isMobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
            variant="ghost"
            color="neutral"
            class="lg:hidden"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          />
        </div>
      </div>
      <!-- Mobile menu -->
      <div
        v-if="isMobileMenuOpen"
        class="border-t border-border py-4 lg:hidden"
      >
        <nav>
          <ul class="flex flex-col gap-4">
            <li v-for="item in menuItems" :key="item.label">
              <UNavigationMenuItem :item="item" />
            </li>
          </ul>
        </nav>
        <div class="mt-6 flex flex-col gap-3">
          <UButton
            label="Log in"
            variant="ghost"
            color="neutral"
            block
          />
          <UButton
            label="Sign up"
            color="primary"
            block
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { ref, computed } from 'vue'

const route = useRoute()
const isMobileMenuOpen = ref(false)

// Desktop & mobile menu items
const menuItems = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Products',
    children: [
      { label: 'Product 1', to: '/products/1' },
      { label: 'Product 2', to: '/products/2' }
    ],
    active: route.path.startsWith('/products')
  },
  {
    label: 'Services',
    children: [
      { label: 'Service 1', to: '/services/1' },
      { label: 'Service 2', to: '/services/2' }
    ],
    active: route.path.startsWith('/services')
  },
  { label: 'Pricing', to: '/pricing', active: route.path === '/pricing' },
  {
    label: 'Resources',
    children: [
      { label: 'Resource 1', to: '/resources/1' },
      { label: 'Resource 2', to: '/resources/2' }
    ],
    active: route.path.startsWith('/resources')
  },
  { label: 'About', to: '/about', active: route.path === '/about' }
])
</script>