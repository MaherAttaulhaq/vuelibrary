<template>
  <footer class="border-t border-gray-200 dark:border-gray-800 py-12">
    <div class="max-w-[1560px] mx-auto px-4 md:px-8">
      <div class="text-center">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">No long-term contracts. No catches. Simple.</h3>
        <p class="mt-2 text-gray-600 dark:text-gray-400">Start your 30-day free trial. Cancel anytime.</p>
        <div class="mt-6 flex justify-center gap-4">
          <UButton variant="outline" label="View demo" />
          <UButton color="primary" label="Get started" />
        </div>
      </div>
      
      <UDivider class="my-12" />
      
      <div class="flex flex-wrap justify-between gap-8 items-start">
        <div>
          <div class="font-bold text-xl">Untitled UI</div>
          <p class="text-sm text-gray-500 max-w-xs mt-2">
            Design amazing digital experiences that create more happy in the world.
          </p>
        </div>
        
        <div class="flex gap-8">
          <div v-for="column in footerColumns" :key="column.title">
            <h4 class="font-semibold">{{ column.title }}</h4>
            <ul class="mt-2 space-y-1 text-sm text-gray-500">
              <li v-for="link in column.links" :key="link">
                <a href="#" class="hover:text-gray-700 dark:hover:text-gray-300 transition">{{ link }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <UDivider class="my-8" />
      
      <div class="text-center text-sm text-gray-500">
        © 2077 Untitled UI. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const footerColumns = [
  { title: 'Product', links: ['Overview', 'Features', 'Pricing'] },
  { title: 'Company', links: ['About', 'Careers', 'Press'] },
  { title: 'Resources', links: ['Blog', 'Help Center', 'Contact'] }
]
</script>