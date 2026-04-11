<template>
  <section class="py-12 md:py-16">
    <div class="mx-auto max-w-[1560px] px-4 md:px-8">
      <div class="flex flex-col gap-12 md:gap-16">
        <div class="flex flex-col gap-4 text-center">
          <h2 class="text-3xl font-bold tracking-tight md:text-4xl">
            Everything you need to succeed online.
          </h2>
          <p class="text-lg text-muted-foreground">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
          </p>
        </div>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="flex flex-col gap-4"
          >
            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <component :is="feature.icon" class="h-6 w-6 text-primary" />
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-xl font-semibold">{{ feature.title }}</h3>
              <p class="text-muted-foreground">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const features = [
  {
    title: 'Grow your audience',
    description: 'Find new customers and build your brand with our powerful marketing tools.',
    icon: 'heroicons:chart-bar-square-20-solid'
  },
  {
    title: 'Sell more effectively',
    description: 'Close more deals with automation, analytics, and integrations.',
    icon: 'heroicons:currency-dollar-20-solid'
  },
  {
    title: 'Understand your customers',
    description: 'Get insights into who your customers are and what they want.',
    icon: 'heroicons:user-group-20-solid'
  },
  {
    title: 'Run your own experiments',
    description: 'Test new ideas and measure their impact with our experimentation tools.',
    icon: 'heroicons:beaker-20-solid'
  },
  {
    title: 'Deliver personalized experiences',
    description: 'Create tailored experiences for your customers with our segmentation tools.',
    icon: 'heroicons:adjustments-horizontal-20-solid'
  },
  {
    title: 'Scale your business',
    description: 'Grow your business with our scalable infrastructure and support.',
    icon: 'heroicons:arrow-trending-up-20-solid'
  }
]
</script>