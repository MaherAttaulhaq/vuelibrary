<script setup lang="ts">
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
</script>

<template>
  <section class="overflow-hidden bg-muted py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col items-start justify-between lg:flex-row">
        <div class="max-w-3xl">
          <h2
            class="text-display-sm font-semibold text-primary md:text-display-md"
          >
            Latest writings
          </h2>
          <p class="mt-4 text-lg text-muted-600 md:mt-5 md:text-xl">
            The latest news, technologies, and resources from our team.
          </p>
        </div>
        <div class="hidden gap-3 lg:flex">
          <UButton
            variant="solid"
            color="primary"
          >
            View all posts
          </UButton>
        </div>
      </div>

      <div
        class="relative mt-12 md:mt-16"
        role="region"
        aria-roledescription="carousel"
      >
        <div class="h-full w-full">
          <div class="flex max-h-full gap-6 pr-4 md:gap-8 md:pr-8">
            <div
              v-for="post in blogPosts"
              :key="post.title"
              class="min-w-0 shrink-0 grow-0 basis-full max-w-xs md:max-w-96"
            >
              <article class="flex flex-col gap-4">
                <NuxtLink
                  to="#"
                  class="overflow-hidden rounded-2xl"
                >
                  <img
                    :src="post.image"
                    :alt="post.title"
                    class="aspect-[1.5] w-full object-cover"
                  >
                </NuxtLink>
                <div class="flex flex-col gap-6">
                  <div class="flex flex-col items-start gap-2">
                    <p class="text-sm font-semibold text-brand-600">
                      {{ post.author }} • <time>{{ post.date }}</time>
                    </p>
                    <div class="flex w-full flex-col gap-1">
                      <NuxtLink
                        to="#"
                        class="flex justify-between gap-x-4 rounded-md text-lg font-semibold text-primary hover:text-brand-600"
                      >
                        {{ post.title }}
                        <Icon
                          name="lucide:arrow-up-right"
                          class="mt-0.5 size-6 shrink-0 text-muted-400"
                        />
                      </NuxtLink>
                      <p class="line-clamp-2 text-md text-muted-600">
                        {{ post.description }}
                      </p>
                    </div>
                  </div>
                  <div class="flex gap-2">
                    <UBadge
                      v-for="tag in post.tags.slice(0, 3)"
                      :key="tag"
                      variant="subtle"
                      size="sm"
                    >
                      {{ tag }}
                    </UBadge>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div class="mt-8 flex gap-4 md:gap-8">
          <UButton
            variant="ghost"
            color="muted"
            class="group flex size-12 items-center justify-center rounded-full bg-muted ring-1 ring-muted-200 transition duration-100 ease-linear hover:bg-muted-100 md:size-14"
          >
            <Icon
              name="lucide:arrow-left"
              class="size-5 text-muted-400 group-hover:text-muted-600 md:size-6"
            />
          </UButton>
          <UButton
            variant="ghost"
            color="muted"
            class="group flex size-12 items-center justify-center rounded-full bg-muted ring-1 ring-muted-200 transition duration-100 ease-linear hover:bg-muted-100 md:size-14"
          >
            <Icon
              name="lucide:arrow-right"
              class="size-5 text-muted-400 group-hover:text-muted-600 md:size-6"
            />
          </UButton>
        </div>
      </div>

      <div class="mt-12 flex flex-col gap-3 lg:hidden">
        <UButton
          variant="solid"
          color="primary"
          block
        >
          View all posts
        </UButton>
      </div>
    </div>
  </section>
</template>
