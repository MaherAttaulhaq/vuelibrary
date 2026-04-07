<script setup lang="ts">
const heroStats = [
  { label: 'Teams going live', value: '4,200+' },
  { label: 'Avg. launch time', value: '4 days' },
  { label: 'Signal lift', value: '+68%' }
]

const heroHighlights = [
  'Light hero gradients with layered dots and glow',
  'Desktop + mobile mockups framed in rounded containers',
  'CTA stack blending proof, pricing, and FAQs'
]

const logoRows = [
  ['catalog', 'pictel-ai', 'leapyear', 'peregrin'],
  ['easy-tax', 'core-os']
]

const integrationLogos = [
  'notion',
  'slack',
  'google_drive',
  'intercom',
  'jira',
  'dropbox',
  'stripe',
  'zapier',
  'figma',
  'confluence',
  'mailchimp',
  'zendesk'
]

const proofSections = [
  {
    title: 'Layered hero',
    description: 'Gradient rings, blur masks, and grid dots recreate the Untitled UI tone in a fully editable Nuxt hero block.'
  },
  {
    title: 'Proof stack',
    description: 'Logo clouds, testimonials, and stats reinforce credibility before the CTA grid.'
  },
  {
    title: 'Conversion loop',
    description: 'Pricing cards, FAQs, and button rows give visitors clear next steps aligned with the original reference.'
  }
]

const testimonials = [
  {
    quote: 'Landing page 06 still looks like the source, but we can target it with our own logos and messaging instantly.',
    author: 'Mira Patel · Partnerships, Core OS'
  },
  {
    quote: 'The hero gradients, dots, and mockups shipped quickly thanks to the data-driven hero and CTA components.',
    author: 'Theo Schultz · Product, Catalog'
  }
]

const faqs = [
  {
    question: 'Can we swap the mockups?',
    answer: 'Yes, drop in your own desktop and mobile art or videos inside the hero container without breaking the layout.'
  },
  {
    question: 'Are logos responsive?',
    answer: 'Flex wrapping keeps logos aligned regardless of count while preserving spacing.'
  },
  {
    question: 'What if we need more tiers?',
    answer: 'Pricing cards are data-driven, so simply append new entries to the array and they appear automatically.'
  }
]

definePageMeta({
  title: 'Landing Page 06 | Untitled UI Redux',
  meta: [
    { name: 'description', content: 'Nuxt recreation of Untitled UI Landing page 06 with hero, proof, logos, and pricing.' },
    { name: 'robots', content: 'index,follow' }
  ]
})

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Hero',
    to: '#hero',
    active: route.hash === '#hero'
  },
  {
    label: 'Proof',
    to: '#proof',
    active: route.hash === '#proof'
  },
  {
    label: 'Pricing',
    to: '#pricing',
    active: route.hash === '#pricing'
  }
])

const pricing = [
  {
    tier: 'Solo',
    price: '$249',
    description: 'For bootstrappers and indie hackers.',
    features: [
      'One developer',
      'Unlimited projects',
      'GitHub access',
      'Lifetime updates'
    ]
  },
  {
    tier: 'Pro',
    price: '$499',
    description: 'For growing startups.',
    features: [
      '5 developers',
      'Priority support',
      'Advanced features'
    ]
  },
  {
    tier: 'Team',
    price: '$999',
    description: 'For scaling teams.',
    features: [
      'Unlimited developers',
      'Dedicated support',
      'All features'
    ]
  }
]
</script>

