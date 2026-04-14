<script setup lang="ts">
import { computed, ref } from 'vue'

const page = ref(1)
const pageSize = 2 // adjust per UI layout

const blogPosts = [
  {
    title: 'UX review presentations',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    image: 'https://www.untitledui.com/marketing/spirals.webp',
    author: 'Olivia Rhye',
    date: '20 Jan 2026',
    tags: ['Design', 'Research', 'Presentation']
  },
  {
    title: 'Migrating to Linear 101',
    description:
      'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here\'s how to get started.',
    image: 'https://www.untitledui.com/marketing/conversation.webp',
    author: 'Phoenix Baker',
    date: '19 Jan 2026',
    tags: ['Product', 'Tools', 'SaaS']
  },
  {
    title: 'Building your API stack',
    description:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    image: 'https://www.untitledui.com/blog/two-mobile-shapes-pattern.webp',
    author: 'Lana Steiner',
    date: '18 Jan 2026',
    tags: ['Software Development', 'Tools']
  },
  {
    title: 'PM mental models',
    description:
      'Mental models are simple expressions of complex processes or relationships.',
    image: 'https://www.untitledui.com/blog/two-people.webp',
    author: 'Demi Wilkinson',
    date: '17 Jan 2026',
    tags: ['Leadership', 'Management']
  }
]

// computed pagination
const paginatedPosts = computed(() => {
  const start = (page.value - 1) * pageSize
  return blogPosts.slice(start, start + pageSize)
})

const totalPages = computed(() => Math.ceil(blogPosts.length / pageSize))
</script>

<template>
  <section class="overflow-hidden bg-muted py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <!-- HEADER -->
      <div class="text-center mb-12">
        <h2 class="text-display-sm font-semibold text-primary md:text-display-md mb-4">
          Read our blogs
        </h2>
        <p class="text-lg text-default md:text-xl max-w-2xl mx-auto">
          Discover insights, tips, and stories from our team about design, development, and everything in between.
        </p>
      </div>

      <!-- BLOG CARDS -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="post in paginatedPosts"
          :key="post.title"
          class="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          @click="$router.push('#')"
        >
          <template #header>
            <div class="aspect-[4/3] overflow-hidden rounded-t-lg">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              >
            </div>
          </template>

          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <UIcon name="i-lucide-user" class="w-4 h-4 text-muted-400" />
              <span class="text-sm text-default">{{ post.author }}</span>
              <span class="text-muted-400">•</span>
              <time class="text-sm text-default">{{ post.date }}</time>
            </div>

            <h3 class="text-lg font-semibold text-primary mb-2 line-clamp-2 group-hover:text-brand-600 transition-colors">
              {{ post.title }}
            </h3>

            <p class="text-md text-default mb-4 line-clamp-3">
              {{ post.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="tag in post.tags.slice(0, 2)"
                :key="tag"
                variant="subtle"
                size="sm"
                class="text-xs"
              >
                {{ tag }}
              </UBadge>
            </div>
          </div>
        </UCard>
      </div>

      <!-- PAGINATION -->
      <div class="mt-12 flex justify-center">
        <UPagination
          v-model:page="page"
          :total="blogPosts.length"
          :items-per-page="pageSize"
          :page-count="totalPages"
          :sibling-count="1"
        />
      </div>
    </div>
  </section>
</template>
