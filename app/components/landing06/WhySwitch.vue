<template>
  <section class="py-12 md:py-16">
    <div class="mx-auto max-w-[1560px] px-4 md:px-8">
      <div class="flex flex-col gap-12 md:gap-16">
        <div class="flex flex-col gap-4 text-center">
          <h2 class="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Why switch to Untitled?
          </h2>
          <p class="text-lg">
            We help you grow your business with our powerful tools and analytics.
          </p>
        </div>
        <div class="grid gap-8 md:grid-cols-2">
          <div
            v-for="item in whySwitch"
            :key="item.title"
            class="flex flex-col gap-4"
          >
            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <component :is="item.icon" class="h-6 w-6 text-primary" />
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-xl font-semibold text-primary">{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const whySwitch = [
  {
    title: 'Easy to use',
    description: 'Our platform is designed to be intuitive and easy to use, so you can focus on growing your business.',
    icon: 'heroicons:cursor-arrow-rays-20-solid'
  },
  {
    title: 'Powerful analytics',
    description: 'Get insights into your customers and business with our powerful analytics tools.',
    icon: 'heroicons:chart-bar-square-20-solid'
  },
  {
    title: '24/7 support',
    description: 'Our team is here to help you succeed with 24/7 support and resources.',
    icon: 'heroicons:chat-bubble-left-right-20-solid'
  },
  {
    title: 'Secure & reliable',
    description: 'Your data is safe with our enterprise-grade security and reliability.',
    icon: 'heroicons:shield-check-20-solid'
  }
]
</script>