<template>
  <footer class="border-t border-border bg-muted py-12 md:py-16">
    <div class="mx-auto max-w-[1560px] px-4 md:px-8">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Icon name="heroicons:cube-transparent-20-solid" class="h-5 w-5 text-white" />
            </div>
            <span class="text-lg font-semibold text-primary">Untitled UI</span>
          </div>
          <p class="text-sm">
            Design amazing digital experiences that create more happy in the world.
          </p>
        </div>
        <div
          v-for="section in footerLinks"
          :key="section.title"
          class="flex flex-col gap-4"
        >
          <h3 class="font-semibold text-primary">{{ section.title }}</h3>
          <ul class="flex flex-col gap-2">
            <li
              v-for="link in section.links"
              :key="link.name"
            >
              <NuxtLink
                :to="link.href"
                class="text-sm hover:text-primary"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-8 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-sm">
          © 2024 Untitled UI. All rights reserved.
        </p>
        <div class="flex gap-4">
          <NuxtLink
            v-for="social in socialLinks"
            :key="social.name"
            :to="social.href"
            class="hover:text-primary"
          >
            <component :is="social.icon" class="h-5 w-5" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const footerLinks = [
  {
    title: 'Product',
    links: [
      { name: 'Overview', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Solutions', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Releases', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'News', href: '#' },
      { name: 'Media kit', href: '#' },
      { name: 'Contact', href: '#' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '#' },
      { name: 'Newsletter', href: '#' },
      { name: 'Events', href: '#' },
      { name: 'Help centre', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Support', href: '#' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Terms', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'Licenses', href: '#' },
      { name: 'Settings', href: '#' },
      { name: 'Contact', href: '#' }
    ]
  }
]

const socialLinks = [
  { name: 'Twitter', href: '#', icon: 'heroicons:chat-bubble-oval-left-20-solid' },
  { name: 'LinkedIn', href: '#', icon: 'heroicons:chat-bubble-oval-left-20-solid' },
  { name: 'Facebook', href: '#', icon: 'heroicons:chat-bubble-oval-left-20-solid' },
  { name: 'Instagram', href: '#', icon: 'heroicons:chat-bubble-oval-left-20-solid' },
  { name: 'GitHub', href: '#', icon: 'heroicons:chat-bubble-oval-left-20-solid' }
]
</script>