<script setup lang="ts">
const basicFeatures = [
  'Access to all basic features',
  'Basic reporting and analytics',
  'Up to 10 individual users',
  '20 GB individual data',
  'Basic chat and email support'
]

const businessFeatures = [
  '200+ integrations',
  'Advanced reporting',
  'Up to 20 individual users',
  '40 GB individual data',
  'Priority chat and email support'
]
</script>

<template>
  <section class="bg-muted py-16 md:py-24 overflow-hidden">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col gap-16 xl:flex-row">
        <!-- LEFT TEXT -->
        <div class="w-full max-w-3xl xl:max-w-md">
          <span class="block text-sm font-semibold text-brand-secondary">
            Upgrade
          </span>

          <h2 class="mt-3 text-display-sm md:text-display-md font-semibold text-primary">
            Pricing plans that scale with you
          </h2>

          <p class="mt-4 text-lg text-tertiary">
            Simple, transparent pricing that grows with you. Try any plan free for 30 days.
          </p>
        </div>

        <!-- RIGHT PLANS -->
        <div class="grid w-full grid-cols-1 md:grid-cols-2 gap-8">
          <!-- BASIC -->
          <UPricingPlan
            title="Basic plan"
            description="Billed annually"
            price="$10/mth"
            :features="basicFeatures"
            :button="{ label: 'Get started', color: 'primary' }"
            variant="subtle"
            class="bg-muted"
          />

          <!-- BUSINESS -->
          <div class="relative">
            <div class="absolute -top-6 right-2 md:-right-6 text-brand-secondary text-sm font-semibold">
              Most popular!
            </div>

            <UPricingPlan
              title="Business plan"
              description="Billed annually"
              price="$20/mth"
              :features="businessFeatures"
              :button="{ label: 'Get started', color: 'primary' }"
              variant="subtle"
              class="bg-muted"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
