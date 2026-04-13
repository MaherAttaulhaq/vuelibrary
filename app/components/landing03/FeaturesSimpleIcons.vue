<!-- components/FeaturesSimpleIcons.vue -->
<template>
  <section class="bg-muted py-16 md:py-24">
    <UContainer>
      <div class="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <UBadge color="secondary" variant="subtle">Features</UBadge>
        <h2 class="mt-3 text-3xl font-semibold text-primary md:text-4xl">All you need to run your finances effectively</h2>
        <p class="mt-4 text-lg md:mt-5 md:text-xl">
          Open a full-featured account with virtual cards in less than 5 minutes.
        </p>
      </div>

      <div class="mt-12 md:mt-16">
        <div class="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <UCard v-for="feature in features" :key="feature.title" class="flex max-w-sm flex-col items-center gap-4 text-center border-0 shadow-none bg-transparent">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <UIcon :name="feature.icon" class="h-6 w-6" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-primary">{{ feature.title }}</h3>
              <p class="mt-1 text-md">{{ feature.description }}</p>
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'Share team inboxes',
    icon: 'i-lucide-message-square',
    description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
  },
  {
    title: 'Deliver instant answers',
    icon: 'i-lucide-zap',
    description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.'
  },
  {
    title: 'Manage your team with reports',
    icon: 'i-lucide-chart-line',
    description: 'Measure what matters with Untitled\'s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.'
  },
  {
    title: 'Connect with customers',
    icon: 'i-lucide-messages-square',
    description: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.'
  },
  {
    title: 'Connect the tools you already use',
    icon: 'i-lucide-link',
    description: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.'
  },
  {
    title: 'Our people make the difference',
    icon: 'i-lucide-heart',
    description: 'We\'re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.'
  }
]
</script>