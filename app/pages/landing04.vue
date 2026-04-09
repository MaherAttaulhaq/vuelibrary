<template>
  <div class="bg-muted">
    <!-- Hero Section -->
    <div class="relative overflow-hidden bg-muted-section">
      <!-- Background Grid -->
      <img
        alt="Grid of dots"
        aria-hidden="true"
        src="https://www.untitledui.com/patterns/light/grid-sm-desktop.svg"
        class="pointer-events-none absolute -top-2 left-1/2 z-0 hidden max-w-none -translate-x-1/2 opacity-20 md:block dark:opacity-100 dark:brightness-[0.2]"
      >
      <img
        alt="Grid of dots"
        aria-hidden="true"
        src="https://www.untitledui.com/patterns/light/grid-sm-mobile.svg"
        class="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 opacity-20 md:hidden dark:opacity-100 dark:brightness-[0.2]"
      >

      <!-- Header / Navigation -->
      <template>
        <UHeader
          :ui="{
            base: 'bg-transparent border-none',
            container: 'max-w-container px-4 md:px-8'
          }"
        >
          <!-- Logo -->
          <template #title>
            <LogoIcon class="h-8 w-auto" />
          </template>

          <!-- Desktop Navigation -->
          <UNavigationMenu
            :items="items"
            class="hidden md:flex"
          />

          <!-- Right Side -->
          <template #right>
            <div class="hidden md:flex items-center gap-3">
              <UButton
                variant="ghost"
                class="bg-muted text-secondary ring-1 ring-muted"
              >
                Log in
              </UButton>

              <UButton color="primary">
                Sign up
              </UButton>
            </div>

            <!-- Mobile Toggle -->
            <UButton
              variant="ghost"
              class="md:hidden"
              :icon="mobileMenuOpen ? 'i-heroicons-x-mark-20-solid' : 'i-heroicons-bars-3-20-solid'"
              @click="mobileMenuOpen = !mobileMenuOpen"
            />
          </template>

          <!-- Mobile Menu -->
          <template #body>
            <div
              v-if="mobileMenuOpen"
              class="md:hidden pt-4"
            >
              <UNavigationMenu
                :items="items"
                orientation="vertical"
                class="-mx-2.5"
              />

              <!-- Mobile Auth -->
              <div class="flex flex-col gap-2 mt-4 px-2">
                <UButton variant="ghost">
                  Log in
                </UButton>
                <UButton color="primary">
                  Sign up
                </UButton>
              </div>
            </div>
          </template>
        </UHeader>
      </template>
      <!-- Mobile Menu Dropdown -->
      <USlideover
        v-model="mobileMenuOpen"
        side="top"
        class="md:hidden"
      >
        <div class="p-4 bg-muted">
          <div class="flex flex-col gap-2">
            <UButton
              variant="ghost"
              block
              class="justify-start"
            >
              Products
            </UButton>
            <UButton
              variant="ghost"
              block
              class="justify-start"
            >
              Services
            </UButton>
            <UButton
              variant="ghost"
              block
              class="justify-start"
            >
              Pricing
            </UButton>
            <UButton
              variant="ghost"
              block
              class="justify-start"
            >
              Resources
            </UButton>
            <UButton
              variant="ghost"
              block
              class="justify-start"
            >
              About
            </UButton>
            <UDivider />
            <UButton block>
              Log in
            </UButton>
            <UButton
              color="primary"
              block
            >
              Sign up
            </UButton>
          </div>
        </div>
      </USlideover>

      <!-- Hero Content -->
      <section class="relative overflow-hidden pt-16 md:pt-24 md:pb-0">
        <img
          alt="Light Accent"
          aria-hidden="true"
          src="https://www.untitledui.com/marketing/light-accent.webp"
          class="absolute -right-2/3 -bottom-12 max-w-160 opacity-90 mix-blend-screen sm:-right-1/3 md:max-w-7xl"
        >

        <div class="mx-auto w-full max-w-container px-4 md:px-8">
          <div class="mx-auto flex max-w-3xl flex-col md:items-center md:text-center">
            <span class="text-sm font-semibold text-secondary md:text-md">Super. Simple. Banking.</span>
            <h1 class="mt-3 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-2xl">
              Banking technology that has your back.
            </h1>
            <p class="mt-4 max-w-3xl text-lg text-balance text-tertiary md:mt-6 md:text-xl">
              Simple, transparent banking. No hidden fees and free overdrafts.
            </p>
            <div class="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
              <UButton class="bg-muted text-secondary shadow-xs ring-0">
                <template #leading>
                  <UIcon
                    name="i-heroicons-play-circle-20-solid"
                    class="size-5"
                  />
                </template>
                Demo
              </UButton>
              <UButton
                color="primary"
                class="bg-primary text-white"
              >
                Sign up
              </UButton>
            </div>
          </div>
        </div>

        <!-- Floating Cards -->
        <div class="mx-auto mt-16 w-full max-w-container md:px-8">
          <div class="flex h-46 items-end justify-center md:h-114">
            <div class="flex -translate-y-[53px] items-start justify-end md:translate-y-2">
              <FloatingCard
                v-for="(card, index) in floatingCards"
                :key="index"
                :style="card.style"
                :name="card.name"
                :date="card.date"
              />
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Companies Section -->
    <section class="bg-muted py-16 md:py-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="flex flex-col gap-8">
          <p class="text-center text-md font-medium text-tertiary">
            Join 4,000+ companies already growing
          </p>
          <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 xl:gap-x-6">
            <img
              v-for="logo in companyLogos"
              :key="logo.alt"
              :src="logo.src"
              :alt="logo.alt"
              class="h-9 md:h-10"
              :class="logo.class"
            >
          </div>
        </div>
      </div>
    </section>

    <UDivider class="mx-auto max-w-container px-4 md:px-8" />

    <!-- Features Section -->
    <section class="bg-muted py-16 md:py-24">
      <div class="mx-auto w-full max-w-container px-4 md:px-8">
        <div class="grid grid-cols-1 gap-12 md:gap-16 lg:grid-cols-3">
          <div class="max-w-3xl lg:col-span-1">
            <UAvatar
              :ui="{ rounded: 'rounded-full', size: { sm: 'size-12', md: 'size-14' } }"
              class="bg-primary/10 text-primary hidden md:flex"
              size="md"
            >
              <template #default>
                <UIcon
                  name="i-heroicons-bolt-20-solid"
                  class="size-7"
                />
              </template>
            </UAvatar>
            <UAvatar
              :ui="{ rounded: 'rounded-full', size: { sm: 'size-12', md: 'size-14' } }"
              class="bg-primary/10 text-primary md:hidden"
              size="sm"
            >
              <template #default>
                <UIcon
                  name="i-heroicons-bolt-20-solid"
                  class="size-6"
                />
              </template>
            </UAvatar>
            <h2 class="mt-5 text-display-sm font-semibold text-primary md:text-display-md">
              The only card you'll ever need. Simple.
            </h2>
            <p class="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
              Spend smarter, lower your bills, get cashback on everything you buy, and unlock credit to grow your business.
            </p>
          </div>
          <div class="lg:col-span-2">
            <ul class="grid w-full grid-cols-1 gap-x-16 gap-y-10 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3 md:gap-y-8 lg:grid-cols-2">
              <li
                v-for="feature in features"
                :key="feature.title"
                class="flex max-w-sm flex-col gap-4"
              >
                <div>
                  <h3 class="text-lg font-semibold text-primary">
                    {{ feature.title }}
                  </h3>
                  <p class="mt-1 text-md text-tertiary">
                    {{ feature.description }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-muted pb-16 md:pb-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="flex flex-col overflow-hidden rounded-2xl bg-muted-section shadow-xl md:flex-row md:items-center md:rounded-3xl">
          <div class="flex flex-1 flex-col px-6 pt-10 pb-12 lg:p-16">
            <h2 class="text-display-sm font-semibold text-primary md:text-display-md">
              Give us a shot
            </h2>
            <p class="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
              Join over 4,000+ startups already growing with Untitled.
            </p>
            <div class="mt-8 flex w-full flex-col-reverse items-stretch gap-3 md:mt-12 md:flex-row md:items-start">
              <UButton class="bg-muted text-secondary shadow-xs ring-1 ring-muted ring-inset">
                Learn more
              </UButton>
              <UButton
                color="primary"
                class="bg-primary text-white"
              >
                Get started
              </UButton>
            </div>
          </div>
          <img
            src="https://www.untitledui.com/marketing/girl-2.webp"
            class="h-70 w-full object-cover md:h-100 md:w-95 lg:w-120"
            alt="Team member working on laptop in modern office"
          >
        </div>
      </div>
    </section>

    <!-- Features Detail Section -->
    <section class="overflow-hidden bg-muted pb-16 md:pb-24">
      <div class="mx-auto w-full max-w-container px-4 md:px-8">
        <div class="flex w-full flex-col lg:max-w-3xl">
          <span class="text-sm font-semibold text-primary md:text-md">Features</span>
          <h2 class="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
            All-in-one finance for any business
          </h2>
          <p class="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
            Get a deposit account, credit card, and spend management software—in one refreshingly easy solution. No fees or minimums.
          </p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center">
          <ul class="flex flex-col">
            <li
              v-for="(item, index) in featureDetails"
              :key="item.title"
              class="relative flex cursor-pointer flex-col items-start gap-4 border-l-4 py-4 pl-5 transition duration-100 ease-linear"
              :class="index === 0 ? 'border-primary' : 'border-muted-dark hover:border-primary'"
            >
              <div>
                <h3 class="text-lg font-semibold text-primary">
                  {{ item.title }}
                </h3>
                <p class="mt-1 text-md text-tertiary">
                  {{ item.description }}
                </p>
              </div>
              <ULink
                to="#"
                class="text-primary hover:text-primary-dark"
              >
                Learn more
                <UIcon
                  name="i-heroicons-arrow-right-20-solid"
                  class="size-5"
                />
              </ULink>
            </li>
          </ul>
          <div class="lg:-ml-4 lg:h-128">
            <div class="w-full lg:w-max lg:lg:max-w-5xl">
              <div class="size-full rounded-[9.03px] bg-muted p-[0.9px] shadow-lg ring-[0.56px] ring-muted-dark ring-inset md:rounded-[26.95px] md:p-[3.5px] md:ring-[1.68px]">
                <div class="size-full rounded-[7.9px] bg-muted p-0.5 shadow-modern-mockup-inner-md md:rounded-[23.58px] md:p-1 md:shadow-modern-mockup-inner-lg">
                  <div class="relative size-full overflow-hidden rounded-[6.77px] bg-muted-light ring-[0.56px] ring-muted-dark md:rounded-[20.21px] md:ring-[1.68px]">
                    <img
                      src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                      class="size-full object-cover object-left-top dark:hidden"
                      alt="Business dashboard interface showing analytics and data visualization"
                    >
                    <img
                      src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                      class="size-full object-cover object-left-top not-dark:hidden"
                      alt="Business dashboard interface showing analytics and data visualization"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="bg-muted-alt py-16 md:py-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="flex flex-col gap-12 md:gap-16 xl:flex-row">
          <div class="w-full max-w-3xl xl:max-w-md">
            <span class="block text-sm font-semibold text-primary md:text-md">Upgrade</span>
            <h2 class="mt-3 hidden text-display-sm font-semibold text-primary md:flex md:text-display-md">
              Pricing plans that scale
            </h2>
            <h2 class="mt-3 flex text-display-sm font-semibold text-primary md:hidden md:text-display-md">
              Pricing plans that scale with you
            </h2>
            <p class="mt-4 text-lg text-tertiary md:mt-5">
              Simple, transparent pricing that grows with you. Try any plan free for 30 days.
            </p>
          </div>
          <div class="grid w-full grid-cols-1 items-start gap-4 md:-ml-2 md:grid-cols-2 md:gap-8">
            <PricingCard
              v-for="plan in pricingPlans"
              :key="plan.name"
              :plan="plan"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="bg-muted py-16 md:py-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="grid grid-cols-1 items-center overflow-hidden rounded-2xl bg-muted-section md:rounded-3xl lg:grid-cols-[auto_auto]">
          <div class="flex flex-1 flex-col gap-8 px-6 py-10 md:gap-8 md:px-8 md:py-12 lg:p-16">
            <figure class="flex flex-col gap-8">
              <div class="flex flex-col gap-4 md:gap-6">
                <div
                  aria-hidden="true"
                  class="flex gap-1"
                >
                  <UIcon
                    v-for="i in 5"
                    :key="i"
                    name="i-heroicons-star-20-solid"
                    class="size-5 text-yellow-400"
                  />
                </div>
                <blockquote class="origin-bottom-left text-display-xs font-medium text-balance text-primary will-change-transform sm:text-display-sm md:text-display-md">
                  Love the simplicity of the service and the prompt customer support. We can't imagine working without it.
                </blockquote>
              </div>
              <figcaption class="flex origin-bottom-left flex-col gap-1 will-change-transform">
                <p class="text-lg font-semibold text-primary">
                  — Renee Wells
                </p>
                <cite class="text-md text-secondary not-italic">Product Designer, Quotient</cite>
              </figcaption>
            </figure>
          </div>
          <div class="relative flex h-70 w-full items-center justify-center overflow-hidden sm:h-full sm:min-h-90 lg:min-h-112 lg:w-120">
            <img
              alt="Mathilde Lewis"
              src="https://www.untitledui.com/images/portraits/annie-stanley"
              class="absolute inset-0 size-full object-cover"
            >
            <span class="absolute flex size-full items-center justify-center">
              <div class="flex items-center justify-center rounded-full bg-alpha-white/30 backdrop-blur transition duration-100 ease-linear size-16">
                <UIcon
                  name="i-heroicons-play-20-solid"
                  class="size-5 text-white"
                />
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-muted-section py-12 md:pt-16">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <!-- Newsletter -->
        <div class="flex flex-col items-start justify-between gap-8 border-muted-alt md:flex-row md:border-b md:pb-16">
          <div class="flex flex-col gap-2">
            <p
              id="newsletter-label"
              class="text-lg font-semibold text-primary md:text-xl"
            >
              Join our newsletter
            </p>
            <p
              id="newsletter-hint"
              class="text-md text-tertiary"
            >
              We'll send you a nice letter once per week. No spam.
            </p>
          </div>
          <form
            class="w-full sm:w-100"
            @submit.prevent="subscribeNewsletter"
          >
            <div class="flex flex-col gap-4 sm:flex-row">
              <UInput
                v-model="email"
                type="email"
                placeholder="Enter your email"
                required
                class="flex-1"
                size="lg"
              />
              <UButton
                type="submit"
                color="primary"
                class="bg-primary text-white"
              >
                Subscribe
              </UButton>
            </div>
          </form>
        </div>

        <!-- Footer Navigation -->
        <nav class="mt-12 md:mt-16">
          <ul class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            <li
              v-for="section in footerSections"
              :key="section.title"
            >
              <h4 class="text-sm font-semibold text-secondary">
                {{ section.title }}
              </h4>
              <ul class="mt-4 flex flex-col gap-3">
                <li
                  v-for="link in section.links"
                  :key="link.text"
                >
                  <ULink
                    to="#"
                    class="text-tertiary hover:text-primary"
                  >
                    {{ link.text }}
                    <UBadge
                      v-if="link.badge"
                      variant="subtle"
                      class="ml-1 bg-primary/10 text-primary ring-1 ring-primary/20 ring-inset"
                    >
                      {{ link.badge }}
                    </UBadge>
                  </ULink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <!-- Footer Bottom -->
        <div class="mt-12 flex flex-col justify-between gap-6 border-t border-muted-alt pt-8 md:mt-16 md:flex-row md:items-center">
          <div class="flex h-8 w-max items-center justify-start overflow-visible">
            <LogoIcon class="size-8 origin-center scale-[1.2] aspect-square h-full w-auto shrink-0" />
          </div>
          <p class="text-sm text-tertiary">
            © 2077 Untitled UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

import type { NavigationMenuItem } from '@nuxt/ui'

// Mobile menu state
const mobileMenuOpen = ref(false)

// Dropdown items
const productItems = ref([
  [{ label: 'Product 1', to: '#' }, { label: 'Product 2', to: '#' }]
])
const serviceItems = ref([
  [{ label: 'Service 1', to: '#' }, { label: 'Service 2', to: '#' }]
])
const resourceItems = ref([
  [{ label: 'Resource 1', to: '#' }, { label: 'Resource 2', to: '#' }]
])

// Floating cards data
const floatingCards = ref([
  {
    name: 'Phoenix Baker',
    date: '06/28',
    style: { '--transform-mobile': 'scale(0.7) translate(-59px, 39px) rotate(30deg)', '--transform-desktop': 'scale(1.77) translate(-59px, 39px) rotate(30deg)' }
  },
  {
    name: 'OLIVIA RHYE',
    date: '06/28',
    style: { '--transform-mobile': 'scale(0.7) translate(-38px, 10px) rotate(60deg)', '--transform-desktop': 'scale(1.77) translate(-38px, 10px) rotate(60deg)' }
  },
  {
    name: 'Lana Steiner',
    date: '06/28',
    style: { '--transform-mobile': 'scale(0.7) translate(0px, 0px) rotate(90deg)', '--transform-desktop': 'scale(1.77) translate(0px, 0px) rotate(90deg)' }
  },
  {
    name: 'Demi Wilkinson',
    date: '06/28',
    style: { '--transform-mobile': 'scale(0.7) translate(36px, 10px) rotate(120deg)', '--transform-desktop': 'scale(1.77) translate(36px, 10px) rotate(120deg)' }
  },
  {
    name: 'Candice wu',
    date: '06/28',
    style: { '--transform-mobile': 'scale(0.7) translate(59px, 39px) rotate(150deg)', '--transform-desktop': 'scale(1.77) translate(59px, 39px) rotate(150deg)' }
  }
])

// Company logos
const companyLogos = ref([
  { src: 'https://www.untitledui.com/logos/logotype/color/odeao-labs.svg', alt: 'Odeaolabs', class: 'dark:hidden' },
  { src: 'https://www.untitledui.com/logos/logotype/color/kintsugi.svg', alt: 'Kintsugi', class: 'dark:hidden' },
  { src: 'https://www.untitledui.com/logos/logotype/color/stacked-lab.svg', alt: 'Stackedlab', class: 'dark:hidden' },
  { src: 'https://www.untitledui.com/logos/logotype/color/magnolia.svg', alt: 'Magnolia', class: 'dark:hidden' },
  { src: 'https://www.untitledui.com/logos/logotype/color/warpspeed.svg', alt: 'Warpspeed', class: 'dark:hidden' },
  { src: 'https://www.untitledui.com/logos/logotype/color/sisyphus.svg', alt: 'Sisyphus', class: 'dark:hidden' },
  { src: 'https://www.untitledui.com/logos/logotype/white/odeao-labs.svg', alt: 'Odeaolabs', class: 'not-dark:hidden' },
  { src: 'https://www.untitledui.com/logos/logotype/white/kintsugi.svg', alt: 'Kintsugi', class: 'not-dark:hidden' },
  { src: 'https://www.untitledui.com/logos/logotype/white/stacked-lab.svg', alt: 'Stackedlab', class: 'not-dark:hidden' },
  { src: 'https://www.untitledui.com/logos/logotype/white/magnolia.svg', alt: 'Magnolia', class: 'not-dark:hidden' },
  { src: 'https://www.untitledui.com/logos/logotype/white/warpspeed.svg', alt: 'Warpspeed', class: 'not-dark:hidden' },
  { src: 'https://www.untitledui.com/logos/logotype/white/sisyphus.svg', alt: 'Sisyphus', class: 'not-dark:hidden' }
])

// Features data
const features = ref([
  { title: 'Share team inboxes', description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.' },
  { title: 'Manage your team with reports', description: 'Measure what matters with Untitled\'s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.' },
  { title: 'Connect the tools you already use', description: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.' },
  { title: 'Deliver instant answers', description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.' },
  { title: 'Connect with customers', description: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.' },
  { title: 'Our people make the difference', description: 'We\'re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.' }
])

// Feature details for the left column
const featureDetails = ref([
  { title: 'Share team inboxes', description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.' },
  { title: 'Deliver instant answers', description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.' },
  { title: 'Manage your team with reports', description: 'Measure what matters with Untitled\'s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.' }
])

// Pricing plans
const pricingPlans = ref([
  {
    name: 'Basic plan',
    price: '$10/mth',
    period: 'Billed annually.',
    features: [
      'Access to all basic features',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20 GB individual data',
      'Basic chat and email support'
    ],
    buttonText: 'Get started'
  },
  {
    name: 'Business plan',
    price: '$20/mth',
    period: 'Billed annually.',
    features: [
      '200+ integrations',
      'Advanced reporting',
      'Up to 20 individual users',
      '40 GB individual data',
      'Priority chat and email support'
    ],
    buttonText: 'Get started',
    highlighted: true
  }
])

// Footer sections
const footerSections = ref([
  {
    title: 'Product',
    links: [
      { text: 'Overview' },
      { text: 'Features' },
      { text: 'Solutions', badge: 'New' },
      { text: 'Tutorials' },
      { text: 'Pricing' },
      { text: 'Releases' }
    ]
  },
  {
    title: 'Company',
    links: [
      { text: 'About us' },
      { text: 'Careers' },
      { text: 'Press' },
      { text: 'News' },
      { text: 'Media kit' },
      { text: 'Contact' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { text: 'Blog' },
      { text: 'Newsletter' },
      { text: 'Events' },
      { text: 'Help centre' },
      { text: 'Tutorials' },
      { text: 'Support' }
    ]
  },
  {
    title: 'Use cases',
    links: [
      { text: 'Startups' },
      { text: 'Enterprise' },
      { text: 'Government' },
      { text: 'SaaS centre' },
      { text: 'Marketplaces' },
      { text: 'Ecommerce' }
    ]
  },
  {
    title: 'Social',
    links: [
      { text: 'X' },
      { text: 'LinkedIn' },
      { text: 'Facebook' },
      { text: 'GitHub' },
      { text: 'AngelList' },
      { text: 'Dribbble' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { text: 'Terms' },
      { text: 'Privacy' },
      { text: 'Cookies' },
      { text: 'Licenses' },
      { text: 'Settings' },
      { text: 'Contact' }
    ]
  }
])

// Newsletter email
const email = ref('')

const subscribeNewsletter = () => {
  console.log('Subscribe:', email.value)
  // Handle newsletter subscription
}

const route = useRoute()


// Dropdown groups
const items = computed(() => [
  {
    label: 'Products',
    children: [
      { label: 'Product 1', to: '/products/1' },
      { label: 'Product 2', to: '/products/2' }
    ]
  },
  {
    label: 'Services',
    children: [
      { label: 'Service 1', to: '/services/1' },
      { label: 'Service 2', to: '/services/2' }
    ]
  },
  {
    label: 'Pricing',
    to: '/pricing',
    active: route.path.startsWith('/pricing')
  },
  {
    label: 'Resources',
    children: [
      { label: 'Blog', to: '/blog' },
      { label: 'Docs', to: '/docs' }
    ]
  },
  {
    label: 'About',
    to: '/about',
    active: route.path.startsWith('/about')
  }
])
</script>

<style>
/* Custom styles to match original design */
.max-w-container {
  max-width: 1560px;
}

.shadow-xs-skeuomorphic {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

/* Muted color palette */
.bg-muted {
  background-color: #f9fafb;
}

.bg-muted-section {
  background-color: #f3f4f6;
}

.bg-muted-alt {
  background-color: #e5e7eb;
}

.bg-muted-light {
  background-color: #ffffff;
}

.border-muted {
  border-color: #e5e7eb;
}

.border-muted-dark {
  border-color: #d1d5db;
}

.border-muted-alt {
  border-color: #e5e7eb;
}

/* Primary color palette */
.bg-primary {
  background-color: #7c3aed;
}

.text-primary {
  color: #7c3aed;
}

.hover\:text-primary-dark:hover {
  color: #6d28d9;
}

.border-primary {
  border-color: #7c3aed;
}

/* Secondary color palette */
.text-secondary {
  color: #4b5563;
}

/* Tertiary color palette */
.text-tertiary {
  color: #6b7280;
}

/* Typography */
.text-display-xs {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.text-display-sm {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.text-display-md {
  font-size: 3rem;
  line-height: 3.5rem;
}

.text-display-lg {
  font-size: 3.75rem;
  line-height: 4rem;
}

.text-display-2xl {
  font-size: 4.5rem;
  line-height: 5rem;
}

@media (min-width: 768px) {
  .text-display-xs {
    font-size: 2.25rem;
    line-height: 2.75rem;
  }
  .text-display-sm {
    font-size: 3rem;
    line-height: 3.5rem;
  }
}

/* Dark mode overrides */
.dark .bg-muted {
  background-color: #1f2937;
}

.dark .bg-muted-section {
  background-color: #111827;
}

.dark .bg-muted-alt {
  background-color: #374151;
}

.dark .bg-muted-light {
  background-color: #1f2937;
}

.dark .text-secondary {
  color: #9ca3af;
}

.dark .text-tertiary {
  color: #9ca3af;
}

.dark .border-muted {
  border-color: #374151;
}

.dark .border-muted-dark {
  border-color: #4b5563;
}
</style>
