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
        <div class="w-full max-w-3xl xl:max-w-md">
          <span
            class="block text-sm font-semibold text-brand-secondary md:text-md"
          >Upgrade</span>
          <h2
            class="mt-3 hidden text-display-sm font-semibold text-primary md:flex md:text-display-md"
          >
            Pricing plans that scale
          </h2>
          <h2
            class="mt-3 flex text-display-sm font-semibold text-primary md:hidden md:text-display-md"
          >
            Pricing plans that scale with you
          </h2>
          <p class="mt-4 text-lg text-tertiary md:mt-5">
            Simple, transparent pricing that grows with you. Try any plan free
            for 30 days.
          </p>
        </div>

        <div
          class="grid w-full grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-8"
        >
          <!-- Basic Plan -->
          <div
            class="relative flex flex-col rounded-2xl bg-muted shadow-lg ring-1 ring-secondary_alt"
          >
            <div
              class="flex flex-col items-center px-6 pt-10 text-center md:px-8"
            >
              <h2
                class="text-display-md font-semibold text-primary md:text-display-lg"
              >
                $10/mth
              </h2>
              <p class="mt-4 text-xl font-semibold text-primary md:text-xl">
                Basic plan
              </p>
              <p class="mt-1 text-md text-tertiary">
                Billed annually.
              </p>
            </div>
            <ul class="flex flex-col gap-4 px-6 pt-8 pb-8 md:p-8 md:pb-10">
              <li
                v-for="feature in basicFeatures"
                :key="feature"
                class="flex gap-3"
              >
                <div
                  class="flex shrink-0 items-center justify-center rounded-full bg-success-secondary text-featured-icon-light-fg-success size-6"
                >
                  <Icon
                    name="lucide:check"
                    class="size-4"
                  />
                </div>
                <span class="text-tertiary text-md">{{ feature }}</span>
              </li>
            </ul>
            <div class="mt-auto flex flex-col gap-3 px-6 pb-8 md:px-8">
              <UButton
                variant="solid"
                color="primary"
                block
              >
                Get started
              </UButton>
            </div>
          </div>

          <!-- Business Plan -->
          <div
            class="relative flex flex-col rounded-2xl bg-primary shadow-lg ring-1 ring-secondary_alt"
          >
            <div class="absolute -top-6 right-2 md:-right-8">
              <div class="flex text-brand-secondary">
                <PopularBadge />
                <span class="-mt-2 text-sm font-semibold">Most popular!</span>
              </div>
            </div>
            <div
              class="flex flex-col items-center px-6 pt-10 text-center md:px-8 bg-muted"
            >
              <h2
                class="text-display-md font-semibold text-primary md:text-display-lg"
              >
                $20/mth
              </h2>
              <p class="mt-4 text-xl font-semibold text-primary md:text-xl">
                Business plan
              </p>
              <p class="mt-1 text-md text-tertiary">
                Billed annually.
              </p>
            </div>
            <ul
              class="flex flex-col gap-4 px-6 pt-8 pb-8 md:p-8 md:pb-10 bg-muted"
            >
              <li
                v-for="feature in businessFeatures"
                :key="feature"
                class="flex gap-3"
              >
                <div
                  class="flex shrink-0 items-center justify-center rounded-full bg-success-secondary text-featured-icon-light-fg-success size-6"
                >
                  <Icon
                    name="lucide:check"
                    class="size-4"
                  />
                </div>
                <span class="text-tertiary text-md">{{ feature }}</span>
              </li>
            </ul>
            <div class="mt-auto flex flex-col gap-3 px-6 pb-8 md:px-8 bg-muted">
              <UButton
                variant="solid"
                color="primary"
                block
              >
                Get started
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
