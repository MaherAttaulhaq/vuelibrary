<template>
  <div class="bg-muted">
    <div class="relative bg-muted overflow-hidden">
      <!-- Background patterns -->
      <img
        alt="Grid of dots"
        aria-hidden="true"
        src="https://www.untitledui.com/patterns/light/grid-sm-desktop.svg"
        class="pointer-events-none absolute -top-2 left-1/2 z-0 hidden max-w-none -translate-x-1/2 dark:brightness-[0.2] md:block"
      >
      <img
        alt="Grid of dots"
        aria-hidden="true"
        src="https://www.untitledui.com/patterns/light/grid-sm-mobile.svg"
        class="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 dark:brightness-[0.2] md:hidden"
      >

      <!-- Header -->
      <UHeader>
        <!-- Logo -->
        <template #title>
          <Logo class="h-7 md:max-lg:hidden" />
        </template>

        <!-- Navigation Menu (Desktop) -->
        <UNavigationMenu :items="menuItems" />

        <!-- Right side buttons -->
        <template #right>
          <UButton
            label="Log in"
            variant="outline"
            color="neutral"
            class="hidden md:flex"
          />
          <UButton
            label="Sign up"
            color="primary"
            class="hidden md:flex"
          />
        </template>

        <!-- Mobile Menu -->
        <template #body>
          <div
            v-if="isMobileMenuOpen"
            class="flex flex-col gap-2 p-4 md:hidden"
          >
            <UNavigationMenu
              :items="menuItems"
              orientation="vertical"
              class="-mx-2.5"
            />
            <hr class="my-2 border-border-secondary">
            <UButton
              label="Log in"
              variant="outline"
              color="neutral"
              block
            />
            <UButton
              label="Sign up"
              color="primary"
              block
            />
          </div>
        </template>
      </UHeader>

      <!-- Hero Section -->
      <section class="relative overflow-hidden py-16 md:pt-24 md:pb-0">
        <img
          alt="Light Accent"
          aria-hidden="true"
          src="https://www.untitledui.com/marketing/light-accent.webp"
          class="absolute -right-1/4 -bottom-14 z-10 max-w-160 mix-blend-screen dark:block sm:-right-1/3 md:-right-1/4 md:hidden md:max-w-7xl"
        >
        <div class="mx-auto w-full max-w-container px-4 md:px-8">
          <div class="mx-auto flex max-w-3xl flex-col md:items-center md:text-center">
            <span class="text-sm font-semibold text-text-brand-secondary md:text-md">Super. Simple. Banking.</span>
            <h1 class="mt-3 text-display-md font-semibold text-text-primary md:text-display-lg lg:text-display-2xl">
              Simple banking that works like magic.
            </h1>
            <p class="mt-4 max-w-3xl text-lg text-balance text-text-tertiary md:mt-6 md:text-xl">
              Simple, transparent banking. No hidden fees and free overdrafts.
            </p>
            <div class="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
              <UButton
                label="Demo"
                icon="i-lucide-play"
                variant="outline"
                color="neutral"
                size="xl"
              />
              <UButton
                label="Sign up"
                color="primary"
                size="xl"
              />
            </div>
          </div>
        </div>

        <!-- Credit Card Showcase -->
        <div class="mx-auto mt-16 w-full max-w-container md:px-8">
          <div class="flex h-53 items-center justify-center md:h-100 md:items-end">
            <div class="flex">
              <!-- Card 1 -->
              <div
                class="[transform:var(--transform-mobile)] md:[transform:var(--transform-desktop)]"
                style="--transform-mobile: scale(0.79) translate(131px, 11px) rotate(30deg); --transform-desktop: scale(1.77) translate(12px, 2px) rotate(30deg);"
              >
                <CreditCard
                  name="Phoenix Baker"
                  date="06/28"
                />
              </div>
              <!-- Card 2 -->
              <div
                class="[transform:var(--transform-mobile)] md:[transform:var(--transform-desktop)]"
                style="--transform-mobile: scale(0.79) translate(-98px, -1px) rotate(30deg); --transform-desktop: scale(1.77) translate(5px, -11px) rotate(30deg);"
              >
                <CreditCard
                  name="OLIVIA RHYE"
                  date="06/28"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Features Section (Grid) -->
    <UPageSection>
      <UContainer>
        <!-- Header -->
        <div class="max-w-3xl">
          <p class="text-sm font-semibold text-primary">
            Features
          </p>

          <h2 class="mt-3 text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
            The only card you'll ever need. Simple.
          </h2>

          <p class="mt-4 text-lg text-gray-500 md:text-xl">
            Spend smarter, lower your bills, get cashback on everything you buy,
            and unlock credit to grow your business.
          </p>
        </div>

        <!-- Content -->
        <div class="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
          <!-- Feature List -->
          <div class="space-y-10">
            <UCard
              v-for="(feature, index) in features"
              :key="index"
              class="flex gap-4 items-start"
            >
              <UIcon
                :name="feature.icon"
                class="text-primary w-6 h-6 mt-1"
              />

              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white">
                  {{ feature.title }}
                </h3>
                <p class="text-gray-500 mt-1">
                  {{ feature.description }}
                </p>
              </div>
            </UCard>
          </div>

          <!-- 3D Card Stack -->
          <div class="relative flex h-80 items-center justify-center rounded-xl bg-gradient-to-tr from-neutral-800 to-neutral-700 md:h-[480px] lg:h-[560px]">
            <div class="translate-x-[34px] translate-y-[3px] -space-y-[116px] md:translate-x-[45px] md:translate-y-[37px] md:-space-y-[83px]">
              <!-- Card 1 -->
              <div class="relative z-30 translate-y-[22px] rotate-[30deg]">
                <div
                  class="scale-[1.4] md:scale-[2.1]"
                  style="transform: rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg);"
                >
                  <CreditCardGlass
                    name="lana steiner"
                    date="06/28"
                  />
                </div>
              </div>

              <!-- Card 2 -->
              <div class="relative z-20 translate-y-[10px] rotate-[15deg]">
                <div
                  class="scale-[1.4] md:scale-[2.1]"
                  style="transform: rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg);"
                >
                  <CreditCardGlass
                    name="OLIVIA RHYE"
                    date="06/28"
                  />
                </div>
              </div>

              <!-- Card 3 -->
              <div
                class="relative z-10 scale-[1.4] md:scale-[2.1]"
                style="transform: rotateX(63deg) rotateY(1deg) rotateZ(51deg) skewX(14deg);"
              >
                <CreditCardGlass
                  name="Phoenix Baker"
                  date="06/28"
                />
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </UPageSection>
    <!-- Pricing Section -->
    <UPageSection>
      <UContainer>
        <!-- Header -->
        <div class="max-w-3xl">
          <p class="text-sm font-semibold text-primary">
            Pricing
          </p>

          <h2 class="mt-3 text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
            Simple, transparent pricing
          </h2>

          <p class="mt-4 text-lg text-gray-500 md:text-xl">
            We believe Untitled should be accessible to all companies, no matter the size.
          </p>
        </div>

        <!-- Pricing Grid -->
        <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <UCard
            v-for="(plan, index) in plans"
            :key="index"
            :class="[
              'relative flex flex-col justify-between',
              plan.popular ? 'ring-2 ring-primary scale-[1.02]' : ''
            ]"
          >
            <!-- Popular Badge -->
            <div
              v-if="plan.popular"
              class="absolute -top-3 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full"
            >
              Most Popular
            </div>

            <!-- Header -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                {{ plan.title }}
              </h3>

              <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                {{ plan.price }}
                <span class="text-sm text-gray-500 font-normal">/mo</span>
              </p>

              <!-- Features -->
              <ul class="mt-6 space-y-3">
                <li
                  v-for="(feature, i) in plan.features"
                  :key="i"
                  class="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                >
                  <UIcon
                    name="i-lucide-check"
                    class="text-primary mt-1 w-4 h-4"
                  />
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- CTA -->
            <UButton
              block
              class="mt-8"
              :variant="plan.popular ? 'solid' : 'outline'"
            >
              Get Started
            </UButton>
          </UCard>
        </div>
      </UContainer>
    </UPageSection>

    <!-- Features Section (Cards) -->
    <UPageSection>
      <UContainer>
        <!-- Section Heading -->
        <div class="text-center mb-12 max-w-2xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
            Our Amazing Features
          </h2>
          <p class="mt-4 text-gray-500">
            Discover the tools and functionalities that make our platform unique, efficient, and easy to use for everyone.
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center">
          <UCard
            v-for="(feature, index) in features"
            :key="index"
            class="w-full text-center hover:shadow-lg transition"
          >
            <!-- Icon -->
            <div class="flex justify-center mb-4">
              <div class="p-3 rounded-lg bg-primary/10">
                <UIcon
                  :name="feature.icon"
                  class="w-6 h-6 text-primary"
                />
              </div>
            </div>

            <!-- Content -->
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ feature.title }}
            </h3>

            <p class="mt-2 text-gray-500">
              {{ feature.description }}
            </p>
          </UCard>
        </div>
      </UContainer>
    </UPageSection>
    <!-- All-in-one Finance Section -->
    <section class="overflow-hidden bg-bg-primary pt-16 lg:pt-24">
      <div class="mx-auto w-full max-w-container px-4 md:px-8">
        <div class="flex w-full flex-col lg:max-w-3xl">
          <span class="text-sm font-semibold text-text-brand-secondary md:text-md">Features</span>
          <h2 class="mt-3 text-display-sm font-semibold text-text-primary md:text-display-md">
            All-in-one finance for any business
          </h2>
          <p class="mt-4 text-lg text-text-tertiary md:mt-5 md:text-xl">
            Get a deposit account, credit card, and spend management software—in one refreshingly easy solution. No fees or minimums.
          </p>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center">
          <ul class="flex flex-col">
            <FeatureTab
              title="Share team inboxes"
              description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
              :is-active="true"
            />
            <FeatureTab
              title="Deliver instant answers"
              description="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
            />
            <FeatureTab
              title="Manage your team with reports"
              description="Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
            />
          </ul>

          <!-- iPhone Mockup -->
          <div class="relative flex h-90 w-full justify-center md:h-120 lg:-ml-4 lg:h-140 lg:overflow-y-clip">
            <img
              src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
              alt="Dashboard preview"
              class="h-auto max-w-full drop-shadow-iphone-mockup dark:hidden"
            >
            <img
              src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
              alt="Dashboard preview"
              class="h-auto max-w-full drop-shadow-iphone-mockup hidden dark:block"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="mx-auto max-w-container px-4 md:px-8">
      <hr class="h-px w-full border-none bg-border-secondary">
    </div>

    <!-- Integrations Section -->
    <section class="bg-bg-primary py-16 md:py-24">
      <div class="mx-auto w-full max-w-container px-4 md:px-8">
        <div class="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <UBadge
            label="Integrations"
            color="neutral"
            variant="subtle"
            class="rounded-full"
          />
          <h2 class="mt-4 text-display-sm font-semibold text-text-primary md:text-display-md">
            Get more value from your tools
          </h2>
          <p class="mt-4 text-lg text-text-tertiary md:mt-5 md:text-xl">
            Connect your tools, connect your teams. With over 100 apps already available in our directory, your team's favorite tools are just a click away.
          </p>
        </div>

        <div class="mt-12 md:mt-16">
          <ul class="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
            <IntegrationItem
              name="Notion integration"
              description="Work faster and smarter by integrating directly with Notion, right in the app."
              logo="https://www.untitledui.com/logos/integrations/notion.svg"
            />
            <IntegrationItem
              name="Slack integration"
              description="Work faster and smarter by integrating directly with Slack, right in the app."
              logo="https://www.untitledui.com/logos/integrations/slack.svg"
            />
            <IntegrationItem
              name="Google Drive integration"
              description="Work faster and smarter by integrating directly with Google, right in the app."
              logo="https://www.untitledui.com/logos/integrations/google_drive.svg"
            />
            <IntegrationItem
              name="Intercom integration"
              description="Work faster and smarter by integrating directly with Intercom, right in the app."
              logo="https://www.untitledui.com/logos/integrations/intercom.svg"
            />
            <IntegrationItem
              name="Jira integration"
              description="Work faster and smarter by integrating directly with Jira, right in the app."
              logo="https://www.untitledui.com/logos/integrations/jira.svg"
            />
            <IntegrationItem
              name="Dropbox integration"
              description="Work faster and smarter by integrating directly with Dropbox, right in the app."
              logo="https://www.untitledui.com/logos/integrations/dropbox.svg"
            />
          </ul>
        </div>
      </div>
    </section>

    <!-- Trusted By Section -->
    <section class="bg-bg-primary pb-16 md:pb-24">
      <div class="mx-auto max-w-container md:px-8">
        <div class="flex flex-col gap-8 bg-bg-secondary px-6 py-12 md:rounded-2xl md:p-16">
          <p class="text-center text-md font-medium text-text-tertiary md:text-xl">
            Trusted by 4,000+ companies
          </p>
          <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 xl:gap-x-8">
            <img
              src="https://www.untitledui.com/logos/logotype/color/catalog.svg"
              alt="Catalog"
              class="h-9 dark:hidden md:h-10"
            >
            <img
              src="https://www.untitledui.com/logos/logotype/color/pictel-ai.svg"
              alt="Pictelai"
              class="h-9 dark:hidden md:h-10"
            >
            <img
              src="https://www.untitledui.com/logos/logotype/color/leapyear.svg"
              alt="Leapyear"
              class="h-9 dark:hidden md:h-10"
            >
            <img
              src="https://www.untitledui.com/logos/logotype/color/peregrin.svg"
              alt="Peregrin"
              class="h-9 dark:hidden md:h-10"
            >
            <img
              src="https://www.untitledui.com/logos/logotype/color/easy-tax.svg"
              alt="Easytax"
              class="h-9 dark:hidden md:h-10"
            >
            <img
              src="https://www.untitledui.com/logos/logotype/color/core-os.svg"
              alt="Coreos"
              class="h-9 dark:hidden md:h-10 md:hidden"
            >
            <!-- Dark mode versions -->
            <img
              src="https://www.untitledui.com/logos/logotype/white/catalog.svg"
              alt="Catalog"
              class="hidden h-9 opacity-85 dark:block md:h-10"
            >
            <img
              src="https://www.untitledui.com/logos/logotype/white/pictel-ai.svg"
              alt="Pictelai"
              class="hidden h-9 opacity-85 dark:block md:h-10"
            >
            <img
              src="https://www.untitledui.com/logos/logotype/white/leapyear.svg"
              alt="Leapyear"
              class="hidden h-9 opacity-85 dark:block md:h-10"
            >
            <img
              src="https://www.untitledui.com/logos/logotype/white/peregrin.svg"
              alt="Peregrin"
              class="hidden h-9 opacity-85 dark:block md:h-10"
            >
            <img
              src="https://www.untitledui.com/logos/logotype/white/easy-tax.svg"
              alt="Easytax"
              class="hidden h-9 opacity-85 dark:block md:h-10"
            >
            <img
              src="https://www.untitledui.com/logos/logotype/white/core-os.svg"
              alt="Coreos"
              class="hidden h-9 opacity-85 dark:block md:hidden md:h-10"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-bg-primary pb-16 md:pb-24">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="flex flex-col gap-x-8 gap-y-8 rounded-2xl bg-bg-brand-section px-6 py-10 lg:flex-row lg:p-16">
          <div class="flex max-w-3xl flex-1 flex-col">
            <h2 class="text-display-sm font-semibold text-text-primary_on-brand">
              <span class="hidden md:inline">Start your 30-day free trial</span>
              <span class="md:hidden">Start your free trial</span>
            </h2>
            <p class="mt-4 text-lg text-text-tertiary_on-brand lg:text-xl">
              Join over 4,000+ startups already growing with Untitled.
            </p>
          </div>
          <div class="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start">
            <UButton
              label="Learn more"
              variant="outline"
              color="neutral"
              class="bg-bg-primary shadow-xs"
            />
            <UButton
              label="Get started"
              color="primary"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-bg-secondary py-12 md:pt-16">
      <div class="mx-auto max-w-container px-4 md:px-8">
        <div class="flex flex-col justify-between gap-x-8 gap-y-12 lg:flex-row">
          <div class="flex flex-col gap-8 md:items-start">
            <Logo />
          </div>

          <nav>
            <ul class="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-[repeat(6,max-content)]">
              <li>
                <UButton
                  to="#"
                  variant="link"
                  label="Overview"
                  class="text-text-tertiary hover:text-text-tertiary_hover"
                />
              </li>
              <li>
                <UButton
                  to="#"
                  variant="link"
                  label="Features"
                  class="text-text-tertiary hover:text-text-tertiary_hover"
                />
              </li>
              <li>
                <UButton
                  to="#"
                  variant="link"
                  label="Pricing"
                  class="text-text-tertiary hover:text-text-tertiary_hover"
                />
              </li>
              <li>
                <UButton
                  to="#"
                  variant="link"
                  label="Careers"
                  class="text-text-tertiary hover:text-text-tertiary_hover"
                />
              </li>
              <li>
                <UButton
                  to="#"
                  variant="link"
                  label="Help"
                  class="text-text-tertiary hover:text-text-tertiary_hover"
                />
              </li>
              <li>
                <UButton
                  to="#"
                  variant="link"
                  label="Privacy"
                  class="text-text-tertiary hover:text-text-tertiary_hover"
                />
              </li>
            </ul>
          </nav>
        </div>

        <div class="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-border-secondary pt-8 md:mt-16 md:flex-row md:gap-6">
          <p class="text-sm text-text-quaternary">
            © 2077 Untitled UI. All rights reserved.
          </p>
          <ul class="flex gap-4">
            <li>
              <UButton
                to="#"
                variant="link"
                label="Terms"
                class="text-text-quaternary hover:text-text-tertiary"
              />
            </li>
            <li>
              <UButton
                to="#"
                variant="link"
                label="Privacy"
                class="text-text-quaternary hover:text-text-tertiary"
              />
            </li>
            <li>
              <UButton
                to="#"
                variant="link"
                label="Cookies"
                class="text-text-quaternary hover:text-text-tertiary"
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
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

