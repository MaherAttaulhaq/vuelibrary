<template>
  <section class="bg-muted py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <!-- Header (unchanged structure) -->
      <div class="flex flex-col items-start justify-between lg:flex-row">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold text-brand-secondary md:text-md">
            Our blog
          </p>

          <h2 class="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
            Latest blog posts
          </h2>

          <p class="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
            Tool and strategies modern teams need to help their companies grow.
          </p>
        </div>

        <div class="hidden gap-3 lg:flex">
          <UButton color="primary">
            View all posts
          </UButton>
        </div>
      </div>

      <!-- Blog Posts -->
      <ul class="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="post in blogPosts"
          :key="post.title"
        >
          <UCard class="overflow-hidden h-full flex flex-col">
            <!-- Image -->
            <NuxtImg
              :src="post.image"
              :alt="post.title"
              class="aspect-[1.5] w-full object-cover"
            />

            <!-- Content -->
            <div class="flex flex-col gap-5 p-5">
              <div class="flex flex-col gap-2">
                <span class="text-sm font-semibold text-brand-secondary">
                  {{ post.category }}
                </span>

                <div class="flex flex-col gap-1">
                  <h3 class="text-lg font-semibold text-primary">
                    {{ post.title }}
                  </h3>

                  <p class="line-clamp-2 text-md text-tertiary">
                    {{ post.description }}
                  </p>
                </div>
              </div>

              <!-- Author -->
              <div class="flex gap-3 items-center">
                <UAvatar
                  :src="post.avatar"
                  :alt="post.author"
                  size="sm"
                />

                <div>
                  <p class="text-sm font-semibold text-primary">
                    {{ post.author }}
                  </p>
                  <time class="block text-sm text-tertiary">
                    {{ post.date }}
                  </time>
                </div>
              </div>
            </div>
          </UCard>
        </li>
      </ul>

      <!-- Mobile Button -->
      <div class="mt-12 flex flex-col gap-3 lg:hidden">
        <UButton color="primary">
          View all posts
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const blogPosts = ref([
  {
    title: 'UX review presentations',
    category: 'Design',
    description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    author: 'Olivia Rhye',
    avatar: 'https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80',
    date: '20 Jan 2026',
    image: 'https://www.untitledui.com/marketing/spirals.webp'
  },
  {
    title: 'Migrating to Linear 101',
    category: 'Product',
    description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here\'s how to get started.',
    author: 'Phoenix Baker',
    avatar: 'https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80',
    date: '19 Jan 2026',
    image: 'https://www.untitledui.com/marketing/conversation.webp'
  },
  {
    title: 'Building your API stack',
    category: 'Software Engineering',
    description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    author: 'Lana Steiner',
    avatar: 'https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80',
    date: '18 Jan 2026',
    image: 'https://www.untitledui.com/blog/two-mobile-shapes-pattern.webp'
  }
])
</script>
