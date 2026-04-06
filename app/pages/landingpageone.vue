<script setup lang="ts">
const heroHighlights = [
  { label: 'Global reach', value: '120 countries' },
  { label: 'Avg. launch time', value: '9 days' },
  { label: 'Customers grow', value: '+320% faster' },
]

const featureGrid = [
  {
    title: 'Immersive hero layouts',
    description: 'Multi-layered gradients, glassmorphism, and responsive typography set the tone for high-impact launches.',
  },
  {
    title: 'Insight-driven sections',
    description: 'Strategy, metrics, and testimonials are pre-wired so you can tell a narrative without reinventing copy.',
  },
  {
    title: 'Developer-first tooling',
    description: 'Tailwind-ready design tokens, Vue components, and Nuxt-native loading states keep your engineers happy.',
  },
  {
    title: 'Conversion focussed copy',
    description: 'Headline + microcopy combinations make every CTA feel purpose-built and urgency-driven.',
  },
]

const roadmap = [
  { title: 'Phase 01', detail: 'Hero, trust badges, and navigation crafted for clarity.' },
  { title: 'Phase 02', detail: 'Feature grid, stats, and media-rich proof points drive trust.' },
  { title: 'Phase 03', detail: 'Pricing stack, CTA, and footer ready for immediate deployment.' },
]

const testimonials = [
  {
    quote: 'The landing page shipped in three days and already outperforms our previous hero by 42% engagement.',
    name: 'Noah Rigby · Design Lead',
    company: 'Pulseory',
  },
  {
    quote: 'Every block felt like it was designed for our vision. The grid, gradients, and microcopy all honored the brief.',
    name: 'Zara Al-Hashim · Head of Marketing',
    company: 'Northwind Studio',
  },
]

const pricing = [
  {
    title: 'Launch',
    price: '$29',
    cadence: '/mo',
    benefits: ['Full template access', 'Weekly office hours', 'Community Slack'],
  },
  {
    title: 'Scale',
    price: '$99',
    cadence: '/mo',
    benefits: ['Multiple brand kits', 'Priority support', 'Private Figma tokens', 'Design QA'],
    badge: 'Popular',
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    cadence: '/quote',
    benefits: ['Dedicated strategy partner', 'Custom analytics', 'Security review'],
  },
]

const faqs = [
  {
    question: 'How customizable is the kit?',
    answer: 'Every section is Tailwind/CSS vars ready. Swap imagery, colors, or text with zero rebuilds.',
  },
  {
    question: 'Is there a dark/light option?',
    answer: 'Yes, the kit ships with both gradients and layering systems so you can change palettes instantly.',
  },
  {
    question: 'Do you offer design reviews?',
    answer: 'Scale and Enterprise customers receive weekly design reviews and copy critiques from our team.',
  },
]

