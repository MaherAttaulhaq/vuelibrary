<script setup lang="ts">
// All your data remains exactly the same
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
  }
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
  }
]

const pricingTiers = [
  {
    name: 'Starter',
    price: '$199',
    description: 'Best for individuals getting started.',
    badge: null, // or 'Popular'
    features: [
      '1 project',
      'Basic support',
      'Community access'
    ]
  },
  {
    name: 'Pro',
    price: '$499',
    description: 'For scaling startups.',
    badge: 'Most Popular',
    features: [
      'Unlimited projects',
      'Priority support',
      'Advanced analytics'
    ]
  },
  {
    name: 'Enterprise',
    price: '$999',
    description: 'Full-scale deployment.',
    badge: null,
    features: [
      'Dedicated team',
      'Custom integrations',
      '24/7 support'
    ]
  }
]
const faqs = [
  {
    question: 'What happens if I exceed my plan limits?',
    answer:
      "We notify you well before you reach any cap so you can upgrade proactively. We'll never cut off access without warning."
  },
  {
    question: 'Is the platform available globally?',
    answer:
      'Yes. We run across multiple regions with ISO data centers and let you pin workspaces to Europe, Asia, or the US for compliance.'
  },
  {
    question: 'Can I port analytics from another system?',
    answer:
      'Absolutely. We provide onboarding scripts, data migration playbooks, and an expert team that works alongside you.'
  }
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
  ]
})

const route = useRoute()

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

</script>

