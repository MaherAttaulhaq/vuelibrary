<template>
  <div class="bg-muted relative overflow-hidden">
    <!-- Header -->
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

    <!-- Hero Section -->
    <UPageHero class="relative overflow-hidden  lg:flex lg:min-h-[720px] lg:py-0">
      <!-- Left content -->
      <div class="mx-auto w-full max-w-[1560px] px-4 md:px-8">
        <div class="flex flex-col items-start md:max-w-3xl lg:w-1/2 lg:pt-32 lg:pb-24">
          <!-- Badge -->
          <UBadge
            variant="subtle"
            color="neutral"
            class="hidden md:flex gap-2"
          >
            <span class="size-2 rounded-full bg-primary" />
            We're hiring! Join our remote team
            <UIcon
              name="i-heroicons-arrow-right"
              class="size-4"
            />
          </UBadge>

          <!-- Headline -->
          <h1 class="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Smart business credit cards
          </h1>

          <!-- Description -->
          <p class="mt-6 text-lg text-muted-foreground md:text-xl">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
          </p>

          <!-- Input + Button -->
          <div class="mt-8 flex w-full flex-col gap-3 md:mt-10 md:max-w-md md:flex-row">
            <UInput
              size="lg"
              placeholder="Enter your email"
              class="flex-1"
            />
            <UButton
              color="primary"
              size="lg"
            >
              Get started
            </UButton>
          </div>

          <!-- Privacy Text -->
          <p class="mt-4 text-sm text-muted-foreground">
            We care about your data. Read our
            <a
              href="#"
              class="text-primary underline"
            >privacy policy</a>
          </p>
        </div>
      </div>

      <!-- Right content: Hero card rotated stack -->
      <div class="relative mt-16 h-80 w-full bg-muted/50 px-4 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-1/2 lg:px-0">
        <div class="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div
            class="relative"
            style="transform: rotate(25deg) scale(0.8) translateX(100px);"
          >
            <!-- Rotated Card -->
            <div class="relative lg:w-[480px] lg:h-[350px] w-[350px] h-[200px] rounded-2xl bg-gradient-to-br from-primary/90 to-primary shadow-xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div class="relative p-5 flex flex-col justify-between h-full">
                <div class="flex justify-between text-white">
                  <span class="font-semibold">Untitled</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <div>
                  <div class="text-xs text-white/80 uppercase">
                    Phoenix Baker
                  </div>
                  <div class="text-white text-lg tracking-wider">
                    •••• 1234
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UPageHero>

    <!-- Logo Cloud -->
    <section class="bg-muted/50 py-12 md:py-16">
      <div class="mx-auto max-w-[1560px] px-4 md:px-8">
        <div class="flex flex-col gap-8">
          <p class="text-center text-sm font-medium text-muted-foreground">
            Join 4,000+ companies already growing
          </p>
          <div class="flex flex-wrap justify-center gap-8">
            <img
              src="https://www.untitledui.com/logos/logotype/color/odeao-labs.svg"
              class="h-8 md:h-9 opacity-70"
              alt="Logo"
            >
            <img
              src="https://www.untitledui.com/logos/logotype/color/kintsugi.svg"
              class="h-8 md:h-9 opacity-70"
              alt="Logo"
            >
            <img
              src="https://www.untitledui.com/logos/logotype/color/stacked-lab.svg"
              class="h-8 md:h-9 opacity-70"
              alt="Logo"
            >
            <img
              src="https://www.untitledui.com/logos/logotype/color/magnolia.svg"
              class="h-8 md:h-9 opacity-70"
              alt="Logo"
            >
            <img
              src="https://www.untitledui.com/logos/logotype/color/warpspeed.svg"
              class="h-8 md:h-9 opacity-70"
              alt="Logo"
            >
            <img
              src="https://www.untitledui.com/logos/logotype/color/sisyphus.svg"
              class="h-8 md:h-9 opacity-70"
              alt="Logo"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <UPageSection
      title="Stop leaving money on the table"
      description="Spend smarter, lower your bills, get cashback on everything you buy, and unlock credit to grow your business."
    >
      <template #headline>
        <span class="text-sm font-semibold text-primary">
          Features
        </span>
      </template>

      <!-- Custom layout (IMPORTANT for matching structure) -->
      <div class="mt-12 grid grid-cols-1 gap-8 md:mt-16 lg:grid-cols-2 lg:gap-12">
        <!-- LEFT: Features list using Nuxt UI -->
        <div class="space-y-10">
          <UPageFeature
            v-for="feature in features"
            :key="feature.title"
            :title="feature.title"
            :description="feature.description"
            :icon="feature.icon"
          >
            <template #actions>
              <UButton
                variant="link"
                color="primary"
                class="p-0"
              >
                Learn more
                <UIcon
                  name="i-heroicons-arrow-right"
                  class="size-4"
                />
              </UButton>
            </template>
          </UPageFeature>
        </div>

        <!-- RIGHT: 3D Card Stack (custom, unchanged) -->
        <div class="relative flex items-center justify-center min-h-[400px] bg-muted/30 rounded-2xl">
          <div class="relative perspective-1000">
            <div
              class="relative space-y-[-120px]"
              style="transform: rotateX(60deg) rotateZ(45deg) scale(0.9);"
            >
              <!-- Card 1 -->
              <div class="relative w-[400px] h-[300px] rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-xl p-4">
                <div class="flex justify-between text-white">
                  <span class="font-semibold">Untitled</span>
                  <span class="text-sm">06/28</span>
                </div>
                <div class="absolute bottom-4 left-4 right-4">
                  <div class="text-xs text-white/70 uppercase">
                    Demi Wilkinson
                  </div>
                  <div class="text-white text-md tracking-wider">
                    1234 1234 1234 1234
                  </div>
                </div>
              </div>

              <!-- Card 2 -->
              <div class="relative w-[400px] h-[250px] rounded-xl bg-gradient-to-br from-primary/80 to-primary/60 shadow-xl p-4 backdrop-blur">
                <div class="flex justify-between text-white">
                  <span class="font-semibold">Untitled</span>
                  <span class="text-sm">06/28</span>
                </div>
                <div class="absolute bottom-4 left-4 right-4">
                  <div class="text-xs text-white/70 uppercase">
                    Lana Steiner
                  </div>
                  <div class="text-white text-md tracking-wider">
                    1234 1234 1234 1234
                  </div>
                </div>
              </div>

              <!-- Card 3 -->
              <div class="relative w-[300px] h-[180px] rounded-xl bg-gradient-to-br from-primary/60 to-primary/40 shadow-xl p-4 backdrop-blur">
                <div class="flex justify-between text-white">
                  <span class="font-semibold">Untitled</span>
                  <span class="text-sm">06/28</span>
                </div>
                <div class="absolute bottom-4 left-4 right-4">
                  <div class="text-xs text-white/70 uppercase">
                    Olivia Rhye
                  </div>
                  <div class="text-white text-md tracking-wider">
                    1234 1234 1234 1234
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UPageSection>
    <!-- CTA Banner -->
    <section class="bg-muted/50 py-16 lg:py-20">
      <div class="mx-auto max-w-[1560px] px-4 md:px-8">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              No long-term contracts. No catches.
            </h2>
            <p class="mt-4 text-lg text-muted-foreground md:text-xl">
              Start your 30-day free trial today.
            </p>
            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <UButton
                variant="outline"
                size="lg"
              >
                Learn more
              </UButton>
              <UButton
                color="primary"
                size="lg"
              >
                Get started
              </UButton>
            </div>
          </div>
          <div class="grid grid-cols-2 grid-rows-2 gap-3 h-80">
            <img
              src="https://www.untitledui.com/marketing/abstract-image-01.webp"
              class="rounded-xl object-cover w-full h-full"
              alt="Abstract"
            >
            <img
              src="https://www.untitledui.com/marketing/abstract-image-02.webp"
              class="rounded-xl object-cover w-full h-full"
              alt="Abstract"
            >
            <img
              src="https://www.untitledui.com/marketing/abstract-image-03.webp"
              class="rounded-xl object-cover w-full h-full"
              alt="Abstract"
            >
            <img
              src="https://www.untitledui.com/marketing/abstract-image-04.webp"
              class="rounded-xl object-cover w-full h-full"
              alt="Abstract"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Why Switch Section -->
    <USection class="py-16 mb-10 md:py-24">
      <div class="mx-auto max-w-[1560px] px-4 md:px-8">
        <!-- Section Heading -->
        <div class="max-w-2xl">
          <span class="text-sm font-semibold text-primary">Why switch?</span>
          <h2 class="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Get your finances right
          </h2>
          <p class="mt-4 text-lg text-muted-foreground">
            We offer the best accounting and expense tracking for ambitious businesses.
          </p>
        </div>

        <!-- Feature Cards -->
        <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <UCard
            v-for="item in whySwitch"
            :key="item.title"
            class="p-6 bg-background border border-border rounded-xl"
          >
            <!-- Icon -->
            <div class="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <UIcon
                :name="item.icon"
                class="size-6 text-primary"
              />
            </div>

            <!-- Title & Description -->
            <h3 class="mt-4 text-lg font-semibold text-foreground">
              {{ item.title }}
            </h3>
            <p class="mt-2 text-muted-foreground">
              {{ item.description }}
            </p>

            <!-- Action Button -->
            <UButton
              variant="link"
              color="primary"
              class="mt-4 p-0"
            >
              Learn more
              <UIcon
                name="i-heroicons-arrow-right"
                class="size-4"
              />
            </UButton>
          </UCard>
        </div>
      </div>
    </USection>

    <!-- Pricing Section -->
    <USection class="bg-muted/30  py-16 md:py-24">
      <div class="mx-auto max-w-[1560px] px-4 md:px-8">
        <!-- Heading -->
        <div class="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div class="max-w-md">
            <span class="text-sm font-semibold text-primary">Upgrade</span>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Pricing plans that scale
            </h2>
            <p class="mt-4 text-muted-foreground">
              Simple, transparent pricing that grows with you. Try any plan free for 30 days.
            </p>
          </div>

          <!-- Plans Grid -->
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 flex-1 max-w-3xl">
            <!-- Basic Plan -->
            <UCard class="bg-background border border-border rounded-2xl overflow-hidden">
              <div class="p-6 text-center border-b border-border">
                <div class="size-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <UIcon
                    name="i-heroicons-sparkles"
                    class="size-6 text-primary"
                  />
                </div>
                <h3 class="mt-4 text-xl font-semibold text-foreground">
                  Basic plan
                </h3>
                <p class="mt-2 text-3xl font-bold text-foreground">
                  $10<span class="text-base font-normal text-muted-foreground">/mth</span>
                </p>
                <p class="text-sm text-muted-foreground">
                  Billed annually.
                </p>
              </div>

              <ul class="p-6 space-y-3">
                <li
                  v-for="feature in basicFeatures"
                  :key="feature"
                  class="flex gap-3 text-muted-foreground"
                >
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="size-5 text-primary shrink-0 mt-0.5"
                  />
                  <span>{{ feature }}</span>
                </li>
              </ul>

              <div class="p-6 border-t border-border bg-muted/20">
                <UButton
                  color="primary"
                  block
                >
                  Get started
                </UButton>
              </div>
            </UCard>

            <!-- Business Plan -->
            <UCard class="bg-background border-2 border-primary rounded-2xl overflow-hidden shadow-lg">
              <div class="p-6 text-center border-b border-border">
                <div class="size-12 rounded-full bg-primary flex items-center justify-center mx-auto">
                  <UIcon
                    name="i-heroicons-cube"
                    class="size-6 text-white"
                  />
                </div>
                <h3 class="mt-4 text-xl font-semibold text-foreground">
                  Business plan
                </h3>
                <p class="mt-2 text-3xl font-bold text-foreground">
                  $20<span class="text-base font-normal text-muted-foreground">/mth</span>
                </p>
                <p class="text-sm text-muted-foreground">
                  Billed annually.
                </p>
              </div>

              <ul class="p-6 space-y-3">
                <li
                  v-for="feature in businessFeatures"
                  :key="feature"
                  class="flex gap-3 text-muted-foreground"
                >
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="size-5 text-primary shrink-0 mt-0.5"
                  />
                  <span>{{ feature }}</span>
                </li>
              </ul>

              <div class="p-6 border-t border-border bg-muted/20">
                <UButton
                  color="primary"
                  block
                >
                  Get started
                </UButton>
              </div>
            </UCard>
          </div>
        </div>
      </div>
    </USection>

    <!-- Newsletter Section -->
    <section class="py-16 md:py-20">
      <div class="mx-auto max-w-[1560px] px-4 md:px-8">
        <div class="bg-muted/50 rounded-2xl p-8 text-center md:p-12">
          <h2 class="text-2xl font-bold text-foreground md:text-3xl">
            Still thinking about it?
          </h2>
          <p class="mt-2 text-muted-foreground">
            Sign up for our newsletter and get 10% off your next purchase.
          </p>
          <div class="mt-6 flex flex-col gap-3 max-w-md mx-auto sm:flex-row">
            <UInput
              placeholder="Enter your email"
              class="flex-1"
            />
            <UButton color="primary">
              Subscribe
            </UButton>
          </div>
          <p class="mt-4 text-xs text-muted-foreground">
            Read our <a
              href="#"
              class="text-primary underline"
            >privacy policy</a>
          </p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-border bg-background pt-12 pb-8">
      <div class="mx-auto max-w-[1560px] px-4 md:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div class="col-span-1">
            <div class="flex items-center gap-2">
              <div class="size-8 rounded-lg bg-primary flex items-center justify-center">
                <span class="text-white font-bold">U</span>
              </div>
              <span class="text-xl font-semibold text-foreground">Untitled</span>
            </div>
            <p class="mt-4 text-sm text-muted-foreground">
              Banking technology that has your back.
            </p>
          </div>

          <div class="col-span-3">
            <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
              <div
                v-for="col in footerLinks"
                :key="col.title"
              >
                <h4 class="text-sm font-semibold text-foreground">
                  {{ col.title }}
                </h4>
                <ul class="mt-3 space-y-2">
                  <li
                    v-for="link in col.links"
                    :key="link"
                  >
                    <a
                      href="#"
                      class="text-sm text-muted-foreground hover:text-foreground"
                    >{{ link }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 pt-8 border-t border-border flex flex-col justify-between gap-4 sm:flex-row">
          <p class="text-sm text-muted-foreground">
            © 2077 Untitled UI. All rights reserved.
          </p>
          <div class="flex gap-4">
            <a
              href="#"
              class="text-muted-foreground hover:text-foreground"
            ><UIcon
              name="i-simple-icons-x"
              class="size-5"
            /></a>
            <a
              href="#"
              class="text-muted-foreground hover:text-foreground"
            ><UIcon
              name="i-simple-icons-linkedin"
              class="size-5"
            /></a>
            <a
              href="#"
              class="text-muted-foreground hover:text-foreground"
            ><UIcon
              name="i-simple-icons-facebook"
              class="size-5"
            /></a>
            <a
              href="#"
              class="text-muted-foreground hover:text-foreground"
            ><UIcon
              name="i-simple-icons-github"
              class="size-5"
            /></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  { label: 'Products' },
  { label: 'Services' },
  { label: 'Pricing' },
  { label: 'Resources' },
  { label: 'About' }
])

