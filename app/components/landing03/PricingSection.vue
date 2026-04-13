<!-- components/PricingSection.vue -->
<template>
  <section class="bg-muted py-16 md:py-24">
    <UContainer>
      <div class="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <UBadge color="secondary" variant="subtle">Pricing</UBadge>
        <h2 class="mt-3 text-3xl font-semibold text-primary md:text-4xl">Plans that fit your scale</h2>
        <p class="mt-4 text-lg md:mt-5 md:text-xl">
          Simple, transparent pricing that grows with you. Try any plan free for 30 days.
        </p>
      </div>

      <div class="mt-12 grid w-full grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        <UPricingPlan
          v-for="plan in pricingPlans"
          :key="plan.title"
          :title="plan.title"
          :description="plan.description"
          :price="plan.price"
          :period="plan.period"
          :features="plan.features"
          :button="plan.button"
          :variant="plan.variant"
        />
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const pricingPlans = [
  {
    title: 'Basic plan',
    description: 'Basic features for up to 10 users.',
    price: '$10',
    period: 'per month',
    variant: 'subtle' as const,
    button: { label: 'Get started' },
    features: [
      'Access to basic features',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20 GB individual data',
      'Basic chat and email support'
    ]
  },
  {
    title: 'Business plan',
    description: 'Advanced features and reporting.',
    price: '$20',
    period: 'per month',
    variant: 'solid' as const,
    button: { label: 'Get started' },
    badge: 'Popular',
    features: [
      'Access to advanced features',
      'Advanced reporting and analytics',
      'Up to 50 individual users',
      '100 GB individual data',
      'Priority chat and email support',
      'API access'
    ]
  },
  {
    title: 'Enterprise plan',
    description: 'Unlimited features.',
    price: '$40',
    period: 'per month',
    variant: 'subtle' as const,
    button: { label: 'Get started' },
    features: [
      'Access to all features',
      'Custom reporting and analytics',
      'Unlimited users',
      'Unlimited data storage',
      '24/7 phone and email support',
      'API access with higher limits',
      'SLA guarantee',
      'Custom integrations'
    ]
  }
]
</script>