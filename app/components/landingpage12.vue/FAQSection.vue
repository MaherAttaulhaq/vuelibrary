<template>
  <section class="bg-white dark:bg-gray-950 pb-16 md:pb-24">
    <div class="mx-auto max-w-[1560px] px-4 md:px-8">
      <div class="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Frequently asked questions</h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 md:mt-5 md:text-xl">
          Everything you need to know about the product and billing.
        </p>
      </div>
      
      <div class="mx-auto mt-12 max-w-3xl md:mt-16">
        <UAccordion :items="faqItems" :ui="{ wrapper: 'space-y-4', container: 'border rounded-lg', item: 'border-0' }" />
      </div>
      
      <div class="mt-12 flex flex-col items-center gap-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 px-6 py-8 text-center md:mt-16 md:gap-8 md:pt-8 md:pb-10">
        <div class="flex items-end -space-x-4">
          <UAvatar 
            v-for="avatar in avatars" 
            :key="avatar.src"
            :src="avatar.src"
            :alt="avatar.alt"
            size="md"
            class="ring-2 ring-white dark:ring-gray-950"
          />
        </div>
        <div>
          <h4 class="text-xl font-semibold text-gray-900 dark:text-white">Still have questions?</h4>
          <p class="mt-2 text-gray-600 dark:text-gray-400 md:text-lg">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
        </div>
        <UButton color="primary" label="Get in touch" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqItems = [
  { label: 'Is there a free trial available?', defaultOpen: true, content: 'Yes, you can try us for free for 30 days. If you want, we\'ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },
  { label: 'Can I change my plan later?', content: 'Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.' },
  { label: 'What is your cancellation policy?', content: 'We understand that things change. You can cancel your plan at any time and we\'ll refund you the difference already paid.' },
  { label: 'Can other info be added to an invoice?', content: 'Yes, you can add additional information to your invoices including VAT numbers, billing addresses, and purchase order numbers.' },
  { label: 'How does billing work?', content: 'Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.' },
  { label: 'How do I change my account email?', content: 'You can change the email address associated with your account by going to untitledui.com/account from a laptop or desktop.' }
]

const avatars = [
  { src: 'https://www.untitledui.com/images/avatars/marco-kelly?fm=webp&q=80', alt: 'Marco Kelly' },
  { src: 'https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80', alt: 'Amelie Laurent' },
  { src: 'https://www.untitledui.com/images/avatars/jaya-willis?fm=webp&q=80', alt: 'Jaya Willis' }
]
</script>