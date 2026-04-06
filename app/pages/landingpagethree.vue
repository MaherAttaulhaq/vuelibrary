<script setup lang="ts">
const heroStats = [
  { label: 'Precision launches', value: '1,500+' },
  { label: 'Avg. deployment', value: '10 days' },
  { label: 'Conversion boost', value: '+45%' },
]

const logoPartners = ['odeao-labs', 'kintsugi', 'stacked-lab', 'magnolia', 'powersurge', 'warpspeed', 'leapyear', 'easy-tax']

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
  'g-calendar',
  'whatsapp',
  'discord',
  'bitbucket',
]

const sections = [
  {
    title: 'Pattern-rich hero',
    description: 'Pattern overlays, gradients, and mockups echo the Untitled UI feel while staying editable in Vue + Tailwind.',
  },
  {
    title: 'Structured trust',
    description: 'Logo clouds, testimonials, and CTA pairings document credibility without losing the narrative flow.',
  },
  {
    title: 'Conversion stack',
    description: 'Proof, stats, pricing, and FAQ sections finish the page with a clear action path.',
  },
]

const testimonials = [
  {
    quote: 'Detailed mockups plus CTA focus made our redesign feel premium instantly.',
    author: 'Jaya Willis · Product Design, Catalog',
  },
  {
    quote: 'The Untitled UI base combined with Nuxt components saved us weeks on the launch.',
    author: 'Nikolas Gibbons · Growth, Global Bank',
  },
]

const faqs = [
  {
    question: 'Can I swap the gradients?',
    answer: 'Yes. Every gradient, dot grid, and glow layer is defined with Tailwind tokens so you can swap palettes globally.',
  },
  {
    question: 'Does the kit include mobile mockups?',
    answer: 'Mobile and desktop mockups ship with layered blur/fade effects matching the source HTML.',
  },
  {
    question: 'Are the integrations real?',
    answer: 'The integration logos are placeholder assets, but the layout expects you to plug real data or embeds easily.',
  },
]

const pricing = [
  {
    tier: 'Launch',
    price: '$49',
    cadence: '/month',
    description: '1 brand kit, hero mockups, and launch-day support.',
  },
  {
    tier: 'Scale',
    price: '$129',
    cadence: '/month',
    description: 'Multi-brand kits, proof sections, and integration assets.',
  },
  {
    tier: 'Enterprise',
    price: 'Custom',
    cadence: '/quote',
    description: 'Dedicated strategist, compliance review, and localization guides.',
  },
]

definePageMeta({
  title: 'Landing Page 03 | Untitled UI Redux',
  meta: [
    { name: 'description', content: 'Nuxt recreation of Untitled UI Landing page 02 with hero, proof, and CTA sections.' },
    { name: 'robots', content: 'index,follow' },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="sticky top-0 z-50 border-b border-white/5 bg-slate-950/90 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div class="flex items-center gap-3 text-lg font-semibold tracking-wide">
          <span class="text-brand-primary">Landing page 02</span>
          <span class="text-xs uppercase tracking-[0.5em] text-slate-500">Nuxt remix</span>
        </div>
        <nav class="hidden items-center gap-5 text-sm text-slate-300 md:flex">
          <a class="transition hover:text-white" href="#hero">Hero</a>
          <a class="transition hover:text-white" href="#proof">Proof</a>
          <a class="transition hover:text-white" href="#integrations">Integrations</a>
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
          <div class="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.3),_transparent_55%)] opacity-60"></div>
        </div>
        <div class="relative mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
          <div class="space-y-6 lg:max-w-2xl">
            <p class="text-xs uppercase tracking-[0.6em] text-slate-500">Untitled UI</p>
            <h1 class="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Landing page 02 — full hero + credibility stack powered by Nuxt.
            </h1>
            <p class="text-base text-slate-300">
              Gradient depth, pattern overlays, mockups, and CTA pacing were rebuilt with Vue components so you can edit
              copy, replace images, and stay on-brand.
            </p>
            <div class="flex flex-wrap gap-3">
              <a class="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100" href="#proof">
                View proof
              </a>
              <a class="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60" href="#integrations">
                See integrations
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
              <p class="text-xs uppercase tracking-[0.5em] text-slate-400">Dashboard mockups</p>
              <h2 class="text-2xl font-semibold text-white">Desktop + mobile ready</h2>
              <p class="text-sm text-slate-300">
                Dot grids, gradients, and glow strokes match the Untitled UI design system. Replace the images with actual mockups or embed your canvas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="proof" class="border-b border-white/5 px-4 py-12 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-8">
          <div>
            <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Proof</p>
            <h2 class="text-3xl font-semibold text-white sm:text-4xl">Logos, testimonials, and CTA clarity</h2>
          </div>
          <div class="grid gap-6 md:grid-cols-3">
            <article
              v-for="section in sections"
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

      <section id="integrations" class="bg-slate-950 px-4 py-12 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-6">
          <div>
            <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Trusted by</p>
            <div class="flex flex-wrap items-center gap-6">
              <div
                v-for="logo in logoPartners"
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
            <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Integrations</p>
            <div class="mb-6 grid gap-4 sm:grid-cols-3 md:grid-cols-4">
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
            <div class="rounded-3xl border border-white/5 bg-slate-900/60 p-5 text-sm text-slate-300">
              <p>Replace logos with your own customer/integration assets. The grid adapts to any number of icons.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" class="border-b border-white/5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-6 text-center">
          <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Pricing</p>
          <h2 class="text-3xl font-semibold text-white sm:text-4xl">Choose a launch pace</h2>
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

      <section class="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-6 text-center">
          <p class="text-xs uppercase tracking-[0.4em] text-slate-500">FAQ</p>
          <h2 class="text-3xl font-semibold text-white sm:text-4xl">Need more certainty?</h2>
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
