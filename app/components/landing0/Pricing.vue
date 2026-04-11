<template>
  <section
    id="pricing"
    class="px-4 py-16 sm:px-6 lg:px-8"
  >
    <div class="mx-auto max-w-6xl space-y-6 text-center">
      <UBadge
        color="neutral"
        variant="subtle"
      >
        Pricing
      </UBadge>

      <h2 class="text-3xl font-semibold text-white sm:text-4xl">
        Pick the plan that fits your launch
      </h2>

      <p class="text-base text-gray-300">
        Transparent pricing with upgrade paths for fast-growing teams and
        complete enterprise deployments.
      </p>
    </div>

    <div class="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
      <UPricingPlan
        v-for="tier in pricingTiers"
        :key="tier.name"
        :title="tier.name"
        :description="tier.description"
        :price="tier.price"
        :features="tier.features"
        :badge="tier.badge"
        :button="{
          label: `Choose ${tier.name}`
        }"
        variant="subtle"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const pricingTiers = [
  {
    name: 'Starter',
    price: '$199',
    description: 'Best for individuals getting started.',
    badge: null, // or 'Popular'
    features: ['1 project', 'Basic support', 'Community access']
  },
  {
    name: 'Pro',
    price: '$499',
    description: 'For scaling startups.',
    badge: 'Most Popular',
    features: ['Unlimited projects', 'Priority support', 'Advanced analytics']
  },
  {
    name: 'Enterprise',
    price: '$999',
    description: 'Full-scale deployment.',
    badge: null,
    features: ['Dedicated team', 'Custom integrations', '24/7 support']
  }
]
</script>