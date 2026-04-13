<template>
  <section class="bg-muted py-16 md:py-24">
    <div class="mx-auto max-w-[1560px] px-4 md:px-8">
      <!-- Header -->
      <div class="mx-auto flex w-full max-w-2xl xl:mx-0 xl:max-w-3xl">
        <UBadge
          label="Upgrade"
          color="primary"
          variant="subtle"
          class="w-fit"
        />
        <h2 class="mt-3 text-3xl font-semibold text-primary md:text-4xl">
          Pricing as simple as our cards
        </h2>
        <p class="mt-4 text-lg md:mt-5">
          Simple, transparent pricing that grows with you. Try any plan free for 30 days.
        </p>
      </div>

      <!-- Grid -->
      <div class="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-12 md:mt-16 md:gap-16 xl:mx-0 xl:max-w-none xl:grid-cols-2 xl:items-center">
        <!-- LEFT: Features list (unchanged) -->
        <ul class="grid max-w-xl grid-cols-1 gap-10 md:gap-12">
          <li
            v-for="feature in pricingFeatures"
            :key="feature.title"
            class="flex gap-4"
          >
            <div class="relative hidden shrink-0 items-center justify-center bg-muted-light shadow-xs ring-1 ring-muted-dark md:inline-flex size-12 rounded-[10px]">
              <UIcon
                :name="feature.icon"
                class="size-6 text-primary"
              />
            </div>

            <div class="pt-1.5 md:pt-2.5">
              <h3 class="text-lg font-semibold text-primary md:text-xl">
                {{ feature.title }}
              </h3>
              <p class="mt-1 text-md md:mt-2">
                {{ feature.description }}
              </p>
            </div>
          </li>
        </ul>

        <!-- RIGHT: Nuxt UI Pricing Plan -->
        <div class="md:-ml-4">
          <UPricingPlan
            title="Basic plan"
            description="Our most popular plan for small teams."
            price="$10"
            :features="planFeatures"
            :badge="{ label: 'Popular', color: 'primary' }"
            :button="{
              label: 'Get started',
              color: 'primary',
              size: 'lg',
              block: true
            }"
            variant="subtle"
            :ui="{
              root: 'rounded-2xl bg-muted-light shadow-lg ring-1 ring-muted-dark overflow-hidden',
              header: 'px-6 pt-6 pb-8 md:px-8 md:pt-8 md:pb-6',
              body: 'border-t border-muted-dark px-6 py-8 md:px-8 md:pt-8 md:pb-10',
              footer: 'border-t border-muted-dark px-6 pt-6 pb-8 md:p-8'
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const pricingFeatures = [
  { title: 'Share team inboxes', description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.', icon: 'i-heroicons-chat-bubble-left-right' },
  { title: 'Deliver instant answers', description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.', icon: 'i-heroicons-bolt' },
  { title: 'Manage your team with reports', description: 'Measure what matters with Untitled\'s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.', icon: 'i-heroicons-chart-bar' }
]

const planFeatures = [
  'Access to basic features', 'Basic reporting + analytics', 'Up to 10 individual users', '20 GB individual data',
  'Basic chat support', 'Attend events', 'Automatic updates', 'Backup your account', 'Audit log and notes', 'Feature requests'
]
</script>