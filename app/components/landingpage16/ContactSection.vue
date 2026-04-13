<script setup lang="ts">
const contactItems = [
  {
    icon: 'lucide:smile',
    title: 'Chat to sales',
    description: 'Speak to our friendly team.',
    link: 'mailto:sales@untitledui.com',
    linkText: 'sales@untitledui.com'
  },
  {
    icon: 'lucide:message-circle',
    title: 'Chat to support',
    description: 'We\'re here to help.',
    link: 'mailto:support@untitledui.com',
    linkText: 'support@untitledui.com'
  },
  {
    icon: 'lucide:map-pin',
    title: 'Visit us',
    description: 'Visit our office HQ.',
    link: 'https://goo.gl/maps/zTXmPKVdUvCQH9Wd6',
    linkText: '100 Smith Street\nCollingwood VIC 3066 AU'
  },
  {
    icon: 'lucide:phone',
    title: 'Call us',
    description: 'Mon-Fri from 8am to 5pm.',
    link: 'tel:+1 (555) 000-0000',
    linkText: '+1 (555) 000-0000'
  }
]
</script>

<template>
  <div class="mx-auto max-w-container px-4 md:px-8">
    <hr class="h-px w-full border-none bg-muted-200 dark:bg-muted-800">
  </div>

  <section class="bg-muted py-16 md:py-24">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex w-full max-w-3xl flex-col">
        <span class="text-sm font-semibold text-primary md:text-md">Contact us</span>
        <h2 class="mt-3 text-display-sm font-semibold text-primary md:text-display-md">We&apos;d love to hear from you</h2>
        <p class="mt-4 text-lg text-muted-600 dark:text-muted-400 md:mt-5 md:text-xl">Our friendly team is always here to chat.</p>
      </div>

      <div class="mt-12 md:mt-16">
        <ul class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="item in contactItems" :key="item.title" class="flex h-full flex-col items-start bg-muted-100 p-6 dark:bg-muted-900">
            <div class="relative flex size-12 shrink-0 items-center justify-center rounded-[10px] bg-primary text-white">
              <Icon :name="item.icon" class="size-6" />
            </div>
            <h3 class="mt-12 text-lg font-semibold text-primary md:mt-16">{{ item.title }}</h3>
            <p class="mt-1 text-md text-muted-600 dark:text-muted-400">{{ item.description }}</p>
            <ULink :to="item.link" class="mt-4 whitespace-pre font-semibold text-primary hover:text-primary/80 md:mt-5">
              {{ item.linkText }}
            </ULink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