const features = [
  {
    icon: 'i-lucide-message-square',
    title: 'Unlimited cards',
    description:
      'Give your team the autonomy they need with access to as many cards as they need. Authorise purchases with a click. Simple.'
  },
  {
    icon: 'i-lucide-zap',
    title: 'Easy expense policies',
    description:
      'Every card comes with configurable spending limits, purchase restrictions, and cancellations for each employee and team.'
  },
  {
    icon: 'i-lucide-chart-bar',
    title: 'Advanced analytics',
    description:
      'An all-in-one platform that helps you balance everything your team need to be happy and your finances in order.'
  }
]
const plans = [
  {
    title: 'Basic plan',
    price: '$10',
    popular: false,
    features: [
      'Access to all basic features',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20 GB individual data',
      'Basic chat and email support'
    ]
  },
  {
    title: 'Business plan',
    price: '$20',
    popular: true,
    features: [
      '200+ integrations',
      'Advanced reporting and analytics',
      'Up to 20 individual users',
      '40 GB individual data',
      'Priority chat and email support'
    ]
  },
  {
    title: 'Enterprise plan',
    price: '$40',
    popular: false,
    features: [
      'Advanced custom fields',
      'Audit log and data history',
      'Unlimited individual users',
      'Unlimited individual data',
      'Personalized + priority service'
    ]
  }
]
</script>

