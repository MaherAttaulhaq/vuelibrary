<template>
  <section class="bg-muted/50 py-12 md:py-16">
    <div class="mx-auto max-w-[1560px] px-4 md:px-8">
      <div class="flex flex-col gap-12 md:gap-16">
        <div class="flex flex-col gap-4 text-center">
          <h2 class="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Simple, transparent pricing
          </h2>
          <p class="text-lg">
            Choose the plan that's right for you. Upgrade or cancel anytime.
          </p>
        </div>
        <div class="grid gap-8 md:grid-cols-3">
          <UCard
            v-for="plan in pricingPlans"
            :key="plan.name"
            class="flex flex-col"
            :class="{ 'ring-2 ring-primary': plan.popular }"
          >
            <template #header>
              <div class="flex flex-col gap-2">
                <h3 class="text-xl font-semibold text-primary">{{ plan.name }}</h3>
                <div class="flex items-baseline gap-1">
                  <span class="text-3xl font-bold text-primary">${{ plan.price }}</span>
                  <span>/month</span>
                </div>
                <p>{{ plan.description }}</p>
              </div>
            </template>
            <div class="flex flex-col gap-4">
              <ul class="flex flex-col gap-2">
                <li
                  v-for="feature in plan.features"
                  :key="feature"
                  class="flex items-center gap-2 text-sm"
                >
                  <Icon name="heroicons:check-20-solid" class="h-4 w-4 text-primary" />
                  {{ feature }}
                </li>
              </ul>
              <UButton
                :variant="plan.popular ? 'default' : 'outline'"
                class="mt-auto"
                size="lg"
              >
                {{ plan.cta }}
              </UButton>
            </div>
          </UCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const pricingPlans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 5 team members',
      'Basic analytics',
      'Email support',
      '1GB storage'
    ],
    cta: 'Start free trial',
    popular: false
  },
  {
    name: 'Professional',
    price: '99',
    description: 'For growing businesses that need more',
    features: [
      'Up to 20 team members',
      'Advanced analytics',
      'Priority support',
      '10GB storage',
      'Custom integrations'
    ],
    cta: 'Start free trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '299',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited team members',
      'Enterprise analytics',
      '24/7 phone support',
      'Unlimited storage',
      'Custom integrations',
      'Dedicated account manager'
    ],
    cta: 'Contact sales',
    popular: false
  }
]
</script>