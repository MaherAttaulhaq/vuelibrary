<script setup lang="ts">
const features = [
  { icon: 'i-lucide-messages-square', title: 'Share team inboxes', description: 'Shared team inboxes keep everyone on the same page.' },
  { icon: 'i-lucide-zap', title: 'Deliver instant answers', description: 'All-in-one customer service platform.' },
  { icon: 'i-lucide-chart-line', title: 'Manage your team with reports', description: 'Easy-to-use reports with filtering & export.' }
]
</script>

<template>
  <section class="py-16 md:py-24">
    <UContainer>
      <div class="text-center max-w-3xl mx-auto">
        <UBadge color="secondary" variant="subtle">
          Features
        </UBadge>
        <h2 class="text-3xl md:text-4xl font-bold mt-4 text-primary">Cutting-edge features for advanced analytics</h2>
        <p class="mt-4">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row items-center gap-12 mt-16">
        <div class="flex-1 hidden md:block">
          <img src="https://www.untitledui.com/marketing/screen-mockups/iphone-and-screen-mockup-light-01.webp" alt="Dashboard preview" class="w-full rounded-2xl shadow-2xl">
        </div>
        <div class="flex-1 grid grid-cols-1 gap-8">
          <div v-for="feature in features" :key="feature.title" class="flex flex-col items-start gap-3">
            <UIcon :name="feature.icon" class="text-3xl text-primary" />
            <h3 class="text-xl font-semibold text-primary">{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
            <UButton color="primary" variant="link">Learn more →</UButton>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>