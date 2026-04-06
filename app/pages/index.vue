<script setup lang="ts">
const heroStats = [
  { label: 'Teams powered by this template', value: '500+' },
  { label: 'Avg. deployment time', value: '7 days' },
  { label: 'Platform uptime', value: '99.99%' },
]

const featureHighlights = [
  {
    title: 'AI-powered insights',
    description:
      'Automated anomaly detection, predictive retention forecasting, and prompt-ready recommendations make every launch smarter.',
  },
  {
    title: 'Real-time decision making',
    description:
      'Live dashboards, rich event streaming, and instant alerts keep your product teams in sync with what users actually do.',
  },
  {
    title: 'Privacy-first data',
    description:
      'First-party data models, granular consent controls, and cookieless attribution ensure compliance without sacrificing signal.',
  },
  {
    title: 'Designed for developers',
    description:
      'Tailwind-first UI kit, modular API, and production-ready docs let your engineers stitch everything into your stack fast.',
  },
]

const testimonials = [
  {
    quote:
      'This platform transformed how we understand our users. The insights helped us increase conversion by 240% in just three months.',
    name: 'Sarah Chen · VP of Product',
    company: 'Northwind Labs',
  },
  {
    quote:
      'We replaced a patchwork of spreadsheets with a single, beautiful workspace. Every stakeholder now arrives at standups with the same data.',
    name: 'Marcus Johnson · CTO',
    company: 'Atlas Growth',
  },
  {
    quote:
      'The support team treated our request like a launch partner. The onboarding program and playbooks accelerated adoption globally.',
    name: 'Alex Rivera · Head of Revenue',
    company: 'Empyrean',
  },
]

const pricingTiers = [
  {
    name: 'Starter',
    subhead: 'Launch-level analytics',
    price: '$29',
    cadence: '/month',
    description: 'Great for early-stage teams who want instant visibility into funnels and feature adoption.',
    features: [
      '25k tracked users',
      'Realtime dashboards',
      'Community support',
      'Custom event definitions',
    ],
    badge: 'Most popular',
  },
  {
    name: 'Pro',
    subhead: 'Scale with confidence',
    price: '$99',
    cadence: '/month',
    description: 'Add reliability, governance, and collaboration for growing teams.',
    features: [
      '200k tracked users',
      'Advanced funnel reports',
      'Dedicated success manager',
      'Priority support',
      'Data export & APIs',
    ],
  },
  {
    name: 'Enterprise',
    subhead: 'Unlimited scale',
    price: '$199',
    cadence: '/month',
    description:
      'Complete analytics solution for large organizations with unlimited tracking, white-labeling, and premium support.',
    features: [
      'Unlimited tracked users',
      'Custom dashboard builder',
      '24/7 priority support',
      'Advanced API & webhooks',
      'Unlimited data retention',
      'White-label solutions',
      'Dedicated success manager',
    ],
  },
]

const faqs = [
  {
    question: 'What happens if I exceed my plan limits?',
    answer:
      "We notify you well before you reach any cap so you can upgrade proactively. We'll never cut off access without warning.",
  },
  {
    question: 'Is the platform available globally?',
    answer:
      'Yes. We run across multiple regions with ISO data centers and let you pin workspaces to Europe, Asia, or the US for compliance.',
  },
  {
    question: 'Can I port analytics from another system?',
    answer:
      'Absolutely. We provide onboarding scripts, data migration playbooks, and an expert team that works alongside you.',
  },
]

