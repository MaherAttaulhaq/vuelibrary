<template>
  <section
    id="faqs"
    class="border-t border-white/5 px-4 py-16 sm:px-6 lg:px-8"
  >
    <div class="mx-auto max-w-6xl space-y-6 text-center">
      <UBadge
        color="neutral"
        variant="subtle"
      >
        FAQs
      </UBadge>
      <h2 class="text-3xl font-semibold text-white sm:text-4xl">
        Frequently asked questions
      </h2>
    </div>
    <div class="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
      <UCard
        v-for="faq in faqs"
        :key="faq.question"
        class="border-white/5 bg-white/5 backdrop-blur"
        :ui="{ body: 'p-6' }"
      >
        <h3 class="text-base font-semibold text-white">
          {{ faq.question }}
        </h3>
        <p class="mt-3 text-sm leading-relaxed text-gray-300">
          {{ faq.answer }}
        </p>
      </UCard>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = [
  {
    question: 'What happens if I exceed my plan limits?',
    answer:
      'We notify you well before you reach any cap so you can upgrade proactively. We\'ll never cut off access without warning.'
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
</script>