<template>
  <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
    <div class="max-w-[1560px] mx-auto px-4 md:px-8 text-center">
      <UBadge color="primary" variant="subtle" label="Pricing" />
      
      <h2 class="mt-3 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        Plans that fit your scale
      </h2>
      
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Simple, transparent pricing that grows with you. Try any plan free for 30 days.
      </p>
      
      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <UCard 
          v-for="plan in plans" 
          :key="plan.name"
          class="text-left"
          :ui="{ body: { padding: 'p-6' }, ring: plan.popular ? 'ring-2 ring-primary' : '' }"
        >
          <div class="flex justify-between items-start">
            <h3 class="text-xl font-semibold">{{ plan.name }}</h3>
            <UBadge v-if="plan.popular" color="primary" variant="subtle" label="Popular" />
          </div>
          
          <div class="mt-4">
            <span class="text-4xl font-bold">{{ plan.price }}</span>
            <span class="text-base font-normal text-gray-500">/month</span>
          </div>
          
          <p class="mt-2 text-gray-600 dark:text-gray-400">{{ plan.description }}</p>
          
          <UButton 
            color="primary"
            label="Get started"
            class="mt-6 w-full"
          />
          
          <UDivider class="my-6" />
          
          <ul class="space-y-3">
            <li v-for="feature in plan.features" :key="feature" class="flex gap-2">
              <UIcon name="i-heroicons-check-circle-20-solid" class="w-5 h-5 text-success" />
              <span class="text-gray-600 dark:text-gray-400 text-sm">{{ feature }}</span>
            </li>
          </ul>
        </UCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const plans = [
  {
    name: 'Basic plan',
    price: '$10',
    description: 'Basic features for up to 10 users.',
    popular: true,
    features: ['Access to basic features', 'Basic reporting and analytics', 'Up to 10 individual users', '20 GB individual data', 'Basic chat and email support']
  },
  {
    name: 'Business plan',
    price: '$20',
    description: 'Advanced features and reporting.',
    popular: false,
    features: ['Everything in Basic plus..', 'Advanced reporting', 'Priority support', 'Up to 50 users', '100 GB data', 'Analytics dashboard']
  },
  {
    name: 'Enterprise plan',
    price: '$40',
    description: 'Unlimited features.',
    popular: false,
    features: ['Unlimited users', 'Dedicated account manager', 'Custom integrations', 'SLA guarantee', '24/7 phone support', 'Onboarding training']
  }
]
</script>