<template>
  <section class="overflow-hidden bg-white dark:bg-gray-950 pt-16 lg:py-24">
    <div class="mx-auto w-full max-w-[1560px] px-4 md:px-8">
      <div class="flex w-full flex-col lg:max-w-3xl">
        <UBadge color="primary" variant="subtle" label="Features" />
        <h2 class="mt-3 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Overflowing with useful features
        </h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 md:mt-5 md:text-xl">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      
      <div class="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center">
        <ul class="flex flex-col">
          <li v-for="(feature, index) in features" :key="feature.title">
            <div 
              class="relative flex cursor-pointer flex-col items-start gap-4 py-4 pl-5 transition duration-100 ease-linear"
              :class="[
                index === 0 ? 'border-l-4 border-primary' : 'border-l-4 border-gray-200 dark:border-gray-800 hover:border-primary'
              ]"
            >
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ feature.title }}</h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">{{ feature.description }}</p>
              </div>
              <UButton variant="link" color="primary" label="Learn more" icon="i-heroicons-arrow-right-20-solid" icon-trailing />
            </div>
          </li>
        </ul>
        
        <!-- iPhone Mockup -->
        <div class="relative flex h-104 w-full justify-center md:h-120 lg:-ml-4 lg:h-140">
          <div class="relative w-71 drop-shadow-iphone-mockup">
            <div class="rounded-[2.5rem] bg-gray-900 p-2 shadow-xl">
              <div class="overflow-hidden rounded-[2rem]">
                <img 
                  src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp" 
                  alt="iPhone mockup" 
                  class="w-full dark:hidden"
                />
                <img 
                  src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp" 
                  alt="iPhone mockup" 
                  class="w-full not-dark:hidden"
                />
              </div>
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
    title: 'Share team inboxes',
    description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
  },
  {
    title: 'Deliver instant answers',
    description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.'
  },
  {
    title: 'Manage your team with reports',
    description: 'Measure what matters with Untitled\'s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.'
  }
]
</script>