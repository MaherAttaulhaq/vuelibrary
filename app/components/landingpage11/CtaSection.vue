<template>
  <section class="py-16 md:py-24">
    <div class="max-w-[1560px] mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Get started in 5 minutes</h2>
        <ul class="mt-6 space-y-4">
          <li v-for="item in benefits" :key="item" class="flex gap-3">
            <UIcon name="i-heroicons-check-circle-20-solid" class="w-6 h-6 text-primary" />
            <span class="text-gray-600 dark:text-gray-400">{{ item }}</span>
          </li>
        </ul>
        <div class="mt-8 flex gap-4">
          <UButton variant="outline" label="Learn more" />
          <UButton color="primary" label="Get started" />
        </div>
      </div>
      
      <div class="rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800">
        <img 
          src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp" 
          alt="Dashboard" 
          class="w-full"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const benefits = ['30-day free trial', 'Personalized onboarding', 'Access to all features']
</script>