<!-- Reusable Components -->
<script lang="ts">
// Logo Component
const Logo = () => h('div', { class: 'flex items-center gap-1' }, [
  h('svg', { viewBox: '0 0 38 38', class: 'h-7 w-auto', fill: 'none' }, [
    h('rect', { width: '38', height: '38', rx: '8', fill: 'url(#logoGradient)' }),
    h('circle', { cx: '19', cy: '19', r: '8', fill: 'white' })
  ]),
  h('span', { class: 'text-xl font-bold text-text-primary' }, 'Untitled UI')
])

// Credit Card Component
const CreditCard = defineComponent({
  props: { name: String, date: String },
  setup(props) {
    return () => h('div', { class: 'w-80 h-48 rounded-2xl bg-gradient-to-tr from-brand-900 to-brand-700 p-4 text-white shadow-lg' }, [
      h('div', { class: 'flex justify-between items-start' }, [
        h('span', { class: 'font-semibold' }, 'Untitled.'),
        h('svg', { viewBox: '0 0 24 24', class: 'w-6 h-6', fill: 'none', stroke: 'currentColor' }, [
          h('path', { d: 'M12 2v20M2 12h20', strokeWidth: '2', strokeLinecap: 'round' })
        ])
      ]),
      h('div', { class: 'mt-8 flex justify-between items-end' }, [
        h('div', {}, [
          h('p', { class: 'text-xs uppercase tracking-wider' }, props.name),
          h('p', { class: 'text-lg font-mono tracking-wider mt-1' }, '•••• •••• •••• 1234')
        ]),
        h('p', { class: 'text-xs' }, props.date)
      ])
    ])
  }
})

