<template>
  <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
    <UContainer class="text-center">
      <UBadge color="primary" variant="subtle" label="Pricing" />

      <h2 class="mt-3 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        Plans that fit your scale
      </h2>

      <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Simple, transparent pricing that grows with you. Try any plan free for 30 days.
      </p>

      <UPricingPlans class="mt-12">
        <UPricingPlan
          v-for="plan in plans"
          :key="plan.name"
          :title="plan.name"
          :price="plan.price"
          :description="plan.description"
          :features="plan.features"
          :badge="plan.popular ? 'Popular' : undefined"
          :ui="{
            ring: plan.popular ? 'ring-2 ring-primary' : ''
          }"
        >
          <template #footer>
            <UButton
              color="primary"
              class="w-full"
              label="Get started"
            />
          </template>
        </UPricingPlan>
      </UPricingPlans>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const plans = [
  {
    name: 'Basic plan',
    price: '$10',
    description: 'Basic features for up to 10 users.',
    popular: true,
    features: [
      'Access to basic features',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20 GB individual data',
      'Basic chat and email support'
    ]
  },
  {
    name: 'Business plan',
    price: '$20',
    description: 'Advanced features and reporting.',
    popular: false,
    features: [
      'Everything in Basic plus..',
      'Advanced reporting',
      'Priority support',
      'Up to 50 users',
      '100 GB data',
      'Analytics dashboard'
    ]
  },
  {
    name: 'Enterprise plan',
    price: '$40',
    description: 'Unlimited features.',
    popular: false,
    features: [
      'Unlimited users',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      '24/7 phone support',
      'Onboarding training'
    ]
  }
]
</script>