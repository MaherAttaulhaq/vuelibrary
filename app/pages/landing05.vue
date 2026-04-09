<!-- pages/index.vue - Complete single file -->
<template>
  <div class="bg-muted">
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

      <!-- Hero Section -->
      <section class="relative bg-muted py-16 md:py-24">
        <div class="mx-auto w-full max-w-[1560px] px-4 md:px-8">
          <div class="flex max-w-3xl flex-col items-start">
            <h1 class="text-4xl font-semibold text-primary md:text-5xl lg:text-6xl">
              Simple, transparent business credit cards
            </h1>
            <p class="mt-4 text-lg text-secondary md:mt-6 md:text-xl">
              Mo money, no problems. Untitled is a next-generation financial technology company in the process of reinventing banking. 30-day free trial.
            </p>
            <div class="mt-8 flex w-full flex-col-reverse items-stretch gap-3 md:mt-12 md:flex-row md:items-start">
              <UButton
                label="Demo"
                icon="i-heroicons-play-circle"
                color="neutral"
                variant="outline"
                size="lg"
              />
              <UButton
                label="Sign up"
                color="secondary"
                size="lg"
              />
            </div>
          </div>
        </div>

        <!-- Credit Cards Showcase -->
        <div class="relative mt-16 w-full max-w-[1560px] md:mx-auto md:mt-24 md:px-8">
          <div class="h-80 w-full bg-muted-alt md:h-120 md:rounded-2xl" />

          <div class="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden sm:pl-[30vw] md:inset-x-8 md:rounded-2xl md:pl-0">
            <div
              class="flex w-max flex-col gap-4"
              :style="{ transform: isMobile ? 'scale(0.585) rotate(30deg) translate(-87px, 799px)' : 'rotate(30deg) translate(416px, 177px)' }"
            >
              <!-- Row 1 -->
              <div class="flex gap-4 pl-40">
                <CreditCard
                  v-for="i in 3"
                  :key="`r1-${i}`"
                  variant="primary"
                  name="Phoenix Baker"
                />
              </div>
              <!-- Row 2 -->
              <div class="flex gap-4">
                <CreditCard
                  variant="dark"
                  name="Phoenix Baker"
                />
                <CreditCard
                  variant="light"
                  name="Phoenix Baker"
                />
                <CreditCard
                  variant="glass"
                  name="Phoenix Baker"
                />
              </div>
              <!-- Row 3 -->
              <div class="flex gap-4 pl-40">
                <CreditCard
                  variant="glass"
                  name="Phoenix Baker"
                />
                <CreditCard
                  variant="primary"
                  name="Phoenix Baker"
                />
              </div>
              <!-- Row 4 -->
              <div class="flex gap-4">
                <CreditCard
                  variant="primary"
                  name="Phoenix Baker"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Trusted By Section -->
      <section class="bg-muted-section pb-16 md:pb-24">
        <div class="mx-auto max-w-[1560px] md:px-8">
          <div class="flex flex-col gap-8 bg-muted-section px-6 py-12 md:rounded-2xl md:p-16">
            <p class="text-center text-md font-medium text-secondary md:text-xl">
              Trusted by 4,000+ companies
            </p>
            <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 xl:gap-x-8">
              <img
                src="https://www.untitledui.com/logos/logotype/color/catalog.svg"
                alt="Catalog"
                class="h-9 opacity-70 dark:opacity-50 md:h-10"
              >
              <img
                src="https://www.untitledui.com/logos/logotype/color/pictel-ai.svg"
                alt="Pictelai"
                class="h-9 opacity-70 dark:opacity-50 md:h-10"
              >
              <img
                src="https://www.untitledui.com/logos/logotype/color/leapyear.svg"
                alt="Leapyear"
                class="h-9 opacity-70 dark:opacity-50 md:h-10"
              >
              <img
                src="https://www.untitledui.com/logos/logotype/color/peregrin.svg"
                alt="Peregrin"
                class="h-9 opacity-70 dark:opacity-50 md:h-10"
              >
              <img
                src="https://www.untitledui.com/logos/logotype/color/easy-tax.svg"
                alt="Easytax"
                class="h-9 opacity-70 dark:opacity-50 md:h-10"
              >
              <img
                src="https://www.untitledui.com/logos/logotype/color/core-os.svg"
                alt="Coreos"
                class="h-9 opacity-70 dark:opacity-50 md:h-10"
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="overflow-hidden bg-muted py-16 lg:py-24">
        <div class="mx-auto w-full max-w-[1560px] px-4 md:px-8">
          <div class="flex w-full flex-col lg:max-w-3xl">
            <UBadge
              label="Features"
              color="primary"
              variant="subtle"
              class="w-fit"
            />
            <h2 class="mt-3 text-3xl font-semibold text-primary md:text-4xl">
              The only card you'll ever need. Simple.
            </h2>
            <p class="mt-4 text-lg text-secondary md:mt-5 md:text-xl">
              Spend smarter, lower your bills, get cashback on everything you buy, and unlock credit to grow your business.
            </p>
          </div>

          <div class="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center">
            <ul class="flex flex-col">
              <li class="relative flex cursor-pointer flex-col items-start gap-4 border-l-4 border-primary py-4 pl-5 transition duration-100 ease-linear">
                <div>
                  <h3 class="text-lg font-semibold text-primary">
                    Share team inboxes
                  </h3>
                  <p class="mt-1 text-md text-secondary">
                    Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
                  </p>
                </div>
                <ULink
                  to="#"
                  class="text-primary hover:text-primary-dark"
                >Learn more <UIcon
                  name="i-heroicons-arrow-right"
                  class="ml-1"
                /></ULink>
              </li>
              <li class="relative flex cursor-pointer flex-col items-start gap-4 border-l-4 border-muted-dark py-4 pl-5 transition duration-100 ease-linear hover:border-primary">
                <div>
                  <h3 class="text-lg font-semibold text-primary">
                    Deliver instant answers
                  </h3>
                  <p class="mt-1 text-md text-secondary">
                    An all-in-one customer service platform that helps you balance everything your customers need to be happy.
                  </p>
                </div>
                <ULink
                  to="#"
                  class="text-primary hover:text-primary-dark"
                >Learn more <UIcon
                  name="i-heroicons-arrow-right"
                  class="ml-1"
                /></ULink>
              </li>
              <li class="relative flex cursor-pointer flex-col items-start gap-4 border-l-4 border-muted-dark py-4 pl-5 transition duration-100 ease-linear hover:border-primary">
                <div>
                  <h3 class="text-lg font-semibold text-primary">
                    Manage your team with reports
                  </h3>
                  <p class="mt-1 text-md text-secondary">
                    Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
                  </p>
                </div>
                <ULink
                  to="#"
                  class="text-primary hover:text-primary-dark"
                >Learn more <UIcon
                  name="i-heroicons-arrow-right"
                  class="ml-1"
                /></ULink>
              </li>
            </ul>

            <div class="relative -mx-4 flex h-80 items-center justify-center bg-muted-alt md:mr-0 md:h-120 lg:h-160">
              <div class="-space-y-[106px] md:-space-y-16 lg:-space-y-8">
                <div
                  class="relative z-1"
                  style="transform: scale(0.84) rotate(60deg) translate(38px, -53px)"
                >
                  <CreditCard
                    name="OLIVIA RHYE"
                    variant="glass"
                  />
                </div>
                <div
                  class="relative z-0"
                  style="transform: scale(0.84) rotate(30deg) translate(-23px, 24px)"
                >
                  <CreditCard
                    name="Phoenix Baker"
                    variant="primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UDivider />

      <!-- All-in-one Finance Section -->
      <section class="bg-muted py-16 md:pt-24 md:pb-0">
        <div class="mx-auto w-full max-w-[1560px] px-4 md:px-8">
          <div class="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <UBadge
              label="Features"
              color="primary"
              variant="subtle"
              class="w-fit"
            />
            <h2 class="mt-3 text-3xl font-semibold text-primary md:text-4xl">
              All-in-one finance for any business
            </h2>
            <p class="mt-4 text-lg text-secondary md:mt-5 md:text-xl">
              Get a deposit account, credit card, and spend management software—in one refreshingly easy solution. No fees or minimums.
            </p>
          </div>
        </div>
        <div class="mx-auto mt-12 w-full max-w-[1560px] px-4 md:mt-16 md:max-h-105 md:overflow-hidden md:px-8 lg:max-h-140">
          <div class="size-full rounded-[9.03px] bg-muted-light p-[0.9px] shadow-lg ring-[0.56px] ring-muted-dark ring-inset md:rounded-[32px] md:p-1 md:ring-[2px]">
            <div class="size-full rounded-[7.9px] bg-muted-light p-0.5 shadow-modern-mockup-inner-md md:rounded-[28px] md:p-[5.4px]">
              <div class="relative size-full overflow-hidden rounded-[6.77px] bg-muted ring-[0.56px] ring-muted-dark md:rounded-[24px] md:ring-[2px]">
                <img
                  src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                  alt="Finance dashboard"
                  class="size-full object-cover dark:hidden"
                >
                <img
                  src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                  alt="Finance dashboard"
                  class="size-full object-cover hidden dark:block"
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="bg-muted-section py-16 md:py-24">
        <div class="mx-auto max-w-[1560px] px-4 md:px-8">
          <UPageCTA
            title="Start your free trial"
            description="Join over 4,000+ startups already growing with Untitled."
            align="center"
            :ui="{
              container: 'flex flex-col items-center text-center',
              title: 'text-3xl md:text-4xl font-semibold text-primary',
              description: 'mt-4 md:mt-5 text-lg md:text-xl text-secondary',
              actions: 'mt-8 flex flex-col-reverse gap-3 md:flex-row md:justify-center'
            }"
          >
            <template #actions>
              <UButton
                label="Learn more"
                color="neutral"
                variant="outline"
                size="lg"
              />
              <UButton
                label="Get started"
                color="primary"
                size="lg"
              />
            </template>
          </UPageCTA>
        </div>
      </section>

      <!-- Pricing Section -->
      <section class="bg-muted py-16 md:py-24">
        <div class="mx-auto max-w-[1560px] px-4 md:px-8">
          <!-- Header -->
          <div class="mx-auto flex w-full max-w-2xl flex-col xl:mx-0 xl:max-w-3xl">
            <UBadge
              label="Upgrade"
              color="primary"
              variant="subtle"
              class="w-fit"
            />
            <h2 class="mt-3 text-3xl font-semibold text-primary md:text-4xl">
              Pricing as simple as our cards
            </h2>
            <p class="mt-4 text-lg text-secondary md:mt-5">
              Simple, transparent pricing that grows with you. Try any plan free for 30 days.
            </p>
          </div>

          <!-- Grid -->
          <div class="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-12 md:mt-16 md:gap-16 xl:mx-0 xl:max-w-none xl:grid-cols-2 xl:items-center">
            <!-- LEFT: Features list (unchanged) -->
            <ul class="grid max-w-xl grid-cols-1 gap-10 md:gap-12">
              <li
                v-for="feature in pricingFeatures"
                :key="feature.title"
                class="flex gap-4"
              >
                <div class="relative hidden shrink-0 items-center justify-center bg-muted-light shadow-xs ring-1 ring-muted-dark md:inline-flex size-12 rounded-[10px] text-secondary">
                  <UIcon
                    :name="feature.icon"
                    class="size-6"
                  />
                </div>

                <div class="pt-1.5 md:pt-2.5">
                  <h3 class="text-lg font-semibold text-primary md:text-xl">
                    {{ feature.title }}
                  </h3>
                  <p class="mt-1 text-md text-secondary md:mt-2">
                    {{ feature.description }}
                  </p>
                </div>
              </li>
            </ul>

            <!-- RIGHT: Nuxt UI Pricing Plan -->
            <div class="md:-ml-4">
              <UPricingPlan
                title="Basic plan"
                description="Our most popular plan for small teams."
                price="$10"
                :features="planFeatures"
                :badge="{ label: 'Popular', color: 'primary' }"
                :button="{
                  label: 'Get started',
                  color: 'primary',
                  size: 'lg',
                  block: true
                }"
                variant="subtle"
                :ui="{
                  root: 'rounded-2xl bg-muted-light shadow-lg ring-1 ring-muted-dark overflow-hidden',
                  header: 'px-6 pt-6 pb-8 md:px-8 md:pt-8 md:pb-6',
                  body: 'border-t border-muted-dark px-6 py-8 md:px-8 md:pt-8 md:pb-10',
                  footer: 'border-t border-muted-dark px-6 pt-6 pb-8 md:p-8'
                }"
              />
            </div>
          </div>
        </div>
      </section>
      <!-- Bottom CTA -->
      <section class="bg-muted pb-16 md:pb-24">
        <div class="mx-auto max-w-[1560px] px-4 md:px-8">
          <div class="flex flex-col gap-x-8 gap-y-8 rounded-2xl bg-primary px-6 py-10 lg:flex-row lg:p-16">
            <div class="flex max-w-3xl flex-1 flex-col">
              <h2 class="text-3xl font-semibold text-white">
                <span class="hidden md:inline">Start your 30-day free trial</span><span class="md:hidden">Start your free trial</span>
              </h2>
              <p class="mt-4 text-lg text-white/80 lg:text-xl">
                Join over 4,000+ startups already growing with Untitled.
              </p>
            </div>
            <div class="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start">
              <UButton
                label="Learn more"
                color="white"
                variant="outline"
              />
              <UButton
                label="Get started"
                color="white"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-muted-section pt-12 pb-8 md:pt-16">
        <div class="mx-auto max-w-[1560px] px-4 md:px-8">
          <div class="flex flex-col gap-12 md:gap-16 xl:flex-row">
            <div class="flex flex-col items-start gap-6 md:w-80">
              <div class="flex h-7 w-min shrink-0 items-center">
                <svg
                  viewBox="0 0 38 38"
                  fill="none"
                  class="h-full w-auto"
                >
                  <path
                    d="M3 14.8C3 10.3196 3 8.07937 3.87195 6.36808C4.63893 4.86278 5.86278 3.63893 7.36808 2.87195C9.07937 2 11.3196 2 15.8 2H22.2C26.6804 2 28.9206 2 30.6319 2.87195C32.1372 3.63893 33.3611 4.86278 34.1281 6.36808C35 8.07937 35 10.3196 35 14.8V21.2C35 25.6804 35 27.9206 34.1281 29.6319C33.3611 31.1372 32.1372 32.3611 30.6319 33.1281C28.9206 34 26.6804 34 22.2 34H15.8C11.3196 34 9.07937 34 7.36808 33.1281C5.86278 32.3611 4.63893 31.1372 3.87195 29.6319C3 27.9206 3 25.6804 3 21.2V14.8Z"
                    fill="currentColor"
                    class="text-primary"
                  />
                  <rect
                    x="11"
                    y="10"
                    width="16"
                    height="16"
                    rx="8"
                    fill="#6941C6"
                  />
                </svg>
              </div>
              <p class="text-md text-secondary">
                Design amazing digital experiences that create more happy in the world.
              </p>
              <div class="flex items-center gap-2">
                <div class="flex gap-0.5">
                  <UIcon
                    v-for="i in 5"
                    :key="i"
                    name="i-heroicons-star"
                    class="size-4 text-yellow-400"
                  />
                </div>
                <div>
                  <p class="text-sm font-semibold text-primary">
                    Best Design Tool
                  </p>
                  <p class="text-xs font-medium text-secondary">
                    2,000+ reviews
                  </p>
                </div>
              </div>
            </div>

            <nav class="flex-1">
              <ul class="grid grid-cols-2 gap-8 md:grid-cols-5">
                <li
                  v-for="section in footerSections"
                  :key="section.title"
                >
                  <h4 class="text-sm font-semibold text-tertiary">
                    {{ section.title }}
                  </h4>
                  <ul class="mt-4 flex flex-col gap-3">
                    <li
                      v-for="link in section.links"
                      :key="link.label"
                    >
                      <ULink
                        :to="link.href"
                        class="text-sm text-secondary hover:text-primary"
                      >{{ link.label }}</ULink>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>

          <UDivider class="my-8" />

          <div class="flex flex-col-reverse justify-between gap-6">
            <p class="text-sm text-tertiary">
              © 2077 Untitled UI. All rights reserved.
            </p>
            <div class="flex gap-6">
              <ULink
                v-for="social in socialLinks"
                :key="social.name"
                :to="social.href"
                class="text-tertiary hover:text-secondary"
              >
                <UIcon
                  :name="social.icon"
                  class="size-5"
                />
              </ULink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineComponent } from 'vue'

