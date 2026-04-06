<script setup lang="ts">
const heroStats = [
  { label: 'Teams shipping', value: '3,100+' },
  { label: 'Avg. launch time', value: '5 days' },
  { label: 'Conversion lift', value: '+65%' },
]

const heroHighlights = [
  'Light accent gradients + patterned dots',
  'Desktop + mobile mockups w/ blur layers',
  'CTA grid with proof + pricing + FAQ',
]

const primaryLogos = ['odeao-labs', 'kintsugi', 'stacked-lab', 'magnolia', 'warpspeed', 'sisyphus']
const secondaryLogos = ['global-bank', '3portals', 'ikigai-labs']
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
    title: 'Pattern-rich hero',
    description: 'Dot grids, gradient glows, and mockups replicate the Untitled UI tone while staying editable.',
  },
  {
    title: 'Logo clouds',
    description: 'Partners and integrations prove ecosystem depth without crowding the layout.',
  },
  {
    title: 'Conversion stack',
    description: 'Testimonials, pricing, and CTA cards finish the story with clear next steps.',
  },
]

const testimonials = [
  {
    quote: 'The hero gradients and mockups matched the reference while letting us inject our brand assets.',
    author: 'Annie Stanley · Marketing, Core OS',
  },
  {
    quote: 'We shipped the full deck in a week thanks to the structured Nuxt components.',
    author: 'Johnny Bell · Product Ops, Pictel AI',
  },
]

const pricing = [
  {
    tier: 'Launch',
    price: '$89',
    cadence: '/month',
    description: 'Hero, proof, CTA grid, and documentation.',
  },
  {
    tier: 'Growth',
    price: '$189',
    cadence: '/month',
    description: 'Multi-brand kits, logos, integrations, and proof variants.',
  },
  {
    tier: 'Enterprise',
    price: 'Custom',
    cadence: '/quote',
    description: 'Strategy partner, localization, and QA.',
  },
]

const faqs = [
  {
    question: 'Are the mockups swappable?',
    answer: 'Yes, swap the desktop + mobile imagery or embed your own renders inside the hero container.',
  },
  {
    question: 'Will the logos stay aligned?',
    answer: 'The flex grids auto-space logos and badges regardless of count.',
  },
  {
    question: 'Can I add more pricing tiers?',
    answer: 'Each card is driven by data arrays, so you can append tiers easily.',
  },
]

definePageMeta({
  title: 'Landing Page 07 | Untitled UI Redux',
  meta: [
    { name: 'description', content: 'Nuxt recreation of Untitled UI Landing page 05 with hero, logos, and CTA stack.' },
    { name: 'robots', content: 'index,follow' },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="sticky top-0 z-50 border-b border-white/5 bg-slate-950/90 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div class="flex items-center gap-3 text-lg font-semibold tracking-wide">
          <span class="text-brand-primary">Landing page 06</span>
          <span class="text-xs uppercase tracking-[0.5em] text-slate-500">Nuxt remix</span>
        </div>
        <nav class="hidden items-center gap-5 text-sm text-slate-300 md:flex">
          <a class="transition hover:text-white" href="#hero">Hero</a>
          <a class="transition hover:text-white" href="#proof">Proof</a>
          <a class="transition hover:text-white" href="#pricing">Pricing</a>
        </nav>
        <a class="rounded-full border border-slate-700 bg-brand-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:opacity-90" href="#pricing">
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
          <div class="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_55%)] opacity-60"></div>
        </div>
        <div class="relative mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
          <div class="space-y-6 lg:max-w-2xl">
            <p class="text-xs uppercase tracking-[0.6em] text-slate-500">Untitled UI Redux</p>
            <h1 class="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Landing page 06 — hero, proof, and CTA grid rebuilt with Nuxt.
            </h1>
            <p class="text-base text-slate-300">
              Accent gradients, dotted grids, and CTA pacing mimic the original template while staying configurable through data arrays.
            </p>
            <div class="flex flex-wrap gap-3">
              <a class="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100" href="#proof">
                View proof
              </a>
              <a class="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60" href="#pricing">
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
            <div class="absolute inset-0 rounded-[38px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)]"></div>
            <div class="relative space-y-6">
              <p class="text-xs uppercase tracking-[0.5em] text-slate-400">Light accent hero</p>
              <h2 class="text-2xl font-semibold text-white">Patterned mockups</h2>
              <p class="text-sm text-slate-300">
                Dot grids, gradients, and blur overlays keep the hero faithful to the source while remaining editable.
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
            <h2 class="text-3xl font-semibold text-white sm:text-4xl">Proof, logos, and testimonials</h2>
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
              <div
                v-for="logo in primaryLogos"
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
          <div>
            <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Secondary tiers</p>
            <div class="flex flex-wrap items-center gap-6">
              <div
                v-for="logo in secondaryLogos"
                :key="logo"
                class="flex h-12 w-32 items-center justify-center opacity-60 transition hover:opacity-100"
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
          <h2 class="text-3xl font-semibold text-white sm:text-4xl">Pick your launch tempo</h2>
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
            <button class="mt-auto rounded-full border border-white/10 bg-brand-primary py-3 text-sm font-semibold text-white transition hover:opacity-90">
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
