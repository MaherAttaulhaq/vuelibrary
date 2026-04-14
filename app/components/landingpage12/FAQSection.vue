<template>
  <section class="bg-white dark:bg-gray-950 py-16 md:py-24">
    <div class="mx-auto max-w-4xl px-4 md:px-8">
      <!-- Heading -->
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Frequently asked questions
        </h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Everything you need to know about the product and billing.
        </p>
      </div>

      <!-- Accordion -->
      <UAccordion
        :items="faqItems"
        class="mt-12"
        :ui="{
          wrapper: 'space-y-3',
          item: 'px-4 py-2',
          trigger: 'text-left font-medium text-gray-900 dark:text-white',
          content: 'text-gray-600 dark:text-gray-400 pb-3'
        }"
      />

      <!-- CTA -->
      <div class="mt-16 text-center">
        <div class="flex justify-center -space-x-3">
          <UAvatar
            v-for="avatar in avatars"
            :key="avatar.src"
            :src="avatar.src"
            :alt="avatar.alt"
            size="md"
            class="ring-2 ring-white dark:ring-gray-950"
          />
        </div>

        <h4 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
          Still have questions?
        </h4>

        <p class="mt-2 text-gray-600 dark:text-gray-400">
          Can’t find the answer you’re looking for? Contact our team.
        </p>

        <UButton class="mt-4" color="primary" label="Get in touch" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqItems = [
  {
    label: 'Is there a free trial available?',
    defaultOpen: true,
    content:
      'Yes, you can try us for free for 30 days. We also provide onboarding support.'
  },
  {
    label: 'Can I change my plan later?',
    content:
      'Yes, plans are flexible and can scale as your company grows.'
  },
  {
    label: 'What is your cancellation policy?',
    content:
      'You can cancel anytime and receive a prorated refund.'
  },
  {
    label: 'Can I add info to invoices?',
    content:
      'Yes, including VAT, billing address, and PO numbers.'
  }
]

const avatars = [
  { src: 'https://www.untitledui.com/images/avatars/marco-kelly?fm=webp&q=80', alt: 'Marco' },
  { src: 'https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80', alt: 'Amelie' },
  { src: 'https://www.untitledui.com/images/avatars/jaya-willis?fm=webp&q=80', alt: 'Jaya' }
]
</script>