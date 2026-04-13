<template>
  <section class="bg-muted py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col items-center gap-12 text-center">
        <div class="flex max-w-2xl flex-col">
          <h2 class="text-display-md font-semibold text-primary md:text-display-lg">
            Simple, transparent pricing
          </h2>
          <p class="mt-4 text-xl">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <PricingCard
            v-for="plan in plans"
            :key="plan.title"
            :title="plan.title"
            :price="plan.price"
            :features="plan.features.join(', ')"
            :is-popular="plan.popular"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const plans = [
  {
    title: 'Basic plan',
    price: '$10',
    popular: false,
    features: [
      'Access to all basic features',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20 GB individual data',
      'Basic chat and email support'
    ]
  },
  {
    title: 'Business plan',
    price: '$20',
    popular: true,
    features: [
      '200+ integrations',
      'Advanced reporting and analytics',
      'Up to 20 individual users',
      '40 GB individual data',
      'Priority chat and email support'
    ]
  },
  {
    title: 'Enterprise plan',
    price: '$40',
    popular: false,
    features: [
      'Advanced custom fields',
      'Audit log and data history',
      'Unlimited individual users',
      'Unlimited individual data',
      'Personalized + priority service'
    ]
  }
]
</script>