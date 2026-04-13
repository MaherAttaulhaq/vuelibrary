<script setup lang="ts">
const pricingPlans = [
  {
    title: 'Basic plan',
    description: 'Our most popular plan for small teams.',
    price: '$10',
    period: '/month',
    features: [
      'Access to basic features',
      'Basic reporting + analytics',
      'Up to 10 individual users',
      '20 GB individual data'
    ],
    button: { label: 'Get started' },
    variant: 'subtle' as const
  },
  {
    title: 'Business plan',
    description: 'Advanced features and reporting.',
    price: '$20',
    period: '/month',
    features: [
      '200+ integrations',
      'Advanced reporting',
      'Up to 20 individual users',
      'Priority chat support'
    ],
    button: { label: 'Get started' },
    variant: 'solid' as const,
    badge: 'Popular'
  }
]
</script>

<template>
  <section class="py-16 md:py-24 bg-muted">
    <UContainer>
      <div class="text-center max-w-2xl mx-auto">
        <UBadge color="primary" variant="subtle">
          Pricing
        </UBadge>
        <h2 class="text-3xl md:text-4xl font-bold mt-2 text-primary">Plans that fit your scale</h2>
        <p class="mt-4">Simple, transparent pricing. Try any plan free for 30 days.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
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