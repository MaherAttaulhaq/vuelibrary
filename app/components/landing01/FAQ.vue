<script setup lang="ts">
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
</script>

<template>
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
</template>