<!-- components/HeroCardMockup.vue -->
<template>
  <div class="relative overflow-hidden bg-muted">
    <!-- Background patterns -->
    <img
      aria-hidden="true"
      src="https://www.untitledui.com/patterns/light/grid-dot-sm-desktop.svg"
      class="pointer-events-none absolute -top-2 left-1/2 z-0 hidden max-w-none -translate-x-1/2 dark:brightness-[0.2] md:block"
      alt=""
    >
    <img
      aria-hidden="true"
      src="https://www.untitledui.com/patterns/light/grid-dot-sm-mobile.svg"
      class="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 dark:brightness-[0.2] md:hidden"
      alt=""
    >

    <!-- Header Navigation -->
    <UHeader class="relative z-10 mx-auto max-w-container px-4 py-4 md:px-8 md:py-5 bg-transparent border-0">
      <template #title>
        <div class="flex items-center">
          <svg
            viewBox="0 0 38 38"
            fill="none"
            class="h-8 w-8"
          >
            <rect
              x="3"
              y="2"
              width="32"
              height="32"
              rx="8"
              fill="url(#logo-gradient)"
            />
            <path
              d="M19 10L23 18H15L19 10Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="logo-gradient"
                x1="3"
                y1="2"
                x2="35"
                y2="34"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#53389E" />
                <stop
                  offset="1"
                  stop-color="#6941C6"
                />
              </linearGradient>
            </defs>
          </svg>
          <span class="ml-2 text-xl font-semibold text-primary">Untitled</span>
        </div>
      </template>

      <UNavigationMenu
        :items="navItems"
        class="hidden md:flex"
      />

      <template #right>
        <UButton
          color="secondary"
          variant="ghost"
          size="sm"
        >
          Sign in
        </UButton>
        <UButton
          color="primary"
          size="sm"
        >
          Get started
        </UButton>
      </template>

      <template #body>
        <UNavigationMenu
          :items="navItems"
          orientation="vertical"
          class="-mx-2.5"
        />
      </template>
    </UHeader>

    <!-- Hero Content -->
    <section class="relative overflow-hidden py-16 md:pt-24 md:pb-0">
      <div class="mx-auto w-full max-w-container px-4 md:px-8">
        <div class="mx-auto flex max-w-5xl flex-col md:items-center md:text-center">
          <!-- Badge -->
          <a
            href="#"
            class="rounded-[10px] outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <UBadgeGroup
              size="lg"
              class="hidden md:flex"
              color="primary"
              variant="modern"
            >
              <template #addon>What's new?</template>
              Instantly issue virtual cards
            </UBadgeGroup>
            <UBadgeGroup
              size="md"
              class="md:hidden"
              color="primary"
              variant="modern"
            >
              <template #addon>What's new?</template>
              Instantly issue virtual cards
            </UBadgeGroup>
          </a>

          <!-- Headline -->
          <h1 class="mt-4 text-4xl font-semibold tracking-tight text-primary md:text-5xl lg:text-6xl">
            No more banking headaches
          </h1>
          <p class="mt-4 max-w-3xl text-lg text-tertiary md:mt-6 md:text-xl">
            Mo money, no problems. Untitled is a next-generation financial technology company in the process of reinventing banking. 30-day free trial.
          </p>

          <!-- Buttons -->
          <div class="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
            <UButton
              color="secondary"
              size="xl"
            >
              Watch demo
            </UButton>
            <UButton
              color="primary"
              size="xl"
            >
              Sign up
            </UButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const navItems = computed<NavigationMenuItem[]>(() => [
  { label: 'Product', to: '#' },
  { label: 'Features', to: '#' },
  { label: 'Pricing', to: '#' },
  { label: 'Resources', to: '#' }
])
</script>
