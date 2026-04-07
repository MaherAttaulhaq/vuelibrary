<script setup lang="ts">
import { computed, ref } from 'vue'

const page = ref(1)
const perPage = 3

const testimonials = [
  { author: 'Alisa Hester', imageUrl: 'https://www.untitledui.com/images/portraits/alisa-hester', cite: 'PM, Hourglass', industry: 'Web Design Agency', quote: '' },
  { author: 'Rich Wilson', imageUrl: 'https://www.untitledui.com/images/portraits/rich-wilson', cite: 'COO, Command+R', industry: 'Web Development Agency', quote: "We've really sped up our workflow using Untitled." },
  { author: 'Annie Stanley', imageUrl: 'https://www.untitledui.com/images/portraits/annie-stanley', cite: 'Designer, Catalog', industry: 'UX Agency', quote: '' },
  { author: 'Johnny Bell', imageUrl: 'https://www.untitledui.com/images/portraits/johnny-bell', cite: 'PM, Sisyphus', industry: 'Machine Learning', quote: '' },
  { author: 'Sarah Kim', imageUrl: 'https://www.untitledui.com/images/portraits/annie-stanley', cite: 'CEO, Nova', industry: 'Startup', quote: 'Amazing experience!' },
  { author: 'David Lee', imageUrl: 'https://www.untitledui.com/images/portraits/rich-wilson', cite: 'CTO, ScaleUp', industry: 'Tech', quote: 'Highly recommend.' }
]

const paginatedTestimonials = computed(() => {
  const start = (page.value - 1) * perPage
  return testimonials.slice(start, start + perPage)
})
</script>

<template>
  <section class="overflow-hidden bg-muted py-16 md:py-24">
    <UContainer>

      <!-- SAME HEADER -->
      <div class="flex flex-col justify-between gap-8 lg:flex-row lg:gap-0">
        <div class="flex max-w-3xl flex-col gap-4 md:gap-5">
          <h2 class="text-3xl font-semibold text-primary md:text-4xl">
            Don't just take our word for it
          </h2>
          <p class="text-lg text-tertiary md:text-xl">
            Hear from some of our amazing customers who are automating their finances.
          </p>
        </div>

        <div class="flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-start">
          <UButton color="secondary" size="xl">Our customers</UButton>
          <UButton color="primary" size="xl">Create account</UButton>
        </div>
      </div>

      <!-- ✅ 3 CARDS -->
      <div class="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="testimonial in paginatedTestimonials"
          :key="testimonial.author"
          class="group relative overflow-hidden rounded-2xl p-0"
        >
          <img
            :src="testimonial.imageUrl"
            class="h-[420px] w-full object-cover"
            :alt="testimonial.author"
          />

          <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-20">
            <div class="rounded-xl bg-white/10 backdrop-blur-md p-4 ring-1 ring-white/30">
              <p v-if="testimonial.quote" class="mb-4 text-sm font-semibold text-white">
                {{ testimonial.quote }}
              </p>

              <div class="flex gap-1 mb-3">
                <UIcon
                  v-for="i in 5"
                  :key="i"
                  name="i-lucide-star"
                  class="h-4 w-4 text-yellow-400 fill-yellow-400"
                />
              </div>

              <p class="text-md font-semibold text-white">{{ testimonial.author }}</p>
              <p class="text-sm text-white/80">{{ testimonial.cite }}</p>
              <p class="text-xs text-white/70 mt-1">{{ testimonial.industry }}</p>
            </div>
          </div>
        </UCard>
      </div>

      <!-- ✅ CORRECT PAGINATION -->
      <div class="flex justify-center mt-10">
        <UPagination
          v-model:page="page"
          :total="testimonials.length"
          :items-per-page="perPage"
        />
      </div>

    </UContainer>
  </section>
</template>