definePageMeta({
  title: 'Modern Template - Build Stunning Websites',
  meta: [
    {
      name: 'description',
      content:
        'Professional website templates designed for developers. Build stunning, responsive websites with our modern templates. Perfect for startups, agencies, and personal projects.',
    },
    {
      name: 'keywords',
      content: 'website templates, modern design, responsive, developers, Nuxt, Tailwind',
    },
    { name: 'author', content: 'Template Studio' },
    { name: 'robots', content: 'index, follow' },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/60 backdrop-blur">
        <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div class="flex items-center gap-2 text-base font-semibold">
          <span class="text-brand-primary text-lg">LOGO</span>
          <span class="hidden text-sm text-slate-400 sm:inline">Modern Template</span>
        </div>
        <nav class="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          <a class="transition hover:text-white" href="#pricing">Pricing</a>
          <a class="transition hover:text-white" href="#testimonials">Testimonials</a>
          <a class="transition hover:text-white" href="#faqs">FAQ</a>
        </nav>
        <a
          class="rounded-full border border-slate-700 bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          href="#hero"
          >Sign up</a
        >
      </div>
    </header>

    <main class="pt-24">
      <section
        id="hero"
        class="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 px-4 py-16 sm:px-6 lg:px-8"
      >
        <div class="absolute inset-0 opacity-30">
          <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_55%)]"></div>
        </div>
        <div class="relative mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
          <div class="space-y-6 lg:max-w-2xl">
            <p class="inline-flex items-center gap-2 rounded-full border border-slate-800 px-3 py-1 text-xs uppercase tracking-[0.35em] text-brand-primary">
              New release
            </p>
            <h1 class="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Modern Template — Build stunning websites, faster than ever.
            </h1>
            <p class="text-base leading-relaxed text-slate-300 sm:text-lg">
              Professional website templates designed for developers. Build responsive, high-converting experiences that
              scale for startups, agencies, and personal brands.
            </p>
            <div class="flex flex-wrap gap-3">
              <a
                class="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                href="#pricing"
              >
                Start free trial
              </a>
              <a
                class="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60"
                href="#features"
              >
                Explore templates
              </a>
            </div>
            <div class="flex flex-wrap gap-6 pt-6 text-sm font-semibold text-slate-300">
              <div v-for="stat in heroStats" :key="stat.label" class="space-y-1">
                <p class="text-xl font-bold text-white">{{ stat.value }}</p>
                <p class="text-xs uppercase tracking-wide text-slate-400">{{ stat.label }}</p>
              </div>
            </div>
          </div>
          <div
          class="relative flex-1 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/50 to-slate-800 p-6"
          style="box-shadow: 0 25px 80px rgba(56,189,248,0.3);"
          >
            <div class="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.35),_transparent_55%)]"></div>
            <div class="relative grid gap-6">
              <div class="space-y-2">
                <p class="text-xs uppercase tracking-[0.4em] text-slate-400">Library highlights</p>
                <p class="text-lg font-semibold text-white">8 ready-to-go sections</p>
              </div>
              <div class="grid gap-4 sm:grid-cols-2">
                <div class="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 backdrop-blur">
                  <p class="text-sm font-semibold text-white">Responsive hero</p>
                  <p class="text-xs text-slate-300">Fluid typography &amp; gradient motion</p>
                </div>
                <div class="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 backdrop-blur">
                  <p class="text-sm font-semibold text-white">Analytics-ready</p>
                  <p class="text-xs text-slate-300">Story-driven data + interactive charts</p>
                </div>
              </div>
              <p class="text-sm text-slate-300">
                Every section ships with Tailwind classes, gradient artwork, and clear placeholder copy so you can swap in
                brand colors and launch your marketing site by the end of the sprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-6">
          <div class="space-y-2 text-center">
            <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Capabilities</p>
            <h2 class="text-3xl font-semibold text-white sm:text-4xl">Design systems built for modern product teams</h2>
            <p class="text-base text-slate-300">
              Every template is wired for developer-friendly tooling, realtime experimentation, and craftsmanship-level polish.
            </p>
          </div>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <article
              v-for="feature in featureHighlights"
              :key="feature.title"
              class="rounded-2xl border border-white/5 bg-white/5 p-5 transition hover:border-brand-primary hover:bg-white/10"
            >
              <h3 class="text-lg font-semibold text-white">{{ feature.title }}</h3>
              <p class="mt-3 text-sm leading-relaxed text-slate-300">{{ feature.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-10">
          <div class="text-center space-y-4">
            <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Proof</p>
            <h2 class="text-3xl font-semibold text-white sm:text-4xl">Loved by thousands</h2>
            <p class="text-base text-slate-300">
              Teams deploy this design system for product launches, analytics platforms, and high-impact marketing pages.
            </p>
          </div>
          <div id="testimonials" class="grid gap-6 md:grid-cols-3">
                <article
                  v-for="testimonial in testimonials"
                  :key="testimonial.name"
                  class="flex flex-col gap-4 rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur transition hover:border-brand-primary hover:bg-white/10"
                >
              <p class="text-sm leading-relaxed text-slate-200">“{{ testimonial.quote }}”</p>
              <div class="mt-auto border-t border-white/5 pt-4">
                <p class="text-sm font-semibold text-white">{{ testimonial.name }}</p>
                <p class="text-xs uppercase tracking-[0.4em] text-slate-400">{{ testimonial.company }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="pricing" class="px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-6 text-center">
          <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Pricing</p>
          <h2 class="text-3xl font-semibold text-white sm:text-4xl">Pick the plan that fits your launch</h2>
          <p class="text-base text-slate-300">
            Transparent pricing with upgrade paths for fast-growing teams and complete enterprise deployments.
          </p>
        </div>
        <div class="mx-auto mt-10 grid gap-6 md:grid-cols-3">
            <article
              v-for="tier in pricingTiers"
              :key="tier.name"
              class="flex flex-col rounded-3xl border border-white/5 bg-white/5 p-6 transition hover:border-brand-primary hover:bg-white/10"
            >
            <header class="mb-4 space-y-2">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-semibold text-white">{{ tier.name }}</h3>
                <span
                  v-if="tier.badge"
                  class="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200"
                  >{{ tier.badge }}</span
                >
              </div>
              <p class="text-sm uppercase tracking-[0.4em] text-slate-400">{{ tier.subhead }}</p>
            </header>
            <div class="flex items-baseline gap-2">
              <p class="text-4xl font-semibold text-white">{{ tier.price }}</p>
              <p class="text-sm text-slate-400">{{ tier.cadence }}</p>
            </div>
            <p class="mt-3 text-sm text-slate-300">{{ tier.description }}</p>
            <ul class="mt-6 flex flex-1 flex-col gap-3 text-sm text-slate-200">
              <li v-for="feature in tier.features" :key="feature" class="flex items-start gap-2">
                <span class="mt-0.5 h-3 w-3 rounded-full bg-brand-primary"></span>
                <span>{{ feature }}</span>
              </li>
            </ul>
            <button class="mt-6 rounded-full border border-white/10 bg-brand-primary py-3 text-sm font-semibold text-white transition hover:opacity-90">
              Choose {{ tier.name }}
            </button>
          </article>
        </div>
      </section>

      <section class="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-10 lg:grid lg:grid-cols-[3fr,2fr] lg:items-center lg:gap-12">
          <div class="space-y-4">
            <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Need custom solutions?</p>
            <h2 class="text-3xl font-semibold text-white sm:text-4xl">Need a custom solution?</h2>
            <p class="text-base text-slate-300">
              Get tailored analytics integrations, custom security reviews, and dedicated onboarding for your global product
              team.
            </p>
            <div class="space-y-3 text-sm text-slate-400">
              <p>• Insights paired with professional services</p>
              <p>• Cohort benchmarking, governance, and white-labeling</p>
              <p>• Real-time migration support from legacy vendors</p>
            </div>
          </div>
          <div class="rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-sm text-slate-100">
            <p class="text-slate-300">Talk directly with our Enterprise team</p>
            <div class="mt-6 flex flex-col gap-3 text-lg font-semibold text-white">
              <p>Talk to Sales</p>
              <p>+1 (888) 555-0132</p>
              <p>sales@template-studio.dev</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faqs" class="border-t border-white/5 px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-6 text-center">
          <p class="text-xs uppercase tracking-[0.4em] text-slate-500">FAQs</p>
          <h2 class="text-3xl font-semibold text-white sm:text-4xl">Frequently asked questions</h2>
        </div>
        <div class="mx-auto mt-10 grid gap-6 md:grid-cols-3">
          <article
            v-for="faq in faqs"
            :key="faq.question"
            class="rounded-2xl border border-white/5 bg-white/5 p-6 text-sm text-slate-300 backdrop-blur"
          >
            <h3 class="text-base font-semibold text-white">{{ faq.question }}</h3>
            <p class="mt-3 text-sm leading-relaxed">{{ faq.answer }}</p>
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
