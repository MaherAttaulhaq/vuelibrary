<script setup lang="ts">
const heroStats = [
  { label: 'Teams trusting the page', value: '1,200+' },
  { label: 'Avg. launch time', value: '2 weeks' },
  { label: 'Conversion lift', value: '+38%' },
]

const logos = ['odeao-labs', 'kintsugi', 'stacked-lab', 'magnolia', 'warpspeed', 'sisyphus']

const features = [
  {
    title: 'Gradient depth & grid',
    description: 'Multi-layered gradients, pattern overlays, and soft glow elements matched the original Untitled UI aesthetic.',
  },
  {
    title: 'Visual storytelling',
    description: 'Mockups for desktop + mobile and illustrated steps keep the product narrative grounded in real use cases.',
  },
  {
    title: 'Tailwind-ready copy',
    description: 'Typography, microcopy, and CTAs align with the source while remaining easy to customize in Vue.',
  },
  {
    title: 'Global hero control',
    description: 'Scroll-smooth layout, sticky nav, and CTA pairings focus visitors on the momentum points.',
  },
]

const roadmap = [
  {
    title: 'Mockups',
    detail: 'Desktop & mobile screens, gradients, and pattern overlays from the source file.',
  },
  {
    title: 'Proof & stats',
    detail: 'Testimonials, logos, and hero stats prove the credibility of the story.',
  },
  {
    title: 'Conversion stack',
    detail: 'Pricing tiers, CTA cards, and FAQ anchor the finish line.',
  },
]

const testimonials = [
  {
    quote: 'The layered hero and mockups make every launch feel premium.',
    author: 'Amelie Laurent · VP Product, Wildcrafted',
  },
  {
    quote: 'Untitled UI inspired copy plus Vue components means we launch faster with better polish.',
    author: 'Marco Kelly · Growth Lead, Magnolia',
  },
]

const pricing = [
  {
    tier: 'Launch',
    price: '$49',
    cadence: '/month',
    description: '1 brand kit, desktop + mobile hero layouts, and support during launch week.',
  },
  {
    tier: 'Scale',
    price: '$129',
    cadence: '/month',
    description: 'Multi-brand kits, CTA controls, and advanced proof/FAQ sections.',
  },
  {
    tier: 'Enterprise',
    price: 'Custom',
    cadence: '/quote',
    description: 'Dedicated strategist, compliance review, and localization assets.',
  },
]