<template>
  <UContainer class="min-h-screen bg-gray-950 text-gray-100">
    <UHeader
      class="sticky top-0 z-50 border-b border-white/5 bg-gray-950/90 backdrop-blur"
    >
      <!-- LEFT (LOGO / TITLE) -->
      <template #title>
        <div>
          <span class="text-lg uppercase text-primary">
            Nuxt remix
          </span>
        </div>
      </template>

      <!-- CENTER NAV -->
      <UNavigationMenu
        :items="items"
        class="hidden text-sm text-gray-300 md:flex"
      />

      <!-- RIGHT CTA -->
      <template #right>
        <UButton
          to="#pricing"
          color="neutral"
          variant="outline"
          size="sm"
          class="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em]"
        >
          Download
        </UButton>
      </template>

      <!-- MOBILE MENU -->
      <template #body>
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          class="-mx-2.5"
        />
      </template>
    </UHeader>

    <main class="space-y-12 pt-8">
      <!-- Hero Section -->
      <section
        id="hero"
        class="relative overflow-hidden border-b border-white/5 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-4 py-16 sm:px-6 lg:px-8"
      >
        <div class="absolute inset-0">
          <div class="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.35),_transparent_60%)] opacity-70" />
        </div>
        <div class="relative mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
          <div class="space-y-6 lg:max-w-2xl">
            <UBadge color="neutral" variant="subtle" class="text-xs uppercase tracking-[0.6em]">
              Untitled UI Redux
            </UBadge>
            <h1 class="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Landing page 06 — hero, proof, and CTA stack reborn in Nuxt with editable assets.
            </h1>
            <p class="text-base text-gray-300">
              Patterned dots, glow gradients, and rounded mockups replicate the original while staying configurable through data.
            </p>
            <div class="flex flex-wrap gap-3">
              <UButton color="white" size="lg" href="#proof">
                View proof
              </UButton>
              <UButton color="neutral" variant="outline" size="lg" href="#pricing">
                See pricing
              </UButton>
            </div>
            <div class="flex flex-wrap gap-6 text-sm font-semibold text-gray-300">
              <div
                v-for="stat in heroStats"
                :key="stat.label"
                class="space-y-1"
              >
                <p class="text-2xl font-bold text-white">
                  {{ stat.value }}
                </p>
                <UBadge color="neutral" variant="subtle" class="text-[10px] uppercase tracking-[0.4em]">
                  {{ stat.label }}
                </UBadge>
              </div>
            </div>
          </div>
          <UCard class="relative flex-1 overflow-hidden border-white/5 bg-gray-900/60 p-6 shadow-[0_35px_120px_rgba(15,23,42,0.85)] rounded-3xl" :ui="{ body: 'p-0', background: 'bg-transparent', ring: '', rounded: 'rounded-[38px]' }">
            <div class="absolute inset-0  bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_70%)]" />
            <div class="relative space-y-6 p-6">
              <p class="text-xs uppercase tracking-[0.5em] text-gray-400">
                Layered hero treatment
              </p>
              <h2 class="text-2xl font-semibold text-white">
                Patterned mockups
              </h2>
              <p class="text-sm text-gray-300">
                Dot grids, blur masks, and gradients keep the hero faithful to the Untitled UI reference while staying editable.
              </p>
              <ul class="space-y-2 text-sm text-gray-200">
                <li
                  v-for="feature in heroHighlights"
                  :key="feature"
                  class="flex items-start gap-2"
                >
                  <span class="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Proof Section -->
      <section
        id="proof"
        class="border-b border-white/5 px-4 py-12 sm:px-6 lg:px-8"
      >
        <div class="mx-auto max-w-6xl space-y-10">
          <div>
            <UBadge color="neutral" variant="subtle" class="text-xs uppercase tracking-[0.4em]">
              Proof
            </UBadge>
            <h2 class="text-3xl my-1.5 font-semibold text-white sm:text-4xl">
              Logo clouds, testimonials, and proof cards
            </h2>
          </div>
          <div class="grid gap-6 md:grid-cols-3">
            <UCard
              v-for="section in proofSections"
              :key="section.title"
              class="border-white/5 bg-white/5 transition hover:border-primary hover:bg-white/15"
            >
              <h3 class="text-lg font-semibold text-white">
                {{ section.title }}
              </h3>
              <p class="mt-3 text-sm text-gray-300">
                {{ section.description }}
              </p>
            </UCard>
          </div>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <UCard
              v-for="quote in testimonials"
              :key="quote.author"
              class="border-white/5 bg-white/5 transition hover:border-primary hover:bg-white/15"
              :ui="{ body: 'p-6' }"
            >
              <p class="text-base text-white">
                “{{ quote.quote }}”
              </p>
              <p class="text-xs uppercase tracking-[0.4em] text-gray-500">
                {{ quote.author }}
              </p>
            </UCard>
          </div>
        </div>
      </section>

      <!-- Logo Clouds & Integrations -->
      <section class="bg-gray-950 px-4 py-12 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-10">
          <div>
            <UBadge color="neutral" variant="subtle" class="text-xs uppercase tracking-[0.4em] my-1.5">
              Logo clouds
            </UBadge>
            <div class="flex flex-wrap items-center gap-6">
              <div
                v-for="row in logoRows"
                :key="row.join('-')"
                class="flex flex-wrap items-center gap-6"
              >
                <div
                  v-for="logo in row"
                  :key="logo"
                  class="flex h-12 w-32 items-center justify-center opacity-70 transition hover:opacity-100"
                >
                  <img
                    :src="`https://www.untitledui.com/logos/logotype/${row === logoRows[1] ? 'white' : 'color'}/${logo}.svg`"
                    :alt="logo"
                    class="max-h-full"
                    loading="lazy"
                  >
                </div>
              </div>
            </div>
          </div>
          <div>
            <UBadge color="neutral" variant="subtle" class="text-xs my-1.5 uppercase tracking-[0.4em]">
              Integrations
            </UBadge>
            <div class="grid gap-4 sm:grid-cols-3 md:grid-cols-4 ">
              <div
                v-for="integration in integrationLogos"
                :key="integration"
                class="flex h-12 items-center justify-center hover:bg-white/20 rounded-3xl  border border-white/5 bg-white/5 p-3"
              >
                <img
                  :src="`https://www.untitledui.com/logos/integrations/${integration}.svg`"
                  :alt="integration"
                  class="max-h-full"
                  loading="lazy"
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Section -->
<section
    id="pricing"
    class="border-b border-white/5 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-4 py-16 sm:px-6 lg:px-8"
  >
    <div class="mx-auto max-w-6xl space-y-6 text-center">
      <UBadge color="neutral" variant="subtle" class="text-xs uppercase tracking-[0.4em]">
        Pricing
      </UBadge>

      <h2 class="text-3xl font-semibold text-white sm:text-4xl">
        Pick the tier that matches your rollout
      </h2>
    </div>

    <div class="mx-auto mt-10 grid gap-6 md:grid-cols-3">
      <UPricingPlan
        v-for="plan in pricing"
        :key="plan.tier"
        :title="plan.tier"
        :description="plan.description"
        :price="plan.price"
        :features="plan.features"
        :button="{
          label: `Choose ${plan.tier}`
        }"
        variant="subtle"
      />
    </div>
  </section>

      <!-- FAQ Section -->
      <section class="bg-gray-950 px-4 py-12 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-6 text-center">
          <UBadge color="neutral" variant="subtle" class="text-xs uppercase tracking-[0.4em]">
            FAQ
          </UBadge>
          <h2 class="text-3xl font-semibold text-white sm:text-4xl">
            Still curious?
          </h2>
        </div>
        <div class="mx-auto mt-10 grid gap-6 md:grid-cols-3">
          <UCard
            v-for="faq in faqs"
            :key="faq.question"
            class="border-white/5 bg-white/5 text-sm text-gray-300 transition hover:border-primary hover:bg-white/10"
          >
            <h3 class="text-base font-semibold text-white">
              {{ faq.question }}
            </h3>
            <p class="mt-3 leading-relaxed">
              {{ faq.answer }}
            </p>
          </UCard>
        </div>
      </section>
    </main>
  </UContainer>
</template>