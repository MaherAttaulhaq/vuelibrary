<template>
  <section class="py-16 md:py-24">
    <div class="max-w-[1560px] mx-auto px-4 md:px-8 text-center">
      <UBadge color="primary" variant="subtle" label="Features" />
      
      <h2 class="mt-3 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        All you need to run your finances effectively
      </h2>
      
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Open a full-featured account with virtual cards in less than 5 minutes.
      </p>
      
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UCard 
          v-for="feature in features" 
          :key="feature.title"
          class="text-center"
          :ui="{ body: { padding: 'p-6' } }"
        >
          <div class="flex justify-center">
            <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
              <UIcon :name="feature.icon" class="w-6 h-6 text-primary" />
            </div>
          </div>
          <h3 class="mt-4 text-lg font-semibold">{{ feature.title }}</h3>
          <p class="mt-2 text-gray-600 dark:text-gray-400">{{ feature.description }}</p>
        </UCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'Share team inboxes',
    description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page.',
    icon: 'i-heroicons-users-20-solid'
  },
  {
    title: 'Deliver instant answers',
    description: 'An all-in-one customer service platform that helps you balance everything your customers need.',
    icon: 'i-heroicons-bolt-20-solid'
  },
  {
    title: 'Manage your team with reports',
    description: 'Measure what matters with easy-to-use reports. Filter, export, and drilldown on data.',
    icon: 'i-heroicons-chart-bar-20-solid'
  },
  {
    title: 'Connect with customers',
    description: 'Solve problems or close sales in real-time with chat. Seamless routing to email.',
    icon: 'i-heroicons-chat-bubble-left-right-20-solid'
  },
  {
    title: 'Connect the tools you already use',
    description: 'Explore 100+ integrations that make your workflow more efficient and familiar.',
    icon: 'i-heroicons-cube-20-solid'
  },
  {
    title: 'Our people make the difference',
    description: "We're an extension of your customer service team. Chat to our friendly team 24/7.",
    icon: 'i-heroicons-heart-20-solid'
  }
]
</script>