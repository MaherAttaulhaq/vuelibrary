<template>
  <footer class="bg-muted py-12 md:pt-16">
    <div class="mx-auto max-w-container px-4 md:px-8">
      <div class="flex flex-col justify-between border-b border-border pb-8 md:pb-16 lg:flex-row">
        <div class="max-w-3xl">
          <h2 class="text-display-xs font-semibold text-primary md:text-display-sm">
            Start your 30-day free trial
          </h2>
          <p class="mt-2 text-md md:mt-4 md:text-xl">
            Join over 4,000+ startups already growing with Untitled.
          </p>
        </div>
        <div class="mt-8 flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-start lg:mt-0">
          <UButton variant="outline">Learn more</UButton>
          <UButton color="primary">Get started</UButton>
        </div>
      </div>

      <!-- Footer Navigation -->
      <div class="mt-12 flex flex-col gap-12 md:mt-16 md:gap-16 xl:flex-row">
        <div class="flex flex-col gap-6 md:w-80 md:gap-8">
          <div class="flex h-7 w-min shrink-0 items-center">
            <svg viewBox="0 0 38 38" fill="none" class="size-8">
              <rect width="38" height="38" rx="8" fill="url(#footerLogoGradient)" />
            </svg>
          </div>
          <p class="text-md">
            Design amazing digital experiences that create more happy in the world.
          </p>
        </div>

        <nav class="flex-1">
          <ul class="grid flex-1 grid-cols-2 gap-8 md:grid-cols-5">
            <li v-for="section in footerNav" :key="section.title">
              <h4 class="text-sm font-semibold text-muted-foreground">{{ section.title }}</h4>
              <ul class="mt-4 flex flex-col gap-3">
                <li v-for="link in section.links" :key="link">
                  <a href="#" class="text-sm hover:text-primary">{{ link }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Footer Bottom -->
      <div class="mt-12 flex flex-col-reverse justify-between gap-6 border-t border-border pt-8 md:mt-16 md:flex-row">
        <p class="text-sm text-muted-foreground">© 2077 Untitled UI. All rights reserved.</p>
        <div class="flex gap-4">
          <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank" class="text-muted-foreground hover:text-primary">
            <Icon :name="social.icon" class="size-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const footerNav = ref([
  {
    title: 'Product',
    links: ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases']
  },
  {
    title: 'Company',
    links: ['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact']
  },
  {
    title: 'Resources',
    links: ['Blog', 'Newsletter', 'Events', 'Help centre', 'Tutorials', 'Support']
  },
  {
    title: 'Social',
    links: ['X', 'LinkedIn', 'Facebook', 'GitHub', 'AngelList', 'Dribbble']
  },
  {
    title: 'Legal',
    links: ['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact']
  }
])

const socialLinks = ref([
  { name: 'X', icon: 'lucide:twitter', url: 'https://x.com/' },
  { name: 'LinkedIn', icon: 'lucide:linkedin', url: 'https://www.linkedin.com/' },
  { name: 'Facebook', icon: 'lucide:facebook', url: 'https://www.facebook.com/' },
  { name: 'GitHub', icon: 'lucide:github', url: 'https://github.com/' }
])
</script>
