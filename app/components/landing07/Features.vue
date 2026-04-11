<template>
  <section class="bg-bg-secondary py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col gap-x-16 gap-y-12 lg:flex-row lg:items-center">
        <div class="flex max-w-2xl flex-1 flex-col">
          <h2 class="text-display-md font-semibold text-text-primary md:text-display-lg">
            Everything you need to accept card payments
          </h2>
          <p class="mt-4 text-xl text-text-tertiary">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
          <ul class="mt-8 flex flex-col gap-6">
            <li v-for="feature in features" :key="feature.title">
              <FeatureItem
                :icon="feature.icon"
                :title="feature.title"
                :description="feature.description"
              />
            </li>
          </ul>
        </div>
        <div class="flex flex-1 justify-center lg:justify-end">
          <div class="relative">
            <div class="absolute -left-8 top-8 z-10 rotate-6">
              <CreditCard name="John Doe" date="12/25" />
            </div>
            <div class="absolute -right-8 top-16 z-20 -rotate-6">
              <CreditCardGlass name="Jane Smith" date="08/26" />
            </div>
            <div class="relative z-30">
              <CreditCard name="Mike Johnson" date="03/27" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: 'i-lucide-message-square',
    title: 'Unlimited cards',
    description:
      'Give your team the autonomy they need with access to as many cards as they need. Authorise purchases with a click. Simple.'
  },
  {
    icon: 'i-lucide-zap',
    title: 'Easy expense policies',
    description:
      'Every card comes with configurable spending limits, purchase restrictions, and cancellations for each employee and team.'
  },
  {
    icon: 'i-lucide-chart-bar',
    title: 'Advanced analytics',
    description:
      'An all-in-one platform that helps you balance everything your team need to be happy and your finances in order.'
  }
]
</script>