const whySwitch = [
  {
    title: 'Share team inboxes',
    description: 'Keep everyone on the same page with shared team inboxes.',
    icon: 'i-heroicons-envelope'
  },
  {
    title: 'Deliver instant answers',
    description: 'Customer service platform that helps balance everything.',
    icon: 'i-heroicons-chat-bubble-left-right'
  },
  {
    title: 'Manage your team',
    description: 'Easy-to-use reports to filter, export, and drilldown on data.',
    icon: 'i-heroicons-users'
  },
  {
    title: 'Connect with customers',
    description: 'Real-time chat that seamlessly routes to email when needed.',
    icon: 'i-heroicons-chat-bubble-oval-left'
  }
]

const basicFeatures = [
  'Feature 1 included',
  'Feature 2 included',
  'Feature 3 included',
  'Feature 4 included'
]

const businessFeatures = [
  'All Basic features',
  'Advanced analytics',
  'Priority support',
  'Custom integrations'
]

/** @type {Array<{title: string, links: string[]}>} */
const footerLinks = [
  { title: 'Product', links: ['Overview', 'Features', 'Pricing', 'Careers'] },
  { title: 'Company', links: ['About', 'Blog', 'Press', 'Partners'] },
  { title: 'Resources', links: ['Documentation', 'Help Center', 'Guides', 'API Status'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Compliance'] },
  { title: 'Social', links: ['Twitter', 'LinkedIn', 'GitHub', 'Discord'] }
]

const features = [
  {
    title: 'Spend smarter',
    description: 'Optimize your spending with intelligent insights.',
    icon: 'i-lucide-wallet'
  },
  {
    title: 'Lower your bills',
    description: 'Automatically reduce unnecessary expenses.',
    icon: 'i-lucide-receipt'
  },
  {
    title: 'Get cashback',
    description: 'Earn rewards on every transaction.',
    icon: 'i-lucide-badge-percent'
  },
  {
    title: 'Unlock credit',
    description: 'Access flexible credit to grow your business.',
    icon: 'i-lucide-credit-card'
  }
]
</script>

<style>
/* Global styles */
body {
  background-color: hsl(var(--background));
}

.perspective-1000 {
  perspective: 1000px;
}
</style>
