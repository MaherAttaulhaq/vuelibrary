<script setup lang="ts">
const pricingPlans = [
  {
    name: 'Basic plan',
    price: '$10/mth',
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
    name: 'Business plan',
    price: '$20/mth',
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
    name: 'Enterprise plan',
    price: '$40/mth',
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

<template>
  <section class="bg-muted py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex w-full max-w-3xl flex-col">
        <span
          class="text-sm font-semibold text-brand-600 dark:text-brand-400 md:text-md"
        >Pricing</span>
        <h2
          class="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
        >
          Simple, transparent pricing
        </h2>
        <p
          class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl"
        >
          We believe Untitled should be accessible to all companies, no matter
          the size.
        </p>
      </div>

      <div
        class="mt-12 grid w-full grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-8 xl:grid-cols-3"
      >
        <div
          v-for="plan in pricingPlans"
          :key="plan.name"
          class="relative flex flex-col rounded-2xl bg-muted shadow-lg ring-1 ring-muted-200 dark:ring-muted-800"
        >
          <div
            v-if="plan.popular"
            class="absolute -top-6 right-2 md:-right-16"
          >
            <div class="flex text-brand-600 dark:text-brand-400">
              <svg
                width="60"
                height="46"
                viewBox="0 0 60 46"
                fill="none"
              >
                <path
                  d="M9.22056 42.4485C9.06321 43.2619 9.595 44.0488 10.4084 44.2061C11.2217 44.3635 12.0086 43.8317 12.166 43.0184L9.22056 42.4485ZM50.5841 3.7912C51.405 3.68023 51.9806 2.92474 51.8696 2.10378C51.7586 1.28282 51.0032 0.707267 50.1822 0.818242L50.5841 3.7912ZM4.78725 32.3308C4.36038 31.6208 3.43878 31.3913 2.7288 31.8182C2.01882 32.2451 1.78931 33.1667 2.21618 33.8766L4.78725 32.3308ZM8.9767 42.2098L7.69117 42.9828L7.69189 42.984L8.9767 42.2098ZM12.5932 43.2606L11.9803 41.8916L11.979 41.8921L12.5932 43.2606ZM23.5123 40.0155C24.2684 39.677 24.6069 38.7897 24.2684 38.0336C23.9299 37.2774 23.0425 36.9389 22.2864 37.2774L23.5123 40.0155ZM10.6933 42.7334C12.166 43.0184 12.1659 43.0187 12.1658 43.019C12.1658 43.0189 12.1658 43.0192 12.1658 43.0192C12.1658 43.0192 12.1658 43.0189 12.166 43.0184C12.1662 43.0173 12.1666 43.0152 12.1672 43.012C12.1684 43.0058 12.1705 42.9953 12.1735 42.9808C12.1794 42.9517 12.1887 42.9064 12.2016 42.8456C12.2274 42.7239 12.2676 42.5403 12.3233 42.3008C12.4349 41.8216 12.6088 41.1193 12.8551 40.2421C13.3481 38.4863 14.1291 36.0371 15.2773 33.2782C17.5833 27.7375 21.3236 21.0615 27.0838 16.2002L25.1489 13.9076C18.8763 19.2013 14.905 26.3651 12.5076 32.1255C11.3042 35.0171 10.4856 37.5837 9.96684 39.4311C9.7073 40.3554 9.52235 41.1015 9.40152 41.6204C9.34109 41.8799 9.29667 42.0827 9.26695 42.2227C9.25209 42.2927 9.24091 42.3471 9.23323 42.385C9.22939 42.4039 9.22643 42.4187 9.22432 42.4294C9.22327 42.4347 9.22243 42.4389 9.22181 42.4421C9.22149 42.4437 9.22123 42.4451 9.22103 42.4461C9.22092 42.4467 9.22081 42.4473 9.22075 42.4475C9.22065 42.4481 9.22056 42.4485 10.6933 42.7334ZM27.0838 16.2002C38.8964 6.23107 48.2848 4.10201 50.5841 3.7912L50.1822 0.818242C47.3237 1.20465 37.402 3.56662 25.1489 13.9076L27.0838 16.2002ZM2.21618 33.8766L7.69117 42.9828L10.2622 41.4369L4.78725 32.3308L2.21618 33.8766ZM7.69189 42.984C8.83415 44.8798 11.2204 45.5209 13.2074 44.6291L11.979 41.8921C11.2779 42.2068 10.5661 41.9412 10.2615 41.4357L7.69189 42.984ZM13.2061 44.6297L23.5123 40.0155L22.2864 37.2774L11.9803 41.8916L13.2061 44.6297Z"
                  fill="currentColor"
                />
              </svg>
              <span class="-mt-2 text-sm font-semibold">Most popular!</span>
            </div>
          </div>
          <div
            class="flex flex-col items-center px-6 pt-10 text-center md:px-8"
          >
            <h2
              class="text-display-md font-semibold text-primary md:text-display-lg"
            >
              {{ plan.price }}
            </h2>
            <p class="mt-4 text-xl font-semibold text-primary md:text-xl">
              {{ plan.name }}
            </p>
            <p class="mt-1 text-md text-muted-500 dark:text-muted-400">
              Billed annually.
            </p>
          </div>
          <ul class="flex flex-col gap-4 px-6 pt-8 pb-8 md:p-8 md:pb-10">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex gap-3"
            >
              <div
                class="flex shrink-0 items-center justify-center rounded-full bg-success-100 dark:bg-success-950 text-success-600 dark:text-success-400 size-6"
              >
                <Icon
                  name="lucide:check"
                  class="size-4"
                />
              </div>
              <span class="text-muted-600 dark:text-muted-400 text-md">{{
                feature
              }}</span>
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
      </div>
    </div>
  </section>
</template>
