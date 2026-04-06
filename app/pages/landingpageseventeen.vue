<script setup lang="ts">
const heroStats = [
  { label: 'Teams adopting', value: '7,400+' },
  { label: 'Avg. launch time', value: '1.5 days' },
  { label: 'Signal lift', value: '+85%' },
]

const heroHighlights = [
  'Geo gradients, floating dots, and portrait imagery',
  'Desktop + mobile mockups framed with glass blur',
  'CTA grid blending proof, pricing, and FAQ cues',
]

const logoRows = [
  ['catalog', 'pictel-ai', 'leapyear', 'peregrin'],
  ['easy-tax', 'core-os', 'warpspeed'],
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
  'zendesk',
]

const proofSections = [
  {
    title: 'Geo hero',
    description: 'Geo-shape gradients, portrait imagery, and dot textures keep the hero energetic and editable.',
  },
  {
    title: 'Proof stack',
    description: 'Logo clouds, testimonials, and stats reassure visitors before the CTA array.',
  },
  {
    title: 'Conversion loop',
    description: 'Pricing tiers, FAQ rows, and button rows guide visitors toward the next action.',
  },
]

const testimonials = [
  {
    quote: 'Landing page 15 now mirrors the Empower hero while letting us inject our own portraits and copy instantly.',
    author: 'Mathilde Lewis · Experiences, Leapyear',
  },
  {
    quote: 'The structured hero, proof, and CTA arrays made shipping this Nuxt remix effortless.',
    author: 'Lana Steiner · Product, Core OS',
  },
]

const pricing = [
  {
    tier: 'Launch',
    price: '$129',
    cadence: '/month',
    description: 'Hero, proof, pricing, and CTA grid with docs.',
  },
  {
    tier: 'Momentum',
    price: '$269',
    cadence: '/month',
    description: 'Logo clouds, integrations, and conversion CTA rows.',
  },
  {
    tier: 'Enterprise',
    price: 'Custom',
    cadence: '/quote',
    description: 'Strategy partner, localization, and QA support.',
  },
]

const faqs = [
  {
    question: 'Can we swap the portraits?',
    answer: 'Yes, replace any image or embed video inside the hero frame without breaking the layout.',
  },
  {
    question: 'Will the logos stay aligned?',
    answer: 'Flex wrapping keeps logos centered no matter the count.',
  },
  {
    question: 'Can we add more pricing tiers?',
    answer: 'Add another object to the pricing array and a new card renders automatically.',
  },
]

