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
  <section class="bg-muted px-4 py-12 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl space-y-6 text-center">
      <UBadge color="neutral" variant="subtle" class="text-xs uppercase tracking-[0.4em]">
        FAQ
      </UBadge>
      <h2 class="text-3xl font-semibold text-primary sm:text-4xl">
        Still curious?
      </h2>
    </div>
    <div class="mx-auto mt-10 grid gap-6 md:grid-cols-3">
      <UCard
        v-for="faq in faqs"
        :key="faq.question"
        class="border-border bg-muted/50 text-sm transition hover:border-primary hover:bg-muted"
      >
        <h3 class="text-base font-semibold text-primary">
          {{ faq.question }}
        </h3>
        <p class="mt-3 leading-relaxed">
          {{ faq.answer }}
        </p>
      </UCard>
    </div>
  </section>
</template>