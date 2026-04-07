<template>
  <section class="py-16 md:py-24">
    <div class="max-w-[1560px] mx-auto px-4 md:px-8">
      <div class="flex flex-wrap justify-between items-end gap-4">
        <div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Don't just take our word for it</h2>
          <p class="text-gray-600 dark:text-gray-400 mt-2">Hear from amazing customers building faster.</p>
        </div>
        <div class="flex gap-3">
          <UButton variant="outline" label="Our customers" />
          <UButton color="primary" label="Create account" />
        </div>
      </div>
      
      <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <UCard v-for="testimonial in testimonials" :key="testimonial.name" class="overflow-hidden p-0">
          <img :src="testimonial.image" :alt="testimonial.name" class="w-full h-48 object-cover" />
          <div class="p-4">
            <div class="flex text-yellow-400">
              <UIcon v-for="i in 5" :key="i" name="i-heroicons-star-20-solid" class="w-4 h-4" />
            </div>
            <p class="font-semibold mt-2">{{ testimonial.name }}</p>
            <p class="text-sm text-gray-500">{{ testimonial.title }}</p>
          </div>
        </UCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  { name: 'Alisa Hester', title: 'PM, Hourglass', image: 'https://www.untitledui.com/images/portraits/alisa-hester' },
  { name: 'Rich Wilson', title: 'COO, Command+R', image: 'https://www.untitledui.com/images/portraits/rich-wilson' },
  { name: 'Annie Stanley', title: 'Designer, Catalog', image: 'https://www.untitledui.com/images/portraits/annie-stanley' },
  { name: 'Johnny Bell', title: 'PM, Sisyphus', image: 'https://www.untitledui.com/images/portraits/johnny-bell' }
]
</script>