import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth < 768
})

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

const pricingFeatures = [
  { title: 'Share team inboxes', description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.', icon: 'i-heroicons-chat-bubble-left-right' },
  { title: 'Deliver instant answers', description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.', icon: 'i-heroicons-bolt' },
  { title: 'Manage your team with reports', description: 'Measure what matters with Untitled\'s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.', icon: 'i-heroicons-chart-bar' }
]

const planFeatures = [
  'Access to basic features', 'Basic reporting + analytics', 'Up to 10 individual users', '20 GB individual data',
  'Basic chat support', 'Attend events', 'Automatic updates', 'Backup your account', 'Audit log and notes', 'Feature requests'
]

const footerSections = [
  { title: 'Product', links: [{ label: 'Overview', href: '#' }, { label: 'Features', href: '#' }, { label: 'Solutions', href: '#' }, { label: 'Tutorials', href: '#' }, { label: 'Pricing', href: '#' }, { label: 'Releases', href: '#' }] },
  { title: 'Company', links: [{ label: 'About us', href: '#' }, { label: 'Careers', href: '#' }, { label: 'Press', href: '#' }, { label: 'News', href: '#' }, { label: 'Media kit', href: '#' }, { label: 'Contact', href: '#' }] },
  { title: 'Resources', links: [{ label: 'Blog', href: '#' }, { label: 'Newsletter', href: '#' }, { label: 'Events', href: '#' }, { label: 'Help centre', href: '#' }, { label: 'Tutorials', href: '#' }, { label: 'Support', href: '#' }] },
  { title: 'Social', links: [{ label: 'X', href: '#' }, { label: 'LinkedIn', href: '#' }, { label: 'Facebook', href: '#' }, { label: 'GitHub', href: '#' }, { label: 'AngelList', href: '#' }, { label: 'Dribbble', href: '#' }] },
  { title: 'Legal', links: [{ label: 'Terms', href: '#' }, { label: 'Privacy', href: '#' }, { label: 'Cookies', href: '#' }, { label: 'Licenses', href: '#' }, { label: 'Settings', href: '#' }, { label: 'Contact', href: '#' }] }
]

const socialLinks = [
  { name: 'X', href: 'https://x.com/', icon: 'i-simple-icons-x' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'i-simple-icons-linkedin' },
  { name: 'Facebook', href: 'https://www.facebook.com/', icon: 'i-simple-icons-facebook' },
  { name: 'GitHub', href: 'https://github.com/', icon: 'i-simple-icons-github' },
  { name: 'AngelList', href: 'https://angel.co/', icon: 'i-simple-icons-angellist' },
  { name: 'Dribbble', href: 'https://dribbble.com/', icon: 'i-simple-icons-dribbble' }
]
</script>

<style scoped>
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

.bg-primary {
  background-color: #7c3aed;
}

.text-primary {
  color: #7c3aed;
}

.text-secondary {
  color: #6b7280;
}

.text-tertiary {
  color: #9ca3af;
}

.hover\:text-primary-dark:hover {
  color: #6d28d9;
}

.border-primary {
  border-color: #7c3aed;
}

.border-muted-dark {
  border-color: #d1d5db;
}

.ring-muted-dark {
  --tw-ring-color: #d1d5db;
}

/* CreditCard styles - component is defined inline below */
</style>
