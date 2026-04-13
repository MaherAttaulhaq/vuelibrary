<script setup lang="ts">
const faqs = [
  {
    label: 'What is Nuxt UI?',
    content: 'Nuxt UI is a comprehensive Vue UI component library offering 125+ accessible components.'
  },
  {
    label: 'Is it free to use?',
    content: 'Yes, Nuxt UI is open source and free to use.'
  },
  {
    label: 'Does it support dark mode?',
    content: 'Yes, Nuxt UI has built-in light and dark mode support.'
  }
]
</script>

<template>
  <section class="py-16 md:py-24">
    <UContainer class="max-w-3xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-primary">Frequently asked questions</h2>
        <p class="mt-3">Everything you need to know about the product and billing.</p>
      </div>

     <UAccordion :items="faqs" />

      <!-- Still have questions? -->
      <UCard class="mt-16 bg-muted rounded-2xl p-8 text-center border-border">
        <div class="flex justify-center -space-x-2 mb-4">
          <img class="w-10 h-10 rounded-full ring-2 ring-border" src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar">
          <img class="w-12 h-12 rounded-full ring-2 ring-border" src="https://randomuser.me/api/portraits/women/68.jpg" alt="avatar">
          <img class="w-10 h-10 rounded-full ring-2 ring-border" src="https://randomuser.me/api/portraits/men/45.jpg" alt="avatar">
        </div>
        <h4 class="text-xl font-semibold text-primary">Still have questions?</h4>
        <p class="mt-2">Can't find the answer you're looking for? Please chat to our friendly team.</p>
        <UButton color="primary" class="mt-6">
          Get in touch
        </UButton>
      </UCard>
    </UContainer>
  </section>
</template>