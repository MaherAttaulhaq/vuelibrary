<script setup lang="ts">
const pricing = [
  {
    tier: 'Solo',
    price: '$249',
    description: 'For bootstrappers and indie hackers.',
    features: [
      'One developer',
      'Unlimited projects',
      'GitHub access',
      'Lifetime updates'
    ]
  },
  {
    tier: 'Pro',
    price: '$499',
    description: 'For growing startups.',
    features: [
      '5 developers',
      'Priority support',
      'Advanced features'
    ]
  },
  {
    tier: 'Team',
    price: '$999',
    description: 'For scaling teams.',
    features: [
      'Unlimited developers',
      'Dedicated support',
      'All features'
    ]
  }
]
</script>

<template>
  <section
    id="pricing"
    class="border-b border-border bg-muted px-4 py-16 sm:px-6 lg:px-8"
  >
    <div class="mx-auto max-w-6xl space-y-6 text-center">
      <UBadge color="neutral" variant="subtle" class="text-xs uppercase tracking-[0.4em]">
        Pricing
      </UBadge>

      <h2 class="text-3xl font-semibold text-primary sm:text-4xl">
        Pick the tier that matches your rollout
      </h2>
    </div>

    <div class="mx-auto mt-10 grid gap-6 md:grid-cols-3">
      <UPricingPlan
        v-for="plan in pricing"
        :key="plan.tier"
        :title="plan.tier"
        :description="plan.description"
        :price="plan.price"
        :features="plan.features"
        :button="{
          label: `Choose ${plan.tier}`
        }"
        variant="subtle"
      />
    </div>
  </section>
</template>