<template>
  <UContainer class="min-h-screen bg-gray-950 text-gray-100">
    <!-- Header with Nuxt UI components -->
   <UHeader class="border-b border-white/5 bg-gray-950/50 backdrop-blur w-ful">
    <template #title>
      <h1>Nuxt Ui</h1>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
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
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
    <main class="pt-24">
      <!-- Hero Section -->
      <section
        id="hero"
        class="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 px-4 py-16 sm:px-6 lg:px-8"
      >
        <UBadge color="primary" variant="subtle" class="mb-4">
          New release
        </UBadge>
        <div class="relative mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
          <div class="space-y-6 lg:max-w-2xl">
            <h1 class="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Modern Template — Build stunning websites, faster than ever.
            </h1>
            <p class="text-base leading-relaxed text-gray-300 sm:text-lg">
              Professional website templates designed for developers. Build responsive, high-converting experiences that
              scale for startups, agencies, and personal brands.
            </p>
            <div class="flex flex-wrap gap-3">
              <UButton variant="solid" size="lg" class="bg-white text-slate-950 hover:bg-slate-100" href="#pricing">
                Start free trial
              </UButton>
              <UButton color="neutral" variant="outline" size="lg" href="#features">
                Explore templates
              </UButton>
            </div>
            <div class="flex flex-wrap gap-6 pt-6 text-sm font-semibold text-gray-300">
              <div v-for="stat in heroStats" :key="stat.label" class="space-y-1">
                <p class="text-xl font-bold text-white">{{ stat.value }}</p>
                <p class="text-xs uppercase tracking-wide text-gray-400">{{ stat.label }}</p>
              </div>
            </div>
          </div>
          <UCard class="relative flex-1 overflow-hidden border-white/10 bg-gradient-to-br from-gray-900 via-gray-900/50 to-gray-800" :ui="{ body: 'p-6' }">
            <div class="relative grid gap-6">
              <div class="space-y-2">
                <p class="text-xs uppercase tracking-[0.4em] text-gray-400">Library highlights</p>
                <p class="text-lg font-semibold text-white">8 ready-to-go sections</p>
              </div>
              <div class="grid gap-4 sm:grid-cols-2">
                <div class="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 backdrop-blur">
                  <p class="text-sm font-semibold text-white">Responsive hero</p>
                  <p class="text-xs text-gray-300">Fluid typography &amp; gradient motion</p>
                </div>
                <div class="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 backdrop-blur">
                  <p class="text-sm font-semibold text-white">Analytics-ready</p>
                  <p class="text-xs text-gray-300">Story-driven data + interactive charts</p>
                </div>
              </div>
              <p class="text-sm text-gray-300">
                Every section ships with Tailwind classes, gradient artwork, and clear placeholder copy so you can swap in
                brand colors and launch your marketing site by the end of the sprint.
              </p>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="bg-gray-950 px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-6 text-center">
          <UBadge color="neutral" variant="subtle">Capabilities</UBadge>
          <h2 class="text-3xl font-semibold text-white sm:text-4xl">Design systems built for modern product teams</h2>
          <p class="text-base text-gray-300">
            Every template is wired for developer-friendly tooling, realtime experimentation, and craftsmanship-level polish.
          </p>
        </div>
        <div class="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          <UCard
            v-for="feature in featureHighlights"
            :key="feature.title"
            class="border-white/5 bg-white/5 transition hover:border-primary hover:bg-white/10"
            :ui="{ body: 'p-5' }"
          >
            <h3 class="text-lg font-semibold text-white">{{ feature.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-gray-300">{{ feature.description }}</p>
          </UCard>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section id="testimonials" class="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-10">
          <div class="space-y-4 text-center">
            <UBadge color="neutral" variant="subtle">Proof</UBadge>
            <h2 class="text-3xl font-semibold text-white sm:text-4xl">Loved by thousands</h2>
            <p class="text-base text-gray-300">
              Teams deploy this design system for product launches, analytics platforms, and high-impact marketing pages.
            </p>
          </div>
          <div class="grid gap-6 md:grid-cols-3">
            <UCard
              v-for="testimonial in testimonials"
              :key="testimonial.name"
              class="border-white/5 bg-white/5 backdrop-blur transition hover:border-primary hover:bg-white/10"
            >
              <p class="text-sm leading-relaxed text-gray-200">“{{ testimonial.quote }}”</p>
              <template #footer>
                <div class="border-t border-white/5 pt-4">
                  <p class="text-sm font-semibold text-white">{{ testimonial.name }}</p>
                  <p class="text-xs uppercase tracking-[0.4em] text-gray-400">{{ testimonial.company }}</p>
                </div>
              </template>
            </UCard>
          </div>
        </div>
      </section>

      <!-- Pricing Section -->
      <template>
  <section id="pricing" class="px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl space-y-6 text-center">
      <UBadge color="neutral" variant="subtle">Pricing</UBadge>

      <h2 class="text-3xl font-semibold text-white sm:text-4xl">
        Pick the plan that fits your launch
      </h2>

      <p class="text-base text-gray-300">
        Transparent pricing with upgrade paths for fast-growing teams and complete enterprise deployments.
      </p>
    </div>

    <div class="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
      <UPricingPlan
        v-for="tier in pricingTiers"
        :key="tier.name"
        :title="tier.name"
        :description="tier.description"
        :price="tier.price"
        :features="tier.features"
        :badge="tier.badge"
        :button="{
          label: `Choose ${tier.name}`
        }"
        variant="subtle"
      />
    </div>
  </section>
</template>
      <!-- Custom Solutions Section -->
      <section class="bg-gray-950 px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-10 lg:grid lg:grid-cols-[3fr,2fr] lg:items-center lg:gap-12">
          <div class="space-y-4">
            <UBadge color="neutral" variant="subtle">Need custom solutions?</UBadge>
            <h2 class="text-3xl font-semibold text-white sm:text-4xl">Enterprise services built for your team</h2>
            <p class="text-base text-gray-300">
              Get tailored analytics integrations, custom security reviews, and dedicated onboarding for your global product team.
            </p>
            <div class="space-y-3 text-sm text-gray-400">
              <p>• Insights paired with professional services</p>
              <p>• Cohort benchmarking, governance, and white-labeling</p>
              <p>• Real-time migration support from legacy vendors</p>
            </div>
          </div>
          <UCard class="border-white/5 bg-gradient-to-br from-gray-900 to-gray-800">
            <p class="text-gray-300">Talk directly with our Enterprise team</p>
            <div class="mt-6 flex flex-col gap-3 text-lg font-semibold text-white">
              <p>Talk to Sales</p>
              <p>+1 (888) 555-0132</p>
              <p>sales@template-studio.dev</p>
            </div>
          </UCard>
        </div>
      </section>

      <!-- FAQs Section -->
      <section id="faqs" class="border-t border-white/5 px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl space-y-6 text-center">
          <UBadge color="neutral" variant="subtle">FAQs</UBadge>
          <h2 class="text-3xl font-semibold text-white sm:text-4xl">Frequently asked questions</h2>
        </div>
        <div class="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
          <UCard
            v-for="faq in faqs"
            :key="faq.question"
            class="border-white/5 bg-white/5 backdrop-blur"
            :ui="{ body: 'p-6' }"
          >
            <h3 class="text-base font-semibold text-white">{{ faq.question }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-gray-300">{{ faq.answer }}</p>
          </UCard>
        </div>
      </section>
    </main>
  </UContainer>
</template>