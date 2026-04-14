<script setup lang="ts">
const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Overview', to: '#' },
      { label: 'Features', to: '#' },
      { label: 'Solutions', to: '#', badge: 'New' },
      { label: 'Tutorials', to: '#' },
      { label: 'Pricing', to: '#' },
      { label: 'Releases', to: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', to: '#' },
      { label: 'Careers', to: '#' },
      { label: 'Press', to: '#' },
      { label: 'News', to: '#' },
      { label: 'Media kit', to: '#' },
      { label: 'Contact', to: '#' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', to: '#' },
      { label: 'Newsletter', to: '#' },
      { label: 'Events', to: '#' },
      { label: 'Help centre', to: '#' },
      { label: 'Tutorials', to: '#' },
      { label: 'Support', to: '#' }
    ]
  },
  {
    title: 'Social',
    links: [
      { label: 'X', to: '#' },
      { label: 'LinkedIn', to: '#' },
      { label: 'Facebook', to: '#' },
      { label: 'GitHub', to: '#' },
      { label: 'AngelList', to: '#' },
      { label: 'Dribbble', to: '#' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms', to: '#' },
      { label: 'Privacy', to: '#' },
      { label: 'Cookies', to: '#' },
      { label: 'Licenses', to: '#' },
      { label: 'Settings', to: '#' },
      { label: 'Contact', to: '#' }
    ]
  }
]

const socialLinks = [
  { name: 'X', icon: 'lucide:twitter', href: 'https://x.com/' },
  {
    name: 'LinkedIn',
    icon: 'lucide:linkedin',
    href: 'https://www.linkedin.com/'
  },
  {
    name: 'Facebook',
    icon: 'lucide:facebook',
    href: 'https://www.facebook.com/'
  },
  { name: 'GitHub', icon: 'lucide:github', href: 'https://github.com/' },
  { name: 'AngelList', icon: 'lucide:briefcase', href: 'https://angel.co/' },
  { name: 'Dribbble', icon: 'lucide:dribbble', href: 'https://dribbble.com/' }
]
</script>

<template>
  <footer class="bg-muted">
    <div class="mx-auto max-w-container px-4 py-12 md:px-8 md:pt-16">
      <div class="flex flex-col gap-12 md:gap-16 xl:flex-row">
        <div class="flex flex-col gap-6 md:w-80 md:gap-8">
          <div
            class="flex items-center justify-start overflow-visible h-7 w-min shrink-0"
          >
            <svg
              viewBox="0 0 38 38"
              fill="none"
              class="size-8 origin-center scale-[1.2] aspect-square h-full w-auto shrink-0"
            >
              <path
                d="M3 14.8C3 10.3196 3 8.07937 3.87195 6.36808C4.63893 4.86278 5.86278 3.63893 7.36808 2.87195C9.07937 2 11.3196 2 15.8 2H22.2C26.6804 2 28.9206 2 30.6319 2.87195C32.1372 3.63893 33.3611 4.86278 34.1281 6.36808C35 8.07937 35 10.3196 35 14.8V21.2C35 25.6804 35 27.9206 34.1281 29.6319C33.3611 31.1372 32.1372 32.3611 30.6319 33.1281C28.9206 34 26.6804 34 22.2 34H15.8C11.3196 34 9.07937 34 7.36808 33.1281C5.86278 32.3611 4.63893 31.1372 3.87195 29.6319C3 27.9206 3 25.6804 3 21.2V14.8Z"
                fill="currentColor"
              />
            </svg>
            <div class="aspect-[0.3] h-full" />
            <span class="text-xl font-bold text-primary">Untitled UI</span>
          </div>
          <p class="text-md text-muted-600 dark:text-muted-400">
            Design amazing digital experiences that create more happy in the
            world.
          </p>
        </div>

        <nav class="flex-1">
          <ul class="grid flex-1 grid-cols-2 gap-8 md:grid-cols-5">
            <li
              v-for="category in footerLinks"
              :key="category.title"
            >
              <h4 class="text-sm font-semibold text-muted-400">
                {{ category.title }}
              </h4>
              <ul class="mt-4 flex flex-col gap-3">
                <li
                  v-for="link in category.links"
                  :key="link.label"
                >
                  <ULink
                    :to="link.to"
                    class="text-muted-500 hover:text-muted-700 dark:text-muted-400 dark:hover:text-muted-200 text-sm"
                  >
                    {{ link.label }}
                    <UBadge
                      v-if="link.badge"
                      size="xs"
                      class="ml-1"
                    >{{
                      link.badge
                    }}</UBadge>
                  </ULink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <div
        class="mt-12 flex flex-col-reverse justify-between gap-6 border-t border-muted-200 dark:border-muted-800 pt-8 md:mt-16 md:flex-row"
      >
        <p class="text-sm text-muted-400 dark:text-muted-500">
          © 2077 Untitled UI. All rights reserved.
        </p>
        <ul class="flex gap-6">
          <li
            v-for="social in socialLinks"
            :key="social.name"
          >
            <a
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-muted-400 hover:text-muted-600 dark:text-muted-500 dark:hover:text-muted-300"
            >
              <Icon
                :name="social.icon"
                class="size-5"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