// Credit Card Glass Component
const CreditCardGlass = defineComponent({
  props: { name: String, date: String },
  setup(props) {
    return () => h('div', { class: 'w-80 h-48 rounded-2xl bg-black/10 backdrop-blur-md border border-white/20 p-4 text-white' }, [
      h('div', { class: 'flex justify-between items-start' }, [
        h('span', { class: 'font-semibold' }, 'Untitled.'),
        h('svg', { viewBox: '0 0 24 24', class: 'w-6 h-6', fill: 'none', stroke: 'currentColor' }, [
          h('path', { d: 'M12 2v20M2 12h20', strokeWidth: '2', strokeLinecap: 'round' })
        ])
      ]),
      h('div', { class: 'mt-8 flex justify-between items-end' }, [
        h('div', {}, [
          h('p', { class: 'text-xs uppercase tracking-wider' }, props.name),
          h('p', { class: 'text-lg font-mono tracking-wider mt-1' }, '•••• •••• •••• 1234')
        ]),
        h('p', { class: 'text-xs' }, props.date)
      ])
    ])
  }
})

// Feature Item Component
const FeatureItem = defineComponent({
  props: { icon: String, title: String, description: String },
  setup(props) {
    return () => h('li', {}, [
      h('div', { class: 'flex max-w-140 gap-4' }, [
        h('div', { class: 'hidden md:flex size-12 rounded-[10px] bg-bg-primary shadow-xs ring-1 ring-border-primary text-text-secondary items-center justify-center' }, [
          h('div', { class: `i-${props.icon} size-6` })
        ]),
        h('div', { class: 'flex md:hidden size-10 rounded-lg bg-bg-primary shadow-xs ring-1 ring-border-primary text-text-secondary items-center justify-center' }, [
          h('div', { class: `i-${props.icon} size-5` })
        ]),
        h('div', { class: 'flex flex-col items-start gap-4' }, [
          h('div', {}, [
            h('h3', { class: 'mt-1.5 text-lg font-semibold text-text-primary md:mt-2.5' }, props.title),
            h('p', { class: 'mt-1 text-md text-text-tertiary' }, props.description)
          ]),
          h('UButton', { label: 'Learn more', variant: 'link', color: 'primary', to: '#' })
        ])
      ])
    ])
  }
})