definePageMeta({
  title: 'Landing Page One — Modern Template Studio',
  meta: [
    {
      name: 'description',
      content: 'Landing Page One reimagines the Modern Template hero, pricing, and CTA story for Nuxt teams.',
    },
    { name: 'robots', content: 'index,follow' },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/90 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div class="flex items-center gap-2 text-lg font-semibold tracking-wider">
          <span class="text-brand-primary">LOGO</span>
          <span class="hidden text-xs text-slate-500 uppercase tracking-[0.4em] sm:inline">Landing Page One</span>
        </div>
        <nav class="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          <a class="transition hover:text-white" href="#hero">Hero</a>
          <a class="transition hover:text-white" href="#features">Features</a>
          <a class="transition hover:text-white" href="#pricing">Pricing</a>
          <a class="transition hover:text-white" href="#faqs">FAQ</a>
        </nav>
        <a class="rounded-full border border-slate-700 bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90" href="#pricing">
          Book demo
        </a>
      </div>
    </header>

    <main class="pt-24">
      <section id="hero" class="relative overflow-hidden border-b border-white/5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 lg:px-8">
        <div class="absolute inset-0 opacity-50">
          <div class="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-brand-primary/40 to-transparent"></div>
        </div>
        <div class="relative mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
          <div class="space-y-6 lg:max-w-2xl">
            <p class="inline-flex items-center gap-2 rounded-full border border-slate-800 px-3 py-1 text-[10px] uppercase tracking-[0.5em] text-brand-primary">
              New Arrival
            </p>
            <h1 class="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Launch fast with a landing page crafted for modern SaaS teams.
            </h1>
            <p class="text-base leading-relaxed text-slate-300">
              This marketing kit mirrors the original template—hero gradients, testimonial highlight, pricing table, and FAQs—all reimagined as Nuxt
              components ready for interpolation.
            </p>
            <div class="flex flex-wrap gap-3">
              <a class="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100" href="#features">
                Browse features
              </a>
              <a class="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60" href="#pricing">
                View pricing
              </a>
            </div>
            <div class="flex flex-wrap gap-8 text-sm font-semibold text-slate-300">
              <div v-for="item in heroHighlights" :key="item.label" class="space-y-1">
                <p class="text-xl font-bold text-white">{{ item.value }}</p>
                <p class="text-[10px] uppercase tracking-[0.4em] text-slate-500">{{ item.label }}</p>
              </div>
            </div>
          </div>
          <div class="relative flex-1 rounded-[32px] border border-white/5 bg-slate-900/60 p-6 shadow-[0_35px_100px_rgba(19,24,38,0.65)]">
            <div class="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_55%)]"></div>
            <div class="relative space-y-5">
              <p class="text-xs uppercase tracking-[0.5em] text-slate-400">Design system</p>
              <h2 class="text-2xl font-semibold text-white">Landing Page One</h2>
              <p class="text-sm text-slate-300">Layered gradients, premium copy, and interactive CTAs unite into a cohesive marketing story.</p>
              <div class="grid gap-3 sm:grid-cols-2">
                <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                  Responsive heroes &amp; SVG glows
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                  Analytics blocks + CTA
                </div>
              </div>
              <div class="text-xs uppercase tracking-[0.4em] text-slate-500">Includes</div>
              <p class="text-sm text-slate-100">Polished sections, CTA buttons, and structured copy replace the original Next.js static output.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-6">
          <div class="space-y-3 text-center">
            <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Highlights</p>
            <h2 class="text-3xl font-semibold text-white sm:text-4xl">Design decisions that keep the focus on conversions</h2>
            <p class="text-base text-slate-300">Each block honors the layout from the original HTML while staying flexible for Nuxt + Tailwind.\n</p>
          </div>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <article
              v-for="feature in featureGrid"
              :key="feature.title"
              class="rounded-3xl border border-white/5 bg-white/5 p-6 transition hover:border-brand-primary hover:bg-white/10"
            >
              <h3 class="text-lg font-semibold text-white">{{ feature.title }}</h3>
              <p class="mt-3 text-sm leading-relaxed text-slate-300">{{ feature.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-8 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
          <div class="space-y-4">
            <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Story</p>
            <h2 class="text-3xl font-semibold text-white sm:text-4xl">Why this landing page works</h2>
            <p class="text-base text-slate-300">Structured pacing, gradient depth, and social proof were the pillars of the original template. They remain here, rebuilt with Vue's reactivity.</p>
            <div class="space-y-4">
              <article
                v-for="item in roadmap"
                :key="item.title"
                class="rounded-3xl border border-white/5 bg-slate-900/40 p-5 text-sm text-slate-300"
              >
                <p class="text-xs uppercase tracking-[0.4em] text-slate-500">{{ item.title }}</p>
                <p class="mt-2 font-semibold text-white">{{ item.detail }}</p>
              </article>
            </div>
          </div>
          <div class="space-y-4">
            <div class="rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur">
              <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Live proof</p>
              <h3 class="text-xl font-semibold text-white">Testimonials</h3>
              <div class="mt-6 space-y-5">
                <article
                  v-for="testimonial in testimonials"
                  :key="testimonial.name"
                  class="space-y-2 rounded-2xl border border-white/10 bg-slate-900/40 p-4"
                >
                  <p class="text-sm text-slate-200">“{{ testimonial.quote }}”</p>
                  <p class="text-xs uppercase tracking-[0.4em] text-slate-500">{{ testimonial.company }}</p>
                  <p class="text-sm font-medium text-white">{{ testimonial.name }}</p>
                </article>
              </div>
            </div>
            <div class="rounded-3xl border border-white/5 bg-slate-900/40 p-6 text-sm text-slate-300">
              <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Status</p>
              <p class="mt-3 text-base text-slate-100">Reusable sections, gradient treatment, and CTA cadence ensure this page mirrors the original marketing intent.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" class="px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-6 text-center">
          <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Pricing</p>
          <h2 class="text-3xl font-semibold text-white sm:text-4xl">Pick a deployment plan</h2>
          <p class="text-base text-slate-300">Transparent options for small agencies, growth teams, and enterprises ready to ship.</p>
        </div>
        <div class="mx-auto mt-10 grid gap-6 md:grid-cols-3">
          <article
            v-for="tier in pricing"
            :key="tier.title"
            class="flex flex-col gap-5 rounded-[28px] border border-white/5 bg-white/5 p-6 transition hover:border-brand-primary hover:bg-white/10"
          >
            <header class="space-y-2">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-semibold text-white">{{ tier.title }}</h3>
                <span
                  v-if="tier.badge"
                  class="rounded-full bg-brand-primary/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white"
                  >{{ tier.badge }}</span
                >
              </div>
              <p class="text-sm uppercase tracking-[0.4em] text-slate-400">Starting at</p>
            </header>
            <div class="flex items-baseline gap-2">
              <p class="text-4xl font-semibold text-white">{{ tier.price }}</p>
              <p class="text-sm text-slate-400">{{ tier.cadence }}</p>
            </div>
            <ul class="space-y-2 text-sm text-slate-200">
              <li v-for="benefit in tier.benefits" :key="benefit" class="flex items-start gap-3">
                <span class="mt-1 h-2 w-2 rounded-full bg-brand-primary"></span>
                <span>{{ benefit }}</span>
              </li>
            </ul>
            <button class="mt-auto rounded-full border border-white/10 bg-brand-primary py-3 text-sm font-semibold text-white transition hover:opacity-90">
              Choose {{ tier.title }}
            </button>
          </article>
        </div>
      </section>

      <section id="faqs" class="border-t border-white/5 bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-6 text-center">
          <p class="text-xs uppercase tracking-[0.4em] text-slate-500">FAQ</p>
          <h2 class="text-3xl font-semibold text-white sm:text-4xl">Everything you need to know</h2>
          <p class="text-base text-slate-300">The sections above mirror the original static export but now run inside Nuxt + Vue.</p>
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
  color: #38bdf8;
}

:global(.bg-brand-primary) {
  background-color: #38bdf8;
}
</style>
