<script setup lang="ts">
const heroStats = [
  { label: 'Teams scaling', value: '8,300+' },
  { label: 'Avg. launch time', value: '1.2 days' },
  { label: 'Confidence lift', value: '+92%' },
]

const heroHighlights = [
  'Portrait + laptop hero imagery with gradient halos',
  'Dot textures, glow streaks, and geo shapes for energy',
  'CTA grid blending proof, pricing, and FAQ cues',
]

const proofSections = [
  {
    title: 'Layered hero',
    description: 'Portraits and mockups framed under halo gradients keep the hero dynamic while staying editable.',
  },
  {
    title: 'Evidence stack',
    description: 'Logos, testimonials, and segmented stats amplify credibility before the CTAs.',
  },
  {
    title: 'Conversion finish',
    description: 'Pricing, FAQs, and CTA buttons give visitors a clear action plan.',
  },
]

const testimonials = [
  {
    quote: 'Landing page 20 keeps the premium reference but lets us swap imagery, copy, and CTAs instantly.',
    author: 'Mathilde Lewis · Experiences, Leapyear',
  },
  {
    quote: 'The Nuxt arrays for hero, proof, and CTA sections kept the remix painless.',
    author: 'Pietro Moretti · Product, Catalog',
  },
]

const pricing = [
  {
    tier: 'Launch',
    price: '$139',
    cadence: '/month',
    description: 'Hero, proof, and CTA grid with docs.',
  },
  {
    tier: 'Momentum',
    price: '$299',
    cadence: '/month',
    description: 'Logo clouds, integrations, and conversion-focused CTAs.',
  },
  {
    tier: 'Enterprise',
    price: 'Custom',
    cadence: '/quote',
    description: 'Strategy partner, localization, QA.',
  },
]

const faqs = [
  {
    question: 'Can we swap the hero imagery?',
    answer: 'Yes, replace the portrait or mockup imagery without breaking the layout.',
  },
  {
    question: 'Are logos responsive?',
    answer: 'Flex wrapping keeps badges centered regardless of the count.',
  },
  {
    question: 'Can we add tiers?',
    answer: 'Append another object to the pricing array and a new card renders automatically.',
  },
]

const logos = ['catalog', 'pictel-ai', 'leapyear', 'peregrin', 'easy-tax', 'core-os', 'warpspeed']

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

const heroLinks = [
  { label: 'View proof', variant: 'ghost', size: 'md', href: '#proof' },
  { label: 'See pricing', variant: 'outline', size: 'md', href: '#pricing' },
]

definePageMeta({
  title: 'Landing Page 19 | Untitled UI Redux',
  meta: [
    {
      name: 'description',
      content: 'Nuxt remix of Untitled UI Landing page 19 with portrait hero, proof, pricing, and FAQs.',
    },
    { name: 'robots', content: 'index,follow' },
  ],
})
</script>

<template>
  <UPage class="bg-slate-950 text-slate-100">
    <UPageHero
      id="hero"
      title="Landing page 20"
      headline="Landing page 20 — portrait + mockup hero, proof, and CTA grid rebuilt with Nuxt."
      description="Portrait + laptop mockups, geo gradients, and CTA pacing keep the reference alive while the layout stays configurable through Vue data."
      :links="heroLinks"
    >
      <template #default>
        <div class="grid gap-6 sm:grid-cols-3 mt-6">
          <div v-for="stat in heroStats" :key="stat.label">
            <p class="text-2xl font-bold text-white">{{ stat.value }}</p>
            <p class="text-[10px] uppercase tracking-[0.4em] text-slate-500">{{ stat.label }}</p>
          </div>
        </div>
        <UCard class="mt-8 bg-white/5 border border-white/5 rounded-[38px] p-6 shadow-[0_35px_120px_rgba(15,23,42,0.85)]">
          <div class="grid gap-3">
            <div v-for="feature in heroHighlights" :key="feature" class="flex items-start gap-2">
              <span class="mt-1 h-2 w-2 rounded-full bg-brand-primary" />
              <p class="text-sm text-slate-200">{{ feature }}</p>
            </div>
          </div>
        </UCard>
      </template>
    </UPageHero>

    <UPageSection id="proof" title="Proof" description="Logo clouds, testimonials, and proof messaging reinforce credibility before visitors reach the CTAs.">
      <div class="grid gap-6 md:grid-cols-3 mt-6">
        <UCard
          v-for="section in proofSections"
          :key="section.title"
          class="border border-white/5 bg-white/5 rounded-3xl p-6 hover:border-brand-primary hover:bg-white/10 transition"
        >
          <h3 class="text-lg font-semibold text-white">{{ section.title }}</h3>
          <p class="mt-3 text-sm text-slate-300">{{ section.description }}</p>
        </UCard>
      </div>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
        <UCard
          v-for="quote in testimonials"
          :key="quote.author"
          class="bg-slate-900/60 border border-white/5 rounded-3xl p-6 text-sm text-slate-200"
        >
          <p class="text-base text-white">“{{ quote.quote }}”</p>
          <p class="text-xs uppercase tracking-[0.4em] text-slate-500">{{ quote.author }}</p>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection title="Logos & Integrations">
      <div class="space-y-6 mt-6">
        <div class="flex flex-wrap items-center gap-6">
          <div v-for="logo in logos" :key="logo" class="flex h-12 w-32 items-center justify-center opacity-70 hover:opacity-100 transition">
            <img :src="`https://www.untitledui.com/logos/logotype/color/${logo}.svg`" :alt="logo" class="max-h-full" loading="lazy" />
          </div>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
    </UPageSection>

    <UPageSection id="pricing" title="Pricing" description="Choose the tier that matches your rollout.">
      <div class="grid gap-6 md:grid-cols-3 mt-6">
        <UCard
          v-for="plan in pricing"
          :key="plan.tier"
          class="flex flex-col gap-4 rounded-[28px] border border-white/5 bg-white/5 p-6 transition hover:border-brand-primary hover:bg-white/10"
        >
          <header class="space-y-2">
            <p class="text-xl font-semibold text-white">{{ plan.tier }}</p>
            <p class="text-xs uppercase tracking-[0.4em] text-slate-400">Starting at</p>
          </header>
          <div class="flex items-baseline gap-2">
            <p class="text-4xl font-semibold text-white">{{ plan.price }}</p>
            <p class="text-sm text-slate-400">{{ plan.cadence }}</p>
          </div>
          <p class="text-sm text-slate-300">{{ plan.description }}</p>
          <UButton variant="solid" class="mt-auto rounded-full border border-white/10 bg-brand-primary py-3 text-sm font-semibold text-white hover:opacity-90">
            Choose {{ plan.tier }}
          </UButton>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection title="FAQ" description="Still curious?">
      <div class="grid gap-6 md:grid-cols-3 mt-6">
        <UCard
          v-for="faq in faqs"
          :key="faq.question"
          class="rounded-3xl border border-white/5 bg-white/5 p-6 text-sm text-slate-300 transition hover:border-brand-primary hover:bg-white/10"
        >
          <h3 class="text-base font-semibold text-white">{{ faq.question }}</h3>
          <p class="mt-3 leading-relaxed">{{ faq.answer }}</p>
        </UCard>
      </div>
    </UPageSection>
  </UPage>
</template>

<style scoped>
:global(.text-brand-primary) {
  color: #22d3ee;
}

:global(.bg-brand-primary) {
  background-color: #22d3ee;
}
</style>
