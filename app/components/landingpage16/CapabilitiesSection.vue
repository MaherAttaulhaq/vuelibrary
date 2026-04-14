<script setup lang="ts">
const capabilities = [
  {
    icon: 'lucide:message-circle',
    title: 'Share team inboxes',
    description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
  },
  {
    icon: 'lucide:zap',
    title: 'Deliver instant answers',
    description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.'
  },
  {
    icon: 'lucide:bar-chart-2',
    title: 'Manage your team with reports',
    description: 'Measure what matters with Untitled\'s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.'
  },
  {
    icon: 'lucide:smile',
    title: 'Connect with customers',
    description: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.'
  },
  {
    icon: 'lucide:grid',
    title: 'Connect the tools you already use',
    description: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.'
  },
  {
    icon: 'lucide:heart',
    title: 'Our people make the difference',
    description: 'We\'re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.'
  }
]
</script>

<template>
  <div class="mx-auto max-w-container px-4 md:px-8">
    <UDivider />
  </div>

  <section class="bg-muted py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <UBadge
          color="primary"
          variant="subtle"
        >
          Our capabilities
        </UBadge>

        <h2 class="mt-4 text-display-sm font-semibold md:text-display-md">
          We're here every step of the way
        </h2>

        <p class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:text-xl">
          We pride ourselves on our ability to challenge core assumptions, unpick legacy behaviors, streamline complex processes, and strike a balance between great design and functional development.
        </p>
      </div>

      <div class="mt-12 md:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="capability in capabilities"
          :key="capability.title"
          class="text-center"
        >
          <div class="flex flex-col items-center gap-4">
            <div class="flex size-12 items-center justify-center rounded-lg bg-muted ring-1 ring-muted-200 dark:ring-muted-800">
              <Icon
                :name="capability.icon"
                class="size-6"
              />
            </div>

            <div>
              <h3 class="text-lg font-semibold text-primary">
                {{ capability.title }}
              </h3>

              <p class="mt-1 text-sm text-muted-600 dark:text-muted-400">
                {{ capability.description }}
              </p>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </section>
</template>