definePageMeta({
  title: 'Landing Page 02 | Untitled UI Studio',
  meta: [
    { name: 'description', content: 'Rebuild of Untitled UI Landing page 01 with Nuxt + Vue components.' },
    { name: 'robots', content: 'index,follow' },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div class="flex items-center gap-2 text-xl font-semibold">
          <span class="text-brand-primary">Landing page 01</span>
          <span class="text-xs uppercase tracking-[0.5em] text-slate-500">Untitled UI</span>
        </div>
        <nav class="hidden items-center gap-5 text-sm text-slate-300 md:flex">
          <a class="transition hover:text-white" href="#hero">Hero</a>
          <a class="transition hover:text-white" href="#logos">Logos</a>
          <a class="transition hover:text-white" href="#features">Features</a>
          <a class="transition hover:text-white" href="#pricing">Pricing</a>
        </nav>
        <a class="rounded-full border border-slate-700 bg-brand-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:opacity-90" href="#hero">
          Get the kit
        </a>
      </div>
    </header>

    <main class="pt-8">
      <section
        id="hero"
        class="relative overflow-hidden border-b border-white/5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 lg:px-8"
      >
        <div class="absolute inset-0 opacity-40">
          <div class="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.3),_transparent_55%)]"></div>
        </div>
        <div class="relative mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
          <div class="space-y-6 lg:max-w-2xl">
            <p class="text-xs uppercase tracking-[0.6em] text-slate-500">Untitled UI</p>
            <h1 class="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Landing page 01 — build a premium hero with proof and pilot-ready CTAs.
            </h1>
            <p class="text-base text-slate-300">
              Recreate the Untitled UI experience with Nuxt-friendly Vue components, Tailwind tokens, and the same
              storytelling logic as the source HTML.
            </p>
            <div class="flex flex-wrap gap-3">
              <a class="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100" href="#features">
                Explore layout
              </a>
              <a class="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60" href="#pricing">
                View pricing
              </a>
            </div>
            <div class="flex flex-wrap gap-6 text-sm font-semibold text-slate-300">
              <div v-for="stat in heroStats" :key="stat.label" class="space-y-1">
                <p class="text-2xl font-bold text-white">{{ stat.value }}</p>
                <p class="text-[10px] uppercase tracking-[0.4em] text-slate-500">{{ stat.label }}</p>
              </div>
            </div>
          </div>
          <div class="relative flex-1 overflow-hidden rounded-[38px] border border-white/5 bg-slate-900/60 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.8)]">
            <div class="absolute inset-0 rounded-[38px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]"></div>
            <div class="relative space-y-6">
              <p class="text-xs uppercase tracking-[0.5em] text-slate-400">Dashboard mockups</p>
              <h2 class="text-2xl font-semibold text-white">Desktop + mobile perfection</h2>
              <p class="text-sm text-slate-300">
                Gradient glows, dot grids, and premium copy follow the original Next.js export while staying editable here.
              </p>
              <div class="grid gap-3 sm:grid-cols-2">
                <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                  Desktop mockup gradient
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                  Mobile companion screen
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="logos" class="border-b border-white/5 px-4 py-12 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl">
          <div class="flex flex-wrap items-center justify-center gap-10">
            <div v-for="logo in logos" :key="logo" class="flex h-10 w-32 items-center justify-center opacity-70 transition hover:opacity-100">
              <img
                :src="`https://www.untitledui.com/logos/logotype/color/${logo}.svg`"
                :alt="logo"
                class="max-h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-6">
          <div class="space-y-3 text-center">
            <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Features</p>
            <h2 class="text-3xl font-semibold text-white sm:text-4xl">Design choices from the original HTML</h2>
          </div>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <article
              v-for="feature in features"
              :key="feature.title"
              class="rounded-3xl border border-white/5 bg-white/5 p-6 transition hover:border-brand-primary hover:bg-white/10"
            >
              <h3 class="text-lg font-semibold text-white">{{ feature.title }}</h3>
              <p class="mt-3 text-sm leading-relaxed text-slate-300">{{ feature.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="border-b border-white/5 px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-10 lg:grid lg:grid-cols-[1.1fr,0.9fr] lg:gap-12 lg:items-center">
          <div class="space-y-4">
            <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Roadmap</p>
            <h2 class="text-3xl font-semibold text-white sm:text-4xl">Recreated layout story</h2>
            <div class="space-y-4">
              <article
                v-for="step in roadmap"
                :key="step.title"
                class="rounded-3xl border border-white/5 bg-slate-900/60 p-5 text-sm text-slate-300"
              >
                <p class="text-xs uppercase tracking-[0.4em] text-slate-500">{{ step.title }}</p>
                <p class="mt-2 font-semibold text-white">{{ step.detail }}</p>
              </article>
            </div>
          </div>
          <div class="space-y-4">
            <div class="rounded-3xl border border-white/5 bg-white/5 p-6 text-sm text-slate-200">
              <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Testimonials</p>
              <div class="mt-6 space-y-5">
                <article
                  v-for="quote in testimonials"
                  :key="quote.author"
                  class="space-y-2 rounded-2xl border border-white/10 bg-slate-900/40 p-4"
                >
                  <p class="text-sm text-slate-200">“{{ quote.quote }}”</p>
                  <p class="text-sm font-semibold text-white">{{ quote.author }}</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" class="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-6 text-center">
          <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Pricing</p>
          <h2 class="text-3xl font-semibold text-white sm:text-4xl">Choose a plan that mirrors the launch pace</h2>
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
