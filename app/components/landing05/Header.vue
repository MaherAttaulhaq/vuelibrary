<template>
  <div class="relative overflow-hidden">
    <!-- Background Grid -->
    <img
      alt="Grid of dots"
      src="https://www.untitledui.com/patterns/light/grid-sm-desktop.svg"
      class="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 md:block dark:brightness-[0.2]"
    >
    <img
      alt="Grid of dots"
      src="https://www.untitledui.com/patterns/light/grid-sm-mobile.svg"
      class="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 md:hidden dark:brightness-[0.2]"
    >
    <UHeader>
      <template #title>
        <h1 class="text-lg font-semibold text-primary">Nuxt Ui</h1>
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UColorModeButton />

        <UTooltip
          text="Open on GitHub"
          :kbds="['meta', 'G']"
        >
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

      <template #body>
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          class="-mx-2.5"
        />
      </template>
    </UHeader>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/docs/getting-started',
  icon: 'i-lucide-book-open',
  active: route.path.startsWith('/docs/getting-started')
}, {
  label: 'Components',
  to: '/docs/components',
  icon: 'i-lucide-box',
  active: route.path.startsWith('/docs/components')
}, {
  label: 'Figma',
  icon: 'i-simple-icons-figma',
  to: 'https://go.nuxt.com/figma-ui',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}])
</script>