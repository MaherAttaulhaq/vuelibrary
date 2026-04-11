<template>
  <div class="relative flex flex-col rounded-2xl bg-bg-primary shadow-lg ring-1 ring-border-secondary_alt">
    <div v-if="isPopular" class="absolute -top-6 right-2 md:-right-16">
      <div class="flex text-text-brand-secondary">
        <svg viewBox="0 0 60 46" class="w-12" fill="currentColor" aria-hidden="true">
          <path d="M9.22056 42.4485C9.06321 43.2619 9.595 44.0488 10.4084 44.2061C11.2217 44.3635 12.0086 43.8317 12.166 43.0184L9.22056 42.4485ZM50.5841 3.7912C51.405 3.68023 51.9806 2.92474 51.8696 2.10378C51.7586 1.28282 51.0032 0.707267 50.1822 0.818242L50.5841 3.7912ZM4.78725 32.3308C4.36038 31.6208 3.43878 31.3913 2.7288 31.8182C2.01882 32.2451 1.78931 33.1667 2.21618 33.8766L4.78725 32.3308Z" />
        </svg>
        <span class="-mt-2 text-sm font-semibold">Most popular!</span>
      </div>
    </div>
    <div class="flex flex-col items-center px-6 pt-10 text-center md:px-8">
      <h2 class="text-display-md font-semibold text-text-primary md:text-display-lg">{{ price }}/mth</h2>
      <p class="mt-4 text-xl font-semibold text-text-primary md:text-xl">{{ title }}</p>
      <p class="mt-1 text-md text-text-tertiary">Billed annually.</p>
    </div>
    <ul class="flex flex-col gap-4 px-6 pt-8 pb-8 md:p-8 md:pb-10">
      <li v-for="(feature, index) in featureList" :key="index" class="flex gap-3">
        <div class="flex shrink-0 items-center justify-center rounded-full bg-bg-success-secondary text-icon-success size-6">
          <svg viewBox="0 0 13 11" class="w-3" fill="currentColor" aria-hidden="true">
            <path d="M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037Z" />
          </svg>
        </div>
        <span class="text-text-tertiary text-md">{{ feature }}</span>
      </li>
    </ul>
    <div class="mt-auto flex flex-col gap-3 px-6 pb-8 md:px-8">
      <UButton label="Get started" color="primary" block />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  price: string
  features: string
  isPopular: boolean
}>()

const featureList = computed(() => props.features.split(', '))
</script>