// Pricing Card Component
const PricingCard = defineComponent({
  props: { title: String, price: String, features: String, isPopular: Boolean },
  setup(props) {
    const featureList = computed(() => props.features.split(', '))
    return () => h('div', { class: 'relative flex flex-col rounded-2xl bg-bg-primary shadow-lg ring-1 ring-border-secondary_alt' }, [
      props.isPopular && h('div', { class: 'absolute -top-6 right-2 md:-right-16' }, [
        h('div', { class: 'flex text-text-brand-secondary' }, [
          h('svg', { viewBox: '0 0 60 46', class: 'w-12', fill: 'currentColor' }, [
            h('path', { d: 'M9.22056 42.4485C9.06321 43.2619 9.595 44.0488 10.4084 44.2061C11.2217 44.3635 12.0086 43.8317 12.166 43.0184L9.22056 42.4485ZM50.5841 3.7912C51.405 3.68023 51.9806 2.92474 51.8696 2.10378C51.7586 1.28282 51.0032 0.707267 50.1822 0.818242L50.5841 3.7912ZM4.78725 32.3308C4.36038 31.6208 3.43878 31.3913 2.7288 31.8182C2.01882 32.2451 1.78931 33.1667 2.21618 33.8766L4.78725 32.3308Z' })
          ]),
          h('span', { class: '-mt-2 text-sm font-semibold' }, 'Most popular!')
        ])
      ]),
      h('div', { class: 'flex flex-col items-center px-6 pt-10 text-center md:px-8' }, [
        h('h2', { class: 'text-display-md font-semibold text-text-primary md:text-display-lg' }, `${props.price}/mth`),
        h('p', { class: 'mt-4 text-xl font-semibold text-text-primary md:text-xl' }, props.title),
        h('p', { class: 'mt-1 text-md text-text-tertiary' }, 'Billed annually.')
      ]),
      h('ul', { class: 'flex flex-col gap-4 px-6 pt-8 pb-8 md:p-8 md:pb-10' }, featureList.value.map(feature =>
        h('li', { class: 'flex gap-3' }, [
          h('div', { class: 'flex shrink-0 items-center justify-center rounded-full bg-bg-success-secondary text-icon-success size-6' }, [
            h('svg', { viewBox: '0 0 13 11', class: 'w-3', fill: 'currentColor' }, [
              h('path', { d: 'M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037Z' })
            ])
          ]),
          h('span', { class: 'text-text-tertiary text-md' }, feature)
        ])
      )),
      h('div', { class: 'mt-auto flex flex-col gap-3 px-6 pb-8 md:px-8' }, [
        h('UButton', { label: 'Get started', color: 'primary', block: true })
      ])
    ])
  }
})

