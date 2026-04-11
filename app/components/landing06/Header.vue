<template>
  <UHeader
    class="border-b border-border h-16 md:h-18"
    :ui="{
      container: 'max-w-[1560px] px-4 md:px-8 flex items-center justify-between'
    }"
  >
    <template #left>
      <h1 class="font-bold">
        Nuxt UI
      </h1>
    </template>

    <!-- DESKTOP NAV (your items) -->
    <UNavigationMenu
      :items="items"
      class="hidden md:flex"
      variant="link"
    />

    <!-- RIGHT SIDE (auth + mobile btn) -->
    <template #right>
      <!-- Desktop Auth -->
      <div class="hidden md:flex items-center gap-3">
        <UButton
          variant="outline"
          class="bg-background"
        >
          Log in
        </UButton>
        <UButton color="primary">
          Sign up
        </UButton>
      </div>
    </template>

    <!-- MOBILE MENU (your nav in body) -->
    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5 md:hidden"
      />

      <!-- Mobile Auth -->
      <div class="mt-4 flex flex-col gap-3 md:hidden">
        <UButton
          variant="outline"
          block
        >
          Log in
        </UButton>
        <UButton
          color="primary"
          block
        >
          Sign up
        </UButton>
      </div>
    </template>
  </UHeader>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  { label: 'Products' },
  { label: 'Services' },
  { label: 'Pricing' },
  { label: 'Resources' },
  { label: 'About' }
])
</script>