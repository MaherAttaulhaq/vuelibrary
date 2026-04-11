<script setup lang="ts">
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
</script>

<template>
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
            "{{ quote.quote }}"
          </p>
          <p class="text-xs uppercase tracking-[0.4em] text-gray-500">
            {{ quote.author }}
          </p>
        </UCard>
      </div>
    </div>
  </section>
</template>