// Feature Card Component
const FeatureCard = defineComponent({
  props: { icon: String, title: String, description: String },
  setup(props) {
    return () => h('li', {}, [
      h('div', { class: 'flex max-w-sm flex-col items-center gap-4 text-center' }, [
        h('div', { class: 'hidden md:flex size-12 rounded-[10px] bg-bg-primary shadow-xs ring-1 ring-border-primary text-text-secondary items-center justify-center' }, [
          h('div', { class: `i-${props.icon} size-6` })
        ]),
        h('div', { class: 'flex md:hidden size-10 rounded-lg bg-bg-primary shadow-xs ring-1 ring-border-primary text-text-secondary items-center justify-center' }, [
          h('div', { class: `i-${props.icon} size-5` })
        ]),
        h('div', {}, [
          h('h3', { class: 'text-lg font-semibold text-text-primary' }, props.title),
          h('p', { class: 'mt-1 text-md text-text-tertiary' }, props.description)
        ])
      ])
    ])
  }
})

// Feature Tab Component
const FeatureTab = defineComponent({
  props: { title: String, description: String, isActive: Boolean },
  setup(props) {
    return () => h('li', {}, [
      h('div', { class: `relative flex cursor-pointer flex-col items-start gap-4 border-l-4 py-4 pl-5 transition duration-100 ease-linear hover:border-border-brand ${props.isActive ? 'border-border-brand' : 'border-border-tertiary'}` }, [
        h('div', {}, [
          h('h3', { class: 'text-lg font-semibold text-text-primary' }, props.title),
          h('p', { class: 'mt-1 text-md text-text-tertiary' }, props.description)
        ]),
        h('UButton', { label: 'Learn more', variant: 'link', color: 'primary', to: '#' })
      ])
    ])
  }
})

// Integration Item Component
const IntegrationItem = defineComponent({
  props: { name: String, description: String, logo: String },
  setup(props) {
    return () => h('li', {}, [
      h('div', { class: 'flex max-w-sm flex-col items-center gap-4 text-center' }, [
        h('div', { class: 'flex size-13 shrink-0 items-center justify-center rounded-lg bg-bg-primary shadow-xs ring-1 ring-border-secondary ring-inset md:size-16 md:rounded-xl' }, [
          h('img', { src: props.logo, alt: props.name, class: 'size-12 md:size-14' })
        ]),
        h('div', { class: 'flex flex-col items-center gap-4' }, [
          h('div', {}, [
            h('h3', { class: 'text-lg font-semibold text-text-primary' }, props.name),
            h('p', { class: 'mt-1 text-md text-text-tertiary' }, props.description)
          ]),
          h('UButton', { label: 'View integration', variant: 'link', color: 'primary', to: '#' })
        ])
      ])
    ])
  }
})
</script>

<style>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Container width */
.max-w-container {
  max-width: 1560px;
}
</style>