definePageMeta({
  title: 'Landing Page 15 | Untitled UI Redux',
  meta: [
    {
      name: 'description',
      content: 'Nuxt remix of Untitled UI Landing page 15 with geo-hero, proof, pricing, and FAQ sections.',
    },
    { name: 'robots', content: 'index,follow' },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="sticky top-0 z-50 border-b border-white/5 bg-slate-950/90 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div class="flex items-center gap-3 text-lg font-semibold tracking-wide">
          <span class="text-brand-primary">Landing page 15</span>
          <span class="text-xs uppercase tracking-[0.5em] text-slate-500">Nuxt remix</span>
        </div>
        <nav class="hidden items-center gap-5 text-sm text-slate-300 md:flex">
          <a class="transition hover:text-white" href="#hero">Hero</a>
          <a class="transition hover:text-white" href="#proof">Proof</a>
          <a class="transition hover:text-white" href="#pricing">Pricing</a>
        </nav>
        <a
          class="rounded-full border border-slate-700 bg-brand-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:opacity-90"
          href="#pricing"
        >
          Download kit
        </a>
      </div>
    </header>

    <main class="space-y-12 pt-8">
      <section
        id="hero"
        class="relative overflow-hidden border-b border-white/5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 lg:px-8"
      >
        <div class="absolute inset-0">
          <div class="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_60%)] opacity-60"></div>
        </div>
        <div class="relative mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
          <div class="space-y-6 lg:max-w-2xl">
            <p class="text-xs uppercase tracking-[0.6em] text-slate-500">Untitled UI Redux</p>
            <h1 class="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Landing page 15 — geo hero, proof, and CTA grid rebuilt with Nuxt.
            </h1>
            <p class="text-base text-slate-300">
              Geo gradients, dotted textures, and portrait imagery keep the reference alive while the layout remains configurable through Vue data.
            </p>
            <div class="flex flex-wrap gap-3">
              <a
                class="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                href="#proof"
              >
                View proof
              </a>
              <a
                class="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60"
                href="#pricing"
              >
                See pricing
              </a>
            </div>
            <div class="flex flex-wrap gap-6 text-sm font-semibold text-slate-300">
              <div v-for="stat in heroStats" :key="stat.label" class="space-y-1">
                <p class="text-2xl font-bold text-white">{{ stat.value }}</p>
                <p class="text-[10px] uppercase tracking-[0.4em] text-slate-500">{{ stat.label }}</p>
              </div>
            </div>
          </div>
          <div class="relative flex-1 overflow-hidden rounded-[38px] border border-white/5 bg-slate-900/60 p-6 shadow-[0_35px_120px_rgba(15,23,42,0.85)]">
            <div class="absolute inset-0 rounded-[38px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_70%)]"></div>
            <div class="relative space-y-6">
              <p class="text-xs uppercase tracking-[0.5em] text-slate-400">Geo hero treatment</p>
              <h2 class="text-2xl font-semibold text-white">Patterned mockups</h2>
              <p class="text-sm text-slate-300">
                Dual portraits, gradients, and blur overlays keep the hero faithful to the original while remaining editable.
              </p>
              <ul class="space-y-2 text-sm text-slate-200">
                <li v-for="feature in heroHighlights" :key="feature" class="flex items-start gap-2">
                  <span class="mt-1 h-2 w-2 rounded-full bg-brand-primary"></span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="proof" class="border-b border-white/5 px-4 py-12 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-10">
          <div>
            <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Proof</p>
            <h2 class="text-3xl font-semibold text-white sm:text-4xl">Logo clouds, testimonials, and proof cards</h2>
          </div>
          <div class="grid gap-6 md:grid-cols-3">
            <article
              v-for="section in proofSections"
              :key="section.title"
              class="rounded-3xl border border-white/5 bg-white/5 p-6 transition hover:border-brand-primary hover:bg-white/10"
            >
              <h3 class="text-lg font-semibold text-white">{{ section.title }}</h3>
              <p class="mt-3 text-sm text-slate-300">{{ section.description }}</p>
            </article>
          </div>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article
              v-for="quote in testimonials"
              :key="quote.author"
              class="space-y-3 rounded-3xl border border-white/5 bg-slate-900/60 p-6 text-sm text-slate-200"
            >
              <p class="text-base text-white">“{{ quote.quote }}”</p>
              <p class="text-xs uppercase tracking-[0.4em] text-slate-500">{{ quote.author }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-slate-950 px-4 py-12 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-10">
          <div>
            <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Logo clouds</p>
            <div class="flex flex-wrap items-center gap-6">
              <div v-for="row in logoRows" :key="row.join('-')" class="flex flex-wrap items-center gap-6">
                <div
                  v-for="logo in row"
                  :key="logo"
                  class="flex h-12 w-32 items-center justify-center opacity-70 transition hover:opacity-100"
                >
                  <img
                    :src="`https://www.untitledui.com/logos/logotype/color/${logo}.svg`"
                    :alt="logo"
                    class="max-h-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Integrations</p>
            <div class="grid gap-4 sm:grid-cols-3 md:grid-cols-4">
              <div
                v-for="integration in integrationLogos"
                :key="integration"
                class="flex h-12 items-center justify-center rounded-3xl border border-white/5 bg-white/5 p-3"
              >
                <img
                  :src="`https://www.untitledui.com/logos/integrations/${integration}.svg`"
                  :alt="integration"
                  class="max-h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" class="border-b border-white/5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-6 text-center">
          <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Pricing</p>
          <h2 class="text-3xl font-semibold text-white sm:text-4xl">Choose the tier that matches your rollout</h2>
        </div>
        <div class="mx-auto mt-10 grid gap-6 md:grid-cols-3">
          <article
            v-for="plan in pricing"
            :key="plan.tier"
            class="flex flex-col gap-4 rounded-[28px] border border-white/5 bg-white/5 p-6 transition hover:border-brand-primary hover:bg-white/10"
          >
            <header class="space-y-2">
              <h3 class="text-xl font-semibold text-white">{{ plan.tier }}</h3>
              <p class="text-sm uppercase tracking-[0.4em] text-slate-400">Starting at</p>
            </header>
            <div class="flex items-baseline gap-2">
              <p class="text-4xl font-semibold text-white">{{ plan.price }}</p>
              <p class="text-sm text-slate-400">{{ plan.cadence }}</p>
            </div>
            <p class="text-sm text-slate-300">{{ plan.description }}</p>
            <button
              class="mt-auto rounded-full border border-white/10 bg-brand-primary py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Choose {{ plan.tier }}
            </button>
          </article>
        </div>
      </section>

      <section class="bg-slate-950 px-4 py-12 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-6 text-center">
          <p class="text-xs uppercase tracking-[0.4em] text-slate-500">FAQ</p>
          <h2 class="text-3xl font-semibold text-white sm:text-4xl">Still curious?</h2>
        </div>
        <div class="mx-auto mt-10 grid gap-6 md:grid-cols-3">
          <article
            v-for="faq in faqs"
            :key="faq.question"
            class="rounded-3xl border border-white/5 bg-white/5 p-6 text-sm text-slate-300 transition hover:border-brand-primary hover:bg-white/10"
          >
            <h3 class="text-base font-semibold text-white">{{ faq.question }}</h3>
            <p class="mt-3 leading-relaxed">{{ faq.answer }}</p>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
:global(.text-brand-primary) {
  color: #22d3ee;
}

:global(.bg-brand-primary) {
  background-color: #22d3ee;
}
</style>
